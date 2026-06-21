<script setup>

const data = [
    {
        name: "Nekomimi Mahoutsukai",
        url: "https://web.archive.org/web/20160630171754/http://nekomimi.name/",
    },
    {
        name: "Marina Oono",
        url: "https://web.archive.org/web/20160503160048/http://www.marinarina.net/top.html",
        x: "https://x.com/maririna_honey",
    },
    {
        name: "Mirin☆",
        url: "http://mirin.birdtune.jp/",
    },
    {
        name: "Motoi Kotaka",
        url: "https://web.archive.org/web/20170905005107/http://www.ceramicrecords.net/artist/motoikotaka",
        soundcloud: "https://soundcloud.com/nikunukiyukihi",
    },
    {
        name: "Ichigo Kinoshita",
        url: "https://jinseisoudan15.wixsite.com/radio",
        x: "https://x.com/_kumaichigo_",
        youtube: "https://www.youtube.com/user/kinositaichigo",
    },
    {
        name: "Saori Sakura",
        url: "https://www.sakurasaori.net/",
        x: "https://x.com/Saori_Sakura",
    },
    {
        name: "Hotarutan",
        x: "https://x.com/hotarutan_?lang=ja",
    },
    {
        name: "Ruriru Denpabu",
    },
    {
        name: "mandi",
        url: "https://happymappy.tumblr.com/about",
        x: "https://x.com/mandimandi",
        bluesky: "https://bsky.app/profile/mandimappy.bsky.social",
    },
    {
        name: "Poly Pro Pylene",
    },
    {
        name: "Gakiko",
        x: "https://x.com/gaki0v0",
        youtube: "https://www.youtube.com/channel/UChFqFy2FloSNxzEAfeuUFCw",
    },
    {
        name: "Butada Hikari",
    },
    {
        name: "Toromi",
        url: "https://toromi.ciao.jp/",
        x: "https://x.com/toromix2",
    },
    {
        name: "Koko Kokon",
        x: "https://x.com/KokoroNet",
    },
    {
        name: "Momobako",
        url: "https://web.archive.org/web/20180428200829/http://ameblo.jp/momonikoniko",
    },
    {
        name: "Kyarameru",
        url: "https://caramelmilk.ame-zaiku.com/",
        x: "https://x.com/caramel_715",
        youtube: "https://www.youtube.com/channel/UCFFiZvBx302NskXHVKw_Khw",
        fanbox: "https://caramel.fanbox.cc/",
        booth: "http://x-caramel-x.booth.pm/",
        pixiv: "https://www.pixiv.net/en/users/18346468",
    },
    {
        name: "UCO",
        url: "https://manu.heavy.jp/indexU2.html",
    },
    {
        name: "yuayua",
        url: "https://xxyua39.web.fc2.com/",
        x: "https://x.com/yuayua818",
        youtube: "https://www.youtube.com/channel/UC1-aZ6EMghC94VIDTui9eUg",
        booth: "https://ohanabatake.booth.pm/",
    },
    {
        name: "Shinamon Sugar",
        url: "https://shinamonsugar.web.fc2.com/",
        x: "https://x.com/ShinamonShinako",
        youtube: "https://www.youtube.com/@%E3%81%97%E3%81%AA%E3%82%82%E3%82%93%E3%81%97%E3%82%85%E3%81%8C%E3%83%BC-z8q",
    },
    {
        name: "Nomico",
        url: "https://ameblo.jp/nomico-honey/",
    },
    {
        name: "Mameko",
        url: "https://web.archive.org/web/20110716234734/http://www.geocities.jp:80/pinkykitty_m/main.html",
    },
    {
        name: "ugu",
        url: "https://ugusagi.wixsite.com/rabbit-harmony",
        x: "https://x.com/ugusagi",
        youtube: "https://www.youtube.com/channel/UCCs0xpB7mQgie8YDv6GivXg",
        fanbox: "http://ugusagi.fanbox.cc/",
        soundcloud: "https://soundcloud.com/ugusagi",
        spotify: "https://open.spotify.com/artist/4X9R0TSoyCPiBINJ9hCpNr",
        applemusic: "https://music.apple.com/jp/artist/%E3%81%86%E3%81%90/1681510616"
    },
    {
        name: "Yahiro Saeki",
        url: "https://saeki-yahiro.wixsite.com/official",
        x: "https://x.com/saekiyahiro",
        youtube: "https://www.youtube.com/channel/UCp-8cPCziyRz2OXJWBOjsCQ",
        booth: "https://saekiyahiro.booth.pm/",
        pixiv: "https://saekiyahiro.fanbox.cc/",
    },
    {
        name: "Berry Maisaki",
        url: "https://www.maisakiberry.com/",
        x: "https://x.com/MaisakiBerry",
        youtube: "https://www.youtube.com/MaisakiBerry",
        fanbox: "https://maisakiberry.fanbox.cc/",
        booth: "https://maisakiberry.booth.pm/",
        instagram: "https://www.instagram.com/maisakiberry/",
    },
    {
        name: "Suzushiro",
        x: "https://x.com/suzumisiro",
        youtube: "https://www.youtube.com/@suzumisiro/featured",
        fanbox: "https://suzumisiro.fanbox.cc/",
        pixiv: "https://www.pixiv.net/en/users/6777134",
    },
    {
        name: "Patra Suou",
        url: "https://ptrsuou.com/",
        x: "https://x.com/Patra_HNST",
        youtube: "https://www.youtube.com/@Patra_Suou",
        fanbox: "http://suoupatra.fanbox.cc/",
    },
    {
        name: "emamouse",
        bandcamp: "https://emamouse.bandcamp.com/",
    },
    {
        name: "Chieri",
        x: "https://x.com/chieri_nyan",
        youtube: "https://www.youtube.com/@chierinyan",
        booth: "https://nya-nya22.booth.pm/items/6455701",
    },
    {
        name: "iru",
    },
    {
        name: "hiyokomiya",
        url: "https://hiyokomiya.fanbox.cc/",
        x: "https://x.com/hiyokomiya_0307",
        youtube: "https://www.youtube.com/@hiyokomiya_0307",
        fanbox: "https://hiyokomiya.fanbox.cc/",
        pixiv: "https://www.pixiv.net/en/users/75767207",
    },
    {
        name: "KOTOKO",
        url: "https://www.kotoko.asia/",
        x: "https://x.com/KOTOKO_Dwarf",
        youtube: "https://www.youtube.com/c/KOTOKOOfficialYouTubeChannel",
        spotify: "https://open.spotify.com/artist/06F1MiFx0dHLHEPQBIrcr9?go=1&nd=1",
        applemusic: "https://music.apple.com/us/artist/kotoko/1462524441"
    },
    {
        name: "Haruko Momoi",
        url: "https://web.archive.org/web/20250430094224/https://rg-music.com/momoi/",
        x: "https://x.com/momoiktkr",
        youtube: "https://www.youtube.com/@momoiktkr",
    },
    {
        name: "marumoko",
        url: "https://www.momonechi.net/",
        x: "https://x.com/manmaru05071109",
        youtube: "https://www.youtube.com/channel/UC1Oo_62MumSzVc_I3zu-wSQ",
        booth: "https://marushop.booth.pm/",
        pixiv: "https://www.pixiv.net/users/52986594",
    },
    {
        name: "chinoi momone",
        url: "https://www.momonechi.net/",
        x: "https://x.com/ul0ux",
        youtube: "https://www.youtube.com/channel/UC1QpNAV9xNS5P-yAwJLi07A",
    },
    {
        name: "Nanahira",
        url: "https://nanahira.jp/",
        x: "https://x.com/nanahira",
        youtube: "https://www.youtube.com/channel/UC_fYA9QRK-aJnFTgvR_4zug",
        fanbox: "https://nanahira.fanbox.cc/",
        booth: "https://confetto.booth.pm/",
        soundcloud: "https://soundcloud.com/nanahira",
        spotify: "https://open.spotify.com/artist/0bkkiFN0ghGl4j9aLi3oQx",
        applemusic: "https://music.apple.com/jp/artist/%E3%81%AA%E3%81%AA%E3%81%B2%E3%82%89/509805207",
    },
    {
        name: "nayuta",
    },
    {
        name: "Choko",
        url: "https://chokottodake.com/",
        x: "https://x.com/cho_v_ko",
        youtube: "https://www.youtube.com/c/Chokottodake",
        fanbox: "https://choko.fanbox.cc/",
        booth: "http://chokottodake.booth.pm/",
        pixiv: "https://www.pixiv.net/users/18680629",
    },
    {
        name: "Ui Shigure",
        x: "https://x.com/ui_shig",
        youtube: "https://www.youtube.com/@ui_shig",
        fanbox: "https://uishig.fanbox.cc/",
        booth: "https://ui-shig.booth.pm/",
        pixiv: "https://www.pixiv.net/en/users/431873",
        tiktok: "https://www.tiktok.com/@ui_shigure"
    },
    {
        name: "miiko",
        url: "https://web.archive.org/web/20230329025644/http://www.miko2.com/archives/aboutme.html",
        x: "https://x.com/miko2",
        youtube: "https://www.youtube.com/miko2",
    },
    {
        name: "Mine",
        url: "https://nyagomesotin2525.wixsite.com/bemine",
        x: "https://x.com/bemamamine_",
        youtube: "https://www.youtube.com/channel/UCvovR6Oo2kjR3xcfGkWax2g",
        fanbox: "https://mamaaai.fanbox.cc/",
        booth: "https://bemamamine.booth.pm/",
        pixiv: "https://www.pixiv.net/users/19886532",
    },
    {
        name: "Cherry",
        url: "https://rnilkycherry.wixsite.com/flower",
        x: "https://x.com/rnilky__cherry",
        youtube: "https://www.youtube.com/@rnilky_cherry0",
        fanbox: "https://mhp9tufe.fanbox.cc/",
        pixiv: "https://www.pixiv.net/en/users/3109911",
    },
    {
        name: "Amu Sakurahi",
        url: "https://sakuracafe.wixsite.com/cocoalover",
    },
    {
        name: "Iyuri Shiduki",
        url: "https://lilayuki.wixsite.com/crycrow",
        x: "https://x.com/lilayuki_0826_",
    },
    {
        name: "Chu☆",
    },
    {
        name: "Himeko Sakuragawa",
        url: "https://ameblo.jp/sakuragawa-himeko/",
        x: "https://twitter.com/himeme_",
        instagram: "https://www.instagram.com/sakuragawahimeko",
    },
    {
        name: "Hoshimiya Gumi",
        x: "https://twitter.com/Hoshimiya_Gumi",
        youtube: "https://www.youtube.com/c/gumichannel",
        booth: "https://gumishop.booth.pm/",
        pixiv: "https://www.pixiv.net/users/33920997",
    },
    {
        name: "Kanae Matsumoto",
        x: "https://x.com/MatsumotoKanae",
    },
    {
        name: "Korone Pochi",
        url: "https://vpochpoch.wixsite.com/pochikorone/profile",
        x: "https://x.com/virtualcat_poch",
        youtube: "https://www.youtube.com/@pochikorone",
        fanbox: "https://koronepoti.fanbox.cc/",
        booth: "http://pochpoch.booth.pm/",
        pixiv: "https://www.pixiv.net/users/34798629",
    },
    {
        name: "Mayuko Takano",
    },
    {
        name: "Miyu Inoue",
        url: "http://ayaifactory.com/miyu.html",
        x: "https://x.com/kanematsu_yuka",
    },
    {
        name: "Pinky Pop Hepburn",
        x: "https://x.com/PinkyPopHepburn",
        youtube: "https://www.youtube.com/channel/UC1pR2ig6NhndhvicEgclNdA",
    },
    {
        name: "Tomoe Tamiyasu",
        x: "https://x.com/tammy_now",
        youtube: "https://www.youtube.com/channel/UC7yqc24BjJwi3PoqhXrx6og",
        booth: "https://miatami.booth.pm/",
    }
]

