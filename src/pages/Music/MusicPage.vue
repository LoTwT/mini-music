<script setup lang="ts">
import { ref, onMounted, computed } from "vue"
import { NCarousel } from "naive-ui"
import InputSearch from "@/components/InputSearch/index.vue"
import AreaHeader from "@/components/AreaHeader/index.vue"
import { getBanners, getSongMenu } from "@/api/music"
import { IBanner, ISongMenuPlaylistItem } from "@/models/music"
import { useRankingStore } from "@/store"
import RecommendSongItem from "./components/RecommendSongItem.vue"
import SongMenuArea from "./components/SongMenuArea.vue"

const banners = ref<IBanner[]>([])

const rankingStore = useRankingStore()
const hotRanks = computed(() => rankingStore.hotRanking)
const recommendSongs = computed(
  () => hotRanks.value && hotRanks.value.tracks.slice(0, 6),
)

const hotSongMenu = ref<ISongMenuPlaylistItem[]>([])
const recommendSongMenu = ref<ISongMenuPlaylistItem[]>([])

const getPageData = () => {
  getBanners().then((res) => (banners.value = res.banners))

  rankingStore.getHotRankingAction()

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
    <area-header title="推荐视频" style="margin-bottom: 16px" />

    <template v-for="song in recommendSongs" :key="song.id">
      <recommend-song-item :song="song"></recommend-song-item>
    </template>

    <!-- 热门歌单 -->
    <song-menu-area title="热门歌单" :songMenu="hotSongMenu"></song-menu-area>

    <!-- 推荐歌单 -->
    <song-menu-area
      title="推荐歌单"
      :songMenu="recommendSongMenu"
    ></song-menu-area>
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
