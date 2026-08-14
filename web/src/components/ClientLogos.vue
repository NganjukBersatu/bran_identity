<script setup>
// ganti array ini dengan logo klien asli (taruh file di /public/clients/)
const clients = [
  { name: 'Klien-1.jpg', src: '/clients/klien-1.jpg' },
  { name: 'Klien-2.png', src: '/clients/klien-2.png' },
  { name: 'Klien-3.jpg', src: '/clients/klien-3.jpg' },
  { name: 'Klien-4.jpg', src: '/clients/klien-4.jpg' },
  { name: 'Klien-5.jpg', src: '/clients/klien-5.jpg' },
]
</script>

<template>
  <section class="logos">
    <div class="container">
      <p class="logos__label">Dipercaya oleh berbagai bisnis</p>
      <div class="logos__row">
        <div v-for="logo in clients" :key="logo.name" class="logos__card">
          <img :src="logo.src" :alt="logo.name" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.logos {
  padding: 56px 0;
  background: #fff;
}

.logos__label {
  text-align: center;
  color: var(--color-text-secondary);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 32px;
}

.logos__row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  flex-wrap: wrap;
}

.logos__card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 90px;
  padding: 16px 20px;
  background: #fffaf0;
  border: 1px solid rgba(234, 88, 12, 0.15);
  border-radius: 16px;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.logos__card:hover {
  transform: translateY(-6px);
  box-shadow: 0 14px 28px rgba(234, 88, 12, 0.15);
  border-color: var(--color-orange, #ea580c);
}

.logos__card img {
  max-height: 56px;
  max-width: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  /* logo tampil berwarna penuh, sedikit redup saat idle, jernih saat hover */
  filter: none;
  opacity: 0.85;
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.logos__card:hover img {
  opacity: 1;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .logos {
    padding: 40px 0;
  }
  .logos__row {
    gap: 16px;
  }
  .logos__card {
    width: 130px;
    height: 76px;
    padding: 12px 16px;
  }
  .logos__card img {
    max-height: 44px;
  }
}

@media (max-width: 480px) {
  .logos__card {
    width: 45%;
    height: 70px;
  }
}
</style>