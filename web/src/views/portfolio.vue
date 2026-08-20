<template>
  <main class="portfolio-page">

    <!-- =====================================================
         HERO
    ====================================================== -->
    <section class="portfolio-hero">
      <div class="container">

        <div class="hero-label">
          <span class="label-line"></span>
          <span>BRAN IDENTITY — PORTFOLIO</span>
        </div>

        <div class="hero-content">

          <div class="hero-title">
            <h1>
              Digital solutions
              <span>with Bran Identity.</span>
            </h1>
          </div>

          <div class="hero-description">
            <p>
              Kami membangun website, aplikasi, dan sistem digital
              yang membantu bisnis tampil lebih profesional,
              bekerja lebih efektif, dan berkembang lebih cepat.
            </p>
          </div>

        </div>

        <!-- STATS -->
        <div class="portfolio-stats">

          <div class="stat">
            <strong>20+</strong>
            <span>Projects Completed</span>
          </div>

          <div class="stat">
            <strong>15+</strong>
            <span>Business Partners</span>
          </div>

          <div class="stat">
            <strong>5+</strong>
            <span>Digital Solutions</span>
          </div>

          <div class="stat">
            <strong>100%</strong>
            <span>Client Focused</span>
          </div>

        </div>

      </div>
    </section>


    <!-- =====================================================
         SELECTED WORK
    ====================================================== -->
    <section class="portfolio-list">
      <div class="container">

        <div class="section-heading">

          <div>
            <span class="eyebrow">
              Selected Work
            </span>

            <h2>
              Solusi digital yang
              <span>kami kembangkan.</span>
            </h2>
          </div>

          <p>
            Setiap project dirancang berdasarkan kebutuhan,
            karakter, dan tujuan bisnis yang berbeda.
          </p>

        </div>


        <!-- FILTER -->
        <div class="category-filter">

          <button
            v-for="category in categories"
            :key="category"
            :class="{ active: activeCategory === category }"
            @click="activeCategory = category"
          >
            {{ category }}
          </button>

        </div>


        <!-- PROJECT LIST -->
        <div class="projects">

          <article
            v-for="(project, index) in filteredProjects"
            :key="project.title"
            class="project"
          >

            <div class="project-index">
              {{ String(index + 1).padStart(2, '0') }}
            </div>

            <div class="project-content">

              <!-- INFO -->
              <div class="project-info">

                <div class="project-type">
                  {{ project.category }}
                  <span>•</span>
                  {{ project.year }}
                </div>

                <h3>
                  {{ project.title }}
                </h3>

                <p>
                  {{ project.description }}
                </p>

                <div class="project-tags">

                  <span
                    v-for="tag in project.tags"
                    :key="tag"
                  >
                    {{ tag }}
                  </span>

                </div>

                <a
                  href="#"
                  class="project-button"
                >
                  Lihat Project
                  <span>↗</span>
                </a>

              </div>


              <!-- VISUAL -->
              <div
                class="project-visual"
                :class="project.theme"
              >

                <!-- WEBSITE -->
                <div
                  v-if="project.type === 'website'"
                  class="website-mockup"
                >

                  <div class="mockup-navbar">

                    <div class="mockup-logo">
                      {{ project.logo }}
                    </div>

                    <div class="mockup-menu">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                  </div>

                  <div class="mockup-body">

                    <small>
                      {{ project.logo }}
                    </small>

                    <h4>
                      {{ project.mockupTitle }}
                    </h4>

                    <div class="mockup-description"></div>
                    <div class="mockup-description short"></div>

                    <div class="mockup-buttons">
                      <i></i>
                      <i></i>
                    </div>

                    <div class="mockup-cards">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>

                  </div>

                </div>


                <!-- DASHBOARD -->
                <div
                  v-else-if="project.type === 'dashboard'"
                  class="dashboard-mockup"
                >

                  <div class="dashboard-sidebar">

                    <strong>
                      {{ project.logo }}
                    </strong>

                    <div class="sidebar-items">
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>

                  </div>

                  <div class="dashboard-content">

                    <div class="dashboard-top">
                      <span></span>
                      <span></span>
                    </div>

                    <div class="dashboard-heading">
                      <div></div>
                      <div></div>
                    </div>

                    <div class="dashboard-stats">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>

                    <div class="dashboard-chart">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                  </div>

                </div>


                <!-- MOBILE APP -->
                <div
                  v-else
                  class="mobile-mockup"
                >

                  <div class="phone">

                    <div class="phone-top"></div>

                    <small>
                      {{ project.logo }}
                    </small>

                    <h4>
                      {{ project.mockupTitle }}
                    </h4>

                    <div class="phone-card"></div>
                    <div class="phone-card"></div>
                    <div class="phone-card"></div>

                    <div class="phone-nav">
                      <i></i>
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>

                  </div>

                </div>


                <div class="visual-number">
                  {{ String(index + 1).padStart(2, '0') }}
                </div>

              </div>

            </div>

          </article>

        </div>

      </div>
    </section>


    <!-- =====================================================
         CAPABILITIES
    ====================================================== -->
    <section class="capabilities">
      <div class="container">

        <div class="capabilities-heading">

          <span class="eyebrow">
            What We Build
          </span>

          <h2>
            Dari ide menjadi
            <span>solusi digital.</span>
          </h2>

        </div>


        <div class="capability-grid">

          <div class="capability">

            <div class="capability-number">
              01
            </div>

            <h3>
              Website Development
            </h3>

            <p>
              Website profesional untuk memperkuat identitas
              digital dan membantu bisnis menjangkau lebih
              banyak pelanggan.
            </p>

            <div class="capability-link">
              Explore
              <span>↗</span>
            </div>

          </div>


          <div class="capability">

            <div class="capability-number">
              02
            </div>

            <h3>
              Software Development
            </h3>

            <p>
              Sistem dan aplikasi yang membantu proses bisnis
              menjadi lebih cepat, terstruktur, dan efisien.
            </p>

            <div class="capability-link">
              Explore
              <span>↗</span>
            </div>

          </div>


          <div class="capability">

            <div class="capability-number">
              03
            </div>

            <h3>
              UI/UX Design
            </h3>

            <p>
              Pengalaman digital yang sederhana, intuitif,
              dan nyaman digunakan oleh pengguna.
            </p>

            <div class="capability-link">
              Explore
              <span>↗</span>
            </div>

          </div>


          <div class="capability">

            <div class="capability-number">
              04
            </div>

            <h3>
              Digital Transformation
            </h3>

            <p>
              Membantu bisnis memanfaatkan teknologi untuk
              meningkatkan produktivitas dan pertumbuhan.
            </p>

            <div class="capability-link">
              Explore
              <span>↗</span>
            </div>

          </div>

        </div>

      </div>
    </section>


    <!-- =====================================================
         CTA
    ====================================================== -->
    <section class="portfolio-cta-section">
      <div class="container">

        <div class="cta-box">

          <div class="cta-text">

            <span class="eyebrow">
              Start Your Project
            </span>

            <h2>
              Punya ide digital?
              <span>Mari wujudkan bersama.</span>
            </h2>

            <p>
              Ceritakan kebutuhan bisnis kamu dan kami akan
              membantu menemukan solusi digital yang tepat.
            </p>

          </div>

          <a
            href="#contact"
            class="cta-button"
          >
            Konsultasi Gratis
            <span>↗</span>
          </a>

        </div>

      </div>
    </section>

  </main>
