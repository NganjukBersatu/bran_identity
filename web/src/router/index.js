import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'
import LayananView from '../views/layanan.vue'
import PortofolioView from '../views/portfolio.vue'
import TentangKamiView from '../views/tentangkami.vue'
import BlogView from '../views/blog.vue'
import KonsultasiView from '../views/konsultasi.vue'
import PerencanaanView from '../views/perencanaan.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/layanan', name: 'layanan', component: LayananView },
    { path: '/portofolio', name: 'portofolio', component: PortofolioView },
    { path: '/tentang-kami', name: 'tentang-kami', component: TentangKamiView },
    { path: '/blog', name: 'blog', component: BlogView },
    { path: '/layanan/perencanaan', name: 'perencanaan', component: PerencanaanView },
    { path: '/layanan/konsultasi', name: 'konsultasi', component: KonsultasiView },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router