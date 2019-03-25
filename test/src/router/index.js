import Vue from 'vue'
import Router from 'vue-router'
import _footer from '@/components/_footer'
import message from '@/components/message'
import pro from '@/components/pro'
import home from '@/components/home'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '_footer',
      component: _footer
    },
    {
      path: '/message',
      name: 'message',
      component: message
    },
    {
      path: '/pro',
      name: 'pro',
      component: pro
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
  ]
})
