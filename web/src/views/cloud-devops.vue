<template>
  <main class="solution-page cloud-page">
    <!-- ============ HERO (konsisten di semua halaman) ============ -->
    <section class="hero">
      <div class="hero-media" aria-hidden="true">
        <img src="/team/timwork.jpg" alt="" class="hero-img" @error="onImgError" />
        <div v-if="imgFailed" class="hero-img-fallback"></div>
        <div class="hero-fade"></div>
      </div>

      <div class="container hero-inner">
        <nav class="breadcrumb reveal" data-reveal="fade-up">
          <RouterLink to="/solutions" class="breadcrumb-link">Solution</RouterLink>
          <span class="breadcrumb-sep">/</span>
          <span class="breadcrumb-current">Cloud & DevOps</span>
        </nav>

        <div class="hero-copy">
          <h1 class="hero-title reveal" data-reveal="fade-up" data-delay="80">Cloud &<br />DevOps</h1>
          <p class="hero-lead reveal" data-reveal="fade-up" data-delay="160">
            Infrastruktur yang andal, otomatis, dan siap bertumbuh —
            membuat tim engineering Anda merilis lebih cepat dan lebih aman.
          </p>
          <p class="hero-desc reveal" data-reveal="fade-up" data-delay="220">
            Kami menangani proses Cloud & DevOps secara end-to-end: mulai dari
            audit infrastruktur, migrasi cloud, otomasi CI/CD, hingga monitoring
            dan optimasi biaya — dengan komunikasi yang transparan di setiap tahap.
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

    <!-- ============ SERVICES — "pipeline" bertingkat ============ -->
    <section id="services" class="section services">
      <div class="container">
        <div class="section-head reveal" data-reveal="fade-up">
          <span class="eyebrow mono">$ ls ./services</span>
          <h2>Solusi Cloud & DevOps yang Kami Sediakan</h2>
        </div>

        <div class="pipeline-rail" aria-hidden="true">
          <div class="pipeline-rail-fill reveal" data-reveal="grow-line"></div>
        </div>

        <div class="services-grid">
          <article
            v-for="(item, i) in scopeItems"
            :key="item.title"
            class="service-card reveal"
            data-reveal="fade-up"
            :data-delay="(i % 3) * 100"
          >
            <div class="service-topbar">
              <span class="dot dot-r"></span><span class="dot dot-y"></span><span class="dot dot-g"></span>
              <span class="service-stage mono">stage-{{ item.index }}</span>
            </div>
            <div class="service-body">
              <div class="service-icon">
                <span class="status-pulse" aria-hidden="true"></span>
                <div v-html="item.icon"></div>
              </div>
              <h3>{{ item.title }}</h3>
              <p>{{ item.desc }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- ============ PROCESS — terminal log ============ -->
    <section class="section process">
      <div class="container">
        <div class="section-head reveal" data-reveal="fade-up">
          <span class="eyebrow mono">$ ./deploy.sh --trace</span>
          <h2>Bagaimana Kami Bekerja</h2>
          <p class="section-sub">
            Proses yang terstruktur, dari audit hingga automasi penuh, agar
            infrastruktur Anda stabil dan mudah diskalakan.
          </p>
        </div>

        <div class="terminal reveal" data-reveal="fade-up" data-delay="80">
          <div class="terminal-bar">
            <span class="dot dot-r"></span><span class="dot dot-y"></span><span class="dot dot-g"></span>
            <span class="terminal-title mono">devops@build — pipeline.log</span>
          </div>
          <div class="terminal-body">
            <div
              v-for="(step, i) in processSteps"
              :key="step.title"
              class="term-line reveal"
              data-reveal="fade-up"
              :data-delay="120 + i * 140"
            >
              <span class="term-num mono">[{{ step.number }}]</span>
              <span class="term-prompt mono">></span>
              <span class="term-text">
                <strong>{{ step.title }}</strong>
                <span class="term-desc">{{ step.desc }}</span>
              </span>
              <span class="term-ok mono">OK ✓</span>
            </div>
            <div class="term-cursor-line mono"><span class="term-prompt">></span><span class="blink-cursor">_</span></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ TECH STACK — CLI flags ============ -->
    <section class="section tech">
      <div class="container">
        <div class="section-head reveal" data-reveal="fade-up">
          <span class="eyebrow mono">$ stack --list</span>
          <h2>Teknologi yang Kami Andalkan</h2>
        </div>
        <div class="tech-row">
          <span
            v-for="(tech, i) in techStack"
            :key="tech"
            class="tech-badge mono reveal"
            data-reveal="fade-up"
            :data-delay="i * 60"
          >--{{ tech.toLowerCase().replace(/\s+/g, '-') }}</span>
        </div>
      </div>
    </section>

    <!-- ============ WHY US — uptime meters ============ -->
    <section class="section why">
      <div class="container why-grid">
        <div class="why-copy reveal" data-reveal="fade-up">
          <span class="eyebrow mono">$ uptime --report</span>
          <h2>Dibangun dengan Standar yang Kami Pegang Teguh</h2>
          <p class="section-sub">
            Kami tidak hanya memindahkan server ke cloud — kami membangun
            fondasi infrastruktur yang bisa diandalkan jangka panjang.
          </p>
        </div>

        <div class="why-list">
          <div
            v-for="(point, i) in whyPoints"
            :key="point.title"
            class="why-item reveal"
            data-reveal="fade-left"
            :data-delay="i * 90"
          >
            <div class="why-meter" aria-hidden="true">
              <span class="why-meter-fill reveal" data-reveal="grow-bar" :data-delay="i * 90 + 200"></span>
            </div>
            <div>
              <h4>{{ point.title }}</h4>
              <p>{{ point.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ FAQ — log entries ============ -->
    <section class="section faq">
      <div class="container">
        <div class="section-head reveal" data-reveal="fade-up">
          <span class="eyebrow mono">$ man faq</span>
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
              <span class="term-prompt mono">?</span>{{ item.q }}
              <span class="faq-icon mono">{{ openFaq === i ? '−' : '+' }}</span>
            </button>
            <div class="faq-answer" :style="{ maxHeight: openFaq === i ? '200px' : '0px' }">
              <p><span class="term-prompt mono">&gt;</span>{{ item.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ CTA AKHIR ============ -->
    <section class="section cta-final">
      <div class="container cta-final-inner reveal" data-reveal="fade-up">
        <div class="cta-window">
          <span class="dot dot-r"></span><span class="dot dot-y"></span><span class="dot dot-g"></span>
        </div>
        <div class="cta-text">
          <h2>Siap Menyiapkan Infrastruktur Anda?</h2>
          <p>Ceritakan kebutuhan Anda, tim kami siap membantu dari audit hingga automasi penuh.</p>
        </div>
        <RouterLink :to="{ name: 'Contact' }" class="btn btn-primary btn-cta">Hubungi Kami</RouterLink>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const imgFailed = ref(false)
function onImgError() { imgFailed.value = true }
function scrollToServices() { document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) }

const scopeItems = [
  { index: '01', title: 'Cloud Migration', desc: 'Memindahkan infrastruktur Anda ke cloud dengan minim downtime dan risiko.', icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10Z"/></svg>' },
  { index: '02', title: 'CI/CD Pipeline Setup', desc: 'Membangun pipeline otomatis untuk proses build, test, dan deployment yang konsisten.', icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="12" r="3"/><path d="M6 9v6M9 6h4a4 4 0 0 1 4 4v0M9 18h4a4 4 0 0 0 4-4v0"/></svg>' },
  { index: '03', title: 'Infrastructure as Code', desc: 'Mengelola infrastruktur melalui kode agar konsisten, terdokumentasi, dan mudah direplikasi.', icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m8 3-4 9 4 9M16 3l4 9-4 9"/></svg>' },
  { index: '04', title: 'Container Orchestration', desc: 'Mengelola container dengan Kubernetes agar aplikasi Anda scalable dan resilient.', icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="M3.27 6.96 12 12l8.73-5.04M12 22.08V12"/></svg>' },
  { index: '05', title: 'Monitoring & Logging', desc: 'Memantau performa dan kesehatan sistem secara real-time untuk mencegah insiden.', icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>' },
  { index: '06', title: 'Cloud Cost Optimization', desc: 'Menganalisis dan mengefisienkan penggunaan resource cloud agar biaya lebih terkendali.', icon: '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>' },
]

const processSteps = [
  { number: '01', title: 'Infrastructure Audit', desc: 'Meninjau infrastruktur yang ada dan mengidentifikasi celah performa serta biaya.' },
  { number: '02', title: 'Architecture Planning', desc: 'Merancang arsitektur cloud yang aman, efisien, dan sesuai kebutuhan skala Anda.' },
  { number: '03', title: 'Implementation', desc: 'Menerapkan infrastruktur, pipeline, dan automasi sesuai rancangan yang disepakati.' },
  { number: '04', title: 'Monitoring & Optimization', desc: 'Memantau performa sistem secara berkelanjutan dan mengoptimalkan biaya operasional.' },
]

const techStack = ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions']

const whyPoints = [
  { title: 'Infrastruktur Terdokumentasi', desc: 'Setiap konfigurasi dikelola sebagai kode sehingga mudah diaudit dan direplikasi.' },
  { title: 'Keamanan Berlapis', desc: 'Standar keamanan cloud diterapkan di setiap lapisan, dari network hingga akses layanan.' },
  { title: 'Downtime Minimal', desc: 'Proses migrasi dan deployment dirancang agar operasional bisnis tetap berjalan.' },
  { title: 'Monitoring 24/7', desc: 'Sistem pemantauan aktif membantu mendeteksi masalah sebelum berdampak ke pengguna.' },
]

const faqItems = [
  { q: 'Apakah proses migrasi cloud akan mengganggu layanan yang sedang berjalan?', a: 'Kami merancang strategi migrasi bertahap untuk meminimalkan downtime pada layanan yang sedang berjalan.' },
  { q: 'Cloud provider mana yang kalian dukung?', a: 'Kami bekerja dengan AWS, Google Cloud Platform, dan Microsoft Azure, disesuaikan dengan kebutuhan Anda.' },
  { q: 'Apakah kalian menyediakan monitoring setelah setup selesai?', a: 'Ya, kami menyediakan paket monitoring dan dukungan berkelanjutan sesuai kebutuhan tim Anda.' },
  { q: 'Berapa lama waktu setup infrastruktur cloud?', a: 'Umumnya 3-8 minggu tergantung kompleksitas sistem dan cakupan automasi yang dibutuhkan.' },
]

const openFaq = ref(null)
function toggleFaq(i) { openFaq.value = openFaq.value === i ? null : i }

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

onBeforeUnmount(() => { if (observer) observer.disconnect() })
</script>

<style scoped>
.solution-page { overflow-x: hidden; }
.mono { font-family: 'JetBrains Mono', 'SFMono-Regular', Consolas, monospace; }

/* ---------- reveal animation ---------- */
.reveal {
  opacity: 0;
  transition: opacity .7s cubic-bezier(0.16, 1, 0.3, 1), transform .7s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}
.reveal[data-reveal="fade-up"] { transform: translateY(32px) scale(0.98); }
.reveal[data-reveal="fade-left"] { transform: translateX(-28px); }
.reveal.is-visible { opacity: 1; transform: translateY(0) translateX(0) scale(1); }
.reveal[data-reveal="grow-line"] { transition: transform .9s ease; transform: scaleX(0); }
.reveal[data-reveal="grow-line"].is-visible { transform: scaleX(1); }
.reveal[data-reveal="grow-bar"] { transition: width 1s ease .1s; width: 0%; }
.reveal[data-reveal="grow-bar"].is-visible { width: var(--fill, 78%); }

/* ---------- shared ---------- */
.section-head { max-width: 640px; margin: 0 0 44px; }
.section-head h2 { font-size: clamp(26px, 3.4vw, 36px); margin-top: 10px; }
.section-sub { color: var(--color-text-secondary); margin-top: 14px; font-size: 16px; }
.eyebrow.mono {
  display: inline-block;
  font-size: 13px;
  letter-spacing: .02em;
  color: var(--color-deep-orange);
  background: rgba(231, 81, 25, .08);
  border: 1px solid rgba(231, 81, 25, .25);
  padding: 4px 10px;
  border-radius: 6px;
}

.dot { width: 9px; height: 9px; border-radius: 50%; display: inline-block; }
.dot-r { background: #f04b4b; }
.dot-y { background: #f2b544; }
.dot-g { background: #35c470; }

/* ==================== HERO ==================== */
.hero { position: relative; min-height: 640px; display: flex; align-items: flex-end; padding-bottom: 64px; overflow: hidden; background: var(--color-bg); }
.hero-media { position: absolute; inset: 0; z-index: 0; }
.hero-img { width: 100%; height: 100%; object-fit: cover; object-position: right center; -webkit-mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,.35) 30%, #000 62%); mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,.35) 30%, #000 62%); }
.hero-img-fallback { position: absolute; inset: 0; background: radial-gradient(circle at 30% 20%, rgba(255,255,255,.35), transparent 45%), radial-gradient(circle at 75% 70%, rgba(255,255,255,.2), transparent 40%), linear-gradient(120deg, var(--color-yellow), var(--color-orange) 55%, var(--color-deep-orange)); -webkit-mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,.35) 30%, #000 62%); mask-image: linear-gradient(to right, transparent 0%, rgba(0,0,0,.35) 30%, #000 62%); }
.hero-fade { position: absolute; inset: 0; background: linear-gradient(to right, var(--color-bg) 0%, rgba(250,250,250,.55) 34%, transparent 60%); }
.hero-inner { position: relative; z-index: 1; padding-top: 64px; width: 100%; }
.breadcrumb { display: flex; align-items: center; gap: 8px; font-size: 14px; color: var(--color-text-secondary); margin-bottom: 40px; }
.breadcrumb-link { color: var(--color-text-secondary); text-decoration: none; }
.breadcrumb-link:hover { color: var(--color-deep-orange); }
.breadcrumb-current { color: var(--color-deep-orange); font-weight: 600; }
.hero-copy { max-width: 620px; }
.hero-title { font-size: clamp(44px, 7vw, 84px); font-weight: 700; line-height: 1.02; letter-spacing: -.02em; color: var(--color-text); }
.hero-lead { font-size: clamp(18px, 2vw, 22px); font-family: var(--font-heading); font-weight: 600; margin-top: 24px; color: var(--color-text); }
.hero-desc { font-size: 16px; color: var(--color-text-secondary); margin-top: 18px; max-width: 520px; }
.scroll-cue { margin-top: 48px; display: inline-flex; align-items: center; gap: 8px; background: none; border: none; padding: 0; cursor: pointer; font-family: var(--font-heading); font-weight: 600; font-size: 14px; color: var(--color-deep-orange); }
.scroll-cue svg { animation: bob 1.8s ease-in-out infinite; }
@keyframes bob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(4px); } }

/* ==================== SERVICES — pipeline ==================== */
.services { background: var(--color-surface); }
.pipeline-rail {
  position: relative;
  height: 2px;
  background: var(--color-border);
  margin: -8px 0 32px;
  transform-origin: left center;
}
.pipeline-rail-fill {
  position: absolute; inset: 0;
  background: linear-gradient(90deg, var(--color-orange), var(--color-red));
  transform-origin: left center;
}
.services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
.service-card {
  border-radius: 10px;
  border: 1px solid var(--color-border);
  overflow: hidden;
  background: var(--color-bg);
  transition: border-color .25s ease, transform .25s ease, box-shadow .25s ease;
}
@media (hover: hover) and (pointer: fine) {
  .service-card:hover { border-color: var(--color-deep-orange); transform: translateY(-6px); box-shadow: 0 20px 40px -26px rgba(231, 81, 25, .4); }
}
.service-topbar {
  display: flex; align-items: center; gap: 6px;
  padding: 10px 14px;
  background: #16181d;
}
.service-stage { margin-left: auto; font-size: 11px; color: #8a8f98; }
.service-body { padding: 22px 24px 26px; }
.service-icon {
  position: relative;
  width: 50px; height: 50px;
  border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  background: var(--color-yellow);
  color: var(--color-deep-orange);
  margin-bottom: 18px;
}
.status-pulse {
  position: absolute; top: -3px; right: -3px;
  width: 10px; height: 10px; border-radius: 50%;
  background: #35c470;
  box-shadow: 0 0 0 rgba(53,196,112,.6);
  animation: pulse-ring 2s infinite;
}
@keyframes pulse-ring {
  0% { box-shadow: 0 0 0 0 rgba(53,196,112,.55); }
  70% { box-shadow: 0 0 0 8px rgba(53,196,112,0); }
  100% { box-shadow: 0 0 0 0 rgba(53,196,112,0); }
}
.service-card h3 { font-size: 17px; }
.service-card p { margin-top: 8px; color: var(--color-text-secondary); font-size: 14.5px; }

/* ==================== PROCESS — terminal ==================== */
.terminal {
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--color-border);
  background: #14161b;
  box-shadow: 0 30px 60px -40px rgba(0,0,0,.5);
}
.terminal-bar { display: flex; align-items: center; gap: 6px; padding: 12px 16px; background: #1c1f26; }
.terminal-title { margin-left: 12px; font-size: 12px; color: #8a8f98; }
.terminal-body { padding: 22px 24px 26px; }
.term-line { display: flex; align-items: baseline; gap: 10px; padding: 10px 0; border-bottom: 1px dashed rgba(255,255,255,.08); flex-wrap: wrap; }
.term-line:last-of-type { border-bottom: none; }
.term-num { color: #5c6270; font-size: 13px; flex-shrink: 0; }
.term-prompt { color: var(--color-orange); font-weight: 700; }
.term-text { color: #d7dae0; font-size: 14.5px; flex: 1; min-width: 200px; }
.term-text strong { display: block; color: #fff; font-family: var(--font-heading); font-size: 15.5px; margin-bottom: 3px; }
.term-desc { color: #9aa0ab; }
.term-ok { color: #35c470; font-size: 12.5px; flex-shrink: 0; }
.term-cursor-line { margin-top: 14px; color: #d7dae0; display: flex; gap: 8px; }
.blink-cursor { animation: blink 1s step-end infinite; }
@keyframes blink { 50% { opacity: 0; } }

/* ==================== TECH ==================== */
.tech-row { display: flex; flex-wrap: wrap; gap: 12px; }
.tech-badge {
  padding: 9px 16px;
  border-radius: 6px;
  border: 1px solid var(--color-border);
  background: var(--color-surface);
  font-size: 13.5px;
  color: var(--color-deep-orange);
  transition: border-color .2s ease, background .2s ease;
}
.tech-badge:hover { border-color: var(--color-red); background: rgba(231,81,25,.06); }

/* ==================== WHY US — meters ==================== */
.why { background: var(--color-surface); }
.why-grid { display: grid; grid-template-columns: .85fr 1.15fr; gap: 56px; align-items: start; }
.why-copy h2 { margin-top: 10px; font-size: clamp(26px, 3.2vw, 34px); }
.why-list { display: flex; flex-direction: column; gap: 22px; }
.why-item { display: grid; grid-template-columns: 44px 1fr; gap: 18px; }
.why-meter {
  width: 6px; height: 100%; min-height: 54px;
  border-radius: 4px;
  background: var(--color-border);
  overflow: hidden;
  position: relative;
  justify-self: center;
}
.why-meter-fill {
  --fill: 82%;
  position: absolute; bottom: 0; left: 0; right: 0;
  height: var(--fill);
  background: linear-gradient(180deg, var(--color-orange), var(--color-red));
  border-radius: 4px;
}
.why-item:nth-child(1) .why-meter-fill { --fill: 90%; }
.why-item:nth-child(2) .why-meter-fill { --fill: 84%; }
.why-item:nth-child(3) .why-meter-fill { --fill: 76%; }
.why-item:nth-child(4) .why-meter-fill { --fill: 96%; }
.why-item h4 { font-size: 15.5px; }
.why-item p { margin-top: 6px; color: var(--color-text-secondary); font-size: 14px; }

/* ==================== FAQ — log style ==================== */
.faq-list { max-width: 760px; }
.faq-item { border-bottom: 1px solid var(--color-border); }
.faq-question { width: 100%; display: flex; align-items: center; gap: 10px; padding: 20px 0; background: none; border: none; text-align: left; cursor: pointer; font-family: var(--font-heading); font-weight: 600; font-size: 16px; color: var(--color-text); }
.faq-question .mono { color: var(--color-orange); }
.faq-item.is-open .faq-question { color: var(--color-deep-orange); }
.faq-icon { flex-shrink: 0; font-size: 20px; color: var(--color-orange); margin-left: auto; }
.faq-answer { overflow: hidden; max-height: 0; transition: max-height .35s ease; }
.faq-answer p { padding-bottom: 20px; color: var(--color-text-secondary); font-size: 15px; display: flex; gap: 10px; }
.faq-answer .mono { color: #35c470; flex-shrink: 0; }

/* ==================== CTA FINAL ==================== */
.cta-final { background: var(--color-surface); border-top: 1px solid var(--color-border); }
.cta-final-inner {
  position: relative;
  display: flex; align-items: center; justify-content: space-between; gap: 32px; flex-wrap: wrap;
  padding: 54px 48px 44px;
  border-radius: var(--radius);
  background: linear-gradient(120deg, #14161b, #21252e 60%, var(--color-deep-orange) 150%);
}
.cta-window { position: absolute; top: 18px; left: 24px; display: flex; gap: 6px; }
.cta-text h2 { color: #fff; font-size: clamp(24px, 3vw, 30px); }
.cta-text p { color: rgba(255,255,255,.75); margin-top: 8px; font-size: 15px; }
.btn-cta { background: #fff; color: var(--color-red); white-space: nowrap; }
.btn-cta:hover { opacity: .92; }

/* =========================================================
   RESPONSIVE
========================================================= */

/* TABLET BESAR — 1100px */
@media (max-width: 1100px) {
  .hero { min-height: 600px; }
  .hero-title { font-size: clamp(40px, 6.5vw, 72px); }
  .services-grid { gap: 18px; }
}

@media (max-width: 960px) {
  .services-grid { grid-template-columns: repeat(2, 1fr); }
  .why-grid { grid-template-columns: 1fr; }
  .hero { min-height: 560px; }
  .term-text { min-width: 100%; order: 3; }
}

/* TABLET — 900px */
@media (max-width: 900px) {
  .services-grid { grid-template-columns: repeat(2, 1fr); gap: 18px; }
  .why-grid { grid-template-columns: 1fr; gap: 40px; }
  .terminal-body { padding: 18px 18px 22px; }
}

@media (max-width: 640px) {
  .section { padding: 56px 0; }

  /* ---------- HERO (fix mobile): gambar jadi banner tetap di atas,
     teks mengalir NORMAL di bawahnya — tidak ada lagi overlap/ketutupan. ---------- */
  .hero {
    display: block;           /* keluar dari flex align-items:flex-end */
    min-height: auto;         /* tinggi hero cuma sebesar isinya */
    padding-bottom: 0;
  }
  .hero-media {
    position: relative;       /* keluar dari absolute inset:0 */
    inset: auto;
    height: 220px;            /* tinggi banner gambar tetap/fix */
    width: 100%;
  }
  .hero-img,
  .hero-img-fallback {
    -webkit-mask-image: none; /* matikan fade kanan-kiri ala desktop */
    mask-image: none;
    object-position: center 25%;
  }
  /* fade tipis di bagian bawah gambar supaya transisi ke background halus */
  .hero-media::after {
    content: '';
    position: absolute;
    inset: auto 0 0 0;
    height: 70px;
    background: linear-gradient(to bottom, transparent, var(--color-bg));
    pointer-events: none;
  }
  .hero-fade { display: none; } /* tidak perlu lagi, gambar sudah tidak dibelakang teks */

  .hero-inner {
    padding-top: 28px;
    padding-bottom: 40px;
  }
  .breadcrumb { margin-bottom: 24px; }
  .hero-copy { max-width: 100%; }
  .hero-title { font-size: clamp(34px, 10vw, 44px); }
  .hero-lead { margin-top: 18px; }
  .hero-desc { margin-top: 14px; max-width: 100%; }
  .scroll-cue { margin-top: 32px; }

  /* ---------- SERVICES: 2 kolom x 2 kolom di mobile,
     bukan 1 kolom (kartu jadi tidak terlalu panjang/lebar penuh). ---------- */
  .services-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
  .service-topbar { padding: 8px 10px; }
  .service-stage { font-size: 9.5px; }
  .service-body { padding: 16px 14px 18px; }
  .service-icon {
    width: 38px; height: 38px;
    border-radius: 10px;
    margin-bottom: 12px;
  }
  .service-icon svg { width: 20px; height: 20px; }
  .service-card h3 {
    font-size: 14px;
    line-height: 1.35;
  }
  .service-card p {
    margin-top: 6px;
    font-size: 12px;
    line-height: 1.5;
  }

  .cta-final-inner { flex-direction: column; align-items: flex-start; padding: 40px 24px 28px; }
  .btn-cta { width: 100%; text-align: center; }
  .why-item { grid-template-columns: 4px 1fr; }
}

/* MOBILE BESAR — 480px */
@media (max-width: 480px) {
  .hero-lead { font-size: 17px; }
  .hero-desc { font-size: 14px; }
  .terminal-bar { padding: 10px 12px; }
  .terminal-title { font-size: 11px; }
  .term-text { font-size: 13.5px; }
  .cta-final-inner { padding: 36px 18px 24px; }
  .cta-text h2 { font-size: 22px; }
}

/* MOBILE KECIL — 380px */
@media (max-width: 380px) {
  .hero-media { height: 190px; }
  .hero-title { font-size: clamp(30px, 9vw, 38px); }
  .breadcrumb { margin-bottom: 20px; font-size: 13px; }

  .services-grid { gap: 10px; }
  .service-topbar { padding: 7px 9px; }
  .service-body { padding: 14px 12px 16px; }
  .service-icon { width: 34px; height: 34px; margin-bottom: 10px; }
  .service-icon svg { width: 18px; height: 18px; }
  .service-card h3 { font-size: 13px; }
  .service-card p { font-size: 11.5px; }

  .why-item { grid-template-columns: 4px 1fr; gap: 12px; }
  .tech-badge { font-size: 12.5px; padding: 8px 12px; }
}

@media (prefers-reduced-motion: reduce) {
  .reveal { transition: none; }
  .scroll-cue svg, .status-pulse, .blink-cursor { animation: none; }
}
</style>