</template>


<script setup>
import { computed, ref } from 'vue'


/* =====================================================
   CATEGORY
===================================================== */

const activeCategory = ref('All')

const categories = [
  'All',
  'Website',
  'Software',
  'Mobile App',
  'UI/UX'
]


/* =====================================================
   PROJECT DATA
===================================================== */

const projects = [

  {
    title: 'Nexa Business',

    category: 'Software',

    year: '2026',

    logo: 'NEXA',

    type: 'dashboard',

    theme: 'theme-orange',

    mockupTitle: 'Business Management',

    description:
      'Sistem manajemen bisnis yang membantu perusahaan mengelola aktivitas operasional secara lebih terstruktur.',

    tags: [
      'Dashboard',
      'Web App',
      'Management System'
    ]
  },


  {
    title: 'Aruna Creative',

    category: 'Website',

    year: '2026',

    logo: 'ARUNA',

    type: 'website',

    theme: 'theme-yellow',

    mockupTitle: 'Creative Digital Studio',

    description:
      'Website company profile untuk membangun identitas digital yang profesional dan memperkenalkan layanan kepada calon pelanggan.',

    tags: [
      'Company Profile',
      'Landing Page',
      'Responsive'
    ]
  },


  {
    title: 'Finora',

    category: 'Mobile App',

    year: '2025',

    logo: 'FINORA',

    type: 'mobile',

    theme: 'theme-light',

    mockupTitle: 'Smart Finance',

    description:
      'Aplikasi pengelolaan keuangan dengan pengalaman pengguna yang sederhana dan mudah dipahami.',

    tags: [
      'Mobile App',
      'UI/UX',
      'Finance'
    ]
  },


  {
    title: 'KitaMart',

    category: 'UI/UX',

    year: '2025',

    logo: 'KITAMART',

    type: 'website',

    theme: 'theme-red',

    mockupTitle: 'Online Shopping',

    description:
      'Perancangan UI/UX untuk platform e-commerce dengan fokus pada navigasi dan pengalaman checkout.',

    tags: [
      'UI/UX',
      'E-Commerce',
      'Prototype'
    ]
  },


  {
    title: 'EduSpace',

    category: 'Website',

    year: '2025',

    logo: 'EDUSPACE',

    type: 'website',

    theme: 'theme-orange',

    mockupTitle: 'Learning Platform',

    description:
      'Platform pembelajaran digital yang dirancang untuk memberikan pengalaman belajar yang lebih interaktif.',

    tags: [
      'Education',
      'Website',
      'Platform'
    ]
  },


  {
    title: 'FlowDesk',

    category: 'Software',

    year: '2025',

    logo: 'FLOWDESK',

    type: 'dashboard',

    theme: 'theme-yellow',

    mockupTitle: 'Workspace System',

    description:
      'Sistem workspace untuk membantu tim mengatur project, task, dan aktivitas pekerjaan.',

    tags: [
      'SaaS',
      'Dashboard',
      'Productivity'
    ]
  }

]


