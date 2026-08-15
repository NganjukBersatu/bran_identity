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

/* card dibuat polos: tanpa background, border, shadow, atau padding
   supaya yang tampil hanya logo-nya saja */
.logos__card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 190px;
  height: 110px;
  transition: transform 0.25s ease;
}

.logos__card:hover {
  transform: translateY(-6px);
}

.logos__card img {
  max-height: 80px;
  max-width: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  /* logo tampak abu-abu/redup saat idle, berwarna penuh & jernih saat hover */
  filter: grayscale(100%);
  opacity: 0.6;
  transition: filter 0.25s ease, opacity 0.25s ease, transform 0.25s ease;
}

.logos__card:hover img {
  filter: grayscale(0%);
  opacity: 1;
  transform: scale(1.05);
}

/* Tablet: logo & jarak sedikit dikecilkan */
@media (max-width: 768px) {
  .logos {
    padding: 40px 0;
  }
  .logos__label {
    font-size: 13px;
    margin-bottom: 24px;
  }
  .logos__row {
    gap: 20px;
  }
  .logos__card {
    width: 140px;
    height: 84px;
  }
  .logos__card img {
    max-height: 56px;
  }
}

/* Mobile: grid 3 kolom rapi, bukan flex-wrap acak */
@media (max-width: 480px) {
  .logos {
    padding: 32px 0;
  }
  .logos__label {
    font-size: 11.5px;
    margin-bottom: 18px;
    padding: 0 12px;
  }
  .logos__row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    justify-items: center;
  }
  .logos__card {
    width: 100%;
    height: 60px;
  }
  .logos__card img {
    max-height: 40px;
  }
  /* selalu tampilkan logo jelas di HP, hover tidak relevan di touch device */
  .logos__card img {
    filter: grayscale(40%);
    opacity: 0.85;
  }
}

/* HP sangat kecil: 2 kolom supaya logo tidak terlalu kecil */
@media (max-width: 360px) {
  .logos__row {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }
  .logos__card {
    height: 56px;
  }
}
</style>