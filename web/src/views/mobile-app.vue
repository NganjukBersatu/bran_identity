<template>
  <main class="service-page">

    <section class="service-hero">
      <div class="hero-image">
        <img
          src="/team/team-2.jpg"
          alt="Mobile App Development"
        />

        <div class="hero-gradient"></div>
      </div>

      <div class="container hero-container">
        <div class="hero-content">

          <router-link to="/solutions" class="back-link">
            <span class="back-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M19 12H5M11 18L5 12L11 6"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>

            Semua Solutions
          </router-link>

          <p class="eyebrow">
            Mobile App Development
          </p>

          <h1>
            Aplikasi mobile yang
            <span>dibuat untuk pengguna.</span>
          </h1>

          <p class="hero-description">
            Kami membangun aplikasi Android, iOS, dan cross-platform
            dengan pengalaman pengguna yang cepat, intuitif,
            aman, dan nyaman digunakan.
          </p>

        </div>
      </div>
    </section>

    <section class="intro section">
      <div class="container">

        <div class="intro-grid">

          <div>
            <p class="eyebrow">
              Mobile Experience
            </p>

            <h2>
              Membawa bisnis lebih dekat dengan pengguna.
            </h2>
          </div>

          <div class="intro-text">

            <p>
              Pengguna menghabiskan banyak waktunya melalui perangkat
              mobile. Aplikasi yang tepat dapat menciptakan hubungan
              yang lebih dekat antara bisnis dan pelanggan.
            </p>

            <p>
              Kami merancang dan mengembangkan aplikasi dengan
              memperhatikan performa, kemudahan penggunaan,
              keamanan, serta kebutuhan bisnis.
            </p>

          </div>

        </div>

      </div>
    </section>

    <section class="services section">
      <div class="container">

        <div class="section-heading">

          <div>
            <p class="eyebrow">
              What We Do
            </p>

            <h2>
              Solusi aplikasi mobile.
            </h2>
          </div>

          <p>
            Dari aplikasi internal hingga produk digital yang
            digunakan oleh ribuan pengguna.
          </p>

        </div>

        <div class="service-grid">

          <article
            v-for="item in services"
            :key="item.number"
            class="service-card"
          >

            <div class="service-number">
              {{ item.number }}
            </div>

            <h3>
              {{ item.title }}
            </h3>

            <p>
              {{ item.description }}
            </p>

          </article>

        </div>

      </div>
    </section>

    <section class="process section">
      <div class="container">

        <div class="section-heading center">

          <p class="eyebrow">
            Our Process
          </p>

          <h2>
            Mengubah ide menjadi aplikasi.
          </h2>

          <p>
            Setiap tahap dirancang agar aplikasi memiliki
            pengalaman pengguna dan performa yang optimal.
          </p>

        </div>

        <div class="process-grid">

          <article
            v-for="item in process"
            :key="item.number"
            class="process-card"
          >

            <span>{{ item.number }}</span>

            <div class="process-icon">
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12L10 17L19 7"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <h3>{{ item.title }}</h3>

            <p>{{ item.description }}</p>

          </article>

        </div>

      </div>
    </section>

    <section class="cta">
      <div class="container">

        <div class="cta-box">

          <div>

            <p class="eyebrow">
              Start a Project
            </p>

            <h2>
              Punya ide aplikasi
              <span>untuk bisnis Anda?</span>
            </h2>

            <p>
              Mari ubah ide tersebut menjadi produk digital
              yang memberikan pengalaman terbaik bagi pengguna.
            </p>

          </div>

          <router-link
            to="/contact"
            class="cta-button"
          >
            Hubungi Kami

            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M5 12H19M13 6L19 12L13 18"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </router-link>

        </div>

      </div>
    </section>

  </main>
</template>

<script setup>
const services = [
  {
    number: '01',
    title: 'Android Development',
    description:
      'Membangun aplikasi Android yang stabil, cepat, dan sesuai kebutuhan bisnis.'
  },
  {
    number: '02',
    title: 'iOS Development',
    description:
      'Mengembangkan aplikasi iOS dengan fokus pada performa dan pengalaman pengguna.'
  },
  {
    number: '03',
    title: 'Cross Platform',
    description:
      'Mengembangkan aplikasi untuk berbagai platform dengan proses yang efisien.'
  },
  {
    number: '04',
    title: 'API Integration',
    description:
      'Menghubungkan aplikasi dengan backend dan berbagai layanan digital.'
  }
]

