<script setup>
import { play } from '../playerState'
import { withBase } from 'vitepress'

const props = defineProps({
  src: String,
  title: String
})

const videoSrc = withBase(props.src)

console.log('VideoLink loaded')

</script>
<template>
  <button class="video-link" @click="play(videoSrc)">
    Play
  </button>
</template>