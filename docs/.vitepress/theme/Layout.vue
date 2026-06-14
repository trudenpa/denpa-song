<script setup>
import DefaultTheme from 'vitepress/theme'
import Breadcrumb from './components/Breadcrumb.vue'
import FloatingPlayer from './components/FloatingPlayer.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #doc-before>
      <Breadcrumb/>
    </template>

    <template #nav-bar-content-after>
      <a class="moe-banner" href="https://example.com">
        <img src="/assets/banner.png" />
      </a>
    </template>

    <template #layout-bottom>
      <FloatingPlayer />
    </template>
  </Layout>
</template>