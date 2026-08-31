import { createRouter, createWebHistory } from 'vue-router'
import { useAdminAuth } from '../composables/useAdminAuth.js'

// ===============================
// MAIN PAGES
// ===============================

import HomeView from '../views/home.vue'
import SolutionsView from '../views/solutions.vue'
import PortfolioView from '../views/portfolio.vue'
import PortfolioDetailView from '../views/portfolio-detail.vue'
import TestimoniView from '../views/testimoni.vue'
import BlogView from '../views/blog.vue'
import blogRoutes from './blog.js'
import TentangKamiView from '../views/tentangkami.vue'
import ContactUs from '../views/ContactUs.vue'
import PricingView from '../views/pricing.vue'
import PaketdetailView from '../views/Paketdetail.vue'

// ===============================
// SOLUTIONS DETAIL
// ===============================

import CustomSoftwareView from '../views/custom-software.vue'
import WebDevelopmentView from '../views/web-development.vue'
import MobileAppView from '../views/mobile-app.vue'
import UIUXDesignView from '../views/ui-ux-design.vue'
import CloudDevOpsView from '../views/cloud-devops.vue'
import MaintenanceSupportView from '../views/maintenance-support.vue'

// ===============================
// ADMIN (login + upload artikel)
// ===============================

import adminRoutes from './admin.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [

    // ==========================================
    // HOME
    // ==========================================

    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    // ==========================================
    // MENU NAVBAR
    // ==========================================

    {
      path: '/pricing',
      name: 'pricing',
      component: PricingView,
    },

    // Halaman detail 1 paket, KHUSUS 1 layanan
    // Contoh: /paket/web-development/a  → Paket A untuk Web Development saja
    {
      path: '/paket/:serviceSlug/:packageId',
      name: 'Paketdetail',
      component: PaketdetailView,
    },

    {
      path: '/solutions',
      name: 'solutions',
      component: SolutionsView,
    },

    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView,
    },

    {
      path: '/portfolio/:slug',
      name: 'portfolio-detail',
      component: PortfolioDetailView,
    },

    {
      path: '/testimoni',
      name: 'testimoni',
      component: TestimoniView,
    },

    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },

    ...blogRoutes,

    {
      path: '/tentang-kami',
      name: 'tentang-kami',
      component: TentangKamiView,
    },

    {
      path: '/contact',
      name: 'Contact',
      component: ContactUs
    },

    // ==========================================
    // ADMIN
    // ==========================================

    ...adminRoutes,

    // ==========================================
    // DETAIL SOLUTIONS
    // ==========================================

    {
      path: '/solutions/custom-software',
      name: 'custom-software',
      component: CustomSoftwareView,
    },

    {
      path: '/solutions/web-development',
      name: 'web-development',
      component: WebDevelopmentView,
    },

    {
      path: '/solutions/mobile-app',
      name: 'mobile-app',
      component: MobileAppView,
    },

    {
      path: '/solutions/ui-ux-design',
      name: 'ui-ux-design',
      component: UIUXDesignView,
    },

    {
      path: '/solutions/cloud-devops',
      name: 'cloud-devops',
      component: CloudDevOpsView,
    },

    {
      path: '/solutions/maintenance-support',
      name: 'maintenance-support',
      component: MaintenanceSupportView,
    },

    // ==========================================
    // 404
    // ==========================================

    {
      path: '/:pathMatch(.*)*',
      redirect: '/',
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    return {
      top: 0,
      behavior: 'smooth',
    }
  },
})

// ==========================================
// AUTH GUARD — halaman dengan meta.requiresAuth
// hanya bisa diakses kalau sudah login sebagai admin
// ==========================================

router.beforeEach((to) => {
  if (to.meta.requiresAuth) {
    const { isLoggedIn } = useAdminAuth()
    if (!isLoggedIn.value) {
      return { path: '/admin/login' }
    }
  }
})

export default router