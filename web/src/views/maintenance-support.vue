<template>
  <main class="solution-page">
    <!-- ============ HERO (dengan foto) ============ -->
    <section class="hero">
      <div class="hero-media" aria-hidden="true">
        <img
          src="/team/team-3.jpg"
          alt=""
          class="hero-img"
          @error="onImgError"
        />
        <div v-if="imgFailed" class="hero-img-fallback"></div>
        <div class="hero-fade"></div>
      </div>

      <div class="container hero-inner">
        <nav class="breadcrumb reveal" data-reveal="fade-up">
          <RouterLink to="/solutions" class="breadcrumb-link">Solution</RouterLink>
          <span class="breadcrumb-sep">/</span>
          <span class="breadcrumb-current">Maintenance & Support</span>
        </nav>

        <div class="hero-copy">
          <h1 class="hero-title reveal" data-reveal="fade-up" data-delay="80">
            Maintenance<br />& Support
          </h1>
          <p class="hero-lead reveal" data-reveal="fade-up" data-delay="160">
            Sistem yang sudah live tetap butuh perhatian — kami menjaga
            aplikasi Anda tetap stabil, aman, dan berjalan lancar.
          </p>
          <p class="hero-desc reveal" data-reveal="fade-up" data-delay="220">
            Kami menangani proses maintenance secara end-to-end: mulai dari
            monitoring rutin, perbaikan bug, pembaruan keamanan, hingga backup
            dan pemulihan sistem — dengan komunikasi yang transparan di setiap tahap.
          </p>
        </div>

        <button class="scroll-cue reveal" data-reveal="fade-up" data-delay="300" @click="scrollToServices">
          <span>Layanan Kami</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </button>
      </div>
    </section>

    <!-- ============ SERVICES / SCOPE OF WORK ============ -->
    <section id="services" class="section services">
      <div class="container">
        <div class="section-head reveal" data-reveal="fade-up">
          <span class="eyebrow">Services</span>
          <h2>Solusi Maintenance & Support yang Kami Sediakan</h2>
        </div>

        <div class="services-grid">
          <article
            v-for="(item, i) in scopeItems"
            :key="item.title"
            class="service-card reveal"
            data-reveal="fade-up"
            :data-delay="(i % 3) * 100"
          >
            <span class="service-index">{{ item.index }}</span>
            <div class="service-icon" v-html="item.icon"></div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- ============ PROSES KERJA (timeline) ============ -->
    <section class="section process">
      <div class="container">
        <div class="section-head reveal" data-reveal="fade-up">
          <span class="eyebrow">Our Process</span>
          <h2>Bagaimana Kami Bekerja</h2>
          <p class="section-sub">
            Proses yang terstruktur, dari monitoring hingga pelaporan rutin,
            agar sistem Anda tetap berjalan tanpa gangguan.
          </p>
        </div>

        <div class="timeline">
          <div class="timeline-line" aria-hidden="true">
            <div class="timeline-line-fill reveal" data-reveal="grow-line"></div>
          </div>

          <div
            v-for="(step, i) in processSteps"
            :key="step.title"
            class="timeline-step reveal"
            data-reveal="fade-up"
            :data-delay="i * 120"
          >
            <span class="timeline-dot">{{ step.number }}</span>
            <h3>{{ step.title }}</h3>
            <p>{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ TECH STACK ============ -->
    <section class="section tech">
      <div class="container">
        <div class="section-head reveal" data-reveal="fade-up">
          <span class="eyebrow">Tools</span>
          <h2>Tools yang Kami Andalkan</h2>
        </div>
        <div class="tech-row reveal" data-reveal="fade-up" data-delay="100">
          <span v-for="tech in techStack" :key="tech" class="tech-badge">{{ tech }}</span>
        </div>
      </div>
    </section>

    <!-- ============ WHY US ============ -->
    <section class="section why">
      <div class="container why-grid">
        <div class="why-copy reveal" data-reveal="fade-up">
          <span class="eyebrow">Kenapa Pilih Kami</span>
          <h2>Dibangun dengan Standar yang Kami Pegang Teguh</h2>
          <p class="section-sub">
            Kami tidak hanya menunggu masalah muncul — kami memantau secara
            aktif agar sistem Anda tetap andal setiap hari.
          </p>
        </div>

        <div class="why-list">
          <div
            v-for="(point, i) in whyPoints"
            :key="point.title"
            class="why-item reveal"
            data-reveal="fade-up"
            :data-delay="i * 80"
          >
            <span class="why-check">✓</span>
            <div>
              <h4>{{ point.title }}</h4>
              <p>{{ point.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ FAQ ============ -->
    <section class="section faq">
      <div class="container">
        <div class="section-head reveal" data-reveal="fade-up">
          <span class="eyebrow">FAQ</span>
          <h2>Pertanyaan yang Sering Ditanyakan</h2>
        </div>

        <div class="faq-list reveal" data-reveal="fade-up" data-delay="100">
          <div
            v-for="(item, i) in faqItems"
            :key="item.q"
            class="faq-item"
            :class="{ 'is-open': openFaq === i }"
          >
            <button class="faq-question" @click="toggleFaq(i)" :aria-expanded="openFaq === i">
              {{ item.q }}
              <span class="faq-icon">{{ openFaq === i ? '−' : '+' }}</span>
            </button>
            <div class="faq-answer" :style="{ maxHeight: openFaq === i ? '200px' : '0px' }">
              <p>{{ item.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ CTA AKHIR (satu-satunya tombol Hubungi Kami) ============ -->
    <section class="section cta-final">
      <div class="container cta-final-inner reveal" data-reveal="fade-up">
        <div class="cta-text">
          <h2>Siap Menjaga Sistem Anda Tetap Andal?</h2>
          <p>Ceritakan kebutuhan Anda, tim kami siap membantu dengan paket maintenance yang sesuai.</p>
        </div>
        <RouterLink :to="{ name: 'Contact' }" class="btn btn-primary btn-cta">
          Hubungi Kami
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const imgFailed = ref(false)
function onImgError() {
  imgFailed.value = true
}

function scrollToServices() {
  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
}

const scopeItems = [
  {
    index: '01',
    title: 'Bug Fixing & Troubleshooting',
    desc: 'Menemukan dan memperbaiki masalah pada sistem secara cepat dan tepat sasaran.',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="8" y="6" width="8" height="12" rx="4"/><path d="M8 10H4M8 14H4M16 10h4M16 14h4M12 3v3M9 4l1.5 2M15 4l-1.5 2"/></svg>',
  },
  {
    index: '02',
    title: 'Performance Optimization',
    desc: 'Meningkatkan kecepatan dan efisiensi sistem agar tetap responsif seiring bertambahnya beban.',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z"/></svg>',
  },
  {
    index: '03',
    title: 'Security Patching & Updates',
    desc: 'Pembaruan berkala untuk menutup celah keamanan dan menjaga sistem tetap up to date.',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>',
  },
  {
    index: '04',
    title: 'Server Monitoring',
    desc: 'Pemantauan kondisi server dan aplikasi secara real-time untuk mencegah downtime.',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
  },
  {
    index: '05',
    title: 'Backup & Disaster Recovery',
    desc: 'Cadangan data terjadwal dan rencana pemulihan agar bisnis Anda tetap berjalan saat insiden.',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 3v6h-6"/></svg>',
  },
  {
    index: '06',
    title: 'Paket Support Berbasis SLA',
    desc: 'Dukungan teknis dengan waktu respons terjamin sesuai tingkat prioritas kebutuhan Anda.',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'System Assessment',
    desc: 'Meninjau kondisi sistem saat ini dan menyusun rencana maintenance yang sesuai.',
  },
  {
    number: '02',
    title: 'Monitoring Setup',
    desc: 'Memasang alat pemantauan agar potensi masalah dapat terdeteksi lebih awal.',
  },
  {
    number: '03',
    title: 'Ongoing Maintenance',
    desc: 'Melakukan perbaikan, pembaruan, dan optimasi secara rutin dan terjadwal.',
  },
  {
    number: '04',
    title: 'Reporting & Review',
    desc: 'Memberikan laporan berkala mengenai kondisi sistem dan rekomendasi perbaikan.',
  },
]

const techStack = ['New Relic', 'Datadog', 'Cloudflare', 'PagerDuty', 'GitHub', 'Jira']

const whyPoints = [
  {
    title: 'Respons Cepat',
    desc: 'Tim kami sigap menangani laporan masalah sesuai kesepakatan waktu respons.',
  },
  {
    title: 'Monitoring Proaktif',
    desc: 'Masalah potensial terdeteksi lebih awal sebelum berdampak ke pengguna Anda.',
  },
  {
    title: 'Laporan Rutin & Transparan',
    desc: 'Anda menerima laporan berkala mengenai kondisi dan performa sistem Anda.',
  },
  {
    title: 'Paket Sesuai Kebutuhan',
    desc: 'Skema maintenance yang fleksibel, disesuaikan dengan skala dan anggaran Anda.',
  },
]

const faqItems = [
  {
    q: 'Apakah kalian bisa maintenance sistem yang bukan dibangun oleh tim kami?',
    a: 'Bisa. Kami akan melakukan audit awal terlebih dahulu untuk memahami sistem sebelum memulai maintenance.',
  },
  {
    q: 'Berapa waktu respons untuk laporan masalah mendesak?',
    a: 'Waktu respons ditentukan berdasarkan paket SLA yang dipilih, mulai dari hitungan jam untuk kasus kritikal.',
  },
  {
    q: 'Apakah backup data dilakukan secara otomatis?',
    a: 'Ya, kami menjadwalkan backup otomatis secara berkala sesuai kebutuhan dan tingkat kritikalitas data Anda.',
  },
  {
    q: 'Apakah ada kontrak jangka panjang?',
    a: 'Kami menyediakan paket bulanan maupun tahunan, disesuaikan dengan preferensi dan kebutuhan Anda.',
  },
]

const openFaq = ref(null)
function toggleFaq(i) {
  openFaq.value = openFaq.value === i ? null : i
}

let observer
onMounted(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const els = document.querySelectorAll('.reveal')

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

<style scoped>
.solution-page { overflow-x: hidden; }

/* ---------- reveal animation ---------- */
.reveal {
  opacity: 0;
  transition: opacity .6s ease, transform .6s ease;
}
.reveal[data-reveal="fade-up"] { transform: translateY(28px); }
.reveal.is-visible { opacity: 1; transform: translateY(0); }
.reveal[data-reveal="grow-line"] { transition: transform .9s ease; transform: scaleY(0); }
.reveal[data-reveal="grow-line"].is-visible { transform: scaleY(1); }

/* ---------- shared ---------- */
.section-head { max-width: 620px; margin: 0 0 48px; }
.section-head h2 { font-size: clamp(26px, 3.4vw, 36px); margin-top: 12px; }
.section-sub { color: var(--color-text-secondary); margin-top: 14px; font-size: 16px; }

/* ==================== HERO ==================== */
.hero {
  position: relative;
  min-height: 640px;
  display: flex;
  align-items: flex-end;
  padding-bottom: 64px;
  overflow: hidden;
  background: var(--color-bg);
}
.hero-media {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: right center;
  -webkit-mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,.35) 30%, #000 62%);
  mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,.35) 30%, #000 62%);
}
.hero-img-fallback {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 30% 20%, rgba(255,255,255,.35), transparent 45%),
    radial-gradient(circle at 75% 70%, rgba(255,255,255,.2), transparent 40%),
    linear-gradient(120deg, var(--color-yellow), var(--color-orange) 55%, var(--color-deep-orange));
  -webkit-mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,.35) 30%, #000 62%);
  mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,.35) 30%, #000 62%);
}
.hero-fade {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, var(--color-bg) 0%, rgba(250,250,250,.55) 34%, transparent 60%);
}
.hero-inner {
  position: relative;
  z-index: 1;
  padding-top: 64px;
  width: 100%;
}
.breadcrumb {
  display: flex; align-items: center; gap: 8px;
  font-size: 14px; color: var(--color-text-secondary);
  margin-bottom: 40px;
}
.breadcrumb-link { color: var(--color-text-secondary); text-decoration: none; }
.breadcrumb-link:hover { color: var(--color-deep-orange); }
.breadcrumb-current { color: var(--color-deep-orange); font-weight: 600; }

