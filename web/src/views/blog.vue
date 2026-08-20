<script setup>
import { ref, computed } from 'vue'

const activeCategory = ref('Semua')

const categories = [
  'Semua',
  'Technology',
  'Software Development',
  'Business',
  'Tips & Insight'
]

const articles = [
  {
    id: 1,
    category: 'Software Development',
    title: 'Membangun Software yang Siap Berkembang Bersama Bisnis',
    excerpt:
      'Bagaimana pendekatan software development yang tepat dapat membantu bisnis berkembang lebih cepat, stabil, dan terukur.',
    date: '18 Agustus 2026',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1000&q=85',
    featured: true
  },
  {
    id: 2,
    category: 'Technology',
    title: 'Mengapa Transformasi Digital Penting untuk Bisnis Modern?',
    excerpt:
      'Transformasi digital bukan hanya tentang teknologi, tetapi bagaimana teknologi membantu bisnis bekerja lebih efektif.',
    date: '15 Agustus 2026',
    readTime: '4 min read',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85'
  },
  {
    id: 3,
    category: 'Business',
    title: 'Kapan Bisnis Membutuhkan Custom Software?',
    excerpt:
      'Kenali tanda-tanda bahwa solusi software custom mulai menjadi kebutuhan penting bagi perusahaan.',
    date: '12 Agustus 2026',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=85'
  },
  {
    id: 4,
    category: 'Tips & Insight',
    title: '5 Hal yang Harus Dipersiapkan Sebelum Membuat Website',
    excerpt:
      'Website yang baik dimulai dari perencanaan yang matang. Berikut beberapa hal yang perlu dipersiapkan.',
    date: '09 Agustus 2026',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=85'
  },
  {
    id: 5,
    category: 'Technology',
    title: 'AI dalam Pengembangan Software: Peluang dan Tantangannya',
    excerpt:
      'Artificial Intelligence semakin banyak digunakan dalam software development. Apa saja manfaat dan tantangannya?',
    date: '06 Agustus 2026',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=85'
  },
  {
    id: 6,
    category: 'Software Development',
    title: 'Frontend, Backend, dan API: Memahami Fondasi Aplikasi Modern',
    excerpt:
      'Memahami hubungan frontend, backend, dan API akan membantu Anda melihat bagaimana sebuah aplikasi bekerja.',
    date: '03 Agustus 2026',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=85'
  }
]

const filteredArticles = computed(() => {
  if (activeCategory.value === 'Semua') {
    return articles
  }

  return articles.filter(
    article => article.category === activeCategory.value
  )
})

function setCategory(category) {
  activeCategory.value = category
}
</script>

