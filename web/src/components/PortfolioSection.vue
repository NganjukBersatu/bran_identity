<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue'

const props = defineProps({
  limit: { type: Number, default: 4 },
  showViewAll: { type: Boolean, default: true },
})

// Data project ini DISAMAKAN dengan views/portfolio.vue (judul, kategori,
// dan gambar sama persis) supaya Home & halaman Portfolio konsisten.
// Kalau menambah/mengganti project, lakukan di KEDUA file ini.
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

const displayedProjects = computed(() =>
  props.limit ? projects.slice(0, props.limit) : projects
)

// ===== Animasi masuk (reveal per-kartu, stagger) =====
const sectionEl = ref(null)
let observer = null

function observeReveals() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const els = sectionEl.value ? sectionEl.value.querySelectorAll('.reveal') : []
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

  const els = sectionEl.value ? sectionEl.value.querySelectorAll('.reveal') : []
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
  <section id="portofolio" class="portfolio section" ref="sectionEl">
    <div class="container">
      <p class="eyebrow reveal reveal--up">Portofolio</p>
      <h2 class="reveal reveal--up" style="--reveal-delay: 80ms">Project yang pernah kami kerjakan</h2>

      <div class="portfolio__grid">
        <router-link
          to="/portfolio"
          class="portfolio-card reveal reveal--up"
          v-for="(p, index) in displayedProjects"
          :key="p.title"
          :style="{ '--reveal-delay': `${160 + index * 80}ms` }"
        >
          <div class="portfolio-card__media">
            <img :src="p.image" :alt="p.title" />
            <span class="portfolio-card__tag">{{ p.tag }}</span>
          </div>
          <div class="portfolio-card__body">
            <span class="portfolio-card__category">{{ p.category }}</span>
            <h3>{{ p.title }}</h3>
          </div>
        </router-link>
      </div>

      <div v-if="showViewAll" class="view-all reveal reveal--up" style="--reveal-delay: 480ms">
        <router-link to="/portfolio" class="btn btn-outline">Lihat Selengkapnya →</router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.portfolio h2 { font-size: 28px; margin: 8px 0 32px; }

/* ===== Animasi reveal (fade + slide up), stagger per-kartu ===== */
.reveal {
  opacity: 0;
  transition: opacity 0.7s cubic-bezier(.22,.61,.36,1), transform 0.7s cubic-bezier(.22,.61,.36,1);
  transition-delay: var(--reveal-delay, 0ms);
  will-change: opacity, transform;
}
.reveal--up { transform: translateY(28px); }
.reveal.is-visible {
  opacity: 1;
  transform: none;
}
@media (prefers-reduced-motion: reduce) {
  .reveal { transition: none !important; }
}

/* ===== Grid: 4 kolom di desktop ===== */
.portfolio__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.portfolio-card {
  display: block;
  border-radius: var(--radius);
  overflow: hidden;
  text-decoration: none;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.portfolio-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
}

.portfolio-card__media {
  position: relative;
  width: 100%;
  height: 160px;
  overflow: hidden;
}
.portfolio-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}
.portfolio-card:hover .portfolio-card__media img {
  transform: scale(1.06);
}
.portfolio-card__media::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 55%, rgba(0, 0, 0, 0.5) 100%);
  pointer-events: none;
}
.portfolio-card__tag {
  position: absolute;
  left: 12px;
  bottom: 12px;
  z-index: 2;
  font-family: var(--font-heading);
  font-size: 11px;
  font-weight: 700;
  color: #fff;
  background: rgba(0, 0, 0, 0.35);
  padding: 4px 10px;
  border-radius: 999px;
  backdrop-filter: blur(3px);
}

.portfolio-card__body { padding: 14px; }
.portfolio-card__category {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-deep-orange);
}
.portfolio-card h3 { font-size: 15px; margin-top: 6px; line-height: 1.4; }

.view-all {
  text-align: center;
  margin-top: 32px;
}
.btn-outline {
  display: inline-block;
  border: 1px solid var(--color-red);
  color: var(--color-red);
  padding: 10px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  transition: background 0.2s ease, color 0.2s ease;
}
.btn-outline:hover {
  background: var(--color-red);
  color: white;
}

/* Tablet: 2 kolom */
@media (max-width: 768px) {
  .portfolio h2 { font-size: 24px; }
  .portfolio__grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
  .portfolio-card__media { height: 170px; }
}

/* Mobile: tetap 2 kolom, hanya diperkecil */
@media (max-width: 480px) {
  .portfolio h2 { font-size: 20px; margin: 6px 0 20px; }
  .eyebrow { font-size: 12px; }

  .portfolio__grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }

  .portfolio-card__media { height: 130px; }
  .portfolio-card__tag { font-size: 10px; padding: 3px 8px; left: 10px; bottom: 10px; }

  .portfolio-card__body { padding: 10px; }
  .portfolio-card__category { font-size: 10px; }
  .portfolio-card h3 { font-size: 13px; margin-top: 4px; line-height: 1.3; }

  .view-all { margin-top: 20px; }
  .btn-outline { padding: 8px 18px; font-size: 13px; }
}
</style>