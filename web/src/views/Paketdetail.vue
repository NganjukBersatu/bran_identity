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
  <section class="paket-detail section" v-if="service && pkg">
    <div class="container">
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

      <div class="detail-intro">
        <span v-if="pkg.popular" class="popular-tag">Paling Dipilih</span>
        <p class="detail-kicker">Paket untuk {{ service.name }}</p>
        <h1 class="detail-title">{{ pkg.name }}</h1>
        <p class="detail-desc">
          Berikut rincian lengkap yang Anda dapatkan dari {{ service.name }} pada
          {{ pkg.name }}, dan keuntungan tambahan yang berlaku untuk paket ini.
        </p>
      </div>

      <div class="detail-layout">
        <!-- Rincian fitur untuk layanan ini -->
        <div class="detail-main">
          <h2 class="panel-heading">Yang Anda dapatkan</h2>
          <ul class="feature-list">
            <li
              v-for="feature in service.features"
              :key="feature.label"
              :class="{ 'is-none': isNone(feature.values[pkgIndex]) }"
            >
              <span class="feature-icon">
                <svg v-if="!isNone(feature.values[pkgIndex])" width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M13.5 4.5L6.5 11.5L2.5 7.5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <svg v-else width="10" height="10" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                </svg>
              </span>
              <div class="feature-copy">
                <span class="feature-label">{{ feature.label }}</span>
                <span class="feature-value">{{ feature.values[pkgIndex] }}</span>
              </div>
            </li>
          </ul>
        </div>

        <!-- Kartu harga + keuntungan umum paket -->
        <aside class="detail-side">
          <div class="price-card">
            <span class="price-card-service">{{ service.name }}</span>
            <div class="price-card-amount">{{ service.prices[pkgIndex] }}</div>

            <div class="trust-badges" v-if="trustBadges.length">
              <span class="trust-badge" v-for="badge in trustBadges" :key="badge.text">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    :d="ICONS[badge.icon]"
                    stroke="currentColor"
                    stroke-width="1.4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>{{ badge.text }}</span>
              </span>
            </div>

            <router-link :to="pkg.ctaLink" class="price-card-cta">
              {{ pkg.ctaLabel }}
            </router-link>

            <div class="price-card-divider"></div>

            <p class="price-card-subhead">Keuntungan {{ pkg.name }}</p>
            <ul class="perk-list">
              <li v-for="feature in pkg.features" :key="feature">
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M13.5 4.5L6.5 11.5L2.5 7.5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <!-- Kenapa memilih paket ini -->
      <div class="benefits-band">
        <h2 class="panel-heading">Kenapa memilih {{ pkg.name }}</h2>
        <div class="benefits-list">
          <div class="benefit-item" v-for="b in benefits" :key="b.title">
            <span class="benefit-icon">
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                <path
                  :d="ICONS[b.icon]"
                  stroke="currentColor"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <div class="benefit-copy">
              <p class="benefit-title">{{ b.title }}</p>
              <p class="benefit-desc">{{ b.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Ganti paket, tetap di layanan yang sama -->
      <nav class="switch-nav" aria-label="Pilih paket lain">
        <router-link
          v-for="other in packages"
          :key="`switch-${other.id}`"
          :to="`/paket/${service.slug}/${other.id}`"
          class="switch-tab"
          :class="{ 'is-active': other.id === pkg.id, 'is-popular': other.popular }"
        >
          {{ other.name }}
        </router-link>
      </nav>

      <!-- Lihat paket yang sama untuk layanan lain -->
      <div class="service-switch">
        <span class="service-switch-label">Lihat {{ pkg.name }} untuk layanan lain</span>
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
  </section>

  <!-- Fallback kalau serviceSlug / packageId di URL tidak cocok -->
  <section class="paket-detail section" v-else>
    <div class="container">
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

// Badge kepercayaan singkat (garansi, revisi, support, konsultasi) yang
// diambil otomatis dari pkg.features, supaya tidak perlu data terpisah.
// Sesuaikan kata kunci di bawah kalau istilah di data Anda berbeda.
const TRUST_KEYWORDS = [
  { match: /garansi/i, icon: 'shield' },
  { match: /revisi/i, icon: 'refresh' },
  { match: /support|dukungan/i, icon: 'headset' },
  { match: /konsultasi/i, icon: 'chat' },
]

const ICONS = {
  shield: 'M8 1.5L13.5 3.5V7.5C13.5 10.8 11.2 13.6 8 14.5C4.8 13.6 2.5 10.8 2.5 7.5V3.5L8 1.5Z',
  refresh: 'M13 8A5 5 0 1 1 11.3 4.3M13 8V4.3M13 8H9.3',
  headset: 'M3 9V7.5A5 5 0 0 1 13 7.5V9M3 9V10.8A1.2 1.2 0 0 0 4.2 12H5V9H3ZM13 9H11V12H11.8A1.2 1.2 0 0 0 13 10.8V9Z',
  chat: 'M2.5 3.5H13.5V10.5H6.2L3.5 12.5V10.5H2.5V3.5Z',
  target: 'M8 14A6 6 0 1 0 8 2A6 6 0 0 0 8 14ZM8 10.5A2.5 2.5 0 1 0 8 5.5A2.5 2.5 0 0 0 8 10.5Z',
  trending: 'M2.5 11L6.5 7L9 9.5L13.5 5M13.5 5H10M13.5 5V8',
  spark: 'M8 2L9.3 6.2L13.5 7.5L9.3 8.8L8 13L6.7 8.8L2.5 7.5L6.7 6.2L8 2Z',
}

const trustBadges = computed(() => {
  if (!pkg.value) return []
  return pkg.value.features
    .map((text) => {
      const found = TRUST_KEYWORDS.find((k) => k.match.test(text))
      return found ? { text, icon: found.icon } : null
    })
    .filter(Boolean)
    .slice(0, 4)
})

// "Kenapa memilih paket ini" — dihitung dari data asli (jumlah fitur yang
// termasuk, jumlah keuntungan tambahan), bukan teks tetap, supaya otomatis
// akurat untuk semua kombinasi layanan + paket.
const includedCount = computed(() => {
  if (!service.value) return 0
  return service.value.features.filter((f) => !isNone(f.values[pkgIndex.value])).length
})

const totalCount = computed(() => (service.value ? service.value.features.length : 0))

const benefits = computed(() => {
  if (!service.value || !pkg.value) return []
  const perks = pkg.value.features
  const perkSample = perks.slice(0, 2).join(' dan ')

  return [
    {
      icon: 'target',
      title: 'Cakupan jelas dari awal',
      desc: `${includedCount.value} dari ${totalCount.value} kebutuhan ${service.value.name} sudah termasuk, jadi tidak ada tambahan biaya tersembunyi di tengah jalan.`,
    },
    {
      icon: 'trending',
      title: 'Bisa berkembang bersama Anda',
      desc: `Kalau kebutuhan bertambah, tinggal naik ke paket lain — semua riwayat dan konteks pekerjaan tetap dilanjutkan, bukan mulai dari nol.`,
    },
    {
      icon: 'spark',
      title: 'Lebih dari sekadar harga',
      desc: perkSample
        ? `Sudah termasuk ${perkSample}, jadi Anda tidak perlu urus itu terpisah setelah pekerjaan selesai.`
        : `Setiap paket dirancang supaya Anda tidak perlu urus hal teknis tambahan setelah pekerjaan selesai.`,
    },
  ]
})
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

/* ==========================================
   Intro (judul, deskripsi)
=========================================== */

.detail-intro {
  max-width: 620px;
  margin: 0 auto 48px;
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
  margin-bottom: 14px;
}

.detail-kicker {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-deep-orange);
  margin: 0 0 8px;
}

.detail-title {
  font-size: 40px;
  color: var(--color-text);
  margin: 0;
}

.detail-desc {
  margin-top: 14px;
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-text-secondary);
}

