<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const slides = [
  {
    src: '/team/tim1.jpg',
    alt: 'Tim BRAN Identity sedang berdiskusi',
    objectPosition: 'center 20%',
    tag: 'Software House',
    title: { main: 'Mitra Digital untuk', highlight: 'Bisnis Anda' },
    subtitle:
      'Kami bantu wujudkan ide jadi produk digital nyata — dari website, aplikasi mobile, hingga sistem internal perusahaan.',
    ctaLabel: 'Konsultasi Gratis',
    ctaLink: '/contact',
    badge: { company: 'PT Nusantara Digital', offer: 'Konsultasi awal gratis' },
  },
  {
    src: '/team/tim2.jpg',
    alt: 'Tim BRAN Identity mengerjakan proyek',
    objectPosition: 'center 25%',
    tag: 'Cara Kami Bekerja',
    title: { main: 'Dibangun Sesuai Kebutuhan,', highlight: 'Bukan Template' },
    subtitle:
      'Setiap proyek kami mulai dari memahami proses bisnis Anda, supaya solusi yang dibangun benar-benar terpakai, bukan sekadar cantik dilihat.',
    ctaLabel: 'Lihat Proses Kerja Kami',
    ctaLink: '/tentang-kami',
    badge: { company: 'Studio Kreasi Indo', offer: 'Diskon 20% proyek pertama' },
  },
  {
    src: '/team/timkantor.png',
    alt: 'Tim BRAN Identity di kantor',
    objectPosition: 'center 15%',
    tag: 'Tim & Layanan',
    title: { main: 'Tim Berpengalaman, Siap Jadi', highlight: 'Partner Jangka Panjang' },
    subtitle:
      'Dari perencanaan, desain, pengembangan, hingga maintenance — kami dampingi bisnis Anda di setiap tahap pertumbuhan digital.',
    ctaLabel: 'Lihat Portofolio Kami',
    ctaLink: '/portfolio',
    badge: { company: 'Warna Cipta Group', offer: 'Free maintenance 1 bulan' },
  },
]

const activeIndex = ref(0)
let autoplayTimer = null
const AUTOPLAY_DELAY = 4500

const trackStyle = computed(() => ({
  transform: `translate3d(-${activeIndex.value * 100}%, 0, 0)`,
}))

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

const heroEl = ref(null)
const isRevealed = ref(false)

