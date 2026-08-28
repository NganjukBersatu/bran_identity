<template>
  <section class="pricing section">
    <div class="container">
      <!-- Header -->
      <div class="pricing-head">
        <span class="eyebrow">// pricing</span>
        <h2 class="pricing-title">
          Paket yang jelas,<br />
          <span class="accent">tanpa biaya siluman</span>
        </h2>
        <p class="pricing-sub">
          3 paket umum yang berlaku untuk semua layanan kami. Detail lengkap
          apa saja yang Anda dapatkan di tiap layanan ada di tabel bawah.
        </p>
      </div>

      <!-- ==========================================
           3 PAKET UMUM (bukan milik satu layanan)
      =========================================== -->
      <div class="plans">
        <article
          v-for="pkg in packages"
          :key="pkg.id"
          class="plan-card"
          :class="{ 'is-popular': pkg.popular }"
        >
          <div v-if="pkg.popular" class="popular-tag">Paling Dipilih</div>

          <div class="plan-version">{{ pkg.version }}</div>

          <h3 class="plan-name">{{ pkg.name }}</h3>
          <p class="plan-desc">{{ pkg.description }}</p>

          <div class="plan-price">
            <span v-if="pkg.currency" class="price-currency">{{ pkg.currency }}</span>
            <span class="price-amount">{{ pkg.price }}</span>
            <span v-if="pkg.unit" class="price-unit">{{ pkg.unit }}</span>
          </div>
          <p class="plan-maintenance">{{ pkg.note }}</p>

          <router-link :to="pkg.ctaLink" class="btn plan-btn" :class="pkg.popular ? 'btn-primary' : 'btn-secondary'">
            {{ pkg.ctaLabel }}
          </router-link>

          <ul class="plan-features">
            <li v-for="feature in pkg.features" :key="feature" class="plan-feature">
              <svg class="check-icon" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M13.5 4.5L6.5 11.5L2.5 7.5"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>{{ feature }}</span>
            </li>
          </ul>
        </article>
      </div>

      <!-- ==========================================
           DETAIL PER LAYANAN — 6 TABEL TERPISAH
      =========================================== -->
      <div class="comparison">
        <div class="comparison-head reveal">
          <span class="eyebrow">// detail per layanan</span>
          <h3 class="comparison-title">Paket A dapat apa, Paket B dapat apa</h3>
          <p class="comparison-sub">
            Tiap layanan punya cakupan berbeda di tiap paket. Paket Custom
            selalu menyesuaikan permintaan klien, baik dari sisi fitur maupun harga.
          </p>
        </div>

        <div
          v-for="service in services"
          :key="service.name"
          class="service-block reveal"
        >
          <h4 class="service-title">{{ service.name }}</h4>

          <!-- TABLE — desktop / tablet -->
          <div class="comparison-table" role="table">
            <div class="comparison-row comparison-row-head" role="row">
              <div class="comparison-cell comparison-label" role="columnheader">Cakupan</div>
              <div
                v-for="pkg in packages"
                :key="`${service.name}-head-${pkg.id}`"
                class="comparison-cell comparison-plan"
                :class="{ 'is-popular': pkg.popular }"
                role="columnheader"
              >
                {{ pkg.name }}
              </div>
            </div>

            <!-- baris harga -->
            <div class="comparison-row comparison-row-price" role="row">
              <div class="comparison-cell comparison-label" role="cell">Harga</div>
              <div
                v-for="pkg in packages"
                :key="`${service.name}-price-${pkg.id}`"
                class="comparison-cell comparison-price-cell"
                :class="{ 'is-popular': pkg.popular }"
                role="cell"
              >
                {{ pkg.tablePrice }}
              </div>
            </div>

            <!-- baris fitur -->
            <div
              v-for="feature in service.features"
              :key="feature.label"
              class="comparison-row"
              role="row"
            >
              <div class="comparison-cell comparison-label" role="cell">
                {{ feature.label }}
              </div>
              <div
                v-for="(pkg, index) in packages"
                :key="`${service.name}-${feature.label}-${pkg.id}`"
                class="comparison-cell"
                :class="{ 'is-popular': pkg.popular, 'is-empty': !feature.values[index] }"
                role="cell"
              >
                <template v-if="feature.values[index]">
                  <svg
                    class="check-icon comparison-check"
                    width="15"
                    height="15"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M13.5 4.5L6.5 11.5L2.5 7.5"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span v-if="typeof feature.values[index] === 'string'">
                    {{ feature.values[index] }}
                  </span>
                </template>
                <span v-else class="dash">—</span>
              </div>
            </div>
          </div>

          <!-- CARDS — mobile fallback -->
          <div class="comparison-mobile">
            <div
              v-for="(pkg, index) in packages"
              :key="`${service.name}-m-${pkg.id}`"
              class="comparison-mobile-card"
              :class="{ 'is-popular': pkg.popular }"
            >
              <div class="comparison-mobile-header">
                <span class="comparison-mobile-plan">{{ pkg.name }}</span>
                <span class="comparison-mobile-price">{{ pkg.tablePrice }}</span>
              </div>
              <ul class="comparison-mobile-list">
                <li
                  v-for="feature in service.features"
                  :key="`${service.name}-m-${pkg.id}-${feature.label}`"
                  :class="{ 'is-empty': !feature.values[index] }"
                >
                  <svg
                    v-if="feature.values[index]"
                    class="check-icon comparison-check"
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M13.5 4.5L6.5 11.5L2.5 7.5"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <span v-else class="dash">—</span>
                  <span>
                    {{ feature.label }}<template v-if="typeof feature.values[index] === 'string'"> — {{ feature.values[index] }}</template>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Footnote / enterprise nudge -->
      <p class="pricing-footnote">
        Butuh kombinasi layanan atau skema kerja khusus? Ceritakan kebutuhan Anda,
        kami buatkan penawaran Paket Custom yang sesuai.
        <a href="#contact" class="footnote-link">Hubungi kami &rarr;</a>
      </p>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