<template>
  <main class="blog-page">

    <!-- =====================================================
         INTRO
    ====================================================== -->
    <section class="blog-intro">
      <div class="container intro-container">

        <div class="intro-left">
          <span class="eyebrow">
            Blog & Insight
          </span>

          <h1>
            Insight untuk
            <span>membangun</span>
            masa depan digital.
          </h1>
        </div>

        <div class="intro-right">
          <p>
            Temukan insight, teknologi, strategi digital, dan pengalaman
            software development dari tim kami untuk membantu bisnis
            berkembang lebih cepat di era digital.
          </p>

          <div class="intro-links">
            <a href="#artikel" class="intro-link primary-link">
              Jelajahi artikel
              <span>↗</span>
            </a>

            <a href="#featured" class="intro-link">
              Artikel pilihan
              <span>↓</span>
            </a>
          </div>
        </div>

      </div>
    </section>


    <!-- =====================================================
         QUICK INFO
    ====================================================== -->
    <section class="quick-info">
      <div class="container">

        <div class="info-grid">

          <div class="info-item">
            <span class="info-number">06</span>
            <div>
              <strong>Artikel terbaru</strong>
              <p>Insight teknologi dan bisnis</p>
            </div>
          </div>

          <div class="info-item">
            <span class="info-number">03</span>
            <div>
              <strong>Topik utama</strong>
              <p>Technology, development & business</p>
            </div>
          </div>

          <div class="info-item">
            <span class="info-number">05+</span>
            <div>
              <strong>Menit membaca</strong>
              <p>Rata-rata waktu setiap artikel</p>
            </div>
          </div>

          <div class="info-item info-highlight">
            <span class="info-icon">✦</span>
            <div>
              <strong>Digital knowledge</strong>
              <p>Praktis untuk kebutuhan bisnis</p>
            </div>
          </div>

        </div>

      </div>
    </section>


    <!-- =====================================================
         FEATURED ARTICLE
    ====================================================== -->
    <section id="featured" class="section featured-section">
      <div class="container">

        <div class="section-heading">

          <div>
            <span class="eyebrow">
              Featured Article
            </span>

            <h2>
              Ide yang membantu
              <br />
              bisnis bergerak lebih jauh.
            </h2>
          </div>

          <p>
            Pilihan artikel yang membahas software development,
            teknologi, dan strategi digital dari sudut pandang
            yang lebih praktis.
          </p>

        </div>


        <article class="featured-card">

          <!-- IMAGE -->
          <div class="featured-image">

            <img
              :src="articles[0].image"
              :alt="articles[0].title"
            />

            <div class="featured-overlay"></div>

            <div class="image-label">
              {{ articles[0].category }}
            </div>

            <div class="image-caption">
              <span>01</span>
              <span>Featured insight</span>
            </div>

          </div>


          <!-- CONTENT -->
          <div class="featured-content">

            <div class="article-meta">
              <span>{{ articles[0].date }}</span>
              <span class="meta-line"></span>
              <span>{{ articles[0].readTime }}</span>
            </div>

            <h3>
              {{ articles[0].title }}
            </h3>

            <p>
              {{ articles[0].excerpt }}
            </p>

            <div class="featured-bottom">

              <a href="#" class="read-more">
                Baca selengkapnya
                <span>↗</span>
              </a>

              <span class="article-number">
                01 / 06
              </span>

            </div>

          </div>

        </article>

      </div>
    </section>


    <!-- =====================================================
         ARTICLES
    ====================================================== -->
    <section id="artikel" class="section article-section">
      <div class="container">

        <div class="article-header">

          <div>
            <span class="eyebrow">
              Latest Insight
            </span>

            <h2>
              Artikel terbaru
            </h2>
          </div>

          <p>
            Pengetahuan praktis untuk membantu Anda memahami
            teknologi dan mengambil keputusan digital yang lebih baik.
          </p>

        </div>


        <!-- CATEGORY -->
        <div class="category-list">

          <button
            v-for="category in categories"
            :key="category"
            :class="[
              'category-button',
              { active: activeCategory === category }
            ]"
            @click="setCategory(category)"
          >
            {{ category }}
          </button>

        </div>


        <!-- GRID -->
        <div class="article-grid">

          <article
            v-for="(article, index) in filteredArticles"
            :key="article.id"
            class="article-card"
          >

            <div class="article-image">

              <img
                :src="article.image"
                :alt="article.title"
              />

              <div class="article-number-card">
                {{ String(index + 1).padStart(2, '0') }}
              </div>

              <span class="article-category">
                {{ article.category }}
              </span>

            </div>


            <div class="article-content">

              <div class="article-meta">
                <span>{{ article.date }}</span>
                <span class="meta-dot"></span>
                <span>{{ article.readTime }}</span>
              </div>

              <h3>
                {{ article.title }}
              </h3>

              <p>
                {{ article.excerpt }}
              </p>

              <a href="#" class="article-link">
                Baca artikel
                <span>→</span>
              </a>

            </div>

          </article>

        </div>

      </div>
    </section>


    <!-- =====================================================
         TOPICS
    ====================================================== -->
    <section class="topics-section">
      <div class="container">

        <div class="topics-wrapper">

          <!-- LEFT -->
          <div class="topics-content">

            <span class="eyebrow">
              Explore Topics
            </span>

            <h2>
              Teknologi terus berubah.
              <span>Kita terus belajar.</span>
            </h2>

            <p>
              Dari pengembangan aplikasi hingga transformasi digital,
              kami berbagi pengalaman dan pengetahuan untuk membantu
              bisnis mengambil keputusan teknologi yang lebih baik.
            </p>

            <a href="#artikel" class="btn btn-primary">
              Lihat semua insight
              <span>↗</span>
            </a>

          </div>


          <!-- RIGHT -->
          <div class="topic-list">

            <div class="topic-item">

              <span class="topic-number">
                01
              </span>

              <div class="topic-main">
                <strong>
                  Technology
                </strong>

                <span>
                  Tren & inovasi teknologi
                </span>
              </div>

              <span class="topic-arrow">
                ↗
              </span>

            </div>


            <div class="topic-item topic-active">

              <span class="topic-number">
                02
              </span>

              <div class="topic-main">
                <strong>
                  Software Development
                </strong>

                <span>
                  Software, engineering & product
                </span>
              </div>

              <span class="topic-arrow">
                ↗
              </span>

            </div>


            <div class="topic-item">

              <span class="topic-number">
                03
              </span>

              <div class="topic-main">
                <strong>
                  Business
                </strong>

                <span>
                  Strategi digital untuk bisnis
                </span>
              </div>

              <span class="topic-arrow">
                ↗
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>


    <!-- =====================================================
         CTA
    ====================================================== -->
    <section class="cta-section">
      <div class="container">

        <div class="cta-card">

          <div class="cta-pattern"></div>

          <div class="cta-content">

            <span class="eyebrow">
              Let's Build Something
            </span>

            <h2>
              Punya ide digital
              <br />
              yang ingin diwujudkan?
            </h2>

            <p>
              Diskusikan kebutuhan software bisnis Anda
              bersama tim kami.
            </p>

            <a href="#" class="btn btn-light">
              Konsultasikan sekarang
              <span>↗</span>
            </a>

          </div>


          <div class="cta-visual">

            <div class="cta-circle circle-one"></div>
            <div class="cta-circle circle-two"></div>

            <div class="cta-center">
              ✦
            </div>

          </div>

        </div>

      </div>
    </section>

  </main>
