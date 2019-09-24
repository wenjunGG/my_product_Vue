import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}


export function getUser(key) {
  // alert(key)
  // alert(Cookies.get(key))
  return Cookies.get(key)
}
export function setUser(key,data) {
  return Cookies.set(key, data)
}
export function removeUser(key) {
  return Cookies.remove(key)
}
