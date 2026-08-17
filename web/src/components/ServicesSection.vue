<script setup>
const props = defineProps({
  limit: { type: Number, default: null },
  showViewAll: { type: Boolean, default: false },
})

const services = [
  { number: '01', icon: 'chat', title: 'Konsultasi', slug: 'konsultasi', desc: 'Diskusi kebutuhan dan tujuan project Anda bersama tim ahli kami.' },
  { number: '02', icon: 'clipboard', title: 'Perencanaan', slug: 'perencanaan', desc: 'Menyusun scope, timeline, dan estimasi biaya secara detail dan terstruktur.' },
  { number: '03', icon: 'code', title: 'Development', slug: 'development', desc: 'Proses pengembangan dengan teknologi terbaru dan update berkala.' },
  { number: '04', icon: 'rocket', title: 'Deploy', slug: null, desc: 'Peluncuran produk ke server produksi dengan performa optimal.' },
  { number: '05', icon: 'headset', title: 'Support', slug: null, desc: 'Dukungan teknis dan pemeliharaan berkelanjutan setelah project selesai.' },
  { number: '06', icon: 'chart', title: 'Optimasi', slug: null, desc: 'Meningkatkan performa dan fitur produk agar selalu relevan dan kompetitif.' },
]

const displayedServices = props.limit ? services.slice(0, props.limit) : services
</script>

