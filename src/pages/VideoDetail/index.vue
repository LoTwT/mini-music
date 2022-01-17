<script setup lang="ts">
import { ref, onMounted } from "vue"
import { useRoute, useRouter } from "vue-router"
import { NImage } from "naive-ui"
import { getMVDetail, getMVSrc, getRelatedMVs } from "@/api/video"
import { Nullable } from "@/utils/types"
import { IMVDetail, IMVSrcInfo, IRelatedMV } from "@/models/video"
import { formatCount } from "@/utils/index"

const route = useRoute()
const id = parseInt(route.params.id as string)

const router = useRouter()

const mvSrcInfo = ref<Nullable<IMVSrcInfo>>(null)
const mvDetail = ref<Nullable<IMVDetail>>(null)
const relatedMVs = ref<IRelatedMV[]>([])

onMounted(() => {
  getPageData(id)
})

const getPageData = (id: number) => {
  // 1. 请求播放地址
  getMVSrc(id).then((res) => (mvSrcInfo.value = res.data))

  // 2. 请求视频信息
  getMVDetail(id).then((res) => (mvDetail.value = res.data))

  // 3. 请求相关视频
  getRelatedMVs(id).then((res) => (relatedMVs.value = res.data))
}

const onRelatedVideoClick = (v: IRelatedMV) => {
  // todo
  // router.push()
}
</script>

<template>
  <div class="video-detail">
    <video class="video-el" :src="mvSrcInfo?.url" controls></video>

    <div class="video-info">
      <div class="video-description">
        <span class="video-title">{{ mvDetail?.name }}</span>
        <span class="video-artist">{{ mvDetail?.artistName }}</span>
        <span class="video-others">
          {{ mvDetail?.playCount && formatCount(mvDetail.playCount) }} -
          {{ mvDetail?.publishTime }}
        </span>
      </div>

      <div class="related-videos">
        <div class="related-videos-title">推荐视频</div>
        <template v-for="v in relatedMVs" :key="v.vid">
          <div class="related-video" @click="() => onRelatedVideoClick(v)">
            <div class="related-video-cover">
              <n-image
                width="200"
                height="112"
                class="mv-item-album-image"
                object-fit="fill"
                :src="v.coverUrl"
                preview-disabled
              />

              <div class="related-video-count">
                {{ formatCount(v.playTime) }}
              </div>
            </div>

            <div class="related-video-info">
              <span class="related-video-info-title">{{ v.title }}</span>
              <span class="related-video-info-creator">
                {{ v.creator[0].userName }}
              </span>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.video-detail {
  width: 100vw;
}

.video-el {
  width: 100vw;
  height: 75vh;
}

.video-info {
  height: 25vh;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  padding: 0 16px;
}

.video-description {
  display: flex;
  flex-direction: column;
}

.video-title {
  font-size: 32px;
  font-weight: bold;
}

.video-artist {
  font-size: 24px;
}

.related-videos {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

.related-videos-title {
  font-size: 24px;
  font-weight: bold;
  margin: 16px 0;
}

.related-video {
  display: flex;
  cursor: pointer;
  margin: 4px 0;
}

.related-video-info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 8px;
}

.related-video-info-title {
  font-size: 24px;
  font-weight: bold;
}

.related-video-info-creator {
  font-size: 16px;
}

.related-video-cover {
  position: relative;
}

.related-video-count {
  position: absolute;
  bottom: 0;
  right: 0;
  color: white;
  margin-bottom: 8px;
  margin-right: 4px;
}
</style>
