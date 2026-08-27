<template>
  <div class="about-page" ref="pageRoot">
    <!-- HERO -->
    <section class="about-hero">
      <div class="about-hero__grid">
        <div class="container about-hero__intro reveal reveal--up">
          <span class="about-hero__since">Sejak 2019</span>
          <h1 class="about-hero__title">
            Studio kecil, cara kerja yang serius
          </h1>
          <p class="about-hero__desc">
            Bran Identity dimulai dari dua orang yang percaya bahwa produk digital
            yang baik lahir dari mendengar, bukan dari template yang tinggal dipasang.
            Sampai hari ini, cara berpikir itu yang masih kami pegang.
          </p>

          <div class="about-hero__facts">
            <div
              class="fact reveal reveal--up"
              v-for="(f, i) in facts"
              :key="f.label"
              :style="{ '--reveal-delay': `${120 + i * 90}ms` }"
            >
              <strong>{{ f.value }}</strong>
              <span>{{ f.label }}</span>
            </div>
          </div>
        </div>

        <div class="about-hero__media reveal reveal--fade" style="--reveal-delay: 150ms">
            <img src="/team/timwork.jpg" alt="Tim Bran Identity sedang bekerja" class="hero-img" @error="onImgError" />
        </div>
      </div>
    </section>

    <!-- STORY -->
    <section class="story">
      <div class="container story__inner">
        <div class="story__text reveal reveal--up">
          <span class="eyebrow"><span class="eyebrow__dot"></span>Cerita Kami</span>
          <h2 class="story__title">Dari proyek freelance, jadi studio yang dipercaya</h2>
          <p>
            Semua berawal dari dua developer yang membantu pelaku UMKM di sekitar
            mereka membuat website sederhana. Tidak ada rencana besar — hanya rasa
            penasaran soal kenapa begitu banyak bisnis kecil terjebak dengan website
            yang tidak pernah benar-benar mereka pahami cara kerjanya.
          </p>
          <p>
            Dari situ, satu proyek berubah jadi dua, lalu sepuluh. Kami mulai
            merekrut orang-orang yang punya kegelisahan yang sama: produk digital
            seharusnya dirancang untuk dipakai, bukan sekadar dipajang di portofolio.
            Hari ini, Bran Identity tumbuh menjadi studio yang menangani website,
            aplikasi, dan sistem internal untuk bisnis dari berbagai skala.
          </p>
        </div>

        <div class="story__timeline" role="list">
          <div
            class="timeline-item reveal reveal--left"
            role="listitem"
            v-for="(item, i) in milestones"
            :key="item.year"
            :style="{ '--reveal-delay': `${i * 100}ms` }"
          >
            <span class="timeline-item__year">{{ item.year }}</span>
            <span class="timeline-item__marker" aria-hidden="true"></span>
            <div class="timeline-item__content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- VALUES -->
    <section class="values">
      <div class="container">
        <div class="values__head reveal reveal--up">
          <span class="eyebrow"><span class="eyebrow__dot"></span>Cara Kami Berpikir</span>
          <h2>Yang kami pegang di setiap proyek</h2>
        </div>

        <div class="values__grid">
          <article
            class="value-card reveal reveal--up"
            v-for="(v, i) in values"
            :key="v.title"
            :style="{ '--reveal-delay': `${i * 100}ms` }"
          >
            <div class="value-card__icon" v-html="v.icon"></div>
            <h3>{{ v.title }}</h3>
            <p>{{ v.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- PROCESS -->
    <section class="process">
      <div class="container">
        <div class="process__head reveal reveal--up">
          <span class="eyebrow"><span class="eyebrow__dot"></span>Cara Kami Bekerja</span>
          <h2>Lima tahap, satu tujuan: produk yang benar-benar dipakai</h2>
        </div>

        <div class="process__row">
          <div
            class="process-step reveal reveal--up"
            v-for="(p, i) in process"
            :key="p.title"
            :style="{ '--reveal-delay': `${i * 90}ms` }"
          >
            <div class="process-step__num">{{ String(i + 1).padStart(2, '0') }}</div>
            <h3>{{ p.title }}</h3>
            <p>{{ p.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="about-cta">
      <div class="container about-cta__inner reveal reveal--scale">
        <h2>Punya proyek yang ingin didiskusikan?</h2>
        <p>Ceritakan kebutuhan Anda, dan mari mulai diskusi awal tanpa biaya.</p>
        <router-link to="/contact" class="btn btn-primary">
          Mulai Diskusi <span class="btn__arrow">→</span>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

const pageRoot = ref(null)
let observer = null

const facts = [
  { value: '120+', label: 'Proyek selesai' },
  { value: '6', label: 'Tahun berjalan' },
  { value: '5', label: 'Orang di tim inti' },
]

const milestones = [
  {
    year: '2019',
    title: 'Awal mula',
    desc: 'Dua developer freelance membantu UMKM di sekitar membuat website sederhana.',
  },
  {
    year: '2021',
    title: 'Bran Identity berdiri',
    desc: 'Resmi jadi studio kecil dengan lima orang, mulai menangani klien di luar kota asal.',
  },
  {
    year: '2023',
    title: 'Perluasan layanan',
    desc: 'Mulai menggarap aplikasi dan sistem internal, tidak hanya website.',
  },
  {
    year: '2025',
    title: '120+ proyek selesai',
    desc: 'Dipercaya oleh startup hingga bisnis menengah dari berbagai industri.',
  },
  {
    year: 'Sekarang',
    title: 'Terus belajar',
    desc: 'Fokus kami tetap sama: solusi yang dipakai, bukan sekadar dipajang.',
  },
]

const values = [
  {
    title: 'Jujur soal proses',
    desc: 'Kalau ada kendala atau timeline meleset, kami sampaikan lebih dulu — bukan diam-diam mengejar deadline dengan kualitas seadanya.',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>',
  },
  {
    title: 'Mendengar dulu, baru merancang',
    desc: 'Kami tanya siapa target pengguna dan apa masalah sebenarnya, sebelum menyentuh moodboard atau baris kode pertama.',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 10h8M8 14h5"/><path d="M21 12c0 4.4-4 8-9 8-1.2 0-2.4-.2-3.4-.6L3 21l1.7-4.3C3.6 15.4 3 13.8 3 12c0-4.4 4-8 9-8s9 3.6 9 8z"/></svg>',
  },
  {
    title: 'Bukan template yang dipaksakan',
    desc: 'Setiap desain dan struktur kode kami sesuaikan dengan kebutuhan bisnis Anda, bukan hasil copy-paste dari proyek sebelumnya.',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><path d="M14 17.5h7"/></svg>',
  },
  {
    title: 'Berorientasi pada pemakaian nyata',
    desc: 'Tolok ukur keberhasilan kami bukan tampilan yang bagus di portofolio, tapi apakah tim Anda benar-benar memakainya.',
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 17l6-6 4 4 8-8"/><path d="M17 7h4v4"/></svg>',
  },
]

const process = [
  {
    title: 'Discovery',
    desc: 'Memahami bisnis, target pengguna, dan masalah yang sebenarnya ingin diselesaikan.',
  },
  {
    title: 'Riset & Strategi',
    desc: 'Merumuskan pendekatan dan struktur yang paling masuk akal untuk kebutuhan Anda.',
  },
  {
    title: 'Desain',
    desc: 'Merancang tampilan dan alur yang sesuai identitas brand serta mudah dipakai.',
  },
  {
    title: 'Development',
    desc: 'Membangun dengan kode yang rapi, terukur, dan siap dikembangkan ke depan.',
  },
  {
    title: 'Peluncuran & Support',
    desc: 'Deploy produk ke pengguna nyata, dan tetap mendampingi setelah proyek selesai.',
  },
]

onMounted(async () => {
  await nextTick()

  const els = pageRoot.value ? pageRoot.value.querySelectorAll('.reveal') : []

  // Kalau user minta reduced motion, langsung tampilkan semua tanpa animasi.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    els.forEach((el) => el.classList.add('is-visible'))
    return
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
  )

  els.forEach((el) => observer.observe(el))
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

<style scoped>
/* This page assumes the brand tokens & base classes (--color-*, .container, .section,
   .btn, .btn-primary, .btn-secondary, .eyebrow) are already defined globally per the
   project's shared stylesheet. Only page-specific styles for Tentang Kami live here. */

.about-page {
  background: var(--color-bg);
  /* Wider container just for this page — doesn't touch the shared
     --container-width token used elsewhere, so other pages are unaffected. */
  --container-width: 1320px;
}

.eyebrow__dot {
  display: inline-block;
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--color-red);
  box-shadow: 0 0 0 3px rgba(235,43,12,0.18);
  margin-right: 8px;
}

/* ---------- SCROLL-REVEAL ANIMATION ---------- */
.reveal {
  opacity: 0;
  transition: opacity .7s cubic-bezier(.22,.61,.36,1), transform .7s cubic-bezier(.22,.61,.36,1);
  transition-delay: var(--reveal-delay, 0ms);
  will-change: opacity, transform;
}
.reveal--up { transform: translateY(28px); }
.reveal--left { transform: translateX(-24px); }
.reveal--fade { transform: none; }
.reveal--scale { transform: scale(.96); }

.reveal.is-visible {
  opacity: 1;
  transform: none;
}

@media (prefers-reduced-motion: reduce) {
  .reveal { transition: none !important; }
}

/* ---------- HERO ---------- */
.about-hero {
  border-bottom: 1px solid var(--color-border);
  overflow: hidden;
}
.about-hero__grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  align-items: stretch;
  min-height: 520px;
}
.about-hero__intro {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 104px 24px 72px;
}
.about-hero__since {
  display: inline-block;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: .06em;
  text-transform: uppercase;
  color: var(--color-deep-orange);
  margin-bottom: 14px;
}
.about-hero__title {
  font-size: clamp(30px, 3.6vw, 44px);
  letter-spacing: -0.01em;
  margin-bottom: 16px;
  max-width: 460px;
}
.about-hero__desc {
  font-size: 16.5px;
  color: var(--color-text-secondary);
  max-width: 440px;
  margin-bottom: 32px;
}

.about-hero__facts {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
}
.fact { display: flex; flex-direction: column; gap: 2px; }
.fact strong { font-family: var(--font-heading); font-size: 24px; font-weight: 700; color: var(--color-red); line-height: 1; }
.fact span { font-size: 12.5px; color: var(--color-text-secondary); }

.about-hero__media {
  position: relative;
  min-height: 320px;
}
.about-hero__media img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.about-hero__media::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(
    90deg,
    var(--color-bg) 0%,
    var(--color-bg) 6%,
    rgba(250,250,250,0.85) 16%,
    rgba(250,250,250,0.6) 26%,
    rgba(250,250,250,0.35) 38%,
    rgba(250,250,250,0.15) 50%,
    transparent 64%
  );
  pointer-events: none;
}

@media (max-width: 860px) {
  .about-hero__grid { grid-template-columns: 1fr; }
  .about-hero__media { min-height: 260px; order: -1; }
  .about-hero__media::before { background: none; }
  .about-hero__intro { padding: 48px 24px; }
}

@media (max-width: 380px) {
  .about-hero__intro { padding: 36px 18px; }
  .about-hero__facts { gap: 20px; }
  .fact strong { font-size: 20px; }
}

/* ---------- STORY + TIMELINE ---------- */
.story { padding: 96px 0; }
.story__inner {
  display: grid;
  grid-template-columns: minmax(0, 420px) minmax(0, 1fr);
  gap: 64px;
  align-items: start;
}
.story__text h2 { font-size: clamp(24px, 2.8vw, 30px); margin: 14px 0 18px; }
.story__text p { color: var(--color-text-secondary); font-size: 15.5px; margin-bottom: 16px; }
.story__text p:last-child { margin-bottom: 0; }

.story__timeline {
  display: flex;
  flex-direction: column;
}
.timeline-item {
  display: grid;
  grid-template-columns: 52px 20px 1fr;
  column-gap: 14px;
  padding-bottom: 30px;
  position: relative;
}
.timeline-item:last-child { padding-bottom: 0; }

.timeline-item__year {
  grid-column: 1;
  text-align: right;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 13px;
  color: var(--color-deep-orange);
  letter-spacing: .02em;
  padding-top: 2px;
  white-space: nowrap;
}

.timeline-item__marker {
  grid-column: 2;
  position: relative;
  display: flex;
  justify-content: center;
}
.timeline-item__marker::before {
  content: '';
  position: absolute;
  top: 3px;
  width: 12px; height: 12px;
  border-radius: 50%;
  background: var(--color-surface);
  border: 2px solid var(--color-red);
  z-index: 1;
}
.timeline-item__marker::after {
  content: '';
  position: absolute;
  top: 3px;
  bottom: -30px;
  width: 2px;
  background: linear-gradient(180deg, var(--color-orange), var(--color-red));
  opacity: .5;
}
.timeline-item:last-child .timeline-item__marker::after { display: none; }

.timeline-item__content {
  grid-column: 3;
  padding-top: 0;
}
.timeline-item__content h3 {
  font-size: 16.5px;
  margin-bottom: 4px;
}
.timeline-item__content p {
  font-size: 14px;
  color: var(--color-text-secondary);
  margin: 0;
}

@media (max-width: 1100px) {
  .story__inner { gap: 40px; }
}

@media (max-width: 860px) {
  .story__inner { grid-template-columns: 1fr; gap: 44px; }
  .story { padding: 64px 0; }
}

@media (max-width: 420px) {
  .timeline-item { grid-template-columns: 40px 16px 1fr; column-gap: 10px; }
  .timeline-item__year { font-size: 11.5px; }
}

/* ---------- VALUES ---------- */
.values { padding: 96px 0; background: var(--color-surface); border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border); }
.values__head { max-width: 560px; margin-bottom: 44px; }
.values__head h2 { font-size: clamp(24px, 2.8vw, 30px); margin-top: 14px; }

.values__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
@media (max-width: 980px) { .values__grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 560px) { .values__grid { grid-template-columns: 1fr; } }

.value-card {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 26px 22px;
  transition: transform .18s ease, box-shadow .18s ease;
}
.value-card:hover { transform: translateY(-4px); box-shadow: 0 20px 36px -26px rgba(26,26,26,0.28); }
.value-card__icon {
  width: 44px; height: 44px;
  border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  color: var(--color-red);
  background: rgba(235,43,12,0.08);
  margin-bottom: 16px;
}
.value-card h3 { font-size: 15.5px; margin-bottom: 8px; }
.value-card p { font-size: 13.5px; color: var(--color-text-secondary); }

@media (max-width: 640px) {
  .values { padding: 64px 0; }
  .value-card { padding: 22px 18px; }
}

/* ---------- PROCESS ---------- */
.process { padding: 96px 0; }
.process__head { max-width: 620px; margin-bottom: 48px; }
.process__head h2 { font-size: clamp(24px, 2.8vw, 30px); margin-top: 14px; }

.process__row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  position: relative;
}
.process__row::before {
  content: '';
  position: absolute;
  top: 22px;
  left: 4%;
  right: 4%;
  height: 2px;
  background: linear-gradient(90deg, var(--color-yellow), var(--color-orange), var(--color-deep-orange), var(--color-red));
  opacity: .5;
  z-index: 0;
}
@media (max-width: 980px) {
  .process__row { grid-template-columns: 1fr 1fr; }
  .process__row::before { display: none; }
}
@media (max-width: 560px) {
  .process__row { grid-template-columns: 1fr; }
  .process { padding: 64px 0; }
}

