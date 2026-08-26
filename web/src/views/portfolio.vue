<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { projects } from '../data/projects.js'

const pageRoot = ref(null)
let observer = null

const categories = [
  'Semua',
  'Brand Identity',
  'Web Design',
  'Landing Page',
  'App Design',
  'Company Profile'
]

const activeCategory = ref('Semua')

const filteredProjects = computed(() => {
  if (activeCategory.value === 'Semua') return projects
  return projects.filter((p) => p.category === activeCategory.value)
})

function selectCategory(cat) {
  activeCategory.value = cat
  nextTick(() => {
    observeReveals()
  })
}

function observeReveals() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const els = pageRoot.value ? pageRoot.value.querySelectorAll('.reveal') : []
    els.forEach((el) => el.classList.add('is-visible'))
    return
  }

  if (observer) observer.disconnect()

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

  const els = pageRoot.value ? pageRoot.value.querySelectorAll('.reveal') : []
  els.forEach((el) => observer.observe(el))
}

onMounted(async () => {
  await nextTick()
  observeReveals()
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <section class="portfolio-page" ref="pageRoot">
    <div class="container">

      <!-- Hero -->
      <div class="portfolio-hero reveal reveal--up">
        <span class="eyebrow">KARYA KAMI</span>
        <h1>
          Portofolio yang
          <span>bicara lewat hasil</span>
        </h1>
        <p>
          Kumpulan project yang sudah kami rancang dan bangun untuk
          berbagai bisnis — dari brand baru sampai platform digital
          yang siap tumbuh.
        </p>
      </div>

      <!-- Filter -->
      <div class="filter-bar reveal reveal--up" style="--reveal-delay: 100ms">
        <button
          v-for="cat in categories"
          :key="cat"
          class="filter-chip"
          :class="{ active: activeCategory === cat }"
          @click="selectCategory(cat)"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Grid -->
      <div class="portfolio-grid">
        <article
          v-for="(project, index) in filteredProjects"
          :key="project.slug"
          class="project-card reveal reveal--up"
          :style="{ '--reveal-delay': `${(index % 8) * 80}ms` }"
        >
          <router-link :to="`/portfolio/${project.slug}`" class="project-link">
            <div class="project-thumb">
              <img :src="project.coverImage || project.image" :alt="project.title" />
              <span class="project-thumb-tag">{{ project.tag }}</span>
            </div>
            <div class="project-info">
              <span class="project-category">{{ project.category }}</span>
              <h3>{{ project.title }}</h3>
            </div>
          </router-link>
        </article>
      </div>

      <p v-if="filteredProjects.length === 0" class="empty-state">
        Belum ada project untuk kategori ini.
      </p>

      <!-- CTA -->
      <div class="portfolio-cta reveal reveal--scale">
        <h2>Punya project yang mau diwujudkan?</h2>
        <p>Ceritakan kebutuhan bisnismu, kami bantu rancang solusinya.</p>
        <router-link to="/contact" class="btn btn-primary">Hubungi Kami →</router-link>
      </div>

    </div>
  </section>
</template>

<style scoped>
/*
  PENTING:
  Ganti nilai di bawah ini sesuai tinggi navbar asli kamu.
  Cara ceknya: buka DevTools -> klik elemen <nav> / navbar -> lihat
  "height" di panel Computed/Box Model. Kalau navbar-mu berubah
  tinggi di mobile, sesuaikan juga di media query paling bawah.
*/
.portfolio-page {
  --navbar-height: 80px;

  /* sebelumnya: padding: 100px 6% 120px;  <-- ini penyebab mepet navbar */
  padding-top: calc(var(--navbar-height) + 60px);
  padding-inline: 6%;
  padding-bottom: 120px;
  background: var(--color-bg);
}

/* ---------- SCROLL-REVEAL ANIMATION ---------- */
.reveal {
  opacity: 0;
  transition: opacity .7s cubic-bezier(.22,.61,.36,1), transform .7s cubic-bezier(.22,.61,.36,1);
  transition-delay: var(--reveal-delay, 0ms);
  will-change: opacity, transform;
}
.reveal--up { transform: translateY(28px); }
.reveal--scale { transform: scale(.96); }

.reveal.is-visible {
  opacity: 1;
  transform: none;
}

@media (prefers-reduced-motion: reduce) {
  .reveal { transition: none !important; }
}

/* ===== Hero ===== */
.portfolio-hero {
  max-width: 640px;
  margin: 0 auto 50px;
  text-align: center;
}

.portfolio-hero h1 {
  font-size: clamp(30px, 4.2vw, 48px);
  line-height: 1.15;
  margin: 16px 0 20px;
  color: var(--color-text);
}

.portfolio-hero h1 span {
  display: block;
  background: linear-gradient(90deg, var(--color-deep-orange), var(--color-red));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.portfolio-hero p {
  color: var(--color-text-secondary);
  font-size: 16px;
  line-height: 1.8;
}

/* ===== Filter ===== */
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-bottom: 55px;
}

.filter-chip {
  font-family: var(--font-heading);
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text-secondary);
  background: var(--color-surface);
  border: 1.5px solid var(--color-border);
  border-radius: 999px;
  padding: 10px 20px;
  cursor: pointer;
  transition: 0.2s;
}

.filter-chip:hover {
  border-color: var(--color-deep-orange);
  color: var(--color-deep-orange);
}

.filter-chip.active {
  background: var(--color-red);
  border-color: var(--color-red);
  color: #fff;
}

/* ===== Grid ===== */
.portfolio-grid {
  max-width: var(--container-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.project-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.08);
}

/* Supaya link tidak mengubah warna teks/underline default */
.project-link {
  display: block;
  color: inherit;
  text-decoration: none;
}

.project-thumb {
  position: relative;
  height: 160px;
  overflow: hidden;
}

.project-thumb img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.project-card:hover .project-thumb img {
  transform: scale(1.06);
}

.project-thumb::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 0.55) 100%);
  pointer-events: none;
}

