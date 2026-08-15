<script setup>
const props = defineProps({
  limit: { type: Number, default: null },
  showViewAll: { type: Boolean, default: false },
  showHeading: { type: Boolean, default: true },
})

const posts = [
  { date: '01 Jan', category: 'Tips', title: 'Judul Artikel Pertama', excerpt: 'Ringkasan singkat artikel yang membahas topik menarik seputar dunia digital.' },
  { date: '15 Jan', category: 'Teknologi', title: 'Judul Artikel Kedua', excerpt: 'Ringkasan singkat artikel yang membahas topik menarik seputar dunia digital.' },
  { date: '28 Jan', category: 'Bisnis', title: 'Judul Artikel Ketiga', excerpt: 'Ringkasan singkat artikel yang membahas topik menarik seputar dunia digital.' },
  { date: '05 Feb', category: 'Tips', title: 'Judul Artikel Keempat', excerpt: 'Ringkasan singkat artikel yang membahas topik menarik seputar dunia digital.' },
  { date: '18 Feb', category: 'Teknologi', title: 'Judul Artikel Kelima', excerpt: 'Ringkasan singkat artikel yang membahas topik menarik seputar dunia digital.' },
  { date: '02 Mar', category: 'Bisnis', title: 'Judul Artikel Keenam', excerpt: 'Ringkasan singkat artikel yang membahas topik menarik seputar dunia digital.' },
]

const displayedPosts = props.limit ? posts.slice(0, props.limit) : posts
</script>

<template>
  <section id="blog" class="blog section">
    <div class="container">
      <template v-if="showHeading">
        <p class="eyebrow">Blog</p>
        <h2>Artikel & update terbaru</h2>
      </template>

      <div class="blog__grid">
        <a href="#" class="blog-card" v-for="p in displayedPosts" :key="p.title">
          <div class="blog-card__media">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M4 5.5A1.5 1.5 0 015.5 4h13A1.5 1.5 0 0120 5.5v13a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 014 18.5v-13z" />
              <path d="M4 16l4.5-4.5a2 2 0 012.8 0L15 15" />
              <path d="M14 13l1.5-1.5a2 2 0 012.8 0L20 13.5" />
              <circle cx="9" cy="8.5" r="1.25" />
            </svg>
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
        </a>
      </div>

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

.blog-card {
  display: block;
  text-decoration: none;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  overflow: hidden;
  background: var(--color-surface);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.blog-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 28px rgba(0, 0, 0, 0.08);
  border-color: var(--color-deep-orange, #ea580c);
}

.blog-card__media {
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #fff7ed, #ffedd5);
  color: var(--color-deep-orange, #ea580c);
}

.blog-card__media svg {
  width: 40px;
  height: 40px;
  opacity: 0.7;
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
  .blog-card__media svg { width: 22px; height: 22px; }

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