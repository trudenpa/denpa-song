import DefaultTheme from 'vitepress/theme'
import './styles/index.css'
import 'uno.css'
import Layout from './components/Layout.vue'
import VideoLink from './components/VideoLink.vue'
import FloatingPlayer from './components/FloatingPlayer.vue'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import Collapsible from './components/Collapsible.vue'

if (typeof window !== 'undefined') {
  (function () {
    let title = "denpa song archive ♪ ";
    let position = 0;
    let interval: any;

    function startAnimation() {
      if (interval) clearInterval(interval);
      interval = setInterval(() => {
        position = (position + 1) % title.length;
        document.title = title.slice(position) + title.slice(0, position);
      }, 200);
    }

    startAnimation();
  })();
}

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('VideoLink', VideoLink)
    app.component('FloatingPlayer', FloatingPlayer)
    app.component('Collapsible', Collapsible)
    enhanceAppWithTabs(app)
  },
}