<script setup>
// ganti / tambah data di bawah sesuai konten perusahaan kamu

const stats = [
  { label: 'Project Selesai', value: '120+' },
  { label: 'Klien Puas', value: '95%' },
  { label: 'Tahun Pengalaman', value: '5+' },
  { label: 'Tim Profesional', value: '15+' },
]

const values = [
  {
    title: 'Fokus pada Hasil',
    desc: 'Kami memastikan setiap project memberikan dampak nyata bagi bisnis klien, bukan sekadar selesai secara teknis.',
  },
  {
    title: 'Kolaboratif',
    desc: 'Kami bekerja sama erat dengan klien di setiap tahap, dari perencanaan hingga eksekusi, agar hasil sesuai kebutuhan.',
  },
  {
    title: 'Cepat & Efisien',
    desc: 'Menggunakan teknologi dan proses kerja modern agar project selesai tepat waktu tanpa mengurangi kualitas.',
  },
  {
    title: 'Terpercaya',
    desc: 'Transparansi dalam proses, biaya, dan progres project menjadi prioritas kami di setiap kerja sama.',
  },
]

const team = [
  { name: 'Nama Founder', role: 'Founder & CEO', avatar: '/team/team-2.jpg' },
  { name: 'Nama Lead Dev', role: 'Lead Developer', avatar: '/team/team-3.jpg' },
  { name: 'Nama Designer', role: 'UI/UX Designer', avatar: '/team/team-4.jpg' },
  { name: 'Nama PM', role: 'Project Manager', avatar: '/team/team-4.jpg' },
]
</script>

<template>
  <div class="about">
    <!-- Hero -->
    <section class="about-hero">
      <div class="about-hero__mesh" aria-hidden="true">
        <div class="mesh__orb mesh__orb--1"></div>
        <div class="mesh__orb mesh__orb--2"></div>
      </div>

      <div class="container">
        <p class="about-hero__label">Tentang Kami</p>
        <h1 class="about-hero__title">
          Membantu Bisnis Anda <span class="highlight">Bertransformasi Digital</span>
        </h1>
        <p class="about-hero__desc">
          Kami adalah tim profesional yang berdedikasi menghadirkan solusi digital
          terbaik untuk membantu bisnis Anda tumbuh lebih cepat dan efisien.
        </p>
      </div>
    </section>

    <!-- Stats -->
    <section class="about-stats">
      <div class="container about-stats__grid">
        <div v-for="stat in stats" :key="stat.label" class="about-stats__item">
          <h3>{{ stat.value }}</h3>
          <p>{{ stat.label }}</p>
        </div>
      </div>
    </section>

    <!-- Cerita / Visi Misi -->
    <section class="about-story">
      <div class="container about-story__grid">
        <div class="about-story__image">
          <img src="/team/team-3.jpg" alt="Tim kami" />
        </div>
        <div class="about-story__content">
          <p class="section-label">Cerita Kami</p>
          <h2>Berawal dari Ide, Tumbuh Bersama Klien</h2>
          <p>
            Kami memulai perjalanan ini dengan satu tujuan sederhana: membantu
            bisnis lokal maupun nasional untuk memiliki kehadiran digital yang
            kuat dan profesional. Seiring waktu, kepercayaan dari klien membuat
            kami terus berkembang dan memperluas layanan.
          </p>
          <p>
            Hingga saat ini, kami telah membantu puluhan bisnis dari berbagai
            industri — mulai dari UMKM, arsitek, hingga perusahaan menengah —
            untuk mewujudkan solusi digital yang sesuai kebutuhan mereka.
          </p>
        </div>
      </div>
    </section>

    <!-- Nilai-nilai perusahaan -->
    <section class="about-values">
      <div class="container">
        <p class="section-label text-center">Kenapa Memilih Kami</p>
        <h2 class="text-center">Nilai yang Kami Pegang</h2>
        <div class="about-values__grid">
          <div
            v-for="(value, index) in values"
            :key="value.title"
            class="about-values__card"
          >
            <div class="about-values__icon">
              <!-- ikon target -->
              <svg v-if="index === 0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="12" cy="12" r="1" fill="currentColor" />
              </svg>
              <!-- ikon kolaborasi -->
              <svg v-else-if="index === 1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="8" cy="8" r="3" />
                <circle cx="16" cy="16" r="3" />
                <path d="M10.5 9.5L13.5 14.5" />
              </svg>
              <!-- ikon petir / cepat -->
              <svg v-else-if="index === 2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" stroke-linejoin="round" />
              </svg>
              <!-- ikon perisai / terpercaya -->
              <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" stroke-linejoin="round" />
                <path d="M9 12l2 2 4-4" stroke-linejoin="round" />
              </svg>
            </div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tim -->
    <section class="about-team">
      <div class="container">
        <p class="section-label text-center">Tim Kami</p>
        <h2 class="text-center">Orang-orang di Balik Layanan Kami</h2>
        <div class="about-team__grid">
          <div v-for="member in team" :key="member.name" class="about-team__card">
            <img :src="member.avatar" :alt="member.name" />
            <h3>{{ member.name }}</h3>
            <p>{{ member.role }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="about-cta">
      <div class="container about-cta__box">
        <h2>Siap Bekerja Sama dengan Kami?</h2>
        <p>Konsultasikan kebutuhan digital bisnis Anda secara gratis bersama tim kami.</p>
        <router-link to="/kontak" class="btn-primary">Konsultasi Gratis</router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about {
  /* palet sama persis dengan halaman Layanan / Portofolio / Blog */
  --cream: #FCEF91;
  --orange-light: #FB9E3A;
  --orange: #E6521F;
  --red: #EA2F14;
  --ink: #202020;
}

.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 24px;
  position: relative;
  z-index: 2;
}

