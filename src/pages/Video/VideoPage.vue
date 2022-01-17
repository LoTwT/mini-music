<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"
import { NSpace, NDivider, NSpin } from "naive-ui"
import { getTopMVs } from "@/api/video"
import { ITopMV } from "@/models/video"
import MvItem from "./components/MvItem.vue"
import { useReachBottom } from "@/hooks/useReachBottom"

const mvs = ref<ITopMV[]>([])
const hasMore = ref<boolean>(true)

const videoPageRef = ref<Nullable<HTMLDivElement>>(null)

const getTopMVsData = async (offset: number) => {
  if (!hasMore.value) return

  try {
    let tempMvs = mvs.value
    if (offset === 0) tempMvs = []

    const { data, hasMore: tempHasMore } = await getTopMVs({
      offset,
      limit: 20,
    })

    mvs.value = [...tempMvs, ...data]
    hasMore.value = tempHasMore
  } catch (error) {
    console.error(error)
  }
}

const onLoadMore = async () => {
  const { isReachBottom } = useReachBottom(videoPageRef, 1)
  if (isReachBottom.value && hasMore.value) {
    getTopMVsData(mvs.value.length)
  }
}

onMounted(() => {
  getTopMVsData(0)
  videoPageRef.value?.addEventListener("scroll", onLoadMore)
})

onUnmounted(() => {
  videoPageRef.value?.removeEventListener("scroll", onLoadMore)
})
</script>

<template>
  <div class="video-page" ref="videoPageRef">
    <n-space
      style="padding-top: 20px; padding-bottom: 20px"
      justify="space-around"
    >
      <template v-for="mv in mvs" :key="mv.id">
        <mv-item :mv="mv"></mv-item>
      </template>
    </n-space>

    <n-divider v-if="!hasMore" title-placement="center">
      已经到底啦...
    </n-divider>
  </div>
</template>

<style scoped>
.video-page {
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
