<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// GANTI src foto sesuai nama file di web/public/team/
// Setiap slide = 1 foto + teks + 1 CTA yang relevan dengan topik foto itu.
// title dipecah jadi { main, highlight } supaya bagian penting bisa ditonjolkan warna aksen.
const slides = [
  {
    src: '/team/team-4.jpg',
    alt: 'Tim BRAN Identity sedang berdiskusi',
    // Titik fokus crop untuk foto ini (object-position). Atur per foto
    // supaya subjek utama (orang/wajah) selalu berada di posisi yang
    // enak dilihat meski dimensi file aslinya berbeda-beda — ini yang
    // membuat semua foto terasa "senada" dan tidak jomplang.
    objectPosition: 'center 20%',
    tag: 'Software House',
    title: { main: 'Mitra Digital untuk', highlight: 'Bisnis Anda' },
    subtitle:
      'Kami bantu wujudkan ide jadi produk digital nyata — dari website, aplikasi mobile, hingga sistem internal perusahaan.',
    ctaLabel: 'Konsultasi Gratis',
    ctaLink: '/layanan/konsultasi',
  },
  {
    src: '/team/team-5.jpg',
    alt: 'Tim BRAN Identity mengerjakan proyek',
    objectPosition: 'center 25%',
    tag: 'Cara Kami Bekerja',
    title: { main: 'Dibangun Sesuai Kebutuhan,', highlight: 'Bukan Template' },
    subtitle:
      'Setiap proyek kami mulai dari memahami proses bisnis Anda, supaya solusi yang dibangun benar-benar terpakai, bukan sekadar cantik dilihat.',
    ctaLabel: 'Lihat Proses Kerja Kami',
    ctaLink: '/proses-kerja',
  },
  {
    src: '/team/team-3.jpg',
    alt: 'Tim BRAN Identity di kantor',
    objectPosition: 'center 15%',
    tag: 'Tim & Layanan',
    title: { main: 'Tim Berpengalaman, Siap Jadi', highlight: 'Partner Jangka Panjang' },
    subtitle:
      'Dari perencanaan, desain, pengembangan, hingga maintenance — kami dampingi bisnis Anda di setiap tahap pertumbuhan digital.',
    ctaLabel: 'Lihat Portofolio Kami',
    ctaLink: '/portofolio',
  },
]

const activeIndex = ref(0)
let autoplayTimer = null
const AUTOPLAY_DELAY = 4500

function nextPhoto() {
  activeIndex.value = (activeIndex.value + 1) % slides.length
}

function prevPhoto() {
  activeIndex.value = (activeIndex.value - 1 + slides.length) % slides.length
}

function goToPhoto(i) {
  activeIndex.value = i
  restartAutoplay()
}

function startAutoplay() {
  stopAutoplay()
  autoplayTimer = setInterval(nextPhoto, AUTOPLAY_DELAY)
}

