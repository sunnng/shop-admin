<script setup lang="ts">
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>

<template>
  <div class="login-panel">
    <div class="login-panel__left">
      <div class="panel-left-container">
        <div class="panel-left-container__title">打开知乎APP</div>
        <div class="panel-left-container__subtitle">
          在「我的页」左上角打开扫一扫
        </div>
        <img
          class="panel-left-container__qrcode"
          width="120"
          height="120"
          src="@/assets/qrcode.png"
          alt="二维码"
        />
      </div>
      <div class="panel-left-footer">
        <el-button round size="small">下载知乎APP</el-button>
        <el-button round size="small">开通机构号</el-button>
        <el-button round size="small">无障碍模式</el-button>
      </div>
    </div>
    <div class="login-panel__right">
      <div class="login-panel-right__signIn">
        <el-tabs
          v-model="activeName"
          class="demo-tabs"
          @tab-click="handleClick"
        >
          <el-tab-pane label="验证码登录" name="first">验证码登录</el-tab-pane>
          <el-tab-pane label="密码登录" name="second">密码登录</el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-panel {
  display: flex;
  width: 733px;
  height: 491px;
  background: #fff;
}

.login-panel__left {
  width: 332px;
  border-right: 1px solid #ebebeb;

  .panel-left-container {
    height: 285px;
    padding-top: 98px;
    text-align: center;

    .panel-left-container__title {
      font-size: 16px;
      font-weight: 600;
      line-height: 23px;
    }

    .panel-left-container__subtitle {
      margin-top: 8px;
      margin-bottom: 24px;
      font-size: 14px;
      line-height: 20px;
      color: #444444;
    }

    .panel-left-container__qrcode {
      padding: 8px;
      border: 1px solid #ebebeb;
      border-radius: 6px;
    }
  }

  .panel-left-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    margin: 26px 0 22px;
  }
}

.login-panel__right {
  flex: 1 1;

  .login-panel-right__signIn {
    padding: 20px 21px 0 21px;
  }
}

:deep(.el-tabs__nav-wrap::after) {
  background-color: unset !important;
}

:deep(.el-tabs__item) {
  font-size: 16px;
  font-weight: 600;
}

:deep(.el-tabs__item.is-active) {
  color: #006eff;
}

.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
