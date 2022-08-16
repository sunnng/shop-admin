<script setup lang="ts">
import { FullScreen } from '@element-plus/icons-vue'

const toggleFullScreen = () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen()
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen()
    }
  }
}
</script>

<template>
  <div class="app-nav-icon-item">
    <el-icon color="#a2aaad" :size="18" @click="toggleFullScreen">
      <FullScreen />
    </el-icon>
  </div>
</template>

<style scoped lang="scss">
.el-icon {
  padding: 0 16px;
  cursor: pointer;
}

.app-nav-icon-item {
  height: 100%;
  display: flex;
  align-items: center;
}

.app-nav-icon-item:hover {
  background: #344257;

  .el-icon {
    color: #fff;
  }
}
</style>