</template>


<style scoped>

/* =========================================================
   VARIABLES
========================================================= */

.blog-page {
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


/* =========================================================
   RESET
========================================================= */

.blog-page *,
.blog-page *::before,
.blog-page *::after {
  box-sizing: border-box;
}

.blog-page h1,
.blog-page h2,
.blog-page h3,
.blog-page h4 {
  margin: 0;

  font-family: var(--font-heading);
  font-weight: 600;
  line-height: 1.15;
}

.blog-page p {
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
  padding: 90px 0;
}

.eyebrow {
  display: inline-block;

  margin-bottom: 16px;

  color: var(--color-deep-orange);

  font-family: var(--font-heading);
  font-size: 11px;
  font-weight: 700;

  letter-spacing: .09em;
  line-height: 1.4;
  text-transform: uppercase;
}


/* =========================================================
   BUTTON
========================================================= */

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

  transition:
    transform .2s ease,
    background .2s ease,
    color .2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background: var(--color-red);
  color: #fff;
}

.btn-primary:hover {
  background: var(--color-deep-orange);
}

.btn-light {
  background: #fff;
  color: var(--color-red);
}

.btn-light:hover {
  background: var(--color-yellow);
}


/* =========================================================
   INTRO
========================================================= */

.blog-intro {
  padding: 90px 0 55px;

  background:
    radial-gradient(
      circle at 90% 0%,
      rgba(251, 159, 55, .13),
      transparent 32%
    ),
    var(--color-bg);
}

