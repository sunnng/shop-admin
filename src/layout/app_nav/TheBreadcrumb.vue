<script setup lang="ts">
const router = useRouter()

const routes = computed(() => {
  return router.currentRoute.value.matched.filter((item) => item.meta.title)
})

console.log(routes)
</script>

<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item
      v-for="item in routes"
      :key="item.path"
      :to="{ path: item.path }"
    >
      {{ item.meta.title }}
    </el-breadcrumb-item>
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
