<script setup lang="ts">
import AppMenu from './app_menu/AppMenu.vue'
import ToggleSideBar from './app_menu/ToggleSideBar.vue'
</script>

<template>
  <el-container class="app-layout">
    <el-header style="background-color: #262f3e; color: #fff">Header</el-header>
    <el-container>
      <el-aside>
        <div class="app-menu">
          <div class="app-menu__header"></div>

          <div class="app-menu__body">
            <AppMenu />
          </div>

          <div class="app-menu__footer">
            <ToggleSideBar />
          </div>
        </div>
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
.app-menu {
  height: 100%;
  display: flex;
  flex-direction: column;

  .app-menu__body {
    flex: 1 1 auto;
  }

  .app-menu__footer {
    height: 56px;
  }
}
</style>