/* ==========================================
   SCROLL REVEAL
   Elemen dengan class "reveal" (heading detail
   layanan & tiap service-block) akan fade-in
   + geser naik begitu masuk viewport saat di-scroll.
=========================================== */

let observer = null

onMounted(() => {
  const els = document.querySelectorAll('.reveal')

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  )

  els.forEach((el) => observer.observe(el))
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})

/* ==========================================
   3 PAKET UMUM
   Berlaku lintas layanan — bukan milik satu
   layanan tertentu. Cakupan detail per layanan
   ada di array "services" di bawah.
=========================================== */

const packages = [
  {
    id: 'a',
    version: 'Paket A',
    name: 'Paket A',
    description: 'Titik awal yang pas untuk kebutuhan dasar & cepat mulai.',
    currency: 'Rp',
    price: '3.500.000',
    unit: '',
    tablePrice: 'Mulai Rp 3.500.000',
    note: 'Harga dasar, menyesuaikan scope akhir',
    ctaLabel: 'Konsultasi Gratis',
    ctaLink: '/contact',
    popular: false,
    features: [
      'Konsultasi awal gratis',
      'Revisi desain 2x',
      'Garansi bug 14 hari',
      'Support via email',
    ],
  },
  {
    id: 'b',
    version: 'Paket B',
    name: 'Paket B',
    description: 'Untuk bisnis yang butuh cakupan lebih lengkap & siap berkembang.',
    currency: 'Rp',
    price: '9.500.000',
    unit: '',
    tablePrice: 'Mulai Rp 9.500.000',
    note: 'Harga dasar, menyesuaikan scope akhir',
    ctaLabel: 'Mulai Proyek',
    ctaLink: '/contact',
    popular: true,
    features: [
      'Semua yang ada di Paket A',
      'Revisi desain 4x',
      'Prioritas pengerjaan',
      'Support pasca-launch 30 hari',
    ],
  },
  {
    id: 'custom',
    version: 'Paket Custom',
    name: 'Paket Custom',
    description: 'Untuk kebutuhan spesifik: sistem, integrasi, atau skala khusus.',
    currency: '',
    price: 'Menyesuaikan',
    unit: '',
    tablePrice: 'Menyesuaikan kebutuhan',
    note: 'Harga & timeline dibahas bersama sesuai brief',
    ctaLabel: 'Diskusikan Kebutuhan',
    ctaLink: '/contact',
    popular: false,
    features: [
      'Scope & arsitektur sesuai kebutuhan',
      'Dedicated project manager',
      'SLA & dukungan berkelanjutan',
      'Kontrak kerja sama fleksibel',
    ],
  },
]

