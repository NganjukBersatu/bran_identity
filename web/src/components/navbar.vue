<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isScrolled = ref(false)
const isLayananOpen = ref(false)

/*
  Navbar hanya boleh transparan di halaman Home.
  Di semua halaman lain, navbar selalu putih solid
  dari awal supaya tidak nyampur dengan background
  halaman tersebut (misalnya section gelap).
*/
const isHomePage = computed(() => route.path === '/')

const showSolidHeader = computed(() => isScrolled.value || !isHomePage.value)

const menu = [
  { label: 'Home', to: '/' },
  { label: 'Portofolio', to: '/portofolio' },
  { label: 'Tentang Kami', to: '/tentang-kami' },
  { label: 'Blog', to: '/blog' },
]

const layananMenu = [
  { label: 'Web Development', to: '/layanan/web-development' },
  { label: 'Mobile App Development', to: '/layanan/mobile-app-development' },
  { label: 'UI/UX Design', to: '/layanan/ui-ux-design' },
  { label: 'System / ERP Development', to: '/layanan/system-erp-development' }
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

      <router-link to="/" class="header__logo" @click="closeLayanan">
        <img src="/logos/image.png" alt="BRAN Identity" class="logo-image" />
        <div class="logo-text">
          <div class="logo-name">BRAN <span>IDENTITY</span></div>
          <div class="logo-tagline">Digital Solution for Your Business</div>
        </div>
      </router-link>

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

      <router-link to="/#kontak" class="consult-button" @click="closeLayanan">
        Konsultasi Gratis
      </router-link>

    </div>

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
  Dulu pakai .container (max-width: 1200px; margin: 0 auto)
  sehingga isi navbar menyempit ke tengah dan menyisakan
  jarak kosong di kiri-kanan pada layar lebar.
  Sekarang diganti full-width dengan padding responsif saja,
  supaya logo mepet ke tepi kiri dan tombol mepet ke tepi kanan.
*/
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
}

.logo-name span {
  color: #f4511e;
}

.logo-tagline {
  margin-top: 5px;
  color: #777;
  font-size: 8px;
  line-height: 1.2;
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
  transition: color 0.2s ease, background 0.2s ease;
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

/* Panah sejajar teks, statis, tidak berputar */
.arrow {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 6px;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid currentColor;
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

@media (max-width: 768px) {
  .header__inner { padding: 0 20px; height: 72px; gap: 15px; }
  .header__nav { display: none; }
  .logo-image { width: 38px; height: 38px; }
  .logo-name { font-size: 17px; }
  .logo-tagline { display: none; }
  .consult-button { margin-left: auto; height: 42px; padding: 0 14px; font-size: 12px; }
}

@media (min-width: 769px) and (max-width: 1000px) {
  .header__inner { padding: 0 20px; gap: 15px; }
  .header__nav { gap: 0; }
  .nav-link,
  .layanan-button { padding: 0 9px; font-size: 13px; }
  .consult-button { padding: 0 14px; font-size: 13px; }
}

</style>