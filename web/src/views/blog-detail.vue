<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { articles } from '../data/articles'

const route = useRoute()
const router = useRouter()

const article = computed(() =>
  articles.find(a => a.id === Number(route.params.id))
)

const relatedArticles = computed(() => {
  if (!article.value) return []
  return articles
    .filter(a => a.id !== article.value.id)
    .slice(0, 3)
})

function goToArticle(id) {
  router.push(`/blog/${id}`)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <main class="blog-detail-page">

    <!-- =====================================================
         NOT FOUND
    ====================================================== -->
    <section v-if="!article" class="section not-found">
      <div class="container">
        <p class="eyebrow">404</p>
        <h1>Artikel tidak ditemukan</h1>
        <router-link to="/blog" class="btn btn-primary">
          Kembali ke Blog
        </router-link>
      </div>
    </section>


    <template v-else>

      <!-- =====================================================
           HERO
      ====================================================== -->
      <section class="detail-hero">
        <div class="container">

          <router-link to="/blog" class="back-link">
            <span>←</span>
            Kembali ke Blog
          </router-link>

          <span class="eyebrow">{{ article.category }}</span>

          <h1>{{ article.title }}</h1>

          <div class="article-meta">
            <span>{{ article.date }}</span>
            <span class="meta-line"></span>
            <span>{{ article.readTime }}</span>
          </div>

        </div>
      </section>


      <!-- =====================================================
           IMAGE
      ====================================================== -->
      <section class="detail-image-section">
        <div class="container">
          <div class="detail-image">
            <img :src="article.image" :alt="article.title" />
          </div>
        </div>
      </section>


      <!-- =====================================================
           CONTENT
      ====================================================== -->
      <section class="section detail-content-section">
        <div class="container content-container">

          <article class="detail-content">
            <p class="lead">{{ article.excerpt }}</p>

            <p v-for="(paragraph, index) in article.content" :key="index">
              {{ paragraph }}
            </p>
          </article>

          <aside class="detail-sidebar">
            <div class="sidebar-card">
              <strong>Butuh solusi software untuk bisnis Anda?</strong>
              <p>Diskusikan kebutuhan digital Anda bersama tim kami.</p>
              <router-link to="/contact" class="btn btn-primary">
                Konsultasikan sekarang
                <span>↗</span>
              </router-link>
            </div>
          </aside>

        </div>
      </section>


      <!-- =====================================================
           RELATED
      ====================================================== -->
      <section class="section related-section" v-if="relatedArticles.length">
        <div class="container">

          <div class="section-heading">
            <span class="eyebrow">Baca Juga</span>
            <h2>Artikel lainnya</h2>
          </div>

          <div class="article-grid">
            <article
              v-for="related in relatedArticles"
              :key="related.id"
              class="article-card"
              @click="goToArticle(related.id)"
            >
              <div class="article-image">
                <img :src="related.image" :alt="related.title" />
                <span class="article-category">{{ related.category }}</span>
              </div>

              <div class="article-content">
                <div class="article-meta">
                  <span>{{ related.date }}</span>
                  <span class="meta-dot"></span>
                  <span>{{ related.readTime }}</span>
                </div>

                <h3>{{ related.title }}</h3>

                <span class="article-link">
                  Baca artikel
                  <span>→</span>
                </span>
              </div>
            </article>
          </div>

        </div>
      </section>

    </template>

  </main>
</template>


<style scoped>

.blog-detail-page {
  --color-yellow: #FCEF92;
  --color-orange: #FB9F37;
  --color-deep-orange: #E75119;
  --color-red: #EB2B0C;

  --color-bg: #FAFAFA;
  --color-surface: #FFFFFF;
  --color-text: #1A1A1A;
  --color-text-secondary: #5F5E5A;
  --color-border: #E5E3DC;

  --font-heading: 'Sora', sans-serif;
  --font-body: 'Inter', sans-serif;

  --container-width: 1160px;
  --radius: 12px;

  width: 100%;
  overflow: hidden;

  color: var(--color-text);
  background: var(--color-bg);

  font-family: var(--font-body);
  line-height: 1.6;
}

.blog-detail-page *,
.blog-detail-page *::before,
.blog-detail-page *::after {
  box-sizing: border-box;
}

.blog-detail-page h1,
.blog-detail-page h2,
.blog-detail-page h3 {
  margin: 0;
  font-family: var(--font-heading);
  font-weight: 600;
  line-height: 1.15;
}

.blog-detail-page p {
  margin: 0;
  font-family: var(--font-body);
}

.container {
  width: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 24px;
}

.section {
  padding: 70px 0;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 16px;
  color: var(--color-deep-orange);
  font-family: var(--font-heading);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .09em;
  text-transform: uppercase;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 48px;
  padding: 12px 22px;
  border: 0;
  border-radius: var(--radius);
  font-family: var(--font-heading);
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: transform .2s ease, background .2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background: var(--color-red);
  color: #fff;
  width: 100%;
}

.btn-primary:hover {
  background: var(--color-deep-orange);
}


/* NOT FOUND */

.not-found {
  padding: 140px 0;
  text-align: center;
}

.not-found h1 {
  margin-bottom: 26px;
  font-size: 34px;
}


/* HERO */

.detail-hero {
  padding: 140px 0 40px;
  background:
    radial-gradient(circle at 90% 0%, rgba(251, 159, 55, .13), transparent 32%),
    var(--color-bg);
}

.back-link {
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;
  color: var(--color-text-secondary);
  font-family: var(--font-heading);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: color .2s ease, transform .2s ease;
}

.back-link:hover {
  transform: translateX(-3px);
}

.back-link:hover {
  color: var(--color-red);
}

.detail-hero h1 {
  max-width: 820px;
  font-size: clamp(30px, 4.2vw, 48px);
  letter-spacing: -.04em;
}

.article-meta {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-top: 22px;
  color: #85837d;
  font-size: 12px;
}

.meta-line {
  width: 20px;
  height: 1px;
  background: #b8b6b0;
}

.meta-dot {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: #b8b6b0;
}


/* IMAGE */

.detail-image-section {
  padding: 10px 0 0;
}

.detail-image {
  height: 440px;
  overflow: hidden;
  border-radius: 20px;
  background: #ddd;
}

.detail-image img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}


