<template>
  <div class="bi-page">

    <!-- ================= NAVBAR ================= -->
    <header class="bi-nav">
      <div class="container bi-nav__inner">

        <a href="#" class="bi-logo">
          <span class="bi-logo__mark"></span>

          <div class="bi-logo__text">
            <strong>BRANIDENTITY</strong>
            <small>Digital Solution for Your Business</small>
          </div>
        </a>

        <nav class="bi-nav__links">
          <a href="#beranda">Beranda</a>
          <a href="#testimoni" class="active">Testimoni</a>
          <a href="#kontak">Kontak</a>
        </nav>

        <a
          href="https://wa.me/6281234567890?text=Halo%20Brand%20Identity%2C%20saya%20ingin%20konsultasi%20proyek."
          target="_blank"
          rel="noopener"
          class="btn btn-primary nav-button"
        >
          Konsultasi Gratis
        </a>

      </div>
    </header>


    <!-- ================= HERO ================= -->
    <section class="bi-hero" id="beranda">

      <div class="container bi-hero__inner">

        <span class="eyebrow">
          <span class="eyebrow__dot"></span>
          Studio Produk Digital
        </span>

        <h1 class="bi-hero__title">
          Produk digital yang dirancang untuk
          <span>pertumbuhan bisnis Anda</span>
        </h1>

        <p class="bi-hero__desc">
          Kami merancang website, aplikasi, dan sistem internal
          yang lahir dari kebutuhan nyata bisnis Anda —
          bukan template yang dipaksakan agar terlihat serupa.
        </p>

        <div class="bi-hero__actions">

          <a
            href="https://wa.me/6281234567890?text=Halo%20Brand%20Identity%2C%20saya%20ingin%20konsultasi%20proyek."
            target="_blank"
            rel="noopener"
            class="btn btn-primary"
          >
            Mulai Proyek Anda
            <span class="btn__arrow">→</span>
          </a>

          <a
            href="#testimoni"
            class="btn btn-secondary"
          >
            Baca Cerita Klien
          </a>

        </div>

      </div>

    </section>


    <!-- ================= STATS ================= -->
    <section class="bi-stats">

      <div class="container bi-stats__row">

        <div class="bi-stat">
          <span class="bi-stat__num">120+</span>
          <span class="bi-stat__label">
            Proyek selesai
          </span>
        </div>

        <div class="bi-stat">
          <span class="bi-stat__num">68%</span>
          <span class="bi-stat__label">
            Klien kembali lagi
          </span>
        </div>

        <div class="bi-stat">
          <span class="bi-stat__num">4.9/5</span>
          <span class="bi-stat__label">
            Rating rata-rata
          </span>
        </div>

      </div>

    </section>


    <!-- ================= TESTIMONIAL ================= -->
    <section
      class="bi-testi"
      id="testimoni"
    >

      <div class="container">

        <div class="bi-testi__head">

          <span class="eyebrow">
            <span class="eyebrow__dot"></span>
            Cerita Klien
          </span>

          <h2 class="bi-testi__title">
            Cerita dari Klien Kami
          </h2>

          <p class="bi-testi__desc">
            Kepercayaan dibangun dari hasil kerja, bukan janji.
            Berikut cerita mereka setelah bekerja sama dengan kami.
          </p>

        </div>


        <!-- TESTIMONIAL CARDS -->
        <div class="bi-grid">

          <article
            v-for="t in testimonials"
            :key="t.name"
            class="bi-card"
          >

            <span class="bi-card__quotemark">
              “
            </span>

            <p class="bi-card__quote">
              {{ t.quote }}
            </p>

            <div
              class="bi-card__stars"
              :aria-label="`Rating ${t.rating} dari 5`"
            >

              <span
                v-for="n in 5"
                :key="n"
                class="bi-star"
                :class="{
                  'bi-star--off': n > t.rating
                }"
              >
                ★
              </span>

            </div>


            <div class="bi-card__footer">

              <img
                :src="t.photo"
                :alt="t.name"
                class="bi-card__avatar"
              />

              <div class="bi-card__who">

                <strong>
                  {{ t.name }}
                </strong>

                <span>
                  {{ t.role }}, {{ t.company }}
                </span>

              </div>

            </div>

          </article>

        </div>

      </div>

    </section>


    <!-- ================= CTA ================= -->
    <section class="bi-cta">

      <div class="container bi-cta__inner">

        <span class="cta-small">
          LET'S WORK TOGETHER
        </span>

        <h2>
          Siap menjadi cerita sukses berikutnya?
        </h2>

        <p>
          Ceritakan kebutuhan Anda, dan mari mulai
          diskusi awal tanpa biaya.
        </p>

        <a
          href="https://wa.me/6281234567890?text=Halo%20Brand%20Identity%2C%20saya%20ingin%20konsultasi%20proyek."
          target="_blank"
          rel="noopener"
          class="btn btn-cta"
        >
          Diskusikan Proyek Anda
          <span>→</span>
        </a>

      </div>

    </section>


    <!-- ================= FOOTER ================= -->
    <footer
      class="bi-footer"
      id="kontak"
    >

      <div class="container bi-footer__grid">

        <div class="bi-footer__brand">

          <a
            href="#"
            class="bi-logo"
          >
            <span class="bi-logo__mark"></span>

            <div class="bi-logo__text">
              <strong>BRANIDENTITY</strong>
              <small>Digital Solution for Your Business</small>
            </div>
          </a>

          <p>
            Studio digital yang membantu bisnis Anda
            merilis website, sistem, dan aplikasi yang
            benar-benar dipakai — bukan sekadar dipajang.
          </p>

        </div>


        <div>

          <h4>Navigasi</h4>

          <a href="#beranda">
            Beranda
          </a>

          <a href="#testimoni">
            Testimoni
          </a>

          <a href="#kontak">
            Kontak
          </a>

        </div>


        <div>

          <h4>Kontak</h4>

          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener"
          >
            WhatsApp 0812-3456-7890
          </a>

          <a href="mailto:halo@brandidentity.id">
            halo@brandidentity.id
          </a>

          <a href="#">
            Indonesia
          </a>

        </div>

      </div>


      <div class="container bi-footer__bottom">

        <span>
          © {{ year }} Brand Identity Studio.
          Semua testimoni ditampilkan atas izin klien terkait.
        </span>

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
      'Sprint pertama sempat meleset seminggu karena scope kami sendiri yang berubah. Tim Brand Identity jujur soal itu daripada diam-diam mengejar deadline dengan kualitas seadanya.'
  },

  {
    name: 'Nadia Puspita',
    role: 'Head of Growth',
    company: 'Sehat Yuk Health',
    photo: 'https://i.pravatar.cc/120?img=47',
    rating: 5,
    quote:
      'Conversion rate naik dari 1,8% ke 3,4% dalam dua bulan setelah landing page baru live. Bukan angka fantastis, tapi nyata dan bisa kami audit sendiri.'
  },

  {
    name: 'Rio Aditya',
    role: 'CTO',
    company: 'Pasar Digital ID',
    photo: 'https://i.pravatar.cc/120?img=13',
    rating: 4,
    quote:
      'Dokumentasi API-nya rapi, tapi ada satu endpoint yang harus kami minta perbaiki dua kali. Sisanya solid dan tim mereka responsif soal itu.'
  },

  {
    name: 'Salsabila Rahman',
    role: 'Marketing Manager',
    company: 'EduNusantara',
    photo: 'https://i.pravatar.cc/120?img=32',
    rating: 5,
    quote:
      'Yang bikin beda: mereka nanya dulu siapa target audiens kami sebelum mulai desain, bukan langsung kasih moodboard generik.'
  },

  {
    name: 'Fajar Ramadhan',
    role: 'Operations Lead',
    company: 'EcoTravel ID',
    photo: 'https://i.pravatar.cc/120?img=59',
    rating: 5,
    quote:
      'Tim internal kami yang paling gaptek pun bisa pakai sistem barunya tanpa training panjang. Itu ukuran sukses yang paling kami pedulikan.'
  },

  {
    name: 'Clara Angelina',
    role: 'Founder',
    company: 'Ruang Kerja App',
    photo: 'https://i.pravatar.cc/120?img=44',
    rating: 5,
    quote:
      'Dari ide di notes HP jadi MVP yang bisa dipakai investor buat demo, dalam waktu 7 minggu.'
  },

  {
    name: 'Dimas Prakoso',
    role: 'Product Manager',
    company: 'Ngaso Kuliner App',
    photo: 'https://i.pravatar.cc/120?img=8',
    rating: 5,
    quote:
      'Alur onboarding lama bikin 40% user drop di langkah kedua. Setelah dirombak bareng tim mereka, angka itu turun jadi sekitar 15%.'
  },

  {
    name: 'Intan Permata',
    role: 'Founder',
    company: 'Titik Kumpul Coworking',
    photo: 'https://i.pravatar.cc/120?img=25',
    rating: 5,
    quote:
      'Sistem booking ruang jadi satu pintu dengan pembayaran, staf kami nggak perlu lagi cek WhatsApp dan spreadsheet bergantian tiap pagi.'
  },

  {
    name: 'Yusuf Hidayat',
    role: 'IT Manager',
    company: 'Koperasi Sejahtera Bersama',
    photo: 'https://i.pravatar.cc/120?img=61',
    rating: 4,
    quote:
      'Migrasi data dari sistem lama sempat molor karena data kami sendiri berantakan, tapi tim mereka sabar bantu bersihin satu per satu.'
  }
])
</script>


