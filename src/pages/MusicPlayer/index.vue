<script setup lang="ts">
import { getSongDetail } from "@/api/player"
import { ISongDetail } from "@/models/player"
import { Nullable } from "@/utils/types"
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router"
import NavBar from "@/components/NavBar/index.vue"
import { NCarousel } from "naive-ui"

const route = useRoute()
const id = route.params.id as string

const songDetail = ref<Nullable<ISongDetail>>(null)
const currPage = ref<0 | 1>(0)

const getPageData = () => {
  getSongDetail(id).then((res) => (songDetail.value = res.songs[0]))
}

onMounted(() => {
  getPageData()
})

const changeCurrPage = (index: 0 | 1) => (currPage.value = index)
</script>

<template>
  <div class="song-detail">
    <img :src="songDetail?.al.picUrl" alt="bg-cover" class="bg-image" />
    <div class="bg-cover"></div>

    <nav-bar>
      <template #center>
        <div class="nav-bar-center">
          <span
            :class="[currPage === 0 && 'active', 'tab']"
            @click="() => changeCurrPage(0)"
          >
            歌曲
          </span>
          <span class="divider">|</span>
          <span
            :class="[currPage === 1 && 'active', 'tab']"
            @click="() => changeCurrPage(1)"
          >
            歌词
          </span>
        </div>
      </template>
    </nav-bar>
    <n-carousel :show-dots="false" draggable v-model:current-index="currPage">
      <div>0</div>
      <div>1</div>
    </n-carousel>
  </div>
</template>

<style scoped>
.song-detail {
  color: white;
}

.bg-image {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.bg-cover {
  position: fixed;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(25px);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
}

.nav-bar-center {
  font-size: 28px;
  color: #999;
}

.divider {
  margin: 0 8px;
}

.active {
  color: white;
}

.tab {
  cursor: pointer;
}
</style>
