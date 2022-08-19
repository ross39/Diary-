import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DailyView from '../views/DailyView.vue'
import MonthlyView from '../views/MonthlyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: '/dailyview',
      name: 'daily',
      component: DailyView,
    },
    {
      path: '/monthlyview',
      name: 'monthly',
      component: MonthlyView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
