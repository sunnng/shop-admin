<script setup lang="ts">
import { Fold, Expand } from '@element-plus/icons-vue'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useCommonStore } from '@/stores/common'

const commonStore = useCommonStore()

const { isCollapse } = storeToRefs(commonStore)
const { handleCollapse } = commonStore

const collapseIcon = computed(() => {
  return isCollapse.value ? Expand : Fold
})
</script>

<template>
  <div class="app-sidebar__collapse" @click="handleCollapse">
    <el-icon color="#7c878d" :size="24">
      <component :is="collapseIcon"></component>
    </el-icon>
  </div>
</template>

<style scoped lang="scss">
.app-sidebar__collapse {
  height: 100%;
  position: relative;
  cursor: pointer;

  .el-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
}

.app-sidebar__collapse:hover {
  background: #344257;

  .el-icon {
    color: #fff;
  }
}
</style>
