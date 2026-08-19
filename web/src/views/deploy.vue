<script setup>
import {
  Rocket,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Globe2,
  Server,
  LockKeyhole,
  Gauge,
  Cloud,
  RefreshCw,
  MonitorCheck,
  ArrowRight,
  CircleCheck,
  Activity,
  Database,
  Settings2,
  Headphones,
  Clock3,
} from 'lucide-vue-next'
</script>

<template>
  <main class="deploy-page">

    <!-- =====================================================
         INTRO
    ====================================================== -->
    <section class="intro-section">
      <div class="container">

        <div class="section-label">
          <span class="label-dot"></span>
          LAYANAN DEPLOYMENT
        </div>

        <div class="intro-grid">

          <div class="intro-content">
            <h1>
              Website Siap Online,
              <span>Tanpa Ribet.</span>
            </h1>

            <p class="intro-description">
              Kami membantu mengubah website yang sudah selesai dikembangkan
              menjadi website yang benar-benar siap digunakan oleh pelanggan.
              Mulai dari konfigurasi server, domain, SSL, hingga memastikan
              website berjalan dengan baik setelah online.
            </p>

            <div class="intro-actions">
              <RouterLink
                to="/layanan/konsultasi"
                class="primary-button"
              >
                Konsultasikan Proyek
                <ArrowRight :size="18" />
              </RouterLink>

              <a
                href="#proses"
                class="secondary-button"
              >
                Lihat Proses
              </a>
            </div>
          </div>

          <div class="intro-card">

            <div class="card-top">
              <div class="status-indicator">
                <span></span>
                SYSTEM ONLINE
              </div>

              <div class="server-icon">
                <Rocket :size="24" />
              </div>
            </div>

            <div class="domain-box">
              <div class="domain-label">
                WEBSITE STATUS
              </div>

              <div class="domain-name">
                yourwebsite.com
              </div>

              <div class="online-status">
                <CheckCircle2 :size="16" />
                Website Online
              </div>
            </div>

            <div class="progress-area">
              <div class="progress-header">
                <span>Deployment Progress</span>
                <strong>100%</strong>
              </div>

              <div class="progress-bar">
                <div class="progress-fill"></div>
              </div>
            </div>

            <div class="system-list">
              <div class="system-item">
                <CircleCheck :size="17" />
                <span>Production Build</span>
                <strong>Ready</strong>
              </div>

              <div class="system-item">
                <CircleCheck :size="17" />
                <span>Server Connection</span>
                <strong>Connected</strong>
              </div>

              <div class="system-item">
                <CircleCheck :size="17" />
                <span>SSL Certificate</span>
                <strong>Active</strong>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>


    <!-- =====================================================
         WHY DEPLOYMENT
    ====================================================== -->
    <section class="why-section">
      <div class="container">

        <div class="section-heading">
          <div class="section-label center">
            <span class="label-dot"></span>
            KENAPA DEPLOYMENT PENTING?
          </div>

          <h2>
            Website Bagus Saja
            <span>Belum Cukup.</span>
          </h2>

          <p>
            Website harus bisa diakses dengan cepat, aman, stabil,
            dan memberikan pengalaman yang baik kepada pengunjung.
          </p>
        </div>

        <div class="benefit-grid">

          <article class="benefit-card">
            <div class="benefit-icon">
              <Zap :size="25" />
            </div>

            <h3>Performa Cepat</h3>

            <p>
              Kami memastikan website dikonfigurasi agar dapat
              berjalan dengan cepat dan optimal ketika diakses.
            </p>
          </article>


          <article class="benefit-card">
            <div class="benefit-icon">
              <ShieldCheck :size="25" />
            </div>

            <h3>Keamanan Terjaga</h3>

            <p>
              Website dilengkapi dengan konfigurasi keamanan
              yang membantu menjaga koneksi dan data pengguna.
            </p>
          </article>


          <article class="benefit-card">
            <div class="benefit-icon">
              <Globe2 :size="25" />
            </div>

            <h3>Siap Diakses</h3>

            <p>
              Website dapat dihubungkan dengan domain sehingga
              pelanggan dapat mengaksesnya dengan mudah.
            </p>
          </article>


          <article class="benefit-card">
            <div class="benefit-icon">
              <Activity :size="25" />
            </div>

            <h3>Monitoring</h3>

            <p>
              Kami membantu memastikan website tetap berjalan
              dengan baik setelah proses deployment selesai.
            </p>
          </article>

        </div>
      </div>
    </section>


    <!-- =====================================================
         WHAT WE HANDLE
    ====================================================== -->
    <section class="service-section">
      <div class="container">

        <div class="service-grid">

          <div class="service-content">

            <div class="section-label">
              <span class="label-dot"></span>
              YANG KAMI TANGANI
            </div>

            <h2>
              Dari File Website
              <span>Menjadi Website Online.</span>
            </h2>

            <p>
              Anda tidak perlu bingung dengan konfigurasi teknis.
              Tim kami membantu menangani berbagai kebutuhan
              deployment agar website siap digunakan.
            </p>

            <div class="check-list">

              <div class="check-item">
                <CircleCheck :size="20" />
                <span>Konfigurasi hosting dan server</span>
              </div>

              <div class="check-item">
                <CircleCheck :size="20" />
                <span>Pengaturan domain website</span>
              </div>

              <div class="check-item">
                <CircleCheck :size="20" />
                <span>Instalasi dan konfigurasi SSL</span>
              </div>

              <div class="check-item">
                <CircleCheck :size="20" />
                <span>Production build</span>
              </div>

              <div class="check-item">
                <CircleCheck :size="20" />
                <span>Optimasi konfigurasi server</span>
              </div>

              <div class="check-item">
                <CircleCheck :size="20" />
                <span>Pengecekan website setelah online</span>
              </div>

            </div>

          </div>


          <div class="technical-card">

            <div class="technical-header">
              <div>
                <span>DEPLOYMENT</span>
                <h3>Production Environment</h3>
              </div>

              <Server :size="27" />
            </div>

            <div class="technical-body">

              <div class="technical-row">
                <div class="technical-left">
                  <Cloud :size="19" />
                  <span>Hosting</span>
                </div>

                <strong>Connected</strong>
              </div>

              <div class="technical-row">
                <div class="technical-left">
                  <Globe2 :size="19" />
                  <span>Domain</span>
                </div>

                <strong>Active</strong>
              </div>

              <div class="technical-row">
                <div class="technical-left">
                  <LockKeyhole :size="19" />
                  <span>SSL</span>
                </div>

                <strong>Secure</strong>
              </div>

              <div class="technical-row">
                <div class="technical-left">
                  <Gauge :size="19" />
                  <span>Performance</span>
                </div>

                <strong>Optimized</strong>
              </div>

              <div class="technical-row">
                <div class="technical-left">
                  <MonitorCheck :size="19" />
                  <span>Website</span>
                </div>

                <strong>Online</strong>
              </div>

            </div>

            <div class="technical-footer">
              <CheckCircle2 :size="18" />
              Semua sistem siap digunakan
            </div>

          </div>

        </div>
      </div>
    </section>


    <!-- =====================================================
         PROCESS
    ====================================================== -->
    <section
      id="proses"
      class="process-section"
    >
      <div class="container">

        <div class="section-heading">
          <div class="section-label center">
            <span class="label-dot"></span>
            PROSES DEPLOYMENT
          </div>

          <h2>
            Sederhana,
            <span>Terstruktur,</span>
            dan Terukur.
          </h2>

          <p>
            Kami menangani proses teknis sehingga Anda dapat
            fokus pada bisnis dan pelanggan.
          </p>
        </div>


        <div class="process-grid">

          <div class="process-card">
            <div class="process-number">01</div>

            <div class="process-icon">
              <Database :size="23" />
            </div>

            <h3>Persiapan</h3>

            <p>
              Kami memeriksa source code, aset, konfigurasi,
              dan kebutuhan website sebelum proses deployment.
            </p>
          </div>


          <div class="process-card">
            <div class="process-number">02</div>

            <div class="process-icon">
              <Settings2 :size="23" />
            </div>

            <h3>Konfigurasi</h3>

            <p>
              Server, hosting, domain, environment, dan
              kebutuhan teknis lainnya disiapkan.
            </p>
          </div>


          <div class="process-card">
            <div class="process-number">03</div>

            <div class="process-icon">
              <Rocket :size="23" />
            </div>

            <h3>Deployment</h3>

            <p>
              Website dipindahkan ke environment production
              dan dikonfigurasi agar siap digunakan.
            </p>
          </div>


          <div class="process-card">
            <div class="process-number">04</div>

            <div class="process-icon">
              <MonitorCheck :size="23" />
            </div>

            <h3>Testing</h3>

            <p>
              Kami melakukan pengecekan untuk memastikan
              website dapat berjalan sebagaimana mestinya.
            </p>
          </div>

        </div>
      </div>
    </section>


    <!-- =====================================================
         SECURITY
    ====================================================== -->
    <section class="security-section">
      <div class="container">

        <div class="security-box">

          <div class="security-icon">
            <ShieldCheck :size="34" />
          </div>

          <div class="security-content">
            <div class="section-label">
              <span class="label-dot"></span>
              AMAN & TERPERCAYA
            </div>

            <h2>
              Website Online dengan
              <span>Konfigurasi yang Tepat.</span>
            </h2>

            <p>
              Deployment bukan hanya membuat website online.
              Kami juga memperhatikan keamanan, stabilitas,
              dan kesiapan website ketika digunakan oleh pengguna.
            </p>

            <div class="security-points">

              <div>
                <LockKeyhole :size="19" />
                <span>HTTPS / SSL</span>
              </div>

              <div>
                <ShieldCheck :size="19" />
                <span>Security Configuration</span>
              </div>

              <div>
                <RefreshCw :size="19" />
                <span>Backup Ready</span>
              </div>

              <div>
                <Activity :size="19" />
                <span>Performance Monitoring</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>


    <!-- =====================================================
         STATS
    ====================================================== -->
    <section class="stats-section">
      <div class="container">

        <div class="stats-grid">

          <div class="stat-card">
            <Rocket :size="25" />
            <strong>100%</strong>
            <span>Production Ready</span>
          </div>

          <div class="stat-card">
            <ShieldCheck :size="25" />
            <strong>SSL</strong>
            <span>Secure Connection</span>
          </div>

          <div class="stat-card">
            <Activity :size="25" />
            <strong>24/7</strong>
            <span>Monitoring Ready</span>
          </div>

          <div class="stat-card">
            <Clock3 :size="25" />
            <strong>Fast</strong>
            <span>Deployment Process</span>
          </div>

        </div>

      </div>
    </section>


    <!-- =====================================================
         CTA
    ====================================================== -->
    <section class="cta-section">
      <div class="container">

        <div class="cta-box">

          <div class="cta-icon">
            <Headphones :size="31" />
          </div>

          <div class="cta-content">

            <div class="section-label">
              <span class="label-dot"></span>
              SIAP ONLINE?
            </div>

            <h2>
              Mari Buat Website Anda
              <span>Siap Digunakan.</span>
            </h2>

            <p>
              Ceritakan kebutuhan website Anda kepada kami.
              Tim kami siap membantu mulai dari proses development
              hingga website benar-benar online.
            </p>

            <RouterLink
              to="/layanan/konsultasi"
              class="cta-button"
            >
              Mulai Konsultasi
              <ArrowRight :size="18" />
            </RouterLink>

          </div>

        </div>

      </div>
    </section>

  </main>
