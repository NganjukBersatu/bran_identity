<template>
  <header
    class="navbar"
    :class="{
      'navbar-transparent': isHome && !isScrolled && !isAdminPage,
      'navbar-scrolled': isScrolled || !isHome || isAdminPage
    }"
  >
    <div class="navbar-container">

      <!-- =========================
           LOGO
      ========================== -->
      <router-link to="/" class="brand" @click="closeMenu">
        <div class="brand-icon">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 3L42 13.5V34.5L24 45L6 34.5V13.5L24 3Z"
              fill="url(#brandGradient)"
            />

            <path
              d="M17 20L12.5 24L17 28"
              stroke="currentColor"
              stroke-width="2.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <path
              d="M31 20L35.5 24L31 28"
              stroke="currentColor"
              stroke-width="2.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <path
              d="M27.5 17.5L20.5 30.5"
              stroke="currentColor"
              stroke-width="2.2"
              stroke-linecap="round"
            />

            <defs>
              <linearGradient
                id="brandGradient"
                x1="6"
                y1="3"
                x2="42"
                y2="45"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#FCEF92" />
                <stop offset="0.5" stop-color="#FB9F37" />
                <stop offset="1" stop-color="#E75119" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div class="brand-text">
          <span class="brand-name">
            BRAN<span>IDENTITY</span>
          </span>

          <span class="brand-tagline">
            Digital Solution for Your Business
          </span>
        </div>
      </router-link>


      <!-- =========================
           DESKTOP NAVIGATION
           (disembunyikan di halaman admin)
      ========================== -->
      <nav v-if="!isAdminPage" class="desktop-nav">

        <!-- HOME -->
        <router-link
          to="/"
          class="nav-link"
          :class="{ active: route.path === '/' }"
          @click="closeDropdown"
        >
          Home
        </router-link>


        <!-- SOLUTION -->
        <div
          class="nav-dropdown"
          @mouseenter="openDropdown"
          @mouseleave="scheduleCloseDropdown"
        >
          <div class="solution-nav-wrapper">

            <router-link
              to="/solutions"
              class="nav-link solution-link"
              :class="{ active: isSolutionPage }"
              @click="closeDropdown"
            >
              Solution

              <svg
                class="dropdown-arrow"
                :class="{ rotate: dropdownOpen }"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  d="M3 4.5L6 7.5L9 4.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </router-link>

          </div>


          <!-- DROPDOWN -->
          <transition name="dropdown">
            <div
              v-if="dropdownOpen"
              class="dropdown-menu"
              @mouseenter="cancelCloseDropdown"
              @mouseleave="scheduleCloseDropdown"
            >

              <router-link
                v-for="item in solutions"
                :key="item.slug"
                :to="`/solutions/${item.slug}`"
                class="dropdown-item"
                :class="{
                  active:
                    route.path === `/solutions/${item.slug}`
                }"
                @click="closeDropdown"
              >
                <span class="dropdown-title">
                  {{ item.title }}
                </span>
              </router-link>

            </div>
          </transition>
        </div>


        <!-- PORTFOLIO -->
        <router-link
          to="/portfolio"
          class="nav-link"
          :class="{ active: route.path === '/portfolio' }"
        >
          Portfolio
        </router-link>


        <!-- TESTIMONI -->
        <router-link
          to="/testimoni"
          class="nav-link"
          :class="{ active: route.path === '/testimoni' }"
        >
          Testimoni
        </router-link>


        <!-- TENTANG KAMI -->
        <router-link
          to="/tentang-kami"
          class="nav-link"
          :class="{ active: route.path === '/tentang-kami' }"
        >
          Tentang Kami
        </router-link>


        <!-- BLOG -->
        <router-link
          to="/blog"
          class="nav-link"
          :class="{ active: route.path === '/blog' }"
        >
          Blog
        </router-link>


        <!-- CONTACT US -->
        <router-link
          to="/contact"
          class="nav-link"
          :class="{ active: route.path === '/contact' }"
        >
          Contact Us
        </router-link>

      </nav>


      <!-- =========================
           MOBILE BUTTON
           (disembunyikan di halaman admin)
      ========================== -->
      <button
        v-if="!isAdminPage"
        class="mobile-toggle"
        type="button"
        aria-label="Toggle navigation"
        :aria-expanded="mobileOpen"
        @click="toggleMobile"
      >
        <span :class="{ open: mobileOpen }"></span>
        <span :class="{ open: mobileOpen }"></span>
        <span :class="{ open: mobileOpen }"></span>
      </button>

    </div>


    <!-- =========================
         MOBILE NAVIGATION
         (disembunyikan di halaman admin)
    ========================== -->
    <transition name="mobile-menu">
      <div
        v-if="mobileOpen && !isAdminPage"
        class="mobile-nav"
      >

        <!-- HOME -->
        <router-link
          to="/"
          class="mobile-nav-link"
          :class="{ active: route.path === '/' }"
          @click="closeMenu"
        >
          Home
        </router-link>


        <!-- SOLUTION MOBILE -->
        <div class="mobile-solution">

          <div class="mobile-solution-header">

            <router-link
              to="/solutions"
              class="mobile-nav-link"
              :class="{ active: isSolutionPage }"
              @click="closeMenu"
            >
              Solution
            </router-link>

            <button
              class="mobile-solution-toggle"
              type="button"
              @click="mobileSolutionOpen = !mobileSolutionOpen"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                :class="{ rotate: mobileSolutionOpen }"
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="currentColor"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

          </div>


          <!-- MOBILE SOLUTIONS LIST -->
          <transition name="mobile-solutions">
            <div
              v-if="mobileSolutionOpen"
              class="mobile-solutions-list"
            >

              <router-link
                v-for="item in solutions"
                :key="item.slug"
                :to="`/solutions/${item.slug}`"
                class="mobile-solution-item"
                :class="{
                  active:
                    route.path === `/solutions/${item.slug}`
                }"
                @click="closeMenu"
              >
                {{ item.title }}
              </router-link>

            </div>
          </transition>

        </div>


        <!-- PORTFOLIO -->
        <router-link
          to="/portfolio"
          class="mobile-nav-link"
          :class="{ active: route.path === '/portfolio' }"
          @click="closeMenu"
        >
          Portfolio
        </router-link>


        <!-- TESTIMONI -->
        <router-link
          to="/testimoni"
          class="mobile-nav-link"
          :class="{ active: route.path === '/testimoni' }"
          @click="closeMenu"
        >
          Testimoni
        </router-link>


        <!-- TENTANG KAMI -->
        <router-link
          to="/tentang-kami"
          class="mobile-nav-link"
          :class="{ active: route.path === '/tentang-kami' }"
          @click="closeMenu"
        >
          Tentang Kami
        </router-link>


        <!-- BLOG -->
        <router-link
          to="/blog"
          class="mobile-nav-link"
          :class="{ active: route.path === '/blog' }"
          @click="closeMenu"
        >
          Blog
        </router-link>


        <!-- CONTACT -->
        <router-link
          to="/contact"
          class="mobile-nav-link"
          :class="{ active: route.path === '/contact' }"
          @click="closeMenu"
        >
          Contact Us
        </router-link>

      </div>
    </transition>

  </header>
