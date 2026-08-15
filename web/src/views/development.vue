<script setup>
/*
  Halaman detail layanan: Development
  Tema visual: code editor mockup + terminal + tech stack grid.
  Tanpa warna gelap/hitam — murni dari palet:
    #FCEF91 - krem kuning
    #FB9E3A - oranye muda
    #E6521F - oranye bakar (aksen utama)
    #EA2F14 - merah (penekanan)
*/
import { ref, onMounted } from 'vue'

const techStack = [
  { name: 'Vue.js', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Laravel', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'AWS', category: 'Cloud' },
]

const features = [
  { no: '01', title: 'Clean Code Architecture', desc: 'Struktur kode rapi, terdokumentasi, dan mudah di-maintain jangka panjang.' },
  { no: '02', title: 'Update Berkala', desc: 'Progress dilaporkan tiap sprint, bukan menunggu produk jadi baru dikabari.' },
  { no: '03', title: 'Testing Menyeluruh', desc: 'Unit test dan QA dijalankan sebelum fitur dianggap selesai.' },
  { no: '04', title: 'Skalabel dari Awal', desc: 'Dibangun agar siap menampung pertumbuhan pengguna dan fitur baru.' },
]

const stats = [
  { value: '80+', label: 'Aplikasi dibangun' },
  { value: '99.9%', label: 'Uptime rata-rata' },
  { value: '2–8', label: 'Minggu per fase' },
]

const typedLines = ref([])
const codeLines = [
  '$ npm run build',
  '✓ Compiling modules...',
  '✓ Optimizing assets...',
  '✓ Build completed in 4.2s',
  '$ deploy --env production',
  '🚀 Live at yourapp.com',
]

onMounted(() => {
  let i = 0
  const interval = setInterval(() => {
    if (i < codeLines.length) {
      typedLines.value.push(codeLines[i])
      i++
    } else {
      clearInterval(interval)
    }
  }, 550)
})
</script>

<template>
  <div class="development">

    <!-- HERO -->
    <section class="hero">
      <div class="hero__mesh" aria-hidden="true">
        <div class="mesh__orb mesh__orb--1"></div>
        <div class="mesh__orb mesh__orb--2"></div>
      </div>

      <div class="hero__inner">
        <div class="hero__text">
          <span class="hero__badge">
            <span class="hero__badge-dot"></span>
            Layanan · 03
          </span>
          <h1>
            Kode yang Rapi,<br />
            Produk yang <span>Siap Tumbuh</span>.
          </h1>
          <p>
            Bukan sekadar "jadi", tapi dibangun dengan arsitektur yang benar
            sejak baris kode pertama — supaya produk Anda mudah dikembangkan,
            bukan jadi beban di masa depan.
          </p>
          <div class="hero__actions">
            <router-link to="/#kontak" class="btn btn--primary">
              Mulai Development <span>→</span>
            </router-link>
            <a href="#tech-stack" class="btn btn--outline">Lihat Teknologi</a>
          </div>
        </div>

        <div class="hero__editor">
          <div class="editor__badge editor__badge--1">
            <span class="editor__badge-dot editor__badge-dot--green"></span>
            Build Success
          </div>
          <div class="editor__badge editor__badge--2">
            <span class="editor__badge-dot editor__badge-dot--orange"></span>
            Auto Deploy
          </div>

          <div class="editor">
            <div class="editor__topbar">
              <span class="editor__dot editor__dot--red"></span>
              <span class="editor__dot editor__dot--yellow"></span>
              <span class="editor__dot editor__dot--green"></span>
              <span class="editor__filename">app.js</span>
            </div>
            <pre class="editor__code"><code><span class="c-key">const</span> <span class="c-var">app</span> = <span class="c-key">createApp</span>()

<span class="c-comment">// dibangun untuk scale</span>
<span class="c-var">app</span>.<span class="c-fn">use</span>(router)
<span class="c-var">app</span>.<span class="c-fn">use</span>(store)

<span class="c-var">app</span>.<span class="c-fn">mount</span>(<span class="c-str">'#app'</span>)</code></pre>
            <div class="editor__terminal">
              <div class="terminal__line" v-for="(line, i) in typedLines" :key="i">{{ line }}</div>
              <span class="terminal__cursor">▍</span>
            </div>
          </div>
        </div>
      </div>

      <div class="hero__stats">
        <div class="stat" v-for="s in stats" :key="s.label">
          <span class="stat__value">{{ s.value }}</span>
          <span class="stat__label">{{ s.label }}</span>
        </div>
      </div>
    </section>

    <!-- TECH STACK -->
    <section id="tech-stack" class="tech">
      <div class="section-head">
        <span class="eyebrow eyebrow--dark">Teknologi</span>
        <h2>Tools yang Kami Kuasai</h2>
        <p>Dipilih berdasarkan kebutuhan project, bukan sekadar ikut tren.</p>
      </div>

      <div class="tech__grid">
        <div class="tech-card" v-for="t in techStack" :key="t.name">
          <span class="tech-card__category">{{ t.category }}</span>
          <h3>{{ t.name }}</h3>
        </div>
      </div>
    </section>

    <!-- FEATURES -->
    <section class="features">
      <div class="section-head">
        <span class="eyebrow eyebrow--dark">Kenapa Kami</span>
        <h2>Development yang Bisa Anda Percaya</h2>
      </div>

      <div class="features__grid">
        <div class="feature-card" v-for="f in features" :key="f.no">
          <span class="feature-card__no">{{ f.no }}</span>
          <h3>{{ f.title }}</h3>
          <p>{{ f.desc }}</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <div class="cta__decoration cta__decoration--1" aria-hidden="true"></div>
      <div class="cta__decoration cta__decoration--2" aria-hidden="true"></div>
      <div class="cta__content">
        <span class="eyebrow eyebrow--onred">Siap Mulai?</span>
        <h2>Mari Bangun Produk Anda Bersama</h2>
        <p>Diskusikan kebutuhan teknis Anda, tim development kami siap membantu dari nol.</p>
        <router-link to="/#kontak" class="btn btn--white">
          Konsultasi Gratis <span>→</span>
        </router-link>
      </div>
    </section>

  </div>
</template>

<style scoped>
.development {
  --cream: #FCEF91;
  --orange-light: #FB9E3A;
  --orange: #E6521F;
  --red: #EA2F14;
  --ink: #202020;
  color: var(--ink);
  overflow-x: hidden;
  background: #fffaf0;
}

.eyebrow {
  display: inline-block;
  font-size: 12.5px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--orange);
  margin-bottom: 14px;
}
.eyebrow--dark { color: var(--red); }
.eyebrow--onred { color: #fff5df; }

.btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  height: 52px;
  padding: 0 28px;
  border-radius: 999px;
  font-size: 14.5px;
  font-weight: 800;
  text-decoration: none;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease, border-color 0.25s ease;
}
.btn span { transition: transform 0.2s ease; }
.btn:hover span { transform: translateX(3px); }