const process = [
  {
    number: '01',
    title: 'Research',
    description:
      'Memahami pengguna, kebutuhan bisnis, dan tujuan aplikasi.'
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Membuat user flow dan interface yang mudah digunakan.'
  },
  {
    number: '03',
    title: 'Development',
    description:
      'Membangun aplikasi dan mengintegrasikan sistem pendukung.'
  },
  {
    number: '04',
    title: 'Release',
    description:
      'Testing, deployment, dan persiapan aplikasi untuk pengguna.'
  }
]
</script>

<style scoped>
.service-page {
  background: var(--color-bg);
  color: var(--color-text);
}

.container {
  width: min(var(--container-width), calc(100% - 48px));
  margin: 0 auto;
}

.section {
  padding: 100px 0;
}

.service-hero {
  position: relative;
  min-height: 620px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-image {
  position: absolute;
  inset: 0;
}

.hero-image img {
  position: absolute;
  right: 0;
  top: 0;
  width: 58%;
  height: 100%;
  object-fit: cover;
}

.hero-gradient {
  position: absolute;
  inset: 0;

  background: linear-gradient(
    90deg,
    var(--color-bg) 0%,
    var(--color-bg) 30%,
    rgba(250,250,250,.96) 43%,
    rgba(250,250,250,.72) 57%,
    rgba(250,250,250,.12) 75%,
    transparent 100%
  );
}

.hero-container {
  position: relative;
  z-index: 2;
}

.hero-content {
  width: 54%;
  padding: 90px 0;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 9px;

  margin-bottom: 32px;

  color: var(--color-text-secondary);
  text-decoration: none;

  font-size: 14px;
  font-weight: 500;
}

.back-link:hover {
  color: var(--color-red);
}

.back-icon {
  width: 34px;
  height: 34px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid var(--color-border);
  border-radius: 50%;

  background: rgba(255,255,255,.8);
}

.back-icon svg {
  width: 16px;
}

.eyebrow {
  margin-bottom: 14px;

  color: var(--color-deep-orange);

  font-family: var(--font-heading);
  font-size: 13px;
  font-weight: 600;

  letter-spacing: .05em;
  text-transform: uppercase;
}

.hero-content h1 {
  max-width: 670px;

  margin: 0 0 24px;

  font-family: var(--font-heading);
  font-size: clamp(42px,5vw,64px);
  line-height: 1.08;

  letter-spacing: -2px;
}

.hero-content h1 span {
  color: var(--color-deep-orange);
}

.hero-description {
  max-width: 560px;

  color: var(--color-text-secondary);

  font-size: 17px;
  line-height: 1.8;
}

.intro {
  background: var(--color-surface);
}

.intro-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 90px;
}

.intro h2 {
  max-width: 520px;

  font-family: var(--font-heading);
  font-size: clamp(34px,4vw,48px);
  line-height: 1.15;
}

.intro-text {
  padding-top: 35px;
}

.intro-text p {
  margin-bottom: 20px;

  color: var(--color-text-secondary);

  font-size: 16px;
  line-height: 1.85;
}

.services {
  background: var(--color-bg);
}

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  gap: 50px;

  margin-bottom: 50px;
}

.section-heading h2 {
  font-family: var(--font-heading);
  font-size: clamp(34px,4vw,48px);
}

.section-heading > p {
  max-width: 420px;

  color: var(--color-text-secondary);

  font-size: 15px;
  line-height: 1.8;
}

.section-heading.center {
  display: block;

  max-width: 650px;

  margin: 0 auto 55px;

  text-align: center;
}

.section-heading.center > p:last-child {
  margin: 15px auto 0;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 20px;
}

.service-card {
  padding: 32px;

  border: 1px solid var(--color-border);
  border-radius: 16px;

  background: var(--color-surface);

  transition: .2s ease;
}

.service-card:hover {
  transform: translateY(-5px);

  border-color: var(--color-orange);

  box-shadow: 0 18px 40px rgba(26,26,26,.07);
}