</template>


<script setup>
import {
  ref,
  computed,
  onMounted,
  onUnmounted
} from 'vue'

import { useRoute } from 'vue-router'
import { solutions } from '../router/solutions.js'


/* =========================
   ROUTER
========================= */

const route = useRoute()


/* =========================
   STATE
========================= */

const isScrolled = ref(false)

const dropdownOpen = ref(false)

const mobileOpen = ref(false)

const mobileSolutionOpen = ref(false)

let closeTimer = null


/* =========================
   HOME CHECK
========================= */

const isHome = computed(() => {
  return route.path === '/'
})


/* =========================
   ADMIN PAGE CHECK
========================= */

const isAdminPage = computed(() => {
  return route.path.startsWith('/admin')
})


/* =========================
   SOLUTION PAGE CHECK
========================= */

const isSolutionPage = computed(() => {
  return route.path.startsWith('/solutions')
})


/* =========================
   SCROLL
========================= */

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40
}


/* =========================
   DESKTOP DROPDOWN
========================= */

const openDropdown = () => {
  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }

  dropdownOpen.value = true
}


const scheduleCloseDropdown = () => {
  if (closeTimer) {
    clearTimeout(closeTimer)
  }

  closeTimer = setTimeout(() => {
    dropdownOpen.value = false
  }, 180)
}


const cancelCloseDropdown = () => {
  if (closeTimer) {
    clearTimeout(closeTimer)
  }

  dropdownOpen.value = true
}