/* =====================================================
   FILTER
===================================================== */

const filteredProjects = computed(() => {

  if (activeCategory.value === 'All') {
    return projects
  }

  return projects.filter(
    project => project.category === activeCategory.value
  )

})
</script>


<style scoped>

/* =====================================================
   ROOT
===================================================== */

.portfolio-page {
  width: 100%;
  min-height: 100vh;

  background: var(--color-bg);
  color: var(--color-text);
}


/* =====================================================
   FULL WIDTH CONTAINER
===================================================== */

.container {

  width: 100%;

  max-width: none;

  margin: 0;

  padding-left: 70px;
  padding-right: 70px;
}


/* =====================================================
   EYEBROW
===================================================== */

.eyebrow {

  display: block;

  margin-bottom: 14px;

  font-family: var(--font-heading);

  font-size: 12px;

  font-weight: 600;

  letter-spacing: .08em;

  text-transform: uppercase;

  color: var(--color-deep-orange);
}


/* =====================================================
   HERO
===================================================== */

.portfolio-hero {

  width: 100%;

  padding: 105px 0 0;

  background: var(--color-bg);
}


.hero-label {

  display: flex;

  align-items: center;

  gap: 12px;

  margin-bottom: 35px;

  font-family: var(--font-heading);

  font-size: 12px;

  font-weight: 600;

  letter-spacing: .08em;

  color: var(--color-deep-orange);
}


