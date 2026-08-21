<script setup>
import { ref, computed } from 'vue'

const categories = [
  'Semua',
  'Brand Identity',
  'Web Design',
  'Landing Page',
  'App Design',
  'Company Profile'
]

const activeCategory = ref('Semua')

const projects = [
  {
    title: 'Toko Komputer — Landing Page',
    category: 'Landing Page',
    tag: 'Digital Store',
    image:
      'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=800&q=85'
  },
  {
    title: 'Onlineshop Jam Tangan',
    category: 'Landing Page',
    tag: 'E-Commerce',
    image:
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=85'
  },
  {
    title: 'Skin Care Business',
    category: 'Web Design',
    tag: 'Beauty & Care',
    image:
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=85'
  },
  {
    title: 'Healthy Care App',
    category: 'App Design',
    tag: 'Health Tech',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=85'
  },
  {
    title: 'PT Prabu Muda Bekarya',
    category: 'Company Profile',
    tag: 'Konstruksi',
    image:
      'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=85'
  },
  {
    title: 'Abott Cargo — Landing Page',
    category: 'Landing Page',
    tag: 'Logistik',
    image:
      'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=800&q=85'
  },
  {
    title: 'PT Sumber Nusa Sejahtera',
    category: 'Company Profile',
    tag: 'Manufaktur',
    image:
      'https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?auto=format&fit=crop&w=800&q=85'
  },
  {
    title: 'Brand Identity — FinTrust',
    category: 'Brand Identity',
    tag: 'Finansial',
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=85'
  }
]

const filteredProjects = computed(() => {
  if (activeCategory.value === 'Semua') return projects
  return projects.filter((p) => p.category === activeCategory.value)
})

function selectCategory(cat) {
  activeCategory.value = cat
}
</script>

<template>
  <section class="portfolio-page">
    <div class="container">

      <!-- Hero -->
      <div class="portfolio-hero">
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
      <div class="filter-bar">
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
      <transition-group name="fade" tag="div" class="portfolio-grid">
        <article
          v-for="project in filteredProjects"
          :key="project.title"
          class="project-card"
        >
          <div class="project-thumb">
            <img :src="project.image" :alt="project.title" />
            <span class="project-thumb-tag">{{ project.tag }}</span>
          </div>
          <div class="project-info">
            <span class="project-category">{{ project.category }}</span>
            <h3>{{ project.title }}</h3>
          </div>
        </article>
      </transition-group>

      <p v-if="filteredProjects.length === 0" class="empty-state">
        Belum ada project untuk kategori ini.
      </p>

      <!-- CTA -->
      <div class="portfolio-cta">
        <h2>Punya project yang mau diwujudkan?</h2>
        <p>Ceritakan kebutuhan bisnismu, kami bantu rancang solusinya.</p>
        <a href="/contact" class="btn btn-primary">Hubungi Kami →</a>
      </div>

    </div>
  </section>
</template>

<style scoped>
.portfolio-page {
  padding: 100px 6% 120px;
  background: var(--color-bg);
}

/* ===== Hero ===== */
.portfolio-hero {
  max-width: 640px;
  margin: 0 auto 50px;
  text-align: center;
}

.portfolio-hero h1 {
  font-size: 48px;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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
@media (max-width: 1024px) {
  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .portfolio-page {
    padding: 60px 20px 80px;
  }

  .portfolio-hero h1 {
    font-size: 34px;
  }

  .portfolio-grid {
    grid-template-columns: 1fr;
  }
}
</style>