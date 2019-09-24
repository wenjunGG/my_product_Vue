<template>
  <el-menu class="navbar" mode="horizontal">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>

    <!-- <breadcrumb class="breadcrumb-container"></breadcrumb> -->
    <div class="title">
      <h1>系统管理</h1>
    </div>
    <div class="right-menu">
      <!-- <error-log class="errLog-container right-menu-item"></error-log> -->

      <!-- <el-tooltip effect="dark" :content="$t('navbar.screenfull')" placement="bottom"> -->
        <screenfull class="screenfull right-menu-item"></screenfull>
      <!-- </el-tooltip> -->

      <!-- <lang-select class="international right-menu-item"></lang-select> -->

      <!-- <el-tooltip effect="dark" :content="$t('navbar.theme')" placement="bottom">
        <theme-picker class="theme-switch right-menu-item"></theme-picker>
      </el-tooltip> -->

      <el-dropdown class="avatar-container right-menu-item" trigger="click">
        <div class="avatar-wrapper">
          <img class="user-avatar" src="/../assets/touxiang/zs.png">
          <span class="user_name">{{$store.state.user.name}}</span>
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu class="user_caozuo" slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>
              首页
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span @click="logout" style="display:block;">退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import Hamburger from '@/components/Hamburger'
import ErrorLog from '@/components/ErrorLog'
import Screenfull from '@/components/Screenfull'

export default {
  components: {
    Hamburger,
    ErrorLog,
    Screenfull,
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'name',
      'avatar'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('toggleSideBar')
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload()// In order to re-instantiate the vue-router object to avoid bugs
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 80px;
  line-height: 80px;
  border-radius: 0px !important;
  border: none;
  background-color: rgb(58, 75, 96);
  .title{
    display:inline-block;
    h1{
      margin:0;
      margin-left:20px;
      color:#fff;
    }
  }
  .hamburger-container {
    line-height: 85px;
    height: 80px;
    float: left;
    padding: 0 10px;
  }
  .breadcrumb-container{
    float: left;
  }
  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
  .right-menu {
    float: right;
    height: 100%;
    &:focus{
     outline: none;
    }
    .right-menu-item {
      display: inline-block;
      margin: 0 8px;
    }
    .screenfull {
      height: 20px;
    }
    .international{
      vertical-align: top;
    }
    .theme-switch {
      vertical-align: 0;
    }
    .avatar-container {
      height: 80px;
      margin-right: 30px;
      .avatar-wrapper {
        cursor: pointer;
        margin-top: 5px;
        position: relative;
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          vertical-align:-10px;
        }
        .user_name{
          color:#fff;
        }
        .el-icon-caret-bottom {
          color:#fff;
          position: absolute;
          right: -20px;
          top: 35px;
          font-size: 12px;
        }
      }

    }
  }
}
.user_caozuo{
  z-index: 9999 !important;    
  top: 55px!important;
  left:initial!important;
  right: 20px!important;
}
</style>
