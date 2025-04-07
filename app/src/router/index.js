import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LineView from '@/views/LineView.vue'
import BubbleView from '@/views/BubbleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/line',
      name: 'line',
      component: LineView,
    },
    {
      path: '/bubble',
      name: 'bubble',
      component: BubbleView,
    },
  ],
})

export default router
