import { Module } from 'vuex'
import localCache from '@/utils/cache'

import { IloginState } from './type'
import { IRootState } from '../type'
import { IAccount } from '@/service/login/type'

import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import router from '@/router'

const loginModule: Module<IloginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
    }
  },
  actions: {
    // 一、登录方法
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1.实现登陆逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      console.log('loginResult :', loginResult)
      localCache.setCache('token', token)

      // 2.请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit('changeUserInfo', userInfo)
      console.log('userInfoResult :', userInfoResult)
      localCache.setCache('userInfo', userInfo)

      // 3.请求用户菜单角色权限
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit('changeUserMenus', userMenus)
      console.log('userMenus :', userMenus)
      localCache.setCache('userMenus', userMenus)

      // 4.登录成功后跳转首页
      router.push('/main')
    },
    // phoneLoginAction({ commit }, payload: any) {
    //   console.log('phoneLoginAction', payload)
    // }
    // 二、首页刷新校验token
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')
      if (token) {
        commit('changeToken', token)
      }
      const userInfo = localCache.getCache('userInfo')
      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }
      const userMenus = localCache.getCache('userMenus')
      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
