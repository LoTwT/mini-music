<script setup lang="ts">
import { ref, onMounted, computed } from "vue"
import { NCarousel } from "naive-ui"
import InputSearch from "@/components/InputSearch/index.vue"
import AreaHeader from "@/components/AreaHeader/index.vue"
import { getBanners, getSongMenu } from "@/api/music"
import {
  IBanner,
  IRankingPlaylist,
  IRankingTrack,
  ISongMenuPlaylistItem,
} from "@/models/music"
import { useRankingStore } from "@/store"
import RecommendSongItem from "./components/RecommendSongItem.vue"
import SongMenuArea from "./components/SongMenuArea.vue"
import RankingAreaItem from "./components/RankingAreaItem.vue"

const banners = ref<IBanner[]>([])

const rankingStore = useRankingStore()

export interface DealedRanksData {
  name: string
  coverImgUrl: string
  playCount: number
  songList: IRankingTrack[]
}
const dealRanksData = (data: IRankingPlaylist): DealedRanksData => ({
  name: data.name,
  coverImgUrl: data.coverImgUrl,
  playCount: data.playCount,
  songList: data.tracks.slice(0, 3),
})

// idx => 0: 新歌 、 1: 热歌 、 2: 原创 、 3: 飙升
const newRanks = computed(() => rankingStore.newRanking)
const newRanksData = computed(
  () => newRanks.value && dealRanksData(newRanks.value),
)

const hotRanks = computed(() => rankingStore.hotRanking)
const recommendSongs = computed(
  () => hotRanks.value && hotRanks.value.tracks.slice(0, 6),
)

const originRanks = computed(() => rankingStore.originRanking)
const originRanksData = computed(
  () => originRanks.value && dealRanksData(originRanks.value),
)

const upRanks = computed(() => rankingStore.upRanking)
const upRanksData = computed(
  () => upRanks.value && dealRanksData(upRanks.value),
)

const ranksDataList = computed(() => [
  newRanksData.value,
  originRanksData.value,
  upRanksData.value,
])

const hotSongMenu = ref<ISongMenuPlaylistItem[]>([])
const recommendSongMenu = ref<ISongMenuPlaylistItem[]>([])

const getPageData = () => {
  getBanners().then((res) => (banners.value = res.banners))

  rankingStore.getRankingsAction()

  getSongMenu().then((res) => (hotSongMenu.value = res.playlists))
  getSongMenu({ cat: "流行" }).then(
    (res) => (recommendSongMenu.value = res.playlists),
  )
}

onMounted(() => {
  getPageData()
})
</script>

<template>
  <div class="music-page">
    <!-- 搜索框 -->
    <input-search />

    <!-- 轮播图 -->
    <n-carousel
      v-if="banners.length > 0"
      draggable
      autoplay
      loop
      style="width: 100%; min-height: 900px; margin: 16px 0"
      centered-slides
    >
      <template v-for="banner in banners">
        <img
          style="width: 100%; min-height: 900px"
          :src="banner.imageUrl"
          alt="轮播图"
        />
      </template>
    </n-carousel>

    <!-- 推荐视频 -->
    <div v-if="recommendSongs && recommendSongs.length > 0">
      <area-header title="推荐视频" style="margin-bottom: 16px" />

      <template v-for="song in recommendSongs" :key="song.id">
        <recommend-song-item :song="song"></recommend-song-item>
      </template>
    </div>

    <!-- 热门歌单 -->
    <song-menu-area
      v-if="hotSongMenu.length > 0"
      title="热门歌单"
      :songMenu="hotSongMenu"
    ></song-menu-area>

    <!-- 推荐歌单 -->
    <song-menu-area
      v-if="recommendSongMenu.length > 0"
      title="推荐歌单"
      :songMenu="recommendSongMenu"
    />

    <!-- 巅峰榜 -->
    <div class="ranking-list">
      <area-header title="巅峰榜"></area-header>
      <template v-for="ranksData in ranksDataList">
        <ranking-area-item :ranks-data="ranksData" />
      </template>
    </div>
  </div>
</template>

<style scoped>
.music-page {
  display: flex;
  flex-direction: column;
  margin: 4px;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