/* ==========================================
   DETAIL 6 LAYANAN
   Tiap layanan = 1 tabel dengan baris fitur.
   values mengikuti urutan packages: [A, B, Custom]
   - true        -> centang, tanpa keterangan tambahan
   - 'teks'      -> centang + keterangan singkat
   - false       -> tidak termasuk (tanda minus)
=========================================== */

const services = [
  {
    name: 'Web Development',
    features: [
      { label: 'Landing page 1 halaman', values: [true, true, true] },
      { label: 'Company profile hingga 6 halaman', values: [false, true, true] },
      { label: 'CMS untuk kelola konten sendiri', values: [false, true, true] },
      { label: 'Web app / sistem custom', values: [false, false, true] },
      { label: 'SEO dasar', values: [false, true, true] },
    ],
  },
  {
    name: 'UI/UX Design',
    features: [
      { label: 'Desain dari template terkurasi', values: [true, false, false] },
      { label: 'Desain UI custom sesuai brand', values: [false, true, true] },
      { label: 'Riset pengguna & user flow', values: [false, 'dasar', 'mendalam'] },
      { label: 'Prototipe interaktif (klik-through)', values: [false, false, true] },
    ],
  },
  {
    name: 'Custom Software Development',
    features: [
      { label: 'Fitur tambahan sederhana (form, API dasar)', values: [false, true, true] },
      { label: 'Dashboard / admin panel internal', values: [false, false, true] },
      { label: 'Integrasi sistem pihak ketiga', values: [false, false, true] },
      { label: 'Automasi alur kerja bisnis', values: [false, false, true] },
    ],
  },
  {
    name: 'Mobile App Development',
    features: [
      { label: 'Versi PWA (diakses seperti aplikasi)', values: [false, 'opsional', true] },
      { label: 'Aplikasi Android & iOS native', values: [false, false, true] },
      { label: 'Push notification & fitur native', values: [false, false, true] },
    ],
  },
  {
    name: 'Cloud & DevOps',
    features: [
      { label: 'Hosting & domain 1 tahun + SSL', values: [true, true, true] },
      { label: 'Backup berkala', values: [false, true, true] },
      { label: 'Arsitektur cloud scalable', values: [false, false, true] },
      { label: 'CI/CD & monitoring berkelanjutan', values: [false, false, true] },
    ],
  },
  {
    name: 'Maintenance & Support',
    features: [
      { label: 'Support email 7 hari setelah launch', values: [true, true, true] },
      { label: 'Support 30 hari + maintenance bulanan', values: [false, true, true] },
      { label: 'SLA dukungan & dedicated PM', values: [false, false, true] },
    ],
  },
]
</script>

