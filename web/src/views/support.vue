<script setup>
import {
  Wrench,
  MessageCircle,
  ShieldCheck,
  Gauge,
  DatabaseBackup,
  Rocket,
  CircleHelp,
  CheckCircle2,
  Settings,
  Activity,
  Zap,
  Headphones,
  ArrowRight,
  Search,
  LockKeyhole,
  RefreshCw,
  MonitorCheck,
  Clock3,
} from 'lucide-vue-next'
</script>

<template>
  <main class="support-page">

    <!-- =====================================================
         HERO SECTION
    ====================================================== -->
    <section class="support-hero">

      <!-- Background Grid -->
      <div class="hero-grid"></div>

      <!-- Decorative Glow -->
      <div class="hero-glow hero-glow-one"></div>
      <div class="hero-glow hero-glow-two"></div>

      <div class="hero-container">

        <!-- ================= LEFT HERO ================= -->
        <div class="hero-content">

          <div class="hero-badge">
            <span class="badge-dot"></span>
            LAYANAN · 06
          </div>

          <h1>
            Website Tetap
            <span>Prima.</span>
            Kami Siap Membantu.
          </h1>

          <p class="hero-description">
            Setelah website Anda selesai dibuat dan online, kami tetap
            mendampingi. Tim support kami siap membantu menjaga website
            tetap aman, stabil, dan berjalan dengan baik.
          </p>

          <div class="hero-buttons">

            <RouterLink
              to="/layanan/konsultasi"
              class="btn-primary"
            >
              Butuh Bantuan
              <ArrowRight :size="18" :stroke-width="2.4" />
            </RouterLink>

            <a
              href="#support-services"
              class="btn-secondary"
            >
              Lihat Layanan
              <ArrowRight :size="17" />
            </a>

          </div>

          <!-- HERO STATS -->
          <div class="hero-stats">

            <div class="hero-stat">
              <strong>24/7</strong>
              <span>Monitoring</span>
            </div>

            <div class="stat-line"></div>

            <div class="hero-stat">
              <strong>&lt; 1 Jam</strong>
              <span>Response Time</span>
            </div>

            <div class="stat-line"></div>

            <div class="hero-stat">
              <strong>99.9%</strong>
              <span>Uptime</span>
            </div>

          </div>

        </div>


        <!-- ================= RIGHT HERO ================= -->
        <div class="hero-visual">

          <!-- Floating Status -->
          <div class="floating-card card-online">
            <span class="online-dot"></span>

            <span>
              System Online
            </span>
          </div>


          <!-- SUPPORT DASHBOARD -->
          <div class="support-window">

            <!-- Window Header -->
            <div class="window-header">

              <div class="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div class="window-title">
                support.branidentity.com
              </div>

              <div class="window-status">
                <span class="status-live-dot"></span>
                LIVE
              </div>

            </div>


            <!-- Window Body -->
            <div class="window-body">

              <!-- Top -->
              <div class="support-top">

                <div>
                  <small>
                    SUPPORT CENTER
                  </small>

                  <h3>
                    How can we help?
                  </h3>
                </div>

                <div class="support-icon">
                  <CircleHelp
                    :size="22"
                    :stroke-width="2"
                  />
                </div>

              </div>


              <!-- Search -->
              <div class="support-search">

                <Search
                  :size="15"
                  :stroke-width="2"
                />

                <span>
                  Search your problem...
                </span>

              </div>


              <!-- Ticket List -->
              <div class="ticket-list">

                <!-- Ticket 1 -->
                <div class="ticket active">

                  <div class="ticket-icon">
                    <CheckCircle2
                      :size="18"
                      :stroke-width="2"
                    />
                  </div>

                  <div class="ticket-info">

                    <strong>
                      Website Maintenance
                    </strong>

                    <span>
                      Request sedang diproses
                    </span>

                  </div>

                  <div class="ticket-status">
                    Active
                  </div>

                </div>


                <!-- Ticket 2 -->
                <div class="ticket">

                  <div class="ticket-icon">
                    <Settings
                      :size="18"
                      :stroke-width="2"
                    />
                  </div>

                  <div class="ticket-info">

                    <strong>
                      Technical Support
                    </strong>

                    <span>
                      Tim support siap membantu
                    </span>

                  </div>

                  <div class="ticket-status">
                    Ready
                  </div>

                </div>


                <!-- Ticket 3 -->
                <div class="ticket">

                  <div class="ticket-icon">
                    <RefreshCw
                      :size="18"
                      :stroke-width="2"
                    />
                  </div>

                  <div class="ticket-info">

                    <strong>
                      System Update
                    </strong>

                    <span>
                      Last update 12 minutes ago
                    </span>

                  </div>

                  <div class="ticket-status">
                    Done
                  </div>

                </div>

              </div>


              <!-- Response Box -->
              <div class="response-box">

                <div class="response-icon">
                  <Zap
                    :size="20"
                    :stroke-width="2"
                  />
                </div>

                <div>

                  <strong>
                    Support Team Online
                  </strong>

                  <p>
                    Biasanya membalas dalam beberapa menit.
                  </p>

                </div>

              </div>

            </div>

          </div>


          <!-- Floating Response -->
          <div class="floating-card card-response">

            <span class="response-small-icon">
              <MessageCircle
                :size="15"
                :stroke-width="2.2"
              />
            </span>

            <span>
              Fast Response
            </span>

          </div>

        </div>

      </div>

    </section>


    <!-- =====================================================
         INTRODUCTION
    ====================================================== -->
    <section class="intro-section">

      <div class="section-heading">

        <div class="section-label">
          <span></span>
          SUPPORT SERVICE
        </div>

        <h2>
          Bukan Sekadar Membuat Website,
          <br />
          Kami <span>Menjaganya.</span>
        </h2>

        <p>
          Website yang baik membutuhkan perawatan setelah diluncurkan.
          Kami membantu memastikan website Anda tetap aman, cepat,
          dan siap digunakan kapan pun dibutuhkan.
        </p>

      </div>

    </section>


    <!-- =====================================================
         SUPPORT SERVICES
    ====================================================== -->
    <section
      id="support-services"
      class="services-section"
    >

      <div class="section-container">

        <div class="section-heading left">

          <div class="section-label">
            <span></span>
            APA YANG KAMI BANTU
          </div>

          <h2>
            Semua yang Anda Butuhkan
            <br />
            Setelah <span>Website Online.</span>
          </h2>

          <p>
            Kami menyediakan berbagai layanan untuk memastikan website
            tetap berjalan dengan baik setelah proses development selesai.
          </p>

        </div>


        <div class="service-grid">

          <!-- SERVICE 01 -->
          <article class="service-card">

            <div class="service-top">

              <div class="service-number">
                01
              </div>

              <div class="service-mini-icon">
                <Wrench
                  :size="19"
                  :stroke-width="2"
                />
              </div>

            </div>

            <div class="service-icon">
              <Wrench
                :size="26"
                :stroke-width="1.9"
              />
            </div>

            <h3>
              Maintenance Website
            </h3>

            <p>
              Kami membantu melakukan perawatan website secara berkala
              agar tetap berjalan dengan optimal.
            </p>

            <ul>
              <li>Update sistem</li>
              <li>Perbaikan bug</li>
              <li>Pengecekan website</li>
            </ul>

          </article>


          <!-- SERVICE 02 -->
          <article class="service-card featured">

            <div class="featured-label">
              POPULER
            </div>

            <div class="service-top">

              <div class="service-number">
                02
              </div>

              <div class="service-mini-icon">
                <MessageCircle
                  :size="19"
                  :stroke-width="2"
                />
              </div>

            </div>

            <div class="service-icon">
              <MessageCircle
                :size="26"
                :stroke-width="1.9"
              />
            </div>

            <h3>
              Technical Support
            </h3>

            <p>
              Ada masalah dengan website? Tim kami siap membantu
              menganalisis dan mencari solusi.
            </p>

            <ul>
              <li>Analisis error</li>
              <li>Bug fixing</li>
              <li>Bantuan teknis</li>
            </ul>

          </article>


          <!-- SERVICE 03 -->
          <article class="service-card">

            <div class="service-top">

              <div class="service-number">
                03
              </div>

              <div class="service-mini-icon">
                <ShieldCheck
                  :size="19"
                  :stroke-width="2"
                />
              </div>

            </div>

            <div class="service-icon">
              <ShieldCheck
                :size="26"
                :stroke-width="1.9"
              />
            </div>

            <h3>
              Security Monitoring
            </h3>

            <p>
              Menjaga website agar tetap aman dari berbagai masalah
              keamanan dan gangguan sistem.
            </p>

            <ul>
              <li>Security check</li>
              <li>Backup data</li>
              <li>Monitoring sistem</li>
            </ul>

          </article>


          <!-- SERVICE 04 -->
          <article class="service-card">

            <div class="service-top">

              <div class="service-number">
                04
              </div>

              <div class="service-mini-icon">
                <Gauge
                  :size="19"
                  :stroke-width="2"
                />
              </div>

            </div>

            <div class="service-icon">
              <Gauge
                :size="26"
                :stroke-width="1.9"
              />
            </div>

            <h3>
              Performance Check
            </h3>

            <p>
              Kami mengecek performa website agar halaman tetap cepat
              dan nyaman digunakan.
            </p>

            <ul>
              <li>Speed optimization</li>
              <li>Performance check</li>
              <li>Database check</li>
            </ul>

          </article>


          <!-- SERVICE 05 -->
          <article class="service-card">

            <div class="service-top">

              <div class="service-number">
                05
              </div>

              <div class="service-mini-icon">
                <DatabaseBackup
                  :size="19"
                  :stroke-width="2"
                />
              </div>

            </div>

            <div class="service-icon">
              <DatabaseBackup
                :size="26"
                :stroke-width="1.9"
              />
            </div>

            <h3>
              Backup & Recovery
            </h3>

            <p>
              Menyiapkan backup dan membantu proses pemulihan apabila
              terjadi masalah pada website.
            </p>

            <ul>
              <li>Backup berkala</li>
              <li>Data recovery</li>
              <li>System restore</li>
            </ul>

          </article>


          <!-- SERVICE 06 -->
          <article class="service-card">

            <div class="service-top">

              <div class="service-number">
                06
              </div>

              <div class="service-mini-icon">
                <Rocket
                  :size="19"
                  :stroke-width="2"
                />
              </div>

            </div>

            <div class="service-icon">
              <Rocket
                :size="26"
                :stroke-width="1.9"
              />
            </div>

            <h3>
              Website Improvement
            </h3>

            <p>
              Website dapat terus dikembangkan mengikuti kebutuhan
              bisnis Anda.
            </p>

            <ul>
              <li>Tambah fitur</li>
              <li>UI improvement</li>
              <li>Pengembangan lanjutan</li>
            </ul>

          </article>

        </div>

      </div>

    </section>


    <!-- =====================================================
         PROCESS
    ====================================================== -->
    <section class="process-section">

      <div class="process-container">

        <div class="process-heading">

          <div class="section-label dark-label">
            <span></span>
            CARA KAMI BEKERJA
          </div>

          <h2>
            Dari Laporan Masalah
            <br />
            Sampai <span>Selesai.</span>
          </h2>

          <p>
            Proses support kami dibuat sederhana supaya masalah dapat
            ditangani dengan cepat dan jelas.
          </p>

        </div>


        <div class="process-line"></div>


        <div class="process-grid">

          <!-- STEP 01 -->
          <div class="process-item">

            <div class="process-circle">
              <MessageCircle
                :size="22"
                :stroke-width="1.8"
              />
            </div>

            <div class="process-number">
              01
            </div>

            <h3>
              Laporkan
            </h3>

            <p>
              Sampaikan masalah atau kebutuhan Anda kepada tim support.
            </p>

          </div>


          <!-- STEP 02 -->
          <div class="process-item">

            <div class="process-circle">
              <Search
                :size="22"
                :stroke-width="1.8"
              />
            </div>

            <div class="process-number">
              02
            </div>

            <h3>
              Analisis
            </h3>

            <p>
              Tim kami memeriksa penyebab masalah dan menentukan solusi.
            </p>

          </div>


          <!-- STEP 03 -->
          <div class="process-item">

            <div class="process-circle">
              <Wrench
                :size="22"
                :stroke-width="1.8"
              />
            </div>

            <div class="process-number">
              03
            </div>

            <h3>
              Perbaikan
            </h3>

            <p>
              Kami melakukan perbaikan dan pengujian pada sistem.
            </p>

          </div>


          <!-- STEP 04 -->
          <div class="process-item">

            <div class="process-circle">
              <CheckCircle2
                :size="22"
                :stroke-width="1.8"
              />
            </div>

            <div class="process-number">
              04
            </div>

            <h3>
              Selesai
            </h3>

            <p>
              Website kembali normal dan Anda mendapatkan informasi
              hasil pengerjaan.
            </p>

          </div>

        </div>

      </div>

    </section>


    <!-- =====================================================
         WHY SUPPORT
    ====================================================== -->
    <section class="why-section">

      <div class="why-container">

        <!-- LEFT -->
        <div class="why-content">

          <div class="section-label">
            <span></span>
            KENAPA SUPPORT KAMI?
          </div>

          <h2>
            Karena Website
            <br />
            Tidak Berhenti
            <br />
            Setelah <span>Launching.</span>
          </h2>

          <p>
            Bisnis terus berkembang. Website Anda juga harus ikut
            berkembang. Karena itu kami menyediakan support yang
            berkelanjutan untuk membantu kebutuhan digital Anda.
          </p>

          <RouterLink
            to="/layanan/konsultasi"
            class="why-button"
          >
            Konsultasikan Kebutuhan
            <ArrowRight
              :size="17"
              :stroke-width="2.2"
            />
          </RouterLink>

        </div>


        <!-- RIGHT -->
        <div class="why-cards">

          <!-- WHY 01 -->
          <div class="why-card">

            <div class="why-icon">
              <Zap
                :size="21"
                :stroke-width="2"
              />
            </div>

            <div>
              <strong>
                Respon Cepat
              </strong>

              <p>
                Tim siap membantu ketika Anda membutuhkan.
              </p>
            </div>

          </div>


          <!-- WHY 02 -->
          <div class="why-card">

            <div class="why-icon">
              <ShieldCheck
                :size="21"
                :stroke-width="2"
              />
            </div>

            <div>
              <strong>
                Lebih Aman
              </strong>

              <p>
                Monitoring dan maintenance membantu menjaga sistem.
              </p>
            </div>

          </div>


          <!-- WHY 03 -->
          <div class="why-card">

            <div class="why-icon">
              <Rocket
                :size="21"
                :stroke-width="2"
              />
            </div>

            <div>
              <strong>
                Terus Berkembang
              </strong>

              <p>
                Website dapat terus dikembangkan sesuai kebutuhan.
              </p>
            </div>

          </div>


          <!-- WHY 04 -->
          <div class="why-card">

            <div class="why-icon">
              <Headphones
                :size="21"
                :stroke-width="2"
              />
            </div>

            <div>
              <strong>
                Pendampingan
              </strong>

              <p>
                Kami tetap menjadi partner setelah website online.
              </p>
            </div>

          </div>


          <!-- WHY 05 -->
          <div class="why-card">

            <div class="why-icon">
              <LockKeyhole
                :size="21"
                :stroke-width="2"
              />
            </div>

            <div>
              <strong>
                Keamanan Sistem
              </strong>

              <p>
                Membantu menjaga sistem tetap aman dan terkontrol.
              </p>
            </div>

          </div>


          <!-- WHY 06 -->
          <div class="why-card">

            <div class="why-icon">
              <MonitorCheck
                :size="21"
                :stroke-width="2"
              />
            </div>

            <div>
              <strong>
                Monitoring
              </strong>

              <p>
                Memantau kondisi website agar tetap berjalan optimal.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>


    <!-- =====================================================
         SUPPORT CTA
    ====================================================== -->
    <section class="cta-section">

      <div class="cta-pattern"></div>

      <div class="cta-glow"></div>

      <div class="cta-container">

        <div class="cta-label">
          <Headphones
            :size="14"
            :stroke-width="2"
          />

          SUPPORT · READY
        </div>

        <h2>
          Punya Kendala dengan
          <br />
          Website Anda?
        </h2>

        <p>
          Jangan biarkan masalah kecil mengganggu bisnis Anda.
          Ceritakan kepada kami dan mari cari solusinya bersama.
        </p>

        <RouterLink
          to="/layanan/konsultasi"
          class="cta-button"
        >
          Hubungi Tim Kami

          <ArrowRight
            :size="18"
            :stroke-width="2.2"
          />
        </RouterLink>

      </div>

    </section>

  </main>
