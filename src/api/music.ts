import { request } from "."
import {
  IBannersResponse,
  IRankingResponse,
  ISongMenuResponse,
} from "@/models/music"

export const getBanners = () =>
  request<IBannersResponse>({
    url: "/banner",
    params: {
      type: 0,
    },
  })

// idx => 0: 飙升、1: 热门、2: 新歌、3: 原创
export const getRankings = (idx: number) =>
  request<IRankingResponse>({
    url: "/top/list",
    params: {
      idx,
    },
  })

export const getSongMenu = (
  { cat, limit, offset } = {
    cat: "全部",
    limit: 6,
    offset: 0,
  },
) =>
  request<ISongMenuResponse>({
    url: "/top/playlist",
    params: {
      cat,
      limit,
      offset,
    },
  })
