<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isScrolled = ref(false)
const isLayananOpen = ref(false)       // dropdown Layanan versi desktop
const isMobileMenuOpen = ref(false)    // panel menu versi mobile
const isMobileLayananOpen = ref(false) // accordion Layanan versi mobile

/*
  Navbar hanya boleh transparan di halaman Home.
  Di semua halaman lain, navbar selalu putih solid
  dari awal supaya tidak nyampur dengan background
  halaman tersebut (misalnya section gelap).
*/
const isHomePage = computed(() => route.path === '/')

const showSolidHeader = computed(() => isScrolled.value || !isHomePage.value || isMobileMenuOpen.value)

const menu = [
  { label: 'Home', to: '/' },
  { label: 'Portofolio', to: '/portofolio' },
  { label: 'Tentang Kami', to: '/tentang-kami' },
  { label: 'Blog', to: '/blog' },
]

const layananMenu = [
  { label: 'Konsultasi', to: '/layanan/konsultasi' },
  { label: 'Perencanaan', to: '/layanan/perencanaan' },
  { label: 'Development', to: '/layanan/development' },
  { label: 'Deploy', to: '/layanan/deploy' },
  { label: 'Support', to: '/layanan/support' },
  { label: 'Optimasi', to: '/layanan/optimasi' }
]

const handleScroll = () => {
  isScrolled.value = window.scrollY > 30
}

const toggleLayanan = () => {
  isLayananOpen.value = !isLayananOpen.value
}

const closeLayanan = () => {
  isLayananOpen.value = false
}

const handleOutsideClick = (event) => {
  const layananWrapper = event.target.closest('.layanan-wrapper')
  if (!layananWrapper) {
    closeLayanan()
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  isMobileLayananOpen.value = false
}

const toggleMobileLayanan = () => {
  isMobileLayananOpen.value = !isMobileLayananOpen.value
}

// tutup menu mobile otomatis setiap kali pindah halaman
watch(() => route.path, () => {
  closeMobileMenu()
  closeLayanan()
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleOutsideClick)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleOutsideClick)
})
</script>

<template>

  <header class="header" :class="{ 'header--scrolled': showSolidHeader }">

    <div class="header__inner">

      <router-link to="/" class="header__logo" @click="closeMobileMenu">
        <img src="/logos/image.png" alt="BRAN Identity" class="logo-image" />
        <div class="logo-text">
          <div class="logo-name">BRAN <span>IDENTITY</span></div>
          <div class="logo-tagline">Digital Solution for Your Business</div>
        </div>
      </router-link>

      <!-- ===== Nav Desktop ===== -->
      <nav class="header__nav">

        <router-link to="/" class="nav-link" @click="closeLayanan">
          Home
        </router-link>

        <div class="layanan-wrapper">

          <button
            type="button"
            class="layanan-button"
            :class="{ active: isLayananOpen }"
            @click.stop="toggleLayanan"
          >
            <span class="layanan-text">Layanan</span>
            <span class="arrow"></span>
          </button>

          <div
            v-if="isLayananOpen"
            class="layanan-dropdown"
            @click.stop
          >
            <router-link
              v-for="item in layananMenu"
              :key="item.label"
              :to="item.to"
              class="dropdown-link"
              @click="closeLayanan"
            >
              {{ item.label }}
            </router-link>
          </div>

        </div>

        <router-link
          v-for="item in menu.slice(1)"
          :key="item.label"
          :to="item.to"
          class="nav-link"
          @click="closeLayanan"
        >
          {{ item.label }}
        </router-link>

      </nav>

      <router-link to="/#kontak" class="consult-button" @click="closeMobileMenu">
        Konsultasi Gratis
      </router-link>

      <!-- ===== Tombol Hamburger (mobile only) ===== -->
      <button
        type="button"
        class="hamburger"
        :class="{ active: isMobileMenuOpen }"
        aria-label="Buka menu"
        @click.stop="toggleMobileMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </div>

    <!-- ===== Panel Menu Mobile ===== -->
    <transition name="mobile-menu">
      <div v-if="isMobileMenuOpen" class="mobile-menu" @click.stop>
        <router-link to="/" class="mobile-link" @click="closeMobileMenu">
          Home
        </router-link>

        <div class="mobile-accordion">
          <button
            type="button"
            class="mobile-link mobile-accordion__trigger"
            :class="{ active: isMobileLayananOpen }"
            @click="toggleMobileLayanan"
          >
            <span>Layanan</span>
            <span class="arrow" :class="{ open: isMobileLayananOpen }"></span>
          </button>

          <div v-if="isMobileLayananOpen" class="mobile-accordion__panel">
            <router-link
              v-for="item in layananMenu"
              :key="item.label"
              :to="item.to"
              class="mobile-sublink"
              @click="closeMobileMenu"
            >
              {{ item.label }}
            </router-link>
          </div>
        </div>

        <router-link
          v-for="item in menu.slice(1)"
          :key="item.label"
          :to="item.to"
          class="mobile-link"
          @click="closeMobileMenu"
        >
          {{ item.label }}
        </router-link>

        <router-link to="/#kontak" class="mobile-consult-button" @click="closeMobileMenu">
          Konsultasi Gratis
        </router-link>
      </div>
    </transition>

  </header>

