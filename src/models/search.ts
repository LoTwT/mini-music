import { Nullable } from "@/utils/types"

export interface IHotKeywordsResponse {
  code: number
  result: { hots: IHotKeywords[] }
}

export interface IHotKeywords {
  first: string
  iconType: number
  second: number
  third: Nullable<any>
}

export interface ISearchSuggestResponse {
  code: number
  result: { allMatch: ISearchSuggest[] }
}

export interface ISearchSuggest {
  alg: string
  feature: string
  keyword: string
  lastKeyword: string
  type: number
}