.label-line {

  width: 38px;

  height: 2px;

  background: var(--color-red);
}


.hero-content {

  display: grid;

  grid-template-columns:
    minmax(0, 1.6fr)
    minmax(280px, .5fr);

  align-items: end;

  gap: 90px;
}


.hero-title h1 {

  max-width: 1000px;

  margin: 0;

  font-family: var(--font-heading);

  font-size: clamp(52px, 7vw, 92px);

  line-height: .96;

  letter-spacing: -.06em;
}


.hero-title h1 span {

  display: block;

  color: var(--color-text-secondary);
}


.hero-description {

  padding-bottom: 7px;
}


.hero-description p {

  max-width: 390px;

  color: var(--color-text-secondary);

  font-size: 15px;

  line-height: 1.8;
}


/* =====================================================
   STATS
===================================================== */

.portfolio-stats {

  display: grid;

  grid-template-columns: repeat(4, 1fr);

  margin-top: 75px;

  border-top:
    1px solid
    var(--color-border);

  border-bottom:
    1px solid
    var(--color-border);
}


.stat {

  min-height: 95px;

  display: flex;

  flex-direction: column;

  justify-content: center;

  padding: 20px 25px;

  border-right:
    1px solid
    var(--color-border);
}


.stat:first-child {

  padding-left: 0;
}


.stat:last-child {

  border-right: none;
}


.stat strong {

  display: block;

  font-family: var(--font-heading);

  font-size: 28px;

  line-height: 1;

  letter-spacing: -.03em;
}


.stat span {

  margin-top: 8px;

  color: var(--color-text-secondary);

  font-size: 11px;
}


/* =====================================================
   PORTFOLIO LIST
===================================================== */

.portfolio-list {

  padding: 120px 0;
}


.section-heading {

  display: grid;

  grid-template-columns:
    minmax(0, 1.5fr)
    minmax(280px, .5fr);

  align-items: end;

  gap: 90px;

  margin-bottom: 48px;
}


.section-heading h2 {

  max-width: 800px;

  margin: 0;

  font-family: var(--font-heading);

  font-size: clamp(42px, 5.5vw, 70px);

  line-height: .98;

  letter-spacing: -.055em;
}


.section-heading h2 span {

  display: block;

  color: var(--color-text-secondary);
}


.section-heading > p {

  max-width: 390px;

  margin: 0;

  color: var(--color-text-secondary);

  font-size: 14px;

  line-height: 1.75;
}


/* =====================================================
   FILTER
===================================================== */

.category-filter {

  display: flex;

  flex-wrap: wrap;

  gap: 8px;

  margin-bottom: 30px;
}


.category-filter button {

  padding: 10px 19px;

  border:
    1px solid
    var(--color-border);

  border-radius: 100px;

  background: transparent;

  color: var(--color-text-secondary);

  font-family: var(--font-body);

  font-size: 13px;

  cursor: pointer;

  transition: all .2s ease;
}


.category-filter button:hover {

  border-color: var(--color-red);

  color: var(--color-red);
}


.category-filter button.active {

  border-color: var(--color-red);

  background: var(--color-red);

  color: white;
}


/* =====================================================
   PROJECT
===================================================== */

.projects {

  width: 100%;

  border-top:
    1px solid
    var(--color-border);
}


.project {

  padding: 55px 0;

  border-bottom:
    1px solid
    var(--color-border);
}


.project-index {

  margin-bottom: 18px;

  color: var(--color-deep-orange);

  font-family: var(--font-heading);

  font-size: 12px;

  font-weight: 600;
}


.project-content {

  display: grid;

  grid-template-columns:
    minmax(300px, .65fr)
    minmax(0, 1.35fr);

  gap: 90px;

  align-items: center;
}


.project-info {

  max-width: 570px;
}


