<script setup>
const props = defineProps({
  limit: { type: Number, default: null },
  showViewAll: { type: Boolean, default: false },
})

const projects = [
  { title: 'Nama Project 1', category: 'Web Development', img: '/portfolio/project-1.jpg' },
  { title: 'Nama Project 2', category: 'Mobile App', img: '/portfolio/project-2.jpg' },
]

const displayedProjects = props.limit ? projects.slice(0, props.limit) : projects
</script>

<template>
  <section id="portofolio" class="portfolio section">
    <div class="container">
      <p class="eyebrow">Portofolio</p>
      <h2>Project yang pernah kami kerjakan</h2>

      <div class="portfolio__grid">
        <a href="#" class="portfolio-card" v-for="p in displayedProjects" :key="p.title">
          <img :src="p.img" :alt="p.title" />
          <div class="portfolio-card__body">
            <span class="portfolio-card__category">{{ p.category }}</span>
            <h3>{{ p.title }}</h3>
          </div>
        </a>
      </div>

      <div v-if="showViewAll" class="view-all">
        <router-link to="/portofolio" class="btn btn-outline">Lihat Semua Portofolio →</router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.portfolio h2 { font-size: 28px; margin: 8px 0 32px; }
.portfolio__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
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
}
.portfolio-card img { width: 100%; height: 220px; object-fit: cover; display: block; }
.portfolio-card__body { padding: 16px; }
.portfolio-card__category { font-size: 12px; color: var(--color-deep-orange); font-weight: 600; }
.portfolio-card h3 { font-size: 17px; margin-top: 4px; }

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
}
.btn-outline:hover {
  background: var(--color-red);
  color: white;
}

@media (max-width: 768px) {
  .portfolio__grid { grid-template-columns: 1fr; }
}
</style>