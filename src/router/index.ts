import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home/HomeIndex.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/LoginIndex.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
