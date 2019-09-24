import request from '@/utils/request'
import Qs from 'qs'


export function loginByUsername(UserNameOrEmailOrPhone, Password) {
  const data = {
    UserNameOrEmailOrPhone,
    Password
  }
 // let data = Qs.stringify(data1);
  return request({
    url: '/api/User/AdminLogin',
    method: 'get',
    params: data
  
  })
}

export function logout() {
  return request({
    url: '/api/User/loginOut',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

