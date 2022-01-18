import { request } from "."
import { IBannersResponse } from "@/models/music"

export const getBanners = () =>
  request<IBannersResponse>({
    url: "/banner",
    params: {
      type: 0,
    },
  })