<style scoped>
/* ==========================================
   ANIMASI MASUK
=========================================== */

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUpPopular {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(-8px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .pricing-head,
  .plan-card,
  .reveal {
    animation: none !important;
    transition: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}

.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.service-block.reveal:nth-of-type(2) { transition-delay: 0.05s; }
.service-block.reveal:nth-of-type(3) { transition-delay: 0.1s; }
.service-block.reveal:nth-of-type(4) { transition-delay: 0.15s; }
.service-block.reveal:nth-of-type(5) { transition-delay: 0.2s; }
.service-block.reveal:nth-of-type(6) { transition-delay: 0.25s; }

.pricing {
  background: var(--color-bg);
  padding-top: 148px; /* tinggi navbar (88px) + jarak napas tambahan */
}

@media (max-width: 900px) {
  .pricing {
    padding-top: 120px;
  }
}

@media (max-width: 480px) {
  .pricing {
    padding-top: 104px;
  }
}

.pricing-head {
  max-width: 640px;
  margin: 0 auto 56px;
  text-align: center;
  animation: fadeInUp 0.6s ease both;
}

.pricing-title {
  font-size: 40px;
  margin-top: 14px;
  color: var(--color-text);
}

.pricing-title .accent {
  color: var(--color-deep-orange);
}

.pricing-sub {
  margin-top: 18px;
  color: var(--color-text-secondary);
  font-size: 16px;
}

.plans {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  align-items: stretch;
}

.plan-card {
  position: relative;
  background: var(--color-surface);
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius);
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  transition: border-color .2s ease, transform .2s ease;
  animation: fadeInUp 0.6s ease both;
  animation-delay: 0.1s;
}

.plan-card:nth-child(2) {
  animation-delay: 0.2s;
}

.plan-card:nth-child(3) {
  animation-delay: 0.3s;
}

.plan-card.is-popular {
  border-color: var(--color-deep-orange);
  box-shadow: 0 12px 32px -18px rgba(231, 81, 25, 0.45);
  transform: translateY(-8px);
  animation: fadeInUpPopular 0.6s ease both;
  animation-delay: 0.2s;
}

.popular-tag {
  position: absolute;
  top: -13px;
  left: 28px;
  background: var(--color-red);
  color: #fff;
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 12px;
  letter-spacing: .03em;
  padding: 5px 12px;
  border-radius: 999px;
}

.plan-version {
  font-family: var(--font-heading);
  font-size: 13px;
  font-weight: 600;
  color: var(--color-text-secondary);
  letter-spacing: .04em;
}

.plan-name {
  font-size: 22px;
  margin-top: 10px;
  color: var(--color-text);
}

.plan-desc {
  margin-top: 8px;
  font-size: 14px;
  color: var(--color-text-secondary);
  min-height: 42px;
}

.plan-price {
  display: flex;
  align-items: baseline;
  gap: 4px;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid var(--color-border);
}

.price-currency {
  font-family: var(--font-heading);
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text);
}

.price-amount {
  font-family: var(--font-heading);
  font-size: 34px;
  font-weight: 600;
  color: var(--color-text);
  line-height: 1;
}

.price-unit {
  font-size: 14px;
  color: var(--color-text-secondary);
}

.plan-maintenance {
  margin-top: 6px;
  font-size: 13px;
  color: var(--color-text-secondary);
  min-height: 18px;
}

.plan-btn {
  margin-top: 20px;
  width: 100%;
}