const platforms = [
    "x",
    "youtube",
    "fanbox",
    "booth",
    "pixiv",
    "soundcloud",
    "instagram",
    "bandcamp",
    "bluesky",
    "tiktok",
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
                    <a class="header-icon" :class="`icon icon--${p}`" href="#" tabindex="-1" aria-hidden="true" />
                </th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="v in data" :key="v.name">
                <td>
                    <a v-if="v.url" class="primary" :href="v.url">
                        {{ v.name }}
                    </a>

                    <span v-else class="primary">
                        {{ v.name }}
                    </span>
                </td>

                <td v-for="p in platforms" :key="p">
                    <a v-if="v[p]" class="secondary" :class="iconClass(p)" :href="v[p]" target="_blank"
                        rel="noopener" />
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
    background-color: var(--vp-c-text-2);
    mask-size: contain;
    mask-position: center;
    mask-repeat: no-repeat;
    -webkit-mask-size: contain;
    -webkit-mask-position: center;
    -webkit-mask-repeat: no-repeat;
}

.icon--x {
    mask-image: url("/assets/icons/x.svg");
    -webkit-mask-image: url("/assets/icons/x.svg");
}

.icon--pixiv {
    mask-image: url("/assets/icons/pixiv.svg");
    -webkit-mask-image: url("/assets/icons/pixiv.svg");
}