function stopAutoplay() {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

function restartAutoplay() {
  startAutoplay()
}

function handlePrevClick() {
  prevPhoto()
  restartAutoplay()
}

function handleNextClick() {
  nextPhoto()
  restartAutoplay()
}

// ---- Swipe gesture untuk mobile ----
let touchStartX = 0
let touchEndX = 0
const SWIPE_THRESHOLD = 40

function handleTouchStart(e) {
  touchStartX = e.changedTouches[0].screenX
}

function handleTouchEnd(e) {
  touchEndX = e.changedTouches[0].screenX
  const diff = touchStartX - touchEndX
  if (Math.abs(diff) < SWIPE_THRESHOLD) return
  if (diff > 0) {
    nextPhoto()
  } else {
    prevPhoto()
  }
  restartAutoplay()
}

// ---- Animasi masuk section (sekali saat pertama muncul) ----
const heroEl = ref(null)
const isRevealed = ref(false)

onMounted(() => {
  startAutoplay()

  const revealHero = () => {
    isRevealed.value = true
  }

  if (heroEl.value) {
    // Double rAF: frame pertama memastikan browser sudah commit style
    // awal (opacity:0, translateY) ke layar, baru di frame kedua kita
    // ubah ke state akhir. Single rAF sering "keduluan" sebelum style
    // awal ke-paint, sehingga transisi terasa patah/meloncat langsung
    // ke posisi akhir alih-alih meluncur mulus.
    requestAnimationFrame(() => {
      requestAnimationFrame(revealHero)
    })

    // Pastikan foto slide pertama sudah selesai di-decode sebelum
    // animasi zoom/fade berjalan, supaya main thread tidak sibuk
    // decode gambar besar di tengah-tengah animasi (penyebab stutter).
    const firstImg = heroEl.value.querySelector('.hero__photo--active')
    if (firstImg?.decode) {
      firstImg.decode().catch(() => {})
    }
  } else {
    isRevealed.value = true
  }
})
onBeforeUnmount(stopAutoplay)
</script>

<template>
  <section
    ref="heroEl"
    class="hero"
    :class="{ 'hero--revealed': isRevealed }"
    @mouseenter="stopAutoplay"
    @mouseleave="startAutoplay"
    @touchstart.passive="handleTouchStart"
    @touchend.passive="handleTouchEnd"
  >
    <!-- Foto full-width sebagai background -->
    <div class="hero__bg">
      <img
        v-for="(slide, i) in slides"
        :key="slide.src"
        :src="slide.src"
        :alt="slide.alt"
        class="hero__photo"
        :class="{ 'hero__photo--active': i === activeIndex }"
        :style="{ objectPosition: slide.objectPosition || 'center' }"
        :loading="i === 0 ? 'eager' : 'lazy'"
        :fetchpriority="i === 0 ? 'high' : 'auto'"
        decoding="async"
      />
      <div class="hero__scrim"></div>
    </div>

    <!-- Konten teks di atas foto: ganti mengikuti slide aktif -->
    <div class="container hero__content">
      <Transition name="hero-text">
        <div :key="activeIndex" class="hero__text">
          <span class="hero__tag">
            <span class="hero__tag-dot"></span>
            {{ slides[activeIndex].tag }}
          </span>

          <h1>
            {{ slides[activeIndex].title.main }}
            <span class="hero__highlight">{{ slides[activeIndex].title.highlight }}</span>
          </h1>

          <p class="hero__subtitle">{{ slides[activeIndex].subtitle }}</p>

          <div class="hero__actions">
            <router-link :to="slides[activeIndex].ctaLink" class="btn btn-primary">
              {{ slides[activeIndex].ctaLabel }}
              <span class="btn__arrow">→</span>
            </router-link>
          </div>
        </div>
      </Transition>
    </div>

    <!-- Panah geser (disembunyikan di layar sangat kecil, swipe menggantikannya) -->
    <button
      class="hero__nav hero__nav--prev"
      type="button"
      aria-label="Foto sebelumnya"
      @click="handlePrevClick"
    >
      &#10094;
    </button>
    <button
      class="hero__nav hero__nav--next"
      type="button"
      aria-label="Foto selanjutnya"
      @click="handleNextClick"
    >
      &#10095;
    </button>

    <!-- Dot indicator -->
    <div class="hero__dots">
      <button
        v-for="(slide, i) in slides"
        :key="slide.src"
        class="hero__dot"
        :class="{ 'hero__dot--active': i === activeIndex }"
        type="button"
        :aria-label="`Lihat foto ${i + 1}`"
        @click="goToPhoto(i)"
      ></button>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  min-height: 600px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #111;
  /* jarak aman dari navbar fixed (90px desktop / 72px mobile, lihat media query) */
  padding-top: 90px;
  box-sizing: border-box;
}

