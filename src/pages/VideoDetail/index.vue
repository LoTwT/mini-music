<script setup lang="ts">
import { useRoute } from "vue-router"

const route = useRoute()
</script>

<template>
  <div>video detail {{ route.params }}</div>
</template>

<style scoped></style>
