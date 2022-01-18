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

// idx => 0: 新歌 、 1: 热歌 、 2: 原创 、 3: 飙升
export const getRankings = (idx: number) =>
  request<IRankingResponse>({
    url: "/top/list",
    params: {
      idx,
    },
  })

export const getSongMenu = (
  { cat, limit, offset }: { cat?: string; limit?: number; offset?: number } = {
    cat: "全部",
    limit: 12,
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
