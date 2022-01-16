<script setup lang="ts">
import { onMounted, ref } from "vue"
import { getTopMVs } from "@/api/video"
import { ITopMV } from "@/models/video"

const mvs = ref<ITopMV[]>([])

onMounted(() => {
  getTopMVs({ offset: 0, limit: 10 }).then((res) => (mvs.value = res.data))
})
</script>

<template>
  <template v-for="mv in mvs" :key="mv.id">
    {{ mv.name }}
  </template>
</template>

<style scoped></style>
