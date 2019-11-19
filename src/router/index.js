import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Introduction from '@/components/introduction/Introduction'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/introduction',
      name: 'Introduction',
      component: Introduction
    }
  ]
})