.project-type {

  display: flex;

  gap: 8px;

  margin-bottom: 14px;

  color: var(--color-deep-orange);

  font-family: var(--font-heading);

  font-size: 11px;

  font-weight: 600;

  letter-spacing: .05em;

  text-transform: uppercase;
}


.project-info h3 {

  margin: 0;

  font-family: var(--font-heading);

  font-size: clamp(30px, 3.2vw, 46px);

  line-height: 1;

  letter-spacing: -.045em;
}


.project-info p {

  max-width: 520px;

  margin-top: 20px;

  color: var(--color-text-secondary);

  font-size: 14px;

  line-height: 1.8;
}


/* =====================================================
   TAG
===================================================== */

.project-tags {

  display: flex;

  flex-wrap: wrap;

  gap: 7px;

  margin-top: 22px;
}


.project-tags span {

  padding: 7px 11px;

  border-radius: 5px;

  background: #f0efe9;

  color: var(--color-text-secondary);

  font-size: 10px;
}


/* =====================================================
   PROJECT BUTTON
===================================================== */

.project-button {

  display: inline-flex;

  align-items: center;

  gap: 10px;

  margin-top: 28px;

  color: var(--color-text);

  font-family: var(--font-heading);

  font-size: 13px;

  font-weight: 600;

  text-decoration: none;
}


.project-button span {

  display: flex;

  align-items: center;

  justify-content: center;

  width: 32px;

  height: 32px;

  border:
    1px solid
    var(--color-border);

  border-radius: 50%;

  color: var(--color-red);

  transition: all .2s ease;
}


.project-button:hover span {

  background: var(--color-red);

  color: white;

  transform:
    translate(3px, -3px);
}


/* =====================================================
   PROJECT VISUAL
===================================================== */

.project-visual {

  position: relative;

  width: 100%;

  min-height: 430px;

  display: flex;

  align-items: center;

  justify-content: center;

  overflow: hidden;

  border-radius: 20px;
}


.theme-orange {

  background:
    linear-gradient(
      135deg,
      var(--color-yellow),
      var(--color-orange) 55%,
      var(--color-deep-orange)
    );
}


.theme-yellow {

  background:
    linear-gradient(
      135deg,
      #FFF7B8,
      var(--color-yellow) 55%,
      var(--color-orange)
    );
}


.theme-red {

  background:
    linear-gradient(
      135deg,
      #FFD9CC,
      var(--color-orange) 55%,
      var(--color-red)
    );
}


.theme-light {

  background:
    linear-gradient(
      135deg,
      #F7F5EF,
      var(--color-yellow)
    );
}


/* =====================================================
   WEBSITE MOCKUP
===================================================== */

.website-mockup {

  width: 82%;

  min-height: 320px;

  overflow: hidden;

  border-radius: 11px;

  background: white;

  box-shadow:
    0 30px 70px
    rgba(0,0,0,.18);

  transform: rotate(-2deg);

  transition: all .4s ease;
}


.project:hover .website-mockup {

  transform:
    rotate(0)
    translateY(-7px);
}


.mockup-navbar {

  display: flex;

  justify-content: space-between;

  align-items: center;

  padding: 14px 20px;

  border-bottom:
    1px solid #eeeeee;
}


.mockup-logo {

  font-family: var(--font-heading);

  font-size: 10px;

  font-weight: 700;
}


.mockup-menu {

  display: flex;

  gap: 5px;
}


.mockup-menu span {

  width: 22px;

  height: 3px;

  border-radius: 10px;

  background: #dddddd;
}


.mockup-body {

  padding: 42px;
}


.mockup-body small {

  color: var(--color-deep-orange);

  font-size: 8px;

  font-weight: 600;
}


.mockup-body h4 {

  max-width: 550px;

  margin: 12px 0;

  font-family: var(--font-heading);

  font-size: clamp(28px, 3vw, 42px);

  line-height: 1;

  letter-spacing: -.04em;
}


