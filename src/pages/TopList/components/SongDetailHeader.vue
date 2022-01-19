<script setup lang="ts">
import { IRankingPlaylist } from "@/models/music"
import { formatCount } from "@/utils"
import { Nullable } from "@/utils/types"

defineProps<{
  data: Nullable<IRankingPlaylist>
}>()
</script>

<template>
  <div class="song-detail-header">
    <img class="bg-cover" :src="data?.coverImgUrl" alt="cover" />

    <div class="content">
      <div class="content-top">
        <div class="content-top-cover">
          <img
            class="content-top-cover-img"
            :src="data?.coverImgUrl"
            alt="cover"
          />
        </div>
        <div class="content-top-info">
          <span class="title">{{ data?.name }}</span>
          <div class="author">
            <img class="avatar" :src="data?.creator.avatarUrl" alt="avatar" />
            <span class="nickname">{{ data?.creator.nickname }}</span>
          </div>
          <span class="description">{{ data?.description }}</span>
        </div>
      </div>
      <div class="content-bottom">
        <div class="favor">
          <img
            class="favor-img"
            src="@/assets/images/icons/favor_icon.png"
            alt="favor-icon"
          />
          <span class="playcount">
            {{ formatCount(data?.playCount || null) }}</span
          >
        </div>
        <div class="share">
          <img
            class="share-img"
            src="@/assets/images/icons/share_icon.png"
            alt="share-icon"
          />
          <span class="share-text">分享</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.song-detail-header {
  width: 100%;
  height: 800px;
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);
}
.bg-cover {
  position: absolute;
  width: 100%;
  max-height: 800px;
  z-index: -1;
  filter: blur(25px);
}

.content {
  display: flex;
  flex-direction: column;
  padding-top: 100px;
}

.content-top {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.content-top-cover,
.content-top-info {
  flex: 1;
  display: flex;
  justify-content: center;
}
.content-top-info {
  flex-direction: column;
}

.content-top-cover-img {
  width: 400px;
  height: 400px;
}

.title {
  font-size: 40px;
  font-weight: bold;
  color: white;
  margin-bottom: 30px;
}

.author {
  display: flex;
  align-items: center;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50px;
}

.nickname {
  font-size: 24px;
  color: white;
  margin-left: 40px;
}

.description {
  font-size: 20px;
  color: white;
  margin-right: 40px;
  margin-top: 40px;
}

.content-bottom {
  margin-top: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.favor,
.share {
  display: flex;
  align-items: center;
  font-size: 32px;
  color: white;
}

.favor-img,
.share-img {
  width: 60px;
  height: 60px;
  margin-right: 20px;
}
</style>
