import Vue from 'vue'
import Router from 'vue-router'
import _footer from '@/components/_footer'
import message from '@/components/message'
import pro from '@/components/pro'
import home from '@/components/home'
import homeDetail from '@/components/homeDetail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '_footer',
      component: _footer,
      redirect: '/message'
    },
    {
      path: '/message',
      name: 'message',
      meta:{
        title: '消息',
      },
      component: message
    },
    {
      path: '/pro',
      name: 'pro',
      meta:{
        title: '实例',
      },      
      component: pro
    },
    {
      path: '/home',
      name: 'home',
      meta:{
        title: '个人中心',
      },      
      component: home
    },
    {
      path: '/homeDetail',
      name: 'homeDetail',
      meta:{
        title: '个人档案',
      },      
      component: homeDetail
    },    
  ]
})
