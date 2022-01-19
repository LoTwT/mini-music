<script setup lang="ts">
import { computed, ComputedRef, onMounted, ref } from "vue"
import { getSearchHot, getSearchSuggest } from "@/api/search"
import { NSelect, SelectOption } from "naive-ui"
import { IHotKeywords, ISearchSuggest } from "@/models/search"
import { Nullable } from "@/utils/types"

const searchValue = ref<Nullable<string>>(null)
const searchResult = ref<ISearchSuggest[]>([])

const searchOptions: ComputedRef<SelectOption[]> = computed(() =>
  searchResult.value.length === 0
    ? []
    : searchResult.value.map((i) => ({ value: i.keyword, label: i.keyword })),
)
const hotKeywords = ref<IHotKeywords[]>([])

onMounted(() => {
  getSearchHot().then((res) => (hotKeywords.value = res.result.hots))
})

const handleSearchValueChange = (value: string) => {
  if (value && value === "") {
    searchResult.value = []
  } else {
    getSearchSuggest(value).then(
      (res) => (searchResult.value = res.result.allMatch),
    )
  }
}

const handleClear = () => (searchResult.value = [])

const handleKeywordsClick = (value: string) => {
  searchValue.value = value
  handleSearchValueChange(value)
}
</script>

<template>
  <n-select
    v-model:value="searchValue"
    filterable
    clearable
    remote
    size="large"
    placeholder="搜索您喜欢的歌曲"
    :options="searchOptions"
    :on-search="handleSearchValueChange"
    :on-clear="handleClear"
  >
    <template #empty>
      <div class="hot-keywords">
        <template v-for="keyword in hotKeywords" :key="keyword.first">
          <div
            class="keyword"
            @click="() => handleKeywordsClick(keyword.first)"
          >
            {{ keyword.first }}
          </div>
        </template>
      </div>
    </template>
  </n-select>
</template>

<style scoped>
.hot-keywords {
  display: flex;
  flex-wrap: wrap;
}

.keyword {
  margin: 8px;
  padding: 4px 24px;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: pointer;
  border-radius: 16px;
  font-size: 20px;
  font-weight: 600;
  color: white;
}

.keyword:first-of-type {
  color: lightgreen;
}
</style>
