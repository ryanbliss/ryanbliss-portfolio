import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home/Home.vue';
import PortfolioItemInfo from '../views/portfolio-item-info/PortfolioItemInfo.vue';
import Portfolio from '../views/portfolio/Portfolio.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/portfolio/:itemid',
    name: 'PortfolioItemInfo',
    component: PortfolioItemInfo,
  },
  {
    path: '/admin/portfolio/:itemid',
    name: 'PortfolioItemInfoAdmin',
    component: PortfolioItemInfo,
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
