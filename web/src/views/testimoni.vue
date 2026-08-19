<script setup>
import { ref } from 'vue'

const testimonials = ref([
  {
    rating: 5,
    text: 'Timnya sangat komunikatif dan mampu memahami kebutuhan bisnis kami dengan cepat. Hasil akhirnya sangat memuaskan.',
    name: 'Andi Pratama',
    role: 'CEO',
    company: 'Maju Bersama',
    initials: 'AP'
  },
  {
    rating: 5,
    text: 'Proses pengerjaan cepat, rapi, dan selalu memberikan update progress kepada kami. Sangat profesional.',
    name: 'Sarah Wijaya',
    role: 'Founder',
    company: 'Kreativa Studio',
    initials: 'SW'
  },
  {
    rating: 5,
    text: 'Website yang dibuat tidak hanya terlihat bagus, tetapi juga membantu bisnis kami terlihat jauh lebih profesional.',
    name: 'Budi Santoso',
    role: 'Director',
    company: 'Nusantara Group',
    initials: 'BS'
  },
  {
    rating: 5,
    text: 'Dari awal konsultasi sampai project selesai, komunikasinya sangat jelas. Kami merasa benar-benar dibantu.',
    name: 'Dina Maharani',
    role: 'Marketing Manager',
    company: 'Arunika Creative',
    initials: 'DM'
  },
  {
    rating: 4,
    text: 'Desain yang diberikan sesuai dengan identitas brand kami. Tim juga terbuka dengan masukan selama proses pengerjaan.',
    name: 'Rizky Ramadhan',
    role: 'Business Owner',
    company: 'Ruang Digital',
    initials: 'RR'
  },
  {
    rating: 5,
    text: 'Kami mendapatkan lebih dari sekadar website. Tim membantu kami menemukan solusi digital yang tepat untuk bisnis.',
    name: 'Nadia Putri',
    role: 'Co-Founder',
    company: 'Growify',
    initials: 'NP'
  }
])

const selectedCategory = ref('Semua')

const categories = ['Semua', 'Website', 'Aplikasi', 'UI/UX']

const projectStories = [
  {
    number: '01',
    category: 'Website',
    title: 'Membangun Identitas Digital yang Lebih Profesional',
    company: 'Maju Bersama',
    description:
      'Membantu bisnis memiliki website yang modern, responsif, dan mampu memberikan pengalaman digital yang lebih baik kepada pelanggan.'
  },
  {
    number: '02',
    category: 'Aplikasi',
    title: 'Mengubah Proses Manual Menjadi Lebih Efisien',
    company: 'Nusantara Group',
    description:
      'Mengembangkan solusi aplikasi yang membantu tim mengelola pekerjaan dan data secara lebih cepat dan terstruktur.'
  },
  {
    number: '03',
    category: 'UI/UX',
    title: 'Membuat Pengalaman Pengguna Lebih Sederhana',
    company: 'Kreativa Studio',
    description:
      'Merancang interface yang bersih dan mudah digunakan agar pengguna dapat menemukan informasi dengan lebih cepat.'
  }
]

const whyUs = [
  {
    number: '01',
    title: 'Memahami Kebutuhan',
    text: 'Kami memulai setiap project dengan memahami tujuan dan kebutuhan bisnis Anda.'
  },
  {
    number: '02',
    title: 'Komunikasi Terbuka',
    text: 'Setiap progress dikomunikasikan dengan jelas agar Anda selalu mengetahui perkembangan project.'
  },
  {
    number: '03',
    title: 'Hasil Berkualitas',
    text: 'Kami memperhatikan desain, performa, responsivitas, dan pengalaman pengguna.'
  },
  {
    number: '04',
    title: 'Support Berkelanjutan',
    text: 'Kami tetap siap membantu setelah project selesai dan website atau aplikasi digunakan.'
  }
]
</script>

