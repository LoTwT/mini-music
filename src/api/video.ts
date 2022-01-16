import { ITopMVResponse } from "@/models/video"
import { request } from "."

export interface ITopMVsParams {
  offset: number
  limit: number
}

export const getTopMVs = async (params: ITopMVsParams) =>
  request<ITopMVResponse>({
    url: "/top/mv",
    params,
  })