/* ---- Animasi masuk section saat pertama kali muncul ---- */
.hero__content {
  opacity: 0;
  /* muncul "dari dalam" — scale kecil ke ukuran normal tanpa translate,
     jadi tidak ada gerakan naik/geser yang bisa terasa patah saat
     bersaing dengan reflow tinggi konten. Cuma membesar + fade. */
  transform: scale3d(0.96, 0.96, 1);
  transform-origin: left center;
  will-change: opacity, transform;
  transition: opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
.hero__nav,
.hero__dots {
  opacity: 0;
  transform: scale3d(0.92, 0.92, 1);
  will-change: opacity, transform;
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.hero--revealed .hero__content {
  opacity: 1;
  transform: scale3d(1, 1, 1);
  transition-delay: 0.1s;
}
.hero--revealed .hero__nav {
  opacity: 1;
  transform: scale3d(1, 1, 1);
  transition-delay: 0.35s;
}
.hero--revealed .hero__dots {
  opacity: 1;
  transform: scale3d(1, 1, 1);
  transition-delay: 0.4s;
}
/* Lepas will-change setelah reveal selesai supaya browser tidak terus
   menyimpan layer GPU untuk elemen yang sudah diam. */
.hero--revealed .hero__content,
.hero--revealed .hero__nav,
.hero--revealed .hero__dots {
  transition-property: opacity, transform;
}
@media (prefers-reduced-motion: reduce) {
  .hero__content,
  .hero__nav,
  .hero__dots {
    opacity: 1;
    transform: none;
    transition: none;
    will-change: auto;
  }
}

/* ---- Background foto full-width ---- */
.hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero__photo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  opacity: 0;
  transform: scale3d(1.06, 1.06, 1);
  will-change: opacity, transform;
  transition: opacity 1.1s cubic-bezier(0.4, 0, 0.2, 1),
              transform 7s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.hero__photo--active {
  opacity: 1;
  transform: scale3d(1, 1, 1);
  z-index: 1;
}

@media (prefers-reduced-motion: reduce) {
  .hero__photo {
    transition: opacity 0.4s ease;
    transform: none !important;
  }
}

.hero__scrim {
  position: absolute;
  inset: 0;
  z-index: 2;
  background: linear-gradient(
    100deg,
    rgba(0, 0, 0, 0.75) 0%,
    rgba(0, 0, 0, 0.55) 35%,
    rgba(0, 0, 0, 0.25) 65%,
    rgba(0, 0, 0, 0.1) 100%
  );
}

/* ---- Konten teks ---- */
.hero__content {
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: 620px;
  padding: 60px 0 90px;
}

/* Wrapper teks per-slide: butuh min-height supaya tombol di bawah
   tidak "melompat" saat panjang teks antar slide berbeda */
.hero__text {
  min-height: 260px;
}

.hero__tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px 6px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin-bottom: 18px;
}

.hero__tag-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-orange, #ea580c);
  box-shadow: 0 0 0 3px rgba(234, 88, 12, 0.35);
  flex-shrink: 0;
}

.hero__content h1 {
  color: #fff;
  /* skala mulus dari 26px (layar kecil) sampai 48px (layar besar) */
  font-size: clamp(26px, 4.2vw, 48px);
  line-height: 1.18;
  margin-bottom: 16px;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.35);
  word-break: break-word;
}

.hero__highlight {
  position: relative;
  display: inline-block;
  color: var(--color-orange, #ea580c);
}
.hero__highlight::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 2px;
  height: 0.28em;
  background: rgba(234, 88, 12, 0.28);
  z-index: -1;
  border-radius: 2px;
}

.hero__subtitle {
  font-size: clamp(14.5px, 1.6vw, 18px);
  color: rgba(255, 255, 255, 0.9);
  max-width: 460px;
  margin-bottom: 28px;
  line-height: 1.6;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
}

/* ---- Transisi teks saat slide berganti ----
   "Muncul dari dalam": scale kecil → normal + fade, tanpa translate
   sama sekali. Ini paling smooth karena tidak ada gerakan naik/geser
   yang bisa bentrok dengan tinggi konten yang berubah antar slide —
   murni membesar di tempat, jadi tidak pernah terasa patah. */
.hero-text-enter-active {
  transition: opacity 0.45s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
}
.hero-text-leave-active {
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
}
.hero-text-enter-from {
  opacity: 0;
  transform: scale3d(0.94, 0.94, 1);
}
.hero-text-leave-to {
  opacity: 0;
  transform: scale3d(1.03, 1.03, 1);
}
@media (prefers-reduced-motion: reduce) {
  .hero-text-enter-active,
  .hero-text-leave-active {
    transition: none;
  }
}

.hero__actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.hero__actions .btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn__arrow {
  transition: transform 0.2s ease;
}

.hero__actions .btn-primary:hover .btn__arrow {
  transform: translateX(4px);
}

/* ---- Panah geser ---- */
.hero__nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 4;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(4px);
  color: #fff;
  font-size: 17px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s ease, background 0.15s ease;
}

