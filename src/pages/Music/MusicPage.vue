<script setup lang="ts">
import { ref, onMounted } from "vue"
import { NCarousel } from "naive-ui"
import InputSearch from "@/components/InputSearch/index.vue"
import AreaHeader from "@/components/AreaHeader/index.vue"
import { getBanners } from "@/api/music"
import { IBanner } from "@/models/music"

const banners = ref<IBanner[]>([])

const getPageData = () => {
  getBanners().then((res) => (banners.value = res.banners))
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
    <n-carousel draggable autoplay loop>
      <template v-for="banner in banners">
        <img style="width: 100%" :src="banner.imageUrl" alt="轮播图" />
      </template>
    </n-carousel>

    <!-- 推荐视频 -->
    <area-header title="推荐视频" />
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