.mockup-description {

  width: 55%;

  height: 7px;

  margin-top: 20px;

  border-radius: 10px;

  background: #eeeeee;
}


.mockup-description.short {

  width: 35%;

  margin-top: 8px;
}


.mockup-buttons {

  display: flex;

  gap: 8px;

  margin-top: 28px;
}


.mockup-buttons i {

  width: 70px;

  height: 23px;

  border-radius: 5px;

  background: #eeeeee;
}


.mockup-buttons i:first-child {

  background: var(--color-red);
}


.mockup-cards {

  display: flex;

  gap: 10px;

  margin-top: 35px;
}


.mockup-cards div {

  flex: 1;

  height: 70px;

  border-radius: 7px;

  background: #f3f3f3;
}


/* =====================================================
   DASHBOARD MOCKUP
===================================================== */

.dashboard-mockup {

  display: flex;

  width: 84%;

  min-height: 320px;

  overflow: hidden;

  border-radius: 11px;

  background: white;

  box-shadow:
    0 30px 70px
    rgba(0,0,0,.18);

  transform: rotate(1.5deg);

  transition: all .4s ease;
}


.project:hover .dashboard-mockup {

  transform:
    rotate(0)
    translateY(-7px);
}


.dashboard-sidebar {

  width: 23%;

  padding: 24px 18px;

  background: #242424;

  color: white;
}


.dashboard-sidebar strong {

  font-family: var(--font-heading);

  font-size: 10px;
}


.sidebar-items {

  display: flex;

  flex-direction: column;

  gap: 15px;

  margin-top: 45px;
}


.sidebar-items i {

  display: block;

  width: 80%;

  height: 5px;

  border-radius: 10px;

  background: #555555;
}


.sidebar-items i:first-child {

  background: var(--color-orange);
}


.dashboard-content {

  flex: 1;

  padding: 25px;
}


.dashboard-top {

  display: flex;

  justify-content: space-between;
}


.dashboard-top span {

  width: 80px;

  height: 7px;

  border-radius: 10px;

  background: #eeeeee;
}


.dashboard-heading {

  margin-top: 28px;
}


.dashboard-heading div {

  width: 35%;

  height: 9px;

  border-radius: 10px;

  background: #333333;
}


.dashboard-heading div:last-child {

  width: 22%;

  margin-top: 9px;

  background: #eeeeee;
}


.dashboard-stats {

  display: flex;

  gap: 9px;

  margin-top: 28px;
}


.dashboard-stats div {

  flex: 1;

  height: 60px;

  border-radius: 7px;

  background: #f3f3f3;
}


.dashboard-chart {

  display: flex;

  align-items: end;

  gap: 9px;

  height: 100px;

  margin-top: 22px;

  padding: 12px;

  border-radius: 7px;

  background: #f7f7f7;
}


.dashboard-chart span {

  flex: 1;

  height: 40%;

  border-radius: 3px 3px 0 0;

  background: var(--color-orange);
}


.dashboard-chart span:nth-child(2) {
  height: 70%;
}


.dashboard-chart span:nth-child(3) {
  height: 50%;
}


.dashboard-chart span:nth-child(4) {
  height: 85%;
}


.dashboard-chart span:nth-child(5) {
  height: 60%;
}


.dashboard-chart span:nth-child(6) {

  height: 95%;

  background: var(--color-red);
}


/* =====================================================
   MOBILE MOCKUP
===================================================== */

.mobile-mockup {

  display: flex;

  justify-content: center;

  width: 100%;
}


.phone {

  position: relative;

  width: 190px;

  min-height: 360px;

  padding: 23px 18px;

  border: 6px solid #222222;

  border-radius: 28px;

  background: white;

  box-shadow:
    0 30px 70px
    rgba(0,0,0,.2);

  z-index: 2;

  transition: all .4s ease;
}


.project:hover .phone {

  transform:
    translateY(-8px);
}


.phone-top {

  width: 50px;

  height: 5px;

  margin: 0 auto 27px;

  border-radius: 10px;

  background: #222222;
}