/* ==========================================
   Layout dua kolom: fitur + kartu harga
=========================================== */

.detail-layout {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 40px;
  max-width: 980px;
  margin: 0 auto;
  align-items: start;
}

.panel-heading {
  font-size: 18px;
  color: var(--color-text);
  border-left: 3px solid var(--color-deep-orange);
  padding-left: 12px;
  margin: 0 0 8px;
}

.feature-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.feature-list li {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 16px 0;
  border-bottom: 1px solid var(--color-border);
}

.feature-icon {
  flex-shrink: 0;
  width: 22px;
  height: 22px;
  margin-top: 1px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(217, 119, 87, .12);
  color: var(--color-deep-orange);
}

.feature-list li.is-none .feature-icon {
  background: var(--color-border);
  color: var(--color-text-secondary);
}

.feature-copy {
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
}

.feature-label {
  font-size: 15px;
  font-weight: 600;
  color: var(--color-text);
}

.feature-value {
  font-size: 14px;
  color: var(--color-text-secondary);
}

.feature-list li.is-none .feature-value {
  font-style: italic;
  opacity: .8;
}

/* ==========================================
   Kartu harga (elemen utama, sticky)
=========================================== */

.detail-side {
  position: sticky;
  top: 148px;
}

.price-card {
  background: var(--color-text);
  border-radius: var(--radius);
  padding: 28px 24px;
  color: #fff;
}