const closeDropdown = () => {
  dropdownOpen.value = false

  if (closeTimer) {
    clearTimeout(closeTimer)
    closeTimer = null
  }
}


/* =========================
   MOBILE
========================= */

const toggleMobile = () => {
  mobileOpen.value = !mobileOpen.value

  if (!mobileOpen.value) {
    mobileSolutionOpen.value = false
  }
}


const closeMenu = () => {
  mobileOpen.value = false
  mobileSolutionOpen.value = false
  dropdownOpen.value = false
}


/* =========================
   ESCAPE KEY
========================= */

const handleKeydown = (event) => {
  if (event.key === 'Escape') {
    closeMenu()
  }
}


/* =========================
   LIFECYCLE
========================= */

onMounted(() => {
  handleScroll()

  window.addEventListener(
    'scroll',
    handleScroll,
    { passive: true }
  )

  window.addEventListener(
    'keydown',
    handleKeydown
  )
})


onUnmounted(() => {
  window.removeEventListener(
    'scroll',
    handleScroll
  )

  window.removeEventListener(
    'keydown',
    handleKeydown
  )

  if (closeTimer) {
    clearTimeout(closeTimer)
  }
})
</script>


<style scoped>

/* =====================================================
   NAVBAR
===================================================== */

.navbar {
  position: fixed;

  top: 0;
  left: 0;

  width: 100%;
  height: 88px;

  z-index: 9999;

  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease,
    backdrop-filter 0.3s ease;

  background: var(--color-surface);
}


/* =====================================================
   TRANSPARENT HOME
===================================================== */

.navbar-transparent {
  background: transparent;

  box-shadow: none;

  backdrop-filter: none;
}

/* Gradient tipis di belakang navbar transparan */
.navbar-transparent::before {
  content: '';

  position: absolute;

  inset: 0;

  z-index: -1;

  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.35) 0%,
    rgba(0, 0, 0, 0.15) 60%,
    rgba(0, 0, 0, 0) 100%
  );

  pointer-events: none;
}


/* =====================================================
   SCROLLED / OTHER PAGE / ADMIN
===================================================== */

.navbar-scrolled {
  background: rgba(255, 255, 255, 0.96);

  box-shadow:
    0 8px 30px rgba(26, 26, 26, 0.08);

  backdrop-filter: blur(12px);
}


/* =====================================================
   CONTAINER
===================================================== */

.navbar-container {
  width: min(
    var(--container-width),
    calc(100% - 48px)
  );

  height: 100%;

  margin: 0 auto;

  display: flex;

  align-items: center;

  justify-content: space-between;
}


/* =====================================================
   BRAND
===================================================== */

.brand {
  display: inline-flex;

  align-items: center;

  gap: 12px;

  text-decoration: none;

  flex-shrink: 0;
}


.brand-icon {
  width: 42px;
  height: 42px;

  display: flex;

  align-items: center;

  justify-content: center;

  color: var(--color-red);
}


.brand-icon svg {
  width: 42px;
  height: 42px;
}


/* =====================================================
   BRAND TEXT
===================================================== */

.brand-text {
  display: flex;

  flex-direction: column;
}


.brand-name {
  font-family: var(--font-heading);

  font-size: 20px;

  line-height: 1.1;

  font-weight: 700;

  color: var(--color-text);

  white-space: nowrap;

  transition: color 0.3s ease;
}


.brand-name span {
  color: var(--color-deep-orange);

  transition: color 0.3s ease;
}


.brand-tagline {
  margin-top: 4px;

  font-family: var(--font-body);

  font-size: 9px;

  line-height: 1;

  color: #777;

  white-space: nowrap;

  transition: color 0.3s ease;
}


/* =====================================================
   TRANSPARENT BRAND
===================================================== */

.navbar-transparent .brand-name {
  color: #ffffff;

  text-shadow:
    0 1px 8px rgba(0, 0, 0, 0.25);
}


.navbar-transparent .brand-name span {
  color: #ffffff;
}


.navbar-transparent .brand-tagline {
  color: rgba(255, 255, 255, 0.82);
}


/* =====================================================
   DESKTOP NAV
===================================================== */

.desktop-nav {
  height: 100%;

  display: flex;

  align-items: center;

  gap: 34px;
}


/* =====================================================
   NAV LINK
===================================================== */