<template>
  <main class="testimoni-page">

    <!-- ================= HERO ================= -->
    <section class="testimonial-hero">

      <div class="hero-pattern"></div>

      <div class="hero-container">

        <!-- LEFT -->
        <div class="hero-content">

          <div class="hero-badge">
            <span class="badge-dot"></span>
            TESTIMONI · 01
          </div>

          <h1>
            Cerita Nyata,
            <br />
            Dari Klien yang
            <span>Puas.</span>
          </h1>

          <p>
            Bukan hanya tentang hasil yang bagus, tetapi tentang pengalaman
            bekerja bersama tim yang memahami kebutuhan bisnis Anda.
          </p>

          <div class="hero-buttons">
            <a href="#testimonials" class="btn-primary">
              Lihat Cerita Mereka
              <span>→</span>
            </a>

            <a href="/konsultasi" class="btn-secondary">
              Konsultasi Gratis
            </a>
          </div>

          <div class="hero-mini-stats">
            <div>
              <strong>4.9</strong>
              <span>Average Rating</span>
            </div>

            <div class="mini-divider"></div>

            <div>
              <strong>98%</strong>
              <span>Client Satisfaction</span>
            </div>
          </div>

        </div>

        <!-- RIGHT VISUAL -->
        <div class="hero-visual">

          <div class="floating-badge badge-rating">
            <div class="badge-icon">★</div>
            <div>
              <strong>4.9 / 5.0</strong>
              <small>Client Rating</small>
            </div>
          </div>

          <div class="main-review-card">

            <div class="review-top">
              <div class="quote-icon">“</div>

              <div class="review-stars">
                ★★★★★
              </div>
            </div>

            <p>
              “Tim yang sangat profesional, komunikatif,
              dan mampu memberikan solusi yang benar-benar
              sesuai dengan kebutuhan bisnis kami.”
            </p>

            <div class="review-author">
              <div class="author-avatar">
                AP
              </div>

              <div>
                <strong>Andi Pratama</strong>
                <span>CEO · Maju Bersama</span>
              </div>
            </div>

          </div>

          <div class="floating-card satisfaction-card">

            <div class="progress-circle">
              <span>98%</span>
            </div>

            <div>
              <strong>Client Satisfaction</strong>
              <small>Very Satisfied</small>
            </div>

          </div>

          <div class="floating-card project-card">

            <div class="project-check">
              ✓
            </div>

            <div>
              <strong>150+</strong>
              <small>Projects Completed</small>
            </div>

          </div>

          <div class="orange-shape"></div>

        </div>

      </div>
    </section>


    <!-- ================= STATS ================= -->
    <section class="stats-section">

      <div class="stats-container">

        <div class="stat-item">
          <strong>100+</strong>
          <span>Happy Clients</span>
        </div>

        <div class="stat-item">
          <strong>150+</strong>
          <span>Projects Completed</span>
        </div>

        <div class="stat-item">
          <strong>98%</strong>
          <span>Client Satisfaction</span>
        </div>

        <div class="stat-item">
          <strong>4.9/5</strong>
          <span>Average Rating</span>
        </div>

      </div>

    </section>


    <!-- ================= TESTIMONIALS ================= -->
    <section id="testimonials" class="testimonials-section">

      <div class="section-heading">

        <span class="section-label">
          TESTIMONI KLIEN
        </span>

        <h2>
          Apa Kata Mereka Setelah
          <span>Bekerja Bersama Kami?</span>
        </h2>

        <p>
          Pengalaman nyata dari berbagai bisnis yang telah mempercayakan
          kebutuhan digital mereka kepada kami.
        </p>

      </div>

      <!-- FILTER -->
      <div class="category-filter">

        <button
          v-for="category in categories"
          :key="category"
          :class="{ active: selectedCategory === category }"
          @click="selectedCategory = category"
        >
          {{ category }}
        </button>

      </div>

      <!-- CARDS -->
      <div class="testimonial-grid">

        <article
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          class="testimonial-card"
        >

          <div class="card-top">

            <div class="quote-mark">
              “
            </div>

            <div class="stars">
              <span
                v-for="star in 5"
                :key="star"
                :class="{ empty: star > testimonial.rating }"
              >
                ★
              </span>
            </div>

          </div>

          <p class="testimonial-text">
            "{{ testimonial.text }}"
          </p>

          <div class="card-line"></div>

          <div class="testimonial-author">

            <div class="avatar">
              {{ testimonial.initials }}
            </div>

            <div class="author-info">
              <strong>{{ testimonial.name }}</strong>

              <span>
                {{ testimonial.role }} ·
                {{ testimonial.company }}
              </span>
            </div>

          </div>

        </article>

      </div>

    </section>


    <!-- ================= PROJECT STORIES ================= -->
    <section class="stories-section">

      <div class="stories-container">

        <div class="stories-heading">

          <span class="section-label">
            PROJECT STORIES
          </span>

          <h2>
            Bukan Sekadar
            <span>Testimoni.</span>
          </h2>

          <p>
            Setiap project memiliki cerita, tantangan, dan solusi yang berbeda.
          </p>

        </div>

        <div class="stories-list">

          <article
            v-for="story in projectStories"
            :key="story.number"
            class="story-item"
          >

            <div class="story-number">
              {{ story.number }}
            </div>

            <div class="story-content">

              <div class="story-category">
                {{ story.category }}
              </div>

              <h3>
                {{ story.title }}
              </h3>

              <p>
                {{ story.description }}
              </p>

              <span class="story-company">
                {{ story.company }}
              </span>

            </div>

            <div class="story-arrow">
              →
            </div>

          </article>

        </div>

      </div>

    </section>


    <!-- ================= WHY US ================= -->
    <section class="why-section">

      <div class="section-heading">

        <span class="section-label">
          WHY CLIENTS CHOOSE US
        </span>

        <h2>
          Kenapa Mereka
          <span>Memilih Kami?</span>
        </h2>

        <p>
          Kami percaya pengalaman yang baik dimulai dari proses yang baik.
        </p>

      </div>

      <div class="why-grid">

        <article
          v-for="item in whyUs"
          :key="item.number"
          class="why-card"
        >

          <span class="why-number">
            {{ item.number }}
          </span>

          <div class="why-icon">
            <span>✦</span>
          </div>

          <h3>
            {{ item.title }}
          </h3>

          <p>
            {{ item.text }}
          </p>

        </article>

      </div>

    </section>


    <!-- ================= CTA ================= -->
    <section class="final-cta">

      <div class="cta-pattern"></div>

      <div class="cta-content">

        <span class="cta-label">
          READY TO START?
        </span>

        <h2>
          Punya Ide yang Ingin
          <br />
          <span>Diwujudkan?</span>
        </h2>

        <p>
          Mari buat solusi digital yang bukan hanya terlihat bagus,
          tetapi benar-benar membantu bisnis Anda berkembang.
        </p>

        <a href="/konsultasi" class="cta-button">
          Mulai Konsultasi Gratis
          <span>→</span>
        </a>

      </div>

    </section>

  </main>
