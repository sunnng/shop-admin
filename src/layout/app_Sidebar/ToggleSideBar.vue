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
  <el-icon color="#fff" :size="24" @click="handleCollapse">
    <component :is="collapseIcon"></component>
  </el-icon>
</template>

<style scoped lang="scss"></style>
