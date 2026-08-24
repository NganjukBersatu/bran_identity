<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// GANTI src foto sesuai nama file di web/public/team/
// Setiap slide = 1 foto + teks + 1 CTA yang relevan dengan topik foto itu.
// title dipecah jadi { main, highlight } supaya bagian penting bisa ditonjolkan warna aksen.
const slides = [
  {
    src: '/team/team-5.jpg',
    alt: 'Tim BRAN Identity sedang berdiskusi',
    tag: 'Software House',
    title: { main: 'Mitra Digital untuk', highlight: 'Bisnis Anda' },
    subtitle:
      'Kami bantu wujudkan ide jadi produk digital nyata — dari website, aplikasi mobile, hingga sistem internal perusahaan.',
    ctaLabel: 'Konsultasi Gratis',
    ctaLink: '/layanan/konsultasi',
  },
  {
    src: '/team/team-4.jpg',
    alt: 'Tim BRAN Identity mengerjakan proyek',
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

  if (heroEl.value) {
    // trigger di frame berikutnya supaya transisi CSS sempat terpasang
    requestAnimationFrame(() => {
      isRevealed.value = true
    })
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
      />
      <div class="hero__scrim"></div>
    </div>

    <!-- Konten teks di atas foto: ganti mengikuti slide aktif -->
    <div class="container hero__content">
      <Transition name="hero-text" mode="out-in">
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
.hero__content,
.hero__nav,
.hero__dots {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.hero--revealed .hero__content {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.1s;
}
.hero--revealed .hero__nav {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.35s;
}
.hero--revealed .hero__dots {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.4s;
}
@media (prefers-reduced-motion: reduce) {
  .hero__content,
  .hero__nav,
  .hero__dots {
    opacity: 1;
    transform: none;
    transition: none;
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
  transform: scale(1.06);
  transition: opacity 1s ease, transform 7s ease;
}

.hero__photo--active {
  opacity: 1;
  transform: scale(1);
  z-index: 1;
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
}

.hero__content h1 {
  color: #fff;
  /* skala mulus dari 26px (layar kecil) sampai 48px (layar besar) */
  font-size: clamp(26px, 4.2vw, 48px);
  line-height: 1.18;
  margin-bottom: 16px;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.35);
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

/* ---- Transisi teks saat slide berganti ---- */
.hero-text-enter-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.hero-text-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
  position: absolute;
}
.hero-text-enter-from {
  opacity: 0;
  transform: translateY(14px);
}
.hero-text-leave-to {
  opacity: 0;
  transform: translateY(-10px);
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
   360 (mobile kecil)
   Prinsip: min-height dikecilkan bertahap
   & padding dirapatkan supaya tidak ada
   sisa area foto kosong di bawah tombol.
===================================== */

@media (max-width: 1024px) {
  .hero {
    min-height: 560px;
  }
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
</style>