.icon--instagram {
    mask-image: url("/assets/icons/instagram.svg");
    -webkit-mask-image: url("/assets/icons/instagram.svg");
}

.icon--bandcamp {
    mask-image: url("/assets/icons/bandcamp.svg");
    -webkit-mask-image: url("/assets/icons/bandcamp.svg");
}

.icon--bluesky {
    mask-image: url("/assets/icons/bluesky.svg");
    -webkit-mask-image: url("/assets/icons/bluesky.svg");
}

.icon--soundcloud {
    mask-image: url("/assets/icons/soundcloud.svg");
    -webkit-mask-image: url("/assets/icons/soundcloud.svg");
}

.icon--spotify {
    mask-image: url("/assets/icons/spotify.svg");
    -webkit-mask-image: url("/assets/icons/spotify.svg");
}

.icon--applemusic {
    mask-image: url("/assets/icons/applemusic.svg");
    -webkit-mask-image: url("/assets/icons/applemusic.svg");
}

.icon--youtube {
    mask-image: url("/assets/icons/youtube.svg");
    -webkit-mask-image: url("/assets/icons/youtube.svg");
}

.icon--booth {
    mask-image: url("/assets/icons/booth.svg");
    -webkit-mask-image: url("/assets/icons/booth.svg");
}

.icon--fanbox {
    mask-image: url("/assets/icons/fanbox.svg");
    -webkit-mask-image: url("/assets/icons/fanbox.svg");
}

.icon--tiktok {
    mask-image: url("/assets/icons/tiktok.svg");
    -webkit-mask-image: url("/assets/icons/tiktok.svg");
}

.header-icon {
    pointer-events: none;
    display: inline-block;
}
</style>