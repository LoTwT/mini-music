<script setup lang="ts">
import TabBar from "@/components/TabBar/index.vue"
import { TabBarItemType } from "./components/TabBar/types"

const tabBarItems: TabBarItemType[] = [
  {
    path: "/music",
    text: "音乐",
    activeImg: "./src/assets/images/tabbar/music_active.png",
    inactiveImg: "./src/assets/images/tabbar/music_normal.png",
  },
  {
    path: "/video",
    text: "视频",
    activeImg: "./src/assets/images/tabbar/video_active.png",
    inactiveImg: "./src/assets/images/tabbar/video_normal.png",
  },
]
</script>

<template>
  <router-view class="app-router-view"></router-view>
  <tab-bar :tabBarItems="tabBarItems"></tab-bar>
</template>

<style scoped>
.app-router-view {
  padding-top: 20px;
  padding-bottom: 80px;
}
</style>

<style>
body {
  height: 100%;
  background-color: #e6e6e6;
}
</style>