.section-label {
  color: var(--red);
  font-size: 14px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.text-center {
  text-align: center;
}

/* Hero */
.about-hero {
  position: relative;
  overflow: hidden;
  padding: 160px clamp(20px, 6vw, 80px) 90px;
  /* gradient identik dengan hero Perencanaan / Portofolio / Blog */
  background: linear-gradient(160deg, var(--cream) 0%, #fff3cf 45%, #ffe6c2 100%);
  text-align: left;
}

.about-hero__mesh { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
.mesh__orb { position: absolute; border-radius: 50%; filter: blur(70px); opacity: 0.5; }
.mesh__orb--1 { width: 420px; height: 420px; top: -160px; left: -120px; background: radial-gradient(circle, var(--orange-light), transparent 70%); }
.mesh__orb--2 { width: 380px; height: 380px; top: -100px; right: -140px; background: radial-gradient(circle, var(--red), transparent 70%); opacity: 0.28; }

.about-hero__label {
  color: var(--red);
  font-weight: 800;
  font-size: 12.5px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 14px;
}

.about-hero__title {
  font-size: clamp(30px, 4.2vw, 48px);
  font-weight: 800;
  line-height: 1.16;
  letter-spacing: -0.02em;
  color: var(--ink);
  max-width: 720px;
  margin: 0 0 20px;
}

.about-hero__title .highlight {
  color: var(--orange);
}

.about-hero__desc {
  max-width: 460px;
  margin: 0;
  color: #5b4a2a;
  font-size: 15.5px;
  line-height: 1.75;
}

/* Stats */
.about-stats {
  padding: 48px 0;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
}

.about-stats__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  text-align: center;
}

.about-stats__item h3 {
  font-size: 32px;
  font-weight: 800;
  color: var(--orange);
  margin-bottom: 4px;
}

.about-stats__item p {
  color: #666;
  font-size: 14px;
}

/* Story */
.about-story {
  padding: 80px 0;
  background: #fff;
}

.about-story__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
  align-items: center;
}

.about-story__image img {
  width: 100%;
  border-radius: 20px;
  object-fit: cover;
  aspect-ratio: 4 / 3;
}

.about-story__content h2 {
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 16px;
  color: #1a1a1a;
}

.about-story__content p {
  color: #555;
  line-height: 1.75;
  margin-bottom: 14px;
}

/* Values */
.about-values {
  padding: 80px 0;
  background: #fafafa;
}

.about-values h2 {
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 40px;
  color: #1a1a1a;
}

.about-values__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.about-values__card {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 28px 22px;
  text-align: center;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.about-values__card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
}

.about-values__icon {
  width: 48px;
  height: 48px;
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: #fff2d4;
  color: var(--orange);
}

.about-values__icon svg {
  width: 24px;
  height: 24px;
}

.about-values__card h3 {
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #1a1a1a;
}

.about-values__card p {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
}

/* Team */
.about-team {
  padding: 80px 0;
  background: #fff;
}

.about-team h2 {
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 40px;
  color: #1a1a1a;
}

.about-team__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.about-team__card {
  text-align: center;
}

.about-team__card img {
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 14px;
}

.about-team__card h3 {
  font-size: 16px;
  font-weight: 700;
  color: #1a1a1a;
}

.about-team__card p {
  font-size: 14px;
  color: var(--orange);
}

/* CTA */
.about-cta {
  position: relative;
  overflow: hidden;
  padding: 100px clamp(20px, 6vw, 80px);
  background: linear-gradient(115deg, #fcef91 0%, #ffa447 45%, #f93827 100%);
  text-align: center;
}

.about-cta__box {
  position: relative;
  z-index: 2;
  max-width: 600px;
  margin: 0 auto;
}

.about-cta__box h2 {
  font-size: clamp(24px, 3.4vw, 36px);
  font-weight: 800;
  margin-bottom: 14px;
  color: #201409;
}

.about-cta__box p {
  color: rgba(32, 20, 9, 0.75);
  margin-bottom: 32px;
  line-height: 1.7;
}

.btn-primary {
  display: inline-block;
  background: #fff;
  color: var(--red);
  font-weight: 800;
  padding: 16px 32px;
  border-radius: 999px;
  text-decoration: none;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.15);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.btn-primary:hover {
  transform: translateY(-3px);
}

/* Responsive */
@media (max-width: 900px) {
  .about-stats__grid,
  .about-values__grid,
  .about-team__grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .about-story__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 650px) {
  .about-hero {
    padding: 120px 20px 60px;
  }
}

@media (max-width: 480px) {
  .about-hero__title {
    font-size: 26px;
    margin: 0 0 14px;
  }
  .about-hero__desc {
    font-size: 14px;
  }

  .about-stats__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
  .about-stats__item h3 {
    font-size: 24px;
  }

  /* Tetap 2 kolom per baris, hanya diperkecil supaya pas di layar HP */
  .about-values__grid,
  .about-team__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
  }

  .about-values__card {
    padding: 18px 12px;
  }
  .about-values__icon {
    width: 38px;
    height: 38px;
    margin-bottom: 10px;
  }
  .about-values__icon svg {
    width: 18px;
    height: 18px;
  }
  .about-values__card h3 {
    font-size: 14px;
    margin-bottom: 6px;
  }
  .about-values__card p {
    font-size: 12px;
    line-height: 1.5;
  }

  .about-team__card h3 {
    font-size: 13px;
  }
  .about-team__card p {
    font-size: 12px;
  }
}
</style>