const getters = {
  sidebar: state => state.app.sidebar,
  language: state => state.app.language,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  permissions: state => state.user.permissions,
  normalPermissions: state => state.user.normalPermissions,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  status: state => state.user.status,
  roles: state => state.user.roles,
  setting: state => state.user.setting,
  permission_routers: state => state.permission.routers,
  permission_menus: state => state.permission.menus,
  addRouters: state => state.permission.addRouters,
  errorLogs: state => state.errorLog.logs,
  siderbarReady: state => state.permission.sidebarReady


}
export default getters
