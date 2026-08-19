<script setup>
const props = defineProps({
  limit: { type: Number, default: null },
  showViewAll: { type: Boolean, default: false },
})

// isi 'img' dengan path gambar nanti, misal: '/portfolio/project-1.jpg'
// selama 'img' masih kosong (''), kartu akan menampilkan mockup browser
// berwarna (accent) sebagai placeholder — bukan kotak abu-abu kosong.
// Data ini disamakan dengan views/portofolio.vue supaya Home & halaman
// Portofolio penuh konsisten.
const projects = [
  { title: 'Kopi Senja — Company Profile', category: 'Website', domain: 'kopisenja.id', img: '', accent: 'orange' },
  { title: 'RentCar Prima', category: 'Website', domain: 'rentcarprima.com', img: '', accent: 'red' },
  { title: 'Nutrix — Aplikasi Diet', category: 'Mobile App', domain: 'app.nutrix.id', img: '', accent: 'orange-light' },
  { title: 'Bank Sinar Digital', category: 'Mobile App', domain: 'sinar.mobile', img: '', accent: 'orange' },
  { title: 'Loka Studio Branding', category: 'Branding', domain: 'lokastudio.co', img: '', accent: 'red' },
  { title: 'Warung Digital POS', category: 'Website', domain: 'warungdigital.app', img: '', accent: 'orange-light' },
]

const displayedProjects = props.limit ? projects.slice(0, props.limit) : projects
</script>

<template>
  <section id="portofolio" class="portfolio section">
    <div class="container">
      <p class="eyebrow">Portofolio</p>
      <h2>Project yang pernah kami kerjakan</h2>

      <div class="portfolio__grid">
        <router-link to="/portofolio" class="portfolio-card" v-for="p in displayedProjects" :key="p.title">
          <div class="portfolio-card__media">
            <img v-if="p.img" :src="p.img" :alt="p.title" />
            <div v-else class="portfolio-card__placeholder" :class="`accent--${p.accent}`">
              <span class="portfolio-card__mark">{{ p.title.charAt(0) }}</span>
            </div>
          </div>
          <div class="portfolio-card__body">
            <span class="portfolio-card__category">{{ p.category }}</span>
            <h3>{{ p.title }}</h3>
          </div>
        </router-link>
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

/* placeholder saat gambar belum ada: mockup browser bergradasi warna,
   senada dengan browser-frame__screen di views/portofolio.vue */
.portfolio-card__placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.portfolio-card__placeholder.accent--orange {
  background: linear-gradient(135deg, #E6521F, #EA2F14);
}
.portfolio-card__placeholder.accent--red {
  background: linear-gradient(135deg, #EA2F14, #b81f0c);
}
.portfolio-card__placeholder.accent--orange-light {
  background: linear-gradient(135deg, #FB9E3A, #E6521F);
}
.portfolio-card__mark {
  font-size: 46px;
  font-weight: 800;
  color: #fff;
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
  .portfolio-card__mark { font-size: 26px; }

  .portfolio-card__body { padding: 10px; }
  .portfolio-card__category { font-size: 10px; }
  .portfolio-card h3 { font-size: 13px; margin-top: 2px; }

  .view-all { margin-top: 20px; }
  .btn-outline { padding: 8px 18px; font-size: 13px; }
}
</style>