</template>


<style scoped>

/* =====================================================
   GLOBAL
===================================================== */

* {
  box-sizing: border-box;
}

.support-page {
  width: 100%;
  min-height: 100vh;

  overflow: hidden;

  color: #181716;

  background: #ffffff;
}


/* =====================================================
   HERO
===================================================== */

.support-hero {
  position: relative;

  min-height: 650px;

  overflow: hidden;

  background:
    linear-gradient(
      115deg,
      #fff0bc 0%,
      #fff7da 43%,
      #ffe0c8 100%
    );
}


/* GRID */

.hero-grid {
  position: absolute;

  inset: 0;

  opacity: 0.42;

  background-image:
    linear-gradient(
      rgba(245, 96, 38, 0.075) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(245, 96, 38, 0.075) 1px,
      transparent 1px
    );

  background-size: 38px 38px;
}


/* GLOW */

.hero-glow {
  position: absolute;

  border-radius: 50%;

  filter: blur(5px);

  pointer-events: none;
}

.hero-glow-one {
  width: 420px;
  height: 420px;

  top: -200px;
  left: -100px;

  background: rgba(255, 171, 54, 0.22);
}

.hero-glow-two {
  width: 500px;
  height: 500px;

  right: -150px;
  bottom: -280px;

  background: rgba(244, 76, 32, 0.12);
}


