import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home/Home.vue';
import PortfolioItemInfo from '../views/portfolio-item-info/PortfolioItemInfo.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/portfolio/item/:itemid',
    name: 'PortfolioItemInfo',
    component: PortfolioItemInfo,
  },
  {
    path: '/admin/portfolio/item/:itemid',
    name: 'PortfolioItemInfoAdmin',
    component: PortfolioItemInfo,
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