.process-step { position: relative; z-index: 1; }
.process-step__num {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 15px;
  color: var(--color-surface);
  background: var(--color-red);
  width: 44px; height: 44px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  margin-bottom: 16px;
}
.process-step h3 { font-size: 15.5px; margin-bottom: 8px; }
.process-step p { font-size: 13.5px; color: var(--color-text-secondary); }

/* ---------- CTA ---------- */
.about-cta {
  margin: 0 24px 96px;
  max-width: calc(var(--container-width) - 48px);
  margin-left: auto;
  margin-right: auto;
  border-radius: 24px;
  background: linear-gradient(120deg, var(--color-red), var(--color-deep-orange) 60%, var(--color-orange));
  padding: 64px 40px;
}
.about-cta__inner {
  max-width: 520px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
}
.about-cta__inner h2 { font-size: clamp(24px, 3.2vw, 32px); color: #fff; }
.about-cta__inner p { color: rgba(255,255,255,0.85); margin-bottom: 10px; }
.about-cta .btn-primary { background: #fff; color: var(--color-red); box-shadow: none; }
.about-cta .btn-primary:hover { opacity: .9; }
.about-cta .btn__arrow { transition: transform .15s ease; }
.about-cta .btn-primary:hover .btn__arrow { transform: translateX(3px); }

@media (max-width: 560px) {
  .about-cta { margin: 0 16px 64px; padding: 44px 24px; border-radius: 18px; }
}
</style>