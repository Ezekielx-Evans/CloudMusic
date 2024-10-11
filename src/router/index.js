// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// 1. 定义路由组件
import HomePage from '../components/HomePage.vue'
import RankList from '@/components/RankList.vue'
import SongList from '@/components/SongList.vue'
import MVList from '@/components/MVList.vue'
import SingerList from '@/components/SingerList.vue'

// 2. 定义路由，每个路由映射到一个组件
const routes = [
  { path: '/', component: HomePage },
  { path: '/rank', component: RankList },
  { path: "/song", component: SongList },
  { path: "/mv", component: MVList },
  { path: "/singer", component: SingerList},
]

// 3. 创建路由实例并传入 `routes` 配置
const router = createRouter({
  history: createWebHistory(),
  routes
})

// 4. 导出路由实例
export default router
