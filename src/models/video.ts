import { Nullable } from "@/utils/types"
import { IBaseResponse } from "."

export interface IArtist {
  artistId: number
  artistName: string
}

export interface ITopMV extends IArtist {
  artists: IArtist[]
  briefDesc: string
  cover: string
  desc: string
  duration: number
  id: number
  lastRank: number
  mark: number
  mv: IBaseMV
  name: string
  playCount: number
  score: number
  subed: boolean
}

export interface IBaseMV {
  aliaName: string
  appTitle: string
  appword: string
  area: string
  artists: IArtist[]
  authId: string
  caption: number
  captionLanguage: string
  dayplays: number
  desc: string
  fee: number
  id: number
  monthplays: number
  mottos: string
  neteaseonly: number
  oneword: Nullable<string>
  online: number
  pic4v3: number
  pic16v9: number
  plays: number
  publishTime: string
  score: number
  stars: Nullable<number>
  status: number
  style: Nullable<string>
  subTitle: string
  subType: string
  title: string
  topWeeks: string
  transName: string
  type: string
  upban: number
  videos: IBaseVideo[]
  weekplays: number
}

export interface IBaseVideo {
  check: boolean
  container: string
  duration: number
  height: number
  md5: string
  size: number
  tag: `${"TS" | "MP4"}_${"240" | "480" | "720" | "1080"}P`
  tagSign: {
    br: 240 | 480 | 720 | 1080
    type: "TS" | "MP4"
    tagSign: `${"TS" | "MP4"}_${"240" | "480" | "720" | "1080"}P`
    mvtype: "TS" | "MP4"
    resolution: 240 | 480 | 720 | 1080
  }
  url: string
  width: number
}

export interface ITopMVResponse extends IBaseResponse<ITopMV[]> {
  hasMore: boolean
  updateTime: number
}

export interface IMVSrcInfo {
  code: number
  expi: number
  fee: number
  id: number
  md5: string
  msg: string
  mvFee: number
  promotionVo: any
  r: 240 | 480 | 720 | 1080
  size: number
  st: number
  url: string
}

export interface IMVSrcInfoResponse extends IBaseResponse<IMVSrcInfo> {}

export interface IMVDetailBrs {
  size: number
  br: 240 | 480 | 720 | 1080
  point: number
}

export interface IMVDetail {
  artistId: number
  artistName: string
  artists: {
    id: number
    name: string
    img1v1Url: Nullable<string>
    followed: false
  }[]
  briefDesc: string
  brs: IMVDetailBrs[]
  commentCount: number
  commentThreadId: string
  cover: string
  coverId: number
  coverId_str: string
  desc: string
  duration: number
  id: number
  nType: number
  name: string
  playCount: number
  price: Nullable<number>
  publishTime: string
  shareCount: number
  subCount: number
  videoGroup: any[]
}

export interface IMVDetailMp {
  cp: number
  dl: number
  fee: number
  id: number
  msg: Nullable<string>
  mvFee: number
  normal: boolean
  payed: number
  pl: number
  sid: number
  st: number
  unauthorized: boolean
}

export interface IMVDetailResponse extends IBaseResponse<IMVDetail> {
  bufferPic: string
  bufferPicFS: string
  loadingPic: string
  loadingPicFS: string
  mp: IMVDetailMp
  subed: boolean
}

export interface IRelatedMV {
  alg: string
  aliaName: Nullable<string>
  coverUrl: string
  creator: { userId: number; userName: string }[]
  durationms: number
  liveRoom: Nullable<string>
  markTypes: any[]
  playTime: number
  title: string
  transName: Nullable<string>
  type: number
  vid: string
}

export interface IRelatedMVsResponse extends IBaseResponse<IRelatedMV[]> {
  message: string
}
