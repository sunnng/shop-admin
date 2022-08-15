<script setup lang="ts">
import AppMenu from './AppMenu.vue'
import ToggleSideBar from './ToggleSideBar.vue'
</script>

<template>
  <div class="app-sidebar">
    <div class="app-sidebar__header"></div>

    <div class="app-sidebar__body">
      <AppMenu />
    </div>

    <div class="app-sidebar__footer">
      <ToggleSideBar />
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-sidebar {
  height: 100%;
  display: flex;
  flex-direction: column;

  .app-sidebar__body {
    flex: 1 1 auto;
  }

  .app-sidebar__footer {
    height: 56px;
    background: #262f3d;
  }
}
</style>