</template>

<style scoped>

/* =====================================
   HEADER
   Default transparan (hanya efektif
   di Home, karena di halaman lain
   class header--scrolled otomatis
   dipaksa aktif lewat showSolidHeader).
===================================== */

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;

  background: transparent;
  border-bottom: 1px solid transparent;

  transition:
    background 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease;
}

.header--scrolled {
  background: rgba(255, 255, 255, 0.97);
  border-bottom: 1px solid #eeeeee;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.07);
  backdrop-filter: blur(10px);
}

/*
  Saat header MASIH transparan (di atas hero gelap, belum discroll):
  teks logo & menu diputihkan + diberi shadow tipis supaya tetap
  terbaca di atas foto apapun. Begitu header--scrolled aktif,
  warnanya otomatis kembali gelap seperti biasa (lihat rule di atas).
*/
.header:not(.header--scrolled) .logo-name,
.header:not(.header--scrolled) .logo-tagline,
.header:not(.header--scrolled) .nav-link,
.header:not(.header--scrolled) .layanan-button,
.header:not(.header--scrolled) .hamburger span {
  color: #ffffff;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.45);
}

.header:not(.header--scrolled) .logo-name span {
  color: #ffb27a; /* oranye terang biar tetap kebaca di atas foto gelap */
}

.header:not(.header--scrolled) .hamburger span {
  background: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}

.header:not(.header--scrolled) .nav-link:hover,
.header:not(.header--scrolled) .layanan-button:hover,
.header:not(.header--scrolled) .nav-link.router-link-active,
.header:not(.header--scrolled) .layanan-button.active {
  color: #ffb27a;
}

.header:not(.header--scrolled) .arrow {
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.4));
}

.header__inner {
  width: 100%;
  height: 90px;
  padding: 0 clamp(20px, 4vw, 64px);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 30px;
}

.header__logo {
  display: flex;
  align-items: center;
  gap: 9px;
  text-decoration: none;
  flex-shrink: 0;
}

