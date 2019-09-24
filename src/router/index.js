import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/Layout'

Vue.use(Router)


export const constantRouterMap = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
        path: 'home',
        component: () =>
            import('@/views/home/index'),
    }]
  },
];


// {
//   path: '/',
//   component: Layout,
//   redirect: '/home',
//   children: [{
//       path: 'home',
//       component: () =>
//           import('@/views/home/index'),
//   }]
// },


export default new Router({
      // mode: 'history', // require service support
      scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRouterMap,
})

export const asyncRouterMap = [
  ];


     
