<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { projects } from '../data/projects.js'

const route = useRoute()
const router = useRouter()

const currentIndex = computed(() =>
  projects.findIndex((p) => p.slug === route.params.slug)
)

const project = computed(() =>
  currentIndex.value !== -1 ? projects[currentIndex.value] : null
)

const prevProject = computed(() => {
  if (currentIndex.value === -1) return null
  const i = currentIndex.value - 1
  return i >= 0 ? projects[i] : projects[projects.length - 1]
})

const nextProject = computed(() => {
  if (currentIndex.value === -1) return null
  const i = currentIndex.value + 1
  return i < projects.length ? projects[i] : projects[0]
})

const relatedProjects = computed(() => {
  if (!project.value) return []
  return projects
    .filter((p) => p.category === project.value.category && p.slug !== project.value.slug)
    .slice(0, 3)
})

function formatDate(dateStr) {
  if (!dateStr) return '-'
  return new Date(dateStr).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

function goToProject(slug) {
  router.push(`/portfolio/${slug}`)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <section class="detail-page" v-if="project">
    <div class="container">

      <!-- Breadcrumb -->
      <nav class="breadcrumb">
        <router-link to="/">Home</router-link>
        <span class="sep">/</span>
        <router-link to="/portfolio">Portfolio</router-link>
        <span class="sep">/</span>
        <span class="current">{{ project.title }}</span>
      </nav>

      <!-- Hero -->
      <div class="detail-hero">
        <span class="eyebrow">{{ project.category }}</span>
        <h1>{{ project.title }}</h1>
        <p class="lead">{{ project.description }}</p>

        <div class="hero-pills">
          <span class="pill">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12Zm0 2.5c-3.3 0-9.8 1.6-9.8 4.9v2.4h19.6v-2.4c0-3.3-6.5-4.9-9.8-4.9Z" fill="currentColor"/></svg>
            {{ project.client }}
          </span>
          <span class="pill">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M7 2v3M17 2v3M3.5 9h17M5 5h14a1.5 1.5 0 0 1 1.5 1.5V19A1.5 1.5 0 0 1 19 20.5H5A1.5 1.5 0 0 1 3.5 19V6.5A1.5 1.5 0 0 1 5 5Z" stroke="currentColor" stroke-width="1.6" fill="none"/></svg>
            {{ formatDate(project.date) }}
          </span>
          <span class="pill">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.6"/><path d="M12 7v5l3.5 2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
            {{ project.duration }}
          </span>
        </div>
      </div>

      <!-- Cover image -->
      <div class="detail-cover">
        <img :src="project.coverImage || project.image" :alt="project.title" />
        <span class="cover-tag">{{ project.tag }}</span>
      </div>

      <!-- Main content + sidebar -->
      <div class="detail-body">

        <div class="detail-main">
          <h2>Tentang Project</h2>
          <p class="body-text">{{ project.description }}</p>

          <div class="highlight-box">
            <div class="highlight-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.6.45 1.1 1.2 1.1 1.95V16h5v-.25c0-.75.5-1.5 1.1-1.95A6 6 0 0 0 12 3Z" stroke="currentColor" stroke-width="1.6" fill="none"/></svg>
            </div>
            <p>
              Project ini dikerjakan dengan pendekatan kolaboratif bersama
              {{ project.client }} — mulai dari riset kebutuhan, desain,
              hingga development, untuk menghasilkan solusi yang sesuai
              dengan tujuan bisnis klien.
            </p>
          </div>

          <div class="detail-gallery" v-if="project.gallery?.length">
            <h2>Galeri Project</h2>
            <div class="gallery-grid">
              <div class="gallery-item" v-for="(img, i) in project.gallery" :key="i">
                <img :src="img" :alt="`${project.title} ${i + 1}`" />
              </div>
            </div>
          </div>
        </div>

        <aside class="detail-sidebar">
          <div class="sidebar-card">
            <h3>Detail Project</h3>

            <div class="sidebar-row">
              <span class="sidebar-label">Client</span>
              <span class="sidebar-value">{{ project.client }}</span>
            </div>
            <div class="sidebar-row">
              <span class="sidebar-label">Kategori</span>
              <span class="sidebar-value">{{ project.category }}</span>
            </div>
            <div class="sidebar-row">
              <span class="sidebar-label">Tanggal</span>
              <span class="sidebar-value">{{ formatDate(project.date) }}</span>
            </div>
            <div class="sidebar-row">
              <span class="sidebar-label">Durasi</span>
              <span class="sidebar-value">{{ project.duration }}</span>
            </div>

            <div class="sidebar-divider"></div>

            <div class="sidebar-block">
              <span class="sidebar-label">Layanan</span>
              <div class="chip-list">
                <span v-for="s in project.services" :key="s" class="chip">{{ s }}</span>
              </div>
            </div>

            <div class="sidebar-block">
              <span class="sidebar-label">Tech Stack</span>
              <div class="chip-list">
                <span v-for="t in project.techStack" :key="t" class="chip chip--tech">{{ t }}</span>
              </div>
            </div>

            <a
              v-if="project.liveUrl"
              :href="project.liveUrl"
              target="_blank"
              rel="noopener"
              class="btn btn-primary sidebar-btn"
            >
              Kunjungi Live Site →
            </a>
          </div>
        </aside>

      </div>

      <!-- Prev / Next navigation -->
      <div class="detail-nav">
        <button class="nav-card" @click="goToProject(prevProject.slug)" v-if="prevProject">
          <span class="nav-label">← Sebelumnya</span>
          <span class="nav-title">{{ prevProject.title }}</span>
        </button>
        <button class="nav-card nav-card--next" @click="goToProject(nextProject.slug)" v-if="nextProject">
          <span class="nav-label">Selanjutnya →</span>
          <span class="nav-title">{{ nextProject.title }}</span>
        </button>
      </div>

      <!-- Related projects -->
      <div class="related-section" v-if="relatedProjects.length">
        <h2>Project Serupa Lainnya</h2>
        <div class="related-grid">
          <router-link
            v-for="rp in relatedProjects"
            :key="rp.slug"
            :to="`/portfolio/${rp.slug}`"
            class="related-card"
          >
            <div class="related-thumb">
              <img :src="rp.coverImage || rp.image" :alt="rp.title" />
            </div>
            <div class="related-info">
              <span class="project-category">{{ rp.category }}</span>
              <h4>{{ rp.title }}</h4>
            </div>
          </router-link>
        </div>
      </div>

      <!-- CTA (tetap dalam alur normal halaman, di atas Footer) -->
      <div class="portfolio-cta">
        <h2>Punya project yang mau diwujudkan?</h2>
        <p>Ceritakan kebutuhan bisnismu, kami bantu rancang solusinya.</p>
        <router-link to="/contact" class="btn btn-primary">Hubungi Kami →</router-link>
      </div>

    </div>
  </section>

  <section v-else class="not-found">
    <div class="container">
      <h2>Project tidak ditemukan</h2>
      <p>Project yang kamu cari mungkin sudah dipindahkan atau tidak tersedia.</p>
      <router-link to="/portfolio" class="btn btn-primary">Kembali ke Portfolio</router-link>
    </div>
  </section>
</template>

<style scoped>
.detail-page {
  --navbar-height: 80px;
  padding-top: calc(var(--navbar-height) + 50px);
  padding-bottom: 120px;
  background: var(--color-bg);
}

/* ===== Animasi masuk ===== */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(22px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.97);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.breadcrumb,
.detail-hero,
.detail-cover,
.detail-main,
.detail-sidebar,
.detail-nav,
.related-section,
.portfolio-cta {
  opacity: 0;
  animation: fadeInUp 0.6s ease forwards;
}

.breadcrumb { animation-delay: 0s; }
.detail-hero { animation-delay: 0.08s; }
.detail-cover { animation: fadeInScale 0.7s ease forwards; animation-delay: 0.16s; }
.detail-main { animation-delay: 0.24s; }
.detail-sidebar { animation-delay: 0.32s; }
.detail-nav { animation-delay: 0.1s; }
.related-section { animation-delay: 0.1s; }
.portfolio-cta { animation-delay: 0.1s; }

.gallery-item {
  opacity: 0;
  animation: fadeInUp 0.5s ease forwards;
}
.gallery-item:nth-child(1) { animation-delay: 0.05s; }
.gallery-item:nth-child(2) { animation-delay: 0.12s; }
.gallery-item:nth-child(3) { animation-delay: 0.19s; }
.gallery-item:nth-child(4) { animation-delay: 0.26s; }
.gallery-item:nth-child(5) { animation-delay: 0.33s; }
.gallery-item:nth-child(6) { animation-delay: 0.4s; }

.related-card {
  opacity: 0;
  animation: fadeInUp 0.5s ease forwards;
}
.related-card:nth-child(1) { animation-delay: 0.05s; }
.related-card:nth-child(2) { animation-delay: 0.15s; }
.related-card:nth-child(3) { animation-delay: 0.25s; }

.nav-card {
  opacity: 0;
  animation: fadeInUp 0.5s ease forwards;
}
.detail-nav .nav-card:nth-child(1) { animation-delay: 0.05s; }
.detail-nav .nav-card:nth-child(2) { animation-delay: 0.15s; }

@media (prefers-reduced-motion: reduce) {
  .breadcrumb,
  .detail-hero,
  .detail-cover,
  .detail-main,
  .detail-sidebar,
  .detail-nav,
  .related-section,
  .portfolio-cta,
  .gallery-item,
  .related-card,
  .nav-card {
    animation: none;
    opacity: 1;
    transform: none;
  }
}

/* ===== Breadcrumb ===== */
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--color-text-secondary);
  margin-bottom: 28px;
  flex-wrap: wrap;
}
.breadcrumb a {
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color .15s ease;
}
.breadcrumb a:hover { color: var(--color-deep-orange); }
.breadcrumb .sep { color: var(--color-border); }
.breadcrumb .current {
  color: var(--color-text);
  font-weight: 600;
  max-width: 320px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* ===== Hero ===== */
.detail-hero {
  max-width: 760px;
  margin-bottom: 36px;
}

.detail-hero h1 {
  font-size: clamp(26px, 4vw, 44px);
  margin: 14px 0 16px;
  color: var(--color-text);
  line-height: 1.2;
}

.lead {
  color: var(--color-text-secondary);
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 22px;
}

.hero-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 8px 14px;
  border-radius: 999px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  font-size: 13px;
  font-weight: 600;
  color: var(--color-text);
  max-width: 100%;
}
.pill svg { color: var(--color-deep-orange); flex-shrink: 0; }