</template>


<style scoped>
* {
  box-sizing: border-box;
}

.deploy-page {
  width: 100%;
  overflow: hidden;
  color: #181716;
  background: #ffffff;
  font-family: Arial, Helvetica, sans-serif;
}

.container {
  width: min(1180px, calc(100% - 48px));
  margin: 0 auto;
}


/* =====================================================
   COMMON
===================================================== */

.section-label {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1.4px;
  color: #f04b23;
}

.section-label.center {
  justify-content: center;
}

.label-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #f04b23;
  box-shadow: 0 0 0 5px rgba(240, 75, 35, 0.1);
}

.section-heading {
  max-width: 720px;
  margin: 0 auto 55px;
  text-align: center;
}

.section-heading h2 {
  margin: 18px 0 15px;
  font-size: clamp(32px, 4vw, 48px);
  line-height: 1.1;
  letter-spacing: -1.5px;
}

.section-heading h2 span {
  color: #f04b23;
}

.section-heading p {
  max-width: 620px;
  margin: 0 auto;
  color: #686563;
  font-size: 16px;
  line-height: 1.8;
}


/* =====================================================
   INTRO
===================================================== */

.intro-section {
  padding: 85px 0 95px;
  background:
    radial-gradient(
      circle at 90% 15%,
      rgba(255, 193, 88, 0.22),
      transparent 30%
    ),
    linear-gradient(
      135deg,
      #fffaf0 0%,
      #ffffff 55%,
      #fff3e5 100%
    );
}

