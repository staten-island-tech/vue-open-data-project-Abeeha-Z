import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import lineChart from '@/components/lineChart.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/./components',
      name: 'lineChart',
      component: 'Line'
    }
  ],
})

export default router
