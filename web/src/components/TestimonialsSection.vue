<script setup>
const testimonials = [
  {
    quote: 'Timnya sangat komunikatif dan hasil kerjanya sesuai ekspektasi kami.',
    name: 'Nama Klien',
    role: 'Jabatan, Nama Perusahaan',
  },
]
</script>

<template>
  <section class="testimonials section">
    <div class="container">
      <div class="testimonial-card" v-for="t in testimonials" :key="t.name">
        <p class="testimonial-card__quote">"{{ t.quote }}"</p>
        <div class="testimonial-card__author">
          <strong>{{ t.name }}</strong>
          <span>{{ t.role }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonial-card {
  background: var(--color-yellow);
  border-radius: var(--radius);
  padding: 40px;
  text-align: center;
  max-width: 640px;
  margin: 0 auto;
}
.testimonial-card__quote {
  font-family: var(--font-heading);
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
}
.testimonial-card__author { display: flex; flex-direction: column; }
.testimonial-card__author span { font-size: 13px; color: var(--color-text-secondary); }
</style>
