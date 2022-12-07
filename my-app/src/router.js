import { createRouter, createWebHistory } from 'vue-router'
import PageHome from './components/PageHome.vue'
 import DashboardPage from './components/DashboardPage.vue'
// import HadiSadegh from './components/HadiSadegh.vue'
const routes = [
    { path: "/", component: DashboardPage },
   { path: "/Page/:page", component: PageHome },
  // { path: "/HadiSadegh", component: HadiSadegh },
]

const router = createRouter({
    history: createWebHistory(),
    routes,

})


export default router;