<script setup lang="ts">
import { useRoute } from "vue-router"
import TabBar from "@/components/TabBar/index.vue"
import { TabBarItemType } from "./components/TabBar/types"

const route = useRoute()

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
  <router-view
    :class="[
      route.path === '/music' || route.path === '/video'
        ? 'app-router-view'
        : 'app-router-view-normal',
    ]"
  ></router-view>
  <tab-bar :tabBarItems="tabBarItems"></tab-bar>
</template>

<style>
body {
  background-color: #e6e6e6;
}

.app-router-view {
  height: calc(100vh - 73px);
}

.app-router-view-normal {
  height: 100vh;
}
</style>
