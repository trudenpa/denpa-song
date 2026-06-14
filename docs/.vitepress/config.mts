import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  vite: {
    plugins: [
      UnoCSS({
        configFile: './uno.config.ts'
      })
    ]
  },
  base: "/denpa-song/",
  cleanUrls: true,
  title: "denpa song ♪〜",
  description: "resources",
  head: [['link', { rel: 'icon', href: '/assets/icon.ico' }]],
  themeConfig: {
    logo: '/assets/icon2.png',
    outline: {
      level: [1, 3],
      label: 'ｷﾀ━━(ﾟ∀ﾟ)━━!!!!.'
    },

    search: {
      provider: 'local',
      options: {
        miniSearch: {
          searchOptions: {
            fuzzy: 0.2,
            prefix: true,
            boost: { title: 4, text: 2, headings: 1 }
          }
        },
        translations: {
          button: {
            buttonText: 'Search Denpa Archive',
            buttonAriaLabel: 'Search'
          },
          modal: {
            noResultsText: 'No results found',
            resetButtonTitle: 'Reset search',
            footer: {
              selectText: 'to select',
              navigateText: 'to navigate',
              closeText: 'to close'
            }
          }
        }
      }
    },

    sidebar: [
      {
        text: '<span class="i-lucide:badge-info"></span> About',
        collapsed: false,
        link: '/about/',
        items: [
          {
            text: '<span class="i-lucide:book-marked"></span> Glossary',
            collapsed: true,
            link: '/about/glossary'
          },
          {
            text: '<span class="i-lucide:book-open-text"></span> 🚧 Description',
            collapsed: false,
            link: '/about/description'
          },
          {
            text: '<span class="i-lucide:book-search"></span> 🚧 Etymology',
            collapsed: false,
            link: '/about/etymology'
          },
        ]
      },
      {
        text: '<span class="i-lucide:book-text"></span> Resources',
        collapsed: false,
        link: '/resources/',
        items: [
          {
            text: '<span class="i-lucide:file-search-corner"></span> Portals',
            link: '/resources#portals'
          },
          {
            text: '<span class="i-lucide:book-marked"></span> Glossary',
            link: '/resources#glossary'
          },
          {
            text: '<span class="i-lucide:book-headphones"></span> Libraries',
            link: '/resources#libraries'
          },
          {
            text: '<span class="i-lucide:file-user"></span> Blogposts',
            collapsed: true,
            link: '/resources#blogposts'
          },
          {
            text: '<span class="i-lucide:file-heart"></span> Fanpages',
            link: '/resources#fanpages'
          },
          {
            text: '<span class="i-lucide:messages-square"></span> Interviews',
            link: '/resources#interviews'
          },
          {
            text: '<span class="i-lucide:file-box"></span> Projects',
            link: '/resources#projects'
          },
          {
            text: '<span class="i-lucide:download"></span> Downloads',
            link: '/resources#downloads'
          },
          {
            text: '<span class="i-lucide:monitor-play"></span> Streaming',
            link: '/resources#streaming'
          },
          {
            text: '<span class="i-lucide:file-spreadsheet"></span> Boards',
            collapsed: true,
            link: '/resources#boards'
          },
        ]
      },
      {
        text: '<span class="i-lucide:user"></span> Bodies',
        collapsed: false,
        link: '/bodies/',
        items: [
          {
            text: '<span class="i-lucide:user-round-search"></span> Directory',
            collapsed: true,
            link: '/bodies/directory',
          },
        ]
      },
      {
        text: '<span class="i-lucide:drama"></span> Language',
        collapsed: false,
        link: '/language/',
        items: [
          {
            text: '<span class="i-lucide:sparkles"></span> Aesthetic',
            collapsed: true,
            link: '/language/aesthetic'
          },
          {
            text: '<span class="i-lucide:panda"></span> 🚧 Characters',
            collapsed: true,
            link: '/language/characters',
          },
          {
            text: '<span class="i-lucide:paintbrush"></span> 🚧 Animated Music Video',
            collapsed: true,
            link: '/language/amv',
          },
          {
            text: '<span class="i-lucide:list-music"></span> 🚧 Lyrics',
            collapsed: true,
            link: '/language/lyrics',
          },

        ]
      },
      {
        text: '<span class="i-lucide:globe"></span> Networking',
        collapsed: false,
        link: '/networking/',
        items: [
          {
            text: '<span class="i-lucide:house-heart"></span> Communities',
            collapsed: true,
            link: '/networking/communities',
          },
        ]
      },
      {
        text: '<span class="i-lucide:beer"></span> Misc',
        collapsed: false,
        link: '/misc/',
        items: [
          {
            text: '<span class="i-lucide:star"></span> 🚧 Iconic Denpa Songs',
            collapsed: true,
            link: '/misc/top',
          },
          {
            text: '<span class="i-lucide:sprout"></span> Pre 2000s Denpa Songs',
            collapsed: true,
            link: '/misc/pre',
          },
          {
            text: '<span class="i-lucide:gamepad-2"></span> 🚧 Video Games',
            collapsed: true,
            link: '/misc/games',
          },
          {
            text: '<span class="i-lucide:rabbit"></span> 🚧 Sticker Packs',
            collapsed: true,
            link: '/misc/packs',
          },
          {
            text: '<span class="i-lucide:bar-chart-big"></span> 🚧 Iceberg Chart',
            collapsed: true,
            link: '/misc/iceberg',
          },
          {
            text: '<span class="i-lucide:graduation-cap"></span> 🚧 Culture Reading',
            collapsed: true,
            link: '/misc/culture',
          },
        ]
      },
    ],
  }
})