import { Nullable } from "@/utils/types"

export interface ISongDetailResponse {
  code: number
  privileges: any[]
  songs: ISongDetail[]
}

export interface ISongDetail {
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
  ar: [{ id: number; name: string; tns: any[]; alias: string[] }]
  cd: string
  cf: string
  copyright: number
  cp: number
  crbt: Nullable<any>
  djId: number
  dt: number
  entertainmentTags: Nullable<string[]>
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
  noCopyrightRcmd: Nullable<string>
  originCoverType: number
  originSongSimpleData: Nullable<any>
  pop: number
  pst: number
  publishTime: number
  resourceState: true
  rt: string
  rtUrl: Nullable<string>
  rtUrls: any[]
  rtype: number
  rurl: Nullable<string>
  s_id: number
  single: number
  songJumpInfo: Nullable<any>
  st: number
  t: number
  tagPicList: Nullable<any[]>
  v: number
  version: number
}
