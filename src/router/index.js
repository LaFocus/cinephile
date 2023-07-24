import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import MoviesItemPage from '@/views/MoviesItemPage.vue'

function load(component) {
  return () => import(`@/views/${component}.vue`)
}

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
    {
      path: '/:type/:id',
      name: 'MovieItemPage',
      component: MoviesItemPage
    },

  ],

  mode: 'history'
})

export default router