/* ===== Cover ===== */
.detail-cover {
  position: relative;
  border-radius: var(--radius);
  overflow: hidden;
  margin-bottom: 48px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
}
.detail-cover img {
  width: 100%;
  display: block;
  object-fit: cover;
  max-height: 500px;
  aspect-ratio: 16 / 9;
}
.cover-tag {
  position: absolute;
  left: 20px;
  bottom: 20px;
  font-family: var(--font-heading);
  font-size: 13px;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(90deg, var(--color-deep-orange), var(--color-red));
  padding: 7px 16px;
  border-radius: 999px;
}

/* ===== Body layout ===== */
.detail-body {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 48px;
  align-items: start;
  margin-bottom: 70px;
}

.detail-main h2 {
  font-size: 22px;
  color: var(--color-text);
  margin-bottom: 16px;
}

.body-text {
  color: var(--color-text-secondary);
  line-height: 1.85;
  font-size: 15.5px;
  margin-bottom: 32px;
}

.highlight-box {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  background: linear-gradient(135deg, rgba(251, 159, 55, 0.08), rgba(235, 43, 12, 0.05));
  border: 1px solid rgba(231, 81, 25, 0.18);
  border-radius: var(--radius);
  padding: 22px;
  margin-bottom: 44px;
}
.highlight-icon {
  flex-shrink: 0;
  width: 42px;
  height: 42px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-surface);
  color: var(--color-deep-orange);
}
.highlight-box p {
  color: var(--color-text-secondary);
  line-height: 1.8;
  font-size: 14.5px;
}

