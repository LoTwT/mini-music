<script setup lang="ts">
import { onMounted, ref } from "vue"
import { NSpace } from "naive-ui"
import { getTopMVs } from "@/api/video"
import { ITopMV } from "@/models/video"
import MvItem from "./components/MvItem.vue"

const mvs = ref<ITopMV[]>([])

onMounted(() => {
  getTopMVs({ offset: 0, limit: 20 }).then((res) => (mvs.value = res.data))
})
</script>

<template>
  <div class="video-page">
    <n-space justify="space-around">
      <template v-for="mv in mvs" :key="mv.id">
        <mv-item :mv="mv"></mv-item>
      </template>
    </n-space>
  </div>
</template>

<style scoped></style>
