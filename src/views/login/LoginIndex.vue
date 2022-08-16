<script lang="ts" setup>
import { getLoginInfo } from '@/api/common'
import type { ILoginInfo } from '@/api/types/common'
import LoginPanel from './LoginPanel.vue'

const list = ref<ILoginInfo['slide']>([])

onMounted(() => {
  getLoginInfo().then((res) => {
    console.log(res)
    list.value = res.data.slide
  })
})
</script>

<template>
  <div class="login-container">
    <div class="login-container__header"></div>
    <div class="login-container__content">
      <img
        class="login-logo"
        src="	https://pic2.zhimg.com/80/v2-f6b1f64a098b891b4ea1e3104b5b71f6_720w.png"
        alt="标题"
      />
      <LoginPanel />
    </div>
    <div class="login-container__footer"></div>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background: #b8e5f8
    url('https://static.zhihu.com/heifetz/assets/sign_bg.db29b0fb.png')
    no-repeat;
  background-size: cover;
  overflow: auto;
}

.login-container__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 1;
  min-height: 688px;

  .login-logo {
    width: 128px;
    height: 81px;
    margin-bottom: 24px;
  }
}

.login-container__footer {
  height: 152px;
}
</style>
