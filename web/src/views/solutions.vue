<template>
  <div class="solutions-page" ref="pageRoot">
    <navbar />

    <!-- =========================
         HERO
    ========================== -->
    <section class="solutions-hero">
      <div class="hero-image-wrap reveal reveal--fade">
        <img
          src="/team/team-2.jpg"
          alt="Tim Bran Identity"
          class="hero-image"
        />

        <div
          class="hero-image-fade"
          aria-hidden="true"
        ></div>
      </div>

      <div class="hero-inner">
        <div class="hero-content">
          <p class="eyebrow reveal reveal--up">Solutions</p>

          <h1 class="hero-title reveal reveal--up" style="--reveal-delay: 90ms">
            Solusi Digital yang<br />
            <span class="highlight">Mendorong Pertumbuhan</span>
            Bisnis Anda
          </h1>

          <p class="hero-desc reveal reveal--up" style="--reveal-delay: 180ms">
            Kami membantu perusahaan dari berbagai industri untuk berkembang
            melalui produk dan layanan digital yang kami rancang dan bangun
            secara maksimal — dari ide awal hingga rilis dan perawatan jangka
            panjang.
          </p>
        </div>
      </div>
    </section>

    <!-- =========================
         SOLUTIONS GRID
    ========================== -->
    <section
      id="solutions-grid"
      class="solutions-grid-section"
    >
      <div class="grid-inner">

        <div class="section-head reveal reveal--up">
          <p class="eyebrow">Our Solutions</p>

          <h2 class="section-title">
            Layanan yang Kami Tawarkan
          </h2>
        </div>

        <div class="grid">
          <router-link
            v-for="(item, index) in solutions"
            :key="item.slug"
            :id="item.slug"
            :to="`/solutions/${item.slug}`"
            class="card reveal reveal--up"
            :style="{ '--reveal-delay': `${200 + (index % 6) * 80}ms` }"
          >
            <div
              class="icon-wrap"
              v-html="item.icon"
            ></div>

            <h3 class="card-title">
              {{ item.title }}
            </h3>

            <p class="card-desc">
              {{ item.description }}
            </p>
          </router-link>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import navbar from '../components/navbar.vue'
import { solutions } from '../router/solutions.js'

/* ---------- scroll-reveal ---------- */
const pageRoot = ref(null)
let observer = null

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

function bindReveal() {
  if (!pageRoot.value) return

  const els = pageRoot.value.querySelectorAll('.reveal:not(.reveal-bound)')

  if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
    els.forEach((el) => {
      el.classList.add('reveal-bound', 'is-visible')
    })
    return
  }

  els.forEach((el) => {
    el.classList.add('reveal-bound')
    observer.observe(el)
  })
}

