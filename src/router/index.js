import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/HomePage.vue';
import About from '../pages/AboutPage.vue';
import Articles from '../pages/ArticlesPage.vue';
import Article from '../pages/ArticlePage.vue';
import PageNotFound from '../pages/PageNotFound.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/HomePage.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/AboutPage.vue')
  },
  {
    path: '/articles',
    name: 'Articles',
    component: () => import('../pages/ArticlesPage.vue')
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: () => import('../pages/ArticlePage.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: () => import('../pages/PageNotFound.vue')
  }
];

const router = createRouter({
  history: createWebHistory(), // Uses HTML5 history mode
  routes
});

export default router;