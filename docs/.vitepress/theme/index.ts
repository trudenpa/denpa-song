import DefaultTheme from 'vitepress/theme'
import './custom.css'
import 'uno.css'
import Layout from './Layout.vue'
import VideoLink from './components/VideoLink.vue'
import FloatingPlayer from './components/FloatingPlayer.vue'

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
  },
}