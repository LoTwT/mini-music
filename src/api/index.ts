import axios, { AxiosRequestConfig } from "axios"

const PROXY_PREFIX = "/api"

export const request = async <T>(config: AxiosRequestConfig<T>) => {
  config.url && (config.url = PROXY_PREFIX + config.url)
  const { data } = await axios.request<T>(config)
  return data
}
