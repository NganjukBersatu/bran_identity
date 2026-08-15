<script setup>
/*
  Halaman detail layanan: Perencanaan
  Tema visual: "blueprint" - garis putus-putus, grid, timeline horizontal.
  Sengaja dibedakan dari konsultasi.vue (yang bertema kartu + blob).

  Palet warna (Color Hunt):
    #FCEF91 - krem kuning
    #FB9E3A - oranye muda
    #E6521F - oranye bakar (aksen utama)
    #EA2F14 - merah (penekanan)
*/

const roadmap = [
  { no: '01', title: 'Scope & Kebutuhan', desc: 'Fitur dan batasan project didefinisikan jelas.' },
  { no: '02', title: 'Timeline & Milestone', desc: 'Jadwal dipecah per tahap dengan target realistis.' },
  { no: '03', title: 'Estimasi Biaya', desc: 'Rincian biaya berdasarkan kompleksitas fitur.' }
]

const documents = [
  { no: '01', title: 'Scope of Work (SOW)', desc: 'Cakupan kerja: fitur yang dibangun, dan yang di luar cakupan.' },
  { no: '02', title: 'Timeline Project', desc: 'Gantt sederhana yang menunjukkan target tiap fase.' },
  { no: '03', title: 'Rincian Estimasi Biaya', desc: 'Breakdown biaya per fitur, bukan angka pukul rata.' }
]

const faqs = [
  { q: 'Berapa lama proses perencanaan biasanya?', a: 'Umumnya 3–7 hari kerja sejak sesi konsultasi selesai.' },
  { q: 'Apakah scope bisa berubah di tengah jalan?', a: 'Bisa, dampaknya ke timeline dan biaya dibahas ulang dulu.' },
  { q: 'Apakah dokumen ini mengikat secara kontrak?', a: 'Ya, dokumen ini jadi lampiran resmi di perjanjian kerja sama.' }
]

// kartu mockup di sisi kanan hero — dipetakan dari data documents di atas
const heroCards = [
  { label: 'SOW', title: 'Scope of Work', rotate: -9, offsetX: 0, offsetY: 10, z: 1 },
  { label: 'Timeline', title: 'Timeline Project', rotate: 5, offsetX: 60, offsetY: -30, z: 2 },
  { label: 'Budget', title: 'Estimasi Biaya', rotate: -3, offsetX: 30, offsetY: 90, z: 3 }
]
</script>