.plan-features {
  list-style: none;
  margin: 28px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.plan-feature {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  color: var(--color-text);
}

.check-icon {
  flex-shrink: 0;
  margin-top: 2px;
  color: var(--color-deep-orange);
}

/* ==========================================
   DETAIL PER LAYANAN
=========================================== */

.comparison {
  margin-top: 96px;
}

.comparison-head {
  max-width: 640px;
  margin: 0 auto 48px;
  text-align: center;
}

.comparison-title {
  font-size: 30px;
  margin-top: 14px;
  color: var(--color-text);
}

.comparison-sub {
  margin-top: 14px;
  color: var(--color-text-secondary);
  font-size: 15px;
}

.service-block {
  margin-bottom: 40px;
}

.service-block:last-child {
  margin-bottom: 0;
}

.service-title {
  font-size: 18px;
  color: var(--color-text);
  margin-bottom: 14px;
  border-left: 3px solid var(--color-deep-orange);
  padding-left: 12px;
}

.comparison-table {
  display: table;
  width: 100%;
  border-collapse: collapse;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  overflow: hidden;
}

.comparison-row {
  display: table-row;
}

.comparison-row:not(:last-child) .comparison-cell {
  border-bottom: 1px solid var(--color-border);
}

.comparison-cell {
  display: table-cell;
  vertical-align: middle;
  padding: 14px 18px;
  font-size: 14px;
  color: var(--color-text);
}

.comparison-label {
  width: 30%;
  font-size: 14px;
  color: var(--color-text);
  background: var(--color-bg);
}

.comparison-plan {
  font-family: var(--font-heading);
  font-weight: 600;
  color: var(--color-text-secondary);
}

.comparison-row-head .comparison-cell {
  background: var(--color-bg);
  padding-top: 14px;
  padding-bottom: 14px;
}

.comparison-row-head .comparison-label {
  font-family: var(--font-heading);
  font-weight: 600;
}

.comparison-row-price .comparison-cell {
  font-family: var(--font-heading);
  font-weight: 600;
}

.comparison-price-cell {
  color: var(--color-text);
}

.comparison-plan.is-popular {
  color: var(--color-deep-orange);
}

.comparison-cell.is-popular {
  background: linear-gradient(
    180deg,
    rgba(251, 159, 55, 0.06),
    rgba(251, 159, 55, 0.02)
  );
}

.comparison-cell .comparison-check {
  color: var(--color-deep-orange);
  margin-right: 8px;
  vertical-align: -2px;
}

.comparison-cell.is-empty .dash {
  color: var(--color-text-secondary);
  opacity: .55;
}

/* mobile cards, disembunyikan di desktop */
.comparison-mobile {
  display: none;
}

@media (max-width: 720px) {
  .comparison-table {
    display: none;
  }

  .comparison-mobile {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .comparison-mobile-card {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius);
    padding: 18px;
  }

  .comparison-mobile-card.is-popular {
    border-color: var(--color-deep-orange);
  }

  .comparison-mobile-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding-bottom: 12px;
    border-bottom: 1px solid var(--color-border);
  }

  .comparison-mobile-plan {
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: 14px;
    color: var(--color-text);
  }

  .comparison-mobile-card.is-popular .comparison-mobile-plan {
    color: var(--color-deep-orange);
  }

  .comparison-mobile-price {
    font-size: 13px;
    color: var(--color-text-secondary);
  }

  .comparison-mobile-list {
    list-style: none;
    margin: 12px 0 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .comparison-mobile-list li {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-size: 13px;
    color: var(--color-text);
  }

  .comparison-mobile-list li.is-empty {
    color: var(--color-text-secondary);
    opacity: .6;
  }

  .comparison-mobile-list .dash {
    color: var(--color-text-secondary);
  }
}

.pricing-footnote {
  text-align: center;
  margin-top: 48px;
  font-size: 14px;
  color: var(--color-text-secondary);
}

.footnote-link {
  color: var(--color-red);
  font-weight: 600;
  text-decoration: none;
  margin-left: 4px;
}

.footnote-link:hover {
  text-decoration: underline;
}

@media (max-width: 1024px) {
  .plans {
    gap: 18px;
  }

  .comparison-cell {
    padding: 12px 14px;
    font-size: 13px;
  }
}

@media (max-width: 900px) {
  .plans {
    grid-template-columns: 1fr;
  }
  .plan-card.is-popular {
    transform: none;
    animation: fadeInUp 0.6s ease both;
    animation-delay: 0.2s;
  }
  .pricing-title {
    font-size: 30px;
  }
  .comparison-title {
    font-size: 24px;
  }
}

@media (max-width: 640px) {
  .pricing-title {
    font-size: 26px;
  }
  .pricing-sub,
  .comparison-sub {
    font-size: 14px;
  }
  .plan-card {
    padding: 26px 20px;
  }
  .price-amount {
    font-size: 28px;
  }
  .comparison {
    margin-top: 64px;
  }
  .service-block {
    margin-bottom: 28px;
  }
}
</style>