.detail-gallery h2 {
  font-size: 22px;
  color: var(--color-text);
  margin-bottom: 16px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.gallery-item {
  border-radius: var(--radius);
  overflow: hidden;
  aspect-ratio: 4 / 3;
}
.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform .4s ease;
}
.gallery-item:hover img { transform: scale(1.05); }

/* ===== Sidebar ===== */
.sidebar-card {
  position: sticky;
  top: calc(var(--navbar-height) + 24px);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 26px;
}

.sidebar-card h3 {
  font-size: 17px;
  color: var(--color-text);
  margin-bottom: 18px;
}

.sidebar-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid var(--color-border);
  gap: 12px;
}
.sidebar-row:first-of-type { padding-top: 0; }

.sidebar-label {
  font-size: 12.5px;
  color: var(--color-text-secondary);
  text-transform: uppercase;
  letter-spacing: .03em;
  font-weight: 600;
  flex-shrink: 0;
}

.sidebar-value {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text);
  text-align: right;
}

.sidebar-divider {
  height: 1px;
  background: var(--color-border);
  margin: 18px 0;
}

.sidebar-block { margin-bottom: 18px; }
.sidebar-block:last-of-type { margin-bottom: 22px; }
.sidebar-block .sidebar-label {
  display: block;
  margin-bottom: 10px;
}

