import { loginByUsername, logout, getUserInfo } from '@/api/login'
import { getToken, setToken, removeToken, getUser, setUser, removeUser } from '@/utils/auth'
import { Message } from 'element-ui'

const user = {
  state: {
    user: '',
    status: '',
    code: '',
    token: getToken(),
    name: getUser("userName"),
    avatar: '',
    realName: getUser("realName"),
    permissions: getUser("permissions"),
    normalPermissions: getUser("normalPermissions"),
    introduction: '',
    roles: [],
    setting: {
      articlePlatform: []
    }
  },

  mutations: {
    SET_CODE: (state, code) => {
      state.code = code
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting
    },
    SET_STATUS: (state, status) => {
      state.status = status
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_USER: (state, user) => {
      state.user = user
    },
    SET_REAlNAME: (state, realName) => {
      state.realName = realName
    },
    SET_PERMISSIONS: (state, permissions) => {
      state.permissions = permissions
    },
    SET_NORMALPERMISSIONS: (state, normalPermissions) => {
      state.normalPermissions = normalPermissions
    }

  },

  actions: {
    // 用户名登录
    LoginByUsername({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        // debugger;
        loginByUsername(username, userInfo.password).then(response => {
          // debugger;
          const data = response.data;
          if (data.statusCode === 200) {
            commit('SET_TOKEN', data.data.token)
            if (data.data.Permissions && data.data.Permissions.length > 0) { // 验证返回的roles是否是一个非空数组
              commit('SET_ROLES', data.data.Permissions)
            }
            //  else {
            //   debugger;
            //   Message({
            //     message: data.msg,
            //     type: 'error',
            //     duration: 5 * 1000
            //   });
            //   reject('getInfo: roles must be a non-null array !')
            // }
            commit('SET_NAME', data.data.userName)
            commit('SET_REAlNAME', data.data.realName)
            commit('SET_PERMISSIONS', data.data.permissions)
            commit('SET_NORMALPERMISSIONS', data.data.realName)
            setUser("userName", data.data.userName)
            setUser("realName", data.data.realName)
            setUser("permissions", data.data.permissions)
            setUser("normalPermissions", data.data.normalPermissions)
            setToken(data.data.token)
            resolve()
          } else {
            Message({
              message: data.msg,
              type: 'error',
              duration: 5 * 1000
            });
            reject(data.msg);

          }
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.token).then(response => {
          if (!response.data) { // 由于mockjs 不支持自定义状态码只能这样hack
            reject('error')
          }
          const data = response.data

          if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
            commit('SET_ROLES', data.roles)
          } else {
            reject('getInfo: roles must be a non-null array !')
          }

          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          commit('SET_INTRODUCTION', data.introduction)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 第三方验证登录
    // LoginByThirdparty({ commit, state }, code) {
    //   return new Promise((resolve, reject) => {
    //     commit('SET_CODE', code)
    //     loginByThirdparty(state.status, state.email, state.code).then(response => {
    //       commit('SET_TOKEN', response.data.token)
    //       setToken(response.data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          removeUser("userName")
          removeUser("realName")
          removeUser("permissions")
          removeUser("normalPermissions")
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeUser("userName")
        removeUser("realName")
        resolve()
      })
    },

    // 动态修改权限
    ChangeRoles({ commit }, role) {
      return new Promise(resolve => {
        commit('SET_TOKEN', role)
        setToken(role)
        getUserInfo(role).then(response => {
          const data = response.data
          commit('SET_ROLES', data.roles)
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          commit('SET_INTRODUCTION', data.introduction)
          resolve()
        })
      })
    }
  }
}

export default user
