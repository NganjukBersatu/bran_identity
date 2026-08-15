<script setup>
import BlogSection from '../components/BlogSection.vue'
</script>

<template>
  <div class="blog-page">
    <!-- Hero -->
    <section class="blog-hero">
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
.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 24px;
}

.blog-hero {
  padding: 90px 0 60px;
  background: var(--color-surface, #fff7ed);
  text-align: center;
}

.blog-hero__title {
  font-size: 42px;
  font-weight: 800;
  line-height: 1.2;
  color: #1a1a1a;
  max-width: 720px;
  margin: 12px auto 20px;
}

.blog-hero__title .highlight {
  color: var(--color-deep-orange, #ea580c);
}

.blog-hero__desc {
  max-width: 620px;
  margin: 0 auto;
  color: #555;
  font-size: 17px;
  line-height: 1.7;
}

@media (max-width: 768px) {
  .blog-hero {
    padding: 60px 0 40px;
  }
  .blog-hero__title {
    font-size: 30px;
  }
}

@media (max-width: 480px) {
  .blog-hero {
    padding: 44px 0 28px;
  }
  .blog-hero__title {
    font-size: 22px;
    margin: 8px auto 12px;
  }
  .blog-hero__desc {
    font-size: 14px;
  }
  .eyebrow {
    font-size: 12px;
  }
}
</style>