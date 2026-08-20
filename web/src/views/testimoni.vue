<template>
  <div class="bi-page">
    <!-- NAV -->
    <header class="bi-nav">
      <div class="container bi-nav__inner">
        <a href="#" class="bi-logo">
          <span class="bi-logo__mark"></span>
          Brand Identity
        </a>
        <nav class="bi-nav__links">
          <a href="#beranda">Beranda</a>
          <a href="#testimoni">Testimoni</a>
          <a href="#kontak">Kontak</a>
        </nav>
        <a
          href="https://wa.me/6281234567890?text=Halo%20Brand%20Identity%2C%20saya%20ingin%20konsultasi%20proyek."
          target="_blank"
          rel="noopener"
          class="btn btn-primary"
        >
          Konsultasi Gratis
        </a>
      </div>
    </header>

    <!-- HERO -->
    <section class="bi-hero" id="beranda">
      <div class="container bi-hero__inner">
        <span class="eyebrow"><span class="eyebrow__dot"></span>Studio Produk Digital</span>
        <h1 class="bi-hero__title">
          Produk digital yang dirancang untuk pertumbuhan bisnis Anda yang sesungguhnya
        </h1>
        <p class="bi-hero__desc">
          Kami merancang website, aplikasi, dan sistem internal yang lahir dari
          kebutuhan nyata bisnis Anda — bukan template yang dipaksakan agar terlihat serupa dengan yang lain.
        </p>
        <div class="bi-hero__actions">
          <a
            href="https://wa.me/6281234567890?text=Halo%20Brand%20Identity%2C%20saya%20ingin%20konsultasi%20proyek."
            target="_blank"
            rel="noopener"
            class="btn btn-primary"
          >Mulai Proyek Anda <span class="btn__arrow">→</span></a>
          <a href="#testimoni" class="btn btn-secondary">Baca Cerita Klien Kami</a>
        </div>
      </div>
    </section>

    <!-- STATS -->
    <section class="bi-stats">
      <div class="container bi-stats__row">
        <div class="bi-stat">
          <span class="bi-stat__num">120+</span>
          <span class="bi-stat__label">Proyek selesai</span>
        </div>
        <div class="bi-stat">
          <span class="bi-stat__num">68%</span>
          <span class="bi-stat__label">Klien kembali lagi</span>
        </div>
        <div class="bi-stat">
          <span class="bi-stat__num">4.9/5</span>
          <span class="bi-stat__label">Rating rata-rata</span>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="bi-testi" id="testimoni">
      <div class="container">
        <div class="bi-testi__head">
          <span class="eyebrow"><span class="eyebrow__dot"></span>Cerita Klien</span>
          <h2 class="bi-testi__title">Cerita dari Klien Kami</h2>
          <p class="bi-testi__desc">
            Kepercayaan dibangun dari hasil kerja, bukan janji.
            Berikut cerita mereka setelah bekerja sama dengan kami.
          </p>
        </div>

        <div class="bi-grid">
          <article v-for="t in testimonials" :key="t.name" class="bi-card">
            <span class="bi-card__quotemark">&ldquo;</span>
            <p class="bi-card__quote">{{ t.quote }}</p>
            <div class="bi-card__stars" :aria-label="`Rating ${t.rating} dari 5`">
              <span v-for="n in 5" :key="n" class="bi-star" :class="{ 'bi-star--off': n > t.rating }">★</span>
            </div>
            <div class="bi-card__footer">
              <img :src="t.photo" :alt="t.name" class="bi-card__avatar" />
              <div class="bi-card__who">
                <strong>{{ t.name }}</strong>
                <span>{{ t.role }}, {{ t.company }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bi-cta">
      <div class="container bi-cta__inner">
        <h2>Siap menjadi cerita sukses berikutnya?</h2>
        <p>Ceritakan kebutuhan Anda, dan mari mulai diskusi awal tanpa biaya.</p>
        <a
          href="https://wa.me/6281234567890?text=Halo%20Brand%20Identity%2C%20saya%20ingin%20konsultasi%20proyek."
          target="_blank"
          rel="noopener"
          class="btn btn-cta"
        >
          Diskusikan Proyek Anda
        </a>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="bi-footer" id="kontak">
      <div class="container bi-footer__grid">
        <div class="bi-footer__brand">
          <a href="#" class="bi-logo">
            <span class="bi-logo__mark"></span> Brand Identity
          </a>
          <p>Studio digital yang membantu bisnis Anda merilis website, sistem, dan aplikasi yang benar-benar dipakai — bukan sekadar dipajang.</p>
        </div>
        <div>
          <h4>Navigasi</h4>
          <a href="#beranda">Beranda</a>
          <a href="#testimoni">Testimoni</a>
          <a href="#kontak">Kontak</a>
        </div>
        <div>
          <h4>Kontak</h4>
          <a href="https://wa.me/6281234567890" target="_blank" rel="noopener">WhatsApp 0812-3456-7890</a>
          <a href="mailto:halo@brandidentity.id">halo@brandidentity.id</a>
          <a href="#">Indonesia</a>
        </div>
      </div>
      <div class="container bi-footer__bottom">
        <span>© {{ year }} Brand Identity Studio. Semua testimoni ditampilkan atas izin klien terkait.</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const year = new Date().getFullYear()

const testimonials = ref([
  {
    name: 'Bagas Wirawan',
    role: 'Co-Founder',
    company: 'Belanja Cepat',
    photo: 'https://i.pravatar.cc/120?img=52',
    rating: 5,
    quote:
      'Sprint pertama sempat meleset seminggu karena scope kami sendiri yang berubah. Tim Brand Identity jujur soal itu daripada diam-diam ngejar deadline dengan kualitas seadanya.',
  },
  {
    name: 'Nadia Puspita',
    role: 'Head of Growth',
    company: 'Sehat Yuk Health',
    photo: 'https://i.pravatar.cc/120?img=47',
    rating: 5,
    quote:
      'Conversion rate naik dari 1,8% ke 3,4% dalam dua bulan setelah landing page baru live. Bukan angka fantastis, tapi nyata dan bisa kami audit sendiri.',
  },
  {
    name: 'Rio Aditya',
    role: 'CTO',
    company: 'Pasar Digital ID',
    photo: 'https://i.pravatar.cc/120?img=13',
    rating: 4,
    quote:
      'Dokumentasi API-nya rapi, tapi ada satu endpoint yang harus kami minta perbaiki dua kali. Sisanya solid dan tim mereka responsif soal itu.',
  },
  {
    name: 'Salsabila Rahman',
    role: 'Marketing Manager',
    company: 'EduNusantara',
    photo: 'https://i.pravatar.cc/120?img=32',
    rating: 5,
    quote:
      'Yang bikin beda: mereka nanya dulu siapa target audiens kami sebelum mulai desain, bukan langsung kasih moodboard generik.',
  },
  {
    name: 'Fajar Ramadhan',
    role: 'Operations Lead',
    company: 'EcoTravel ID',
    photo: 'https://i.pravatar.cc/120?img=59',
    rating: 5,
    quote:
      'Tim internal kami yang paling gaptek pun bisa pakai sistem barunya tanpa training panjang. Itu ukuran sukses yang paling kami pedulikan.',
  },
  {
    name: 'Clara Angelina',
    role: 'Founder',
    company: 'Ruang Kerja App',
    photo: 'https://i.pravatar.cc/120?img=44',
    rating: 5,
    quote: 'Dari ide di notes HP jadi MVP yang bisa dipakai investor buat demo, dalam waktu 7 minggu.',
  },
  {
    name: 'Dimas Prakoso',
    role: 'Product Manager',
    company: 'Ngaso Kuliner App',
    photo: 'https://i.pravatar.cc/120?img=8',
    rating: 5,
    quote:
      'Alur onboarding lama bikin 40% user drop di langkah kedua. Setelah dirombak bareng tim mereka, angka itu turun jadi sekitar 15%.',
  },
  {
    name: 'Intan Permata',
    role: 'Founder',
    company: 'Titik Kumpul Coworking',
    photo: 'https://i.pravatar.cc/120?img=25',
    rating: 5,
    quote:
      'Sistem booking ruang jadi satu pintu dengan pembayaran, staf kami nggak perlu lagi cek WhatsApp dan spreadsheet bergantian tiap pagi.',
  },
  {
    name: 'Yusuf Hidayat',
    role: 'IT Manager',
    company: 'Koperasi Sejahtera Bersama',
    photo: 'https://i.pravatar.cc/120?img=61',
    rating: 4,
    quote:
      'Migrasi data dari sistem lama sempat molor karena data kami sendiri berantakan, tapi tim mereka sabar bantu bersihin satu per satu.',
  },
])
</script>

<style scoped>
:root {
  --color-yellow: #FCEF92;
  --color-orange: #FB9F37;
  --color-deep-orange: #E75119;
  --color-red: #EB2B0C;
  --color-bg: #FAFAFA;
  --color-surface: #FFFFFF;
  --color-text: #1A1A1A;
  --color-text-secondary: #5F5E5A;
  --color-border: #E5E3DC;
  --font-heading: 'Sora', sans-serif;
  --font-body: 'Inter', sans-serif;
  --container-width: 1160px;
  --radius: 12px;
}

.bi-page * { box-sizing: border-box; }
.bi-page {
  font-family: var(--font-body);
  color: var(--color-text);
  background: var(--color-bg);
  line-height: 1.6;
}
.bi-page h1, .bi-page h2, .bi-page h4 {
  font-family: var(--font-heading);
  font-weight: 600;
  margin: 0;
  line-height: 1.3;
}
.bi-page p { margin: 0; }
.container { max-width: var(--container-width); margin: 0 auto; padding: 0 24px; }
.section { padding: 80px 0; }

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: var(--radius);
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
  border: none;
  transition: transform .15s ease, opacity .15s ease, box-shadow .15s ease;
  white-space: nowrap;
}
.btn:active { transform: scale(0.97); }
.btn-primary { background: var(--color-red); color: #fff; box-shadow: 0 12px 24px -12px rgba(235,43,12,0.55); }
.btn-primary:hover { opacity: .92; }
.btn__arrow { transition: transform .15s ease; }
.btn-primary:hover .btn__arrow { transform: translateX(3px); }
.btn-secondary {
  background: transparent;
  color: var(--color-text);
  border: 1.5px solid var(--color-border);
}
.btn-secondary:hover { border-color: var(--color-red); color: var(--color-red); }
.btn-cta { background: #fff; color: var(--color-red); }
.btn-cta:hover { opacity: .9; }

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 13px;
  letter-spacing: .04em;
  text-transform: uppercase;
  color: var(--color-deep-orange);
  margin-bottom: 14px;
  padding: 6px 14px 6px 10px;
  border-radius: 999px;
  background: rgba(251,159,55,0.12);
}
.eyebrow__dot {
  width: 7px; height: 7px; border-radius: 50%;
  background: var(--color-red);
  box-shadow: 0 0 0 3px rgba(235,43,12,0.18);
}

/* ---------- NAV ---------- */
.bi-nav {
  position: sticky;
  top: 0;
  z-index: 40;
  background: rgba(250,250,250,0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border);
}
.bi-nav__inner { display: flex; align-items: center; justify-content: space-between; height: 74px; }
.bi-logo {
  display: inline-flex; align-items: center; gap: 10px;
  font-family: var(--font-heading); font-weight: 700; font-size: 17px;
  color: var(--color-text); text-decoration: none;
}
.bi-logo__mark {
  width: 22px; height: 22px; border-radius: 7px; flex-shrink: 0;
  background: linear-gradient(135deg, var(--color-yellow), var(--color-orange) 45%, var(--color-red));
}
.bi-nav__links { display: flex; gap: 32px; }
.bi-nav__links a { color: var(--color-text-secondary); text-decoration: none; font-size: 14.5px; font-weight: 500; }
.bi-nav__links a:hover { color: var(--color-text); }
@media (max-width: 760px) { .bi-nav__links { display: none; } }

/* ---------- HERO ---------- */
/* Plain, editorial-style hero (no illustration) — title + short lede, centered, generous whitespace */
.bi-hero {
  padding: 120px 0 88px;
  text-align: center;
  border-bottom: 1px solid var(--color-border);
}
.bi-hero__inner {
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bi-hero__title { font-size: clamp(32px, 4.6vw, 50px); margin-bottom: 20px; letter-spacing: -0.01em; }
.bi-hero__desc { font-size: 17.5px; color: var(--color-text-secondary); margin-bottom: 32px; max-width: 560px; }
.bi-hero__actions { display: flex; gap: 14px; flex-wrap: wrap; justify-content: center; }

@media (max-width: 640px) {
  .bi-hero { padding: 88px 0 64px; }
}

/* ---------- STATS ---------- */
.bi-stats { border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border); background: var(--color-surface); }
.bi-stats__row { display: flex; justify-content: space-between; padding: 36px 0; gap: 24px; flex-wrap: wrap; }
.bi-stat { display: flex; flex-direction: column; gap: 4px; }
.bi-stat__num { font-family: var(--font-heading); font-size: 28px; font-weight: 700; color: var(--color-deep-orange); }
.bi-stat__label { font-size: 13.5px; color: var(--color-text-secondary); }

/* ---------- TESTIMONIALS ---------- */
.bi-testi { padding: 84px 0; }
.bi-testi__head { text-align: center; max-width: 560px; margin: 0 auto 48px; }
.bi-testi__head .eyebrow { }
.bi-testi__title { font-size: clamp(26px, 3.2vw, 34px); margin-bottom: 12px; }
.bi-testi__desc { color: var(--color-text-secondary); font-size: 15.5px; }

.bi-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
@media (max-width: 900px) { .bi-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 640px) { .bi-grid { grid-template-columns: 1fr; } }

.bi-card {
  position: relative;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: 32px 26px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: transform .18s ease, box-shadow .18s ease;
}
.bi-card:hover { transform: translateY(-4px); box-shadow: 0 22px 40px -26px rgba(26,26,26,0.3); }
.bi-card__quotemark {
  position: absolute;
  top: 8px;
  left: 20px;
  font-family: var(--font-heading);
  font-size: 56px;
  font-weight: 700;
  color: var(--color-orange);
  opacity: .35;
  line-height: 1;
}
.bi-card__quote { font-size: 14.5px; color: var(--color-text); position: relative; z-index: 1; }
.bi-card__stars { display: flex; gap: 2px; }
.bi-star { color: var(--color-orange); font-size: 14px; }
.bi-star--off { color: var(--color-border); }
.bi-card__footer {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 14px;
  border-top: 1px solid var(--color-border);
}
.bi-card__avatar { width: 44px; height: 44px; border-radius: 50%; object-fit: cover; flex-shrink: 0; }
.bi-card__who { display: flex; flex-direction: column; font-size: 13px; }
.bi-card__who strong { font-family: var(--font-heading); color: var(--color-deep-orange); font-size: 14px; }
.bi-card__who span { color: var(--color-text-secondary); }

/* ---------- CTA ---------- */
.bi-cta {
  margin: 0 24px 80px;
  max-width: calc(var(--container-width) - 48px);
  margin-left: auto;
  margin-right: auto;
  border-radius: 24px;
  background: linear-gradient(120deg, var(--color-red), var(--color-deep-orange) 60%, var(--color-orange));
  padding: 64px 40px;
}
.bi-cta__inner { max-width: 520px; margin: 0 auto; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 14px; }
.bi-cta__inner h2 { font-size: clamp(24px, 3.2vw, 32px); color: #fff; }
.bi-cta__inner p { color: rgba(255,255,255,0.85); margin-bottom: 10px; }

/* ---------- FOOTER ---------- */
.bi-footer { border-top: 1px solid var(--color-border); padding: 56px 0 0; }
.bi-footer__grid { display: grid; grid-template-columns: 1.6fr 1fr 1fr; gap: 32px; padding-bottom: 36px; }
.bi-footer__brand p { margin-top: 14px; font-size: 13.5px; color: var(--color-text-secondary); max-width: 280px; }
.bi-footer__grid h4 { font-size: 13px; text-transform: uppercase; letter-spacing: .04em; color: var(--color-text-secondary); margin-bottom: 14px; }
.bi-footer__grid a { display: block; text-decoration: none; color: var(--color-text); font-size: 14px; margin-bottom: 10px; }
.bi-footer__grid a:hover { color: var(--color-red); }
.bi-footer__bottom { border-top: 1px solid var(--color-border); padding: 20px 0; font-size: 13px; color: var(--color-text-secondary); }
@media (max-width: 700px) { .bi-footer__grid { grid-template-columns: 1fr 1fr; } }
</style>