<style scoped>

@import url(
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@500;600;700&display=swap'
);


/* =========================================
   VARIABLES
========================================= */

.bi-page {

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

  min-height: 100vh;

  font-family: var(--font-body);
  color: var(--color-text);
  background: var(--color-bg);

  line-height: 1.6;
}


.bi-page * {
  box-sizing: border-box;
}


.bi-page h1,
.bi-page h2,
.bi-page h4 {
  font-family: var(--font-heading);
  font-weight: 600;
  margin: 0;
  line-height: 1.25;
}


.bi-page p {
  margin: 0;
}


.container {

  width: min(
    var(--container-width),
    calc(100% - 48px)
  );

  margin: 0 auto;
}


/* =========================================
   BUTTON
========================================= */

.btn {

  display: inline-flex;

  align-items: center;
  justify-content: center;

  gap: 7px;

  padding: 10px 19px;

  border-radius: 9px;

  font-family: var(--font-heading);

  font-weight: 600;

  font-size: 13px;

  text-decoration: none;

  cursor: pointer;

  border: none;

  transition:
    transform .2s ease,
    opacity .2s ease,
    box-shadow .2s ease;

  white-space: nowrap;
}


.btn:hover {
  transform: translateY(-2px);
}


.btn-primary {

  background: var(--color-red);

  color: white;

  box-shadow:
    0 9px 20px
    rgba(235, 43, 12, .16);
}


