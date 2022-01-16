export interface IBaseResponse<T> {
  code: number
  data: T[]
  hasMore: boolean
  updateTime: number
}
