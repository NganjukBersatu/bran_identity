<script setup>
/*
  Halaman detail layanan: Perencanaan
  Hero visual: flat illustration orang + dokumen (checklist perencanaan).
  Tanpa warna gelap/hitam pada background — murni dari palet:
    #FCEF91 - krem kuning
    #FB9E3A - oranye muda
    #E6521F - oranye bakar (aksen utama)
    #EA2F14 - merah (penekanan)
*/
import { ref, onMounted } from 'vue'

const process = [
  { no: '01', title: 'Discovery', desc: 'Menggali kebutuhan bisnis, target pengguna, dan masalah yang ingin diselesaikan lewat sesi diskusi mendalam.' },
  { no: '02', title: 'Scope Definition', desc: 'Menentukan batasan fitur secara jelas — apa yang dikerjakan di fase ini, apa yang masuk fase berikutnya.' },
  { no: '03', title: 'Timeline & Milestone', desc: 'Memecah project menjadi sprint dengan target waktu realistis dan titik evaluasi di setiap tahap.' },
  { no: '04', title: 'Estimasi Budget', desc: 'Menyusun rincian biaya berdasarkan scope dan kompleksitas, tanpa biaya tersembunyi di tengah jalan.' },
  { no: '05', title: 'Proposal Final', desc: 'Semua poin dirangkum jadi satu dokumen yang bisa langsung Anda gunakan sebagai acuan kerja.' },
]

const deliverables = [
  { icon: 'doc', title: 'Dokumen Scope', desc: 'Rincian fitur dan batasan pekerjaan yang disepakati bersama.' },
  { icon: 'calendar', title: 'Timeline Project', desc: 'Jadwal per-sprint lengkap dengan milestone dan tenggat.' },
  { icon: 'wallet', title: 'Estimasi Budget', desc: 'Breakdown biaya per fase, transparan sejak awal.' },
  { icon: 'file', title: 'Proposal Teknis', desc: 'Ringkasan pendekatan teknis dan rekomendasi stack yang dipakai.' },
]

const isVisible = ref(false)
onMounted(() => {
  requestAnimationFrame(() => { isVisible.value = true })

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.15, rootMargin: '0px 0px -80px 0px' })

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
})
</script>