.price-card-service {
  display: block;
  font-size: 13px;
  font-weight: 600;
  color: rgba(255, 255, 255, .6);
  margin-bottom: 10px;
}

.price-card-amount {
  font-family: var(--font-heading);
  font-size: 30px;
  font-weight: 600;
  color: var(--color-deep-orange);
  line-height: 1.15;
  margin-bottom: 20px;
}

.trust-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.trust-badge {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  color: rgba(255, 255, 255, .88);
  background: rgba(255, 255, 255, .08);
  padding: 5px 10px;
  border-radius: 999px;
}

.trust-badge svg {
  flex-shrink: 0;
  color: var(--color-deep-orange);
}

.price-card-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 13px 20px;
  border-radius: 999px;
  background: var(--color-deep-orange);
  color: #fff;
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  transition: opacity .2s ease;
}

.price-card-cta:hover {
  opacity: .88;
}

.price-card-divider {
  height: 1px;
  background: rgba(255, 255, 255, .14);
  margin: 24px 0 18px;
}

.price-card-subhead {
  font-size: 13px;
  font-weight: 600;
  color: rgba(255, 255, 255, .6);
  margin: 0 0 14px;
}

.perk-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.perk-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 14px;
  color: rgba(255, 255, 255, .92);
}

.perk-list li svg {
  flex-shrink: 0;
  margin-top: 3px;
  color: var(--color-deep-orange);
}

/* ==========================================
   Kenapa memilih paket ini
=========================================== */

.benefits-band {
  max-width: 980px;
  margin: 64px auto 0;
  padding-top: 48px;
  border-top: 1px solid var(--color-border);
}

.benefits-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
  margin-top: 24px;
}

.benefit-item {
  display: flex;
  gap: 12px;
  padding: 4px 24px;
}

.benefit-item:first-child {
  padding-left: 0;
}

.benefit-item:last-child {
  padding-right: 0;
}

.benefit-item:not(:first-child) {
  border-left: 1px solid var(--color-border);
}

.benefit-icon {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(217, 119, 87, .1);
  color: var(--color-deep-orange);
}

.benefit-copy {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.benefit-title {
  font-size: 15px;
  font-weight: 600;
  color: var(--color-text);
  margin: 0;
}

.benefit-desc {
  font-size: 13.5px;
  line-height: 1.55;
  color: var(--color-text-secondary);
  margin: 0;
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

/* ==========================================
   Responsif
=========================================== */

@media (max-width: 860px) {
  .detail-layout {
    grid-template-columns: 1fr;
  }

  .detail-side {
    position: static;
    max-width: 420px;
    margin: 0 auto;
  }

  .benefits-list {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .benefit-item {
    padding: 0;
    border-left: none !important;
    padding-top: 20px;
    border-top: 1px solid var(--color-border);
  }

  .benefit-item:first-child {
    padding-top: 0;
    border-top: none;
  }
}

@media (max-width: 640px) {
  .detail-title {
    font-size: 30px;
  }

  .price-card-amount {
    font-size: 26px;
  }

  .feature-list li {
    gap: 12px;
  }
}
</style>