.btn-primary:hover {
  opacity: .93;
}


.btn__arrow {
  transition: transform .2s ease;
}


.btn-primary:hover .btn__arrow {
  transform: translateX(3px);
}


.btn-secondary {

  background: white;

  color: var(--color-text);

  border: 1px solid var(--color-border);

}


.btn-secondary:hover {

  border-color: var(--color-red);

  color: var(--color-red);

}


.btn-cta {

  background: white;

  color: var(--color-red);

  padding: 11px 20px;

}


.btn-cta:hover {
  opacity: .92;
}


/* =========================================
   EYEBROW
========================================= */

.eyebrow {

  display: inline-flex;

  align-items: center;

  gap: 7px;

  font-family: var(--font-heading);

  font-weight: 600;

  font-size: 10px;

  letter-spacing: .08em;

  text-transform: uppercase;

  color: var(--color-deep-orange);

  margin-bottom: 12px;

  padding: 5px 11px 5px 8px;

  border-radius: 999px;

  background: rgba(251, 159, 55, .12);

}


.eyebrow__dot {

  width: 6px;

  height: 6px;

  border-radius: 50%;

  background: var(--color-red);

  box-shadow:
    0 0 0 3px
    rgba(235, 43, 12, .12);

}


/* =========================================
   NAVBAR
========================================= */

.bi-nav {

  position: sticky;

  top: 0;

  z-index: 40;

  background:
    rgba(255, 255, 255, .96);

  backdrop-filter: blur(10px);

  border-bottom:
    1px solid var(--color-border);

}


.bi-nav__inner {

  height: 68px;

  display: flex;

  align-items: center;

  justify-content: space-between;

}


.bi-logo {

  display: inline-flex;

  align-items: center;

  gap: 9px;

  font-family: var(--font-heading);

  font-weight: 700;

  color: var(--color-text);

  text-decoration: none;

}


.bi-logo__mark {

  width: 30px;

  height: 30px;

  border-radius: 8px;

  flex-shrink: 0;

  background:
    linear-gradient(
      135deg,
      var(--color-yellow),
      var(--color-orange) 45%,
      var(--color-red)
    );

}


.bi-logo__text {

  display: flex;

  flex-direction: column;

  line-height: 1.1;

}


.bi-logo__text strong {

  font-family: var(--font-heading);

  font-size: 15px;

  letter-spacing: -.4px;

}