.intro-grid {
  display: grid;
  grid-template-columns: 1fr 480px;
  align-items: center;
  gap: 75px;
  margin-top: 30px;
}

.intro-content h1 {
  max-width: 670px;
  margin: 0 0 25px;
  font-size: clamp(42px, 5.5vw, 70px);
  line-height: 1.04;
  letter-spacing: -3px;
}

.intro-content h1 span {
  color: #f04b23;
}

.intro-description {
  max-width: 650px;
  margin: 0 0 32px;
  color: #625e5b;
  font-size: 17px;
  line-height: 1.85;
}

.intro-actions {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}

.primary-button,
.secondary-button,
.cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-decoration: none;
  font-weight: 700;
  transition: 0.25s ease;
}

.primary-button {
  padding: 16px 23px;
  color: #ffffff;
  background: linear-gradient(135deg, #ff9f38, #f04421);
  border-radius: 14px;
  box-shadow: 0 14px 30px rgba(240, 75, 35, 0.2);
}

.primary-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 18px 34px rgba(240, 75, 35, 0.27);
}

.secondary-button {
  padding: 15px 22px;
  color: #24211f;
  background: #ffffff;
  border: 1px solid #eadfd5;
  border-radius: 14px;
}

.secondary-button:hover {
  border-color: #f04b23;
  color: #f04b23;
}


