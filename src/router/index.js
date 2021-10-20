import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MainTeacher from '../views/main-teacher'
import ClassesTeacher from '../views/classes-teacher'
import Perfil from '../views/perfil'
import IncomesTeacher from '../views/incomes-teacher'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/teacher-main',
    name: 'Teacher Main',
    component: MainTeacher
  },
  {
    path: '/teacher-classes',
    name: 'Teacher Classes',
    component: ClassesTeacher
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: Perfil
  },

  {
    path: '/teacher-incomes',
    name: 'Teacher',
    component: IncomesTeacher
  },

  {
    path: '/sign-up',
    name: 'Sign Up',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/sign-up.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
