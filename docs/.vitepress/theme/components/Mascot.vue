<template>
  <div class="mascot-wrapper-outer" ref="outerWrapperRef">
    <div class="mascot-container" ref="containerRef" :style="containerStyle">
      <div class="window-frame" ref="windowFrameRef" @mousedown="startDrag" @touchstart="startDragTouch">
        <div class="window-titlebar" ref="titleBarRef">
          <div class="window-controls" @mousedown.stop @touchstart.stop>
            <button class="window-control-circle" @click="onCircleClick" />
            <button class="window-control-triangle" @click="onTriangleClick" />
            <button class="window-control-x" @click="onXClick" />
          </div>
        </div>
        <div class="bedroom-wrapper" ref="bedroomWrapperRef">
          <div class="bedroom-bg" />
        </div>
        <div class="mascot-wrapper" ref="mascotWrapperRef">
          <video ref="idle" class="mascot" muted playsinline preload="auto" />
          <video ref="hover" class="mascot layer" muted playsinline preload="auto" />
          <video ref="click" class="mascot layer" muted playsinline preload="auto" />
          <video ref="scroll" class="mascot layer" muted playsinline preload="auto" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick, reactive, computed } from 'vue'

const idle = ref(null)
const hover = ref(null)
const click = ref(null)
const scroll = ref(null)
const mascotWrapperRef = ref(null)
const bedroomWrapperRef = ref(null)
const containerRef = ref(null)
const titleBarRef = ref(null)
const windowFrameRef = ref(null)
const outerWrapperRef = ref(null)

let lock = false
let current = 'idle'
let scrollTimeout = null
let isScrolling = false
let isMinimized = false
let isMobile = window.innerWidth <= 768

const dragState = reactive({
  isDragging: false,
  startX: 0,
  startY: 0,
  currentX: 0,
  currentY: 0,
  offsetX: 0,
  offsetY: 0
})

const videos = {}

const containerStyle = computed(() => ({
  transform: `translate(${dragState.currentX}px, ${dragState.currentY}px)`,
  transition: dragState.isDragging ? 'none' : 'transform 0.2s ease'
}))

const startDrag = (e) => {
  if (e.target.closest('.window-controls')) return
  
  dragState.isDragging = true
  dragState.startX = e.clientX
  dragState.startY = e.clientY
  dragState.offsetX = dragState.currentX
  dragState.offsetY = dragState.currentY
  
  document.addEventListener('mousemove', onDrag)
  document.addEventListener('mouseup', stopDrag)
  
  e.preventDefault()
}

const startDragTouch = (e) => {
  if (e.target.closest('.window-controls')) return
  
  const touch = e.touches[0]
  dragState.isDragging = true
  dragState.startX = touch.clientX
  dragState.startY = touch.clientY
  dragState.offsetX = dragState.currentX
  dragState.offsetY = dragState.currentY
  
  document.addEventListener('touchmove', onDragTouch, { passive: false })
  document.addEventListener('touchend', stopDragTouch)
  
  e.preventDefault()
}

const onDrag = (e) => {
  if (!dragState.isDragging) return
  
  const dx = e.clientX - dragState.startX
  const dy = e.clientY - dragState.startY
  
  dragState.currentX = dragState.offsetX + dx
  dragState.currentY = dragState.offsetY + dy
}

const onDragTouch = (e) => {
  if (!dragState.isDragging) return
  
  const touch = e.touches[0]
  const dx = touch.clientX - dragState.startX
  const dy = touch.clientY - dragState.startY
  
  dragState.currentX = dragState.offsetX + dx
  dragState.currentY = dragState.offsetY + dy
  
  e.preventDefault()
}

const stopDrag = () => {
  dragState.isDragging = false
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('mouseup', stopDrag)
}

const stopDragTouch = () => {
  dragState.isDragging = false
  document.removeEventListener('touchmove', onDragTouch)
  document.removeEventListener('touchend', stopDragTouch)
}

