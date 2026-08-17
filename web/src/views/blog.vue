<script setup>
import BlogSection from '../components/BlogSection.vue'
</script>

<template>
  <div class="blog-page">
    <!-- Hero -->
    <section class="blog-hero">
      <div class="blog-hero__mesh" aria-hidden="true">
        <div class="mesh__orb mesh__orb--1"></div>
        <div class="mesh__orb mesh__orb--2"></div>
      </div>

      <div class="container">
        <p class="eyebrow">Blog</p>
        <h1 class="blog-hero__title">
          Artikel & <span class="highlight">Update Terbaru</span>
        </h1>
        <p class="blog-hero__desc">
          Kumpulan tulisan seputar teknologi, tips digital, dan update dari
          kami untuk membantu bisnis Anda terus berkembang.
        </p>
      </div>
    </section>

    <!-- Grid Artikel (data & kartu diambil dari BlogSection) -->
    <BlogSection :show-heading="false" />
  </div>
</template>

<style scoped>
.blog-page {
  /* palet sama persis dengan halaman Layanan / Portofolio */
  --cream: #FCEF91;
  --orange-light: #FB9E3A;
  --orange: #E6521F;
  --red: #EA2F14;
  --ink: #202020;
}

.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 2;
}

.blog-hero {
  position: relative;
  overflow: hidden;
  padding: 160px clamp(20px, 6vw, 80px) 90px;
  /* gradient identik dengan hero Perencanaan / Development / Portofolio */
  background: linear-gradient(160deg, var(--cream) 0%, #fff3cf 45%, #ffe6c2 100%);
  text-align: left;
}

.blog-hero__mesh { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
.mesh__orb { position: absolute; border-radius: 50%; filter: blur(70px); opacity: 0.5; }
.mesh__orb--1 { width: 420px; height: 420px; top: -160px; left: -120px; background: radial-gradient(circle, var(--orange-light), transparent 70%); }
.mesh__orb--2 { width: 380px; height: 380px; top: -100px; right: -140px; background: radial-gradient(circle, var(--red), transparent 70%); opacity: 0.28; }

.eyebrow {
  display: inline-block;
  font-size: 12.5px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--red);
  margin-bottom: 14px;
}

.blog-hero__title {
  font-size: clamp(30px, 4.2vw, 48px);
  font-weight: 800;
  line-height: 1.16;
  letter-spacing: -0.02em;
  color: var(--ink);
  max-width: 720px;
  margin: 0 0 20px;
}

.blog-hero__title .highlight {
  color: var(--orange);
}

.blog-hero__desc {
  max-width: 460px;
  margin: 0;
  color: #5b4a2a;
  font-size: 15.5px;
  line-height: 1.75;
}

@media (max-width: 650px) {
  .blog-hero {
    padding: 120px 20px 60px;
  }
}

@media (max-width: 480px) {
  .blog-hero__title {
    font-size: 26px;
    margin: 0 0 14px;
  }
  .blog-hero__desc {
    font-size: 14px;
  }
  .eyebrow {
    font-size: 12px;
  }
}
</style>