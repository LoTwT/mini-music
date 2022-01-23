import { ISongDetailResponse } from "@/models/player"
import { request } from "."

export const getSongDetail = (ids: string) =>
  request<ISongDetailResponse>({
    url: "/song/detail",
    params: {
      ids,
    },
  })
