import { createRouter, createWebHistory } from 'vue-router'

// ===============================
// MAIN PAGES
// ===============================

import HomeView from '../views/home.vue'
import SolutionsView from '../views/solutions.vue'
import PortfolioView from '../views/portfolio.vue'
import TestimoniView from '../views/testimoni.vue'
import BlogView from '../views/blog.vue'
import TentangKamiView from '../views/tentangkami.vue'
import ContactUs from '../views/ContactUs.vue'

// ===============================
// SOLUTIONS DETAIL
// ===============================

import CustomSoftwareView from '../views/custom-software.vue'
import WebDevelopmentView from '../views/web-development.vue'
import MobileAppView from '../views/mobile-app.vue'
import UIUXDesignView from '../views/ui-ux-design.vue'
import CloudDevOpsView from '../views/cloud-devops.vue'
import MaintenanceSupportView from '../views/maintenance-support.vue'

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
      path: '/testimoni',
      name: 'testimoni',
      component: TestimoniView,
    },

    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },

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

export default router