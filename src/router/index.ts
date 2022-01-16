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
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