.hero-copy { max-width: 620px; }
.hero-title {
  font-size: clamp(44px, 7vw, 84px);
  font-weight: 700;
  line-height: 1.02;
  letter-spacing: -.02em;
  color: var(--color-text);
}
.hero-lead {
  font-size: clamp(18px, 2vw, 22px);
  font-family: var(--font-heading);
  font-weight: 600;
  margin-top: 24px;
  color: var(--color-text);
}
.hero-desc {
  font-size: 16px;
  color: var(--color-text-secondary);
  margin-top: 18px;
  max-width: 520px;
}
.scroll-cue {
  margin-top: 48px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 14px;
  color: var(--color-deep-orange);
}
.scroll-cue svg { animation: bob 1.8s ease-in-out infinite; }
@keyframes bob {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(4px); }
}

/* ==================== SERVICES ==================== */
.services { background: var(--color-surface); }
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.service-card {
  position: relative;
  padding: 30px 26px;
  border-radius: var(--radius);
  border: 1px solid var(--color-border);
  transition: border-color .25s ease, transform .25s ease, box-shadow .25s ease;
}
.service-card:hover {
  border-color: var(--color-deep-orange);
  transform: translateY(-6px);
  box-shadow: 0 20px 40px -26px rgba(231, 81, 25, .4);
}
.service-index {
  position: absolute;
  top: 20px; right: 24px;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 13px;
  color: var(--color-border);
}
.service-icon {
  width: 50px; height: 50px;
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  background: var(--color-yellow);
  color: var(--color-deep-orange);
  margin-bottom: 18px;
}
.service-card h3 { font-size: 17px; padding-right: 30px; }
.service-card p { margin-top: 8px; color: var(--color-text-secondary); font-size: 14.5px; }

