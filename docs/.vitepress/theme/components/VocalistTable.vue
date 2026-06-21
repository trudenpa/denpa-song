<script setup>

const data = [
  {
    name: "Nekomimi Mahoutsukai",
    url: "https://web.archive.org/web/20160630171754/http://nekomimi.name/",
    x: null,
    youtube: null,
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "Marina Oono",
    url: "https://web.archive.org/web/20160503160048/http://www.marinarina.net/top.html",
    x: "https://x.com/maririna_honey",
    youtube: null,
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "Mirin☆",
    url: "http://mirin.birdtune.jp/",
    x: null,
    youtube: null,
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "Motoi Kotaka",
    url: "https://web.archive.org/web/20170905005107/http://www.ceramicrecords.net/artist/motoikotaka",
    x: null,
    youtube: null,
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "2-Dimension",
    url: "https://web.archive.org/web/20251114050426/http://2-dimension.net/",
    x: null,
    youtube: null,
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "Ichigo Kinoshita",
    url: "https://jinseisoudan15.wixsite.com/radio",
    x: null,
    youtube: null,
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "Saori Sakura",
    url: "https://www.sakurasaori.net/",
    x: "https://x.com/Saori_Sakura",
    youtube: null,
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "Hotarutan",
    url: null,
    x: "https://x.com/hotarutan_?lang=ja",
    youtube: null,
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "Ruriru Denpabu",
    url: null,
    x: null,
    youtube: null,
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "mandi",
    url: "https://happymappy.tumblr.com/about",
    x: "https://x.com/mandimandi",
    youtube: null,
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: "https://bsky.app/profile/mandimappy.bsky.social",
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "Poly Pro Pylene",
    url: null,
    x: null,
    youtube: null,
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "Gakiko",
    url: null,
    x: "https://x.com/gaki0v0",
    youtube: null,
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "Butada Hikari",
    url: null,
    x: null,
    youtube: null,
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "Toromi",
    url: "https://toromi.ciao.jp/",
    x: "https://x.com/toromix2",
    youtube: null,
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "Koko Kokon",
    url: null,
    x: "https://x.com/KokoroNet",
    youtube: null,
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "Momobako",
    url: "https://web.archive.org/web/20180428200829/http://ameblo.jp/momonikoniko",
    x: null,
    youtube: null,
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "Kyarameru",
    url: "https://caramelmilk.ame-zaiku.com/",
    x: null,
    youtube: null,
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "UCO / Funta3",
    url: "https://manu.heavy.jp/indexU2.html",
    x: null,
    youtube: null,
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "yuayua",
    url: "https://xxyua39.web.fc2.com/",
    x: "https://x.com/yuayua818",
    youtube: "https://www.youtube.com/channel/UC1-aZ6EMghC94VIDTui9eUg",
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "Shinamon Sugar",
    url: "https://shinamonsugar.web.fc2.com/",
    x: "https://x.com/ShinamonShinako",
    youtube: "https://www.youtube.com/@%E3%81%97%E3%81%AA%E3%82%82%E3%82%93%E3%81%97%E3%82%85%E3%81%8C%E3%83%BC-z8q",
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "Nomico",
    url: "https://ameblo.jp/nomico-honey/",
    x: null,
    youtube: null,
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "Mameko",
    url: "https://web.archive.org/web/20110716234734/http://www.geocities.jp:80/pinkykitty_m/main.html",
    x: null,
    youtube: null,
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "ugu",
    url: "https://ugusagi.wixsite.com/rabbit-harmony",
    x: "https://x.com/ugusagi",
    youtube: "https://www.youtube.com/channel/UCCs0xpB7mQgie8YDv6GivXg",
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "Yahiro Saeki",
    url: "https://saeki-yahiro.wixsite.com/official",
    x: "https://x.com/saekiyahiro",
    youtube: "https://www.youtube.com/channel/UCp-8cPCziyRz2OXJWBOjsCQ",
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "Berry Maisaki",
    url: "https://www.maisakiberry.com/",
    x: "https://x.com/MaisakiBerry",
    youtube: "https://www.youtube.com/MaisakiBerry",
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: "https://www.instagram.com/maisakiberry/",
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "Suzushiro",
    url: null,
    x: "https://x.com/suzumisiro",
    youtube: "https://www.youtube.com/@suzumisiro/featured",
    fanbox: null,
    booth: null,
    pixiv: "https://www.pixiv.net/en/users/6777134",
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "Patra Suou",
    url: "https://ptrsuou.com/",
    x: "https://x.com/Patra_HNST",
    youtube: "https://www.youtube.com/@Patra_Suou",
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "emamouse",
    url: null,
    x: null,
    youtube: null,
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: "https://emamouse.bandcamp.com/",
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "Chieri",
    url: null,
    x: "https://x.com/chieri_nyan",
    youtube: "https://www.youtube.com/@chierinyan",
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "iru",
    url: null,
    x: null,
    youtube: null,
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "hiyokomiya",
    url: "https://hiyokomiya.fanbox.cc/",
    x: "https://x.com/hiyokomiya_0307",
    youtube: null,
    fanbox: "https://hiyokomiya.fanbox.cc/",
    booth: null,
    pixiv: "https://www.pixiv.net/en/users/75767207",
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "KOTOKO",
    url: "https://www.kotoko.asia/",
    x: null,
    youtube: null,
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "Haruko Momoi",
    url: "https://web.archive.org/web/20250430094224/https://rg-music.com/momoi/",
    x: "https://x.com/momoiktkr",
    youtube: null,
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "marumoko",
    url: "https://www.momonechi.net/",
    x: "https://x.com/manmaru05071109",
    youtube: "https://www.youtube.com/channel/UC1Oo_62MumSzVc_I3zu-wSQ",
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "chinoi momone",
    url: "https://www.momonechi.net/",
    x: "https://x.com/ul0ux",
    youtube: "https://www.youtube.com/channel/UC1QpNAV9xNS5P-yAwJLi07A",
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "Nanahira",
    url: "https://nanahira.jp/",
    x: "https://x.com/nanahira",
    youtube: "https://www.youtube.com/channel/UC_fYA9QRK-aJnFTgvR_4zug",
    fanbox: "https://nanahira.fanbox.cc/",
    booth: "https://confetto.booth.pm/",
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: "https://soundcloud.com/nanahira",
    spotify: "https://open.spotify.com/artist/0bkkiFN0ghGl4j9aLi3oQx",
    applemusic: "https://music.apple.com/jp/artist/%E3%81%AA%E3%81%AA%E3%81%B2%E3%82%89/509805207"
  },
  {
    name: "nayuta",
    url: "",
    x: null,
    youtube: null,
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "Choko",
    url: "https://chokottodake.com/",
    x: "https://x.com/cho_v_ko",
    youtube: "https://www.youtube.com/c/Chokottodake",
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "Ui Shigure",
    url: null,
    x: "https://x.com/ui_shig",
    youtube: "https://www.youtube.com/@ui_shig",
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "miiko",
    url: "https://web.archive.org/web/20230329025644/http://www.miko2.com/archives/aboutme.html",
    x: "https://x.com/miko2",
    youtube: null,
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "Mine",
    url: "https://nyagomesotin2525.wixsite.com/bemine",
    x: null,
    youtube: null,
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "Cherry",
    url: null,
    x: "https://x.com/rnilky__cherry",
    youtube: null,
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "Amu Sakurahi",
    url: "https://sakuracafe.wixsite.com/cocoalover",
    x: null,
    youtube: null,
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "Iyuri Shiduki",
    url: "https://lilayuki.wixsite.com/crycrow",
    x: null,
    youtube: null,
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "Chu☆",
    url: null,
    x: null,
    youtube: null,
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "Himeko Sakuragawa",
    url: "https://ameblo.jp/sakuragawa-himeko/",
    x: "https://twitter.com/himeme_",
    youtube: null,
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: "https://www.instagram.com/sakuragawahimeko",
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "Hoshimiya Gumi",
    url: null,
    x: "https://twitter.com/Hoshimiya_Gumi",
    youtube: "https://www.youtube.com/c/gumichannel",
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "Kanae Matsumoto",
    url: null,
    x: "https://x.com/MatsumotoKanae",
    youtube: null,
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "Korone Pochi",
    url: "https://vpochpoch.wixsite.com/pochikorone/profile",
    x: "https://x.com/virtualcat_poch",
    youtube: "https://www.youtube.com/channel/UCv2byPgvl60Mh1vQBnXuksA",
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "Mayuko Takano",
    url: null,
    x: null,
    youtube: null,
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "Miyu Inoue",
    url: "http://ayaifactory.com/miyu.html",
    x: "https://x.com/kanematsu_yuka",
    youtube: null,
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "Pinky Pop Hepburn",
    url: null,
    x: "https://x.com/PinkyPopHepburn",
    youtube: "https://www.youtube.com/channel/UC1pR2ig6NhndhvicEgclNdA",
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  },
  {
    name: "Tomoe Tamiyasu",
    url: null,
    x: null,
    youtube: null,
    fanbox: null,
    booth: null,
    pixiv: null,
    instagram: null,
    bandcamp: null,
    bluesky: null,
    soundcloud: null,
    spotify: null,
    applemusic: null
  }
]