.bi-logo__text small {

  margin-top: 3px;

  color: #888;

  font-size: 7px;

  font-family: var(--font-body);

  letter-spacing: .02em;

}


.bi-nav__links {

  display: flex;

  align-items: center;

  gap: 27px;

}


.bi-nav__links a {

  color: var(--color-text-secondary);

  text-decoration: none;

  font-size: 12px;

  font-weight: 500;

  transition: .2s;

}


.bi-nav__links a:hover,
.bi-nav__links a.active {

  color: var(--color-red);

}


.nav-button {

  padding: 9px 15px;

  font-size: 11px;

}


/* =========================================
   HERO
========================================= */

.bi-hero {

  padding: 72px 0 60px;

  text-align: center;

  background: var(--color-bg);

  border-bottom:
    1px solid var(--color-border);

}


.bi-hero__inner {

  max-width: 900px;

  margin: 0 auto;

  display: flex;

  flex-direction: column;

  align-items: center;

}


.bi-hero__title {

  max-width: 850px;

  font-size: clamp(
    32px,
    4vw,
    40px
  );

  line-height: 1.18;

  letter-spacing: -1.3px;

  margin-bottom: 17px;

}


.bi-hero__title span {

  color: var(--color-red);

}


.bi-hero__desc {

  max-width: 620px;

  font-size: 14px;

  line-height: 1.75;

  color: var(--color-text-secondary);

  margin-bottom: 25px;

}


.bi-hero__actions {

  display: flex;

  gap: 10px;

  flex-wrap: wrap;

  justify-content: center;

}


/* =========================================
   STATS
========================================= */

.bi-stats {

  background: var(--color-surface);

  border-bottom:
    1px solid var(--color-border);

}


.bi-stats__row {

  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  padding: 27px 0;

}


.bi-stat {

  display: flex;

  flex-direction: column;

  align-items: center;

  gap: 2px;

  text-align: center;

  border-right:
    1px solid var(--color-border);

}


.bi-stat:last-child {

  border-right: none;

}


.bi-stat__num {

  font-family: var(--font-heading);

  font-size: 25px;

  font-weight: 700;

  color: var(--color-deep-orange);

}


.bi-stat__label {

  font-size: 12px;

  color: var(--color-text-secondary);

}


/* =========================================
   TESTIMONIAL
========================================= */

.bi-testi {

  padding: 75px 0;

}


.bi-testi__head {

  text-align: center;

  max-width: 560px;

  margin: 0 auto 42px;

}


.bi-testi__title {

  font-size: clamp(
    25px,
    3vw,
    32px
  );

  margin-bottom: 10px;

}


.bi-testi__desc {

  color: var(--color-text-secondary);

  font-size: 14px;

}


.bi-grid {

  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 20px;

}


.bi-card {

  position: relative;

  background: var(--color-surface);

  border:
    1px solid var(--color-border);

  border-radius: 14px;

  padding: 27px 23px 21px;

  display: flex;

  flex-direction: column;

  gap: 14px;

  transition:
    transform .2s ease,
    box-shadow .2s ease;

}


.bi-card:hover {

  transform:
    translateY(-4px);

  box-shadow:
    0 18px 35px -24px
    rgba(26, 26, 26, .3);

}


.bi-card__quotemark {

  position: absolute;

  top: 7px;

  left: 17px;

  font-family: Georgia, serif;

  font-size: 50px;

  font-weight: 700;

  color: var(--color-orange);

  opacity: .32;

  line-height: 1;

}


.bi-card__quote {

  position: relative;

  z-index: 1;

  font-size: 13.5px;

  line-height: 1.75;

  color: var(--color-text);

}


.bi-card__stars {

  display: flex;

  gap: 2px;

}


.bi-star {

  color: var(--color-orange);

  font-size: 13px;

}


.bi-star--off {

  color: var(--color-border);

}


.bi-card__footer {

  display: flex;

  align-items: center;

  gap: 11px;

  padding-top: 13px;

  border-top:
    1px solid var(--color-border);

}


.bi-card__avatar {

  width: 40px;

  height: 40px;

  border-radius: 50%;

  object-fit: cover;

  flex-shrink: 0;

}


.bi-card__who {

  display: flex;

  flex-direction: column;

  font-size: 11px;

}


.bi-card__who strong {

  font-family: var(--font-heading);

  color: var(--color-deep-orange);

  font-size: 12px;

}


.bi-card__who span {

  color: var(--color-text-secondary);

}