.logo-image {
  width: 43px;
  height: 43px;
  object-fit: contain;
  mix-blend-mode: multiply;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.logo-name {
  color: #202020;
  font-size: 20px;
  font-weight: 800;
  line-height: 1;
  transition: color 0.3s ease;
}

.logo-name span {
  color: #f4511e;
}

.logo-tagline {
  margin-top: 5px;
  color: #777;
  font-size: 8px;
  line-height: 1.2;
  transition: color 0.3s ease;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: auto;
}

.nav-link,
.layanan-button {
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  border-radius: 8px;
  color: #202020;
  text-decoration: none;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  box-sizing: border-box;
  transition: color 0.3s ease, background 0.2s ease;
}

.nav-link:hover,
.layanan-button:hover {
  color: #f4511e;
}

.nav-link.router-link-active {
  color: #f4511e;
  font-weight: 700;
}

.layanan-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.layanan-button {
  border: none;
  background: transparent;
  cursor: pointer;
  gap: 4px;
}

.layanan-text {
  display: inline-flex;
  align-items: center;
  line-height: 1;
}

.layanan-button.active {
  color: #f4511e;
}

.arrow {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 6px;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid currentColor;
  transition: transform 0.2s ease;
}

.arrow.open {
  transform: rotate(180deg);
}

.layanan-dropdown {
  position: absolute;
  top: calc(100% + 7px);
  left: 50%;
  transform: translateX(-50%);
  width: 235px;
  padding: 8px;
  background: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 12px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  z-index: 10000;
  box-sizing: border-box;
}

.dropdown-link {
  display: block;
  padding: 13px 15px;
  border-radius: 8px;
  color: #252525;
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  line-height: 1.3;
  transition: color 0.2s ease, background 0.2s ease;
}

.dropdown-link:hover,
.dropdown-link.router-link-active {
  color: #f4511e;
  background: #fff3ed;
}

.consult-button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 46px;
  padding: 0 21px;
  border-radius: 10px;
  background: #f4511e;
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
  box-shadow: 0 6px 15px rgba(244, 81, 30, 0.2);
  transition: background 0.2s ease, transform 0.2s ease;
}

.consult-button:hover {
  background: #e94714;
  transform: translateY(-2px);
}

/* =====================================
   HAMBURGER (mobile only, tersembunyi
   di desktop lewat media query di bawah)
===================================== */

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 42px;
  height: 42px;
  border: none;
  background: transparent;
  border-radius: 8px;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.2s ease;
}

.hamburger:hover {
  background: rgba(0, 0, 0, 0.05);
}

.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 2px;
  background: #202020;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.hamburger.active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.hamburger.active span:nth-child(2) {
  opacity: 0;
}
.hamburger.active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* =====================================
   PANEL MENU MOBILE
===================================== */

.mobile-menu {
  display: none;
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.mobile-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 14px 4px;
  border: none;
  background: transparent;
  color: #202020;
  text-decoration: none;
  font-family: inherit;
  font-size: 15px;
  font-weight: 600;
  text-align: left;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
}

.mobile-link.router-link-active {
  color: #f4511e;
}

.mobile-accordion__trigger .arrow {
  border-top-color: #202020;
}

.mobile-accordion__panel {
  display: flex;
  flex-direction: column;
  padding: 4px 0 8px 14px;
  border-bottom: 1px solid #f0f0f0;
}

.mobile-sublink {
  padding: 11px 4px;
  color: #555;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
}

.mobile-sublink:hover,
.mobile-sublink.router-link-active {
  color: #f4511e;
}

.mobile-consult-button {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 18px;
  height: 46px;
  border-radius: 10px;
  background: #f4511e;
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
}

/* =====================================
   RESPONSIVE
===================================== */

@media (max-width: 768px) {
  .header__inner { padding: 0 20px; height: 72px; gap: 12px; }
  .header__nav { display: none; }
  .consult-button { display: none; }
  .hamburger { display: flex; margin-left: auto; }

  .logo-image { width: 38px; height: 38px; }
  .logo-name { font-size: 17px; }
  .logo-tagline { display: none; }

  .mobile-menu {
    display: flex;
    flex-direction: column;
    padding: 8px 20px 24px;
    background: #ffffff;
    border-top: 1px solid #eeeeee;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  }
}

@media (min-width: 769px) and (max-width: 1000px) {
  .header__inner { padding: 0 20px; gap: 15px; }
  .header__nav { gap: 0; }
  .nav-link,
  .layanan-button { padding: 0 9px; font-size: 13px; }
  .consult-button { padding: 0 14px; font-size: 13px; }
}

</style>