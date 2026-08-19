<script setup>
/*
  Halaman detail layanan: Konsultasi
  Palet warna (Color Hunt):
    #FCEF91 - krem kuning (latar lembut)
    #FB9E3A - oranye muda (aksen sekunder)
    #E6521F - oranye bakar (aksen utama, senada navbar)
    #EA2F14 - merah (penekanan / CTA)
*/
import { ref, onMounted } from 'vue'

const steps = [
  {
    no: '01',
    title: 'Isi Formulir Singkat',
    desc: 'Ceritakan sedikit tentang bisnis dan kebutuhan project Anda lewat form kontak.'
  },
  {
    no: '02',
    title: 'Diskusi dengan Tim Ahli',
    desc: 'Kami jadwalkan sesi diskusi untuk memahami tujuan, target pengguna, dan tantangan Anda.'
  },
  {
    no: '03',
    title: 'Rekomendasi Solusi',
    desc: 'Anda menerima gambaran awal solusi, teknologi yang cocok, serta estimasi waktu dan biaya.'
  }
]

const points = [
  'Gratis, tanpa komitmen di awal',
  'Ditangani langsung oleh tim teknis, bukan sales',
  'Durasi sesi 30–45 menit, online maupun tatap muka',
  'Anda mendapat ringkasan tertulis setelah sesi selesai'
]

const faqs = [
  {
    q: 'Apakah konsultasi ini berbayar?',
    a: 'Tidak. Sesi konsultasi awal kami berikan secara gratis agar Anda bisa mengenal tim dan pendekatan kami terlebih dahulu.'
  },
  {
    q: 'Berapa lama saya menunggu jadwal konsultasi?',
    a: 'Tim kami biasanya menghubungi Anda dalam 1x24 jam kerja setelah formulir dikirim.'
  },
  {
    q: 'Apa yang perlu saya siapkan sebelum sesi?',
    a: 'Cukup siapkan gambaran umum kebutuhan Anda. Detail teknis tidak wajib, tim kami akan membantu menggalinya bersama.'
  }
]

// Efek muncul dari bawah untuk hero saat halaman pertama dibuka
const isVisible = ref(false)

onMounted(() => {
  requestAnimationFrame(() => { isVisible.value = true })

  // Efek muncul dari bawah saat elemen discroll masuk ke viewport,
  // dan mengulang lagi setiap kali elemen keluar lalu masuk kembali
  // (baik scroll ke bawah maupun ke atas).
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed')
      } else {
        entry.target.classList.remove('is-revealed')
      }
    })
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' })

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
})
</script>

<template>
  <div class="konsultasi">

    <!-- HERO -->
    <section class="hero">
      <div class="hero__mesh" aria-hidden="true">
        <div class="mesh__orb mesh__orb--1"></div>
        <div class="mesh__orb mesh__orb--2"></div>
      </div>

      <div class="hero__inner" :class="{ 'is-visible': isVisible }">
        <span class="hero__badge">
          <span class="hero__badge-dot"></span>
          Layanan · 01
        </span>
        <h1 class="hero__title">
          Mulai dari <span>Konsultasi</span>,<br />
          Bukan dari Tebakan.
        </h1>
        <p class="hero__desc">
          Setiap project yang sukses dimulai dari pemahaman yang jelas.
          Diskusikan kebutuhan dan tujuan project Anda bersama tim ahli kami
          sebelum satu baris kode pun ditulis.
        </p>
        <a
  href="https://wa.me/6281234567890?text=Halo%20BRAN%20IDENTITY,%20saya%20ingin%20konsultasi%20mengenai%20project%20digital."
  class="hero__cta"
  target="_blank"
  rel="noopener noreferrer"
>
  Konsultasi Gratis
</a>
      </div>
    </section>

    <!-- STEPS -->
    <section class="steps">
      <div class="section-head reveal">
        <span class="eyebrow eyebrow--dark">Alurnya</span>
        <h2>Tiga Langkah Sebelum Project Dimulai</h2>
      </div>

      <div class="steps__grid">
        <div
          class="step-card reveal"
          v-for="(s, i) in steps"
          :key="s.no"
          :style="{ transitionDelay: (i * 0.12) + 's' }"
        >
          <div class="step-card__no">{{ s.no }}</div>
          <h3>{{ s.title }}</h3>
          <p>{{ s.desc }}</p>
        </div>
      </div>
    </section>

    <!-- POINTS -->
    <section class="points">
      <div class="points__text reveal">
        <span class="eyebrow eyebrow--dark">Kenapa Konsultasi di Sini</span>
        <h2>Ngobrol Santai, Hasil Tetap Terarah</h2>
        <p>
          Kami percaya konsultasi bukan formalitas sebelum penawaran,
          tapi fondasi supaya project Anda berjalan sesuai kebutuhan asli,
          bukan asumsi kami.
        </p>
      </div>
      <ul class="points__list">
        <li
          v-for="(p, i) in points"
          :key="i"
          class="reveal"
          :style="{ transitionDelay: (i * 0.1) + 's' }"
        >
          <span class="check">✓</span>
          <span>{{ p }}</span>
        </li>
      </ul>
    </section>

    <!-- FAQ -->
    <section class="faq">
      <div class="section-head reveal">
        <span class="eyebrow eyebrow--dark">Pertanyaan Umum</span>
        <h2>Yang Sering Ditanyakan</h2>
      </div>

      <div class="faq__list">
        <details
          class="faq__item reveal"
          v-for="(f, i) in faqs"
          :key="i"
          :style="{ transitionDelay: (i * 0.1) + 's' }"
        >
          <summary>{{ f.q }}</summary>
          <p>{{ f.a }}</p>
        </details>
      </div>
    </section>

  </div>
