<script setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick, watch } from 'vue'

// Ganti/isi dengan data project asli Anda.
// "domain" hanya teks dekoratif untuk address bar mockup.
const projects = ref([
  {
    title: 'Kopi Senja — Company Profile',
    category: 'Website',
    domain: 'kopisenja.id',
    desc: 'Landing page untuk brand kopi lokal, fokus pada storytelling & galeri produk.',
    accent: 'orange'
  },
  {
    title: 'RentCar Prima',
    category: 'Website',
    domain: 'rentcarprima.com',
    desc: 'Sistem booking mobil online lengkap dengan kalkulasi harga otomatis.',
    accent: 'red'
  },
  {
    title: 'Nutrix — Aplikasi Diet',
    category: 'Mobile App',
    domain: 'app.nutrix.id',
    desc: 'Aplikasi pelacak nutrisi harian dengan rekomendasi menu personal.',
    accent: 'orange-light'
  },
  {
    title: 'Bank Sinar Digital',
    category: 'Mobile App',
    domain: 'sinar.mobile',
    desc: 'Redesign UX aplikasi mobile banking, menekankan kecepatan transaksi.',
    accent: 'orange'
  },
  {
    title: 'Loka Studio Branding',
    category: 'Branding',
    domain: 'lokastudio.co',
    desc: 'Identitas visual lengkap untuk studio arsitektur interior.',
    accent: 'red'
  },
  {
    title: 'Warung Digital POS',
    category: 'Website',
    domain: 'warungdigital.app',
    desc: 'Sistem kasir & inventori berbasis web untuk UMKM.',
    accent: 'orange-light'
  }
])

const filters = ['Semua', 'Website', 'Mobile App', 'Branding']
const activeFilter = ref('Semua')

const filteredProjects = computed(() =>
  activeFilter.value === 'Semua'
    ? projects.value
    : projects.value.filter(p => p.category === activeFilter.value)
)

const stats = [
  { number: '40+', label: 'Project Selesai' },
  { number: '12', label: 'Industri Dilayani' },
  { number: '3', label: 'Tahun Pengalaman' }
]

// --- Efek muncul dari bawah saat discroll ---
// PENTING: setiap kali filter berubah, Vue membuat ulang elemen .reveal
// di DOM (v-for dengan data yang berbeda). Elemen baru ini tidak pernah
// otomatis di-observe oleh IntersectionObserver yang dibuat sekali saja
// di onMounted, sehingga tetap tak terlihat (opacity: 0) — itulah kenapa
// kartu "hilang" saat difilter dan tidak muncul lagi saat kembali ke "Semua".
//
// Solusinya: simpan observer di luar onMounted lalu panggil ulang fungsi
// setup-nya (via nextTick) setiap kali activeFilter berubah, supaya semua
// elemen .reveal yang baru dirender ikut ter-observe.
let observer = null

function setupRevealObserver() {
  // Elemen yang sudah pernah observer buat sebelumnya akan dibuat ulang
  // observer baru menyaring hanya yang belum kebagian class is-revealed
  if (observer) observer.disconnect()

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
  )

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
}

onMounted(() => {
  setupRevealObserver()
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})

// Setiap kali filter diganti, tunggu DOM selesai di-update (nextTick),
// baru pasang ulang observer ke elemen-elemen kartu yang baru dirender.
watch(activeFilter, async () => {
  await nextTick()
  setupRevealObserver()
})
</script>

