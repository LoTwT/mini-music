<script setup lang="ts">
import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"
import { getMVDetail, getMVSrc, getRelatedMVs } from "@/api/video"
import { Nullable } from "@/utils/types"
import { IMVDetail, IMVSrcInfo, IRelatedMV } from "@/models/video"

const route = useRoute()
const id = parseInt(route.params.id as string)

const mvSrcInfo = ref<Nullable<IMVSrcInfo>>(null)
const mvDetail = ref<Nullable<IMVDetail>>(null)
const relatedMVs = ref<IRelatedMV[]>([])

onMounted(() => {
  // 1. 请求播放地址
  getMVSrc(id).then((res) => (mvSrcInfo.value = res.data))

  // 2. 请求视频信息
  getMVDetail(id).then((res) => (mvDetail.value = res.data))

  // 3. 请求相关视频
  getRelatedMVs(id).then((res) => (relatedMVs.value = res.data))
})
</script>

<template>
  <div>video detail {{ route.params }}</div>
</template>

<style scoped></style>
