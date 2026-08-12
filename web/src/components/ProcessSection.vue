<script setup>
const steps = [
  { title: 'Konsultasi', desc: 'Diskusi kebutuhan dan tujuan project Anda.' },
  { title: 'Perencanaan', desc: 'Menyusun scope, timeline, dan estimasi biaya.' },
  { title: 'Development', desc: 'Proses pengembangan dengan update berkala.' },
  { title: 'Deploy & Support', desc: 'Peluncuran produk beserta dukungan lanjutan.' },
]
</script>

<template>
  <section class="process section">
    <div class="container">
      <p class="eyebrow" style="text-align:center">Cara Kami Bekerja</p>
      <h2 style="text-align:center; font-size: 28px; margin: 8px 0 40px;">Proses kerja yang jelas dan terukur</h2>

      <div class="process__grid">
        <div class="process__step" v-for="(step, i) in steps" :key="step.title">
          <div class="process__index">{{ i + 1 }}</div>
          <h3>{{ step.title }}</h3>
          <p>{{ step.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.process__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.process__step { text-align: center; }
.process__index {
  width: 40px;
  height: 40px;
  margin: 0 auto 12px;
  border-radius: 50%;
  background: var(--color-red);
  color: #fff;
  font-family: var(--font-heading);
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}
.process__step h3 { font-size: 16px; margin-bottom: 6px; }
.process__step p { font-size: 13px; color: var(--color-text-secondary); }

@media (max-width: 768px) {
  .process__grid { grid-template-columns: 1fr 1fr; }
}
</style>
