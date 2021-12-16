import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Create from '../components/Create.vue'
import Edit from '../components/Edit.vue'
import List from '../components/Listar.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/crear',
    name: 'Crear',
    component: Create
  },
  {
    path: '/edit/:id',
    name: 'Editar',
    component: Edit
  },
  {
    path: '/list',
    name: 'Listar',
    component: List
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'  
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
