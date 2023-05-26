import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
function load(component) {
  return () => import(`@/views/${component}.vue`)
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/movie',
      name: 'Movie',
      component: load('MoviesPage'),
    },
    {
      path: '/tv',
      name: 'Tv',
      component: load('TvsPage'),
    },
    {
      path: '/search',
      name: 'Search',
      component: load('SearchPage'),
    },

  ]
})

export default router
