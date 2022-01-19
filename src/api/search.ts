import { IHotKeywordsResponse, ISearchSuggestResponse } from "@/models/search"
import { request } from "."

export const getSearchHot = async () =>
  request<IHotKeywordsResponse>({
    url: "/search/hot",
  })

export const getSearchSuggest = async (keywords: string) =>
  request<ISearchSuggestResponse>({
    url: "/search/suggest",
    params: {
      keywords,
      type: "mobile",
    },
  })
