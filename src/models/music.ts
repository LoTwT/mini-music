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
