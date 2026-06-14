import { ref } from 'vue'

export const currentVideo = ref('')
export const isPlaying = ref(false)

export function play(src: string) {
    currentVideo.value = src
    isPlaying.value = true
}

export function stop() {
    currentVideo.value = ''
    isPlaying.value = false
}