<template>
  <div class="perencanaan">

    <!-- HERO -->
    <section class="hero">
      <div class="hero__mesh" aria-hidden="true">
        <div class="mesh__orb mesh__orb--1"></div>
        <div class="mesh__orb mesh__orb--2"></div>
      </div>

      <div class="hero__inner">
        <div class="hero__text" :class="{ 'is-visible': isVisible }">
          <span class="hero__badge">
            <span class="hero__badge-dot"></span>
            Layanan · 02
          </span>
          <h1>
            Rencana yang Jelas,<br />
            Sebelum <span>Eksekusi</span> Dimulai.
          </h1>
          <p>
            Project yang berantakan biasanya bukan karena timnya kurang jago,
            tapi karena perencanaannya terlewat. Kami susun scope, timeline,
            dan estimasi biaya sebelum development dimulai.
          </p>
          <div class="hero__actions">
            <router-link to="/#kontak" class="btn btn--primary">
              Konsultasi Gratis <span>→</span>
            </router-link>
            <a href="#proses" class="btn btn--outline">Lihat Prosesnya</a>
          </div>
        </div>

        <!-- ILUSTRASI: ORANG + DOKUMEN CHECKLIST -->
        <div class="hero__illustration" :class="{ 'is-visible': isVisible }">
          <svg viewBox="0 0 480 420" class="illu" xmlns="http://www.w3.org/2000/svg">

            <!-- shape belakang -->
            <ellipse cx="250" cy="380" rx="180" ry="18" fill="#e6521f" opacity="0.08" />
            <circle cx="120" cy="70" r="46" fill="#fb9e3a" opacity="0.18" />
            <circle cx="420" cy="110" r="30" fill="#ea2f14" opacity="0.14" />
            <rect x="330" y="300" width="70" height="70" rx="16" fill="#fcef91" opacity="0.7" transform="rotate(12 365 335)" />

            <!-- meja -->
            <rect x="60" y="300" width="360" height="16" rx="8" fill="#f3d9a0" />
            <rect x="80" y="316" width="18" height="60" rx="4" fill="#e9c583" />
            <rect x="382" y="316" width="18" height="60" rx="4" fill="#e9c583" />

            <!-- kursi -->
            <path d="M150 300 L150 350 Q150 366 166 366 L182 366 Q198 366 198 350 L198 300" fill="none" stroke="#c98b3a" stroke-width="6" stroke-linecap="round" />

            <!-- badan orang duduk -->
            <g>
              <!-- kaki -->
              <path d="M172 296 Q172 330 158 356" stroke="#20201f" stroke-width="10" stroke-linecap="round" fill="none" />
              <path d="M198 296 Q202 330 214 354" stroke="#20201f" stroke-width="10" stroke-linecap="round" fill="none" />

              <!-- badan / baju -->
              <path d="M140 210 Q140 170 185 168 Q232 168 232 212 L228 300 L146 300 Z" fill="#e6521f" />

              <!-- lengan kiri memegang dokumen -->
              <path d="M150 220 Q120 240 118 268" stroke="#e6521f" stroke-width="16" stroke-linecap="round" fill="none" />
              <!-- lengan kanan menunjuk pensil -->
              <path d="M222 220 Q256 232 268 258" stroke="#e6521f" stroke-width="16" stroke-linecap="round" fill="none" />

              <!-- tangan -->
              <circle cx="116" cy="272" r="11" fill="#f4c99a" />
              <circle cx="270" cy="262" r="11" fill="#f4c99a" />

              <!-- leher -->
              <rect x="172" y="150" width="24" height="24" rx="8" fill="#f4c99a" />

              <!-- kepala -->
              <circle cx="184" cy="128" r="34" fill="#f4c99a" />
              <!-- rambut -->
              <path d="M150 122 Q150 90 184 90 Q220 90 220 124 Q212 108 184 106 Q158 108 150 122 Z" fill="#20201f" />
              <!-- wajah minimal -->
              <circle cx="172" cy="130" r="3" fill="#20201f" />
              <circle cx="196" cy="130" r="3" fill="#20201f" />
              <path d="M174 144 Q184 150 194 144" stroke="#20201f" stroke-width="3" stroke-linecap="round" fill="none" />
            </g>

            <!-- pensil di tangan kanan -->
            <g transform="translate(270 262) rotate(35)">
              <rect x="0" y="-4" width="46" height="8" rx="4" fill="#fb9e3a" />
              <rect x="40" y="-4" width="10" height="8" fill="#20201f" />
              <polygon points="50,-4 58,0 50,4" fill="#f4c99a" />
            </g>

            <!-- papan dokumen / clipboard besar -->
            <g>
              <rect x="60" y="230" width="120" height="150" rx="12" fill="#ffffff" stroke="#e6c98a" stroke-width="2" />
              <rect x="100" y="222" width="40" height="16" rx="6" fill="#c98b3a" />

              <!-- judul dokumen -->
              <rect x="78" y="252" width="60" height="8" rx="4" fill="#e6521f" />

              <!-- checklist item 1 -->
              <circle cx="82" cy="280" r="7" fill="#2e9e5b" />
              <path d="M79 280 L81.5 283 L86 277" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
              <rect x="96" y="277" width="66" height="6" rx="3" fill="#d8cba0" />

              <!-- checklist item 2 -->
              <circle cx="82" cy="304" r="7" fill="#2e9e5b" />
              <path d="M79 304 L81.5 307 L86 301" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
              <rect x="96" y="301" width="50" height="6" rx="3" fill="#d8cba0" />

              <!-- checklist item 3 (belum selesai) -->
              <circle cx="82" cy="328" r="7" fill="none" stroke="#e6c98a" stroke-width="2" />
              <rect x="96" y="325" width="58" height="6" rx="3" fill="#efe6c9" />

              <!-- checklist item 4 (belum selesai) -->
              <circle cx="82" cy="352" r="7" fill="none" stroke="#e6c98a" stroke-width="2" />
              <rect x="96" y="349" width="40" height="6" rx="3" fill="#efe6c9" />
            </g>

            <!-- badge kalender melayang -->
            <g transform="translate(300 60)">
              <rect width="70" height="64" rx="14" fill="#ffffff" stroke="#f3d9a0" stroke-width="2" />
              <rect x="0" y="0" width="70" height="18" rx="14" fill="#e6521f" />
              <rect x="12" y="30" width="10" height="10" rx="2" fill="#fb9e3a" />
              <rect x="30" y="30" width="10" height="10" rx="2" fill="#fce3b0" />
              <rect x="48" y="30" width="10" height="10" rx="2" fill="#fce3b0" />
              <rect x="12" y="46" width="10" height="10" rx="2" fill="#fce3b0" />
              <rect x="30" y="46" width="10" height="10" rx="2" fill="#ea2f14" />
              <rect x="48" y="46" width="10" height="10" rx="2" fill="#fce3b0" />
            </g>

            <!-- badge budget melayang -->
            <g transform="translate(30 190)">
              <circle cx="26" cy="26" r="26" fill="#fff" stroke="#f3d9a0" stroke-width="2" />
              <circle cx="26" cy="26" r="15" fill="#fb9e3a" />
              <text x="26" y="31" text-anchor="middle" font-size="16" font-weight="800" fill="#fff" font-family="Arial, sans-serif">Rp</text>
            </g>

            <!-- badge centang besar -->
            <g transform="translate(360 210)">
              <circle cx="24" cy="24" r="24" fill="#2e9e5b" />
              <path d="M14 24 L21 31 L35 15" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" fill="none" />
            </g>

            <!-- garis putus dekoratif -->
            <path d="M240 100 Q290 130 300 160" stroke="#e6521f" stroke-width="2" stroke-dasharray="5 6" fill="none" opacity="0.5" />
            <path d="M100 220 Q70 210 56 194" stroke="#e6521f" stroke-width="2" stroke-dasharray="5 6" fill="none" opacity="0.5" />
          </svg>
        </div>
      </div>
    </section>

    <!-- PROSES -->
    <section id="proses" class="process">
      <div class="section-head reveal">
        <span class="eyebrow eyebrow--dark">Cara Kerja</span>
        <h2>5 Tahap Menuju Rencana yang Matang</h2>
        <p>Setiap tahap punya output jelas, jadi Anda tahu persis sedang di mana.</p>
      </div>

      <div class="process__list">
        <div
          class="process-item reveal"
          v-for="(p, i) in process"
          :key="p.no"
          :style="{ transitionDelay: (i * 0.12) + 's' }"
        >
          <div class="process-item__marker">
            <span class="process-item__no">{{ p.no }}</span>
            <span v-if="i < process.length - 1" class="process-item__line"></span>
          </div>
          <div class="process-item__body">
            <h3>{{ p.title }}</h3>
            <p>{{ p.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- DELIVERABLES -->
    <section class="deliverables">
      <div class="section-head reveal">
        <span class="eyebrow eyebrow--dark">Output</span>
        <h2>Apa yang Anda Terima</h2>
      </div>

      <div class="deliverables__grid">
        <div
          class="deliver-card reveal"
          v-for="(d, i) in deliverables"
          :key="d.title"
          :style="{ transitionDelay: (i * 0.1) + 's' }"
        >
          <div class="deliver-card__icon">
            <svg v-if="d.icon === 'doc'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>
            <svg v-else-if="d.icon === 'calendar'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            <svg v-else-if="d.icon === 'wallet'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5h-4a2 2 0 0 1 0-4z"/></svg>
            <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          </div>
          <h3>{{ d.title }}</h3>
          <p>{{ d.desc }}</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta">
      <div class="cta__decoration cta__decoration--1" aria-hidden="true"></div>
      <div class="cta__decoration cta__decoration--2" aria-hidden="true"></div>
      <div class="cta__content reveal">
        <span class="eyebrow eyebrow--onred">Siap Merencanakan?</span>
        <h2>Susun Rencana Project Anda Bersama Kami</h2>
        <p>Konsultasikan kebutuhan Anda, kami bantu susun scope dan timeline yang realistis.</p>
        <router-link to="/#kontak" class="btn btn--white">
          Konsultasi Gratis <span>→</span>
        </router-link>
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

/* ---------- HERO ---------- */
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
  grid-template-columns: 1fr 1.05fr;
  gap: 50px;
  align-items: center;
  max-width: 1220px;
  margin: 0 auto;
  padding-bottom: 110px;
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

/* ---------- ILUSTRASI ORANG + DOKUMEN ---------- */
.hero__illustration {
  position: relative;
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.hero__illustration.is-visible { opacity: 1; transform: translateY(0); }

.illu {
  width: 100%;
  max-width: 480px;
  display: block;
  margin: 0 auto;
}

.hero__text {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s;
}
.hero__text.is-visible { opacity: 1; transform: translateY(0); }

/* ---------- SCROLL REVEAL (seluruh halaman) ---------- */
.reveal {
  opacity: 0;
  transform: translateY(36px);
  transition: opacity 0.75s ease, transform 0.75s ease;
}
.reveal.is-revealed { opacity: 1; transform: translateY(0); }

/* ---------- SECTION HEAD ---------- */
.section-head { text-align: center; max-width: 580px; margin: 0 auto 52px; }
.section-head h2 { font-size: clamp(24px, 3.2vw, 34px); font-weight: 800; margin: 0 0 12px; line-height: 1.25; }
.section-head p { font-size: 15px; color: #666; margin: 0; }

/* ---------- PROSES (timeline vertikal) ---------- */
.process { padding: 190px clamp(20px, 6vw, 80px) 110px; }

.process__list {
  max-width: 680px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.process-item {
  display: flex;
  gap: 24px;
}

.process-item__marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
}
.process-item__no {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 800;
  color: #fff;
  background: linear-gradient(135deg, var(--orange-light), var(--red));
  box-shadow: 0 8px 18px rgba(234, 47, 20, 0.28);
  flex-shrink: 0;
}
.process-item__line {
  flex: 1;
  width: 2px;
  min-height: 36px;
  margin: 6px 0;
  background: repeating-linear-gradient(180deg, rgba(230,82,31,0.35) 0 6px, transparent 6px 12px);
}

.process-item__body { padding-bottom: 40px; padding-top: 6px; }
.process-item__body h3 { margin: 0 0 8px; font-size: 18px; font-weight: 800; }
.process-item__body p { margin: 0; font-size: 14px; line-height: 1.7; color: #5b4a2a; max-width: 480px; }

/* ---------- DELIVERABLES ---------- */
.deliverables { padding: 110px clamp(20px, 6vw, 80px); background: var(--cream); }

.deliverables__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
  max-width: 1180px;
  margin: 0 auto;
}

.deliver-card {
  padding: 30px 24px;
  border-radius: 16px;
  background: #fffdf5;
  border: 1px solid rgba(230, 82, 31, 0.15);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.deliver-card:hover { transform: translateY(-6px); box-shadow: 0 16px 34px rgba(239, 91, 35, 0.15); }

.deliver-card__icon {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  background: #fff2d4;
  color: var(--orange);
  margin-bottom: 18px;
}
.deliver-card__icon svg { width: 24px; height: 24px; }

.deliver-card h3 { font-size: 15.5px; font-weight: 800; margin: 0 0 8px; }
.deliver-card p { font-size: 13px; line-height: 1.6; color: #5b4a2a; margin: 0; }

/* ---------- CTA ---------- */
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
  .hero__inner { grid-template-columns: 1fr; padding-bottom: 90px; }
  .hero__illustration { max-width: 420px; margin: 40px auto 0; }
  .deliverables__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 650px) {
  .hero { padding: 120px 20px 0; }
  .hero__actions { flex-direction: column; }
  .process { padding: 150px 20px 80px; }
  .deliverables { padding: 70px 20px; }
  .deliverables__grid { grid-template-columns: 1fr; }
  .process-item__body p { max-width: none; }
}
</style>