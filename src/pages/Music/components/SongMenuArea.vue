<script setup lang="ts">
import { NCarousel, NCard } from "naive-ui"
import AreaHeader from "@/components/AreaHeader/index.vue"
import { ISongMenuPlaylistItem } from "@/models/music"

defineProps<{
  title: string
  songMenu: ISongMenuPlaylistItem[]
}>()
</script>

<template>
  <div class="song-menu-area">
    <area-header :title="title"></area-header>

    <n-carousel :slides-per-view="4" draggable :space-between="20">
      <template v-for="song in songMenu" :key="song.id">
        <n-card>
          <template #cover>
            <div class="song-menu-item-cover">
              <img :src="song.coverImgUrl" alt="歌曲海报" />
              <span class="song-menu-item-playcount">{{ song.playCount }}</span>
            </div>
          </template>

          <template #default>
            {{ song.name }}
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
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>

<style>
.n-card {
  background-color: transparent !important;
  border: none !important;
}
</style>
