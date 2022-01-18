import { defineStore } from "pinia"
import { getRankings } from "@/api/music"
import { IRankingPlaylist } from "@/models/music"
import { Nullable } from "@/utils/types"

export const useRankingStore = defineStore("ranking", {
  state: (): {
    hotRanking: Nullable<IRankingPlaylist>
  } => ({
    hotRanking: null,
  }),
  actions: {
    async getHotRankingAction() {
      getRankings(1)
        .then((res) => (this.hotRanking = res.playlist))
        .catch(console.error)
    },
  },
})
