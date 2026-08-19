<script setup>
import { ref, nextTick, onMounted, onBeforeUnmount } from 'vue'
import BlogSection from '../components/BlogSection.vue'

// Tag kategori populer — tombol interaktif dengan state aktif.
const popularTags = ['Teknologi', 'Digital Marketing', 'Tips Bisnis', 'UI/UX']
const activeTag = ref('')
const searchQuery = ref('')

function scrollToGrid() {
  nextTick(() => {
    document.getElementById('blog')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}

function selectTag(t) {
  activeTag.value = activeTag.value === t ? '' : t
  scrollToGrid()
}

function handleSearch() {
  // trim biar spasi kosong tidak dianggap kata kunci
  searchQuery.value = searchQuery.value.trim()
  scrollToGrid()
}

// Badge statistik yang melayang di sekitar bentuk utama (ganti sesuai data asli).
const floatingStats = [
  { label: '150+ Artikel', icon: 'doc' },
  { label: 'Update Mingguan', icon: 'flame' },
  { label: '5 Min Baca', icon: 'clock' },
]

// ---------- Efek muncul dari bawah (reveal) ----------
let observer = null

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
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <div class="blog-page">
    <!-- Hero -->
    <section class="blog-hero">
      <div class="blog-hero__mesh" aria-hidden="true">
        <div class="mesh__orb mesh__orb--1"></div>
        <div class="mesh__orb mesh__orb--2"></div>
      </div>

      <div class="container blog-hero__grid">
        <div class="blog-hero__content reveal">
          <p class="eyebrow">Blog</p>

          <h1 class="blog-hero__title">
            Insight &amp; <span class="highlight">Update Terbaru</span>
            untuk Bisnis Digital Anda
          </h1>

          <p class="blog-hero__desc">
            Kumpulan tulisan seputar teknologi, tips digital, dan strategi
            praktis dari tim kami — dirancang untuk membantu bisnis Anda
            terus berkembang di era digital.
          </p>

          <form class="search-bar" @submit.prevent="handleSearch">
            <svg class="search-bar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input v-model="searchQuery" type="text" placeholder="Cari artikel, misalnya 'SEO' atau 'UI/UX'..." />
            <button type="submit">Cari</button>
          </form>

          <div class="tags-row">
            <span class="tags-row__label">Populer:</span>
            <button
              v-for="t in popularTags"
              :key="t"
              type="button"
              class="tag-pill"
              :class="{ 'tag-pill--active': activeTag === t }"
              @click="selectTag(t)"
            >
              {{ t }}
            </button>
          </div>
        </div>

        <!-- Grafis hero: bentuk utama + badge statistik melayang -->
        <div class="hero-visual reveal" :style="{ transitionDelay: '0.15s' }" aria-hidden="true">
          <svg class="hero-visual__ring" viewBox="0 0 220 220">
            <circle cx="110" cy="110" r="100" fill="none" stroke="rgba(230,82,31,0.25)" stroke-width="2" stroke-dasharray="6 10" />
          </svg>

          <div class="visual-core">
            <span class="visual-core__quote">&ldquo;</span>
          </div>

          <div
            v-for="(s, i) in floatingStats"
            :key="s.label"
            class="floating-stat"
            :class="`floating-stat--${i + 1}`"
          >
            <span class="floating-stat__icon">
              <svg v-if="s.icon === 'doc'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6" />
                <path d="M9 13h6M9 17h6" />
              </svg>
              <svg v-else-if="s.icon === 'flame'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 17a2.5 2.5 0 0 0 2.5-2.5c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7.5 7.5 0 1 1-15 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
              </svg>
              <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 3" />
              </svg>
            </span>
            <span class="floating-stat__label">{{ s.label }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Grid Artikel (data & kartu diambil dari BlogSection) -->
    <BlogSection :show-heading="false" :active-category="activeTag" :search-query="searchQuery" />
  </div>
</template>

<style scoped>
.blog-page {
  /* palet sama persis dengan halaman Layanan / Portofolio */
  --cream: #FCEF91;
  --orange-light: #FB9E3A;
  --orange: #E6521F;
  --red: #EA2F14;
  --ink: #202020;
}

.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 2;
}

.blog-hero {
  position: relative;
  overflow: hidden;
  min-height: 640px;
  display: flex;
  align-items: center;
  padding: 160px clamp(20px, 6vw, 80px) 90px;
  background: linear-gradient(160deg, var(--cream) 0%, #fff3cf 45%, #ffe6c2 100%);
  text-align: left;
}

.blog-hero__mesh { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
.mesh__orb { position: absolute; border-radius: 50%; filter: blur(70px); opacity: 0.5; }
.mesh__orb--1 { width: 420px; height: 420px; top: -160px; left: -120px; background: radial-gradient(circle, var(--orange-light), transparent 70%); }
.mesh__orb--2 { width: 380px; height: 380px; top: -100px; right: -140px; background: radial-gradient(circle, var(--red), transparent 70%); opacity: 0.28; }

.blog-hero__grid {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.blog-hero__content { max-width: 600px; }

/* Label eyebrow — disamakan dengan halaman Tentang Kami & Portofolio */
.eyebrow {
  display: inline-block;
  font-size: 12.5px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--red);
  margin-bottom: 14px;
}

.blog-hero__title {
  font-size: clamp(30px, 4.2vw, 48px);
  font-weight: 800;
  line-height: 1.16;
  letter-spacing: -0.02em;
  color: var(--ink);
  max-width: 640px;
  margin: 0 0 20px;
}
.blog-hero__title .highlight { color: var(--orange); }

.blog-hero__desc {
  max-width: 480px;
  margin: 0 0 30px;
  color: #5b4a2a;
  font-size: 15.5px;
  line-height: 1.75;
}

/* Search bar */
.search-bar {
  display: flex;
  align-items: center;
  gap: 8px;
  max-width: 460px;
  background: #fff;
  border: 1.5px solid rgba(32, 32, 32, 0.09);
  border-radius: 14px;
  padding: 6px 6px 6px 16px;
  margin-bottom: 22px;
  box-shadow: 0 14px 30px -18px rgba(32, 20, 0, 0.25);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
.search-bar:focus-within {
  border-color: var(--orange-light);
  box-shadow: 0 14px 30px -14px rgba(230, 82, 31, 0.35);
}
.search-bar__icon { width: 18px; height: 18px; flex-shrink: 0; color: #9a8a68; }
.search-bar input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
  color: var(--ink);
  background: transparent;
  padding: 10px 0;
  min-width: 0;
}
.search-bar input::placeholder { color: #b3a583; }
.search-bar button {
  flex-shrink: 0;
  border: none;
  cursor: pointer;
  background: var(--orange);
  color: #fff;
  font-weight: 700;
  font-size: 13.5px;
  padding: 10px 20px;
  border-radius: 9px;
  transition: background 0.2s ease;
}
.search-bar button:hover { background: var(--red); }

/* Tag populer — tombol interaktif */
.tags-row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}
.tags-row__label {
  font-size: 13px;
  font-weight: 700;
  color: var(--ink);
  margin-right: 2px;
}
.tag-pill {
  font: inherit;
  font-size: 12.5px;
  font-weight: 600;
  color: #5b4a2a;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(32, 32, 32, 0.09);
  padding: 8px 16px;
  border-radius: 999px;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease, transform 0.15s ease;
}
.tag-pill:hover { border-color: var(--orange-light); color: var(--ink); transform: translateY(-1px); }
.tag-pill--active {
  background: var(--orange);
  border-color: var(--orange);
  color: #fff;
}

/* ---------- Grafis hero: bentuk utama + badge statistik melayang ---------- */
.hero-visual {
  position: relative;
  width: 300px;
  height: 300px;
  flex-shrink: 0;
}

.hero-visual__ring {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  animation: spin 40s linear infinite;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.visual-core {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 168px;
  height: 168px;
  border-radius: 42px;
  background: linear-gradient(135deg, var(--orange), var(--red));
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 26px 55px -20px rgba(230, 82, 31, 0.55);
  animation: floatCore 5s ease-in-out infinite;
}
.visual-core__quote {
  font-size: 92px;
  line-height: 1;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.92);
  font-family: Georgia, 'Times New Roman', serif;
  transform: translateY(6px);
}

@keyframes floatCore {
  0%, 100% { transform: translate(-50%, -50%) rotate(0deg); }
  50% { transform: translate(-50%, -56%) rotate(-2deg); }
}

.floating-stat {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  border-radius: 999px;
  padding: 9px 16px 9px 10px;
  box-shadow: 0 14px 28px -14px rgba(32, 20, 0, 0.3);
  font-size: 12.5px;
  font-weight: 700;
  color: var(--ink);
  animation: floatBadge 4.5s ease-in-out infinite;
}
.floating-stat--1 { top: 4px; right: 6px; animation-delay: 0s; }
.floating-stat--2 { bottom: 46px; left: -14px; animation-delay: 0.6s; }
.floating-stat--3 { bottom: -6px; right: 30px; animation-delay: 1.2s; }

.floating-stat__icon {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--orange-light), var(--orange));
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.floating-stat__icon svg { width: 14px; height: 14px; color: #fff; }

@keyframes floatBadge {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

@media (prefers-reduced-motion: reduce) {
  .visual-core, .floating-stat, .hero-visual__ring { animation: none; }
}

@media (max-width: 900px) {
  .hero-visual { display: none; }
}

/* ---------- Reveal: muncul dari bawah ---------- */
.reveal {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.is-revealed {
  opacity: 1;
  transform: translateY(0);
}
@media (prefers-reduced-motion: reduce) {
  .reveal { transition: none; opacity: 1; transform: none; }
}

@media (max-width: 650px) {
  .blog-hero {
    min-height: auto;
    padding: 120px 20px 60px;
  }
  .search-bar { flex-wrap: wrap; }
  .search-bar input { width: 100%; order: 1; }
  .search-bar__icon { order: 0; }
  .search-bar button { order: 2; margin-left: auto; }
}

@media (max-width: 480px) {
  .blog-hero__title {
    font-size: 26px;
    margin: 0 0 14px;
  }
  .blog-hero__desc {
    font-size: 14px;
  }
  .eyebrow { font-size: 11.5px; }
}
</style>