.nav-link {
  position: relative;

  display: inline-flex;

  align-items: center;

  gap: 6px;

  height: 100%;

  color: var(--color-text);

  font-family: var(--font-body);

  font-size: 14px;

  font-weight: 500;

  text-decoration: none;

  white-space: nowrap;

  transition:
    color 0.25s ease;
}


.nav-link:hover {
  color: var(--color-deep-orange);
}


.nav-link.active {
  color: var(--color-deep-orange);
}


/* =====================================================
   TRANSPARENT NAV LINK
===================================================== */

.navbar-transparent .nav-link {
  color: #ffffff;

  text-shadow:
    0 1px 8px rgba(0, 0, 0, 0.3);
}


.navbar-transparent .nav-link:hover,
.navbar-transparent .nav-link.active {
  color: #ffffff;
}


/* =====================================================
   SOLUTION DROPDOWN
===================================================== */

.nav-dropdown {
  position: relative;

  height: 100%;

  display: flex;

  align-items: center;
}


.solution-nav-wrapper {
  height: 100%;

  display: flex;

  align-items: center;
}


.solution-link {
  cursor: pointer;
}


.dropdown-arrow {
  transition:
    transform 0.25s ease;
}


.dropdown-arrow.rotate {
  transform: rotate(180deg);
}


/* =====================================================
   DROPDOWN MENU
===================================================== */

.dropdown-menu {
  position: absolute;

  top: calc(100% - 1px);

  left: 50%;

  transform: translateX(-50%);

  width: 320px;

  padding: 12px;

  background: var(--color-surface);

  border: 1px solid var(--color-border);

  border-radius: 16px;

  box-shadow:
    0 20px 50px rgba(26, 26, 26, 0.14);

  z-index: 10000;
}


/* =====================================================
   DROPDOWN TRIANGLE
===================================================== */

.dropdown-menu::before {
  content: '';

  position: absolute;

  top: -7px;

  left: 50%;

  width: 13px;

  height: 13px;

  transform:
    translateX(-50%)
    rotate(45deg);

  background: var(--color-surface);

  border-left: 1px solid var(--color-border);

  border-top: 1px solid var(--color-border);
}


/* =====================================================
   DROPDOWN ITEM
===================================================== */

.dropdown-item {
  position: relative;

  display: flex;

  align-items: center;

  min-height: 48px;

  padding: 0 14px;

  border-radius: 10px;

  color: var(--color-text);

  text-decoration: none;

  font-family: var(--font-body);

  font-size: 14px;

  font-weight: 500;

  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}


.dropdown-item:hover {
  color: var(--color-deep-orange);

  background:
    linear-gradient(
      90deg,
      rgba(252, 239, 146, 0.35),
      rgba(251, 159, 55, 0.12)
    );
}


.dropdown-item.active {
  color: var(--color-deep-orange);

  background:
    linear-gradient(
      90deg,
      rgba(252, 239, 146, 0.45),
      rgba(251, 159, 55, 0.14)
    );
}


/* =====================================================
   DROPDOWN ANIMATION
===================================================== */

.dropdown-enter-active,
.dropdown-leave-active {
  transition:
    opacity 0.18s ease,
    transform 0.18s ease;
}


.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;

  transform:
    translateX(-50%)
    translateY(-8px);
}


/* =====================================================
   MOBILE TOGGLE
===================================================== */

.mobile-toggle {
  display: none;

  width: 44px;

  height: 44px;

  padding: 0;

  border: none;

  background: transparent;

  cursor: pointer;

  flex-direction: column;

  justify-content: center;

  align-items: center;

  gap: 5px;
}


.mobile-toggle span {
  display: block;

  width: 22px;

  height: 2px;

  border-radius: 2px;

  background: var(--color-text);

  transition:
    transform 0.25s ease,
    opacity 0.25s ease,
    background-color 0.25s ease;
}


.navbar-transparent .mobile-toggle span {
  background: #ffffff;
}


.mobile-toggle span:nth-child(1).open {
  transform:
    translateY(7px)
    rotate(45deg);
}


.mobile-toggle span:nth-child(2).open {
  opacity: 0;
}


.mobile-toggle span:nth-child(3).open {
  transform:
    translateY(-7px)
    rotate(-45deg);
}


/* =====================================================
   MOBILE NAV
===================================================== */

.mobile-nav {
  display: none;
}


/* =====================================================
   RESPONSIVE TABLET
===================================================== */

