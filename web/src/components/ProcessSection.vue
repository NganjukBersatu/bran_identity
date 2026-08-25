<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const steps = [
  {
    number: '01',
    title: 'Konsultasi & Discovery',
    desc: 'Diskusi kebutuhan bisnis, target pengguna, dan tujuan produk yang ingin dicapai.',
  },
  {
    number: '02',
    title: 'Perencanaan & Desain',
    desc: 'Menyusun scope, arsitektur teknis, timeline, dan estimasi biaya secara transparan.',
  },
  {
    number: '03',
    title: 'Development',
    desc: 'Proses coding dengan sprint terjadwal dan update progres berkala ke tim Anda.',
  },
  {
    number: '04',
    title: 'Testing & QA',
    desc: 'Pengujian fungsional dan performa untuk memastikan produk stabil sebelum rilis.',
  },
  {
    number: '05',
    title: 'Deploy & Support',
    desc: 'Peluncuran ke production beserta dukungan dan maintenance berkelanjutan.',
  },
]

let observer
onMounted(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const root = document.querySelector('.process')
  const els = root ? root.querySelectorAll('.reveal') : []

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
  <section class="process section">
    <div class="container">
      <div class="section-head reveal" data-reveal="fade-up">
        <span class="eyebrow">Cara Kami Bekerja</span>
        <h2>Proses Kerja yang Jelas dan Terukur</h2>
        <p class="section-sub">
          Dari konsultasi awal hingga produk live, setiap tahap dikerjakan
          dengan alur yang transparan agar Anda selalu tahu progres project.
        </p>
      </div>

      <div class="process__grid">
        <div class="process__line" aria-hidden="true">
          <div class="process__line-fill reveal" data-reveal="grow-line"></div>
        </div>

        <div
          class="process__step reveal"
          data-reveal="fade-up"
          v-for="(step, i) in steps"
          :key="step.title"
          :data-delay="i * 110"
        >
          <span class="process__index">{{ step.number }}</span>
          <h3>{{ step.title }}</h3>
          <p>{{ step.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.process { overflow-x: hidden; }

/* ---------- reveal animation ---------- */
.reveal {
  opacity: 0;
  transition: opacity .6s ease, transform .6s ease;
}
.reveal[data-reveal="fade-up"] { transform: translateY(28px); }
.reveal.is-visible { opacity: 1; transform: translateY(0); }
.reveal[data-reveal="grow-line"] { transition: transform .9s ease; transform: scaleX(0); }
.reveal[data-reveal="grow-line"].is-visible { transform: scaleX(1); }

/* ---------- head ---------- */
.section-head {
  max-width: 640px;
  margin: 0 auto 56px;
  text-align: center;
}
.section-head h2 {
  font-size: clamp(24px, 3.2vw, 32px);
  margin: 8px 0 12px;
}
.section-sub {
  color: var(--color-text-secondary);
  font-size: 15px;
}

/* ---------- grid ---------- */
.process__grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 24px;
}
.process__line {
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-border);
  transform-origin: left center;
}
.process__line-fill {
  height: 100%;
  width: 100%;
  background: linear-gradient(90deg, var(--color-orange), var(--color-red));
  transform-origin: left center;
}

.process__step {
  position: relative;
  text-align: center;
  padding-top: 4px;
}
.process__index {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  margin: 0 auto 16px;
  border-radius: 50%;
  background: var(--color-red);
  color: #fff;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 14px;
  position: relative;
  z-index: 1;
}
.process__step h3 {
  font-size: 16px;
  margin-bottom: 6px;
}
.process__step p {
  font-size: 13px;
  line-height: 1.55;
  color: var(--color-text-secondary);
}

/* =========================================================
   RESPONSIVE
========================================================= */
@media (max-width: 960px) {
  .process__grid { grid-template-columns: repeat(3, 1fr); row-gap: 40px; }
  .process__line { display: none; }
}

@media (max-width: 640px) {
  .section { padding: 56px 0; }
  .section-head { margin-bottom: 40px; text-align: left; }
  .process__grid { grid-template-columns: repeat(2, 1fr); gap: 28px 16px; }
  .process__step { text-align: left; }
  .process__index { margin: 0 0 12px; }
}

@media (max-width: 380px) {
  .process__step h3 { font-size: 15px; }
  .process__step p { font-size: 12.5px; }
}

@media (prefers-reduced-motion: reduce) {
  .reveal { transition: none; }
}
</style>