<template>
  <section id="layanan" class="services-section">
    <div class="services-container">
      <div class="services-header">
        <p class="services-eyebrow">LAYANAN KAMI</p>
        <h2>Solusi Digital untuk <span>Bisnis Anda</span></h2>
        <p class="services-description">
          Kami menyediakan berbagai layanan pengembangan digital
          <br class="desktop-only" />
          yang disesuaikan dengan kebutuhan bisnis Anda.
        </p>
      </div>

      <div class="services-grid">
        <div v-for="service in displayedServices" :key="service.title" class="service-card">
          <div class="service-number">{{ service.number }}</div>
          <div class="card-decoration"></div>
          <div class="service-icon">
            <svg v-if="service.icon === 'chat'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            <svg v-else-if="service.icon === 'clipboard'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 12h6M9 16h6"/></svg>
            <svg v-else-if="service.icon === 'code'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            <svg v-else-if="service.icon === 'rocket'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 19 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
            <svg v-else-if="service.icon === 'headset'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14v-3a9 9 0 0 1 18 0v3"/><path d="M21 15a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2h3zM3 15a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H3z"/></svg>
            <svg v-else-if="service.icon === 'chart'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
          </div>
          <div class="service-content">
            <h3>{{ service.title }}</h3>
            <div class="service-line"></div>
            <p>{{ service.desc }}</p>
            <router-link :to="service.slug ? `/layanan/${service.slug}` : '/layanan'" class="service-link">
              Selengkapnya <span>→</span>
            </router-link>
          </div>
          <div class="dot-pattern">
            <span v-for="n in 9" :key="n"></span>
          </div>
        </div>
      </div>

      <div class="services-cta">
        <div class="cta-decoration cta-decoration-1"></div>
        <div class="cta-decoration cta-decoration-2"></div>
        <div class="cta-icon">💬</div>
        <div class="cta-content">
          <h3>Punya project dalam pikiran?</h3>
          <p>Konsultasikan kebutuhan Anda secara gratis bersama tim kami.</p>
        </div>
        <a href="#" class="cta-button">Konsultasi Gratis <span>→</span></a>
      </div>

      <div v-if="showViewAll" class="view-all">
        <router-link to="/layanan" class="view-all-button">Lihat Semua Layanan <span>→</span></router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section { width: 100%; padding: 140px 20px 90px; background: #fffaf0; overflow: hidden; position: relative; z-index: 1; }
.services-container { width: 100%; max-width: 1180px; margin: 0 auto; }

/* Header */
.services-header { text-align: center; margin-bottom: 48px; }
.services-eyebrow { margin: 0 0 12px; font-size: 14px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; color: #f93827; }
.services-header h2 { margin: 0; color: #15191f; font-size: clamp(32px, 4vw, 46px); line-height: 1.15; font-weight: 800; }
.services-header h2 span { color: #f15a24; }
.services-description { margin: 18px auto 0; max-width: 700px; color: #666; font-size: 16px; line-height: 1.7; }

/* Grid */
.services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }

/* Card */
.service-card { position: relative; min-height: 300px; padding: 32px 30px 28px; background: #fffdf8; border: 1px solid rgba(255, 164, 71, 0.55); border-radius: 18px; overflow: hidden; box-shadow: 0 8px 25px rgba(180, 120, 40, 0.08); transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease; }
.service-card::before { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 3px; background: linear-gradient(90deg, #fcef91, #ffa447, #f93827); }
.service-card:hover { transform: translateY(-8px); border-color: #ffa447; box-shadow: 0 18px 35px rgba(239, 91, 35, 0.15); }

.service-number { position: absolute; top: 0; right: 0; width: 58px; height: 52px; display: flex; align-items: center; justify-content: center; border-radius: 0 18px 0 18px; background: linear-gradient(135deg, #fcef91, #ffa447); color: #8e3b13; font-size: 16px; font-weight: 800; }

.service-icon { position: relative; z-index: 2; width: 70px; height: 70px; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; border-radius: 50%; background: #fcef91; color: #f15a24; box-shadow: 0 8px 18px rgba(255, 164, 71, 0.18); }
.service-icon svg { width: 30px; height: 30px; }

.service-content { position: relative; z-index: 2; }
.service-content h3 { margin: 0; color: #15191f; font-size: 20px; line-height: 1.3; font-weight: 750; }
.service-line { width: 36px; height: 3px; margin: 12px 0 14px; border-radius: 10px; background: linear-gradient(90deg, #f93827, #ffa447); }
.service-content p { margin: 0 0 22px; max-width: 290px; color: #666; font-size: 14px; line-height: 1.65; }

.service-link { display: inline-flex; align-items: center; gap: 9px; color: #f04b1f; font-size: 14px; font-weight: 700; text-decoration: none; transition: gap 0.2s ease; }
.service-link span { font-size: 19px; transition: transform 0.2s ease; }
.service-link:hover { gap: 13px; }
.service-link:hover span { transform: translateX(3px); }

.card-decoration { position: absolute; right: -55px; bottom: -65px; width: 160px; height: 160px; border-radius: 50%; background: rgba(255, 228, 166, 0.35); pointer-events: none; }
.card-decoration::after { content: ""; position: absolute; top: 35px; left: 35px; width: 90px; height: 90px; border-radius: 50%; background: rgba(255, 164, 71, 0.08); }

.dot-pattern { position: absolute; right: 18px; bottom: 18px; display: grid; grid-template-columns: repeat(3, 6px); gap: 6px; opacity: 0.55; }
.dot-pattern span { width: 6px; height: 6px; border-radius: 50%; background: #ffdca8; }

/* CTA */
.services-cta { position: relative; display: flex; align-items: center; min-height: 145px; margin-top: 42px; padding: 30px 42px; border-radius: 20px; overflow: hidden; background: linear-gradient(105deg, #fcef91 0%, #ffa447 48%, #f93827 100%); box-shadow: 0 12px 30px rgba(242, 102, 35, 0.18); }
.cta-decoration { position: absolute; border-radius: 50%; pointer-events: none; }
.cta-decoration-1 { width: 180px; height: 180px; right: 120px; top: -80px; background: rgba(255, 255, 255, 0.12); }
.cta-decoration-2 { width: 120px; height: 120px; right: 30px; bottom: -70px; background: rgba(255, 255, 255, 0.12); }

.cta-icon { position: relative; z-index: 2; flex-shrink: 0; width: 72px; height: 72px; display: flex; align-items: center; justify-content: center; margin-right: 25px; border-radius: 50%; background: rgba(255, 255, 255, 0.9); font-size: 30px; box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08); }

.cta-content { position: relative; z-index: 2; flex: 1; }
.cta-content h3 { margin: 0 0 7px; color: #181818; font-size: 21px; font-weight: 800; }
.cta-content p { margin: 0; color: rgba(30, 30, 30, 0.75); font-size: 14px; line-height: 1.6; }

.cta-button { position: relative; z-index: 2; flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center; gap: 12px; min-width: 180px; padding: 15px 22px; border-radius: 10px; background: white; color: #f04b1f; font-size: 14px; font-weight: 800; text-decoration: none; box-shadow: 0 8px 18px rgba(0, 0, 0, 0.1); transition: transform 0.25s ease, box-shadow 0.25s ease; }
.cta-button span { font-size: 19px; }
.cta-button:hover { transform: translateY(-3px); box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15); }

/* View all */
.view-all { margin-top: 35px; text-align: center; }
.view-all-button { display: inline-flex; align-items: center; gap: 10px; padding: 12px 25px; border: 1px solid #f15a24; border-radius: 9px; color: #f15a24; font-size: 14px; font-weight: 700; text-decoration: none; transition: all 0.25s ease; }
.view-all-button:hover { background: #f15a24; color: white; }
.view-all-button span { font-size: 18px; }

/* Tablet */
@media (max-width: 950px) {
  .services-grid { grid-template-columns: repeat(2, 1fr); }
  .services-cta { padding: 28px; }
}

/* Mobile */
@media (max-width: 650px) {
  .services-section { padding: 65px 16px; }
  .services-header { margin-bottom: 35px; }
  .services-header h2 { font-size: 30px; }
  .services-description { font-size: 14px; }
  .desktop-only { display: none; }
  .services-grid { grid-template-columns: 1fr; gap: 20px; }
  .service-card { min-height: 280px; padding: 28px 25px; }
  .service-icon { width: 62px; height: 62px; font-size: 26px; }
  .service-content h3 { font-size: 19px; }
  .services-cta { flex-direction: column; align-items: flex-start; padding: 30px 24px; text-align: left; }
  .cta-icon { width: 60px; height: 60px; margin: 0 0 20px; }
  .cta-content { margin-bottom: 24px; }
  .cta-content h3 { font-size: 20px; }
  .cta-content p { font-size: 13px; }
  .cta-button { width: 100%; }
}

/* Small mobile */
@media (max-width: 400px) {
  .services-header h2 { font-size: 27px; }
  .service-card { padding: 25px 22px; }
  .service-number { width: 50px; height: 46px; font-size: 14px; }
}
</style>