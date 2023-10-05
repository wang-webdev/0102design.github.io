// router.ts

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from './src/views/Home.vue'; // 导入您的页面组件

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // 添加其他页面的路由配置
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
