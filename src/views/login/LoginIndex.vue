<template>
  <h1>登录</h1>
  {{ list }}
</template>

<script lang="ts" setup>
import { getLoginInfo } from '@/api/common'
import type { ILoginInfo } from '@/api/types/common'
import { onMounted, ref } from 'vue'

const list = ref<ILoginInfo['slide']>([])

onMounted(() => {
  getLoginInfo().then((res) => {
    console.log(res)
    list.value = res.data.slide
  })
})
</script>

<style lang="sass" scoped></style>