.chip-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.chip {
  padding: 6px 13px;
  border-radius: 999px;
  border: 1px solid var(--color-border);
  font-size: 12.5px;
  font-weight: 600;
  color: var(--color-text-secondary);
  background: var(--color-bg);
}
.chip--tech {
  background: linear-gradient(90deg, var(--color-deep-orange), var(--color-red));
  color: #fff;
  border-color: transparent;
}

.sidebar-btn {
  width: 100%;
  margin-top: 6px;
  text-align: center;
}

/* ===== Prev / Next ===== */
.detail-nav {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 70px;
}

.nav-card {
  text-align: left;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 18px 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  transition: border-color .15s ease, transform .15s ease;
  font-family: var(--font-body);
  min-width: 0;
  width: 100%;
  min-height: 84px;
}
.nav-card:hover {
  border-color: var(--color-deep-orange);
  transform: translateY(-2px);
}
.nav-card--next { text-align: right; align-items: flex-end; }

.nav-label {
  font-size: 12.5px;
  font-weight: 700;
  color: var(--color-deep-orange);
  text-transform: uppercase;
  letter-spacing: .03em;
}
.nav-title {
  font-size: 14.5px;
  font-weight: 600;
  color: var(--color-text);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  width: 100%;
}

/* ===== Related ===== */
.related-section { margin-bottom: 90px; }
.related-section h2 {
  font-size: 24px;
  color: var(--color-text);
  margin-bottom: 22px;
}

.related-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.related-card {
  display: block;
  color: inherit;
  text-decoration: none;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: transform .2s ease, box-shadow .2s ease;
}
.related-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08);
}

.related-thumb { height: 140px; overflow: hidden; }
.related-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.related-info { padding: 14px 16px 16px; }
.related-info .project-category {
  font-family: var(--font-heading);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .04em;
  text-transform: uppercase;
  color: var(--color-deep-orange);
}
.related-info h4 {
  margin-top: 6px;
  font-size: 14.5px;
  color: var(--color-text);
  line-height: 1.4;
}

/* ===== CTA ===== */
.portfolio-cta {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  padding: 0 8px;
}
.portfolio-cta h2 {
  font-size: clamp(22px, 4vw, 28px);
  color: var(--color-text);
  margin-bottom: 12px;
}
.portfolio-cta p {
  color: var(--color-text-secondary);
  margin-bottom: 26px;
}

/* ===== Not found ===== */
.not-found {
  text-align: center;
  padding: 180px 20px;
}
.not-found h2 { margin-bottom: 12px; color: var(--color-text); }
.not-found p { color: var(--color-text-secondary); margin-bottom: 24px; }