</template>


<style scoped>

/* =========================================
   GLOBAL
========================================= */

* {
  box-sizing: border-box;
}

.testimoni-page {
  width: 100%;
  overflow: hidden;
  color: #111827;
  background: #fff;
}

a {
  text-decoration: none;
}


/* =========================================
   HERO
========================================= */

.testimonial-hero {
  position: relative;
  min-height: 650px;
  overflow: hidden;
  background:
    linear-gradient(
      120deg,
      #ffdc75 0%,
      #fff1b7 45%,
      #ffe4c4 100%
    );
}

.hero-pattern {
  position: absolute;
  inset: 0;
  opacity: .25;
  background-image:
    linear-gradient(#e8b95d 1px, transparent 1px),
    linear-gradient(90deg, #e8b95d 1px, transparent 1px);
  background-size: 42px 42px;
}

.hero-container {
  position: relative;
  z-index: 2;
  width: min(1200px, 90%);
  min-height: 650px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 40px;
}


/* =========================================
   HERO CONTENT
========================================= */

.hero-content {
  padding: 70px 0;
}

.hero-badge {
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 10px 18px;
  border-radius: 40px;
  background: white;
  color: #f04b23;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: .5px;
  box-shadow: 0 8px 25px rgba(0,0,0,.07);
}

.badge-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ff5a2b;
  box-shadow: 0 0 0 5px rgba(255,90,43,.12);
}

.hero-content h1 {
  margin: 30px 0 22px;
  font-size: clamp(46px, 5vw, 68px);
  line-height: 1.04;
  letter-spacing: -2.5px;
  font-weight: 850;
}

.hero-content h1 span {
  color: #ed4921;
}

.hero-content p {
  max-width: 550px;
  margin-bottom: 32px;
  color: #614c35;
  font-size: 17px;
  line-height: 1.8;
}

.hero-buttons {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  min-height: 52px;
  padding: 0 26px;
  border-radius: 30px;
  font-weight: 800;
  transition: .3s ease;
}

.btn-primary {
  color: white;
  background: linear-gradient(135deg, #ff9d36, #f23819);
  box-shadow: 0 15px 30px rgba(239,76,29,.25);
}

.btn-primary:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 35px rgba(239,76,29,.35);
}

.btn-secondary {
  color: #111827;
  background: white;
  border: 1px solid rgba(240,75,35,.2);
}

.btn-secondary:hover {
  transform: translateY(-4px);
  border-color: #f04b23;
}

.hero-mini-stats {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-top: 45px;
}

.hero-mini-stats div {
  display: flex;
  flex-direction: column;
}

.hero-mini-stats strong {
  font-size: 25px;
}

.hero-mini-stats span {
  margin-top: 3px;
  color: #806b50;
  font-size: 12px;
}

.mini-divider {
  width: 1px;
  height: 38px;
  background: rgba(0,0,0,.15);
}


/* =========================================
   HERO VISUAL
========================================= */

.hero-visual {
  position: relative;
  height: 540px;
}

.main-review-card {
  position: absolute;
  z-index: 4;
  top: 100px;
  right: 35px;
  width: 430px;
  padding: 32px;
  border: 7px solid #24211e;
  border-radius: 30px;
  background: #fff;
  transform: rotate(-3deg);
  box-shadow: 15px 20px 0 rgba(0,0,0,.08);
}

.review-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.quote-icon {
  font-size: 65px;
  line-height: .6;
  color: #f5ca54;
  font-family: Georgia, serif;
}

.review-stars {
  color: #f04b23;
  letter-spacing: 3px;
}

.main-review-card p {
  margin: 28px 0;
  font-size: 18px;
  line-height: 1.65;
  font-weight: 650;
}

.review-author {
  display: flex;
  align-items: center;
  gap: 13px;
  padding-top: 20px;
  border-top: 1px solid #eee0c5;
}

.author-avatar,
.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 50%;
  background: #191919;
  color: #ffd95f;
  font-weight: 900;
}