/* transform gabungan (reveal + hover) supaya tidak saling menimpa */
.hero--revealed .hero__nav {
  transform: translateY(-50%);
}
.hero--revealed .hero__nav:hover {
  background: var(--color-orange, #ea580c);
  transform: translateY(-50%) scale(1.08);
}

.hero__nav--prev { left: 24px; }
.hero__nav--next { right: 24px; }

/* ---- Dot indicator ---- */
.hero__dots {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  z-index: 4;
  display: flex;
  justify-content: center;
  gap: 8px;
}

.hero__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  padding: 0;
  transition: background 0.2s ease, width 0.2s ease;
  /* target sentuh 44px tanpa memperbesar tampilan dot secara visual */
  position: relative;
}
.hero__dot::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 32px;
  height: 32px;
  transform: translate(-50%, -50%);
}

.hero__dot--active {
  background: #fff;
  width: 26px;
  border-radius: 4px;
}

/* =====================================
   RESPONSIVE
   Breakpoint: 1024 (tablet lanskap),
   768 (tablet potret), 480 (mobile),
   360 (mobile kecil), + landscape phone
   Prinsip: min-height dikecilkan bertahap
   & padding dirapatkan supaya tidak ada
   sisa area foto kosong di bawah tombol.
===================================== */

@media (max-width: 1024px) {
  .hero {
    min-height: 560px;
  }
  .hero__content {
    max-width: 540px;
  }
  /* di lebar ini panah bisa menabrak teks jika judul panjang;
     geser sedikit ke tepi dan kecilkan supaya tidak menutupi konten */
  .hero__nav {
    width: 42px;
    height: 42px;
    font-size: 15px;
  }
  .hero__nav--prev { left: 14px; }
  .hero__nav--next { right: 14px; }
}

@media (max-width: 768px) {
  .hero {
    min-height: 0; /* tinggi mengikuti konten, bukan dipaksa 560px */
    padding-top: 72px; /* samakan dengan tinggi navbar mobile */
  }
  .hero__content {
    padding: 44px 0 64px;
    max-width: 100%;
    text-align: center;
    margin: 0 auto;
    transform-origin: center center;
  }
  .hero__text {
    min-height: 300px;
  }
  .hero__subtitle {
    margin-left: auto;
    margin-right: auto;
  }
  .hero__actions {
    justify-content: center;
  }
  .hero__nav {
    width: 38px;
    height: 38px;
    font-size: 13px;
  }
  .hero__nav--prev { left: 10px; }
  .hero__nav--next { right: 10px; }
  .hero__dots {
    bottom: 14px;
  }
}

@media (max-width: 480px) {
  .hero__content {
    padding: 36px 0 52px;
  }
  .hero__text {
    min-height: 320px;
  }
  .hero__content h1 {
    margin-bottom: 12px;
  }
  .hero__subtitle {
    margin-bottom: 20px;
  }
  .hero__actions {
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }
  .hero__actions .btn {
    width: 100%;
    text-align: center;
  }
  /* di layar sangat kecil, panah kadang menumpuk konten —
     sembunyikan dan andalkan swipe + dot indicator */
  .hero__nav {
    display: none;
  }
  .hero__dots {
    bottom: 12px;
  }
}

@media (max-width: 360px) {
  .hero {
    padding-top: 64px;
  }
  .hero__content {
    padding: 28px 0 46px;
  }
  .hero__text {
    min-height: 280px;
  }
  .hero__content h1 {
    font-size: 22px;
  }
  .hero__subtitle {
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  /* di layar sempit, perkecil jarak "membesar" supaya efeknya tetap
     halus dan tidak terasa terlalu besar/mencolok di ruang terbatas */
  .hero__content {
    transform: scale3d(0.98, 0.98, 1);
  }
  .hero-text-enter-from {
    transform: scale3d(0.97, 0.97, 1);
  }
  .hero-text-leave-to {
    transform: scale3d(1.015, 1.015, 1);
  }
}

/* HP dalam mode landscape (tinggi layar pendek): konten hero sering
   ketinggian dan mendorong scroll berlebih, jadi kecilkan padding &
   min-height teks berdasarkan tinggi viewport, bukan lebar. */
@media (max-height: 480px) and (orientation: landscape) {
  .hero {
    padding-top: 56px;
    min-height: 0;
  }
  .hero__content {
    padding: 24px 0 32px;
  }
  .hero__text {
    min-height: 0;
  }
  .hero__content h1 {
    font-size: clamp(20px, 3.4vw, 30px);
    margin-bottom: 8px;
  }
  .hero__subtitle {
    margin-bottom: 14px;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .hero__nav {
    width: 34px;
    height: 34px;
    font-size: 12px;
  }
  .hero__dots {
    bottom: 8px;
  }
}
</style>