<template>
  <Layout>
    <template #doc-before>
      <Breadcrumb/>
    </template>
    <template #layout-bottom>
      <div class="moe-banner">
        <a href="https://github.com/denpa-song-archive/denpa-song">
          <img src="/assets/banner.png" />
        </a>
      </div>
      <FloatingPlayer />
    </template>
  </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { watch, onMounted } from 'vue'
import Breadcrumb from './Breadcrumb.vue'
import FloatingPlayer from './FloatingPlayer.vue'

const { Layout } = DefaultTheme
const { page } = useData()

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
  
  if (path?.startsWith('about')) {
    document.body.classList.add('category-about')
  } else if (path?.startsWith('resources')) {
    document.body.classList.add('category-resources')
  } else if (path?.startsWith('bodies')) {
    document.body.classList.add('category-bodies')
  } else if (path?.startsWith('language')) {
    document.body.classList.add('category-language')
  } else if (path?.startsWith('networking')) {
    document.body.classList.add('category-networking')
  } else if (path?.startsWith('misc')) {
    document.body.classList.add('category-misc')
  }
}

onMounted(() => {
  const path = page.value.relativePath
  setCategoryClass(path)
})

watch(() => page.value.relativePath, (path) => {
  setCategoryClass(path)
})
</script>