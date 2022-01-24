<script setup lang="ts">
import { ISongDetail } from "@/models/player"
import { Nullable } from "@/utils/types"
import { NSlider } from "naive-ui"
import { ref } from "vue"

defineProps<{
  songDetail: Nullable<ISongDetail>
}>()

const audioRef = ref<Nullable<HTMLAudioElement>>(null)

const handlePauseClick = () => audioRef.value?.pause()
const handleResumeClick = () => audioRef.value?.play()
</script>

<template>
  <div class="song-tab">
    <img class="song-img" :src="songDetail?.al.picUrl" alt="song-img" />

    <div class="song-info">
      <span class="song-title">{{ songDetail?.name }}</span>
      <span class="song-artist">{{ songDetail?.ar[0].name }}</span>
      <span class="song-album">{{ songDetail?.alia[0] }}</span>
    </div>

    <div class="lyric">歌词</div>

    <div class="slider">
      <n-slider :tooltip="false" />
      <div class="lyric-time">
        <span class="current">00:00</span>
        <span class="duration">05:00</span>
      </div>
    </div>

    <div class="operation">
      <img
        class="btn btn-mode"
        src="@/assets/images/player/play_order.png"
        alt="play-order"
      />
      <img
        class="btn btn-prev"
        src="@/assets/images/player/play_prev.png"
        alt="play-prev"
      />
      <img
        class="btn btn-pause"
        src="@/assets/images/player/play_pause.png"
        alt="play-pause"
        @click="handlePauseClick"
      />
      <img
        class="btn btn-resume"
        src="@/assets/images/player/play_resume.png"
        alt="play-resume"
        @click="handleResumeClick"
      />
      <img
        class="btn btn-next"
        src="@/assets/images/player/play_next.png"
        alt="play-next"
      />
      <img
        class="btn btn-music"
        src="@/assets/images/player/play_music.png"
        alt="play-music"
      />
    </div>

    <audio
      ref="audioRef"
      style="display: none"
      :src="`https://music.163.com/song/media/outer/url?id=${songDetail?.id}.mp3`"
    />
  </div>
</template>

<style scoped>
.song-tab {
  height: calc(100% - 60px);
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  padding: 16px;
}

.song-img {
  flex: 4;
}

.song-info {
  display: flex;
  flex-direction: column;
  margin: 8px 0;
}

.song-title {
  font-size: 32px;
  font-weight: bold;
}

.lyric {
  flex: 1;
  margin: 8px 0;
}

.slider {
  margin: 8px 0;
}

.song-artist,
.song-album {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
}

.lyric-time {
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
  font-size: 20px;
}

.operation {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 40px;
}

.btn {
  cursor: pointer;
  width: 100px;
  height: 100px;
}
</style>
