import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives
} from 'unocss'

export default defineConfig({
  safelist: [
    'i-lucide:badge-info',
    'i-lucide:book-marked',
    'i-lucide:book-open-text',
    'i-lucide:book-search',
    'i-lucide:sparkles',
    'i-lucide:letter-text',

    'i-lucide:book-open',
    'i-lucide:file-user',
    'i-lucide:file-heart',
    'i-lucide:book-heart',
    'i-lucide:book-headphones',
    'i-lucide:monitor-play',
    'i-lucide:download',
    'i-lucide:twitter',
    'i-lucide:file-spreadsheet',
    'i-lucide:file-search-corner',
    'i-lucide:file-box',
    'i-lucide:messages-square',

    'i-lucide:headphones',

    'i-lucide:user',
    'i-lucide:user-round-search',
    'i-lucide:building-2',
    'i-lucide:disc-3',
    'i-lucide:briefcase-business',
    'i-lucide:house-heart',
    'i-lucide:users',
    'i-lucide:circle-question-mark',
    'i-lucide:mic-vocal',
    'i-lucide:keyboard-music',
    'i-lucide:heart-handshake',

    // 'i-lucide:user-star',
    // 'i-lucide:user-pen',
    // 'i-lucide:user-cog',

    'i-lucide:globe',
    'i-lucide:circle-dashed',
    'i-lucide:twitter',
    'i-lucide:house-heart',

    'i-lucide:drama',
    'i-lucide:panda',
    'i-lucide:paintbrush',
    'i-lucide:list-music',

    'i-lucide:beer',
    'i-lucide:star',
    'i-lucide:sprout',
    'i-lucide:gamepad-2',
    'i-lucide:rabbit',
    'i-lucide:bar-chart-big',
    'i-lucide:graduation-cap',
    'i-lucide:image',
    'i-lucide:venetian-mask'
  ],
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        display: 'inline-block',
        'vertical-align': '-0.125em',
        'min-width': '1.2rem'
      },
      warn: true,
    })
  ],
  transformers: [transformerDirectives()]
})