@media (max-width: 1100px) {

  .navbar-container {
    width: calc(100% - 40px);
  }


  .desktop-nav {
    gap: 22px;
  }


  .nav-link {
    font-size: 13px;
  }

}


/* =====================================================
   RESPONSIVE MOBILE
===================================================== */

@media (max-width: 900px) {

  .navbar {
    height: 76px;
  }


  .navbar-container {
    width: calc(100% - 32px);
  }


  .desktop-nav {
    display: none;
  }


  .mobile-toggle {
    display: flex;
  }


  .brand-icon,
  .brand-icon svg {
    width: 38px;

    height: 38px;
  }


  .brand-name {
    font-size: 18px;
  }


  .brand-tagline {
    font-size: 8px;
  }


  /* =================================================
     MOBILE PANEL
  ================================================= */

  .mobile-nav {
    position: absolute;

    top: 100%;

    left: 0;

    width: 100%;

    display: flex;

    flex-direction: column;

    padding: 12px 16px 20px;

    background:
      rgba(255, 255, 255, 0.98);

    border-top:
      1px solid var(--color-border);

    box-shadow:
      0 20px 40px rgba(26, 26, 26, 0.12);

    max-height:
      calc(100vh - 76px);

    overflow-y: auto;
  }


  .mobile-nav-link {
    display: flex;

    align-items: center;

    min-height: 48px;

    padding: 0 10px;

    color: var(--color-text);

    text-decoration: none;

    font-family: var(--font-body);

    font-size: 15px;

    font-weight: 500;

    border-radius: 8px;

    transition:
      color 0.2s ease,
      background-color 0.2s ease;
  }


  .mobile-nav-link:hover,
  .mobile-nav-link.active {
    color: var(--color-deep-orange);

    background:
      rgba(251, 159, 55, 0.08);
  }


  /* =================================================
     MOBILE SOLUTION
  ================================================= */

  .mobile-solution {
    width: 100%;
  }


  .mobile-solution-header {
    display: flex;

    align-items: center;

    justify-content: space-between;
  }


  .mobile-solution-header .mobile-nav-link {
    flex: 1;
  }


  .mobile-solution-toggle {
    width: 42px;

    height: 42px;

    display: flex;

    align-items: center;

    justify-content: center;

    border: none;

    background: transparent;

    color: var(--color-text);

    cursor: pointer;
  }


  .mobile-solution-toggle svg {
    transition:
      transform 0.25s ease;
  }


  .mobile-solution-toggle svg.rotate {
    transform: rotate(180deg);
  }


  .mobile-solutions-list {
    margin: 2px 0 8px 12px;

    padding-left: 12px;

    border-left:
      1px solid var(--color-border);
  }


  .mobile-solution-item {
    display: flex;

    align-items: center;

    min-height: 44px;

    padding: 0 10px;

    color: var(--color-text-secondary);

    text-decoration: none;

    font-size: 14px;

    border-radius: 7px;

    transition:
      color 0.2s ease,
      background-color 0.2s ease;
  }


  .mobile-solution-item:hover,
  .mobile-solution-item.active {
    color: var(--color-deep-orange);

    background:
      rgba(251, 159, 55, 0.08);
  }

}


/* =====================================================
   MOBILE SMALL
===================================================== */

@media (max-width: 480px) {

  .navbar {
    height: 70px;
  }


  .navbar-container {
    width: calc(100% - 24px);
  }


  .brand {
    gap: 8px;
  }


  .brand-icon,
  .brand-icon svg {
    width: 34px;

    height: 34px;
  }


  .brand-name {
    font-size: 16px;
  }


  .brand-tagline {
    font-size: 7px;
  }


  .mobile-toggle {
    width: 40px;

    height: 40px;
  }


  .mobile-nav {
    max-height:
      calc(100vh - 70px);
  }

}


/* =====================================================
   MOBILE MENU ANIMATION
===================================================== */

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}


.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;

  transform:
    translateY(-8px);
}


/* =====================================================
   MOBILE SOLUTIONS ANIMATION
===================================================== */

.mobile-solutions-enter-active,
.mobile-solutions-leave-active {
  transition:
    opacity 0.2s ease,
    max-height 0.25s ease;

  overflow: hidden;
}


.mobile-solutions-enter-from,
.mobile-solutions-leave-to {
  opacity: 0;

  max-height: 0;
}


.mobile-solutions-enter-to,
.mobile-solutions-leave-from {
  opacity: 1;

  max-height: 500px;
}

</style>