<script setup lang="ts">
import { useRouter, useRoute } from "vue-router"
import { NTabs, NTab, NImage } from "naive-ui"
import { TabBarItemType } from "./types"

defineProps<{
  tabBarItems: TabBarItemType[]
}>()

const router = useRouter()
const route = useRoute()

const isCurrentPath = (path: string) => route.path === path
const handleTabBarChange = (path: string) => router.push(path)
</script>

<template>
  <n-tabs
    type="segment"
    size="large"
    class="tab-bar"
    v-model:value="route.path"
    @update-value="handleTabBarChange"
  >
    <template v-for="item in tabBarItems" :key="item.path">
      <n-tab :name="item.path">
        <div class="tab-bar-item">
          <n-image
            width="30"
            :src="isCurrentPath(item.path) ? item.activeImg : item.inactiveImg"
            preview-disabled
          ></n-image>
          <span class="tab-bar-item__text">{{ item.text }}</span>
        </div>
      </n-tab>
    </template>
  </n-tabs>
</template>

<style scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
}

.tab-bar-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tab-bar-item__text {
  font-size: 14px;
}
</style>
