<script setup lang="ts">
import { getSongMenuDetail } from "@/api/music"
import { IRankingPlaylist } from "@/models/music"
import { useRankingStore } from "@/store"
import { Nullable } from "@/utils/types"
import { ref } from "vue"
import { useRoute } from "vue-router"
import SongDetailHeader from "./components/SongDetailHeader.vue"

const route = useRoute()
const toplistType = route.query.type as Nullable<"N" | "H" | "O" | "S">
const id = route.query.id as Nullable<number>
const cate = route.query.cate as "rank" | "menu"

const toplistData = ref<Nullable<IRankingPlaylist>>()

if (cate === "rank" && toplistType) {
  const toplistTypeMap = {
    N: "newRanking",
    H: "hotRanking",
    O: "originRanking",
    S: "upRanking",
  } as const

  const rankingStore = useRankingStore()
  toplistData.value = rankingStore[toplistTypeMap[toplistType]]
} else if (cate === "menu" && id) {
  getSongMenuDetail(id).then((res) => (toplistData.value = res.playlist))
}
</script>

<template>
  <div class="top-list">
    <div class="top-list-header">
      <div v-if="cate === 'rank'" class="top-list-title">
        {{ toplistData?.name }}
      </div>
      <song-detail-header
        v-else-if="cate === 'menu'"
        :data="toplistData!"
      ></song-detail-header>
    </div>

    <template v-for="(song, index) in toplistData?.tracks" :key="song.id">
      <div class="top-list-song">
        <span class="song-index">{{ index + 1 }}</span>
        <div class="song-info">
          <span class="song-name">{{ song.name }}</span>

          <div class="song-detail">
            <img
              class="quality-image"
              src="@/assets/images/icons/sq_icon.png"
              alt="sq"
            />
            <span>{{ song.ar[0].name }}</span>
            <span v-if="song.alia[0]" class="song-linker"> - </span>
            <span v-if="song.alia[0]">{{ song.alia[0] }} </span>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.top-list {
  display: flex;
  flex-direction: column;
  padding: 4px;
}

.top-list-header {
  flex: 1;
}

.top-list-title {
  font-size: 32px;
  font-weight: bold;
}

.top-list-song {
  display: flex;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 4px 0;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.2);
  background-color: white;
}

.song-index {
  font-size: 24px;
  font-weight: 500;
  padding: 16px;
}

.song-name {
  font-size: 24px;
  font-weight: 500;
}

.song-info {
  display: flex;
  flex-direction: column;
}

.song-detail {
  display: flex;
  align-items: center;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.4);
}

.quality-image {
  width: 32px;
  margin-right: 8px;
}

.song-linker {
  margin: 0 4px;
}
</style>