/* HERO CONTAINER */

.hero-container {
  position: relative;

  z-index: 2;

  max-width: 1200px;

  min-height: 650px;

  margin: 0 auto;

  padding: 85px 40px;

  display: grid;

  grid-template-columns: 1fr 1fr;

  align-items: center;

  gap: 65px;
}


/* HERO CONTENT */

.hero-content {
  position: relative;
  z-index: 3;
}


/* BADGE */

.hero-badge {
  display: inline-flex;

  align-items: center;

  gap: 9px;

  padding: 10px 17px;

  border-radius: 50px;

  color: #f04b23;

  background: rgba(255, 255, 255, 0.9);

  box-shadow:
    0 10px 30px rgba(91, 59, 37, 0.07);

  font-size: 11px;

  font-weight: 800;

  letter-spacing: 1px;
}

.badge-dot {
  width: 8px;
  height: 8px;

  flex-shrink: 0;

  border-radius: 50%;

  background: #f04b23;

  box-shadow:
    0 0 0 4px rgba(240, 75, 35, 0.12);
}


/* HERO TITLE */

.hero-content h1 {
  max-width: 620px;

  margin: 28px 0 20px;

  font-size: clamp(45px, 5vw, 68px);

  line-height: 0.99;

  letter-spacing: -3px;

  font-weight: 850;
}