.phone small {

  color: var(--color-deep-orange);

  font-size: 7px;

  font-weight: 600;
}


.phone h4 {

  margin: 10px 0 20px;

  font-family: var(--font-heading);

  font-size: 20px;

  line-height: 1;
}


.phone-card {

  height: 60px;

  margin-top: 9px;

  border-radius: 9px;

  background: #f2f2f2;
}


.phone-card:first-of-type {

  background: var(--color-yellow);
}


.phone-nav {

  position: absolute;

  left: 12px;

  right: 12px;

  bottom: 11px;

  display: flex;

  justify-content: space-around;

  padding: 9px;

  border-radius: 10px;

  background: #f6f6f6;
}


.phone-nav i {

  width: 11px;

  height: 11px;

  border-radius: 50%;

  background: #cccccc;
}


.phone-nav i:first-child {

  background: var(--color-red);
}


/* =====================================================
   VISUAL NUMBER
===================================================== */

.visual-number {

  position: absolute;

  right: 25px;

  bottom: 22px;

  font-family: var(--font-heading);

  font-size: 12px;

  font-weight: 600;

  color: rgba(26,26,26,.45);
}


/* =====================================================
   CAPABILITIES
===================================================== */

.capabilities {

  padding: 120px 0;

  background: #f3f2ed;
}


.capabilities-heading {

  margin-bottom: 60px;
}


.capabilities-heading h2 {

  max-width: 800px;

  margin: 0;

  font-family: var(--font-heading);

  font-size: clamp(42px, 5.5vw, 70px);

  line-height: .98;

  letter-spacing: -.055em;
}


.capabilities-heading h2 span {

  display: block;

  color: var(--color-text-secondary);
}


.capability-grid {

  display: grid;

  grid-template-columns: repeat(4, 1fr);

  border-top:
    1px solid
    var(--color-border);
}


.capability {

  min-height: 320px;

  padding: 32px 30px 30px 0;

  border-right:
    1px solid
    var(--color-border);
}


.capability:not(:first-child) {

  padding-left: 30px;
}


.capability:last-child {

  border-right: none;
}


.capability-number {

  margin-bottom: 80px;

  color: var(--color-deep-orange);

  font-family: var(--font-heading);

  font-size: 12px;

  font-weight: 600;
}


.capability h3 {

  margin: 0;

  font-family: var(--font-heading);

  font-size: 20px;

  line-height: 1.2;
}


.capability p {

  max-width: 270px;

  margin-top: 14px;

  color: var(--color-text-secondary);

  font-size: 13px;

  line-height: 1.75;
}


.capability-link {

  display: flex;

  justify-content: space-between;

  align-items: center;

  margin-top: 35px;

  padding-top: 16px;

  border-top:
    1px solid
    var(--color-border);

  font-family: var(--font-heading);

  font-size: 11px;

  font-weight: 600;
}


.capability-link span {

  color: var(--color-red);

  font-size: 16px;
}


/* =====================================================
   CTA
===================================================== */

.portfolio-cta-section {

  padding: 110px 0;
}


.cta-box {

  display: flex;

  justify-content: space-between;

  align-items: center;

  gap: 70px;

  padding: 70px;

  overflow: hidden;

  border-radius: 22px;

  background:
    linear-gradient(
      120deg,
      var(--color-yellow),
      var(--color-orange) 55%,
      var(--color-deep-orange)
    );
}


.cta-text {

  max-width: 800px;
}


.cta-text .eyebrow {

  color: var(--color-red);
}


.cta-text h2 {

  margin: 0;

  font-family: var(--font-heading);

  font-size: clamp(38px, 4.5vw, 60px);

  line-height: .98;

  letter-spacing: -.055em;
}


.cta-text h2 span {

  display: block;

  color: rgba(26,26,26,.55);
}


.cta-text p {

  max-width: 560px;

  margin-top: 20px;

  color: rgba(26,26,26,.7);

  font-size: 14px;

  line-height: 1.8;
}


