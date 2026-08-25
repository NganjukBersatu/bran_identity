<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'

const props = defineProps({
  limit: { type: Number, default: null },
  showViewAll: { type: Boolean, default: false },
})

// ⚠️ Data ini DISAMAKAN dengan router/solutions.js supaya Home & halaman
// Solutions (/solutions) konsisten. Teks untuk "Cloud & DevOps" dan
// "Maintenance & Support" adalah PERKIRAAN — cek lagi ke router/solutions.js
// aslimu dan sesuaikan kalau teksnya berbeda.
const services = [
  {
    number: '01',
    icon: 'code',
    title: 'Custom Software Development',
    slug: 'custom-software',
    desc: 'Aplikasi bisnis yang dirancang mengikuti proses kerja tim Anda, bukan template yang dipaksakan supaya cocok.',
  },
  {
    number: '02',
    icon: 'web',
    title: 'Web Development',
    slug: 'web-development',
    desc: 'Company profile, e-commerce, sampai web app — dibangun cepat, ringan, dan mudah Anda kelola sendiri.',
  },
  {
    number: '03',
    icon: 'mobile',
    title: 'Mobile App Development',
    slug: 'mobile-app',
    desc: 'Aplikasi Android, iOS, atau cross-platform yang tetap responsif walau dipakai ribuan pengguna sekaligus.',
  },
  {
    number: '04',
    icon: 'design',
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    desc: 'Desain antarmuka berdasarkan riset perilaku pengguna nyata, supaya produk enak dipakai sejak hari pertama.',
  },
  {
    number: '05',
    icon: 'cloud',
    title: 'Cloud & DevOps',
    slug: 'cloud-devops',
    desc: 'Infrastruktur cloud yang skalabel dan proses deployment otomatis, supaya rilis produk lebih cepat dan stabil.',
  },
  {
    number: '06',
    icon: 'headset',
    title: 'Maintenance & Support',
    slug: 'maintenance-support',
    desc: 'Pemeliharaan rutin, perbaikan bug, dan dukungan teknis berkelanjutan setelah produk Anda live.',
  },
]

const displayedServices = props.limit ? services.slice(0, props.limit) : services

// ===== Animasi masuk (reveal per-kartu, stagger) =====
const sectionEl = ref(null)
let observer = null

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

function observeReveals() {
  const els = sectionEl.value ? sectionEl.value.querySelectorAll('.reveal') : []

  // Fallback: tanpa IntersectionObserver atau user minta reduced motion
  if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
    els.forEach((el) => el.classList.add('is-visible'))
    return
  }

  if (observer) observer.disconnect()

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
}

