<script setup lang="ts">
import { NCarousel, NCard } from "naive-ui"
import AreaHeader from "@/components/AreaHeader/index.vue"
import { ISongMenuPlaylistItem } from "@/models/music"
import { formatCount } from "@/utils"
import { useRouter } from "vue-router"

defineProps<{
  title: string
  songMenu: ISongMenuPlaylistItem[]
}>()

const router = useRouter()
const handleSongMenuClick = (id: number) =>
  router.push({ path: "/toplist", query: { id, cate: "menu" } })
</script>

<template>
  <div class="song-menu-area">
    <area-header :title="title"></area-header>

    <n-carousel
      :slides-per-view="6"
      draggable
      :space-between="20"
      :show-dots="false"
    >
      <template v-for="song in songMenu" :key="song.id">
        <n-card @click="() => handleSongMenuClick(song.id)">
          <template #cover>
            <div class="song-menu-item-cover">
              <img :src="song.coverImgUrl" alt="歌曲海报" />
              <span class="song-menu-item-playcount">{{
                formatCount(song.playCount)
              }}</span>
            </div>
          </template>

          <template #default>
            <span class="song-menu-item-name">{{ song.name }}</span>
          </template>
        </n-card>
      </template>
    </n-carousel>
  </div>
</template>

<style scoped>
.song-menu-area {
  margin: 16px 0;
}

.song-menu-item-cover {
  position: relative;
}

.song-menu-item-playcount {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 4px;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  margin: 4px;
  border-radius: 4px;
}

.song-menu-item-name {
  font-size: 16px;
  font-weight: bold;
  display: inline-block;
  margin-top: 8px;
}
</style>

<style>
.n-card {
  background-color: transparent !important;
  border: none !important;
}
</style>