.project-thumb-tag {
  position: absolute;
  left: 14px;
  bottom: 14px;
  z-index: 2;
  font-family: var(--font-heading);
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  background: rgba(0, 0, 0, 0.35);
  padding: 5px 12px;
  border-radius: 999px;
  backdrop-filter: blur(3px);
}

.project-info {
  padding: 18px 18px 20px;
}

.project-category {
  font-family: var(--font-heading);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-deep-orange);
}

.project-info h3 {
  margin-top: 8px;
  font-size: 17px;
  color: var(--color-text);
  line-height: 1.4;
}

.empty-state {
  text-align: center;
  color: var(--color-text-secondary);
  padding: 40px 0;
}

/* ===== CTA ===== */
.portfolio-cta {
  max-width: 600px;
  margin: 100px auto 0;
  text-align: center;
}

.portfolio-cta h2 {
  font-size: 30px;
  color: var(--color-text);
  margin-bottom: 12px;
}

.portfolio-cta p {
  color: var(--color-text-secondary);
  margin-bottom: 28px;
}

/* ===== Responsive ===== */

@media (max-width: 1100px) {
  .portfolio-grid {
    gap: 20px;
  }
}

@media (max-width: 1024px) {
  .portfolio-page {
    padding-top: calc(var(--navbar-height) + 40px);
    padding-inline: 5%;
    padding-bottom: 100px;
  }

  .portfolio-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}

@media (max-width: 860px) {
  .portfolio-page {
    padding-top: calc(var(--navbar-height) + 30px);
    padding-inline: 5%;
    padding-bottom: 90px;
  }

  .portfolio-hero {
    margin-bottom: 40px;
  }

  .portfolio-hero p {
    font-size: 15px;
  }

  .filter-bar {
    gap: 8px;
    margin-bottom: 40px;
  }

  .filter-chip {
    font-size: 13px;
    padding: 8px 16px;
  }

  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 18px;
  }

  .project-thumb {
    height: 150px;
  }

  .portfolio-cta {
    margin-top: 70px;
  }

  .portfolio-cta h2 {
    font-size: 26px;
  }
}

@media (max-width: 640px) {
  .portfolio-page {
    padding-top: calc(var(--navbar-height) + 24px);
    padding-inline: 20px;
    padding-bottom: 72px;
  }

  .portfolio-hero {
    margin-bottom: 32px;
  }

  .filter-bar {
    justify-content: flex-start;
    overflow-x: auto;
    flex-wrap: nowrap;
    padding-bottom: 4px;
    margin-bottom: 32px;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .filter-bar::-webkit-scrollbar {
    display: none;
  }

  .filter-chip {
    flex-shrink: 0;
  }

  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }

  .project-thumb {
    height: 130px;
  }

  .project-info {
    padding: 12px 12px 14px;
  }

  .project-category {
    font-size: 11px;
  }

  .project-info h3 {
    font-size: 14px;
  }

  .portfolio-cta {
    margin-top: 56px;
  }

  .portfolio-cta h2 {
    font-size: 22px;
  }

  .portfolio-cta p {
    font-size: 14px;
  }
}

@media (max-width: 420px) {
  .portfolio-page {
    padding-top: calc(var(--navbar-height) + 20px);
    padding-inline: 16px;
    padding-bottom: 56px;
  }

  .portfolio-hero h1 {
    font-size: 28px;
  }

  .portfolio-hero p {
    font-size: 14px;
    line-height: 1.7;
  }

  .filter-chip {
    font-size: 12px;
    padding: 7px 14px;
  }

  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .project-thumb {
    height: 110px;
  }

  .project-info {
    padding: 10px 10px 12px;
  }

  .project-info h3 {
    font-size: 13px;
  }
}
</style>