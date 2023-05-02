import { createRouter, createWebHistory } from 'vue-router'
import TodoView from '../views/TodoView.vue'
import UserAuth from '../components/auth/UserAuth.vue'
import About from '../views/AboutView.vue'
// import Home from '../views/HomeView.vue'
// import UserAuth from '../components/auth/UserAuth.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'TodoView',
      component: TodoView
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/auth',
      name: 'UserAuth',
      component: UserAuth
    }
  ]
})
// console.log(router)
export default router
