<script setup lang="ts">
import { NInput } from "naive-ui"
</script>

<template>
  <div class="music-page">
    <n-input
      class="music-page-input-search"
      size="large"
      round
      placeholder="搜索您喜欢的歌曲"
    />
  </div>
</template>

<style scoped>
.music-page {
  display: flex;
  flex-direction: column;
}

.music-page-input-search {
  margin: 4px;
}
</style>