.intro-container {
  display: grid;

  grid-template-columns: 1.15fr .85fr;

  align-items: end;

  gap: 70px;
}

.intro-left h1 {
  max-width: 720px;

  font-size: clamp(46px, 5.3vw, 70px);

  letter-spacing: -.055em;
}

.intro-left h1 span {
  color: var(--color-red);
}

.intro-right {
  padding-bottom: 8px;
}

.intro-right p {
  max-width: 430px;

  color: var(--color-text-secondary);

  font-size: 15px;
  line-height: 1.8;
}

.intro-links {
  display: flex;
  align-items: center;
  gap: 24px;

  margin-top: 25px;
}

.intro-link {
  display: inline-flex;
  align-items: center;

  gap: 8px;

  color: var(--color-text);

  font-family: var(--font-heading);
  font-size: 12px;
  font-weight: 600;

  text-decoration: none;

  transition: color .2s ease;
}

.intro-link span {
  color: var(--color-red);

  transition: transform .2s ease;
}

.intro-link:hover {
  color: var(--color-red);
}

.intro-link:hover span {
  transform: translate(3px, -3px);
}

.primary-link {
  color: var(--color-red);
}


/* =========================================================
   QUICK INFO
========================================================= */

.quick-info {
  padding: 0 0 65px;

  background: var(--color-bg);
}

.info-grid {
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.info-item {
  min-height: 105px;

  display: flex;
  align-items: center;

  gap: 18px;

  padding: 20px 24px;

  border-right: 1px solid var(--color-border);
}

.info-item:first-child {
  padding-left: 0;
}

.info-item:last-child {
  border-right: 0;
}

.info-number {
  flex-shrink: 0;

  color: var(--color-red);

  font-family: var(--font-heading);
  font-size: 24px;
  font-weight: 600;
}

.info-item strong {
  display: block;

  font-family: var(--font-heading);
  font-size: 12px;
  font-weight: 600;
}

.info-item p {
  margin-top: 3px;

  color: var(--color-text-secondary);

  font-size: 11px;
}

.info-highlight {
  background: rgba(252, 239, 146, .18);
}

.info-icon {
  width: 36px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  border-radius: 10px;

  background: var(--color-yellow);

  color: var(--color-red);
}


/* =========================================================
   SECTION HEADING
========================================================= */

.section-heading {
  display: grid;

  grid-template-columns: 1fr 340px;

  align-items: end;

  gap: 50px;

  margin-bottom: 42px;
}

.section-heading h2,
.article-header h2 {
  font-size: clamp(34px, 4vw, 48px);

  letter-spacing: -.045em;
}

.section-heading > p,
.article-header > p {
  color: var(--color-text-secondary);

  font-size: 14px;
  line-height: 1.8;
}


/* =========================================================
   FEATURED
========================================================= */

.featured-section {
  background: var(--color-surface);
}

.featured-card {
  display: grid;

  grid-template-columns: 1.08fr .92fr;

  min-height: 440px;

  overflow: hidden;

  border: 1px solid var(--color-border);
  border-radius: 20px;

  background: var(--color-bg);
}

.featured-image {
  position: relative;

  min-height: 440px;

  overflow: hidden;

  background: #ddd;
}

.featured-image img {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;

  transition: transform .6s ease;
}

.featured-card:hover .featured-image img {
  transform: scale(1.04);
}

.featured-overlay {
  position: absolute;

  inset: 0;

  background:
    linear-gradient(
      180deg,
      rgba(0, 0, 0, .03),
      rgba(0, 0, 0, .35)
    );
}

.image-label {
  position: absolute;

  top: 22px;
  left: 22px;

  padding: 8px 12px;

  border-radius: 7px;

  background: #fff;

  color: var(--color-red);

  font-family: var(--font-heading);
  font-size: 10px;
  font-weight: 700;

  text-transform: uppercase;
}

.image-caption {
  position: absolute;

  left: 22px;
  bottom: 22px;

  display: flex;
  align-items: center;

  gap: 12px;

  color: #fff;

  font-family: var(--font-heading);
  font-size: 11px;
}

.image-caption span:first-child {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 32px;
  height: 32px;

  border-radius: 50%;

  background: var(--color-red);

  font-weight: 700;
}

.featured-content {
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 52px;
}

.article-meta {
  display: flex;
  align-items: center;

  gap: 9px;

  color: #85837d;

  font-size: 11px;
  line-height: 1.4;
}

.meta-line {
  width: 20px;
  height: 1px;

  background: #b8b6b0;
}

.featured-content h3 {
  margin-top: 22px;

  font-size: clamp(26px, 3vw, 34px);

  letter-spacing: -.035em;
}

.featured-content > p {
  max-width: 460px;

  margin-top: 18px;

  color: var(--color-text-secondary);

  font-size: 14px;
  line-height: 1.8;
}

.featured-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 30px;

  padding-top: 22px;

  border-top: 1px solid var(--color-border);
}

