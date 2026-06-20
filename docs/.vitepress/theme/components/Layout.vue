<template>
  <Layout>

    <template #doc-before>
      <Breadcrumb />
    </template>

    <template #layout-bottom>
      <FloatingPlayer />
    </template>

  </Layout>

  <Mascot />

</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData, useRouter } from 'vitepress'
import { watch, onMounted, onBeforeUnmount, nextTick } from 'vue'
import Breadcrumb from './Breadcrumb.vue'
import FloatingPlayer from './FloatingPlayer.vue'
import Mascot from './Mascot.vue'

const { Layout } = DefaultTheme
const { page } = useData()
const router = useRouter()

let scrollListener = null
let titleElement = null
let sidebarElement = null
let observer = null
let savedScrollPosition = 0

function setCategoryClass(path) {
  if (typeof document === 'undefined') return

  document.body.classList.remove(
    'category-about',
    'category-resources',
    'category-bodies',
    'category-language',
    'category-networking',
    'category-misc'
  )

  const isSubpage = (section) =>
    path?.startsWith(`${section}/`) &&
    path !== `${section}/index.md`

  if (isSubpage('about')) {
    document.body.classList.add('category-about')
  } else if (isSubpage('resources')) {
    document.body.classList.add('category-resources')
  } else if (isSubpage('bodies')) {
    document.body.classList.add('category-bodies')
  } else if (isSubpage('language')) {
    document.body.classList.add('category-language')
  } else if (isSubpage('networking')) {
    document.body.classList.add('category-networking')
  } else if (isSubpage('misc')) {
    document.body.classList.add('category-misc')
  }
}

function handleSidebarScroll() {
  if (!sidebarElement || !titleElement) return
  
  const scrollTop = sidebarElement.scrollTop
  const fadeStart = 0
  const fadeEnd = 80
  
  const progress = Math.min(1, (scrollTop - fadeStart) / (fadeEnd - fadeStart))
  const opacity = Math.max(0, 1 - progress)
  
  titleElement.style.opacity = opacity
  titleElement.style.transform = `translateY(${progress * -8}px)`
}

function saveSidebarPosition() {
  const sidebar = document.querySelector('.VPSidebar')
  if (sidebar) {
    savedScrollPosition = sidebar.scrollTop
    sessionStorage.setItem('sidebar-scroll', savedScrollPosition.toString())
  }
}

function restoreSidebarPosition() {
  const saved = sessionStorage.getItem('sidebar-scroll')
  if (!saved) return
  
  const restore = () => {
    const sidebar = document.querySelector('.VPSidebar')
    if (sidebar) {
      sidebar.scrollTop = Number(saved)
    }
  }
  
  requestAnimationFrame(() => {
    restore()
    setTimeout(() => {
      const sidebar = document.querySelector('.VPSidebar')
      if (sidebar && sidebar.scrollTop !== Number(saved)) {
        sidebar.scrollTop = Number(saved)
      }
    }, 100)
  })
}

function setupScrollListener() {
  if (scrollListener && sidebarElement) {
    sidebarElement.removeEventListener('scroll', scrollListener)
    scrollListener = null
  }
  
  sidebarElement = document.querySelector('.VPSidebar')
  titleElement = document.querySelector('.VPNavBarTitle')
  
  if (sidebarElement && titleElement) {
    scrollListener = () => {
      handleSidebarScroll()
      saveSidebarPosition()
    }
    sidebarElement.addEventListener('scroll', scrollListener)
    handleSidebarScroll()
  }
}

function resetTitleVisibility() {
  titleElement = document.querySelector('.VPNavBarTitle')
  if (titleElement) {
    titleElement.style.opacity = '1'
    titleElement.style.transform = 'translateY(0px)'
  }
  
  sidebarElement = document.querySelector('.VPSidebar')
  if (sidebarElement) {
    sidebarElement.scrollTop = 0
  }
}

watch(() => router.route.path, () => {
  saveSidebarPosition()
  
  nextTick(() => {
    resetTitleVisibility()
    setupScrollListener()
    const path = page.value.relativePath
    setCategoryClass(path)
    restoreSidebarPosition()
  })
})

watch(() => page.value.relativePath, (newPath) => {
  saveSidebarPosition()
  
  nextTick(() => {
    resetTitleVisibility()
    setupScrollListener()
    setCategoryClass(newPath)
    restoreSidebarPosition()
  })
})

onMounted(() => {
  if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual'
  }
  
  const path = page.value.relativePath
  setCategoryClass(path)
  resetTitleVisibility()
  setupScrollListener()
  
  restoreSidebarPosition()

  observer = new MutationObserver(() => {
    const sidebar = document.querySelector('.VPSidebar')
    if (sidebar && sidebar !== sidebarElement) {
      setupScrollListener()
    }
  })
  observer.observe(document.body, {
    childList: true,
    subtree: true
  })
})

onBeforeUnmount(() => {
  if (scrollListener && sidebarElement) {
    sidebarElement.removeEventListener('scroll', scrollListener)
    scrollListener = null
  }
  if (observer) {
    observer.disconnect()
  }
})
</script>