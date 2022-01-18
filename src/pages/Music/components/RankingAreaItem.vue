<script setup lang="ts">
import { formatCount } from "@/utils"
import { Nullable } from "@/utils/types"
import { DealedRanksData } from "../MusicPage.vue"

defineProps<{
  ranksData: Nullable<DealedRanksData>
}>()
</script>

<template>
  <div class="ranking-area-item">
    <div class="info">
      <span class="info-name">{{ ranksData?.name }}</span>

      <div class="info-songs">
        <template v-for="(song, index) in ranksData?.songList" :key="song.id">
          <div class="info-song">
            <span class="song-num">{{ index + 1 }}. </span>
            <span class="song-name">{{ song.name }}</span>
            <span> - </span>
            <span class="song-artist">{{ song.ar[0].name }}</span>
          </div>
        </template>
      </div>
    </div>
    <img class="cover" :src="ranksData?.coverImgUrl" :alt="ranksData?.name" />
    <span class="play-count">
      {{ ranksData?.playCount && formatCount(ranksData.playCount) }}
    </span>
  </div>
</template>

<style scoped>
.ranking-area-item {
  display: flex;
  margin: 8px 0;
  background-color: rgba(0, 0, 0, 0.1);
  position: relative;
}

.info {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  justify-content: center;
}

.info-name {
  font-size: 24px;
  font-weight: 500;
}

.info-songs {
  font-size: 20px;
}

.cover {
  width: 200px;
  height: 200px;
}

.song-artist {
  color: rgba(0, 0, 0, 0.4);
}

.play-count {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 4px;
  margin: 4px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  color: white;
}
</style>
