<!--
  PaketDetailView.vue
  ====================
  Halaman detail untuk SATU layanan + SATU paket saja.
  Dibuka lewat panah di baris header tabel PricingSection.vue.

  Route (daftarkan di router Anda):
    {
      path: '/paket/:serviceSlug/:packageId',
      name: 'Paketdetail',
      component: () => import('@/views/Paketdetail.vue'),
    }

  Contoh URL: /paket/web-development/a  → Paket A khusus Web Development
              /paket/ui-ux-design/b     → Paket B khusus UI/UX Design

  Sesuaikan path import '../data/pricingData' di bawah dengan lokasi
  file data Anda yang sebenarnya.
-->
<template>
  <section class="paket-detail section">
    <div class="container" v-if="service && pkg">
      <router-link to="/pricing" class="back-link">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M12.5 8H3.5M3.5 8L7.5 4M3.5 8L7.5 12"
            stroke="currentColor"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Kembali ke semua paket
      </router-link>

      <div class="detail-head">
        <span v-if="pkg.popular" class="popular-tag">Paling Dipilih</span>
        <span class="eyebrow">{{ service.name }} &middot; {{ pkg.version }}</span>
        <h1 class="detail-title">{{ pkg.name }}</h1>
        <p class="detail-desc">
          Rincian layanan <strong>{{ service.name }}</strong> pada {{ pkg.name }}.
        </p>

        <div class="detail-price">
          <span class="price-amount">{{ service.prices[pkgIndex] }}</span>
        </div>

        <router-link :to="pkg.ctaLink" class="btn btn-primary detail-cta">
          {{ pkg.ctaLabel }}
        </router-link>
      </div>

      <!-- Rincian fitur, khusus layanan ini + paket ini -->
      <div class="detail-services">
        <div class="detail-service-block">
          <div class="detail-service-header">
            <h3 class="detail-service-title">{{ service.name }}</h3>
            <span class="detail-service-price">{{ service.prices[pkgIndex] }}</span>
          </div>

          <ul class="detail-service-list">
            <li
              v-for="feature in service.features"
              :key="feature.label"
              :class="{ 'is-none': isNone(feature.values[pkgIndex]) }"
            >
              <span class="detail-feature-label">{{ feature.label }}</span>
              <span :class="isNone(feature.values[pkgIndex]) ? 'none-text' : 'detail-text'">
                {{ feature.values[pkgIndex] }}
              </span>
            </li>
          </ul>
        </div>

        <!-- Keuntungan umum yang berlaku lintas layanan di paket ini -->
        <div class="detail-service-block">
          <div class="detail-service-header">
            <h3 class="detail-service-title">Keuntungan umum {{ pkg.name }}</h3>
          </div>
          <ul class="detail-highlights-inline">
            <li v-for="feature in pkg.features" :key="feature">
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
        </div>
      </div>

      <!-- Ganti paket, tetap di layanan yang sama -->
      <div class="switch-nav">
        <router-link
          v-for="other in packages"
          :key="`switch-${other.id}`"
          :to="`/paket/${service.slug}/${other.id}`"
          class="switch-tab"
          :class="{ 'is-active': other.id === pkg.id, 'is-popular': other.popular }"
        >
          {{ other.name }}
        </router-link>
      </div>

      <!-- Lihat paket yang sama untuk layanan lain -->
      <div class="service-switch">
        <span class="service-switch-label">Lihat {{ pkg.name }} untuk layanan lain:</span>
        <div class="service-switch-list">
          <router-link
            v-for="s in services"
            :key="`svc-${s.slug}`"
            :to="`/paket/${s.slug}/${pkg.id}`"
            class="service-switch-link"
            :class="{ 'is-active': s.slug === service.slug }"
          >
            {{ s.name }}
          </router-link>
        </div>
      </div>
    </div>

    <!-- Fallback kalau serviceSlug / packageId di URL tidak cocok -->
    <div class="container" v-else>
      <p class="not-found">Halaman detail tidak ditemukan.</p>
      <router-link to="/pricing" class="back-link">Kembali ke semua paket</router-link>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
// Sesuaikan path import ini dengan lokasi file pricingData.js di project Anda.
import {
  packages,
  services,
  getPackageById,
  getPackageIndexById,
  getServiceBySlug,
  isNone,
} from '../data/pricingData'

const route = useRoute()

const service = computed(() => getServiceBySlug(route.params.serviceSlug))
const pkg = computed(() => getPackageById(route.params.packageId))
const pkgIndex = computed(() => getPackageIndexById(route.params.packageId))
</script>

<style scoped>
.paket-detail {
  background: var(--color-bg);
  padding-top: 148px;
  padding-bottom: 96px;
}