.cta-button {

  display: inline-flex;

  align-items: center;

  gap: 12px;

  flex-shrink: 0;

  padding: 16px 23px;

  border-radius: 10px;

  background: var(--color-red);

  color: white;

  font-family: var(--font-heading);

  font-size: 13px;

  font-weight: 600;

  text-decoration: none;

  transition: all .2s ease;
}


.cta-button:hover {

  transform: translateY(-3px);

  box-shadow:
    0 12px 30px
    rgba(235,43,12,.25);
}


.cta-button span {

  font-size: 17px;
}


/* =====================================================
   TABLET
===================================================== */

@media (max-width: 1000px) {

  .container {

    padding-left: 40px;

    padding-right: 40px;
  }


  .hero-content {

    grid-template-columns: 1fr;

    gap: 30px;
  }


  .hero-description {

    padding-bottom: 0;
  }


  .section-heading {

    grid-template-columns: 1fr;

    gap: 25px;
  }


  .project-content {

    grid-template-columns: 1fr;

    gap: 50px;
  }


  .project-info {

    max-width: 700px;
  }


  .capability-grid {

    grid-template-columns: repeat(2, 1fr);
  }


  .capability:nth-child(2) {

    border-right: none;
  }


  .capability:nth-child(3),
  .capability:nth-child(4) {

    border-top:
      1px solid
      var(--color-border);
  }


  .cta-box {

    padding: 50px;

  }

}


/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 600px) {

  .container {

    width: 100%;

    padding-left: 20px;

    padding-right: 20px;
  }


  .portfolio-hero {

    padding-top: 65px;
  }


  .hero-label {

    margin-bottom: 25px;

    font-size: 10px;
  }


  .hero-title h1 {

    font-size: 46px;

    line-height: .98;
  }


  .hero-description p {

    font-size: 14px;
  }


  .portfolio-stats {

    grid-template-columns: repeat(2, 1fr);

    margin-top: 50px;
  }


  .stat {

    min-height: 85px;

    padding: 18px 12px;
  }


  .stat:first-child {

    padding-left: 0;
  }


  .stat:nth-child(2) {

    border-right: none;
  }


  .stat:nth-child(3) {

    border-top:
      1px solid
      var(--color-border);
  }


  .stat:nth-child(4) {

    border-top:
      1px solid
      var(--color-border);
  }


  .stat strong {

    font-size: 23px;
  }


  .stat span {

    font-size: 10px;
  }


  .portfolio-list {

    padding: 80px 0;
  }


  .section-heading h2 {

    font-size: 42px;
  }


  .category-filter {

    margin-top: 30px;
  }


  .project {

    padding: 40px 0;
  }


  .project-content {

    gap: 35px;
  }


  .project-info h3 {

    font-size: 32px;
  }


  .project-visual {

    min-height: 310px;

    border-radius: 15px;
  }


  .website-mockup {

    width: 90%;
  }


  .dashboard-mockup {

    width: 92%;
  }


  .mockup-body {

    padding: 27px;
  }


  .mockup-body h4 {

    font-size: 25px;
  }


  .capabilities {

    padding: 80px 0;
  }


  .capabilities-heading h2 {

    font-size: 42px;
  }


  .capability-grid {

    grid-template-columns: 1fr;
  }


  .capability,
  .capability:not(:first-child) {

    min-height: auto;

    padding: 28px 0;

    border-right: none;

    border-bottom:
      1px solid
      var(--color-border);
  }


  .capability-number {

    margin-bottom: 35px;
  }


  .capability:last-child {

    border-bottom: none;
  }


  .portfolio-cta-section {

    padding: 70px 0;
  }


  .cta-box {

    display: block;

    padding: 38px 25px;

    border-radius: 16px;
  }


  .cta-text h2 {

    font-size: 38px;
  }


  .cta-button {

    margin-top: 30px;
  }

}

</style>