import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SinglePage from '../views/SinglePage.vue'
import FavouritesPage from '../views/FavouritesPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/photo/:item',
    name: 'single',
    component: SinglePage
  },
  {
    path: '/favourites',
    name: 'favourites',
    component: FavouritesPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
