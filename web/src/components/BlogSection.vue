<script setup>
import { computed, nextTick, onMounted, onBeforeUnmount, watch } from 'vue'
import { useArticles } from '../composables/useArticles.js'

const props = defineProps({
  limit: { type: Number, default: null },
  showViewAll: { type: Boolean, default: false },
  showHeading: { type: Boolean, default: true },
  activeCategory: { type: String, default: '' },
  searchQuery: { type: String, default: '' },
})

// Data artikel sekarang diambil dari composable yang SAMA dengan
// halaman Blog (src/composables/useArticles.js) — jadi Home dan
// halaman Blog selalu konsisten dan otomatis sinkron.
const { articles } = useArticles()

// Pencocokan longgar dua arah, supaya tag hero (mis. "Tips Bisnis")
// tetap match ke kategori artikel asli (mis. "Tips" / "Bisnis").
const filteredPosts = computed(() => {
  let list = articles.value

  if (props.activeCategory) {
    const tag = props.activeCategory.toLowerCase()
    list = list.filter((p) => {
      const cat = p.category.toLowerCase()
      return tag.includes(cat) || cat.includes(tag)
    })
  }

  const q = props.searchQuery.trim().toLowerCase()
  if (q) {
    list = list.filter((p) =>
      p.title.toLowerCase().includes(q) ||
      p.excerpt.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    )
  }

  return props.limit ? list.slice(0, props.limit) : list
})

const emptyMessage = computed(() => {
  if (props.searchQuery.trim() && props.activeCategory) {
    return `Tidak ada artikel untuk "${props.searchQuery}" di kategori "${props.activeCategory}".`
  }
  if (props.searchQuery.trim()) {
    return `Tidak ada artikel yang cocok dengan "${props.searchQuery}".`
  }
  if (props.activeCategory) {
    return `Belum ada artikel untuk kategori "${props.activeCategory}".`
  }
  return 'Belum ada artikel.'
})

// ---------- Efek muncul dari bawah (reveal) saat kartu masuk viewport ----------
let observer = null

function observeCards() {
  document.querySelectorAll('.blog-card.reveal:not(.is-revealed)').forEach((el) => observer.observe(el))
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  )
  observeCards()
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})

// Saat filter berubah, kartu baru perlu di-observe ulang (kartu lama tak lagi ada di DOM)
watch(filteredPosts, () => {
  nextTick(() => observeCards())
})
</script>

<template>
  <section id="blog" class="blog section">
    <div class="container">
      <template v-if="showHeading">
        <p class="eyebrow">Blog</p>
        <h2>Artikel & update terbaru</h2>
      </template>

      <div v-if="filteredPosts.length" class="blog__grid">
        <router-link
          :to="`/blog/${p.id}`"
          class="blog-card reveal"
          v-for="(p, i) in filteredPosts"
          :key="p.id"
          :style="{ transitionDelay: (i % 3) * 0.1 + 's' }"
        >
          <div class="blog-card__media">
            <img :src="p.image" :alt="p.title" loading="lazy" />
          </div>
          <div class="blog-card__body">
            <div class="blog-card__meta">
              <span class="blog-card__category">{{ p.category }}</span>
              <span class="blog-card__date">{{ p.date }}</span>
            </div>
            <h3>{{ p.title }}</h3>
            <p>{{ p.excerpt }}</p>
            <span class="blog-card__link">Baca selengkapnya →</span>
          </div>
        </router-link>
      </div>

      <p v-else class="blog-empty">{{ emptyMessage }}</p>

      <div v-if="showViewAll" class="view-all">
        <router-link to="/blog" class="btn btn-outline">Lihat Semua Artikel →</router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.blog h2 { font-size: 28px; margin: 8px 0 32px; }
.blog__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.blog-empty {
  text-align: center;
  color: var(--color-text-secondary, #888);
  font-size: 14px;
  padding: 40px 0;
}

.blog-card {
  display: block;
  text-decoration: none;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  overflow: hidden;
  background: var(--color-surface);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, opacity 0.6s ease;
}

.blog-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 28px rgba(0, 0, 0, 0.08);
  border-color: var(--color-deep-orange, #ea580c);
}

/* ---------- Reveal: muncul dari bawah saat discroll ---------- */
.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
.reveal.is-revealed {
  opacity: 1;
  transform: translateY(0);
}
/* hover butuh transform sendiri, jadi jangan biarkan reveal menimpanya setelah muncul */
.reveal.is-revealed:hover {
  transform: translateY(-6px);
}
@media (prefers-reduced-motion: reduce) {
  .reveal { transition: none; opacity: 1; transform: none; }
}

.blog-card__media {
  height: 140px;
  overflow: hidden;
  background: linear-gradient(135deg, #fff7ed, #ffedd5);
}

.blog-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease;
}
.blog-card:hover .blog-card__media img {
  transform: scale(1.06);
}

.blog-card__body {
  padding: 20px;
}

.blog-card__meta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.blog-card__category {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.3px;
  text-transform: uppercase;
  color: var(--color-deep-orange, #ea580c);
  background: #fff7ed;
  padding: 3px 10px;
  border-radius: 999px;
}

.blog-card__date {
  font-size: 12px;
  color: var(--color-text-secondary, #888);
}

.blog-card h3 {
  font-size: 17px;
  font-weight: 700;
  margin: 0 0 8px;
  line-height: 1.4;
}

.blog-card p {
  font-size: 13.5px;
  color: var(--color-text-secondary, #666);
  line-height: 1.6;
  margin: 0 0 14px;
}

.blog-card__link {
  font-size: 13.5px;
  font-weight: 600;
  color: var(--color-deep-orange, #ea580c);
}

.view-all {
  text-align: center;
  margin-top: 36px;
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
@media (max-width: 900px) {
  .blog__grid { grid-template-columns: repeat(2, 1fr); }
}

/* Mobile: tetap 2 kolom, hanya diperkecil supaya tidak terlalu besar */
@media (max-width: 600px) {
  .blog h2 { font-size: 20px; margin: 6px 0 20px; }
  .eyebrow { font-size: 12px; }

  .blog__grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }

  .blog-card__media { height: 70px; }

  .blog-card__body { padding: 10px; }
  .blog-card__meta { gap: 6px; margin-bottom: 6px; flex-wrap: wrap; }
  .blog-card__category { font-size: 9px; padding: 2px 7px; }
  .blog-card__date { font-size: 10px; }

  .blog-card h3 {
    font-size: 12.5px;
    margin: 0 0 4px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
     line-clamp: 2; 
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  /* sembunyikan excerpt di layar sangat kecil biar card tidak terlalu tinggi */
  .blog-card p { display: none; }

  .blog-card__link { font-size: 11px; }

  .view-all { margin-top: 20px; }
  .btn-outline { padding: 8px 18px; font-size: 13px; }
}
</style>