/* =========================================================
   RESPONSIVE
   Struktur & fungsi tombol Sebelumnya/Selanjutnya TIDAK diubah,
   hanya penyesuaian tampilan di layar kecil
   ========================================================= */

/* ----- Tablet (<= 960px) ----- */
@media (max-width: 960px) {
  .detail-page { padding-top: calc(var(--navbar-height) + 32px); }

  .detail-body {
    grid-template-columns: 1fr;
    gap: 36px;
    margin-bottom: 56px;
  }

  .detail-sidebar { order: -1; }

  .sidebar-card {
    position: static;
    padding: 22px;
  }

  .detail-cover { margin-bottom: 36px; }
  .detail-cover img { max-height: 380px; }

  .related-grid { grid-template-columns: repeat(2, 1fr); }

  .detail-hero { margin-bottom: 28px; }
}

/* ----- Small tablet / large phone (<= 768px) ----- */
@media (max-width: 768px) {
  .detail-page {
    padding-top: calc(var(--navbar-height) + 20px);
    padding-bottom: 80px;
  }

  .breadcrumb { font-size: 13px; margin-bottom: 20px; }
  .breadcrumb .current { max-width: 200px; }

  .lead { font-size: 15px; line-height: 1.7; }

  .pill { padding: 7px 12px; font-size: 12.5px; }

  .detail-cover img { max-height: 300px; }
  .cover-tag { left: 14px; bottom: 14px; font-size: 12px; padding: 6px 13px; }

  .detail-main h2,
  .detail-gallery h2 { font-size: 20px; }

  .body-text { font-size: 15px; margin-bottom: 26px; }

  .highlight-box {
    padding: 18px;
    gap: 12px;
    margin-bottom: 32px;
  }
  .highlight-box p { font-size: 14px; }

  .gallery-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }

  .detail-nav { gap: 12px; margin-bottom: 48px; }
  .nav-card { padding: 15px 16px; }

  .related-section { margin-bottom: 64px; }
  .related-section h2 { font-size: 21px; margin-bottom: 18px; }
  .related-grid { grid-template-columns: repeat(2, 1fr); gap: 14px; }
  .related-thumb { height: 110px; }

  .portfolio-cta h2 { font-size: 22px; }
}

/* ----- Mobile (<= 640px) ----- */
@media (max-width: 640px) {
  .detail-page { padding-top: calc(var(--navbar-height) + 16px); }

  .breadcrumb { gap: 6px; }
  .breadcrumb .current { max-width: 140px; }

  .detail-hero h1 { margin: 10px 0 12px; }

  .hero-pills { gap: 8px; }
  .pill {
    font-size: 12px;
    padding: 6px 11px;
    flex: 1 1 auto;
    justify-content: center;
  }

  .detail-cover { margin-bottom: 28px; border-radius: 14px; }
  .detail-cover img { max-height: 220px; }

  .sidebar-card { padding: 18px; }
  .sidebar-row { padding: 9px 0; }
  .sidebar-value { font-size: 13.5px; }

  .chip { font-size: 12px; padding: 5px 11px; }

  .gallery-grid { grid-template-columns: 1fr; }
  .gallery-item { aspect-ratio: 16 / 10; }

  .detail-nav { grid-template-columns: 1fr; gap: 10px; }
  .nav-card--next { text-align: left; align-items: flex-start; }

  .related-grid { grid-template-columns: 1fr; }
  .related-thumb { height: 160px; }

  .portfolio-cta { padding: 0; }
  .portfolio-cta p { margin-bottom: 20px; font-size: 14.5px; }

  .not-found { padding: 120px 20px; }
}

/* ----- Small mobile (<= 380px) ----- */
@media (max-width: 380px) {
  .pill { font-size: 11.5px; padding: 6px 9px; }
  .breadcrumb { font-size: 12px; }
  .detail-cover img { max-height: 190px; }
  .sidebar-card { padding: 16px; }
  .nav-card { padding: 13px 14px; }
}
</style>