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

export interface ITopMVResponse extends IBaseResponse<ITopMV> {}
