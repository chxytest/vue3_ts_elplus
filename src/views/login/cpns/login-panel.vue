<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs
      type="border-card"
      class="demo-tabs"
      :stretch="true"
      v-model="currentTab"
    >
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><User /></el-icon>
            <span>账号登陆</span>
          </span>
        </template>
        <login-account ref="loginAccountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登陆</span>
          </span>
        </template>
        <login-phone ref="loginPhoneRef"></login-phone>
      </el-tab-pane>
    </el-tabs>

    <div class="panel-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button class="login-btn" type="primary" @click="loginClick"
      >登陆</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { User, Iphone } from '@element-plus/icons'
import loginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'

export default defineComponent({
  components: {
    User,
    Iphone,
    loginAccount,
    LoginPhone
  },
  setup() {
    // 1.定义变量
    const isKeepPassword = ref(true)
    const loginAccountRef = ref<InstanceType<typeof loginAccount>>()
    const loginPhoneRef = ref<InstanceType<typeof loginAccount>>()
    const currentTab = ref('account')
    // 2.定义方法
    const loginClick = () => {
      // console.log('点击登录按钮', loginAccountRef.value)
      if (currentTab.value == 'account') {
        console.log('loginAccountRef')
        loginAccountRef.value?.loginAction(isKeepPassword.value)
      } else {
        console.log('loginPhoneRef', loginPhoneRef)
      }
    }
    return {
      isKeepPassword,
      loginAccountRef,
      loginPhoneRef,
      currentTab,
      loginClick
    }
  }
})
</script>

<style scoped lang="less">
.login-panel {
  margin-bottom: 150px;
  width: 320px;

  .title {
    text-align: center;
  }

  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }

  .panel-control {
    display: flex;
    justify-content: space-between;
    padding: 5px;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
