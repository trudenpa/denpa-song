<script setup>
import { ref, watch, nextTick } from 'vue'
import { currentVideo, isPlaying, stop } from '../playerState'

const videoRef = ref(null)

watch(currentVideo, async (src) => {
  if (!src) return

  await nextTick()

  const video = videoRef.value
  if (!video) return

  video.load()
  video.play().catch(() => {})
})
</script>

<template>
  <div v-if="isPlaying" class="floating-player">
    
    <div class="header">
      <span>Now Playing</span>
      <button @click="stop">✕</button>
    </div>

    <video ref="videoRef"
      controls
      :src="currentVideo"
    />
  </div>
</template>