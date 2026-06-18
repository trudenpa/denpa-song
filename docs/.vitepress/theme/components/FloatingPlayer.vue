<template>
  <div v-if="isPlaying" class="floating-player">
    <div class="header">
      <span>Now Playing</span>
      <button @click="stop">✕</button>
    </div>
    <video ref="videoRef" controls :src="currentVideo" />
  </div>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'
import { currentVideo, isPlaying, stop } from '../composables/playerState'

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

<style scoped>
.floating-player {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 320px;
  color: var(--vp-c-text-2);
  z-index: 9999;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, .1) !important;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
}

.floating-player video {
  width: 100%;
  display: block;
}

.floating-player .header {
  display: flex;
  justify-content: space-between;
  background-color: transparent !important;
  padding: 6px 10px;
  font-size: 12px;
  background: var(--vp-c-divider);
  opacity: 0.7;
}

.floating-player button {
  background: none;
  border: none;
  color: var(--vp-c-text-2);
  cursor: pointer;
}

/* Mobile */
@media (max-width: 768px) {
  .floating-player {
    width: 280px;
    bottom: 10px;
    right: 10px;
  }
}

@media (max-width: 480px) {
  .floating-player {
    width: 240px;
    bottom: 5px;
    right: 5px;
  }
}
</style>