onMounted(async () => {
  if (!prefersReducedMotion() && typeof IntersectionObserver !== 'undefined') {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    )
  }

  await nextTick()
  bindReveal()
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>

/* =====================================================
   BASE
===================================================== */

.solutions-page {
  width: 100%;
  overflow: hidden;
}


/* =====================================================
   REVEAL (animasi masuk)
===================================================== */

.reveal {
  opacity: 0;

  transition:
    opacity 0.7s cubic-bezier(.22, .61, .36, 1),
    transform 0.7s cubic-bezier(.22, .61, .36, 1);

  transition-delay: var(--reveal-delay, 0ms);

  will-change: opacity, transform;
}

.reveal--up { transform: translateY(28px); }
.reveal--fade { transform: scale(1.03); }

.reveal.is-visible {
  opacity: 1;
  transform: none;
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    transition: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}


/* =====================================================
   HERO - DESKTOP
===================================================== */

.solutions-hero {
  position: relative;

  min-height: 620px;

  display: flex;
  align-items: center;

  background: var(--color-bg);

  overflow: hidden;
}


/* =====================================================
   HERO IMAGE
===================================================== */

.hero-image-wrap {
  position: absolute;

  top: 0;
  right: 0;
  bottom: 0;

  width: 52%;

  z-index: 0;

  overflow: hidden;

  background: var(--color-border);
}

.hero-image {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;
}


/* =====================================================
   HERO IMAGE FADE
===================================================== */

.hero-image-fade {
  position: absolute;

  inset: 0;

  background: linear-gradient(
    90deg,
    var(--color-bg) 0%,
    var(--color-bg) 18%,
    rgba(250, 250, 250, 0.92) 34%,
    rgba(250, 250, 250, 0.55) 48%,
    rgba(250, 250, 250, 0) 76%
  );
}


/* =====================================================
   HERO INNER
===================================================== */

.hero-inner {
  position: relative;

  z-index: 2;

  width: 100%;
  max-width: 1200px;

  margin: 0 auto;

  padding: 90px 40px;

  box-sizing: border-box;
}


/* =====================================================
   HERO CONTENT
===================================================== */

.hero-content {
  width: 50%;
  max-width: 570px;

  text-align: left;
}


/* =====================================================
   EYEBROW
===================================================== */

.eyebrow {
  margin: 0 0 14px;

  font-family: var(--font-body);

  font-size: 13px;
  font-weight: 700;

  line-height: 1.4;

  letter-spacing: 0.06em;

  text-transform: uppercase;

  color: var(--color-orange);
}


/* =====================================================
   HERO TITLE
===================================================== */

.hero-title {
  margin: 0 0 22px;

  font-family: var(--font-heading);

  font-size: clamp(36px, 4vw, 50px);

  line-height: 1.15;

  font-weight: 700;

  letter-spacing: -0.025em;

  color: var(--color-text);
}

.hero-title .highlight {
  background: linear-gradient(
    100deg,
    var(--color-deep-orange) 0%,
    var(--color-red) 100%
  );

  -webkit-background-clip: text;
  background-clip: text;

  color: transparent;
}


/* =====================================================
   HERO DESCRIPTION
===================================================== */

.hero-desc {
  max-width: 530px;

  margin: 0;

  font-family: var(--font-body);

  font-size: 16px;

  line-height: 1.7;

  color: var(--color-text-secondary);
}


/* =====================================================
   SOLUTIONS SECTION
===================================================== */

.solutions-grid-section {
  background: var(--color-surface);

  padding: 90px 0 100px;
}

.grid-inner {
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;

  padding: 0 40px;

  box-sizing: border-box;
}


/* =====================================================
   SECTION HEADER
===================================================== */

.section-head {
  width: 100%;
  max-width: 650px;

  margin: 0 auto 52px;

  text-align: center;
}

.section-title {
  margin: 8px 0 0;

  font-family: var(--font-heading);

  font-size: clamp(28px, 3vw, 36px);

  line-height: 1.2;

  font-weight: 700;

  letter-spacing: -0.02em;

  color: var(--color-text);
}


/* =====================================================
   GRID
===================================================== */

.grid {
  display: grid;

  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 24px;
}


/* =====================================================
   CARD
===================================================== */

.card {
  scroll-margin-top: 110px;

  display: flex;
  flex-direction: column;

  min-width: 0;

  padding: 32px;

  box-sizing: border-box;

  text-decoration: none;

  color: inherit;

  background: var(--color-bg);

  border: 1px solid var(--color-border);

  border-radius: var(--radius);

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    border-color 0.3s ease,
    background-color 0.3s ease;
}

@media (hover: hover) and (pointer: fine) {
  .card:hover {
    transform: translateY(-6px);

    box-shadow:
      0 20px 45px -24px rgba(26, 26, 26, 0.25);

    border-color: var(--color-orange);

    background: var(--color-surface);
  }
}

@media (hover: none) {
  .card:active {
    transform: scale(0.98);

    border-color: var(--color-orange);
  }
}


/* =====================================================
   ICON
===================================================== */

.icon-wrap {
  width: 52px;
  height: 52px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 20px;

  border-radius: 14px;

  color: var(--color-deep-orange);

  background: linear-gradient(
    135deg,
    var(--color-yellow) 0%,
    var(--color-orange) 100%
  );
}


/* =====================================================
   CARD TITLE
===================================================== */

.card-title {
  margin: 0 0 10px;

  font-family: var(--font-heading);

  font-size: 20px;

  line-height: 1.35;

  font-weight: 600;

  color: var(--color-text);
}


/* =====================================================
   CARD DESCRIPTION
===================================================== */

.card-desc {
  margin: 0;

  font-family: var(--font-body);

  font-size: 15px;

  line-height: 1.65;

  color: var(--color-text-secondary);
}


/* =====================================================
   LARGE TABLET
   1100px
===================================================== */

@media (max-width: 1100px) {

  .solutions-hero {
    min-height: 580px;
  }

  .hero-inner {
    padding: 80px 32px;
  }

  .hero-content {
    width: 52%;
  }

  .hero-title {
    font-size: clamp(34px, 4.2vw, 44px);
  }

  .hero-desc {
    font-size: 15px;
  }

  .grid-inner {
    padding: 0 32px;
  }

  .card {
    padding: 28px;
  }
}


/* =====================================================
   TABLET
   900px
===================================================== */

@media (max-width: 900px) {

  /*
   * HERO MENJADI VERTIKAL
   */

  .solutions-hero {
    display: flex;
    flex-direction: column;

    min-height: auto;
  }

  .hero-image-wrap {
    position: relative;

    top: auto;
    right: auto;
    bottom: auto;

    width: 100%;
    height: 360px;

    order: 1;
  }

  .hero-image {
    height: 100%;

    object-position: center;
  }

  .hero-image-fade {
    background: linear-gradient(
      180deg,
      rgba(250, 250, 250, 0) 45%,
      var(--color-bg) 100%
    );
  }

  .hero-inner {
    order: 2;

    padding: 54px 32px 70px;
  }

  .hero-content {
    width: 100%;
    max-width: 720px;
  }

  .hero-title {
    max-width: 700px;

    font-size: clamp(34px, 5vw, 42px);
  }

  .hero-desc {
    max-width: 680px;

    font-size: 15px;
  }


  /* SOLUTIONS */

  .solutions-grid-section {
    padding: 72px 0 80px;
  }

  .section-head {
    margin-bottom: 40px;
  }

  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    gap: 20px;
  }

  .card {
    padding: 26px;
  }
}


