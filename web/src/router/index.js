import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home.vue'
import LayananView from '../views/layanan.vue'
import PortofolioView from '../views/portfolio.vue'
import TentangKamiView from '../views/tentangkami.vue'
import BlogView from '../views/blog.vue'
import KonsultasiView from '../views/konsultasi.vue'
import PerencanaanView from '../views/perencanaan.vue'
import DevelopmentView from '../views/development.vue'
import DeployView from '../views/deploy.vue'
import OptimasiView from '../views/optimasi.vue'
import SupportView from '../views/support.vue'
import TestimoniView from '../views/testimoni.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/layanan', name: 'layanan', component: LayananView },
    { path: '/portofolio', name: 'portofolio', component: PortofolioView },
    { path: '/testimoni', name: 'testimoni', component: TestimoniView },
    { path: '/tentang-kami', name: 'tentang-kami', component: TentangKamiView },
    { path: '/blog', name: 'blog', component: BlogView },
    { path: '/layanan/perencanaan', name: 'perencanaan', component: PerencanaanView },
    { path: '/layanan/konsultasi', name: 'konsultasi', component: KonsultasiView },
    { path: '/layanan/development', name: 'development', component: DevelopmentView },
    { path: '/layanan/deploy', name: 'deploy', component: DeployView },
    { path: '/layanan/optimasi', name: 'optimasi', component: OptimasiView },
    { path: '/layanan/support', name: 'support', component: SupportView },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router