<template>
  <div class="perencanaan">

    <!-- HERO: teks kiri + stack kartu dokumen miring di kanan -->
    <section class="hero">
      <div class="hero__text">
        <span class="eyebrow">Layanan · 02</span>
        <h1>
          Rencana yang Jelas,<br />
          Sebelum <span>Eksekusi</span> Dimulai.
        </h1>
        <p>
          Project yang berantakan biasanya bukan karena timnya kurang jago,
          tapi karena perencanaannya terlewat. Kami susun scope, timeline,
          dan estimasi biaya sebelum development dimulai.
        </p>
        <router-link to="/#kontak" class="hero__cta">
          Konsultasi Gratis
        </router-link>
      </div>

      <div class="hero__visual">
        <svg class="blueprint" viewBox="0 0 380 440" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diagram blueprint perencanaan project">
          <defs>
            <pattern id="dotgrid" width="18" height="18" patternUnits="userSpaceOnUse">
              <circle cx="1.2" cy="1.2" r="1.2" fill="#e6d9a8" />
            </pattern>
          </defs>

          <!-- frame -->
          <rect x="10" y="10" width="360" height="420" rx="16" fill="url(#dotgrid)" />
          <rect x="10" y="10" width="360" height="420" rx="16" stroke="#c9b877" stroke-width="1.5" stroke-dasharray="5 5" />

          <!-- corner crop marks -->
          <path d="M28 44 V28 H44" stroke="#202020" stroke-width="1.6" />
          <path d="M352 44 V28 H336" stroke="#202020" stroke-width="1.6" />
          <path d="M28 406 V422 H44" stroke="#202020" stroke-width="1.6" />
          <path d="M352 406 V422 H336" stroke="#202020" stroke-width="1.6" />

          <!-- ruler ticks kiri -->
          <g stroke="#c9b877" stroke-width="1">
            <line x1="20" y1="90" x2="30" y2="90" />
            <line x1="20" y1="130" x2="26" y2="130" />
            <line x1="20" y1="170" x2="30" y2="170" />
            <line x1="20" y1="210" x2="26" y2="210" />
            <line x1="20" y1="250" x2="30" y2="250" />
          </g>

          <!-- zone 01: Scope -->
          <rect x="52" y="70" width="120" height="72" rx="6" fill="#fffdf5" stroke="#e6521f" stroke-width="1.5" stroke-dasharray="4 4" />
          <circle cx="52" cy="70" r="11" fill="#ea2f14" />
          <text x="52" y="74" text-anchor="middle" font-family="monospace" font-size="10" fill="#fff">01</text>
          <text x="62" y="196" font-family="monospace" font-size="11" letter-spacing="1" fill="#202020">SCOPE</text>

          <!-- zone 02: Timeline -->
          <rect x="200" y="130" width="140" height="60" rx="6" fill="#fffdf5" stroke="#fb9e3a" stroke-width="1.5" stroke-dasharray="4 4" />
          <circle cx="200" cy="130" r="11" fill="#ea2f14" />
          <text x="200" y="134" text-anchor="middle" font-family="monospace" font-size="10" fill="#fff">02</text>
          <text x="200" y="209" font-family="monospace" font-size="11" letter-spacing="1" fill="#202020">TIMELINE</text>

          <!-- zone 03: Budget -->
          <rect x="90" y="240" width="130" height="66" rx="6" fill="#fffdf5" stroke="#e6521f" stroke-width="1.5" stroke-dasharray="4 4" />
          <circle cx="90" cy="240" r="11" fill="#ea2f14" />
          <text x="90" y="244" text-anchor="middle" font-family="monospace" font-size="10" fill="#fff">03</text>
          <text x="100" y="322" font-family="monospace" font-size="11" letter-spacing="1" fill="#202020">BUDGET</text>

          <!-- garis penghubung antar zona -->
          <path d="M172 106 L200 130" stroke="#202020" stroke-width="1" stroke-dasharray="3 3" />
          <path d="M155 142 L155 240" stroke="#202020" stroke-width="1" stroke-dasharray="3 3" />
          <path d="M270 190 L220 260" stroke="#202020" stroke-width="1" stroke-dasharray="3 3" />

          <!-- garis dimensi bawah -->
          <line x1="52" y1="360" x2="340" y2="360" stroke="#202020" stroke-width="1" />
          <line x1="52" y1="354" x2="52" y2="366" stroke="#202020" stroke-width="1" />
          <line x1="340" y1="354" x2="340" y2="366" stroke="#202020" stroke-width="1" />
          <text x="196" y="382" text-anchor="middle" font-family="monospace" font-size="11" fill="#5b4a2a">3–7 HARI KERJA</text>
        </svg>
      </div>
    </section>

    <!-- ROADMAP: timeline horizontal, bukan grid kartu -->
    <section class="roadmap">
      <div class="section-head">
        <span class="eyebrow eyebrow--dark">Alur Kerja</span>
        <h2>Tiga Fokus di Tahap Perencanaan</h2>
      </div>

      <div class="roadmap__track">
        <div class="roadmap__item" v-for="s in roadmap" :key="s.no">
          <div class="roadmap__marker">{{ s.no }}</div>
          <h3>{{ s.title }}</h3>
          <p>{{ s.desc }}</p>
        </div>
      </div>
    </section>

    <!-- DOCUMENTS: daftar baris bernomor besar, bukan grid kartu -->
    <section class="documents">
      <div class="section-head">
        <span class="eyebrow eyebrow--dark">Output Nyata</span>
        <h2>Dokumen yang Anda Terima</h2>
      </div>

      <div class="documents__list">
        <div class="doc-row" v-for="d in documents" :key="d.no">
          <span class="doc-row__no">{{ d.no }}</span>
          <div class="doc-row__body">
            <h3>{{ d.title }}</h3>
            <p>{{ d.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ: daftar bernomor polos, bukan accordion kotak -->
    <section class="faq">
      <div class="section-head">
        <span class="eyebrow eyebrow--dark">Pertanyaan Umum</span>
        <h2>Yang Sering Ditanyakan</h2>
      </div>

      <div class="faq__list">
        <div class="faq__row" v-for="(f, i) in faqs" :key="i">
          <span class="faq__no">{{ String(i + 1).padStart(2, '0') }}</span>
          <div>
            <h3>{{ f.q }}</h3>
            <p>{{ f.a }}</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>

.perencanaan {
  --cream: #FCEF91;
  --orange-light: #FB9E3A;
  --orange: #E6521F;
  --red: #EA2F14;
  --ink: #202020;
  color: var(--ink);
}

.eyebrow {
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--orange);
  margin-bottom: 14px;
}

.eyebrow--dark {
  color: var(--red);
}

/* ---------- HERO (dua kolom: teks kiri, stack kartu kanan) ---------- */
.hero {
  padding: 170px clamp(20px, 6vw, 80px) 140px;
  background: #fffdf5;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: 40px;
  overflow: hidden;
}

.hero__text {
  max-width: 620px;
}

.hero__text h1 {
  font-size: clamp(30px, 4.4vw, 48px);
  font-weight: 800;
  line-height: 1.18;
  margin: 0 0 20px;
}

.hero__text h1 span {
  color: var(--orange);
}

.hero__text p {
  font-size: 15.5px;
  line-height: 1.7;
  color: #4a4a4a;
  margin: 0 0 30px;
  max-width: 460px;
}

.hero__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  padding: 0 28px;
  border-radius: 10px;
  background: var(--red);
  color: #fff;
  text-decoration: none;
  font-size: 15px;
  font-weight: 700;
  box-shadow: 0 10px 24px rgba(234, 47, 20, 0.25);
  transition: transform 0.2s ease, background 0.2s ease;
}

