import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import errorLog from './modules/errorLog'
import tagsView from './modules/tagsView'
import user from './modules/user'
import tabs from './modules/tabs'
import getters from './getters'
import axios from 'axios'
import Qs from 'qs'
import { getToken } from '@/utils/auth'
import { Message } from 'element-ui'



// axios.defaults.withCredentials=true;
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        app,
        errorLog,
        tagsView,
        user,
        tabs
    },
    getters,

    mutations: {

        bgcColor(state, bcolor) {
            // console.log(bcolor.bcolor)
            state.BColor = bcolor.bcolor;
        },
        textColor(state, tcolor) {
            // console.log(tcolor.tcolor)
            state.TColor = tcolor.tcolor
        },
        isCollapseShow(state) {
            state.isCollapse = !state.isCollapse
            state.asideWidth = state.asideWidth == '17%' ? '4%' : '17%'
        },
        login(state) {
            state.token = true
        }
    },
    actions: {

        actionTest({ commit, state }, parameter) {
        }
    }
})

export default store