.btn--primary {
  background: linear-gradient(100deg, var(--orange-light), var(--red));
  color: #fff;
  box-shadow: 0 14px 30px rgba(234, 47, 20, 0.32);
}
.btn--primary:hover { transform: translateY(-3px); }

.btn--outline {
  background: #fff;
  color: var(--ink);
  border: 1.5px solid rgba(230, 82, 31, 0.25);
}
.btn--outline:hover { border-color: var(--orange); color: var(--orange); }

.btn--white {
  background: #fff;
  color: var(--red);
  box-shadow: 0 14px 30px rgba(0,0,0,0.15);
}
.btn--white:hover { transform: translateY(-3px); }

/* ---------- HERO (terang, tanpa hitam) ---------- */
.hero {
  position: relative;
  overflow: hidden;
  padding: 160px clamp(20px, 6vw, 80px) 0;
  background: linear-gradient(160deg, var(--cream) 0%, #fff3cf 45%, #ffe6c2 100%);
}

.hero__mesh { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
.mesh__orb { position: absolute; border-radius: 50%; filter: blur(70px); opacity: 0.5; }
.mesh__orb--1 { width: 420px; height: 420px; top: -160px; left: -120px; background: radial-gradient(circle, var(--orange-light), transparent 70%); }
.mesh__orb--2 { width: 380px; height: 380px; top: -100px; right: -140px; background: radial-gradient(circle, var(--red), transparent 70%); opacity: 0.28; }

.hero__inner {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  max-width: 1180px;
  margin: 0 auto;
  padding-bottom: 100px;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  padding: 8px 16px;
  border-radius: 999px;
  background: #fff;
  border: 1px solid rgba(230, 82, 31, 0.2);
  font-size: 12.5px;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--red);
  margin-bottom: 24px;
}
.hero__badge-dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--orange);
  box-shadow: 0 0 0 4px rgba(230,82,31,0.18);
}