/* Deployment Status Card */

.intro-card {
  padding: 26px;
  border: 1px solid #eadfd5;
  border-radius: 26px;
  background: rgba(255, 255, 255, 0.88);
  box-shadow: 0 25px 70px rgba(44, 31, 20, 0.11);
}

.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
}

.status-indicator {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 1px;
  color: #3d403d;
}

.status-indicator span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #25ad67;
  box-shadow: 0 0 0 5px rgba(37, 173, 103, 0.12);
}

.server-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  color: #f04b23;
  background: #fff1e9;
}

.domain-box {
  padding: 23px;
  border-radius: 18px;
  background: #181716;
  color: #ffffff;
}

.domain-label {
  margin-bottom: 9px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.2px;
  color: #a9a5a1;
}

.domain-name {
  margin-bottom: 13px;
  font-size: 24px;
  font-weight: 800;
}

.online-status {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 13px;
  color: #76e1a8;
}

.progress-area {
  margin-top: 25px;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 12px;
  color: #77716d;
}

.progress-header strong {
  color: #f04b23;
}

.progress-bar {
  width: 100%;
  height: 8px;
  overflow: hidden;
  border-radius: 20px;
  background: #eee8e2;
}

.progress-fill {
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #ffae3e, #f04421);
}

.system-list {
  margin-top: 24px;
}

.system-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 13px 0;
  border-bottom: 1px solid #eee7e1;
  font-size: 13px;
}