/* CONTENT */

.content-container {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 60px;
  align-items: start;
}

.detail-content .lead {
  margin-bottom: 26px;
  padding-bottom: 26px;
  border-bottom: 1px solid var(--color-border);
  color: var(--color-text);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.7;
}

.detail-content p {
  color: var(--color-text-secondary);
  font-size: 15.5px;
  line-height: 1.9;
}

.detail-content p + p {
  margin-top: 20px;
}

.detail-sidebar {
  position: sticky;
  top: 24px;
}

.sidebar-card {
  padding: 28px;
  border: 1px solid var(--color-border);
  border-radius: 16px;
  background: var(--color-surface);
}

.sidebar-card strong {
  display: block;
  margin-bottom: 10px;
  font-family: var(--font-heading);
  font-size: 16px;
}

.sidebar-card p {
  margin-bottom: 20px;
  color: var(--color-text-secondary);
  font-size: 13px;
  line-height: 1.7;
}


/* RELATED */

.related-section {
  background: var(--color-surface);
}

.section-heading {
  margin-bottom: 32px;
}

.section-heading h2 {
  font-size: clamp(28px, 3.4vw, 38px);
  letter-spacing: -.04em;
}

.article-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}

.article-card {
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: 16px;
  background: var(--color-bg);
  cursor: pointer;
  transition: transform .25s ease, box-shadow .25s ease;
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 18px 40px rgba(26, 26, 26, .08);
}

.article-image {
  position: relative;
  height: 190px;
  overflow: hidden;
  background: #ddd;
}

.article-image img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform .5s ease;
}

.article-card:hover .article-image img {
  transform: scale(1.05);
}

.article-category {
  position: absolute;
  left: 14px;
  bottom: 14px;
  padding: 6px 9px;
  border-radius: 6px;
  background: #fff;
  color: var(--color-red);
  font-family: var(--font-heading);
  font-size: 9px;
  font-weight: 700;
}

.article-content {
  padding: 20px;
}

.article-content h3 {
  margin-top: 12px;
  font-size: 17px;
  letter-spacing: -.02em;
}

.article-link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin-top: 16px;
  color: var(--color-text);
  font-family: var(--font-heading);
  font-size: 11px;
  font-weight: 700;
}

.article-link span {
  color: var(--color-red);
}


/* RESPONSIVE */

@media (max-width: 1000px) {
  .content-container {
    grid-template-columns: 1fr;
  }

  .detail-sidebar {
    position: static;
  }

  .article-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 760px) {
  .section {
    padding: 50px 0;
  }

  .detail-image {
    height: 260px;
    border-radius: 14px;
  }

  .article-grid {
    grid-template-columns: 1fr;
  }
}

</style>