.hero-content h1 span {
  color: #f04b23;
}


/* DESCRIPTION */

.hero-description {
  max-width: 590px;

  margin: 0;

  color: #604e42;

  font-size: 16px;

  line-height: 1.75;
}


/* BUTTONS */

.hero-buttons {
  display: flex;

  align-items: center;

  gap: 13px;

  margin-top: 30px;
}

.btn-primary,
.btn-secondary {
  min-height: 52px;

  padding: 0 24px;

  display: inline-flex;

  align-items: center;

  justify-content: center;

  gap: 9px;

  border-radius: 30px;

  text-decoration: none;

  font-size: 13px;

  font-weight: 800;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease;
}

.btn-primary {
  color: #ffffff;

  background:
    linear-gradient(
      135deg,
      #ff9e39,
      #f04420
    );

  box-shadow:
    0 16px 32px rgba(242, 77, 31, 0.24);
}

.btn-primary:hover {
  transform: translateY(-4px);

  box-shadow:
    0 20px 38px rgba(242, 77, 31, 0.3);
}

.btn-secondary {
  color: #181716;

  background: #ffffff;

  border: 1px solid #f0cfc0;
}

.btn-secondary:hover {
  transform: translateY(-4px);

  border-color: #f04b23;
}


/* HERO STATS */