/* =====================================================
   SMALL TABLET
   768px
===================================================== */

@media (max-width: 768px) {

  .hero-image-wrap {
    height: 320px;
  }

  .hero-inner {
    padding: 48px 24px 60px;
  }

  .hero-title {
    font-size: clamp(30px, 6vw, 38px);
  }

  .hero-desc {
    font-size: 15px;

    line-height: 1.65;
  }

  .grid-inner {
    padding: 0 24px;
  }

  .solutions-grid-section {
    padding: 64px 0 72px;
  }

  .section-head {
    margin-bottom: 34px;
  }

  .section-title {
    font-size: 30px;
  }

  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    gap: 16px;
  }

  .card {
    padding: 22px;
  }

  .icon-wrap {
    width: 48px;
    height: 48px;

    margin-bottom: 16px;

    border-radius: 12px;
  }

  .card-title {
    font-size: 18px;

    line-height: 1.35;

    margin-bottom: 8px;
  }

  .card-desc {
    font-size: 14px;

    line-height: 1.6;
  }
}


/* =====================================================
   MOBILE
   600px
===================================================== */

@media (max-width: 600px) {

  .hero-image-wrap {
    height: 260px;
  }

  .hero-image-fade {
    background: linear-gradient(
      180deg,
      rgba(250, 250, 250, 0) 35%,
      rgba(250, 250, 250, 0.7) 70%,
      var(--color-bg) 100%
    );
  }

  .hero-inner {
    padding: 34px 20px 50px;
  }

  .eyebrow {
    font-size: 12px;

    margin-bottom: 10px;
  }

  .hero-title {
    font-size: clamp(27px, 8vw, 34px);

    line-height: 1.22;

    letter-spacing: -0.02em;

    margin-bottom: 16px;
  }

  .hero-desc {
    font-size: 14px;

    line-height: 1.65;
  }


  /* SOLUTIONS */

  .solutions-grid-section {
    padding: 52px 0 60px;
  }

  .grid-inner {
    padding: 0 20px;
  }

  .section-head {
    margin-bottom: 28px;
  }

  .section-title {
    font-size: 25px;

    line-height: 1.25;
  }

  .grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    gap: 12px;
  }

  .card {
    padding: 18px;
  }

  .icon-wrap {
    width: 44px;
    height: 44px;

    margin-bottom: 14px;

    border-radius: 11px;
  }

  .card-title {
    font-size: 15.5px;

    line-height: 1.35;

    margin-bottom: 6px;
  }

  .card-desc {
    font-size: 12.5px;

    line-height: 1.5;
  }
}


/* =====================================================
   SMALL MOBILE
   480px

   Grid turun ke 1 kolom mulai di sini — 2 kolom pada
   layar ini membuat judul & deskripsi terlalu sempit.
===================================================== */

@media (max-width: 480px) {

  .hero-image-wrap {
    height: 230px;
  }

  .hero-inner {
    padding: 30px 18px 42px;
  }

  .hero-title {
    font-size: 26px;
  }

  .hero-desc {
    font-size: 13.5px;
  }

  .grid-inner {
    padding: 0 18px;
  }

  .solutions-grid-section {
    padding: 46px 0 54px;
  }

  .section-title {
    font-size: 23px;
  }

  .grid {
    grid-template-columns: 1fr;

    gap: 14px;
  }

  .card {
    flex-direction: row;
    align-items: flex-start;
    gap: 14px;

    padding: 18px;
  }

  .icon-wrap {
    width: 46px;
    height: 46px;

    margin-bottom: 0;

    flex-shrink: 0;
  }

  .card-title {
    font-size: 16px;

    margin-bottom: 6px;
  }

  .card-desc {
    font-size: 13px;

    line-height: 1.55;
  }
}


/* =====================================================
   VERY SMALL MOBILE
   380px
===================================================== */

@media (max-width: 380px) {

  .hero-image-wrap {
    height: 200px;
  }

  .hero-title {
    font-size: 23px;
  }

  .hero-desc {
    font-size: 12.5px;
  }

  .grid {
    gap: 12px;
  }

  .card {
    padding: 15px;
    gap: 12px;
  }

  .icon-wrap {
    width: 40px;
    height: 40px;
  }

  .card-title {
    font-size: 15px;
  }

  .card-desc {
    font-size: 12.5px;
  }
}


/* =====================================================
   REDUCED MOTION
===================================================== */

@media (prefers-reduced-motion: reduce) {

  .card {
    transition: none;
  }

  .card:hover {
    transform: none;
  }
}

</style>