import Vue from 'vue'
import VueRouter from 'vue-router'
import Operations from '@/pages/Operations.vue'
import Accounts from '@/pages/Accounts.vue'
import More from '@/pages/More'

Vue.use(VueRouter)

const routes = [
  {
    path: '/operations',
    name: 'operations',
    component: Operations,
    meta: { layout: 'default' }
  },
  {
    path: '/accounts',
    name: 'accounts',
    component: Accounts,
    meta: { layout: 'default' }
  },
  {
    path: '/more',
    name: 'more',
    component: More,
    meta: { layout: 'default' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
