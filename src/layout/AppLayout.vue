<script setup lang="ts">
import AppNav from './app_nav/AppNav.vue'
import AppSideBar from './app_sidebar/AppSidebar.vue'
</script>

<template>
  <el-container class="app-layout">
    <el-header>
      <AppNav />
    </el-header>
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
.el-header {
  height: 50px;
  background-color: #262f3e;
  padding-left: 0;
}
.el-aside {
  width: auto;
  background-color: #1e222d;
}
</style>
