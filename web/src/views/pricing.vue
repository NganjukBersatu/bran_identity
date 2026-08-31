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
          3 paket umum yang berlaku untuk semua layanan kami. Karena tiap layanan
          punya cakupan kerja berbeda, harga akhirnya juga berbeda per layanan —
          detail lengkapnya ada di tabel bawah.
        </p>
      </div>

      <!-- ==========================================
           3 PAKET UMUM (bukan milik satu layanan)
           Harga di kartu ini adalah harga REFERENSI
           (dari layanan Web Development).
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
           Nama paket di header tabel sekaligus jadi link
           (dengan panah) ke halaman detail paket TERSEBUT
           UNTUK LAYANAN INI SAJA (route /paket/:serviceSlug/:packageId).
      =========================================== -->
      <div class="comparison">
        <div class="comparison-head reveal">
          <span class="eyebrow">// detail per layanan</span>
          <h3 class="comparison-title">Paket A dapat apa, Paket B dapat apa</h3>
          <p class="comparison-sub">
            Tiap layanan punya cakupan dan harga berbeda di tiap paket. Paket Custom
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
              <router-link
                v-for="pkg in packages"
                :key="`${service.name}-head-${pkg.id}`"
                :to="`/paket/${service.slug}/${pkg.id}`"
                class="comparison-cell comparison-plan"
                :class="{ 'is-popular': pkg.popular }"
                role="columnheader"
              >
                <span>{{ pkg.name }}</span>
                <svg class="plan-link-arrow" width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </router-link>
            </div>

            <!-- baris harga: khusus per layanan -->
            <div class="comparison-row comparison-row-price" role="row">
              <div class="comparison-cell comparison-label" role="cell">Harga</div>
              <div
                v-for="(pkg, index) in packages"
                :key="`${service.name}-price-${pkg.id}`"
                class="comparison-cell comparison-price-cell"
                :class="{ 'is-popular': pkg.popular }"
                role="cell"
              >
                {{ service.prices[index] }}
              </div>
            </div>

            <!-- baris fitur: tiap sel selalu berupa kalimat penjelasan -->
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
                :class="{ 'is-popular': pkg.popular, 'is-none': isNone(feature.values[index]) }"
                role="cell"
              >
                <span :class="isNone(feature.values[index]) ? 'none-text' : 'detail-text'">
                  {{ feature.values[index] }}
                </span>
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
                <router-link :to="`/paket/${service.slug}/${pkg.id}`" class="comparison-mobile-plan">
                  <span>{{ pkg.name }}</span>
                  <svg class="plan-link-arrow" width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
                      stroke="currentColor"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </router-link>
                <span class="comparison-mobile-price">{{ service.prices[index] }}</span>
              </div>
              <ul class="comparison-mobile-list">
                <li
                  v-for="feature in service.features"
                  :key="`${service.name}-m-${pkg.id}-${feature.label}`"
                  :class="{ 'is-none': isNone(feature.values[index]) }"
                >
                  <span class="mobile-feature-label">{{ feature.label }}</span>
                  <span :class="isNone(feature.values[index]) ? 'none-text' : 'detail-text'">
                    {{ feature.values[index] }}
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
        <router-link to="/contact" class="footnote-link">Hubungi kami &rarr;</router-link>
      </p>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
// Sesuaikan path import ini dengan lokasi file pricingData.js di project Anda,
// misalnya '@/data/pricingData' atau '../data/pricingData'.
import { packages, services, isNone } from '../data/Pricingdata'

/* ==========================================
   SCROLL REVEAL
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
</script>

<style scoped>
/* Semua style di bawah SAMA PERSIS seperti versi Anda sebelumnya — tidak ada yang diubah. */

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
  padding-top: 148px;
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
  width: 28%;
  font-size: 14px;
  color: var(--color-text);
  background: var(--color-bg);
}

.comparison-plan {
  display: table-cell;
  font-family: var(--font-heading);
  font-weight: 600;
  color: var(--color-text-secondary);
  text-decoration: none;
  cursor: pointer;
  transition: color .2s ease, background .2s ease;
}

.comparison-plan:hover {
  color: var(--color-deep-orange);
  background: rgba(251, 159, 55, 0.06);
}

.plan-link-arrow {
  flex-shrink: 0;
  margin-left: 6px;
  opacity: 0;
  transform: translateX(-3px);
  transition: opacity .2s ease, transform .2s ease;
  vertical-align: middle;
}

.comparison-plan:hover .plan-link-arrow {
  opacity: .8;
  transform: translateX(0);
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

.comparison-cell .detail-text {
  color: var(--color-text);
}

.comparison-cell .none-text {
  color: var(--color-text-secondary);
  font-style: italic;
  opacity: .75;
}

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
    display: inline-flex;
    align-items: center;
    font-family: var(--font-heading);
    font-weight: 600;
    font-size: 14px;
    color: var(--color-text);
    text-decoration: none;
  }

  .comparison-mobile-plan .plan-link-arrow {
    opacity: .6;
    transform: none;
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
    flex-direction: column;
    gap: 2px;
    font-size: 13px;
    color: var(--color-text);
  }

  .comparison-mobile-list .mobile-feature-label {
    font-weight: 600;
    color: var(--color-text);
  }

  .comparison-mobile-list .detail-text {
    color: var(--color-text-secondary);
  }

  .comparison-mobile-list .none-text {
    color: var(--color-text-secondary);
    font-style: italic;
    opacity: .7;
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
  .paket-nav {
    margin-top: 40px;
  }
}
</style>