import { defineStore } from "pinia"
import { getRankings } from "@/api/music"
import { IRankingPlaylist } from "@/models/music"
import { Nullable } from "@/utils/types"

const rankingMap = {
  0: "newRanking",
  1: "hotRanking",
  2: "originRanking",
  3: "upRanking",
} as const

export const useRankingStore = defineStore("ranking", {
  state: (): {
    newRanking: Nullable<IRankingPlaylist>
    hotRanking: Nullable<IRankingPlaylist>
    originRanking: Nullable<IRankingPlaylist>
    upRanking: Nullable<IRankingPlaylist>
  } => ({
    newRanking: null,
    hotRanking: null,
    originRanking: null,
    upRanking: null,
  }),
  actions: {
    async getRankingsAction() {
      // idx => 0: 新歌 、 1: 热歌 、 2: 原创 、 3: 飙升
      for (let i: 0 | 1 | 2 | 3 = 0; i < 4; i++) {
        getRankings(i)
          .then((res) => {
            const rankingName = rankingMap[i]
            rankingName && (this[rankingName] = res.playlist)
          })
          .catch(console.error)
      }
    },
  },
})
