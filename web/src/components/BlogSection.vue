<script setup>
const posts = [
  { date: '01 Jan', title: 'Judul Artikel Pertama', excerpt: 'Ringkasan singkat artikel...' },
  { date: '15 Jan', title: 'Judul Artikel Kedua', excerpt: 'Ringkasan singkat artikel...' },
  { date: '28 Jan', title: 'Judul Artikel Ketiga', excerpt: 'Ringkasan singkat artikel...' },
]
</script>

<template>
  <section id="blog" class="blog section">
    <div class="container">
      <p class="eyebrow">Blog</p>
      <h2>Artikel & update terbaru</h2>

      <div class="blog__grid">
        <a href="#" class="blog-card" v-for="p in posts" :key="p.title">
          <span class="blog-card__date">{{ p.date }}</span>
          <h3>{{ p.title }}</h3>
          <p>{{ p.excerpt }}</p>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.blog h2 { font-size: 28px; margin: 8px 0 32px; }
.blog__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.blog-card {
  display: block;
  text-decoration: none;
  color: var(--color-text);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 20px;
  background: var(--color-surface);
}
.blog-card__date { font-size: 12px; color: var(--color-deep-orange); font-weight: 600; }
.blog-card h3 { font-size: 16px; margin: 8px 0; }
.blog-card p { font-size: 13px; color: var(--color-text-secondary); }

@media (max-width: 768px) {
  .blog__grid { grid-template-columns: 1fr; }
}
</style>
