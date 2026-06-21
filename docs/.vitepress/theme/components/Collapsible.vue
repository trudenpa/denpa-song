<template>
  <div class="custom-collapsible" :class="{ open: isOpen }">
    <button class="collapsible-header" @click="toggle">
      <span class="collapsible-icon">{{ isOpen ? '▾' : '▸' }}</span>
      <span class="collapsible-title"><slot name="title">{{ title }}</slot></span>
      <img src="/assets/misc/icon.png" class="collapsible-decoration" alt="" />
    </button>
    <div class="collapsible-body" v-show="isOpen">
      <div class="collapsible-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Click to expand'
  },
  defaultOpen: {
    type: Boolean,
    default: false
  }
})

const isOpen = ref(props.defaultOpen)

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.custom-collapsible {
  border: 1px solid var(--vp-c-divider);
  margin: 1rem 0;
  background: var(--vp-c-bg-soft);
  overflow: hidden;
  transition: all 0.2s ease;
}

.custom-collapsible:hover {
  border-color: var(--vp-c-brand-1);
}

.collapsible-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 6px 6px;
  background: var(--vp-c-bg-soft);
  border: none;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  transition: background 0.2s ease;
  text-align: left;
  position: relative;
  z-index: 30;
}

.collapsible-header:hover {
  background: var(--vp-c-bg);
}

.collapsible-icon {
  display: inline-block;
  font-size: 0.8rem;
  color: var(--vp-c-brand-1);
  transition: transform 0.2s ease;
  width: 1.2rem;
  text-align: center;
  flex-shrink: 0;
}

.collapsible-title {
  flex: 1;
}

.collapsible-decoration {
  width: 40px;
  height: 40px;
  object-fit: contain;
  opacity: 0.8;
  flex-shrink: 0;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg);
  padding: 2px;
}

.custom-collapsible.open .collapsible-icon {
  transform: rotate(0deg);
}

.collapsible-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.custom-collapsible.open .collapsible-body {
  max-height: 10000px;
}

.collapsible-content {
  padding: 0px 16px 0px 16px;
  border-top: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .collapsible-header {
    padding: 4px 4px;
    font-size: 0.9rem;
  }

  .collapsible-content {
    padding: 0px 12px 0px 12px;
    font-size: 0.9rem;
    line-height: 1.4
  }

  .collapsible-decoration {
    width: 40px;
    height: 40px;
  }
}
</style>