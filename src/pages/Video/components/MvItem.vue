<script setup lang="ts">
import { ITopMV } from "@/models/video"
import { NImage, NEllipsis } from "naive-ui"
import { formatCount, formatDuration } from "@/utils/index"

defineProps<{
  mv: ITopMV
}>()
</script>

<template>
  <div class="mv-item">
    <div class="mv-item-album">
      <n-image
        width="400"
        height="225"
        class="mv-item-album-image"
        object-fit="fill"
        :src="mv.cover"
        preview-disabled
      />

      <div class="mv-item-album-info">
        <span class="mv-item-album-info-count">
          {{ formatCount(mv.playCount) }}
        </span>
        <span class="mv-item-album-info-duration">
          {{ formatDuration(mv.mv.videos[0].duration) }}
        </span>
      </div>
    </div>

    <n-ellipsis class="mv-item-content" line-clamp="2">
      {{ mv.name }} - {{ mv.artistName }}
    </n-ellipsis>
  </div>
</template>

<style scoped>
.mv-item {
  display: flex;
  flex-direction: column;
}

.mv-item-album {
  position: relative;
}

.mv-item-album-info {
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  color: white;
  margin-bottom: 8px;
}

.mv-item-album-info-count {
  margin-left: 4px;
}

.mv-item-album-info-duration {
  margin-right: 4px;
}
</style>