/* ==================== PROCESS TIMELINE ==================== */
.timeline {
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  padding-top: 12px;
}
.timeline-line {
  position: absolute;
  top: 22px;
  left: 0; right: 0;
  height: 2px;
  background: var(--color-border);
  transform-origin: left center;
}
.timeline-line-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--color-orange), var(--color-red));
  transform-origin: left center;
}
.timeline-step { position: relative; padding-top: 56px; }
.timeline-dot {
  position: absolute;
  top: 0; left: 0;
  width: 44px; height: 44px;
  border-radius: 50%;
  background: var(--color-surface);
  border: 2px solid var(--color-orange);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 14px;
  color: var(--color-deep-orange);
}
.timeline-step h3 { font-size: 17px; }
.timeline-step p { margin-top: 8px; color: var(--color-text-secondary); font-size: 14.5px; }

/* ==================== TECH ==================== */
.tech-row { display: flex; flex-wrap: wrap; gap: 12px; }
.tech-badge {
  padding: 10px 20px;
  border-radius: 999px;
  border: 1.5px solid var(--color-border);
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 14px;
  transition: border-color .2s ease, color .2s ease;
}
.tech-badge:hover { border-color: var(--color-red); color: var(--color-red); }

/* ==================== WHY US ==================== */
.why { background: var(--color-surface); }
.why-grid {
  display: grid;
  grid-template-columns: .85fr 1.15fr;
  gap: 56px;
  align-items: start;
}
.why-copy h2 { margin-top: 12px; font-size: clamp(26px, 3.2vw, 34px); }
.why-list { display: flex; flex-direction: column; gap: 20px; }
.why-item {
  display: flex; gap: 16px;
  padding: 20px;
  border-radius: var(--radius);
  border: 1px solid var(--color-border);
}
.why-check {
  flex-shrink: 0;
  width: 28px; height: 28px;
  border-radius: 50%;
  background: var(--color-red);
  color: #fff;
  display: flex; align-items: center; justify-content: center;
  font-size: 14px; font-weight: 700;
}
.why-item h4 { font-size: 15.5px; }
.why-item p { margin-top: 6px; color: var(--color-text-secondary); font-size: 14px; }