const platforms = [
  "x",
  "youtube",
  "fanbox",
  "booth",
  "pixiv",
  "instagram",
  "bandcamp",
  "bluesky",
  "soundcloud",
  "spotify",
  "applemusic"
]

const iconClass = (p) => `icon icon--${p}`

</script>
<template>
  <table class="vocalist-table">
    <thead>
  <tr>
    <th>Vocalist</th>

    <th v-for="p in platforms" :key="p">
      <a
        class="header-icon"
        :class="`icon icon--${p}`"
        href="#"
        tabindex="-1"
        aria-hidden="true"
      />
    </th>
  </tr>
</thead>

    <tbody>
      <tr v-for="v in data" :key="v.name">
        <td>
          <a class="primary" :href="v.url">{{ v.name }}</a>
        </td>

        <td v-for="p in platforms" :key="p">
          <a
            v-if="v[p]"
            class="secondary"
            :class="iconClass(p)"
            :href="v[p]"
            target="_blank"
            rel="noopener"
          />
          <span v-else>-</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
.icon {
  width: 14px;
  height: 14px;
  display: inline-block;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.icon--x { background-image: url("/assets/icons/x.svg"); }
.icon--pixiv { background-image: url("/assets/icons/pixiv.svg"); }
.icon--instagram { background-image: url("/assets/icons/instagram.svg"); }
.icon--bandcamp { background-image: url("/assets/icons/bandcamp.svg"); }
.icon--bluesky { background-image: url("/assets/icons/bluesky.svg"); }
.icon--soundcloud { background-image: url("/assets/icons/soundcloud.svg"); }
.icon--spotify { background-image: url("/assets/icons/spotify.svg"); }
.icon--applemusic { background-image: url("/assets/icons/applemusic.svg"); }
.icon--booth { background-image: url("/assets/icons/booth.png"); }
.icon--youtube { background-image: url("/assets/icons/youtube.svg"); }
.icon--fanbox { background-image: url("/assets/icons/fanbox.png"); } 

.header-icon {
  pointer-events: none;
  display: inline-block;
}
</style>