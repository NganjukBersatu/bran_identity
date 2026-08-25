<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// ganti array ini dengan logo klien asli (taruh file di /public/clients/)
const clients = [
  { name: 'Klien-1.jpg', src: '/clients/klien-1.jpg' },
  { name: 'Klien-2.png', src: '/clients/klien-2.png' },
  { name: 'Klien-3.jpg', src: '/clients/klien-3.jpg' },
  { name: 'Klien-4.jpg', src: '/clients/klien-4.jpg' },
  { name: 'Klien-5.jpg', src: '/clients/klien-5.jpg' },
]

const sectionEl = ref(null)
let observer

onMounted(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const els = sectionEl.value?.querySelectorAll('.reveal') ?? []

  if (prefersReduced) {
    els.forEach((el) => el.classList.add('is-visible'))
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.delay || 0
          entry.target.style.transitionDelay = `${delay}ms`
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 }
  )

  els.forEach((el) => observer.observe(el))
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <section ref="sectionEl" class="logos">
    <div class="container">
      <p class="logos__label reveal" data-reveal="fade-up">Dipercaya oleh berbagai bisnis</p>
      <div class="logos__row">
        <div
          v-for="(logo, i) in clients"
          :key="logo.name"
          class="logos__card reveal"
          data-reveal="fade-up"
          :data-delay="80 + i * 70"
        >
          <img :src="logo.src" :alt="logo.name" loading="lazy" decoding="async" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.logos {
  padding: 64px 0;
  background: #fff;
}

/* ---------- reveal animation ---------- */
.reveal {
  opacity: 0;
  transition: opacity .65s cubic-bezier(0.16, 1, 0.3, 1), transform .65s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}
.reveal[data-reveal="fade-up"] { transform: translateY(22px) scale(0.97); }
.reveal.is-visible { opacity: 1; transform: translateY(0) scale(1); }

@media (prefers-reduced-motion: reduce) {
  .reveal {
    transition: none;
  }
}

.logos__label {
  text-align: center;
  color: var(--color-text-secondary);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 40px;
}

.logos__row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  justify-items: center;
  gap: 24px;
  max-width: 980px;
  margin: 0 auto;
}

/* card dibuat polos: tanpa background, border, shadow, atau padding
   supaya yang tampil hanya logo-nya saja. Ukuran dibuat konsisten
   lewat aspect-ratio, bukan height tetap, supaya logo landscape
   maupun square tetap proporsional dan tidak "ngambang" kekecilan. */
.logos__card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  aspect-ratio: 16 / 9;
  max-width: 180px;
  transition: transform 0.25s ease;
}

.logos__card:hover {
  transform: translateY(-6px);
}

.logos__card img {
  max-height: 72%;
  max-width: 85%;
  width: auto;
  height: auto;
  object-fit: contain;
  /* logo tampak abu-abu/redup saat idle, berwarna penuh & jernih saat hover */
  filter: grayscale(100%);
  opacity: 0.62;
  transition: filter 0.25s ease, opacity 0.25s ease, transform 0.25s ease;
}

.logos__card:hover img {
  filter: grayscale(0%);
  opacity: 1;
  transform: scale(1.06);
}

/* =========================================================
   RESPONSIVE
========================================================= */

/* TABLET BESAR — 1100px */
@media (max-width: 1100px) {
  .logos__row {
    max-width: 860px;
    gap: 20px;
  }
}

/* TABLET — 900px: turun ke 4 kolom, logo dikecilkan sedikit */
@media (max-width: 900px) {
  .logos {
    padding: 52px 0;
  }
  .logos__label {
    margin-bottom: 32px;
  }
  .logos__row {
    grid-template-columns: repeat(4, 1fr);
    max-width: 640px;
    gap: 18px;
  }
  .logos__card {
    max-width: 150px;
  }
}

/* TABLET KECIL — 768px */
@media (max-width: 768px) {
  .logos {
    padding: 44px 0;
  }
  .logos__label {
    font-size: 13px;
    margin-bottom: 28px;
  }
  .logos__row {
    grid-template-columns: repeat(3, 1fr);
    max-width: 480px;
    gap: 16px;
  }
  .logos__card {
    max-width: 130px;
  }
}

/* MOBILE — 600px: grid 3 kolom rapi */
@media (max-width: 600px) {
  .logos {
    padding: 40px 0;
  }
  .logos__row {
    gap: 14px;
  }
  .logos__card {
    max-width: 110px;
  }
  /* selalu tampilkan logo lebih jelas di HP, hover tidak relevan di touch device */
  .logos__card img {
    filter: grayscale(35%);
    opacity: 0.9;
  }
}

/* MOBILE KECIL — 480px */
@media (max-width: 480px) {
  .logos {
    padding: 36px 0;
  }
  .logos__label {
    font-size: 11.5px;
    margin-bottom: 22px;
    padding: 0 12px;
  }
  .logos__row {
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }
  .logos__card {
    max-width: 96px;
  }
}

/* HP SANGAT KECIL — 380px: 2 kolom supaya logo tidak terlalu kecil */
@media (max-width: 380px) {
  .logos__row {
    grid-template-columns: repeat(2, 1fr);
    max-width: 260px;
    gap: 16px;
  }
  .logos__card {
    max-width: 120px;
    aspect-ratio: 16 / 9;
  }
}
</style>