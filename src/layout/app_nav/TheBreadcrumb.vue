<script setup lang="ts"></script>

<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
    <el-breadcrumb-item><a href="/">商品</a></el-breadcrumb-item>
    <el-breadcrumb-item>promotion list</el-breadcrumb-item>
    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style scoped lang="scss">
:deep(.el-breadcrumb__inner) {
  color: #a2aaad !important;
}

:deep(.el-breadcrumb__inner a) {
  color: #a2aaad !important;
}
.el-breadcrumb {
  margin: 0 12px;
}
</style>
