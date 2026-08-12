<script setup>
// ganti array ini dengan logo klien asli (taruh file di /public/logos/)
const logos = [
  { name: 'Klien 1', src: '/logos/klien-1.png' },
  { name: 'Klien 2', src: '/logos/klien-2.png' },
  { name: 'Klien 3', src: '/logos/klien-3.png' },
  { name: 'Klien 4', src: '/logos/klien-4.png' },
  { name: 'Klien 5', src: '/logos/klien-5.png' },
]
</script>

<template>
  <section class="logos">
    <div class="container">
      <p class="logos__label">Dipercaya oleh berbagai bisnis</p>
      <div class="logos__row">
        <img
          v-for="logo in logos"
          :key="logo.name"
          :src="logo.src"
          :alt="logo.name"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.logos { padding: 40px 0; }
.logos__label {
  text-align: center;
  color: var(--color-text-secondary);
  font-size: 14px;
  margin-bottom: 24px;
}
.logos__row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
  flex-wrap: wrap;
}
.logos__row img {
  height: 32px;
  width: auto;
  filter: grayscale(100%);
  opacity: .6;
}
</style>
