<script setup lang="ts">
import { IRankingTrack } from "@/models/music"
import { useRouter } from "vue-router"

defineProps<{
  song: IRankingTrack
}>()

const router = useRouter()
const handleClick = (id: number) => router.push({ path: `/musicplayer/${id}` })
</script>

<template>
  <div class="recommend-song-item" @click="() => handleClick(song.id)">
    <img class="poster" :src="song.al.picUrl" alt="歌曲海报" />

    <div class="song-info">
      <span class="name">{{ song.name }}</span>
      <span class="source">{{ song.ar[0].name }} - {{ song.al.name }}</span>
    </div>

    <img
      class="arrow-right"
      src="@/assets/images/icons/arrow-right.png"
      alt="右箭头"
    />
  </div>
</template>

<style scoped>
.recommend-song-item {
  display: flex;
  align-items: center;
}

.poster {
  width: 128px;
  height: 128px;
}

.song-info {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 16px;
}

.song-info .name {
  font-size: 24px;
  font-weight: bold;
}

.song-info .source {
  color: gray;
  font: 16px;
}

.arrow-right {
  width: 32px;
}
</style>
