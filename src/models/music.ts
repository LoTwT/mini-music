import { Nullable } from "@/utils/types"

export interface IBannersResponse {
  code: number
  banners: IBanner[]
}

export interface IBanner {
  adDispatchJson: Nullable<object>
  adLocation: Nullable<string>
  adSource: Nullable<string>
  adid: Nullable<number>
  encodeId: string
  event: Nullable<string>
  exclusive: boolean
  extMonitor: any
  extMonitorInfo: any
  imageUrl: string
  monitorBlackList: Nullable<any[]>
  monitorClick: Nullable<any>
  monitorClickList: Nullable<any[]>
  monitorImpress: Nullable<any>
  monitorImpressList: Nullable<any[]>
  monitorType: Nullable<any>
  program: Nullable<any>
  scm: string
  song: Nullable<any>
  targetId: number
  targetType: number
  titleColor: string
  typeTitle: string
  url: Nullable<string>
  video: Nullable<string>
}

export interface IRankingResponse {
  code: number
  playlist: IRankingPlaylist
}

export interface IRankingPlaylist {
  ToplistType: string
  adType: number
  backgroundCoverId: number
  backgroundCoverUrl: Nullable<string>
  cloudTrackCount: number
  commentCount: number
  commentThreadId: string
  coverImgId: number
  coverImgId_str: string
  coverImgUrl: string
  createTime: number
  creator: Record<string, any>
  description: string
  englishTitle: Nullable<string>
  highQuality: boolean
  historySharedUsers: Nullable<any>
  id: number
  name: string
  newImported: boolean
  officialPlaylistType: Nullable<string>
  opRecommend: boolean
  ordered: boolean
  playCount: number
  privacy: number
  remixVideo: Nullable<any>
  shareCount: number
  sharedUsers: Nullable<any>
  specialType: number
  status: number
  subscribed: Nullable<boolean>
  subscribedCount: number
  subscribers: any[]
  tags: any[]
  titleImage: number
  titleImageUrl: Nullable<string>
  trackCount: number
  trackIds: {
    alg: Nullable<any>
    at: number
    id: number
    lr: number
    rcmdReason: string
    t: number
    uid: number
    v: number
  }[]
  trackNumberUpdateTime: number
  trackUpdateTime: number
  tracks: IRankingTrack[]
  updateFrequency: Nullable<any>
  updateTime: number
  userId: number
  videoIds: Nullable<any[]>
  videos: Nullable<any[]>
}

export interface IRankingTrack {
  a: Nullable<any>
  al: {
    id: number
    name: string
    pic: number
    picUrl: string
    pic_str: string
    tns: any[]
  }
  alia: string[]
  ar: { alias: any[]; id: number; name: string; tns: any[] }[]
  cd: string
  cf: string
  copyright: number
  cp: number
  crbt: null
  djId: number
  dt: number
  fee: number
  ftype: number
  h: { br: number; fid: number; size: number; vd: number }
  id: number
  l: { br: number; fid: number; size: number; vd: number }
  m: { br: number; fid: number; size: number; vd: number }
  mark: number
  mst: number
  mv: number
  name: string
  no: number
  noCopyrightRcmd: null
  originCoverType: number
  originSongSimpleData: null
  pop: number
  pst: number
  publishTime: number
  rt: string
  rtUrl: null
  rtUrls: string[]
  rtype: number
  rurl: null
  s_id: number
  single: number
  st: number
  t: number
  v: number
}
