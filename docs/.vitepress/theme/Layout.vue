<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { watch } from 'vue'
import Breadcrumb from './components/Breadcrumb.vue'
import FloatingPlayer from './components/FloatingPlayer.vue'

const { Layout } = DefaultTheme
const { page } = useData()

// Add a class to body based on the current route
watch(() => page.value.relativePath, (path) => {
  if (typeof document !== 'undefined') {
    // Remove existing category classes
    document.body.classList.remove(
      'category-about', 
      'category-resources', 
      'category-bodies', 
      'category-language', 
      'category-networking', 
      'category-misc'
    )
    
    // Add new category class based on the route
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
})
</script>

<template>
  <Layout>
    <template #doc-before>
      <Breadcrumb/>
    </template>

    <template #nav-bar-content-after>
      <a class="moe-banner" href="https://github.com/denpa-song-archive/denpa-song">
        <img src="/assets/banner.png" />
      </a>
    </template>

    <template #layout-bottom>
      <FloatingPlayer />
    </template>
  </Layout>
</template>