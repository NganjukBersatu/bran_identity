<template>
  <main class="solution-page">
    <!-- ============ HERO (dengan foto) ============ -->
    <section class="hero">
      <div class="hero-media" aria-hidden="true">
        <img
          src="/team/team-4.jpg"
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
          <span class="breadcrumb-current">Custom Software Development</span>
        </nav>

        <div class="hero-copy">
          <h1 class="hero-title reveal" data-reveal="fade-up" data-delay="80">
            Custom<br />Software Development
          </h1>
          <p class="hero-lead reveal" data-reveal="fade-up" data-delay="160">
            Perangkat lunak yang dirancang khusus mengikuti alur kerja bisnis
            Anda — bukan menyesuaikan bisnis dengan sistem, tapi sebaliknya.
          </p>
          <p class="hero-desc reveal" data-reveal="fade-up" data-delay="220">
            Kami membangun sistem custom secara end-to-end: mulai dari analisis
            proses bisnis, rancangan arsitektur, penulisan kode, hingga
            implementasi dan dukungan berkelanjutan — dengan komunikasi yang
            transparan di setiap tahap.
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
          <h2>Solusi Custom Software yang Kami Sediakan</h2>
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
            Proses yang terstruktur, dari analisis kebutuhan hingga implementasi,
            agar sistem yang dibangun benar-benar sesuai kebutuhan bisnis Anda.
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
          <span class="eyebrow">Tech Stack</span>
          <h2>Teknologi yang Kami Andalkan</h2>
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
            Kami tidak hanya menulis kode — kami membangun sistem yang bisa
            diandalkan untuk mendukung pertumbuhan bisnis jangka panjang.
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
          <h2>Siap Membangun Sistem Anda?</h2>
          <p>Ceritakan kebutuhan Anda, tim kami siap membantu dari analisis hingga implementasi.</p>
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
    title: 'Enterprise Software Development',
    desc: 'Solusi perangkat lunak skala enterprise yang dirancang sesuai proses bisnis Anda.',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>',
  },
  {
    index: '02',
    title: 'System Analysis & Architecture',
    desc: 'Analisis kebutuhan mendalam dan rancangan arsitektur sistem yang solid dan skalabel.',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="5" r="2.2"/><circle cx="5" cy="19" r="2.2"/><circle cx="19" cy="19" r="2.2"/><path d="M12 7.2v4M12 11.2 6.5 17M12 11.2 17.5 17"/></svg>',
  },
  {
    index: '03',
    title: 'Workflow Automation',
    desc: 'Otomatisasi proses bisnis manual untuk meningkatkan efisiensi operasional tim Anda.',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 1l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3"/></svg>',
  },
  {
    index: '04',
    title: 'Legacy System Modernization',
    desc: 'Migrasi dan modernisasi sistem lama ke teknologi terkini tanpa mengganggu operasional.',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 2v6h-6M3 12a9 9 0 0 1 15-6.7L21 8M3 22v-6h6M21 12a9 9 0 0 1-15 6.7L3 16"/></svg>',
  },
  {
    index: '05',
    title: 'Custom Database Design',
    desc: 'Rancangan struktur data yang efisien, aman, dan siap menampung pertumbuhan data Anda.',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>',
  },
  {
    index: '06',
    title: 'System Integration',
    desc: 'Menghubungkan berbagai sistem internal Anda menjadi satu ekosistem yang terintegrasi.',
    icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 17H7A5 5 0 0 1 7 7h2M15 7h2a5 5 0 1 1 0 10h-2M8 12h8"/></svg>',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Planning',
    desc: 'Menggali proses bisnis, kendala operasional, dan menyusun rencana pengembangan yang jelas.',
  },
  {
    number: '02',
    title: 'System Design',
    desc: 'Merancang arsitektur sistem dan alur data yang sesuai kebutuhan dan skala bisnis Anda.',
  },
  {
    number: '03',
    title: 'Development',
    desc: 'Menulis kode yang bersih, teruji, dan dibangun dengan teknologi yang tepat guna.',
  },
  {
    number: '04',
    title: 'Testing & Deployment',
    desc: 'Pengujian menyeluruh sebelum sistem diimplementasikan ke lingkungan produksi.',
  },
]

const techStack = ['Python', 'Java', '.NET', 'Node.js', 'PostgreSQL', 'Docker', 'Kubernetes']

const whyPoints = [
  {
    title: 'Kode Bersih & Terstruktur',
    desc: 'Dibangun dengan standar coding yang rapi sehingga mudah dikembangkan ke depannya.',
  },
  {
    title: 'Skalabilitas Jangka Panjang',
    desc: 'Arsitektur dirancang agar mampu bertumbuh mengikuti kebutuhan bisnis Anda.',
  },
  {
    title: 'Keamanan Data Terjamin',
    desc: 'Standar keamanan diterapkan di setiap lapisan sistem, dari database hingga akses pengguna.',
  },
  {
    title: 'Support Pasca Implementasi',
    desc: 'Pendampingan dan perbaikan tetap tersedia setelah sistem Anda berjalan.',
  },
]

const faqItems = [
  {
    q: 'Berapa lama waktu pengembangan software custom?',
    a: 'Tergantung kompleksitas sistem, umumnya 6-16 minggu mulai dari analisis hingga implementasi.',
  },
  {
    q: 'Apakah sistem bisa diintegrasikan dengan software yang sudah kami pakai?',
    a: 'Bisa. Kami merancang integrasi dengan sistem existing Anda selama tersedia akses API atau dokumentasi teknis.',
  },
  {
    q: 'Apakah kami memiliki hak penuh atas source code?',
    a: 'Ya, seluruh source code dan dokumentasi teknis menjadi milik Anda sepenuhnya setelah proyek selesai.',
  },
  {
    q: 'Apakah ada dukungan setelah sistem live?',
    a: 'Ada. Kami menyediakan periode support dan paket maintenance berkelanjutan sesuai kebutuhan.',
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