onMounted(async () => {
  await nextTick()
  observeReveals()
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

<template>
  <section id="layanan" class="services-section" ref="sectionEl">
    <div class="services-container">
      <div class="services-header">
        <p class="services-eyebrow reveal reveal--up">LAYANAN KAMI</p>
        <h2 class="reveal reveal--up" style="--reveal-delay: 80ms">
          Solusi Digital untuk <span>Bisnis Anda</span>
        </h2>
        <p class="services-description reveal reveal--up" style="--reveal-delay: 140ms">
          Kami menyediakan berbagai layanan pengembangan digital
          <br class="desktop-only" />
          yang disesuaikan dengan kebutuhan bisnis Anda.
        </p>
      </div>

      <div class="services-grid">
        <router-link
          v-for="(service, index) in displayedServices"
          :key="service.slug"
          :to="`/solutions/${service.slug}`"
          class="service-card reveal reveal--up"
          :style="{ '--reveal-delay': `${200 + index * 90}ms` }"
        >
          <div class="service-number">{{ service.number }}</div>
          <div class="card-decoration"></div>
          <div class="service-icon">
            <svg v-if="service.icon === 'code'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            <svg v-else-if="service.icon === 'web'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            <svg v-else-if="service.icon === 'mobile'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2" width="12" height="20" rx="2"/><line x1="11" y1="18" x2="13" y2="18"/></svg>
            <svg v-else-if="service.icon === 'design'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
            <svg v-else-if="service.icon === 'cloud'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
            <svg v-else-if="service.icon === 'headset'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14v-3a9 9 0 0 1 18 0v3"/><path d="M21 15a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h3zM3 15a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H3z"/></svg>
          </div>
          <div class="service-content">
            <h3>{{ service.title }}</h3>
            <div class="service-line"></div>
            <p>{{ service.desc }}</p>
            <span class="service-link">
              Selengkapnya <span>→</span>
            </span>
          </div>
          <div class="dot-pattern">
            <span v-for="n in 9" :key="n"></span>
          </div>
        </router-link>
      </div>

      <div class="services-cta reveal reveal--scale" style="--reveal-delay: 700ms">
        <div class="cta-decoration cta-decoration-1"></div>
        <div class="cta-decoration cta-decoration-2"></div>
        <div class="cta-icon">💬</div>
        <div class="cta-content">
          <h3>Punya project dalam pikiran?</h3>
          <p>Konsultasikan kebutuhan Anda secara gratis bersama tim kami.</p>
        </div>
        <a href="#" class="cta-button">Konsultasi Gratis <span>→</span></a>
      </div>

      <div v-if="showViewAll" class="view-all reveal reveal--up" style="--reveal-delay: 760ms">
        <router-link to="/solutions" class="view-all-button">Lihat Semua Layanan <span>→</span></router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  width: 100%;
  padding: 140px 20px 90px;
  background: #fffaf0;
  overflow: hidden;
  position: relative;
  z-index: 1;
}
.services-container {
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
}

/* ===== Animasi reveal (fade + slide up / scale), stagger ===== */
.reveal {
  opacity: 0;
  transition: opacity 0.7s cubic-bezier(.22,.61,.36,1), transform 0.7s cubic-bezier(.22,.61,.36,1);
  transition-delay: var(--reveal-delay, 0ms);
  will-change: opacity, transform;
}
.reveal--up { transform: translateY(28px); }
.reveal--scale { transform: scale(.96); }
.reveal.is-visible {
  opacity: 1;
  transform: none;
}
@media (prefers-reduced-motion: reduce) {
  .reveal { transition: none !important; opacity: 1 !important; transform: none !important; }
}

/* Header */
.services-header { text-align: center; margin-bottom: 48px; }
.services-eyebrow { margin: 0 0 12px; font-size: 14px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; color: #f93827; }
.services-header h2 { margin: 0; color: #15191f; font-size: clamp(28px, 4vw, 46px); line-height: 1.15; font-weight: 800; }
.services-header h2 span { color: #f15a24; }
.services-description { margin: 18px auto 0; max-width: 700px; color: #666; font-size: 16px; line-height: 1.7; }

/* Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
}

/* Card */
.service-card {
  position: relative;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  min-height: 300px;
  min-width: 0;
  padding: 32px 30px 28px;
  background: #fffdf8;
  border: 1px solid rgba(255, 164, 71, 0.55);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(180, 120, 40, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}
.service-card::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 3px; background: linear-gradient(90deg, #fcef91, #ffa447, #f93827); }

/* Matikan hover-transform di device tanpa hover (HP/tablet) supaya tidak "nyangkut" */
@media (hover: hover) and (pointer: fine) {
  .service-card:hover { transform: translateY(-8px); border-color: #ffa447; box-shadow: 0 18px 35px rgba(239, 91, 35, 0.15); }
  .service-card:hover .service-link { gap: 13px; }
  .service-card:hover .service-link span { transform: translateX(3px); }
  .cta-button:hover { transform: translateY(-3px); box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15); }
  .view-all-button:hover { background: #f15a24; color: white; }
}
/* Tetap beri feedback tap di touch device */
@media (hover: none) {
  .service-card:active { transform: scale(0.98); }
  .cta-button:active { transform: scale(0.97); }
}

.service-number { position: absolute; top: 0; right: 0; width: 58px; height: 52px; display: flex; align-items: center; justify-content: center; border-radius: 0 18px 0 18px; background: linear-gradient(135deg, #fcef91, #ffa447); color: #8e3b13; font-size: 16px; font-weight: 800; }

.service-icon { position: relative; z-index: 2; width: 70px; height: 70px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; border-radius: 50%; background: #fcef91; color: #f15a24; box-shadow: 0 8px 18px rgba(255, 164, 71, 0.18); flex-shrink: 0; }
.service-icon svg { width: 30px; height: 30px; flex-shrink: 0; }

.service-content { position: relative; z-index: 2; min-width: 0; }
.service-content h3 { margin: 0; color: #15191f; font-size: 20px; line-height: 1.3; font-weight: 750; }
.service-line { width: 36px; height: 3px; margin: 12px 0 14px; border-radius: 10px; background: linear-gradient(90deg, #f93827, #ffa447); }
.service-content p { margin: 0 0 22px; max-width: 290px; color: #666; font-size: 14px; line-height: 1.65; }

.service-link { display: inline-flex; align-items: center; gap: 9px; color: #f04b1f; font-size: 14px; font-weight: 700; transition: gap 0.2s ease; }
.service-link span { font-size: 19px; transition: transform 0.2s ease; }

.card-decoration { position: absolute; right: -55px; bottom: -65px; width: 160px; height: 160px; border-radius: 50%; background: rgba(255, 228, 166, 0.35); pointer-events: none; }
.card-decoration::after { content: ""; position: absolute; top: 35px; left: 35px; width: 90px; height: 90px; border-radius: 50%; background: rgba(255, 164, 71, 0.08); }

.dot-pattern { position: absolute; right: 18px; bottom: 18px; display: grid; grid-template-columns: repeat(3, 6px); gap: 6px; opacity: 0.55; }
.dot-pattern span { width: 6px; height: 6px; border-radius: 50%; background: #ffdca8; }

/* CTA */
.services-cta {
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 42px;
  padding: 30px 42px;
  border-radius: 20px;
  overflow: hidden;
  background: linear-gradient(105deg, #fcef91 0%, #ffa447 48%, #f93827 100%);
  box-shadow: 0 12px 30px rgba(242, 102, 35, 0.18);
}
.cta-decoration { position: absolute; border-radius: 50%; pointer-events: none; }
.cta-decoration-1 { width: 180px; height: 180px; right: 120px; top: -80px; background: rgba(255, 255, 255, 0.12); }
.cta-decoration-2 { width: 120px; height: 120px; right: 30px; bottom: -70px; background: rgba(255, 255, 255, 0.12); }

.cta-icon { position: relative; z-index: 2; flex-shrink: 0; width: 72px; height: 72px; display: flex; align-items: center; justify-content: center; margin-right: 25px; border-radius: 50%; background: rgba(255, 255, 255, 0.9); font-size: 30px; box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08); }

.cta-content { position: relative; z-index: 2; flex: 1; min-width: 0; }
.cta-content h3 { margin: 0 0 7px; color: #181818; font-size: 21px; font-weight: 800; }
.cta-content p { margin: 0; color: rgba(30, 30, 30, 0.75); font-size: 14px; line-height: 1.6; }

.cta-button { position: relative; z-index: 2; flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center; gap: 12px; min-width: 180px; padding: 15px 22px; border-radius: 10px; background: white; color: #f04b1f; font-size: 14px; font-weight: 800; text-decoration: none; box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1); transition: transform 0.25s ease, box-shadow 0.25s ease; }
.cta-button span { font-size: 19px; }

/* View all */
.view-all { margin-top: 35px; text-align: center; }
.view-all-button { display: inline-flex; align-items: center; gap: 10px; padding: 12px 25px; border: 1px solid #f15a24; border-radius: 9px; color: #f15a24; font-size: 14px; font-weight: 700; text-decoration: none; transition: all 0.25s ease; }
.view-all-button span { font-size: 18px; }

/* =====================================================
   RESPONSIVE
===================================================== */

/* Layar besar (>1400px): batasi biar tidak terlalu lebar */
@media (min-width: 1400px) {
  .services-container { max-width: 1280px; }
}

/* Desktop kecil / laptop */
@media (max-width: 1100px) {
  .services-grid { gap: 22px; }
  .service-content p { max-width: 100%; }
}

/* Tablet besar: 3 → 2 kolom */
@media (max-width: 950px) {
  .services-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 22px; }
  .services-cta { padding: 28px; }
}

/* Tablet kecil — transisi lebih halus sebelum ke 1 kolom */
@media (max-width: 768px) {
  .services-section { padding: 100px 18px 80px; }
  .service-card { min-height: 280px; padding: 30px 26px; }
  .service-icon { width: 66px; height: 66px; margin-bottom: 20px; }
  .service-icon svg { width: 27px; height: 27px; }
  .service-content p { max-width: 100%; }
}

/* Mobile besar (2 → 1 kolom lebih awal supaya kartu tidak terlalu sempit) */
@media (max-width: 600px) {
  .services-section { padding: 65px 16px; }
  .services-header { margin-bottom: 35px; }
  .services-header h2 { font-size: clamp(26px, 7vw, 32px); }
  .services-description { font-size: 14px; }
  .desktop-only { display: none; }

  .services-grid { grid-template-columns: 1fr; gap: 18px; }
  .service-card { min-height: auto; padding: 26px 24px; }
  .service-icon { width: 60px; height: 60px; margin-bottom: 16px; }
  .service-icon svg { width: 24px; height: 24px; }
  .service-content h3 { font-size: 19px; }
  .service-content p { font-size: 13.5px; margin-bottom: 18px; }
  .card-decoration { width: 110px; height: 110px; right: -40px; bottom: -45px; }
  .dot-pattern { display: none; }

  .services-cta { flex-direction: column; align-items: flex-start; padding: 26px 22px; text-align: left; }
  .cta-icon { width: 56px; height: 56px; margin: 0 0 18px; font-size: 22px; }
  .cta-content { margin-bottom: 22px; }
  .cta-content h3 { font-size: 19px; }
  .cta-content p { font-size: 13px; }
  .cta-button { width: 100%; min-width: 0; }
  .cta-decoration-1 { width: 140px; height: 140px; right: -30px; top: -60px; }
  .cta-decoration-2 { width: 90px; height: 90px; right: -20px; bottom: -50px; }

  .view-all-button { width: 100%; justify-content: center; }
}

/* Small mobile */
@media (max-width: 400px) {
  .services-header h2 { font-size: 24px; }
  .service-card { padding: 22px 20px; }
  .service-icon { width: 52px; height: 52px; margin-bottom: 14px; }
  .service-icon svg { width: 20px; height: 20px; }
  .service-number { width: 46px; height: 42px; font-size: 13px; }
  .service-content h3 { font-size: 16.5px; }
  .service-content p { font-size: 12.5px; margin-bottom: 14px; }
  .service-link { font-size: 13px; }
}

/* Extra small mobile */
@media (max-width: 360px) {
  .services-section { padding: 55px 12px; }
  .services-header h2 { font-size: 22px; }
  .service-card { padding: 20px 18px; }
  .cta-content h3 { font-size: 17px; }
}

/* Landscape / short viewport (mis. HP diputar) */
@media (max-height: 480px) and (orientation: landscape) {
  .services-section { padding: 60px 16px 50px; }
  .services-header { margin-bottom: 28px; }
}
</style>