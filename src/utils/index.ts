export const formatCount = (count: number) => {
  if (count > 1e8) return (count / 1e8).toFixed(1) + "亿"
  else if (count > 1e4) return (count / 1e4).toFixed(1) + "万"
  else return count.toString()
}

export const formatDuration = (duration: number) => {
  duration = Math.floor(duration / 1000)

  const minute = Math.floor(duration / 60)
  const second = duration % 60

  return `${minute.toString().padStart(2, "0")}:${second
    .toString()
    .padStart(2, "0")}`
}
