import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: { name: 'home' }
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('../views/NotFoundView.vue')
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: () => import('../views/NotFoundView.vue')
  },
  {
    path: '/stat',
    name: 'stat',
    component: () => import('../views/NotFoundView.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