.system-item:last-child {
  border-bottom: 0;
}

.system-item svg {
  flex-shrink: 0;
  color: #28a868;
}

.system-item span {
  flex: 1;
  color: #5f5b58;
}

.system-item strong {
  font-size: 12px;
  color: #252321;
}


/* =====================================================
   WHY
===================================================== */

.why-section {
  padding: 105px 0;
  background: #ffffff;
}

.benefit-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.benefit-card {
  padding: 30px 25px;
  border: 1px solid #eee6df;
  border-radius: 20px;
  background: #ffffff;
  transition: 0.3s ease;
}

.benefit-card:hover {
  transform: translateY(-7px);
  border-color: #f5b293;
  box-shadow: 0 18px 45px rgba(50, 35, 25, 0.08);
}

.benefit-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  margin-bottom: 23px;
  border-radius: 15px;
  color: #f04b23;
  background: #fff0e8;
}

.benefit-card h3 {
  margin: 0 0 10px;
  font-size: 18px;
}

.benefit-card p {
  margin: 0;
  color: #77716d;
  font-size: 14px;
  line-height: 1.75;
}


/* =====================================================
   SERVICE
===================================================== */

.service-section {
  padding: 105px 0;
  background: #fff8f1;
}

.service-grid {
  display: grid;
  grid-template-columns: 1fr 480px;
  gap: 90px;
  align-items: center;
}

.service-content h2 {
  max-width: 570px;
  margin: 20px 0 18px;
  font-size: clamp(34px, 4vw, 50px);
  line-height: 1.08;
  letter-spacing: -1.8px;
}

.service-content h2 span {
  color: #f04b23;
}

.service-content > p {
  max-width: 590px;
  color: #6e6864;
  line-height: 1.8;
}

.check-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px 20px;
  margin-top: 30px;
}

.check-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #403c39;
  font-size: 14px;
  font-weight: 600;
}

.check-item svg {
  flex-shrink: 0;
  color: #f04b23;
}


/* Technical card */

.technical-card {
  padding: 28px;
  border-radius: 24px;
  background: #181716;
  color: #ffffff;
  box-shadow: 0 25px 60px rgba(24, 23, 22, 0.18);
}

.technical-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 23px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.technical-header span {
  font-size: 10px;
  letter-spacing: 1.4px;
  color: #aaa5a1;
}

.technical-header h3 {
  margin: 8px 0 0;
  font-size: 21px;
}

.technical-header > svg {
  color: #ff8b42;
}

.technical-body {
  padding: 9px 0;
}

.technical-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.technical-left {
  display: flex;
  align-items: center;
  gap: 11px;
  color: #d2ceca;
  font-size: 13px;
}

.technical-left svg {
  color: #ff8b42;
}

.technical-row strong {
  font-size: 11px;
  color: #6ee29c;
}

.technical-footer {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-top: 18px;
  padding: 13px 14px;
  border-radius: 12px;
  color: #76e1a8;
  background: rgba(47, 180, 106, 0.09);
  font-size: 12px;
  font-weight: 700;
}


/* =====================================================
   PROCESS
===================================================== */

.process-section {
  padding: 105px 0;
  background: #ffffff;
}

.process-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.process-card {
  position: relative;
  padding: 30px 25px;
  border: 1px solid #eee7e0;
  border-radius: 20px;
  background: #ffffff;
  overflow: hidden;
  transition: 0.3s ease;
}

.process-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(40, 30, 22, 0.07);
}

.process-number {
  position: absolute;
  top: 17px;
  right: 20px;
  font-size: 13px;
  font-weight: 800;
  color: #e7dfd8;
}

.process-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 49px;
  height: 49px;
  margin-bottom: 23px;
  border-radius: 14px;
  color: #ffffff;
  background: linear-gradient(135deg, #ff9b38, #f04421);
}

.process-card h3 {
  margin: 0 0 10px;
  font-size: 18px;
}

