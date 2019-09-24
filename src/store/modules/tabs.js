const tabs = {
  state: {
   informationTabName:'news'
  },

  mutations: {
    SET_INFORMATIONTABNAME: (state, name) => {
      state.informationTabName = name
    },
  },

  actions: {
    // 保存当前tab状态
    saveCurrentTab({ commit }, name) {
        commit('SET_INFORMATIONTABNAME', name)
    },
  }
}

export default tabs