/* ==================== FAQ ==================== */
.faq-list { max-width: 760px; }
.faq-item { border-bottom: 1px solid var(--color-border); }
.faq-question {
  width: 100%;
  display: flex; align-items: center; justify-content: space-between; gap: 16px;
  padding: 20px 0;
  background: none; border: none; text-align: left; cursor: pointer;
  font-family: var(--font-heading); font-weight: 600; font-size: 16px;
  color: var(--color-text);
}
.faq-item.is-open .faq-question { color: var(--color-deep-orange); }
.faq-icon { flex-shrink: 0; font-size: 20px; color: var(--color-orange); }
.faq-answer { overflow: hidden; max-height: 0; transition: max-height .35s ease; }
.faq-answer p { padding-bottom: 20px; color: var(--color-text-secondary); font-size: 15px; }

/* ==================== CTA FINAL (satu-satunya CTA) ==================== */
.cta-final { background: var(--color-surface); border-top: 1px solid var(--color-border); }
.cta-final-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
  padding: 44px 48px;
  border-radius: var(--radius);
  background: linear-gradient(120deg, var(--color-deep-orange), var(--color-red));
}
.cta-text h2 { color: #fff; font-size: clamp(24px, 3vw, 30px); }
.cta-text p { color: rgba(255,255,255,.9); margin-top: 8px; font-size: 15px; }
.btn-cta {
  background: #fff;
  color: var(--color-red);
  white-space: nowrap;
}
.btn-cta:hover { opacity: .92; }

/* =========================================================
   RESPONSIVE
========================================================= */
@media (max-width: 960px) {
  .services-grid { grid-template-columns: repeat(2, 1fr); }
  .timeline { grid-template-columns: repeat(2, 1fr); row-gap: 40px; }
  .timeline-line { display: none; }
  .why-grid { grid-template-columns: 1fr; }
  .hero { min-height: 560px; }
}

@media (max-width: 640px) {
  .section { padding: 56px 0; }
  .hero { min-height: 480px; padding-bottom: 40px; }
  .hero-img, .hero-img-fallback {
    -webkit-mask-image: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,.25) 25%, #000 55%);
    mask-image: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,.25) 25%, #000 55%);
    object-position: center 30%;
  }
  .hero-fade { background: linear-gradient(to bottom, var(--color-bg) 0%, rgba(250,250,250,.5) 30%, transparent 55%); }
  .services-grid { grid-template-columns: 1fr; }
  .timeline { grid-template-columns: 1fr; }
  .cta-final-inner { flex-direction: column; align-items: flex-start; padding: 32px 24px; }
  .btn-cta { width: 100%; text-align: center; }
}

@media (prefers-reduced-motion: reduce) {
  .reveal { transition: none; }
  .scroll-cue svg { animation: none; }
}
</style>