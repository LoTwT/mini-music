import {
  IMVDetailResponse,
  IMVSrcInfoResponse,
  IRelatedMVsResponse,
  ITopMVResponse,
} from "@/models/video"
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

export const getMVSrc = async (id: number) =>
  request<IMVSrcInfoResponse>({
    url: "/mv/url",
    params: { id },
  })

export const getMVDetail = async (mvid: number) =>
  request<IMVDetailResponse>({
    url: "/mv/detail",
    params: { mvid },
  })

export const getRelatedMVs = async (id: number) =>
  request<IRelatedMVsResponse>({
    url: "/related/allvideo",
    params: { id },
  })