.hero-stats {
  display: flex;

  align-items: center;

  margin-top: 46px;
}

.hero-stat {
  min-width: 100px;

  display: flex;

  flex-direction: column;
}

.hero-stat strong {
  font-size: 20px;

  line-height: 1.2;
}

.hero-stat span {
  margin-top: 4px;

  color: #806f64;

  font-size: 11px;
}

.stat-line {
  width: 1px;

  height: 34px;

  margin: 0 19px;

  background: #ddc9b8;
}


/* =====================================================
   HERO SUPPORT MOCKUP
===================================================== */

.hero-visual {
  position: relative;

  min-height: 475px;

  display: flex;

  align-items: center;

  justify-content: center;
}


/* WINDOW */

.support-window {
  position: relative;

  width: 100%;

  max-width: 550px;

  overflow: hidden;

  border: 5px solid #29231e;

  border-radius: 25px;

  background: #ffffff;

  box-shadow:
    20px 25px 0 rgba(41, 35, 30, 0.08),
    0 30px 70px rgba(111, 70, 40, 0.16);

  transform: rotate(-2deg);

  transition: transform 0.35s ease;
}

.support-window:hover {
  transform:
    rotate(0deg)
    translateY(-6px);
}


/* WINDOW HEADER */

.window-header {
  height: 52px;

  padding: 0 17px;

  display: flex;

  align-items: center;

  border-bottom: 1px solid #eee2d7;

  background: #fffaf4;
}

.window-dots {
  display: flex;

  align-items: center;

  gap: 6px;
}

.window-dots span {
  width: 9px;
  height: 9px;

  border-radius: 50%;

  background: #ef815b;
}

.window-title {
  flex: 1;

  margin-left: 18px;

  color: #84776f;

  font-size: 10px;
}

.window-status {
  display: flex;

  align-items: center;

  gap: 5px;

  color: #2b9c65;

  font-size: 9px;

  font-weight: 800;
}

.status-live-dot {
  width: 6px;
  height: 6px;

  border-radius: 50%;

  background: #35ad6d;

  box-shadow:
    0 0 0 3px rgba(53, 173, 109, 0.12);
}


/* WINDOW BODY */

.window-body {
  padding: 27px;
}


/* SUPPORT TOP */

.support-top {
  display: flex;

  align-items: center;

  justify-content: space-between;
}

.support-top small {
  color: #f04b23;

  font-size: 9px;

  font-weight: 800;

  letter-spacing: 1.1px;
}

.support-top h3 {
  margin: 6px 0 0;

  color: #24211f;

  font-size: 23px;

  line-height: 1.2;
}

.support-icon {
  width: 43px;
  height: 43px;

  display: grid;

  place-items: center;

  border-radius: 13px;

  color: #ffffff;

  background: #f04b23;
}


/* SEARCH */

.support-search {
  height: 40px;

  margin-top: 20px;

  padding: 0 13px;

  display: flex;

  align-items: center;

  gap: 9px;

  border: 1px solid #eee3db;

  border-radius: 11px;

  color: #a09690;

  background: #fffdfb;

  font-size: 10px;
}


/* TICKETS */

.ticket-list {
  margin-top: 18px;
}

.ticket {
  min-height: 64px;

  display: flex;

  align-items: center;

  gap: 11px;

  padding: 11px;

  margin-bottom: 9px;

  border: 1px solid #eee5dd;

  border-radius: 13px;

  background: #ffffff;

  transition:
    transform 0.2s ease,
    border-color 0.2s ease;
}

.ticket:hover {
  transform: translateX(3px);

  border-color: #f2c2b1;
}

.ticket.active {
  border-color: #ffd1c0;

  background: #fff8f4;
}

.ticket-icon {
  width: 35px;
  height: 35px;

  flex-shrink: 0;

  display: grid;

  place-items: center;

  border-radius: 10px;

  color: #f04b23;

  background: #ffe5d8;
}

.ticket-info {
  flex: 1;

  display: flex;

  flex-direction: column;
}

.ticket-info strong {
  color: #302b27;

  font-size: 11px;
}

.ticket-info span {
  margin-top: 3px;

  color: #8d8077;

  font-size: 9px;
}

.ticket-status {
  color: #3b9a69;

  font-size: 9px;

  font-weight: 800;
}


/* RESPONSE */

.response-box {
  display: flex;

  align-items: center;

  gap: 11px;

  padding: 14px;

  margin-top: 15px;

  border-radius: 13px;

  color: #ffffff;

  background: #20201e;
}

.response-icon {
  width: 35px;
  height: 35px;

  flex-shrink: 0;

  display: grid;

  place-items: center;

  border-radius: 10px;

  color: #ff8b63;

  background: rgba(240, 75, 35, 0.13);
}

.response-box strong {
  display: block;

  font-size: 11px;
}

.response-box p {
  margin: 3px 0 0;

  color: #aaa29c;

  font-size: 9px;
}


/* FLOATING CARD */

.floating-card {
  position: absolute;

  z-index: 5;

  display: flex;

  align-items: center;

  gap: 8px;

  padding: 12px 16px;

  border-radius: 50px;

  color: #24211f;

  background: #ffffff;

  box-shadow:
    0 15px 35px rgba(0, 0, 0, 0.12);

  font-size: 10px;

  font-weight: 800;
}