.author-avatar {
  width: 48px;
  height: 48px;
}

.review-author div:last-child {
  display: flex;
  flex-direction: column;
}

.review-author strong {
  font-size: 14px;
}

.review-author span {
  margin-top: 4px;
  color: #888;
  font-size: 12px;
}

.floating-card,
.floating-badge {
  position: absolute;
  z-index: 6;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 18px;
  border-radius: 18px;
  background: white;
  box-shadow: 0 15px 35px rgba(0,0,0,.12);
}

.floating-card strong,
.floating-badge strong {
  display: block;
  font-size: 13px;
}

.floating-card small,
.floating-badge small {
  display: block;
  margin-top: 3px;
  color: #888;
  font-size: 10px;
}

.badge-rating {
  top: 35px;
  left: 20px;
}

.badge-icon {
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: white;
  background: #f4511e;
}

.satisfaction-card {
  left: 10px;
  bottom: 80px;
}

.progress-circle {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid #ffd95f;
  border-left-color: #f4511e;
  border-radius: 50%;
  font-size: 11px;
  font-weight: 900;
}

.project-card {
  right: 0;
  bottom: 25px;
}

.project-check {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: white;
  background: #1c9b64;
  font-weight: 900;
}

.orange-shape {
  position: absolute;
  z-index: 1;
  right: 40px;
  bottom: 45px;
  width: 360px;
  height: 260px;
  border-radius: 50%;
  background: rgba(247,113,42,.12);
  transform: rotate(-15deg);
}


/* =========================================
   STATS
========================================= */

.stats-section {
  padding: 0 0;
  background: white;
}

