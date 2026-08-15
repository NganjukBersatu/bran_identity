<script setup>
const props = defineProps({
  limit: { type: Number, default: null },
  showViewAll: { type: Boolean, default: false },
})

// isi 'img' dengan path gambar nanti, misal: '/portfolio/project-1.jpg'
// selama 'img' masih kosong (''), kartu akan menampilkan placeholder otomatis
const projects = [
  { title: 'Nama Project 1', category: 'Web Development', img: '' },
  { title: 'Nama Project 2', category: 'Mobile App', img: '' },
  { title: 'Nama Project 3', category: 'UI/UX Design', img: '' },
  { title: 'Nama Project 4', category: 'E-Commerce', img: '' },
  { title: 'Nama Project 5', category: 'Company Profile', img: '' },
  { title: 'Nama Project 6', category: 'Web Development', img: '' },
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
          <div class="portfolio-card__media">
            <img v-if="p.img" :src="p.img" :alt="p.title" />
            <div v-else class="portfolio-card__placeholder">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
              <span>Gambar Menyusul</span>
            </div>
          </div>
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
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.portfolio-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
}

.portfolio-card__media {
  width: 100%;
  height: 220px;
}
.portfolio-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* placeholder saat gambar belum ada */
.portfolio-card__placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: repeating-linear-gradient(
    135deg,
    var(--color-surface, #fafafa),
    var(--color-surface, #fafafa) 10px,
    rgba(0, 0, 0, 0.02) 10px,
    rgba(0, 0, 0, 0.02) 20px
  );
  color: #9ca3af;
}
.portfolio-card__placeholder svg {
  width: 36px;
  height: 36px;
}
.portfolio-card__placeholder span {
  font-size: 13px;
  font-weight: 500;
}

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

/* Tablet: tetap 2 kolom */
@media (max-width: 768px) {
  .portfolio h2 { font-size: 24px; }
  .portfolio__grid { gap: 16px; }
  .portfolio-card__media { height: 160px; }
}

/* Mobile: tetap 2 kolom, hanya diperkecil supaya tidak terlalu besar */
@media (max-width: 480px) {
  .portfolio h2 { font-size: 20px; margin: 6px 0 20px; }
  .eyebrow { font-size: 12px; }

  .portfolio__grid { gap: 10px; }

  .portfolio-card__media { height: 100px; }
  .portfolio-card__placeholder svg { width: 24px; height: 24px; }
  .portfolio-card__placeholder span { font-size: 10px; }

  .portfolio-card__body { padding: 10px; }
  .portfolio-card__category { font-size: 10px; }
  .portfolio-card h3 { font-size: 13px; margin-top: 2px; }

  .view-all { margin-top: 20px; }
  .btn-outline { padding: 8px 18px; font-size: 13px; }
}
</style>