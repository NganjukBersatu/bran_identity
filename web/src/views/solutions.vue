<template>
  <div class="solutions-page">
    <navbar />

    <!-- Hero -->
    <section class="solutions-hero">
      <div class="hero-image-wrap">
        <img
          src="/team/team-2.jpg"
          alt="Tim Bran Identity"
          class="hero-image"
        />
        <div class="hero-image-fade" aria-hidden="true"></div>
      </div>

      <div class="hero-inner">
        <div class="hero-content">
          <p class="eyebrow">Solutions</p>
          <h1 class="hero-title">
            Solusi Digital yang<br />
            <span class="highlight">Mendorong Pertumbuhan</span> Bisnis Anda
          </h1>
          <p class="hero-desc">
            Kami membantu perusahaan dari berbagai industri untuk berkembang
            melalui produk dan layanan digital yang kami rancang dan bangun
            secara maksimal — dari ide awal hingga rilis dan perawatan jangka
            panjang.
          </p>
        </div>
      </div>
    </section>

    <!-- Solutions grid -->
    <section id="solutions-grid" class="solutions-grid-section">
      <div class="grid-inner">
        <div class="section-head">
          <p class="eyebrow">Our Solutions</p>
          <h2 class="section-title">Layanan yang Kami Tawarkan</h2>
        </div>

        <div class="grid">
          <router-link
            v-for="item in solutions"
            :key="item.slug"
            :id="item.slug"
            :to="`/solutions/${item.slug}`"
            class="card"
          >
            <div class="icon-wrap" v-html="item.icon"></div>
            <h3 class="card-title">{{ item.title }}</h3>
            <p class="card-desc">{{ item.description }}</p>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Adjust these import paths to match your actual folder layout.
// This file goes in: src/views/Solutions.vue
import navbar from '../components/navbar.vue';
// CtaBanner dihapus sesuai permintaan.
// Footer sudah dipasang secara global (misal di App.vue), jadi tidak di-import lagi di sini.
// Data solusi terpusat — file yang sama dipakai oleh dropdown "Solution" di navbar.vue.
import { solutions } from '../router/solutions.js';
</script>

<style scoped>
/* ---------- Hero ---------- */
.solutions-hero {
  position: relative;
  display: flex;
  align-items: stretch;
  background: var(--color-bg);
  overflow: hidden;
}

.hero-image-wrap {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 52%;
  z-index: 0;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.hero-image-fade {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    var(--color-bg) 0%,
    var(--color-bg) 30%,
    rgba(255, 255, 255, 0.75) 45%,
    rgba(255, 255, 255, 0) 75%
  );
}

.hero-inner {
  position: relative;
  z-index: 1;
  width: 100%;
  box-sizing: border-box;
  padding: 72px 8vw;
}

.hero-content {
  max-width: 460px;
  width: 100%;
  text-align: left;
}

.eyebrow {
  margin: 0 0 16px 0;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  font-size: 13px;
  color: var(--color-orange);
}

.hero-title {
  font-size: 44px;
  line-height: 1.2;
  font-weight: 700;
  color: var(--color-text);
  margin: 0 0 20px 0;
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

.hero-desc {
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-text-secondary);
  margin: 0;
}

/* ---------- Grid ---------- */
.solutions-grid-section {
  background: var(--color-surface);
  padding: 72px 0 88px;
}

/* Wrapper khusus, tidak pakai class .container global,
   supaya lebarnya konsisten & tidak ke-override style dari file lain */
.grid-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 8vw;
  box-sizing: border-box;
}

.section-head {
  text-align: center;
  max-width: 560px;
  margin: 0 auto 48px;
}

.section-title {
  font-size: 32px;
  font-weight: 700;
  color: var(--color-text);
  margin-top: 12px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.card {
  scroll-margin-top: 110px; /* biar kartu gak ketutup navbar fixed saat di-scroll via anchor */
  display: block;
  text-decoration: none;
  color: inherit;
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 32px;
  box-sizing: border-box;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 40px -20px rgba(26, 26, 26, 0.18);
  border-color: var(--color-orange);
}

.icon-wrap {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-deep-orange);
  background: linear-gradient(
    135deg,
    var(--color-yellow) 0%,
    var(--color-orange) 100%
  );
  margin-bottom: 20px;
}

.card-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 12px;
}

.card-desc {
  font-size: 15px;
  line-height: 1.6;
  color: var(--color-text-secondary);
}

/* ---------- Responsive ---------- */
@media (max-width: 860px) {
  .hero-image-wrap {
    position: relative;
    width: 100%;
    height: 260px;
    order: -1;
    margin-bottom: 32px;
  }
  .hero-image-fade {
    background: linear-gradient(
      180deg,
      var(--color-bg) 0%,
      rgba(255, 255, 255, 0) 40%
    );
  }
  .hero-inner {
    padding: 0 24px 48px;
  }
  .hero-title {
    font-size: 32px;
  }
  .grid-inner {
    padding: 0 24px;
  }
}

@media (max-width: 720px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
</style>