.hero__text h1 {
  font-size: clamp(30px, 4.2vw, 48px);
  font-weight: 800;
  line-height: 1.16;
  margin: 0 0 20px;
  letter-spacing: -0.02em;
  color: var(--ink);
}
.hero__text h1 span { color: var(--orange); }

.hero__text p {
  font-size: 15.5px;
  line-height: 1.75;
  color: #5b4a2a;
  margin: 0 0 32px;
  max-width: 460px;
}

.hero__actions { display: flex; gap: 14px; flex-wrap: wrap; }

/* Editor mockup — tetap gelap HANYA di dalam kotak editor (representasi layar kode), bukan background halaman */
.hero__editor { position: relative; }

.editor {
  position: relative;
  z-index: 2;
  border-radius: 16px;
  overflow: hidden;
  background: #2a2015;
  border: 4px solid #fff;
  box-shadow: 0 30px 70px rgba(230, 82, 31, 0.25);
}

.editor__topbar {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: rgba(255,255,255,0.06);
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.editor__dot { width: 10px; height: 10px; border-radius: 50%; }
.editor__dot--red { background: #ff5f57; }
.editor__dot--yellow { background: #febc2e; }
.editor__dot--green { background: #28c840; }
.editor__filename {
  margin-left: 10px;
  font-size: 12px;
  color: rgba(255,255,255,0.45);
  font-family: 'Courier New', monospace;
}

.editor__code {
  margin: 0;
  padding: 20px 22px;
  font-family: 'Courier New', monospace;
  font-size: 13.5px;
  line-height: 1.8;
  color: #f5ead9;
  overflow-x: auto;
}
.c-key { color: #fb9e3a; }
.c-var { color: #ffd58a; }
.c-fn { color: #ffe4b8; }
.c-str { color: #a3e6a3; }
.c-comment { color: #a89a84; font-style: italic; }

.editor__terminal {
  padding: 14px 22px 20px;
  border-top: 1px solid rgba(255,255,255,0.08);
  background: #241b12;
  font-family: 'Courier New', monospace;
  font-size: 12.5px;
  min-height: 130px;
}
.terminal__line { color: #a8e6b0; line-height: 1.9; }
.terminal__cursor { color: var(--orange-light); animation: blink 1s step-start infinite; }
@keyframes blink { 50% { opacity: 0; } }

.editor__badge {
  position: absolute;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 999px;
  background: #fff;
  font-size: 12.5px;
  font-weight: 800;
  color: var(--ink);
  box-shadow: 0 14px 30px rgba(0,0,0,0.15);
}
.editor__badge--1 { top: -18px; left: -14px; }
.editor__badge--2 { bottom: -18px; right: -10px; }
.editor__badge-dot { width: 8px; height: 8px; border-radius: 50%; }
.editor__badge-dot--green { background: #2e9e5b; box-shadow: 0 0 0 4px rgba(46,158,91,0.2); }
.editor__badge-dot--orange { background: var(--orange); box-shadow: 0 0 0 4px rgba(230,82,31,0.2); }

/* Stats floating strip */
.hero__stats {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 760px;
  margin: 0 auto;
  transform: translateY(40%);
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 24px 60px rgba(230, 82, 31, 0.16);
  overflow: hidden;
}
.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 28px 10px;
  border-right: 1px solid rgba(0,0,0,0.06);
}
.stat:last-child { border-right: none; }
.stat__value {
  font-size: clamp(22px, 2.8vw, 28px);
  font-weight: 800;
  background: linear-gradient(100deg, var(--orange), var(--red));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.stat__label { font-size: 12.5px; color: #777; font-weight: 600; }

/* ---------- SECTION HEAD ---------- */
.section-head { text-align: center; max-width: 580px; margin: 0 auto 52px; }
.section-head h2 { font-size: clamp(24px, 3.2vw, 34px); font-weight: 800; margin: 0 0 12px; line-height: 1.25; }
.section-head p { font-size: 15px; color: #666; margin: 0; }

/* ---------- TECH STACK ---------- */
.tech { padding: 190px clamp(20px, 6vw, 80px) 110px; }

.tech__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
  max-width: 1000px;
  margin: 0 auto;
}

.tech-card {
  padding: 26px 22px;
  border-radius: 16px;
  background: #fff;
  border: 1px solid rgba(230, 82, 31, 0.12);
  box-shadow: 0 8px 22px rgba(180, 120, 40, 0.06);
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}
.tech-card:hover {
  transform: translateY(-5px);
  border-color: var(--orange-light);
  box-shadow: 0 16px 34px rgba(239, 91, 35, 0.15);
}
.tech-card__category {
  display: inline-block;
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--orange);
  margin-bottom: 10px;
}
.tech-card h3 { margin: 0; font-size: 16px; font-weight: 800; }

/* ---------- FEATURES ---------- */
.features { padding: 110px clamp(20px, 6vw, 80px); background: var(--cream); }

.features__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
  max-width: 1180px;
  margin: 0 auto;
}

.feature-card {
  padding: 28px 22px;
  border-radius: 16px;
  background: #fffdf5;
  border: 1px solid rgba(230, 82, 31, 0.15);
}
.feature-card__no { display: inline-block; font-size: 24px; font-weight: 800; color: var(--orange-light); margin-bottom: 14px; }
.feature-card h3 { font-size: 15.5px; font-weight: 800; margin: 0 0 8px; }
.feature-card p { font-size: 13px; line-height: 1.6; color: #5b4a2a; margin: 0; }

/* ---------- CTA (gradasi orange/red, tanpa hitam) ---------- */
.cta {
  position: relative;
  overflow: hidden;
  padding: 100px clamp(20px, 6vw, 80px);
  background: linear-gradient(115deg, #fcef91 0%, #ffa447 45%, #f93827 100%);
  text-align: center;
}
.cta__decoration { position: absolute; border-radius: 50%; background: rgba(255,255,255,0.15); pointer-events: none; }
.cta__decoration--1 { width: 260px; height: 260px; left: 8%; top: -130px; }
.cta__decoration--2 { width: 220px; height: 220px; right: 10%; bottom: -120px; }

.cta__content { position: relative; z-index: 2; max-width: 600px; margin: 0 auto; }
.cta__content h2 { font-size: clamp(24px, 3.4vw, 36px); font-weight: 800; margin: 0 0 14px; color: #201409; }
.cta__content p { margin: 0 0 32px; font-size: 14.5px; color: rgba(32,20,9,0.75); line-height: 1.7; }

/* ---------- RESPONSIVE ---------- */
@media (max-width: 950px) {
  .hero__inner { grid-template-columns: 1fr; padding-bottom: 60px; }
  .hero__editor { max-width: 480px; margin: 0 auto; }
  .hero__stats { grid-template-columns: repeat(3, 1fr); }
  .tech__grid { grid-template-columns: repeat(2, 1fr); }
  .features__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 650px) {
  .hero { padding: 120px 20px 0; }
  .hero__actions { flex-direction: column; }
  .hero__stats { transform: translateY(30%); border-radius: 16px; }
  .tech { padding: 150px 20px 80px; }
  .features { padding: 70px 20px; }
  .tech__grid, .features__grid { grid-template-columns: 1fr; }
  .editor__badge--1, .editor__badge--2 { position: static; margin-bottom: 10px; display: inline-flex; }
}
</style>