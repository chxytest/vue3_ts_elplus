import hyRequest from '../index'

import { IAccount, IDataType, ILoginResult } from './type'

enum LoginApi {
  AccountLogin = '/login', // 登录
  LoginUserInfo = '/users/', // 获取用户信息
  UserMenus = '/role/' // 获取用户信息
}

export function accountLoginRequest(account: IAccount) {
  return hyRequest.post<IDataType<ILoginResult>>({
    url: LoginApi.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginApi.LoginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenusByRoleId(id: number) {
  return hyRequest.get<IDataType>({
    url: LoginApi.UserMenus + id + '/menu',
    showLoading: false
  })
}
