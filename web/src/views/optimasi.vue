```vue
<template>
  <div class="optimization-page">

    <!-- HERO -->
    <section class="hero">
      <div class="container hero-grid">

        <div class="hero-content">
          <span class="eyebrow">
            Layanan Optimasi
          </span>

          <h1>
            Maksimalkan Potensi
            <span>Website Anda.</span>
          </h1>

          <p class="hero-description">
            Kami membantu meningkatkan performa, visibilitas,
            pengalaman pengguna, dan konversi website melalui
            optimasi yang terukur dan berbasis data.
          </p>

          <div class="hero-actions">
            <a href="#konsultasi" class="btn btn-primary">
              Konsultasikan Website
              <ArrowRight :size="17" />
            </a>

            <a href="#layanan" class="btn btn-secondary">
              Lihat Layanan
            </a>
          </div>

          <div class="hero-stats">

            <div class="stat">
              <div class="stat-icon">
                <Search :size="17" />
              </div>

              <div>
                <strong>SEO</strong>
                <span>Lebih mudah ditemukan</span>
              </div>
            </div>

            <div class="stat">
              <div class="stat-icon">
                <Gauge :size="17" />
              </div>

              <div>
                <strong>Speed</strong>
                <span>Performa lebih cepat</span>
              </div>
            </div>

            <div class="stat">
              <div class="stat-icon">
                <Smartphone :size="17" />
              </div>

              <div>
                <strong>UX</strong>
                <span>Pengalaman lebih baik</span>
              </div>
            </div>

          </div>
        </div>

        <!-- HERO VISUAL -->
        <div class="hero-visual">

          <div class="visual-glow"></div>

          <div class="performance-card">

            <div class="card-header">
              <div>
                <span class="mini-label">
                  Website Performance
                </span>

                <h3>
                  Optimization Score
                </h3>
              </div>

              <span class="status">
                <span class="status-dot"></span>
                OPTIMIZED
              </span>
            </div>

            <div class="score-wrapper">

              <div class="score-circle">
                <div>
                  <strong>92</strong>
                  <span>/100</span>
                </div>
              </div>

              <div class="score-info">

                <div class="score-item">
                  <span>Performance</span>
                  <strong>94%</strong>
                </div>

                <div class="score-item">
                  <span>SEO</span>
                  <strong>96%</strong>
                </div>

                <div class="score-item">
                  <span>Accessibility</span>
                  <strong>89%</strong>
                </div>

              </div>
            </div>

            <div class="chart">

              <div class="chart-line line-1"></div>
              <div class="chart-line line-2"></div>
              <div class="chart-line line-3"></div>

              <svg
                class="chart-svg"
                viewBox="0 0 420 100"
                preserveAspectRatio="none"
              >
                <polyline
                  points="0,82 45,74 90,67 130,70 175,52 215,58 260,39 305,45 350,24 385,30 420,10"
                  fill="none"
                  stroke="#EB2B0C"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

            </div>

            <div class="chart-labels">
              <span>Before</span>
              <span>Optimization</span>
              <span>Now</span>
            </div>

          </div>

          <div class="floating-card floating-card-top">

            <div class="floating-icon">
              <TrendingUp :size="18" />
            </div>

            <div>
              <strong>+68%</strong>
              <span>Performance</span>
            </div>

          </div>

          <div class="floating-card floating-card-bottom">

            <div class="floating-icon orange">
              <Zap :size="18" />
            </div>

            <div>
              <strong>1.2s</strong>
              <span>Load Time</span>
            </div>

          </div>

        </div>
      </div>
    </section>


    <!-- PROBLEM -->
    <section class="problem-section section">

      <div class="container">

        <div class="section-heading centered">

          <span class="eyebrow">
            Kenapa Optimasi?
          </span>

          <h2>
            Website yang bagus saja
            <span>belum cukup.</span>
          </h2>

          <p>
            Website harus cepat, mudah ditemukan, nyaman digunakan,
            dan mampu mengubah pengunjung menjadi pelanggan.
          </p>

        </div>

        <div class="problem-grid">

          <article
            v-for="problem in problems"
            :key="problem.title"
            class="problem-card"
          >

            <div class="problem-top">

              <div class="problem-icon">
                <component
                  :is="problem.icon"
                  :size="21"
                  :stroke-width="1.8"
                />
              </div>

              <span class="problem-number">
                {{ problem.number }}
              </span>

            </div>

            <h3>
              {{ problem.title }}
            </h3>

            <p>
              {{ problem.description }}
            </p>

          </article>

        </div>

      </div>

    </section>


    <!-- SERVICES -->
    <section
      id="layanan"
      class="services-section section"
    >

      <div class="container">

        <div class="section-heading">

          <span class="eyebrow">
            Apa yang Kami Optimasi
          </span>

          <h2>
            Optimasi menyeluruh untuk
            <span>hasil yang lebih baik.</span>
          </h2>

          <p>
            Kami melihat website dari sisi teknologi,
            pengguna, mesin pencari, hingga tujuan bisnis.
          </p>

        </div>

        <div class="service-grid">

          <article
            v-for="(service, index) in services"
            :key="service.title"
            class="service-card"
            :class="{ featured: index === 0 }"
          >

            <div class="service-top">

              <div class="service-icon">
                <component
                  :is="service.icon"
                  :size="21"
                  :stroke-width="1.8"
                />
              </div>

              <span class="service-number">
                {{ String(index + 1).padStart(2, '0') }}
              </span>

            </div>

            <h3>
              {{ service.title }}
            </h3>

            <p>
              {{ service.description }}
            </p>

            <ul>

              <li
                v-for="item in service.items"
                :key="item"
              >
                <Check :size="14" />
                <span>{{ item }}</span>
              </li>

            </ul>

            <a
              href="#konsultasi"
              class="service-link"
            >
              Pelajari lebih lanjut
              <ArrowUpRight :size="16" />
            </a>

          </article>

        </div>

      </div>

    </section>


    <!-- PROCESS -->
    <section class="process-section section">

      <div class="container process-grid">

        <div class="process-content">

          <span class="eyebrow">
            Proses Kami
          </span>

          <h2>
            Optimasi bukan sekadar
            <span>memperbaiki masalah.</span>
          </h2>

          <p>
            Kami menggunakan pendekatan sistematis untuk menemukan
            masalah, menentukan prioritas, melakukan perbaikan,
            dan mengukur hasilnya.
          </p>

          <a
            href="#konsultasi"
            class="btn btn-primary"
          >
            Mulai Optimasi
            <ArrowRight :size="17" />
          </a>

        </div>

        <div class="process-list">

          <div
            v-for="(process, index) in processes"
            :key="process.title"
            class="process-item"
          >

            <div class="process-number">
              <span>
                {{ String(index + 1).padStart(2, '0') }}
              </span>
            </div>

            <div class="process-icon">
              <component
                :is="process.icon"
                :size="19"
                :stroke-width="1.8"
              />
            </div>

            <div class="process-info">

              <h3>
                {{ process.title }}
              </h3>

              <p>
                {{ process.description }}
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>


    <!-- BENEFITS -->
    <section class="benefit-section section">

      <div class="container">

        <div class="benefit-box">

          <div class="benefit-content">

            <span class="eyebrow">
              Kenapa Kami?
            </span>

            <h2>
              Optimasi yang
              <span>berorientasi hasil.</span>
            </h2>

            <p>
              Setiap perubahan yang kami lakukan memiliki alasan,
              tujuan, dan indikator keberhasilan yang jelas.
            </p>

          </div>

          <div class="benefit-list">

            <div
              v-for="benefit in benefits"
              :key="benefit.title"
              class="benefit-item"
            >

              <div class="benefit-icon">
                <component
                  :is="benefit.icon"
                  :size="19"
                  :stroke-width="1.8"
                />
              </div>

              <div>

                <h3>
                  {{ benefit.title }}
                </h3>

                <p>
                  {{ benefit.description }}
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>


    <!-- CTA -->
    <section
      id="konsultasi"
      class="cta-section section"
    >

      <div class="container">

        <div class="cta-box">

          <div class="cta-decoration decoration-one"></div>
          <div class="cta-decoration decoration-two"></div>

          <div class="cta-content">

            <span class="eyebrow">
              Siap Mengoptimalkan Website?
            </span>

            <h2>
              Buat website Anda
              <span>bekerja lebih baik.</span>
            </h2>

            <p>
              Ceritakan kondisi website Anda kepada kami.
              Kami akan membantu menemukan peluang optimasi
              yang paling berdampak untuk bisnis Anda.
            </p>

            <a
              href="#"
              class="btn btn-light"
            >
              Konsultasi Sekarang
              <ArrowUpRight :size="17" />
            </a>

          </div>

        </div>

      </div>

    </section>

  </div>
</template>


<script setup>
import {
  Search,
  Gauge,
  Smartphone,
  TrendingUp,
  Zap,
  ArrowRight,
  ArrowUpRight,
  Check,
  ScanSearch,
  ListChecks,
  Settings2,
  FlaskConical,
  Activity,
  BarChart3,
  Code2,
  Target,
  ShieldCheck,
  LineChart
} from 'lucide-vue-next'


const problems = [
  {
    number: '01',
    icon: Gauge,
    title: 'Website Lambat',
    description:
      'Loading yang lambat dapat membuat pengunjung meninggalkan website sebelum melihat produk atau layanan Anda.'
  },
  {
    number: '02',
    icon: Search,
    title: 'Sulit Ditemukan',
    description:
      'Website Anda sudah online, tetapi belum mendapatkan visibilitas yang optimal di mesin pencari.'
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Konversi Rendah',
    description:
      'Traffic tinggi tidak akan berarti jika pengunjung tidak melakukan tindakan yang Anda harapkan.'
  },
  {
    number: '04',
    icon: Smartphone,
    title: 'Kurang Optimal di Mobile',
    description:
      'Kami memastikan website tetap nyaman dan cepat digunakan dari berbagai ukuran perangkat.'
  }
]


const services = [
  {
    icon: Search,
    title: 'SEO Optimization',
    description:
      'Tingkatkan visibilitas website agar lebih mudah ditemukan oleh calon pelanggan.',
    items: [
      'Technical SEO',
      'On-page optimization',
      'Keyword & content analysis',
      'Search performance'
    ]
  },
  {
    icon: Gauge,
    title: 'Performance',
    description:
      'Buat website lebih cepat, ringan, dan memberikan pengalaman yang lebih baik.',
    items: [
      'Core Web Vitals',
      'Loading optimization',
      'Asset optimization',
      'Performance monitoring'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Conversion',
    description:
      'Optimalkan perjalanan pengguna agar lebih banyak pengunjung melakukan aksi.',
    items: [
      'Landing page optimization',
      'CTA optimization',
      'User flow analysis',
      'Conversion improvement'
    ]
  },
  {
    icon: Smartphone,
    title: 'User Experience',
    description:
      'Ciptakan pengalaman digital yang lebih sederhana, nyaman, dan intuitif.',
    items: [
      'Responsive optimization',
      'UX audit',
      'Navigation improvement',
      'Mobile experience'
    ]
  },
  {
    icon: Code2,
    title: 'Technical',
    description:
      'Perbaiki fondasi teknis website agar lebih stabil, scalable, dan mudah dikembangkan.',
    items: [
      'Code optimization',
      'Technical audit',
      'Architecture review',
      'Security improvement'
    ]
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    description:
      'Dapatkan insight yang lebih jelas dari perilaku pengguna dan performa website.',
    items: [
      'Analytics setup',
      'Event tracking',
      'Conversion tracking',
      'Performance reporting'
    ]
  }
]


const processes = [
  {
    icon: ScanSearch,
    title: 'Audit & Discovery',
    description:
      'Kami menganalisis kondisi website secara menyeluruh untuk menemukan masalah dan peluang.'
  },
  {
    icon: ListChecks,
    title: 'Prioritization',
    description:
      'Setiap temuan dikelompokkan berdasarkan tingkat urgensi, effort, dan potensi impact.'
  },
  {
    icon: Settings2,
    title: 'Implementation',
    description:
      'Tim kami melakukan perbaikan teknis dan optimasi berdasarkan prioritas yang telah ditentukan.'
  },
  {
    icon: FlaskConical,
    title: 'Testing',
    description:
      'Setiap perubahan diuji untuk memastikan tidak mengganggu fungsi dan pengalaman pengguna.'
  },
  {
    icon: Activity,
    title: 'Monitoring',
    description:
      'Kami memantau hasil optimasi dan mencari peluang improvement berikutnya.'
  }
]


const benefits = [
  {
    icon: LineChart,
    title: 'Data Driven',
    description:
      'Keputusan optimasi berdasarkan data dan hasil audit.'
  },
  {
    icon: Target,
    title: 'Berorientasi Impact',
    description:
      'Fokus pada perubahan yang memberikan dampak paling besar.'
  },
  {
    icon: ShieldCheck,
    title: 'Technical & Business',
    description:
      'Menggabungkan sisi teknologi dengan kebutuhan bisnis.'
  },
  {
    icon: Activity,
    title: 'Continuous Improvement',
    description:
      'Optimasi dilakukan secara berkelanjutan mengikuti perkembangan website.'
  }
]
</script>


<style scoped>
.optimization-page {
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

  width: 100%;
  overflow: hidden;

  color: var(--color-text);
  background: var(--color-bg);
  font-family: var(--font-body);
  line-height: 1.6;
}

.optimization-page *,
.optimization-page *::before,
.optimization-page *::after {
  box-sizing: border-box;
}

.optimization-page h1,
.optimization-page h2,
.optimization-page h3,
.optimization-page p {
  margin: 0;
}

.optimization-page h1,
.optimization-page h2,
.optimization-page h3 {
  font-family: var(--font-heading);
  font-weight: 600;
  line-height: 1.2;
}

.optimization-page a {
  text-decoration: none;
}

.container {
  width: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 24px;
}

.section {
  padding: 100px 0;
}

.eyebrow {
  display: inline-flex;
  align-items: center;

  color: var(--color-deep-orange);

  font-family: var(--font-heading);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: .06em;
  text-transform: uppercase;
}


/* BUTTON */

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  min-height: 48px;
  padding: 12px 22px;

  border: 1px solid transparent;
  border-radius: var(--radius);

  font-family: var(--font-heading);
  font-size: 14px;
  font-weight: 600;

  cursor: pointer;

  transition:
    transform .2s ease,
    opacity .2s ease,
    border-color .2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  color: #fff;
  background: var(--color-red);
}

.btn-primary:hover {
  opacity: .9;
}

.btn-secondary {
  color: var(--color-text);
  border-color: var(--color-border);
  background: transparent;
}

.btn-secondary:hover {
  color: var(--color-red);
  border-color: var(--color-red);
}

.btn-light {
  color: var(--color-red);
  background: #fff;
}


/* HERO */

.hero {
  position: relative;

  min-height: 720px;

  display: flex;
  align-items: center;

  padding: 120px 0 80px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 70px;

  align-items: center;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero h1 {
  max-width: 650px;

  margin-top: 18px;

  font-size: clamp(44px, 5vw, 68px);
  letter-spacing: -2.8px;
}

.hero h1 span {
  display: block;
  color: var(--color-red);
}

.hero-description {
  max-width: 560px;

  margin-top: 25px;

  color: var(--color-text-secondary);

  font-size: 17px;
  line-height: 1.75;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;

  gap: 12px;

  margin-top: 32px;
}

.hero-stats {
  display: flex;
  flex-wrap: wrap;

  gap: 30px;

  margin-top: 55px;
  padding-top: 24px;

  border-top: 1px solid var(--color-border);
}

.stat {
  display: flex;
  align-items: flex-start;

  gap: 10px;
}

.stat-icon {
  width: 32px;
  height: 32px;

  flex: 0 0 32px;

  display: grid;
  place-items: center;

  border-radius: 8px;

  color: var(--color-red);
  background: var(--color-yellow);
}

.stat strong,
.stat span {
  display: block;
}

.stat strong {
  font-family: var(--font-heading);
  font-size: 13px;
}

.stat span {
  margin-top: 2px;

  color: var(--color-text-secondary);

  font-size: 11px;
}


/* HERO VISUAL */

.hero-visual {
  position: relative;

  min-height: 520px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.visual-glow {
  position: absolute;

  width: 390px;
  height: 390px;

  border-radius: 50%;

  background: var(--color-yellow);

  opacity: .55;

  filter: blur(75px);
}

.performance-card {
  position: relative;
  z-index: 2;

  width: min(100%, 470px);

  padding: 28px;

  border: 1px solid var(--color-border);
  border-radius: 22px;

  background: rgba(255, 255, 255, .96);

  box-shadow:
    0 30px 80px rgba(26, 26, 26, .1);
}

.card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  gap: 20px;
}

.mini-label {
  display: block;

  margin-bottom: 5px;

  color: var(--color-text-secondary);

  font-size: 10px;
  letter-spacing: .08em;
  text-transform: uppercase;
}

.card-header h3 {
  font-size: 17px;
}

.status {
  display: inline-flex;
  align-items: center;

  gap: 6px;

  padding: 6px 9px;

  border-radius: 100px;

  color: #5a6500;
  background: #f5f8e2;

  font-family: var(--font-heading);
  font-size: 9px;
  font-weight: 600;
}

.status-dot {
  width: 5px;
  height: 5px;

  border-radius: 50%;

  background: #7d8d00;
}

.score-wrapper {
  display: grid;
  grid-template-columns: 170px 1fr;

  gap: 25px;

  align-items: center;

  margin-top: 35px;
}

.score-circle {
  width: 155px;
  height: 155px;

  display: grid;
  place-items: center;

  border-radius: 50%;

  background:
    radial-gradient(
      circle at center,
      #fff 58%,
      transparent 59%
    ),
    conic-gradient(
      var(--color-red) 0deg,
      var(--color-orange) 280deg,
      var(--color-border) 280deg
    );
}

.score-circle div {
  text-align: center;
}

.score-circle strong {
  display: block;

  font-family: var(--font-heading);
  font-size: 40px;
  line-height: 1;
}

.score-circle span {
  color: var(--color-text-secondary);
  font-size: 11px;
}

.score-info {
  display: flex;
  flex-direction: column;

  gap: 17px;
}

.score-item {
  display: flex;
  justify-content: space-between;

  gap: 20px;

  padding-bottom: 10px;

  border-bottom: 1px solid var(--color-border);

  font-size: 12px;
}

.score-item span {
  color: var(--color-text-secondary);
}

.score-item strong {
  font-family: var(--font-heading);
}

.chart {
  position: relative;

  height: 100px;

  margin-top: 30px;

  overflow: hidden;

  border-bottom: 1px solid var(--color-border);
}

.chart-line {
  position: absolute;

  left: 0;
  right: 0;

  border-top: 1px dashed #ebe9e3;
}

.line-1 {
  top: 20px;
}

.line-2 {
  top: 50px;
}

.line-3 {
  top: 80px;
}

.chart-svg {
  position: absolute;

  inset: 0;

  width: 100%;
  height: 100%;
}

.chart-labels {
  display: flex;
  justify-content: space-between;

  margin-top: 10px;

  color: var(--color-text-secondary);

  font-size: 10px;
}

.floating-card {
  position: absolute;
  z-index: 3;

  display: flex;
  align-items: center;

  gap: 10px;

  padding: 13px 16px;

  border: 1px solid var(--color-border);
  border-radius: 12px;

  background: #fff;

  box-shadow:
    0 15px 35px rgba(26, 26, 26, .1);
}

.floating-card strong,
.floating-card span {
  display: block;
}

.floating-card strong {
  font-family: var(--font-heading);
  font-size: 14px;
}

.floating-card div span {
  color: var(--color-text-secondary);
  font-size: 10px;
}

.floating-card-top {
  top: 75px;
  right: -15px;
}

.floating-card-bottom {
  bottom: 60px;
  left: -15px;
}

.floating-icon {
  width: 34px;
  height: 34px;

  flex: 0 0 34px;

  display: grid;
  place-items: center;

  border-radius: 9px;

  color: var(--color-red);
  background: var(--color-yellow);
}

.floating-icon.orange {
  color: var(--color-deep-orange);
  background: #fff0df;
}


/* SECTION HEADING */

.section-heading {
  max-width: 650px;
}

.section-heading.centered {
  margin: 0 auto 55px;

  text-align: center;
}

.section-heading h2,
.process-content h2,
.benefit-content h2 {
  margin-top: 15px;

  font-size: clamp(34px, 4vw, 48px);

  letter-spacing: -1.8px;
}

.section-heading h2 span,
.process-content h2 span,
.benefit-content h2 span {
  color: var(--color-red);
}

.section-heading p,
.process-content > p,
.benefit-content > p {
  margin-top: 18px;

  color: var(--color-text-secondary);

  font-size: 15px;
  line-height: 1.75;
}


/* PROBLEM */

.problem-section {
  background: #fff;
}

.problem-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  gap: 16px;
}

.problem-card {
  min-height: 285px;

  padding: 27px;

  border: 1px solid var(--color-border);
  border-radius: var(--radius);

  background: var(--color-bg);

  transition:
    transform .2s ease,
    box-shadow .2s ease;
}

.problem-card:hover {
  transform: translateY(-5px);

  box-shadow:
    0 20px 45px rgba(26, 26, 26, .07);
}

.problem-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  margin-bottom: 42px;
}

.problem-icon {
  width: 46px;
  height: 46px;

  display: grid;
  place-items: center;

  border-radius: 12px;

  color: var(--color-red);
  background: var(--color-yellow);
}

.problem-card:nth-child(2) .problem-icon {
  background: #ffe4ce;
}

.problem-card:nth-child(3) .problem-icon {
  background: #ffd7ce;
}

.problem-card:nth-child(4) .problem-icon {
  background: #fff3c0;
}

.problem-number {
  color: #aaa9a4;

  font-family: var(--font-heading);

  font-size: 11px;
}

.problem-card h3 {
  font-size: 18px;
}

.problem-card p {
  margin-top: 12px;

  color: var(--color-text-secondary);

  font-size: 13px;
  line-height: 1.65;
}


/* SERVICES */

.services-section {
  background: var(--color-bg);
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 16px;

  margin-top: 55px;
}

.service-card {
  min-height: 390px;

  display: flex;
  flex-direction: column;

  padding: 27px;

  border: 1px solid var(--color-border);
  border-radius: var(--radius);

  background: #fff;

  transition:
    transform .2s ease,
    box-shadow .2s ease;
}

.service-card:hover {
  transform: translateY(-4px);

  box-shadow:
    0 20px 50px rgba(26, 26, 26, .08);
}

.service-card.featured {
  border-color: var(--color-orange);
}

.service-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.service-icon {
  width: 45px;
  height: 45px;

  display: grid;
  place-items: center;

  border-radius: 10px;

  color: var(--color-red);
  background: var(--color-yellow);
}

.service-number {
  color: #aaa9a4;

  font-family: var(--font-heading);

  font-size: 11px;
}

.service-card h3 {
  margin-top: 28px;

  font-size: 19px;
}

.service-card > p {
  margin-top: 10px;

  color: var(--color-text-secondary);

  font-size: 13px;
}

.service-card ul {
  display: flex;
  flex-direction: column;

  gap: 9px;

  margin: 20px 0 0;
  padding: 0;

  list-style: none;
}

.service-card li {
  display: flex;
  align-items: center;

  gap: 8px;

  color: var(--color-text-secondary);

  font-size: 12px;
}

.service-card li svg {
  flex: 0 0 auto;

  color: var(--color-red);
}

.service-link {
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 10px;

  margin-top: auto;
  padding-top: 25px;

  color: var(--color-red);

  font-family: var(--font-heading);

  font-size: 12px;
  font-weight: 600;
}


/* PROCESS */

.process-section {
  background: #fff;
}

.process-grid {
  display: grid;

  grid-template-columns: .9fr 1.1fr;

  gap: 100px;

  align-items: start;
}

.process-content {
  position: sticky;
  top: 100px;
}

.process-content .btn {
  margin-top: 30px;
}

.process-list {
  border-top: 1px solid var(--color-border);
}

.process-item {
  display: grid;

  grid-template-columns: 55px 35px 1fr;

  gap: 15px;

  align-items: start;

  padding: 28px 0;

  border-bottom: 1px solid var(--color-border);
}

.process-number {
  color: var(--color-red);

  font-family: var(--font-heading);

  font-size: 11px;
  font-weight: 600;
}

.process-icon {
  width: 32px;
  height: 32px;

  display: grid;
  place-items: center;

  border-radius: 8px;

  color: var(--color-red);
  background: var(--color-yellow);
}

.process-info h3 {
  font-size: 17px;
}

.process-info p {
  max-width: 500px;

  margin-top: 7px;

  color: var(--color-text-secondary);

  font-size: 13px;
}


/* BENEFITS */

.benefit-section {
  background: var(--color-bg);
}

.benefit-box {
  display: grid;

  grid-template-columns: .8fr 1.2fr;

  gap: 90px;

  padding: 70px;

  border-radius: 20px;

  background: var(--color-yellow);
}

.benefit-list {
  display: grid;

  grid-template-columns: 1fr 1fr;

  gap: 30px 40px;
}

.benefit-item {
  display: flex;

  gap: 15px;
}

.benefit-icon {
  width: 38px;
  height: 38px;

  flex: 0 0 38px;

  display: grid;
  place-items: center;

  border-radius: 9px;

  color: var(--color-red);

  background: rgba(255, 255, 255, .6);
}

.benefit-item h3 {
  font-size: 15px;
}

.benefit-item p {
  margin-top: 6px;

  color: #646044;

  font-size: 12px;

  line-height: 1.6;
}


/* CTA */

.cta-section {
  padding-top: 40px;
  padding-bottom: 100px;
}

.cta-box {
  position: relative;

  overflow: hidden;

  padding: 90px 30px;

  border-radius: 22px;

  background: var(--color-red);

  text-align: center;
}

.cta-content {
  position: relative;

  z-index: 2;
}

.cta-box .eyebrow {
  color: var(--color-yellow);
}

.cta-box h2 {
  max-width: 760px;

  margin: 16px auto 0;

  color: #fff;

  font-size: clamp(38px, 5vw, 58px);

  letter-spacing: -2px;
}

.cta-box h2 span {
  color: var(--color-yellow);
}

.cta-box p {
  max-width: 580px;

  margin: 20px auto 30px;

  color: rgba(255, 255, 255, .78);

  font-size: 15px;
}

.cta-decoration {
  position: absolute;

  border-radius: 50%;

  opacity: .18;
}

.decoration-one {
  width: 300px;
  height: 300px;

  top: -160px;
  left: -70px;

  background: var(--color-orange);
}

.decoration-two {
  width: 360px;
  height: 360px;

  right: -130px;
  bottom: -220px;

  background: var(--color-yellow);
}


/* RESPONSIVE */

@media (max-width: 1100px) {

  .hero-grid {
    gap: 45px;
  }

  .problem-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .process-grid {
    gap: 50px;
  }

  .benefit-box {
    gap: 50px;
    padding: 50px;
  }

}


@media (max-width: 900px) {

  .hero {
    padding-top: 90px;
  }

  .hero-grid {
    grid-template-columns: 1fr;
  }

  .hero-content {
    max-width: 700px;

    margin: 0 auto;

    text-align: center;
  }

  .hero-description {
    margin-left: auto;
    margin-right: auto;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-stats {
    justify-content: center;

    text-align: left;
  }

  .hero-visual {
    width: 100%;
    max-width: 600px;

    margin: 0 auto;
  }

  .process-grid {
    grid-template-columns: 1fr;
  }

  .process-content {
    position: static;

    max-width: 650px;
  }

  .benefit-box {
    grid-template-columns: 1fr;
  }

}


@media (max-width: 768px) {

  .section {
    padding: 70px 0;
  }

  .container {
    padding: 0 20px;
  }

  .hero {
    min-height: auto;

    padding-top: 70px;
  }

  .hero h1 {
    font-size: clamp(40px, 10vw, 56px);

    letter-spacing: -2px;
  }

  .hero-description {
    font-size: 15px;
  }

  .hero-stats {
    gap: 18px;

    margin-top: 40px;
  }

  .hero-visual {
    min-height: 450px;
  }

  .performance-card {
    padding: 22px;
  }

  .score-wrapper {
    grid-template-columns: 140px 1fr;

    gap: 18px;
  }

  .score-circle {
    width: 130px;
    height: 130px;
  }

  .score-circle strong {
    font-size: 34px;
  }

  .floating-card-top {
    top: 30px;
    right: -5px;
  }

  .floating-card-bottom {
    bottom: 25px;
    left: -5px;
  }

  .problem-grid,
  .service-grid {
    grid-template-columns: 1fr;
  }

  .problem-card {
    min-height: auto;
  }

  .problem-top {
    margin-bottom: 25px;
  }

  .service-card {
    min-height: 350px;
  }

  .benefit-box {
    padding: 40px 25px;
  }

  .benefit-list {
    grid-template-columns: 1fr;

    gap: 25px;
  }

  .cta-box {
    padding: 70px 22px;
  }

}


@media (max-width: 520px) {

  .hero-actions {
    flex-direction: column;
  }

  .hero-actions .btn {
    width: 100%;
  }

  .hero-stats {
    display: grid;

    grid-template-columns: 1fr 1fr;

    text-align: left;
  }

  .hero-visual {
    min-height: 390px;
  }

  .performance-card {
    width: 100%;
  }

  .card-header {
    gap: 10px;
  }

  .status {
    font-size: 8px;
  }

  .score-wrapper {
    grid-template-columns: 1fr;

    justify-items: center;
  }

  .score-info {
    width: 100%;
  }

  .floating-card {
    transform: scale(.85);
  }

  .floating-card-top {
    right: -18px;
  }

  .floating-card-bottom {
    left: -18px;
  }

  .section-heading h2,
  .process-content h2,
  .benefit-content h2 {
    font-size: 34px;

    letter-spacing: -1.3px;
  }

  .process-item {
    grid-template-columns: 45px 35px 1fr;

    gap: 10px;
  }

  .cta-box h2 {
    font-size: 38px;

    letter-spacing: -1.5px;
  }

}


@media (max-width: 380px) {

  .hero-stats {
    grid-template-columns: 1fr;
  }

  .floating-card {
    transform: scale(.75);
  }

}
</style>
```