.stats-container {
  width: min(1100px, 90%);
  margin: auto;
  padding: 45px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.stat-item {
  text-align: center;
  border-right: 1px solid #ececec;
}

.stat-item:last-child {
  border-right: 0;
}

.stat-item strong {
  display: block;
  color: #f04b23;
  font-size: 35px;
  font-weight: 900;
}

.stat-item span {
  display: block;
  margin-top: 5px;
  color: #777;
  font-size: 13px;
}


/* =========================================
   SECTION HEADING
========================================= */

.section-heading {
  width: min(750px, 90%);
  margin: auto;
  text-align: center;
}

.section-label {
  display: inline-block;
  margin-bottom: 15px;
  color: #f04b23;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 1.5px;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(32px, 4vw, 48px);
  line-height: 1.15;
  letter-spacing: -1.5px;
}

.section-heading h2 span {
  color: #f04b23;
}

.section-heading p {
  margin: 18px auto 0;
  max-width: 620px;
  color: #737373;
  line-height: 1.7;
}


/* =========================================
   TESTIMONIAL SECTION
========================================= */

.testimonials-section {
  padding: 100px 0;
  background: #fffdf8;
}

.category-filter {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin: 45px 0 50px;
}

.category-filter button {
  padding: 11px 22px;
  border: 1px solid #eadfca;
  border-radius: 30px;
  color: #555;
  background: white;
  cursor: pointer;
  font-weight: 700;
  transition: .25s;
}

.category-filter button:hover,
.category-filter button.active {
  color: white;
  border-color: #f4511e;
  background: #f4511e;
}

.testimonial-grid {
  width: min(1150px, 90%);
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.testimonial-card {
  padding: 30px;
  border: 1px solid #eee3cc;
  border-radius: 24px;
  background: white;
  transition: .35s ease;
}

.testimonial-card:nth-child(2) {
  transform: translateY(25px);
}

.testimonial-card:nth-child(5) {
  transform: translateY(25px);
}

.testimonial-card:hover {
  transform: translateY(-8px);
  border-color: #f5b34c;
  box-shadow: 0 20px 45px rgba(80,50,20,.1);
}

.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.quote-mark {
  color: #f5d36c;
  font-family: Georgia, serif;
  font-size: 55px;
  line-height: .5;
}

.stars {
  color: #f4511e;
  font-size: 14px;
  letter-spacing: 2px;
}

.stars .empty {
  color: #ddd;
}

.testimonial-text {
  min-height: 125px;
  margin: 28px 0;
  color: #292929;
  font-size: 15px;
  line-height: 1.8;
}

.card-line {
  height: 1px;
  background: #eee5d6;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 13px;
  margin-top: 20px;
}

.avatar {
  width: 46px;
  height: 46px;
}

.author-info {
  display: flex;
  flex-direction: column;
}

.author-info strong {
  font-size: 14px;
}

.author-info span {
  margin-top: 4px;
  color: #888;
  font-size: 11px;
}


/* =========================================
   STORIES
========================================= */

.stories-section {
  padding: 110px 0;
  background: #181715;
  color: white;
}

.stories-container {
  width: min(1100px, 90%);
  margin: auto;
}

.stories-heading {
  max-width: 650px;
  margin-bottom: 60px;
}

.stories-heading .section-label {
  color: #ff9a39;
}

.stories-heading h2 {
  margin: 0;
  font-size: clamp(35px, 5vw, 55px);
  letter-spacing: -2px;
}

.stories-heading h2 span {
  color: #ff7b31;
}

.stories-heading p {
  color: #a7a39c;
  line-height: 1.7;
}

.story-item {
  display: grid;
  grid-template-columns: 100px 1fr 70px;
  align-items: center;
  gap: 30px;
  padding: 35px 10px;
  border-top: 1px solid #393632;
  transition: .3s;
}

.story-item:last-child {
  border-bottom: 1px solid #393632;
}

.story-item:hover {
  padding-left: 25px;
  padding-right: 25px;
  background: #24221f;
  border-radius: 20px;
}

.story-number {
  color: #ff7a30;
  font-size: 14px;
  font-weight: 900;
}

.story-category {
  margin-bottom: 10px;
  color: #ff9b4c;
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.story-content h3 {
  margin: 0 0 10px;
  font-size: 25px;
}

.story-content p {
  max-width: 650px;
  margin: 0;
  color: #aaa;
  line-height: 1.7;
  font-size: 14px;
}

.story-company {
  display: inline-block;
  margin-top: 14px;
  color: white;
  font-size: 12px;
  font-weight: 700;
}

.story-arrow {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #555;
  border-radius: 50%;
  color: #ff7a30;
  font-size: 22px;
  transition: .3s;
}

.story-item:hover .story-arrow {
  color: white;
  background: #f4511e;
  border-color: #f4511e;
  transform: rotate(-45deg);
}


/* =========================================
   WHY US
========================================= */

.why-section {
  padding: 110px 0;
  background: #fff;
}

.why-grid {
  width: min(1100px, 90%);
  margin: 65px auto 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.why-card {
  position: relative;
  padding: 30px;
  border: 1px solid #ece5d9;
  border-radius: 22px;
  transition: .3s;
}

.why-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0,0,0,.07);
}

.why-number {
  color: #f4511e;
  font-size: 12px;
  font-weight: 900;
}

.why-icon {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px 0;
  border-radius: 15px;
  color: #f4511e;
  background: #fff0e9;
  font-size: 22px;
}

.why-card h3 {
  margin: 0 0 12px;
  font-size: 18px;
}

.why-card p {
  margin: 0;
  color: #777;
  font-size: 13px;
  line-height: 1.7;
}


/* =========================================
   FINAL CTA
========================================= */

.final-cta {
  position: relative;
  min-height: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  text-align: center;
  color: white;
  background: linear-gradient(135deg, #ff9d36, #f0441e);
}

.cta-pattern {
  position: absolute;
  inset: 0;
  opacity: .15;
  background-image:
    linear-gradient(30deg, white 12%, transparent 12.5%),
    linear-gradient(150deg, white 12%, transparent 12.5%);
  background-size: 45px 45px;
}

.cta-content {
  position: relative;
  z-index: 2;
  width: min(750px, 90%);
}

.cta-label {
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 2px;
}

.cta-content h2 {
  margin: 18px 0;
  font-size: clamp(40px, 6vw, 65px);
  line-height: 1.05;
  letter-spacing: -2px;
}

.cta-content h2 span {
  color: #fff0a5;
}

.cta-content p {
  max-width: 600px;
  margin: 0 auto 30px;
  color: rgba(255,255,255,.85);
  line-height: 1.7;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 27px;
  border-radius: 35px;
  color: #f4511e;
  background: white;
  font-weight: 900;
  box-shadow: 0 15px 30px rgba(0,0,0,.15);
  transition: .3s;
}

.cta-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 35px rgba(0,0,0,.2);
}


/* =========================================
   RESPONSIVE
========================================= */

@media (max-width: 1000px) {

  .hero-container {
    grid-template-columns: 1fr;
    padding-top: 40px;
  }

  .hero-content {
    padding-bottom: 20px;
  }

  .hero-visual {
    height: 500px;
  }

  .testimonial-hero {
    min-height: auto;
  }

  .stats-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }

  .stat-item:nth-child(2) {
    border-right: 0;
  }

  .testimonial-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .testimonial-card:nth-child(2),
  .testimonial-card:nth-child(5) {
    transform: none;
  }

  .why-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}


@media (max-width: 650px) {

  .hero-content h1 {
    font-size: 43px;
    letter-spacing: -1.5px;
  }

  .hero-content p {
    font-size: 15px;
  }

  .hero-visual {
    height: 440px;
    transform: scale(.85);
    transform-origin: top center;
  }

  .main-review-card {
    right: 0;
    width: 350px;
  }

  .badge-rating {
    left: 0;
  }

  .stats-container {
    grid-template-columns: 1fr 1fr;
  }

  .stat-item {
    border-right: 0;
  }

  .stat-item strong {
    font-size: 27px;
  }

  .testimonial-grid {
    grid-template-columns: 1fr;
  }

  .testimonial-card {
    transform: none !important;
  }

  .category-filter {
    flex-wrap: wrap;
  }

  .story-item {
    grid-template-columns: 45px 1fr;
  }

  .story-arrow {
    display: none;
  }

  .why-grid {
    grid-template-columns: 1fr;
  }

  .final-cta {
    min-height: 430px;
  }

}
</style>