.hero__cta:hover {
  background: var(--orange);
  transform: translateY(-2px);
}

/* ---------- HERO VISUAL: stack kartu dokumen miring ---------- */
.hero__visual {
  position: relative;
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.blueprint {
  width: 100%;
  max-width: 380px;
  height: auto;
}

/* ---------- SHARED SECTION HEAD ---------- */
.section-head {
  text-align: center;
  max-width: 560px;
  margin: 0 auto 52px;
}

.section-head h2 {
  font-size: clamp(24px, 3.2vw, 34px);
  font-weight: 800;
  margin: 0;
  line-height: 1.25;
}

/* ---------- ROADMAP (timeline horizontal) ---------- */
.roadmap {
  padding: 100px clamp(20px, 6vw, 80px);
  background: var(--cream);
}

.roadmap__track {
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  max-width: 1000px;
  margin: 0 auto;
}

.roadmap__track::before {
  content: '';
  position: absolute;
  top: 22px;
  left: 8%;
  right: 8%;
  height: 2px;
  background: repeating-linear-gradient(
    to right,
    var(--orange) 0,
    var(--orange) 8px,
    transparent 8px,
    transparent 16px
  );
  z-index: 0;
}

.roadmap__item {
  position: relative;
  z-index: 1;
  text-align: center;
}

.roadmap__marker {
  width: 46px;
  height: 46px;
  margin: 0 auto 18px;
  border-radius: 50%;
  background: var(--red);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 15px;
  box-shadow: 0 0 0 6px var(--cream);
}

.roadmap__item h3 {
  font-size: 16.5px;
  font-weight: 700;
  margin: 0 0 8px;
}

.roadmap__item p {
  font-size: 13.5px;
  line-height: 1.6;
  color: #5b4a2a;
  margin: 0;
  max-width: 240px;
  margin-inline: auto;
}

/* ---------- DOCUMENTS (list baris) ---------- */
.documents {
  padding: 100px clamp(20px, 6vw, 80px);
}

.documents__list {
  max-width: 760px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.doc-row {
  display: flex;
  align-items: flex-start;
  gap: 24px;
  padding: 26px 0;
  border-bottom: 1px solid #eee1bd;
}

.doc-row:first-child {
  border-top: 1px solid #eee1bd;
}

.doc-row__no {
  font-size: 30px;
  font-weight: 800;
  color: var(--orange-light);
  flex-shrink: 0;
  width: 56px;
}

.doc-row__body h3 {
  font-size: 16.5px;
  font-weight: 700;
  margin: 0 0 6px;
}

.doc-row__body p {
  font-size: 14px;
  line-height: 1.6;
  color: #5b5b5b;
  margin: 0;
}

/* ---------- FAQ (daftar bernomor, tanpa kotak) ---------- */
.faq {
  padding: 20px clamp(20px, 6vw, 80px) 110px;
}

.faq__list {
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.faq__row {
  display: flex;
  gap: 20px;
  padding: 22px 0;
  border-bottom: 1px solid #eee;
}

.faq__row:first-child {
  border-top: 1px solid #eee;
}

.faq__no {
  font-size: 13px;
  font-weight: 800;
  color: var(--orange);
  flex-shrink: 0;
  width: 26px;
  padding-top: 2px;
}

.faq__row h3 {
  font-size: 15px;
  font-weight: 700;
  margin: 0 0 6px;
}

.faq__row p {
  font-size: 14px;
  line-height: 1.6;
  color: #5b5b5b;
  margin: 0;
}

/* ---------- RESPONSIVE ---------- */
@media (max-width: 1024px) {
  .hero {
    grid-template-columns: 1fr;
    padding-top: 130px;
  }

  .hero__visual {
    height: 320px;
    margin-top: 20px;
  }
}

@media (max-width: 900px) {
  .roadmap__track {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .roadmap__track::before {
    display: none;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 130px 20px 60px;
  }
  .hero__card {
    width: 170px;
    padding: 12px 14px 16px;
  }
  .roadmap,
  .documents,
  .faq {
    padding-left: 20px;
    padding-right: 20px;
  }
  .doc-row {
    gap: 16px;
  }
}

</style>