</template>

<style scoped>

.konsultasi {
  --cream: #FCEF91;
  --orange-light: #FB9E3A;
  --orange: #E6521F;
  --red: #EA2F14;
  --ink: #202020;
  color: var(--ink);
  overflow-x: hidden;
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

/* ---------- EFEK MUNCUL DARI BAWAH ---------- */

/* Hero: muncul sekali saat halaman pertama dibuka */
.hero__inner {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}
.hero__inner.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Elemen lain: muncul dari bawah tiap kali masuk viewport,
   termasuk saat discroll naik kembali ke atas */
.reveal {
  opacity: 0;
  transform: translateY(36px);
  transition: opacity 0.75s ease, transform 0.75s ease;
}
.reveal.is-revealed {
  opacity: 1;
  transform: translateY(0);
}

/* ---------- HERO ---------- */
.hero {
  position: relative;
  overflow: hidden;
  padding: 160px clamp(20px, 6vw, 80px) 110px;
  background: linear-gradient(160deg, var(--cream) 0%, #fff3cf 45%, #ffe6c2 100%);
}

.hero__mesh { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
.mesh__orb { position: absolute; border-radius: 50%; filter: blur(70px); opacity: 0.5; }
.mesh__orb--1 { width: 420px; height: 420px; top: -160px; left: -120px; background: radial-gradient(circle, var(--orange-light), transparent 70%); }
.mesh__orb--2 { width: 380px; height: 380px; top: -100px; right: -140px; background: radial-gradient(circle, var(--red), transparent 70%); opacity: 0.28; }

.hero__inner {
  position: relative;
  z-index: 2;
  max-width: 640px;
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

.hero__title {
  font-size: clamp(30px, 4.2vw, 48px);
  font-weight: 800;
  line-height: 1.16;
  letter-spacing: -0.02em;
  margin: 0 0 20px;
}

.hero__title span {
  color: var(--orange);
}

.hero__desc {
  font-size: 15.5px;
  line-height: 1.75;
  color: #5b4a2a;
  margin: 0 0 32px;
  max-width: 460px;
}

.hero__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  padding: 0 28px;
  border-radius: 999px;
  background: linear-gradient(100deg, var(--orange-light), var(--red));
  color: #fff;
  text-decoration: none;
  font-size: 14.5px;
  font-weight: 800;
  box-shadow: 0 14px 30px rgba(234, 47, 20, 0.32);
  transition: transform 0.25s ease;
}

.hero__cta:hover {
  transform: translateY(-3px);
}

/* ---------- SHARED SECTION HEAD ---------- */
.section-head {
  text-align: center;
  max-width: 560px;
  margin: 0 auto 48px;
}

.section-head h2,
.points__text h2 {
  font-size: clamp(24px, 3.2vw, 34px);
  font-weight: 800;
  margin: 0;
  line-height: 1.25;
}

/* ---------- STEPS ---------- */
.steps {
  padding: 100px clamp(20px, 6vw, 80px);
}

.steps__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1100px;
  margin: 0 auto;
}

.step-card {
  position: relative;
  padding: 32px 26px;
  border-radius: 16px;
  background: #fff;
  border: 1px solid #f1e9c8;
  box-shadow: 0 10px 30px rgba(230, 82, 31, 0.06);
}

.step-card__no {
  font-size: 34px;
  font-weight: 800;
  color: var(--orange-light);
  margin-bottom: 10px;
}

.step-card h3 {
  font-size: 17px;
  font-weight: 700;
  margin: 0 0 10px;
}

.step-card p {
  font-size: 14px;
  line-height: 1.6;
  color: #5b5b5b;
  margin: 0;
}

/* ---------- POINTS ---------- */
.points {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  padding: 20px clamp(20px, 6vw, 80px) 100px;
  max-width: 1100px;
  margin: 0 auto;
}

.points__text p {
  margin-top: 16px;
  font-size: 15px;
  line-height: 1.7;
  color: #4a4a4a;
}

.points__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.points__list li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 16px 18px;
  border-radius: 12px;
  background: var(--cream);
  font-size: 14px;
  font-weight: 600;
}

.check {
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--orange);
  color: #fff;
  font-size: 12px;
  font-weight: 800;
}

/* ---------- FAQ ---------- */
.faq {
  padding: 20px clamp(20px, 6vw, 80px) 110px;
  background: #fffaf0;
}

.faq__list {
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.faq__item {
  border: 1px solid #f1e0c0;
  border-radius: 12px;
  padding: 18px 20px;
  background: #fff;
}

.faq__item summary {
  cursor: pointer;
  font-weight: 700;
  font-size: 15px;
  list-style: none;
}

.faq__item summary::-webkit-details-marker {
  display: none;
}

.faq__item summary::after {
  content: '+';
  float: right;
  color: var(--orange);
  font-weight: 800;
}

.faq__item[open] summary::after {
  content: '−';
}

.faq__item p {
  margin: 14px 0 0;
  font-size: 14px;
  line-height: 1.7;
  color: #5b5b5b;
}

/* ---------- RESPONSIVE ---------- */
@media (max-width: 900px) {
  .points {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 130px 20px 70px;
  }
  .steps__grid {
    grid-template-columns: 1fr;
  }
  .steps,
  .faq {
    padding-left: 20px;
    padding-right: 20px;
  }
}

</style>