.read-more {
  display: inline-flex;
  align-items: center;

  gap: 9px;

  color: var(--color-red);

  font-family: var(--font-heading);
  font-size: 12px;
  font-weight: 700;

  text-decoration: none;
}

.read-more span {
  transition: transform .2s ease;
}

.read-more:hover span {
  transform: translate(3px, -3px);
}

.article-number {
  color: #aaa;

  font-family: var(--font-heading);
  font-size: 11px;
}


/* =========================================================
   ARTICLES
========================================================= */

.article-section {
  background: var(--color-bg);
}

.article-header {
  display: grid;

  grid-template-columns: 1fr 340px;

  align-items: end;

  gap: 50px;

  margin-bottom: 32px;
}

.category-list {
  display: flex;
  flex-wrap: wrap;

  gap: 8px;

  margin-bottom: 40px;
}

.category-button {
  padding: 9px 15px;

  border: 1px solid var(--color-border);
  border-radius: 50px;

  background: transparent;

  color: var(--color-text-secondary);

  font-family: var(--font-body);
  font-size: 12px;

  cursor: pointer;

  transition:
    background .2s ease,
    border-color .2s ease,
    color .2s ease;
}

.category-button:hover {
  border-color: var(--color-red);
  color: var(--color-red);
}

.category-button.active {
  border-color: var(--color-red);

  background: var(--color-red);

  color: #fff;
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

  background: var(--color-surface);

  transition:
    transform .25s ease,
    box-shadow .25s ease;
}

.article-card:hover {
  transform: translateY(-5px);

  box-shadow:
    0 18px 40px rgba(26, 26, 26, .08);
}

