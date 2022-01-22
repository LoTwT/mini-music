import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import { MusicPage, VidePage, NotFoundPage } from "@/pages"

const routes: RouteRecordRaw[] = [
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFoundPage,
  },
  {
    path: "/",
    redirect: "/music",
  },
  {
    path: "/music",
    name: "Music",
    component: MusicPage,
  },
  {
    path: "/video",
    name: "Video",
    component: VidePage,
  },
  {
    path: "/video/:id",
    name: "VideoDetail",
    component: () => import("@/pages/VideoDetail/index.vue"),
  },
  {
    path: "/toplist",
    name: "TopList",
    component: () => import("@/pages/TopList/index.vue"),
  },
  {
    path: "/musicplayer/:id",
    name: "MusicPlayer",
    component: () => import("@/pages/MusicPlayer/index.vue"),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
