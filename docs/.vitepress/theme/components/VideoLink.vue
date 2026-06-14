<script setup>
import { play } from '../playerState'

defineProps({
  src: String,
  title: String
})

console.log('VideoLink loaded')
</script>

<template>
  <button class="video-link" @click="play(src)">
    Play
  </button>
</template>