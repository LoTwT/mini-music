<script setup lang="ts">
import { useRoute } from "vue-router"

const route = useRoute()
const id = route.params.id
</script>

<template>
  <div>music player id: {{ id }}</div>
</template>

<style scoped></style>