.article-image {
  position: relative;

  height: 215px;

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

.article-number-card {
  position: absolute;

  top: 14px;
  left: 14px;

  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;

  background: rgba(255,255,255,.95);

  color: var(--color-red);

  font-family: var(--font-heading);
  font-size: 10px;
  font-weight: 700;
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
  padding: 23px;
}

.article-content h3 {
  margin-top: 14px;

  font-size: 19px;

  letter-spacing: -.025em;
}

.article-content p {
  margin-top: 11px;

  color: var(--color-text-secondary);

  font-size: 13px;

  line-height: 1.7;
}

.article-link {
  display: inline-flex;
  align-items: center;

  gap: 7px;

  margin-top: 20px;

  color: var(--color-text);

  font-family: var(--font-heading);
  font-size: 11px;
  font-weight: 700;

  text-decoration: none;
}

.article-link span {
  color: var(--color-red);

  transition: transform .2s ease;
}

.article-link:hover span {
  transform: translateX(4px);
}


/* =========================================================
   TOPICS
========================================================= */

.topics-section {
  padding: 95px 0;

  background: var(--color-surface);
}

.topics-wrapper {
  display: grid;

  grid-template-columns: .9fr 1.1fr;

  gap: 80px;

  align-items: center;
}

.topics-content h2 {
  max-width: 500px;

  font-size: clamp(34px, 4vw, 50px);

  letter-spacing: -.045em;
}

.topics-content h2 span {
  color: var(--color-red);
}

.topics-content > p {
  max-width: 480px;

  margin-top: 22px;

  color: var(--color-text-secondary);

  font-size: 14px;

  line-height: 1.8;
}

.topics-content .btn {
  margin-top: 27px;
}

.topic-list {
  display: flex;
  flex-direction: column;

  border-top: 1px solid var(--color-border);
}

.topic-item {
  display: grid;

  grid-template-columns: 50px 1fr 35px;

  align-items: center;

  gap: 18px;

  min-height: 100px;

  padding: 18px 20px;

  border-bottom: 1px solid var(--color-border);

  transition:
    padding .25s ease,
    background .25s ease;
}

.topic-item:hover {
  padding-left: 27px;

  background: #fffaf0;
}

.topic-active {
  background: #fffaf0;
}

.topic-number {
  color: var(--color-red);

  font-family: var(--font-heading);
  font-size: 11px;
  font-weight: 700;
}

.topic-main strong {
  display: block;

  font-family: var(--font-heading);
  font-size: 16px;
  font-weight: 600;
}

.topic-main span {
  display: block;

  margin-top: 4px;

  color: var(--color-text-secondary);

  font-size: 12px;
}

.topic-arrow {
  color: var(--color-red);

  font-family: var(--font-heading);
  font-size: 18px;

  text-align: right;
}


/* =========================================================
   CTA
========================================================= */

.cta-section {
  padding: 0 0 90px;

  background: var(--color-surface);
}

.cta-card {
  position: relative;

  min-height: 350px;

  display: flex;
  align-items: center;

  overflow: hidden;

  padding: 60px;

  border-radius: 22px;

  background:
    linear-gradient(
      120deg,
      var(--color-red),
      var(--color-deep-orange)
    );

  color: #fff;
}

.cta-content {
  position: relative;

  z-index: 2;

  max-width: 620px;
}

.cta-content .eyebrow {
  color: var(--color-yellow);
}

.cta-content h2 {
  font-size: clamp(35px, 4.5vw, 52px);

  letter-spacing: -.045em;
}

.cta-content p {
  max-width: 470px;

  margin-top: 17px;

  color: rgba(255,255,255,.82);

  font-size: 14px;
}

.cta-content .btn {
  margin-top: 27px;
}

.cta-visual {
  position: absolute;

  right: 75px;

  width: 250px;
  height: 250px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.cta-circle {
  position: absolute;

  border: 1px solid rgba(255,255,255,.22);

  border-radius: 50%;
}

.circle-one {
  width: 250px;
  height: 250px;
}

.circle-two {
  width: 160px;
  height: 160px;
}

.cta-center {
  width: 72px;
  height: 72px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  background: var(--color-yellow);

  color: var(--color-red);

  font-size: 25px;

  box-shadow:
    0 0 50px rgba(252,239,146,.3);
}

.cta-pattern {
  position: absolute;

  width: 350px;
  height: 350px;

  right: -130px;
  top: -160px;

  border-radius: 50%;

  background: rgba(255,255,255,.07);
}


/* =========================================================
   RESPONSIVE
========================================================= */

@media (max-width: 1000px) {

  .intro-container {
    grid-template-columns: 1fr .8fr;

    gap: 40px;
  }

  .info-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .info-item:nth-child(2) {
    border-right: 0;
  }

  .info-item:nth-child(-n+2) {
    border-bottom: 1px solid var(--color-border);
  }

  .section-heading,
  .article-header {
    grid-template-columns: 1fr 300px;

    gap: 30px;
  }

  .featured-card {
    grid-template-columns: 1fr 1fr;
  }

  .featured-content {
    padding: 38px;
  }

  .article-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .topics-wrapper {
    grid-template-columns: 1fr 1fr;

    gap: 45px;
  }

  .cta-visual {
    right: 20px;

    opacity: .55;
  }
}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 760px) {

  .container {
    padding: 0 20px;
  }

  .section {
    padding: 70px 0;
  }

  .blog-intro {
    padding: 65px 0 45px;
  }

  .intro-container {
    grid-template-columns: 1fr;

    gap: 25px;
  }

  .intro-left h1 {
    font-size: 46px;
  }

  .intro-right {
    padding-bottom: 0;
  }

  .intro-right p {
    max-width: 600px;
  }

  .info-grid {
    grid-template-columns: 1fr 1fr;
  }

  .info-item {
    min-height: 95px;

    padding: 17px;
  }

  .info-item:first-child {
    padding-left: 17px;
  }

  .section-heading,
  .article-header {
    grid-template-columns: 1fr;

    gap: 18px;
  }

  .section-heading h2,
  .article-header h2 {
    font-size: 38px;
  }

  .featured-card {
    grid-template-columns: 1fr;
  }

  .featured-image {
    min-height: 320px;
  }

  .featured-content {
    padding: 32px;
  }

  .topics-wrapper {
    grid-template-columns: 1fr;

    gap: 45px;
  }

  .topics-content h2 {
    font-size: 40px;
  }

  .cta-card {
    min-height: 390px;

    padding: 40px 30px;
  }

  .cta-visual {
    right: -55px;
    bottom: -50px;

    opacity: .35;
  }
}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 520px) {

  .container {
    padding: 0 18px;
  }

  .blog-intro {
    padding: 48px 0 38px;
  }

  .intro-left h1 {
    font-size: 37px;

    letter-spacing: -.045em;
  }

  .intro-right p {
    font-size: 14px;
  }

  .intro-links {
    flex-wrap: wrap;

    gap: 17px;
  }

  .quick-info {
    padding-bottom: 45px;
  }

  .info-grid {
    grid-template-columns: 1fr;
  }

  .info-item {
    min-height: 82px;

    border-right: 0;
    border-bottom: 1px solid var(--color-border);
  }

  .info-item:nth-child(2) {
    border-bottom: 1px solid var(--color-border);
  }

  .info-item:last-child {
    border-bottom: 0;
  }

  .section-heading h2,
  .article-header h2 {
    font-size: 34px;
  }

  .featured-image {
    min-height: 270px;
  }

  .featured-content {
    padding: 26px;
  }

  .featured-content h3 {
    font-size: 27px;
  }

  .featured-bottom {
    align-items: flex-start;
    gap: 15px;
  }

  .article-grid {
    grid-template-columns: 1fr;
  }

  .article-image {
    height: 235px;
  }

  .category-list {
    gap: 6px;
  }

  .category-button {
    padding: 8px 12px;

    font-size: 11px;
  }

  .topics-section {
    padding: 70px 0;
  }

  .topics-content h2 {
    font-size: 36px;
  }

  .topic-item {
    grid-template-columns: 35px 1fr 25px;

    gap: 12px;

    min-height: 88px;

    padding: 15px;
  }

  .topic-main strong {
    font-size: 14px;
  }

  .topic-main span {
    font-size: 11px;
  }

  .cta-section {
    padding-bottom: 60px;
  }

  .cta-card {
    min-height: 420px;

    padding: 32px 25px;
  }

  .cta-content h2 {
    font-size: 34px;
  }

  .cta-visual {
    width: 160px;
    height: 160px;

    right: -45px;
    bottom: -35px;
  }

  .circle-one {
    width: 160px;
    height: 160px;
  }

  .circle-two {
    width: 105px;
    height: 105px;
  }

  .cta-center {
    width: 55px;
    height: 55px;

    font-size: 20px;
  }
}

</style>