const onCircleClick = () => {
  console.log('🟢 Circle clicked - Minimize/Restore')
  const bedroomWrapper = bedroomWrapperRef.value
  const mascotWrapper = mascotWrapperRef.value
  const container = containerRef.value
  const windowFrame = windowFrameRef.value
  
  if (!bedroomWrapper || !mascotWrapper || !windowFrame) return
  
  isMinimized = !isMinimized
  
  if (isMinimized) {
    bedroomWrapper.style.transition = 'all 0.3s ease'
    mascotWrapper.style.transition = 'all 0.3s ease'
    
    bedroomWrapper.style.opacity = '0'
    bedroomWrapper.style.transform = 'scale(0.95)'
    mascotWrapper.style.opacity = '0'
    mascotWrapper.style.transform = 'scale(0.95)'
    
    setTimeout(() => {
      bedroomWrapper.style.display = 'none'
      mascotWrapper.style.display = 'none'
      if (container) {
        container.style.height = '26px'
        container.style.transition = 'height 0.3s ease'
      }
    }, 300)
  } else {
    bedroomWrapper.style.display = 'block'
    mascotWrapper.style.display = 'block'
    
    if (container) {
      container.style.height = '200px'
      container.style.transition = 'height 0.3s ease'
    }
    
    nextTick(() => {
      bedroomWrapper.style.transition = 'opacity 0.3s ease, transform 0.3s ease'
      mascotWrapper.style.transition = 'opacity 0.3s ease, transform 0.3s ease'
      
      bedroomWrapper.style.opacity = '1'
      bedroomWrapper.style.transform = 'scale(1)'
      mascotWrapper.style.opacity = '1'
      mascotWrapper.style.transform = 'scale(1)'
    })
  }
}

const onXClick = () => {
  console.log('❌ X clicked - Close')
  const container = document.querySelector('.mascot-container')
  if (container) {
    container.style.transition = 'all 0.4s ease'
    container.style.transform = 'scale(0.5)'
    container.style.opacity = '0'
    setTimeout(() => {
      container.style.display = 'none'
    }, 400)
  }
}

const setState = (state) => {
  if (lock && state !== 'click') return
  if (current === state) return

  current = state

  for (const key in videos) {
    const v = videos[key]
    if (!v) continue

    if (key === state) {
      v.style.opacity = '1'
      if (state !== 'scroll' || !isScrolling) {
        v.currentTime = 0
      }
      v.play().catch(() => {})
    } else {
      v.style.opacity = '0'
      v.pause()
    }
  }
}

let lastMouseX = 0
let lastMouseY = 0

const isInteractiveElement = (el) => {
  if (!el) return false
  
  return !!(
    el?.closest('a') ||
    el?.closest('button') ||
    el?.closest('.VPLink') ||
    el?.closest('.VPSidebarItem') ||
    el?.closest('.card') ||
    el?.closest('.sidebar-link') ||
    el?.closest('.nav-link') ||
    el?.closest('[role="link"]') ||
    el?.closest('[role="button"]') ||
    el?.closest('.link') ||
    el?.closest('.router-link-active') ||
    el?.closest('.router-link-exact-active')
  )
}

const checkIfStillHovering = () => {
  const el = document.elementFromPoint(lastMouseX, lastMouseY)
  return isInteractiveElement(el)
}

const triggerClick = (e) => {
  if (lock) return

  const el = document.elementFromPoint(e.clientX, e.clientY)
  const isInteractive = isInteractiveElement(el)
  
  if (!isInteractive) return

  lock = true
  setState('click')

  setTimeout(() => {
    lock = false
    setTimeout(() => {
      if (checkIfStillHovering()) {
        setState('hover')
      } else {
        setState('idle')
      }
    }, 50)
  }, 650)
}

let hoverTimeout = null
let isOverInteractive = false

const handleMove = (e) => {
  lastMouseX = e.clientX
  lastMouseY = e.clientY
  
  if (lock) return

  const el = document.elementFromPoint(e.clientX, e.clientY)
  const isInteractive = isInteractiveElement(el)

  if (isInteractive) {
    if (!isOverInteractive) {
      isOverInteractive = true
      setState('hover')
    }
    clearTimeout(hoverTimeout)
  } else {
    isOverInteractive = false
    clearTimeout(hoverTimeout)
    hoverTimeout = setTimeout(() => {
      if (!isOverInteractive && !lock) {
        if (!checkIfStillHovering()) {
          setState('idle')
        }
      }
    }, 100)
  }
}

const onScroll = () => {
  if (lock) return

  clearTimeout(window.__mascotScroll)

  if (!isScrolling) {
    isScrolling = true
    setState('scroll')
  }

  window.__mascotScroll = setTimeout(() => {
    isScrolling = false
    if (isOverInteractive) {
      setState('hover')
    } else {
      setState('idle')
    }
  }, 400)
}

const handleResize = () => {
  isMobile = window.innerWidth <= 768
  const wrapper = outerWrapperRef.value
  if (wrapper) {
    if (isMobile) {
      wrapper.style.transform = 'scale(0.65)'
      wrapper.style.transformOrigin = 'bottom right'
    } else {
      wrapper.style.transform = 'scale(1)'
      wrapper.style.transformOrigin = 'center center'
    }
  }
}