<template>
  <div class="portfolio-page">
    <!-- Hero -->
    <section class="portfolio-hero">
      <div class="portfolio-hero__mesh" aria-hidden="true">
        <div class="mesh__orb mesh__orb--1"></div>
        <div class="mesh__orb mesh__orb--2"></div>
      </div>

      <div class="container portfolio-hero__grid">
        <div class="portfolio-hero__content reveal">
          <p class="eyebrow">Portofolio</p>

          <h1 class="portfolio-hero__title">
            Karya yang Sudah Kami <span class="highlight">Wujudkan</span>
          </h1>
          <p class="portfolio-hero__desc">
            Berikut beberapa project yang telah kami kerjakan untuk berbagai klien
            dari berbagai industri, mulai dari website company profile hingga
            aplikasi mobile.
          </p>

          <div class="stats-row">
            <div v-for="(s, i) in stats" :key="i" class="stat">
              <span class="stat__number">{{ s.number }}</span>
              <span class="stat__label">{{ s.label }}</span>
            </div>
          </div>
        </div>

        <!-- Visual hero: komposisi browser mockup + phone mockup + badge berlapis -->
        <div class="hero-visual reveal" aria-hidden="true" :style="{ transitionDelay: '0.15s' }">
          <div class="visual-glow"></div>

          <span class="deco-dot deco-dot--1"></span>
          <span class="deco-dot deco-dot--2"></span>
          <span class="deco-ring"></span>

          <!-- Phone mockup: mewakili sisi Mobile App -->
          <div class="device-phone">
            <div class="device-phone__notch"></div>
            <div class="device-phone__screen">
              <div class="device-phone__tile device-phone__tile--big"></div>
              <div class="device-phone__row">
                <span></span><span></span><span></span>
              </div>
              <div class="device-phone__row device-phone__row--thin">
                <span></span><span></span>
              </div>
            </div>
          </div>

          <!-- Browser mockup: mewakili sisi Website -->
          <div class="device-browser">
            <div class="device-browser__bar">
              <span class="dot dot--red"></span>
              <span class="dot dot--yellow"></span>
              <span class="dot dot--green"></span>
              <span class="device-browser__url">warungdigital.app</span>
            </div>
            <div class="device-browser__screen">
              <div class="thumb-row">
                <span class="thumb thumb--1"></span>
                <span class="thumb thumb--2"></span>
                <span class="thumb thumb--3"></span>
              </div>
              <div class="skeleton-line skeleton-line--w80"></div>
              <div class="skeleton-line skeleton-line--w50"></div>
            </div>
          </div>

          <div class="badge badge--rating">
            <span class="badge__stars">★★★★★</span>
            <span class="badge__text">4.9 dari 40+ project</span>
          </div>

          <div class="badge badge--check">
            <span class="badge__check">✓</span>
            <span class="badge__text">Project tepat waktu</span>
          </div>

          <div class="badge badge--clients">
            <div class="avatar-stack">
              <span class="avatar">K</span>
              <span class="avatar avatar--2">R</span>
              <span class="avatar avatar--3">B</span>
            </div>
            <span class="badge__text">+37 klien puas</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Grid Portofolio -->
    <section class="portfolio-grid-section">
      <div class="container">
        <p class="eyebrow reveal">Portofolio</p>
        <h2 class="section-title reveal">Project yang pernah kami kerjakan</h2>

        <div class="filters reveal" role="tablist">
          <button
            v-for="f in filters"
            :key="f"
            class="filter-btn"
            :class="{ 'filter-btn--active': activeFilter === f }"
            role="tab"
            :aria-selected="activeFilter === f"
            @click="activeFilter = f"
          >
            {{ f }}
          </button>
        </div>

        <div class="project-grid">
          <article
            v-for="(p, i) in filteredProjects"
            :key="p.title"
            class="project-card reveal"
            :class="`accent--${p.accent}`"
            :style="{ transitionDelay: (i * 0.09) + 's' }"
          >
            <div class="browser-frame">
              <div class="browser-frame__bar">
                <span class="dot dot--red"></span>
                <span class="dot dot--yellow"></span>
                <span class="dot dot--green"></span>
                <span class="browser-frame__url">{{ p.domain }}</span>
              </div>
              <div class="browser-frame__screen">
                <span class="browser-frame__mark">{{ p.title.charAt(0) }}</span>
              </div>
            </div>

            <div class="project-card__body">
              <span class="project-card__tag">{{ p.category }}</span>
              <h3 class="project-card__title">{{ p.title }}</h3>
              <p class="project-card__desc">{{ p.desc }}</p>
              <a href="#" class="project-card__link">
                Lihat Detail
                <span class="arrow">→</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="portfolio-cta">
      <div class="container portfolio-cta__inner">
        <div class="reveal">
          <h2 class="portfolio-cta__title">Punya project serupa dalam pikiran?</h2>
          <p class="portfolio-cta__desc">
            Mari diskusikan kebutuhan digital bisnis Anda bersama tim kami.
          </p>
        </div>
        <a href="#" class="portfolio-cta__btn reveal" :style="{ transitionDelay: '0.12s' }">Konsultasi Gratis</a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.portfolio-page {
  --cream: #FCEF91;
  --orange-light: #FB9E3A;
  --orange: #E6521F;
  --red: #EA2F14;
  --ink: #202020;
  --ink-soft: #5b4a2a;
  --paper: #FFFBF2;
  --line: rgba(32, 32, 32, 0.09);
}

