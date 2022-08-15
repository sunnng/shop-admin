<script lang="ts" setup>
import { Menu, HomeFilled, Histogram } from '@element-plus/icons-vue'
import { useCommonStore } from '@/stores/common'
import { storeToRefs } from 'pinia'

// const commonStore = commonStore()
const { isCollapse } = storeToRefs(useCommonStore())

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <el-menu
    text-color="#c1c6c8"
    active-text-color="#fff"
    background-color="#1e222d"
    default-active="2"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    router
  >
    <el-menu-item index="/">
      <el-icon><HomeFilled /></el-icon>
      <template #title>首页</template>
    </el-menu-item>
    <el-menu-item index="4">
      <el-icon><Histogram /></el-icon>
      <template #title>其他</template>
    </el-menu-item>
    <el-sub-menu index="1">
      <template #title>
        <el-icon><Menu /></el-icon>
        <span>商品</span>
      </template>
      <el-menu-item-group title="商品管理">
        <el-menu-item index="product/product_list">商品列表</el-menu-item>
        <el-menu-item index="1-2">item one</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="商品评价">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title>item four</template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
</template>

<style scoped lang="scss">
.el-menu {
  border-right: none;
}
.el-menu-item {
  height: 50px;
}
.el-menu-item.is-active {
  background-color: #006eff;
}
.el-menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