/* =========================================
   CTA
========================================= */

.bi-cta {

  width: min(
    var(--container-width),
    calc(100% - 48px)
  );

  margin:
    0 auto 70px;

  border-radius: 20px;

  background:
    linear-gradient(
      120deg,
      var(--color-red),
      var(--color-deep-orange) 60%,
      var(--color-orange)
    );

  padding: 50px 30px;

}


.bi-cta__inner {

  max-width: 560px;

  margin: 0 auto;

  text-align: center;

  display: flex;

  flex-direction: column;

  align-items: center;

  gap: 11px;

}


.cta-small {

  color: var(--color-yellow);

  font-family: var(--font-heading);

  font-size: 10px;

  font-weight: 700;

  letter-spacing: .1em;

}


.bi-cta__inner h2 {

  font-size:
    clamp(23px, 3vw, 30px);

  color: white;

}


.bi-cta__inner p {

  color:
    rgba(255,255,255,.84);

  font-size: 13px;

  margin-bottom: 9px;

}


/* =========================================
   FOOTER
========================================= */

.bi-footer {

  border-top:
    1px solid var(--color-border);

  background: white;

  padding: 48px 0 0;

}


.bi-footer__grid {

  display: grid;

  grid-template-columns:
    1.6fr 1fr 1fr;

  gap: 30px;

  padding-bottom: 32px;

}


.bi-footer__brand p {

  margin-top: 12px;

  font-size: 12px;

  line-height: 1.7;

  color: var(--color-text-secondary);

  max-width: 300px;

}


.bi-footer__grid h4 {

  font-size: 11px;

  text-transform: uppercase;

  letter-spacing: .05em;

  color: var(--color-text-secondary);

  margin-bottom: 12px;

}


.bi-footer__grid a {

  display: block;

  text-decoration: none;

  color: var(--color-text);

  font-size: 12px;

  margin-bottom: 8px;

}


.bi-footer__grid a:hover {

  color: var(--color-red);

}


.bi-footer__bottom {

  border-top:
    1px solid var(--color-border);

  padding: 17px 0;

  font-size: 11px;

  color: var(--color-text-secondary);

}


/* =========================================
   TABLET
========================================= */

@media (max-width: 900px) {

  .bi-nav__links {

    gap: 18px;

  }


  .bi-grid {

    grid-template-columns:
      1fr 1fr;

  }


  .bi-hero__title {

    max-width: 750px;

  }

}


/* =========================================
   MOBILE
========================================= */

@media (max-width: 640px) {

  .container {

    width:
      min(
        100% - 30px,
        var(--container-width)
      );

  }


  .bi-nav__inner {

    height: 62px;

  }


  .bi-nav__links {

    display: none;

  }


  .nav-button {

    padding: 8px 11px;

    font-size: 10px;

  }


  .bi-hero {

    padding: 52px 0 45px;

  }


  .bi-hero__title {

    font-size: 29px;

    line-height: 1.2;

    letter-spacing: -.8px;

  }


  .bi-hero__desc {

    font-size: 13px;

    line-height: 1.7;

  }


  .bi-stats__row {

    grid-template-columns:
      repeat(3, 1fr);

    padding: 22px 0;

  }


  .bi-stat__num {

    font-size: 20px;

  }


  .bi-stat__label {

    font-size: 9px;

  }


  .bi-testi {

    padding: 60px 0;

  }


  .bi-grid {

    grid-template-columns: 1fr;

  }


  .bi-cta {

    width:
      calc(100% - 30px);

    padding: 40px 22px;

    margin-bottom: 50px;

  }


  .bi-footer__grid {

    grid-template-columns:
      1fr 1fr;

  }

}


@media (max-width: 430px) {

  .bi-logo__text strong {

    font-size: 13px;

  }


  .bi-logo__text small {

    font-size: 6px;

  }


  .bi-logo__mark {

    width: 27px;

    height: 27px;

  }


  .nav-button {

    display: none;

  }


  .bi-hero__title {

    font-size: 27px;

  }


  .bi-hero__desc {

    font-size: 12px;

  }


  .bi-hero__actions {

    width: 100%;

  }


  .bi-hero__actions .btn {

    width: 100%;

  }


  .bi-stats__row {

    gap: 5px;

  }


  .bi-stat__num {

    font-size: 18px;

  }


  .bi-stat__label {

    font-size: 8px;

  }


  .bi-footer__grid {

    grid-template-columns: 1fr;

  }

}

</style>