.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 2;
}

/* ---------- Hero ---------- */
.portfolio-hero {
  position: relative;
  overflow: hidden;
  min-height: 640px;
  display: flex;
  align-items: center;
  padding: 160px clamp(20px, 6vw, 80px) 90px;
  background: linear-gradient(160deg, var(--cream) 0%, #fff3cf 45%, #ffe6c2 100%);
}

.portfolio-hero__mesh { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
.mesh__orb { position: absolute; border-radius: 50%; filter: blur(70px); opacity: 0.5; }
.mesh__orb--1 { width: 420px; height: 420px; top: -160px; left: -120px; background: radial-gradient(circle, var(--orange-light), transparent 70%); }
.mesh__orb--2 { width: 380px; height: 380px; top: -100px; right: -140px; background: radial-gradient(circle, var(--red), transparent 70%); opacity: 0.28; }

.portfolio-hero__grid {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.portfolio-hero__content { max-width: 560px; }

.eyebrow {
  display: inline-block;
  font-size: 12.5px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--red);
  margin-bottom: 14px;
}

.portfolio-hero__title {
  font-size: clamp(30px, 4vw, 46px);
  font-weight: 800;
  line-height: 1.16;
  letter-spacing: -0.02em;
  color: var(--ink);
  margin: 0 0 20px;
}

.portfolio-hero__title .highlight { color: var(--orange); }

.portfolio-hero__desc {
  margin: 0 0 40px;
  color: var(--ink-soft);
  font-size: 15.5px;
  line-height: 1.75;
}

.stats-row { display: flex; gap: clamp(24px, 5vw, 48px); flex-wrap: wrap; }
.stat { display: flex; flex-direction: column; }
.stat__number { font-size: clamp(24px, 3vw, 32px); font-weight: 800; color: var(--ink); letter-spacing: -0.02em; }
.stat__label { font-size: 12.5px; color: var(--ink-soft); margin-top: 2px; }

/* ---------- Hero visual: browser + phone mockup berlapis dengan badge ---------- */
.hero-visual {
  position: relative;
  width: 340px;
  height: 340px;
  flex-shrink: 0;
  z-index: 2;
}

.visual-glow {
  position: absolute;
  inset: 20px;
  background:
    radial-gradient(circle at 35% 60%, rgba(230, 82, 31, 0.32), transparent 60%),
    radial-gradient(circle at 70% 30%, rgba(251, 158, 58, 0.28), transparent 55%);
  filter: blur(24px);
  z-index: 0;
  animation: glowPulse 6s ease-in-out infinite;
}

@keyframes glowPulse {
  0%, 100% { opacity: 0.7; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.08); }
}

.deco-dot {
  position: absolute;
  border-radius: 50%;
  z-index: 1;
  animation: decoFloat 4.5s ease-in-out infinite;
}
.deco-dot--1 { width: 14px; height: 14px; top: 36px; left: 10px; background: var(--orange); opacity: 0.5; }
.deco-dot--2 { width: 9px; height: 9px; bottom: 70px; right: 6px; background: var(--red); opacity: 0.6; animation-delay: 1.2s; }

.deco-ring {
  position: absolute;
  top: 14px;
  right: 60px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 3px solid var(--orange-light);
  opacity: 0.45;
  z-index: 1;
  animation: decoFloat 5.5s ease-in-out infinite;
  animation-delay: 0.6s;
}

@keyframes decoFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Phone mockup */
.device-phone {
  position: absolute;
  bottom: 34px;
  left: 6px;
  width: 96px;
  height: 168px;
  border-radius: 20px;
  background: linear-gradient(160deg, #2a2a2a, #141414);
  padding: 10px 8px;
  box-shadow: 0 22px 40px -18px rgba(32, 20, 0, 0.4);
  transform: rotate(-9deg);
  z-index: 2;
  animation: deviceFloat 5.5s ease-in-out infinite;
}

.device-phone__notch {
  width: 32px;
  height: 5px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.18);
  margin: 0 auto 8px;
}

.device-phone__screen {
  height: 100%;
  border-radius: 12px;
  background: linear-gradient(165deg, #fff8ec, #fff);
  padding: 10px;
}

.device-phone__tile--big {
  height: 44px;
  border-radius: 8px;
  background: linear-gradient(135deg, var(--orange-light), var(--orange));
  margin-bottom: 8px;
}

.device-phone__row {
  display: flex;
  gap: 5px;
  margin-bottom: 6px;
}
.device-phone__row span {
  flex: 1;
  height: 18px;
  border-radius: 6px;
  background: var(--cream);
}
.device-phone__row--thin span {
  height: 6px;
  border-radius: 4px;
  background: var(--line);
}
.device-phone__row--thin span:last-child { flex: 0.6; }

/* Browser mockup */
.device-browser {
  position: absolute;
  bottom: 6px;
  right: 0;
  width: 232px;
  border-radius: 14px;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 26px 48px -18px rgba(32, 20, 0, 0.36);
  transform: rotate(4deg);
  z-index: 3;
  animation: deviceFloat 6s ease-in-out infinite;
  animation-delay: 0.4s;
}

@keyframes deviceFloat {
  0%, 100% { transform: var(--rot, rotate(0deg)) translateY(0); }
  50% { transform: var(--rot, rotate(0deg)) translateY(-9px); }
}
.device-phone { --rot: rotate(-9deg); }
.device-browser { --rot: rotate(4deg); }

.device-browser__bar {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 9px 11px;
  background: #f6f2e6;
  border-bottom: 1px solid var(--line);
}

.dot { width: 7px; height: 7px; border-radius: 50%; display: inline-block; }
.dot--red { background: #ff5f57; }
.dot--yellow { background: #febc2e; }
.dot--green { background: #28c840; }

.device-browser__url {
  margin-left: 6px;
  font-size: 9.5px;
  color: var(--ink-soft);
  background: #fff;
  padding: 2px 8px;
  border-radius: 5px;
  font-family: 'Courier New', monospace;
}

.device-browser__screen {
  padding: 13px;
  background: linear-gradient(160deg, #fff, #fff8ec);
}

.thumb-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  margin-bottom: 10px;
}
.thumb { display: block; height: 42px; border-radius: 7px; }
.thumb--1 { background: linear-gradient(135deg, var(--orange-light), var(--orange)); }
.thumb--2 { background: linear-gradient(135deg, var(--orange), var(--red)); }
.thumb--3 { background: linear-gradient(135deg, var(--red), #b81f0c); }

.skeleton-line {
  height: 7px;
  border-radius: 4px;
  background: var(--line);
  margin-bottom: 7px;
}
.skeleton-line--w80 { width: 80%; }
.skeleton-line--w50 { width: 50%; margin-bottom: 0; }

/* Badges */
.badge {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  border-radius: 14px;
  padding: 10px 15px;
  box-shadow: 0 16px 32px -16px rgba(32, 20, 0, 0.32);
  z-index: 4;
  animation: badgeSway 5s ease-in-out infinite;
}

@keyframes badgeSway {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-6px) rotate(1.5deg); }
}

.badge--rating {
  top: 4px;
  right: -4px;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
}
.badge__stars { color: var(--orange); font-size: 13px; letter-spacing: 2px; line-height: 1; }
.badge__text { font-size: 11.5px; font-weight: 700; color: var(--ink); white-space: nowrap; }

.badge--check {
  top: 96px;
  left: -18px;
  padding: 8px 13px;
  animation-delay: 0.9s;
}
.badge__check {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--orange-light), var(--orange));
  color: #fff;
  font-size: 11px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
}

.badge--clients {
  bottom: -6px;
  left: 30px;
  animation-delay: 1.6s;
}

.avatar-stack { display: flex; }
.avatar {
  width: 20px; height: 20px;
  border-radius: 50%;
  border: 2px solid #fff;
  margin-left: -7px;
  display: flex; align-items: center; justify-content: center;
  font-size: 9px; font-weight: 800; color: #fff;
  background: linear-gradient(135deg, var(--orange-light), var(--orange));
}
.avatar:first-child { margin-left: 0; }
.avatar--2 { background: linear-gradient(135deg, var(--orange), var(--red)); }
.avatar--3 { background: linear-gradient(135deg, var(--red), #b81f0c); }

@media (prefers-reduced-motion: reduce) {
  .visual-glow, .deco-dot, .deco-ring, .device-phone, .device-browser, .badge {
    animation: none;
  }
}

@media (max-width: 900px) {
  .hero-visual { display: none; }
}

/* ---------- Grid section ---------- */
.portfolio-grid-section {
  padding: 90px clamp(20px, 6vw, 80px);
  background: #fff;
}

.section-title {
  font-size: clamp(24px, 3vw, 32px);
  font-weight: 800;
  color: var(--ink);
  letter-spacing: -0.01em;
  margin: 0 0 32px;
}

.filters {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.filter-btn {
  padding: 9px 20px;
  border-radius: 999px;
  border: 1.5px solid var(--line);
  background: #fff;
  color: var(--ink-soft);
  font-size: 13.5px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
}

.filter-btn:hover { border-color: var(--orange-light); color: var(--ink); }

.filter-btn--active {
  background: var(--orange);
  border-color: var(--orange);
  color: #fff;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 28px;
}

.project-card {
  border-radius: 18px;
  background: var(--paper);
  border: 1px solid var(--line);
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px -18px rgba(230, 82, 31, 0.35);
}

/* ---------- Scroll reveal: muncul dari bawah saat masuk viewport ---------- */
.reveal {
  opacity: 0;
  transform: translateY(36px);
  transition: opacity 0.75s ease, transform 0.75s ease;
}

.reveal.is-revealed {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .reveal {
    transition: none;
    opacity: 1;
    transform: none;
  }
}

/* Browser mockup (kartu grid) */
.browser-frame {
  border-bottom: 1px solid var(--line);
}

.browser-frame__bar {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 14px;
  background: #fff;
}

.browser-frame__url {
  margin-left: 10px;
  font-size: 11.5px;
  color: var(--ink-soft);
  background: var(--cream);
  padding: 3px 10px;
  border-radius: 6px;
  font-family: 'Courier New', monospace;
}

.browser-frame__screen {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.browser-frame__mark {
  font-size: 46px;
  font-weight: 800;
  color: #fff;
}

.accent--orange .browser-frame__screen { background: linear-gradient(135deg, var(--orange), var(--red)); }
.accent--red .browser-frame__screen { background: linear-gradient(135deg, var(--red), #b81f0c); }
.accent--orange-light .browser-frame__screen { background: linear-gradient(135deg, var(--orange-light), var(--orange)); }

.project-card__body { padding: 22px 22px 26px; }

.project-card__tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--orange);
  margin-bottom: 10px;
}

.project-card__title {
  font-size: 18px;
  font-weight: 800;
  color: var(--ink);
  margin: 0 0 8px;
  letter-spacing: -0.01em;
}

.project-card__desc {
  font-size: 14px;
  line-height: 1.6;
  color: var(--ink-soft);
  margin: 0 0 16px;
}

.project-card__link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13.5px;
  font-weight: 700;
  color: var(--ink);
  text-decoration: none;
}

.project-card__link .arrow { transition: transform 0.2s ease; }
.project-card__link:hover .arrow { transform: translateX(4px); }
.project-card__link:hover { color: var(--orange); }

/* ---------- CTA ---------- */
.portfolio-cta {
  padding: 70px clamp(20px, 6vw, 80px);
  background: var(--ink);
}

.portfolio-cta__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}

.portfolio-cta__title {
  font-size: clamp(22px, 2.6vw, 28px);
  font-weight: 800;
  color: #fff;
  margin: 0 0 8px;
}

.portfolio-cta__desc {
  color: #cfc7b8;
  font-size: 14.5px;
  margin: 0;
}

.portfolio-cta__btn {
  flex-shrink: 0;
  background: var(--orange);
  color: #fff;
  font-weight: 700;
  font-size: 14.5px;
  padding: 14px 28px;
  border-radius: 10px;
  text-decoration: none;
  transition: background 0.2s ease, transform 0.2s ease;
}

.portfolio-cta__btn:hover {
  background: var(--red);
  transform: translateY(-2px);
}

/* ---------- Responsive ---------- */
@media (max-width: 650px) {
  .portfolio-hero { min-height: auto; padding: 120px 20px 60px; }
  .stats-row { gap: 28px; }
  .project-grid { grid-template-columns: 1fr; }
  .portfolio-cta__inner { flex-direction: column; align-items: flex-start; }
}
</style>