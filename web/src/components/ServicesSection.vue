<script setup>
const services = [
  { title: 'Web Development', desc: 'Website company profile, landing page, hingga aplikasi web custom.' },
  { title: 'Mobile App Development', desc: 'Aplikasi Android & iOS sesuai kebutuhan bisnis Anda.' },
  { title: 'UI/UX Design', desc: 'Desain antarmuka yang mudah digunakan dan enak dipandang.' },
  { title: 'System / ERP Development', desc: 'Sistem internal untuk mengelola operasional bisnis Anda.' },
  { title: 'Maintenance & Support', desc: 'Perawatan dan dukungan teknis berkelanjutan pasca rilis.' },
]
</script>

<template>
  <section id="layanan" class="services section">
    <div class="container">
      <p class="eyebrow">Layanan Kami</p>
      <h2>Solusi digital lengkap untuk bisnis Anda</h2>

      <div class="services__grid">
        <div class="service-card" v-for="s in services" :key="s.title">
          <h3>{{ s.title }}</h3>
          <p>{{ s.desc }}</p>
          <a href="#" class="service-card__link">Selengkapnya →</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services h2 { font-size: 30px; margin: 8px 0 40px; }
.services__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.service-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 24px;
}
.service-card h3 { font-size: 18px; margin-bottom: 8px; }
.service-card p { color: var(--color-text-secondary); font-size: 14px; margin-bottom: 16px; }
.service-card__link {
  color: var(--color-red);
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
}

@media (max-width: 900px) {
  .services__grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 600px) {
  .services__grid { grid-template-columns: 1fr; }
}
</style>
