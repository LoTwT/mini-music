<script setup lang="ts"></script>

<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left">
        <img
          class="left-arrow"
          src="@/assets/images/icons/arrow-left.png"
          alt="back"
        />
      </slot>
    </div>
    <div class="center">
      <slot name="center">标题</slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style scoped>
.nav-bar {
  width: 100%;
  display: flex;
  height: 60px;
  line-height: 60px;
  text-align: center;
}

.left,
.right {
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.center {
  flex: 1;
}

.left-arrow {
  height: 80%;
  cursor: pointer;
}
</style>
