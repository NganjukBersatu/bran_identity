<script setup>
import PortfolioSection from '../components/PortfolioSection.vue'
</script>

<template>
  <div class="portfolio-page">
    <!-- Hero -->
    <section class="portfolio-hero">
      <div class="container">
        <p class="eyebrow">Portofolio</p>
        <h1 class="portfolio-hero__title">
          Karya yang Sudah Kami <span class="highlight">Wujudkan</span>
        </h1>
        <p class="portfolio-hero__desc">
          Berikut beberapa project yang telah kami kerjakan untuk berbagai klien
          dari berbagai industri, mulai dari website company profile hingga
          aplikasi mobile.
        </p>
      </div>
    </section>

    <!-- Grid Portofolio (data & kartu diambil dari PortfolioSection) -->
    <PortfolioSection />
  </div>
</template>

<style scoped>
.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 24px;
}

.portfolio-hero {
  padding: 90px 0 60px;
  background: var(--color-surface, #fff7ed);
  text-align: center;
}

.portfolio-hero__title {
  font-size: 42px;
  font-weight: 800;
  line-height: 1.2;
  color: #1a1a1a;
  max-width: 720px;
  margin: 12px auto 20px;
}

.portfolio-hero__title .highlight {
  color: var(--color-deep-orange, #ea580c);
}

.portfolio-hero__desc {
  max-width: 620px;
  margin: 0 auto;
  color: #555;
  font-size: 17px;
  line-height: 1.7;
}

@media (max-width: 768px) {
  .portfolio-hero {
    padding: 60px 0 40px;
  }
  .portfolio-hero__title {
    font-size: 30px;
  }
}
</style>