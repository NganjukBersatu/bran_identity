<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// ganti array ini dengan logo klien asli (taruh file di /public/clients/)
const clients = [
  { name: 'Klien-1', src: '/clients/klien-1.jpg' },
  { name: 'Klien-2', src: '/clients/klien-2.png' },
  { name: 'Klien-3', src: '/clients/klien-3.jpg' },
  { name: 'Klien-4', src: '/clients/klien-4.jpg' },
  { name: 'Klien-5', src: '/clients/klien-5.jpg' },
]

// duplikasi biar animasi seamless (setelah habis langsung muncul lagi dari kanan)
const logos = [...clients, ...clients]

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
      <p class="logos__label reveal" data-reveal="fade-up">
        Dipercaya oleh berbagai bisnis
      </p>

      <!-- MARQUEE TRACK -->
      <div class="logos__marquee reveal" data-reveal="fade-up" data-delay="100">
        <div class="logos__track">
          <div
            v-for="(logo, i) in logos"
            :key="`${logo.name}-${i}`"
            class="logos__card"
          >
            <img :src="logo.src" :alt="logo.name" loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.logos {
  padding: 64px 0;
  background: #fff;
  overflow: hidden;
}

/* ---------- reveal animation ---------- */
.reveal {
  opacity: 0;
  transition:
    opacity 0.65s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.65s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}
.reveal[data-reveal="fade-up"] {
  transform: translateY(22px) scale(0.97);
}
.reveal.is-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    transition: none;
  }
  .logos__track {
    animation: none !important;
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

/* ===== MARQUEE ===== */
.logos__marquee {
  width: 100%;
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    #000 8%,
    #000 92%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    #000 8%,
    #000 92%,
    transparent 100%
  );
}

.logos__track {
  display: flex;
  align-items: center;
  gap: 48px;
  width: max-content;
  animation: marquee 28s linear infinite;
}

/* pause saat hover */
.logos__marquee:hover .logos__track {
  animation-play-state: paused;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.logos__card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 200px;      /* sebelumnya 160px */
  height: 88px;      /* sebelumnya 72px */
  transition: transform 0.25s ease;
}

.logos__card:hover {
  transform: translateY(-4px);
}

.logos__card img {
  max-height: 70px;  /* sebelumnya 56px */
  max-width: 170px;  /* sebelumnya 140px */
  width: auto;
  height: auto;
  object-fit: contain;
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

@media (max-width: 900px) {
  .logos {
    padding: 52px 0;
  }
  .logos__label {
    margin-bottom: 32px;
  }
  .logos__track {
    gap: 36px;
    animation-duration: 24s;
  }
  .logos__card {
    width: 170px;
    height: 76px;
  }
  .logos__card img {
    max-height: 58px;
    max-width: 145px;
  }
}

@media (max-width: 600px) {
  .logos {
    padding: 40px 0;
  }
  .logos__label {
    font-size: 13px;
    margin-bottom: 28px;
  }
  .logos__track {
    gap: 28px;
    animation-duration: 20s;
  }
  .logos__card {
    width: 120px;
    height: 56px;
  }
  .logos__card img {
    max-height: 42px;
    max-width: 100px;
    filter: grayscale(35%);
    opacity: 0.9;
  }
}

@media (max-width: 400px) {
  .logos {
    padding: 36px 0;
  }
  .logos__label {
    font-size: 11.5px;
    margin-bottom: 22px;
  }
  .logos__track {
    gap: 22px;
    animation-duration: 18s;
  }
  .logos__card {
    width: 120px;
    height: 56px;
  }
  .logos__card img {
    max-height: 42px;
    max-width: 105px;
  }
}
</style>