.card-online {
  top: 44px;

  left: -15px;
}

.online-dot {
  width: 9px;
  height: 9px;

  border-radius: 50%;

  background: #35ad6d;

  box-shadow:
    0 0 0 5px #e0f7ea;
}

.card-response {
  right: -6px;

  bottom: 45px;
}

.response-small-icon {
  width: 25px;
  height: 25px;

  display: grid;

  place-items: center;

  border-radius: 50%;

  color: #f04b23;

  background: #fff0ea;
}


/* =====================================================
   SECTION COMMON
===================================================== */

.section-label {
  display: inline-flex;

  align-items: center;

  gap: 8px;

  padding: 9px 15px;

  border-radius: 50px;

  color: #f04b23;

  background: rgba(255, 255, 255, 0.9);

  box-shadow:
    0 8px 25px rgba(0, 0, 0, 0.05);

  font-size: 10px;

  font-weight: 800;

  letter-spacing: 1px;
}

.section-label > span {
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: #f04b23;
}


/* =====================================================
   INTRO
===================================================== */

.intro-section {
  padding: 105px 25px 75px;

  background: #ffffff;
}

.section-heading {
  max-width: 850px;

  margin: 0 auto;

  text-align: center;
}

.section-heading h2 {
  margin: 22px 0 18px;

  color: #181716;

  font-size: clamp(34px, 4vw, 52px);

  line-height: 1.08;

  letter-spacing: -2px;
}

.section-heading h2 span {
  color: #f04b23;
}

.section-heading p {
  max-width: 670px;

  margin: 0 auto;

  color: #756b64;

  font-size: 14px;

  line-height: 1.8;
}


/* =====================================================
   SERVICES
===================================================== */

.services-section {
  padding: 85px 25px 110px;

  background: #fffaf5;
}

.section-container {
  max-width: 1200px;

  margin: 0 auto;
}

.section-heading.left {
  max-width: 720px;

  margin: 0 0 50px;

  text-align: left;
}

.section-heading.left h2 {
  margin-top: 20px;
}

.section-heading.left p {
  margin: 0;

  max-width: 620px;
}


/* SERVICE GRID */

.service-grid {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 20px;
}


/* SERVICE CARD */

