<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// GANTI array ini sesuai nama file foto tim di web/public/team/
const teamPhotos = [
  { src: '/team/team-4.jpg', alt: 'Tim BRAN Identity sedang berdiskusi' },
  { src: '/team/team-2.jpg', alt: 'Tim BRAN Identity mengerjakan proyek' },
  { src: '/team/team-3.jpg', alt: 'Tim BRAN Identity di kantor' },
]

const activeIndex = ref(0)
let autoplayTimer = null
const AUTOPLAY_DELAY = 4500

function nextPhoto() {
  activeIndex.value = (activeIndex.value + 1) % teamPhotos.length
}

function prevPhoto() {
  activeIndex.value = (activeIndex.value - 1 + teamPhotos.length) % teamPhotos.length
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

onMounted(startAutoplay)
onBeforeUnmount(stopAutoplay)
</script>

<template>
  <section
    class="hero"
    @mouseenter="stopAutoplay"
    @mouseleave="startAutoplay"
  >
    <!-- Foto full-width sebagai background -->
    <div class="hero__bg">
      <img
        v-for="(photo, i) in teamPhotos"
        :key="photo.src"
        :src="photo.src"
        :alt="photo.alt"
        class="hero__photo"
        :class="{ 'hero__photo--active': i === activeIndex }"
      />
      <div class="hero__scrim"></div>
    </div>

    <!-- Konten teks di atas foto -->
    <div class="container hero__content">
      <h1>Mitra Digital untuk Bisnis Anda</h1>
      <p class="hero__subtitle">
        Kami bantu wujudkan ide jadi produk digital nyata — dari website,
        aplikasi mobile, hingga sistem internal perusahaan.
      </p>
      <div class="hero__actions">
        <a href="#kontak" class="btn btn-primary">Konsultasi Gratis</a>
        <a href="#portofolio" class="btn btn-secondary btn-secondary--dark">Lihat Portofolio</a>
      </div>
    </div>

    <!-- Panah geser -->
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
        v-for="(photo, i) in teamPhotos"
        :key="photo.src"
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
  max-width: 620px;
  padding: 140px 0 100px;
}

.hero__content h1 {
  color: #fff;
  font-size: 48px;
  line-height: 1.15;
  margin-bottom: 16px;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.35);
}

.hero__subtitle {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.9);
  max-width: 460px;
  margin-bottom: 28px;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
}

.hero__actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.btn-secondary--dark {
  background: rgba(255, 255, 255, 0.95);
  color: #15191f;
  border: none;
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

.hero__nav--prev { left: 24px; }
.hero__nav--next { right: 24px; }

.hero__nav:hover {
  background: var(--color-orange, #ea580c);
  transform: translateY(-50%) scale(1.08);
}

/* ---- Dot indicator ---- */
.hero__dots {
  position: absolute;
  bottom: 28px;
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

/* ---- Responsive ---- */
@media (max-width: 992px) {
  .hero__content h1 {
    font-size: 38px;
  }
  .hero__content {
    padding: 120px 0 90px;
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: 520px;
  }
  .hero__content {
    padding: 100px 0 80px;
    max-width: 100%;
    text-align: center;
    margin: 0 auto;
  }
  .hero__content h1 {
    font-size: 30px;
  }
  .hero__subtitle {
    margin-left: auto;
    margin-right: auto;
  }
  .hero__actions {
    justify-content: center;
  }
  .hero__nav {
    width: 40px;
    height: 40px;
    font-size: 14px;
  }
  .hero__nav--prev { left: 12px; }
  .hero__nav--next { right: 12px; }
}

@media (max-width: 480px) {
  .hero {
    min-height: 480px;
  }
  .hero__content h1 {
    font-size: 26px;
  }
  .hero__subtitle {
    font-size: 15px;
  }
  .hero__actions {
    flex-direction: column;
    width: 100%;
  }
  .hero__actions .btn {
    width: 100%;
    text-align: center;
  }
}
</style>