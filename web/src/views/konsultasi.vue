<script setup>
/*
  Halaman detail layanan: Konsultasi
  Palet warna (Color Hunt):
    #FCEF91 - krem kuning (latar lembut)
    #FB9E3A - oranye muda (aksen sekunder)
    #E6521F - oranye bakar (aksen utama, senada navbar)
    #EA2F14 - merah (penekanan / CTA)
*/

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
</script>

<template>
  <div class="konsultasi">

    <!-- HERO -->
    <section class="hero">
      <div class="hero__inner">
        <span class="eyebrow">Layanan · 01</span>
        <h1 class="hero__title">
          Mulai dari <span>Konsultasi</span>,<br />
          Bukan dari Tebakan.
        </h1>
        <p class="hero__desc">
          Setiap project yang sukses dimulai dari pemahaman yang jelas.
          Diskusikan kebutuhan dan tujuan project Anda bersama tim ahli kami
          sebelum satu baris kode pun ditulis.
        </p>
        <router-link to="/#kontak" class="hero__cta">
          Konsultasi Gratis
        </router-link>
      </div>
      <div class="hero__blob" aria-hidden="true"></div>
    </section>

    <!-- STEPS -->
    <section class="steps">
      <div class="section-head">
        <span class="eyebrow eyebrow--dark">Alurnya</span>
        <h2>Tiga Langkah Sebelum Project Dimulai</h2>
      </div>

      <div class="steps__grid">
        <div class="step-card" v-for="s in steps" :key="s.no">
          <div class="step-card__no">{{ s.no }}</div>
          <h3>{{ s.title }}</h3>
          <p>{{ s.desc }}</p>
        </div>
      </div>
    </section>

    <!-- POINTS -->
    <section class="points">
      <div class="points__text">
        <span class="eyebrow eyebrow--dark">Kenapa Konsultasi di Sini</span>
        <h2>Ngobrol Santai, Hasil Tetap Terarah</h2>
        <p>
          Kami percaya konsultasi bukan formalitas sebelum penawaran,
          tapi fondasi supaya project Anda berjalan sesuai kebutuhan asli,
          bukan asumsi kami.
        </p>
      </div>
      <ul class="points__list">
        <li v-for="(p, i) in points" :key="i">
          <span class="check">✓</span>
          <span>{{ p }}</span>
        </li>
      </ul>
    </section>

    <!-- FAQ -->
    <section class="faq">
      <div class="section-head">
        <span class="eyebrow eyebrow--dark">Pertanyaan Umum</span>
        <h2>Yang Sering Ditanyakan</h2>
      </div>

      <div class="faq__list">
        <details class="faq__item" v-for="(f, i) in faqs" :key="i">
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

/* ---------- HERO ---------- */
.hero {
  position: relative;
  overflow: hidden;
  padding: 170px clamp(20px, 6vw, 80px) 100px;
  background: linear-gradient(180deg, var(--cream) 0%, #fff8de 100%);
}

.hero__inner {
  position: relative;
  z-index: 2;
  max-width: 640px;
}

.hero__title {
  font-size: clamp(32px, 5vw, 52px);
  font-weight: 800;
  line-height: 1.15;
  margin: 0 0 20px;
}

.hero__title span {
  color: var(--orange);
}

.hero__desc {
  font-size: 16px;
  line-height: 1.7;
  color: #4a4a4a;
  margin: 0 0 32px;
  max-width: 520px;
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

.hero__blob {
  position: absolute;
  top: -80px;
  right: -100px;
  width: 460px;
  height: 460px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, var(--orange-light), transparent 70%);
  opacity: 0.55;
  z-index: 1;
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
    text-align: center;
  }
  .hero__inner {
    margin: 0 auto;
  }
  .hero__desc {
    margin-left: auto;
    margin-right: auto;
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