@media (max-width: 900px) {
  .paket-detail {
    padding-top: 120px;
  }
}

@media (max-width: 480px) {
  .paket-detail {
    padding-top: 104px;
  }
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text-secondary);
  text-decoration: none;
  margin-bottom: 32px;
  transition: color .2s ease;
}

.back-link:hover {
  color: var(--color-deep-orange);
}

.detail-head {
  position: relative;
  max-width: 640px;
  margin: 0 auto 64px;
  text-align: center;
}

.popular-tag {
  display: inline-block;
  background: var(--color-red);
  color: #fff;
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 12px;
  letter-spacing: .03em;
  padding: 5px 12px;
  border-radius: 999px;
  margin-bottom: 12px;
}

.detail-title {
  font-size: 40px;
  margin-top: 10px;
  color: var(--color-text);
}

.detail-desc {
  margin-top: 14px;
  font-size: 16px;
  color: var(--color-text-secondary);
}

.detail-price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 4px;
  margin-top: 28px;
}

.price-amount {
  font-family: var(--font-heading);
  font-size: 34px;
  font-weight: 600;
  color: var(--color-text);
  line-height: 1;
}

.detail-cta {
  display: inline-flex;
  margin-top: 24px;
  padding-left: 32px;
  padding-right: 32px;
}

.check-icon {
  flex-shrink: 0;
  margin-top: 2px;
  color: var(--color-deep-orange);
}

/* ==========================================
   Rincian layanan (fitur + keuntungan umum)
=========================================== */

.detail-services {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 760px;
  margin: 0 auto;
}

.detail-service-block {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  overflow: hidden;
}

.detail-service-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  padding: 18px 20px;
  background: var(--color-bg);
  border-bottom: 1px solid var(--color-border);
}

.detail-service-title {
  font-size: 16px;
  color: var(--color-text);
  border-left: 3px solid var(--color-deep-orange);
  padding-left: 10px;
}

.detail-service-price {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 13px;
  color: var(--color-text-secondary);
  white-space: nowrap;
}

.detail-service-list {
  list-style: none;
  margin: 0;
  padding: 6px 20px 10px;
}

.detail-service-list li {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 12px 0;
}

.detail-service-list li:not(:last-child) {
  border-bottom: 1px solid var(--color-border);
}

.detail-feature-label {
  font-size: 14px;
  color: var(--color-text);
  flex: 1;
}

.detail-service-list .detail-text {
  font-size: 14px;
  color: var(--color-text);
  text-align: right;
  max-width: 55%;
}

.detail-service-list .none-text {
  font-size: 14px;
  color: var(--color-text-secondary);
  font-style: italic;
  opacity: .75;
  text-align: right;
  max-width: 55%;
}

.detail-highlights-inline {
  list-style: none;
  margin: 0;
  padding: 14px 20px 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.detail-highlights-inline li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  color: var(--color-text);
}

/* ==========================================
   Navigasi ganti paket (layanan sama)
=========================================== */

.switch-nav {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 56px;
}

.switch-tab {
  padding: 10px 20px;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 14px;
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color .2s ease, border-color .2s ease, background .2s ease;
}

.switch-tab:hover {
  color: var(--color-text);
  border-color: var(--color-text-secondary);
}

.switch-tab.is-active {
  color: #fff;
  background: var(--color-text);
  border-color: var(--color-text);
}

.switch-tab.is-active.is-popular {
  background: var(--color-deep-orange);
  border-color: var(--color-deep-orange);
}

/* ==========================================
   Navigasi ganti layanan (paket sama)
=========================================== */

.service-switch {
  max-width: 760px;
  margin: 32px auto 0;
  text-align: center;
}

.service-switch-label {
  display: block;
  font-size: 13px;
  color: var(--color-text-secondary);
  margin-bottom: 10px;
}

.service-switch-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}

.service-switch-link {
  padding: 6px 14px;
  border: 1px solid var(--color-border);
  border-radius: 999px;
  font-size: 13px;
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color .2s ease, border-color .2s ease;
}

.service-switch-link:hover {
  color: var(--color-deep-orange);
  border-color: var(--color-deep-orange);
}

.service-switch-link.is-active {
  color: var(--color-text);
  border-color: var(--color-text);
  font-weight: 600;
}

.not-found {
  text-align: center;
  margin-bottom: 16px;
  color: var(--color-text-secondary);
}

@media (max-width: 640px) {
  .detail-title {
    font-size: 30px;
  }
  .price-amount {
    font-size: 32px;
  }
  .detail-service-list li {
    flex-direction: column;
    gap: 4px;
  }
  .detail-service-list .detail-text,
  .detail-service-list .none-text {
    text-align: left;
    max-width: 100%;
  }
}
</style>