<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="area-header">
    <span class="area-header-title">{{ title }}</span>

    <span>
      <slot name="extra">
        <span class="area-header-extra">
          <span class="extra-title">更多</span>
          <img
            class="extra-img"
            src="@/assets/images/icons/arrow-right.png"
            alt="arrow-right"
          />
        </span>
      </slot>
    </span>
  </div>
</template>

<style scoped>
.area-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.area-header-title {
  font-size: 24px;
  font-weight: bold;
}

.area-header-extra {
  font-size: 16px;
  color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
}

.extra-img {
  width: 20px;
}
</style>