onMounted(() => {
  videos.idle = idle.value
  videos.hover = hover.value
  videos.click = click.value
  videos.scroll = scroll.value

  const sources = {
    idle: '/assets/sprites/idle.webm',
    hover: '/assets/sprites/hover.webm',
    click: '/assets/sprites/click.webm',
    scroll: '/assets/sprites/scroll.webm'
  }

  for (const key in videos) {
    const v = videos[key]
    if (!v) continue
    v.src = sources[key]
    v.loop = true
    v.style.opacity = key === 'idle' ? '1' : '0'
    v.play().catch(() => {})
  }

  setState('idle')

  handleResize()

  document.addEventListener('mousemove', handleMove)
  document.addEventListener('click', triggerClick, true)
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  document.removeEventListener('mousemove', handleMove)
  document.removeEventListener('click', triggerClick, true)
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', handleResize)
  document.removeEventListener('mousemove', onDrag)
  document.removeEventListener('mouseup', stopDrag)
  document.removeEventListener('touchmove', onDragTouch)
  document.removeEventListener('touchend', stopDragTouch)

  clearTimeout(window.__mascotScroll)
  clearTimeout(hoverTimeout)
})
</script>

<style scoped>
/* ========== WINDOW ========== */

.window-frame {
  position: relative;
  width: 100%;
  height: 100%;
  background: #1a1a2e;
  border-radius: 8px;
  border: 1px solid rgba(43, 34, 55, 0.1);
  box-shadow: 0 8px 32px rgba(229, 136, 252, 0.223);
  overflow: hidden;
  pointer-events: auto;
  cursor: grab;
}

.window-frame:active {
  cursor: grabbing;
}

.window-titlebar {
  position: relative;
  height: 20px;
  background: #1b1434e6;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 12px;
  z-index: 10;
  pointer-events: none;
  gap: 8px;
  user-select: none;
  -webkit-user-select: none;
}

.window-controls {
  display: flex;
  gap: 10px;
  pointer-events: auto;
  order: 1;
  align-items: center;
  margin-top: 5px;
  cursor: default;
}

.window-control-circle {
  width: 7.5px;
  height: 7.5px;
  border-radius: 50%;
  background: #6be8a9;
  display: inline-block;
  flex-shrink: 0;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: transform 0.2s ease, filter 0.2s ease;
}

.window-control-circle:hover {
  transform: scale(1.3);
  filter: brightness(1.2);
}

.window-control-triangle {
  width: 10px;
  height: 8px;
  margin-top: -1px;
  background: #8a54d7;
  display: inline-block;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  flex-shrink: 0;
  border-radius: 2px 10px 3px 3px;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: transform 0.2s ease, filter 0.2s ease;
}

.window-control-triangle:hover {
  transform: scale(1.3);
  filter: brightness(1.2);
}

.window-control-x {
  width: 9px;
  height: 7.5px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  border-radius: 4px;
  border: none;
  padding: 0;
  background: transparent;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.window-control-x:hover {
  transform: scale(1.3);
}

.window-control-x::before,
.window-control-x::after {
  content: '';
  position: absolute;
  width: 10px;
  height: 3px;
  background: #c8649b;
  border-radius: 1px;
  transition: background 0.2s ease;
}

.window-control-x:hover::before,
.window-control-x:hover::after {
  background: #ff5f56;
}

.window-control-x::before {
  transform: rotate(45deg);
}

.window-control-x::after {
  transform: rotate(-45deg);
}

/* ========== BEDROOM ========== */

.bedroom-wrapper {
  position: absolute;
  left: 2.5px;
  right: 2.5px;
  bottom: 2.5px;
  top: 22px;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
  background: #1a1a2e;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.bedroom-bg {
  width: 100%;
  height: 128%;
  background: url('/assets/sprites/bedroom.webp') no-repeat center;
  background-size: cover;
  pointer-events: none;
  background-position: -65px -35px;
  opacity: 0.9;
  filter: hue-rotate(-340deg) saturate(1.4) brightness(0.9);
}

/* ========== MASCOT ========== */

.mascot-wrapper {
  position: absolute;
  top: 20px;
  left: 4px;
  right: 4px;
  bottom: 4px;
  pointer-events: none;
  z-index: 1;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.mascot-wrapper-outer {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 9999;
  pointer-events: none;
  transition: transform 0.3s ease;
}

.mascot-container {
  width: 320px;
  height: 200px;
  pointer-events: none;
  transition: all 0.4s ease;
  cursor: default;
}

.mascot {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -61%);
  width: 200%;
  height: 200%;
  object-fit: contain;
  pointer-events: none;
  cursor: default;
  opacity: 0;
  max-width: 160%;
}

.layer {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -61%);
}

@media (max-width: 768px) {
  .mascot-wrapper-outer {
    display: none !important;
  }
}
</style>