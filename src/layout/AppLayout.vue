<script setup lang="ts">
import AppSideBar from './app_Sidebar/AppSidebar.vue'
</script>

<template>
  <el-container class="app-layout">
    <el-header style="background-color: #262f3e; color: #fff">Header</el-header>
    <el-container>
      <el-aside>
        <AppSideBar />
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<style scoped lang="scss">
.app-layout {
  height: 100vh;
}
.el-aside {
  width: auto;
  background-color: #1e222d;
}
</style>