onMounted(() => {
  startAutoplay()

  const revealHero = () => {
    isRevealed.value = true
  }

  if (heroEl.value) {
    requestAnimationFrame(() => {
      requestAnimationFrame(revealHero)
    })

    const firstImg = heroEl.value.querySelector('.hero__slide--active .hero__photo')
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
    <div class="hero__track" :style="trackStyle">
      <div
        v-for="(slide, i) in slides"
        :key="slide.src"
        class="hero__slide"
        :class="{ 'hero__slide--active': i === activeIndex }"
      >
        <img
          :src="slide.src"
          :alt="slide.alt"
          class="hero__photo"
          :style="{ objectPosition: slide.objectPosition || 'center' }"
          :loading="i === 0 ? 'eager' : 'lazy'"
          :fetchpriority="i === 0 ? 'high' : 'auto'"
          decoding="async"
        />
        <div class="hero__scrim"></div>

        <div class="container hero__content">
          <div class="hero__text">
            <span class="hero__tag">
              <span class="hero__tag-dot"></span>
              {{ slide.tag }}
            </span>

            <h1>
              {{ slide.title.main }}
              <span class="hero__highlight">{{ slide.title.highlight }}</span>
            </h1>

            <p class="hero__subtitle">{{ slide.subtitle }}</p>

            <div class="hero__actions">
              <router-link :to="slide.ctaLink" class="btn btn-primary">
                {{ slide.ctaLabel }}
                <span class="btn__arrow">→</span>
              </router-link>
            </div>
          </div>

          <div v-if="slide.badge" class="hero__badge">
            <span class="hero__badge-offer">{{ slide.badge.offer }}</span>
            <span class="hero__badge-sep">•</span>
            <span class="hero__badge-company">{{ slide.badge.company }}</span>
          </div>
        </div>
      </div>
    </div>

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
  min-height: 690px; /* 600px konten + 90px ruang navbar, foto tetap full-bleed */
  overflow: hidden;
  background: #111;
  box-sizing: border-box;
  /* PENTING: TIDAK ADA padding-top di sini lagi — foto harus full-bleed
     sampai ke paling atas, tepat di belakang navbar transparan.
     Jarak dari navbar dipindah ke .hero__content (lihat di bawah). */
}

/* ---- Animasi masuk section saat pertama kali muncul ---- */
.hero__track {
  opacity: 0;
  transform: translate3d(0, 0, 0) scale3d(0.97, 0.97, 1);
  will-change: opacity, transform;
}
.hero--revealed .hero__track {
  opacity: 1;
}
.hero__nav,
.hero__dots {
  opacity: 0;
  transform: scale3d(0.92, 0.92, 1);
  will-change: opacity, transform;
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
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
@media (prefers-reduced-motion: reduce) {
  .hero__track,
  .hero__nav,
  .hero__dots {
    opacity: 1;
    transform: none;
    transition: none;
    will-change: auto;
  }
}

/* ---- Track: strip berisi semua slide, digeser via transform ---- */
.hero__track {
  display: flex;
  width: 100%;
  height: 100%;
  min-height: inherit;
  transition: transform 0.85s cubic-bezier(0.65, 0, 0.35, 1),
              opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
@media (prefers-reduced-motion: reduce) {
  .hero__track {
    transition: opacity 0.4s ease;
  }
}

.hero__slide {
  position: relative;
  flex: 0 0 100%;
  min-width: 100%;
  min-height: 690px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero__photo {
  position: absolute;
  inset: 0; /* full-bleed — mengisi seluruh .hero__slide termasuk area di belakang navbar */
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale3d(1.08, 1.08, 1);
  transition: transform 6.5s cubic-bezier(0.25, 0.1, 0.25, 1);
}
.hero__slide--active .hero__photo {
  transform: scale3d(1, 1, 1);
}
@media (prefers-reduced-motion: reduce) {
  .hero__photo {
    transition: none;
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
  /* Jarak dari navbar SEKARANG di sini, bukan di .hero.
     Foto tetap full-bleed, hanya teks yang didorong turun
     supaya tidak ketiban navbar. */
  padding: 150px 0 90px;
  opacity: 0.35;
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;
}
.hero__slide--active .hero__content {
  opacity: 1;
}
@media (prefers-reduced-motion: reduce) {
  .hero__content {
    opacity: 1;
    transition: none;
  }
}

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
  margin-bottom: 22px;
  line-height: 1.6;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
}

.hero__actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 20px;
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

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 16px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(6px);
  border: 1px solid rgba(255, 255, 255, 0.14);
  font-size: 12.5px;
  color: rgba(255, 255, 255, 0.85);
}
.hero__badge-offer {
  color: var(--color-orange, #ea580c);
  font-weight: 700;
}
.hero__badge-sep {
  color: rgba(255, 255, 255, 0.35);
}
.hero__badge-company {
  font-weight: 500;
}

.hero__nav {
  position: absolute;
  top: calc(50% + 45px); /* geser turun setengah tinggi navbar (90px) supaya tetap center terhadap foto/konten, bukan seluruh section */
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

.hero--revealed .hero__nav {
  transform: translateY(-50%);
}
.hero--revealed .hero__nav:hover {
  background: var(--color-orange, #ea580c);
  transform: translateY(-50%) scale(1.08);
}

.hero__nav--prev { left: 24px; }
.hero__nav--next { right: 24px; }

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
===================================== */

@media (max-width: 1024px) {
  .hero,
  .hero__slide {
    min-height: 650px;
  }
  .hero__content {
    max-width: 540px;
    padding: 140px 0 80px;
  }
  .hero__nav {
    width: 42px;
    height: 42px;
    font-size: 15px;
    top: calc(50% + 39px);
  }
  .hero__nav--prev { left: 14px; }
  .hero__nav--next { right: 14px; }
}

@media (max-width: 768px) {
  .hero,
  .hero__slide {
    min-height: 620px;
  }
  .hero__content {
    padding: 108px 0 64px; /* navbar mobile 72px + jarak nyaman */
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
  .hero__badge {
    margin: 0 auto;
  }
  .hero__nav {
    width: 38px;
    height: 38px;
    font-size: 13px;
    top: calc(50% + 36px);
  }
  .hero__nav--prev { left: 10px; }
  .hero__nav--next { right: 10px; }
  .hero__dots {
    bottom: 14px;
  }
}

@media (max-width: 480px) {
  .hero,
  .hero__slide {
    min-height: 600px;
  }
  .hero__content {
    padding: 96px 0 52px;
  }
  .hero__text {
    min-height: 320px;
  }
  .hero__content h1 {
    margin-bottom: 12px;
  }
  .hero__subtitle {
    margin-bottom: 18px;
  }
  .hero__actions {
    flex-direction: column;
    width: 100%;
    gap: 10px;
    margin-bottom: 16px;
  }
  .hero__actions .btn {
    width: 100%;
    text-align: center;
  }
  .hero__nav {
    display: none;
  }
  .hero__dots {
    bottom: 12px;
  }
}

@media (max-width: 360px) {
  .hero,
  .hero__slide {
    min-height: 580px;
  }
  .hero__content {
    padding: 84px 0 46px;
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
  .hero__badge {
    font-size: 11.5px;
    padding: 7px 12px;
  }
}

@media (max-height: 480px) and (orientation: landscape) {
  .hero,
  .hero__slide {
    min-height: 0;
  }
  .hero__content {
    padding: 88px 0 32px;
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
    top: calc(50% + 28px);
  }
  .hero__dots {
    bottom: 8px;
  }
}
</style>