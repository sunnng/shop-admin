<script setup lang="ts">
import TheBreadcrumb from './TheBreadcrumb.vue'
</script>

<template>
  <div class="app-nav">
    <div class="app-nav__start" style="color: #fff">
      <img
        class="app-nav-logo"
        src="https://cloudcache.tencentcs.com/open_proj/proj_qcloud_v2/tc-console/tea-static-sdknav/src/styles/assets/tencent-cloud.svg"
        alt="腾讯云"
      />
      <TheBreadcrumb />
    </div>
    <div class="app-nav__center"></div>
    <div class="app-nav__end"></div>
  </div>
</template>

<style scoped lang="scss">
.app-nav {
  height: 100%;
  display: flex;
  align-items: center;
}

.app-nav__start {
  display: flex;
  align-items: center;

  .app-nav-logo {
    padding-left: 20px;
    margin-right: 20px;
  }
}
</style>