.process-card p {
  margin: 0;
  color: #77716d;
  font-size: 14px;
  line-height: 1.75;
}


/* =====================================================
   SECURITY
===================================================== */

.security-section {
  padding: 85px 0;
  background: #181716;
}

.security-box {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 35px;
  align-items: start;
}

.security-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 76px;
  height: 76px;
  border-radius: 20px;
  color: #ff9a47;
  background: rgba(255, 151, 66, 0.1);
}

.security-content .section-label {
  color: #ff8a43;
}

.security-content h2 {
  max-width: 700px;
  margin: 17px 0;
  color: #ffffff;
  font-size: clamp(30px, 4vw, 45px);
  line-height: 1.12;
}

.security-content h2 span {
  color: #ff8b42;
}

.security-content > p {
  max-width: 700px;
  color: #aaa5a1;
  line-height: 1.8;
}

.security-points {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.security-points div {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 11px 14px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  color: #d6d1cd;
  font-size: 12px;
}

.security-points svg {
  color: #ff8b42;
}


/* =====================================================
   STATS
===================================================== */

.stats-section {
  padding: 35px 0;
  background: #181716;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.stat-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 25px;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  text-align: center;
}

.stat-card:last-child {
  border-right: 0;
}

.stat-card svg {
  color: #ff8b42;
}

.stat-card strong {
  color: #ffffff;
  font-size: 25px;
}

.stat-card span {
  color: #8e8985;
  font-size: 12px;
}


/* =====================================================
   CTA
===================================================== */

.cta-section {
  padding: 100px 0;
  background:
    radial-gradient(
      circle at 15% 50%,
      rgba(255, 166, 71, 0.15),
      transparent 30%
    ),
    #fff8f1;
}

.cta-box {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 30px;
  align-items: start;
  padding: 55px;
  border-radius: 28px;
  background: linear-gradient(135deg, #ffffff, #fff0e4);
  border: 1px solid #f0ddd0;
  box-shadow: 0 25px 70px rgba(75, 45, 28, 0.08);
}

.cta-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 68px;
  height: 68px;
  border-radius: 18px;
  color: #ffffff;
  background: linear-gradient(135deg, #ff9d3b, #f04421);
}

.cta-content h2 {
  max-width: 700px;
  margin: 15px 0;
  font-size: clamp(32px, 4vw, 48px);
  line-height: 1.1;
  letter-spacing: -1.5px;
}

.cta-content h2 span {
  color: #f04b23;
}

.cta-content p {
  max-width: 690px;
  margin-bottom: 28px;
  color: #6e6864;
  line-height: 1.8;
}

.cta-button {
  padding: 15px 22px;
  color: #ffffff;
  border-radius: 13px;
  background: #f04b23;
  box-shadow: 0 12px 25px rgba(240, 75, 35, 0.2);
}

.cta-button:hover {
  transform: translateY(-3px);
}


/* =====================================================
   RESPONSIVE
===================================================== */

@media (max-width: 1000px) {
  .intro-grid,
  .service-grid {
    grid-template-columns: 1fr;
    gap: 45px;
  }

  .intro-card {
    max-width: 600px;
  }

  .benefit-grid,
  .process-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .security-box {
    grid-template-columns: 70px 1fr;
  }
}


@media (max-width: 700px) {
  .container {
    width: min(100% - 30px, 1180px);
  }

  .intro-section,
  .why-section,
  .service-section,
  .process-section,
  .cta-section {
    padding: 70px 0;
  }

  .intro-content h1 {
    font-size: 43px;
    letter-spacing: -2px;
  }

  .benefit-grid,
  .process-grid,
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .check-list {
    grid-template-columns: 1fr;
  }

  .security-box,
  .cta-box {
    grid-template-columns: 1fr;
  }

  .cta-box {
    padding: 32px 25px;
  }

  .stat-card {
    border-right: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .stat-card:last-child {
    border-bottom: 0;
  }

  .security-section {
    padding: 70px 0;
  }

  .intro-card {
    padding: 20px;
  }
}
</style>