.service-card {
  position: relative;

  min-height: 350px;

  padding: 28px;

  overflow: hidden;

  border: 1px solid #f0e2d7;

  border-radius: 22px;

  background: #ffffff;

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.service-card::after {
  content: "";

  position: absolute;

  width: 120px;
  height: 120px;

  right: -65px;
  bottom: -65px;

  border-radius: 50%;

  background: rgba(240, 75, 35, 0.05);

  transition: transform 0.3s ease;
}

.service-card:hover {
  transform: translateY(-8px);

  border-color: #f3b39e;

  box-shadow:
    0 22px 50px rgba(80, 48, 30, 0.09);
}

.service-card:hover::after {
  transform: scale(1.5);
}


/* FEATURED */

.service-card.featured {
  color: #ffffff;

  background:
    linear-gradient(
      145deg,
      #282522,
      #11100f
    );

  border-color: #282522;

  transform: translateY(-9px);

  box-shadow:
    0 25px 50px rgba(0, 0, 0, 0.16);
}

.service-card.featured:hover {
  transform: translateY(-15px);

  border-color: #3d3833;
}

.featured-label {
  position: absolute;

  top: 20px;
  right: 20px;

  padding: 6px 10px;

  border-radius: 20px;

  color: #ffffff;

  background: #f04b23;

  font-size: 8px;

  font-weight: 800;

  letter-spacing: 0.6px;
}


/* SERVICE TOP */

.service-top {
  display: flex;

  align-items: center;

  justify-content: space-between;
}

.service-number {
  color: #d7c9c0;

  font-size: 11px;

  font-weight: 800;
}

.featured .service-number {
  color: #77716c;
}

.service-mini-icon {
  width: 34px;
  height: 34px;

  display: grid;

  place-items: center;

  border-radius: 10px;

  color: #f04b23;

  background: #fff1eb;
}

.featured .service-mini-icon {
  color: #ff8a61;

  background: rgba(240, 75, 35, 0.13);
}


/* BIG SERVICE ICON */

.service-icon {
  width: 55px;
  height: 55px;

  margin: 25px 0 19px;

  display: grid;

  place-items: center;

  border-radius: 16px;

  color: #f04b23;

  background: #fff0e9;
}

.featured .service-icon {
  color: #ffffff;

  background: #f04b23;
}


/* SERVICE TEXT */

.service-card h3 {
  margin: 0 0 11px;

  font-size: 20px;

  line-height: 1.2;
}

.service-card p {
  margin: 0;

  color: #80746c;

  font-size: 12px;

  line-height: 1.7;
}

.featured p {
  color: #b9b0aa;
}


/* SERVICE LIST */

.service-card ul {
  padding: 0;

  margin: 19px 0 0;

  list-style: none;
}

.service-card li {
  display: flex;

  align-items: center;

  margin-bottom: 8px;

  color: #4f4945;

  font-size: 11px;
}

.featured li {
  color: #ddd5d0;
}

.service-card li::before {
  content: "";

  width: 5px;
  height: 5px;

  flex-shrink: 0;

  margin-right: 9px;

  border-radius: 50%;

  background: #f04b23;
}


/* =====================================================
   PROCESS
===================================================== */

.process-section {
  padding: 110px 25px;

  color: #ffffff;

  background: #1d1b19;
}

.process-container {
  max-width: 1200px;

  margin: 0 auto;
}

.process-heading {
  max-width: 670px;
}

.dark-label {
  color: #ff744c;

  background: rgba(255, 255, 255, 0.07);

  box-shadow: none;
}

.dark-label > span {
  background: #ff744c;
}

.process-heading h2 {
  margin: 22px 0 16px;

  font-size: clamp(35px, 4vw, 52px);

  line-height: 1.08;

  letter-spacing: -2px;
}

.process-heading h2 span {
  color: #ff7147;
}

.process-heading p {
  max-width: 600px;

  margin: 0;

  color: #aaa29c;

  font-size: 14px;

  line-height: 1.8;
}


/* LINE */

.process-line {
  width: 100%;
  height: 1px;

  margin: 55px 0 45px;

  background: #45413d;
}


/* PROCESS GRID */

.process-grid {
  display: grid;

  grid-template-columns:
    repeat(4, 1fr);

  gap: 30px;
}

.process-item {
  position: relative;
}


/* CIRCLE */

.process-circle {
  width: 60px;
  height: 60px;

  margin-bottom: 17px;

  display: grid;

  place-items: center;

  border: 1px solid #504b47;

  border-radius: 50%;

  color: #ff7147;

  background: rgba(255, 255, 255, 0.025);

  transition:
    background 0.25s ease,
    border-color 0.25s ease;
}

.process-item:hover .process-circle {
  border-color: #f04b23;

  background: rgba(240, 75, 35, 0.1);
}

.process-number {
  margin-bottom: 10px;

  color: #6f6964;

  font-size: 9px;

  font-weight: 800;

  letter-spacing: 1px;
}

.process-item h3 {
  margin: 0 0 10px;

  font-size: 18px;
}

.process-item p {
  max-width: 230px;

  margin: 0;

  color: #aaa29c;

  font-size: 12px;

  line-height: 1.7;
}


/* =====================================================
   WHY SUPPORT
===================================================== */

.why-section {
  padding: 110px 25px;

  background: #ffffff;
}

.why-container {
  max-width: 1100px;

  margin: 0 auto;

  display: grid;

  grid-template-columns: 0.95fr 1.05fr;

  gap: 75px;

  align-items: center;
}


/* WHY CONTENT */

.why-content h2 {
  margin: 22px 0;

  font-size: clamp(36px, 4vw, 50px);

  line-height: 1.05;

  letter-spacing: -2px;
}

.why-content h2 span {
  color: #f04b23;
}

.why-content > p {
  max-width: 500px;

  margin: 0;

  color: #746b65;

  font-size: 14px;

  line-height: 1.8;
}


/* WHY BUTTON */

.why-button {
  display: inline-flex;

  align-items: center;

  gap: 9px;

  margin-top: 25px;

  padding: 14px 21px;

  border-radius: 30px;

  color: #ffffff;

  background: #f04b23;

  text-decoration: none;

  font-size: 12px;

  font-weight: 800;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.why-button:hover {
  transform: translateY(-3px);

  box-shadow:
    0 13px 30px rgba(240, 75, 35, 0.22);
}


/* WHY CARDS */

.why-cards {
  display: grid;

  grid-template-columns:
    1fr 1fr;

  gap: 14px;
}

.why-card {
  min-height: 145px;

  padding: 22px;

  border: 1px solid #eee3db;

  border-radius: 18px;

  background: #fffaf6;

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;
}

.why-card:hover {
  transform: translateY(-5px);

  border-color: #f5b49f;

  box-shadow:
    0 15px 30px rgba(80, 48, 30, 0.06);
}

.why-icon {
  width: 42px;
  height: 42px;

  margin-bottom: 17px;

  display: grid;

  place-items: center;

  border-radius: 12px;

  color: #f04b23;

  background: #ffe9df;
}

.why-card strong {
  display: block;

  color: #302b27;

  font-size: 13px;
}

.why-card p {
  margin: 7px 0 0;

  color: #837870;

  font-size: 10px;

  line-height: 1.6;
}


/* =====================================================
   CTA
===================================================== */

.cta-section {
  position: relative;

  padding: 110px 25px;

  overflow: hidden;

  color: #ffffff;

  background:
    linear-gradient(
      135deg,
      #ff9b37,
      #f04420
    );
}


/* CTA PATTERN */

.cta-pattern {
  position: absolute;

  inset: 0;

  opacity: 0.12;

  background-image:
    linear-gradient(
      rgba(255,255,255,0.5) 1px,
      transparent 1px
    ),
    linear-gradient(
      90deg,
      rgba(255,255,255,0.5) 1px,
      transparent 1px
    );

  background-size: 38px 38px;
}


/* CTA GLOW */

.cta-glow {
  position: absolute;

  width: 500px;
  height: 500px;

  top: -320px;
  right: -100px;

  border-radius: 50%;

  background: rgba(255, 255, 255, 0.13);

  filter: blur(8px);
}


/* CTA CONTAINER */

.cta-container {
  position: relative;

  z-index: 2;

  max-width: 800px;

  margin: 0 auto;

  text-align: center;
}


/* CTA LABEL */

.cta-label {
  display: inline-flex;

  align-items: center;

  gap: 7px;

  padding: 8px 14px;

  border: 1px solid rgba(255, 255, 255, 0.4);

  border-radius: 30px;

  font-size: 9px;

  font-weight: 800;

  letter-spacing: 1px;
}


/* CTA TITLE */

.cta-container h2 {
  margin: 22px 0 18px;

  font-size: clamp(38px, 5vw, 60px);

  line-height: 1;

  letter-spacing: -2px;
}


/* CTA TEXT */

.cta-container p {
  max-width: 570px;

  margin: 0 auto;

  color: rgba(255, 255, 255, 0.86);

  font-size: 14px;

  line-height: 1.8;
}


/* CTA BUTTON */

.cta-button {
  display: inline-flex;

  align-items: center;

  justify-content: center;

  gap: 9px;

  margin-top: 30px;

  padding: 16px 27px;

  border-radius: 30px;

  color: #f04b23;

  background: #ffffff;

  text-decoration: none;

  font-size: 12px;

  font-weight: 800;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.cta-button:hover {
  transform: translateY(-4px);

  box-shadow:
    0 16px 35px rgba(0, 0, 0, 0.15);
}


/* =====================================================
   TABLET
===================================================== */

@media (max-width: 950px) {

  .hero-container {
    grid-template-columns: 1fr;

    gap: 40px;

    padding-top: 70px;

    padding-bottom: 70px;
  }

  .hero-content {
    text-align: center;
  }

  .hero-content h1 {
    margin-left: auto;

    margin-right: auto;
  }

  .hero-description {
    margin-left: auto;

    margin-right: auto;
  }

  .hero-buttons {
    justify-content: center;
  }

  .hero-stats {
    justify-content: center;
  }

  .hero-visual {
    min-height: 440px;
  }

  .service-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }

  .process-grid {
    grid-template-columns:
      repeat(2, 1fr);

    gap: 45px;
  }

  .why-container {
    grid-template-columns: 1fr;

    gap: 55px;
  }

}


/* =====================================================
   MOBILE
===================================================== */

@media (max-width: 650px) {

  /* HERO */

  .support-hero {
    min-height: auto;
  }

  .hero-container {
    padding: 60px 20px;
  }

  .hero-content h1 {
    font-size: 44px;

    letter-spacing: -2px;
  }

  .hero-description {
    font-size: 14px;

    line-height: 1.7;
  }

  .hero-buttons {
    flex-direction: column;

    width: 100%;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
  }


  /* STATS */

  .hero-stats {
    flex-wrap: wrap;

    justify-content: center;

    gap: 14px;
  }

  .stat-line {
    display: none;
  }


  /* MOCKUP */

  .hero-visual {
    min-height: 350px;

    margin-top: 10px;
  }

  .support-window {
    width: calc(100% - 10px);

    border-width: 4px;

    border-radius: 19px;

    transform: none;
  }

  .support-window:hover {
    transform: none;
  }

  .window-body {
    padding: 17px;
  }

  .window-title {
    font-size: 8px;
  }

  .support-top h3 {
    font-size: 19px;
  }

  .support-search {
    height: 36px;
  }

  .ticket {
    min-height: 58px;

    padding: 9px;
  }

  .ticket-status {
    display: none;
  }

  .ticket-info strong {
    font-size: 10px;
  }

  .ticket-info span {
    font-size: 8px;
  }

  .response-box p {
    font-size: 8px;
  }

  .card-online {
    top: -4px;

    left: -2px;

    padding: 10px 12px;
  }

  .card-response {
    right: -2px;

    bottom: -4px;

    padding: 10px 12px;
  }


  /* INTRO */

  .intro-section {
    padding: 80px 20px 55px;
  }

  .section-heading h2 {
    font-size: 35px;

    letter-spacing: -1.3px;
  }


  /* SERVICES */

  .services-section {
    padding: 70px 20px 85px;
  }

  .section-heading.left {
    margin-bottom: 35px;
  }

  .service-grid {
    grid-template-columns: 1fr;
  }

  .service-card {
    min-height: auto;

    padding: 25px;
  }

  .service-card.featured {
    transform: none;
  }

  .service-card.featured:hover {
    transform: translateY(-6px);
  }


  /* PROCESS */

  .process-section {
    padding: 80px 20px;
  }

  .process-heading h2 {
    font-size: 35px;

    letter-spacing: -1px;
  }

  .process-grid {
    grid-template-columns: 1fr;

    gap: 35px;
  }

  .process-item p {
    max-width: 100%;
  }


  /* WHY */

  .why-section {
    padding: 80px 20px;
  }

  .why-content h2 {
    font-size: 37px;

    letter-spacing: -1px;
  }

  .why-cards {
    grid-template-columns: 1fr;
  }

  .why-card {
    min-height: auto;
  }


  /* CTA */

  .cta-section {
    padding: 85px 20px;
  }

  .cta-container h2 {
    font-size: 40px;

    letter-spacing: -1px;
  }

  .cta-container p {
    font-size: 13px;
  }

  .cta-button {
    width: 100%;
  }

}

</style>