.service-number {
  margin-bottom: 45px;

  color: var(--color-orange);

  font-family: var(--font-heading);
  font-size: 13px;
  font-weight: 600;
}

.service-card h3 {
  margin-bottom: 10px;

  font-family: var(--font-heading);
  font-size: 20px;
}

.service-card p {
  color: var(--color-text-secondary);

  font-size: 14px;
  line-height: 1.7;
}

.process {
  background: var(--color-surface);
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 18px;
}

.process-card {
  min-height: 270px;

  padding: 28px;

  border: 1px solid var(--color-border);
  border-radius: 16px;

  background: var(--color-bg);
}

.process-card > span {
  color: var(--color-orange);

  font-family: var(--font-heading);
  font-size: 13px;
  font-weight: 600;
}

.process-icon {
  width: 42px;
  height: 42px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 40px 0 25px;

  border-radius: 12px;

  color: var(--color-deep-orange);

  background: linear-gradient(
    135deg,
    var(--color-yellow),
    var(--color-orange)
  );
}

.process-icon svg {
  width: 21px;
}

.process-card h3 {
  margin-bottom: 9px;

  font-family: var(--font-heading);
  font-size: 18px;
}

.process-card p {
  color: var(--color-text-secondary);

  font-size: 14px;
  line-height: 1.7;
}

.cta {
  padding: 90px 0;

  background: var(--color-surface);
}

.cta-box {
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 50px;

  padding: 60px;

  border: 1px solid var(--color-border);
  border-radius: 24px;

  background:
    radial-gradient(
      circle at 90% 10%,
      rgba(251,159,55,.38),
      transparent 32%
    ),
    linear-gradient(
      135deg,
      #fff6d4,
      #fff
    );
}

.cta-box h2 {
  max-width: 650px;

  font-family: var(--font-heading);
  font-size: clamp(34px,4vw,48px);
}

.cta-box h2 span {
  color: var(--color-deep-orange);
}

.cta-box > div > p:last-child {
  max-width: 560px;

  margin-top: 16px;

  color: var(--color-text-secondary);

  line-height: 1.7;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 9px;

  flex-shrink: 0;

  min-height: 52px;

  padding: 0 25px;

  border-radius: var(--radius);

  color: #fff;
  background: var(--color-red);

  font-family: var(--font-heading);
  font-size: 14px;
  font-weight: 600;

  text-decoration: none;

  transition: transform .2s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
}

.cta-button svg {
  width: 18px;
}

@media (max-width:1000px) {
  .hero-content {
    width: 60%;
  }

  .hero-image img {
    width: 62%;
  }

  .intro-grid {
    gap: 50px;
  }

  .process-grid {
    grid-template-columns: repeat(2,1fr);
  }
}

@media (max-width:760px) {
  .container {
    width: calc(100% - 32px);
  }

  .section {
    padding: 75px 0;
  }

  .service-hero {
    min-height: 540px;
  }

  .hero-image img {
    width: 48%;
  }

  .hero-content {
    width: 66%;
    padding: 60px 0;
  }

  .hero-content h1 {
    font-size: 38px;
  }

  .intro-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .intro-text {
    padding-top: 0;
  }

  .section-heading {
    display: block;
  }

  .section-heading > p {
    margin-top: 18px;
  }

  .service-grid {
    grid-template-columns: 1fr;
  }

  .process-grid {
    grid-template-columns: repeat(2,1fr);
  }

  .cta-box {
    padding: 40px 28px;
  }
}

@media (max-width:520px) {
  .service-hero {
    min-height: 500px;
  }

  .hero-image img {
    width: 44%;
  }

  .hero-content {
    width: 73%;
    padding: 45px 0;
  }

  .hero-content h1 {
    font-size: 31px;
  }

  .hero-description {
    font-size: 14px;
  }

  .intro h2,
  .section-heading h2,
  .cta-box h2 {
    font-size: 32px;
  }

  .process-grid {
    grid-template-columns: 1fr;
  }

  .process-card {
    min-height: auto;
  }

  .cta-box {
    display: block;
  }

  .cta-button {
    width: 100%;
    margin-top: 28px;
  }
}
</style>