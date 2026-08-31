/* ==========================================
   SUMBER DATA BERSAMA untuk Paket & Layanan.
   Dipakai oleh:
   - PricingSection.vue (halaman utama pricing)
   - PaketDetailView.vue (halaman detail per paket)

   Taruh file ini di src/data/pricingData.js (sesuaikan
   dengan struktur folder project Anda), lalu import dari
   kedua komponen supaya datanya selalu konsisten.
=========================================== */

export const packages = [
  {
    id: 'a',
    version: 'Paket A',
    name: 'Paket A',
    description: 'Titik awal yang pas untuk kebutuhan dasar & cepat mulai.',
    currency: 'Rp',
    price: '2.500.000',
    unit: '',
    note: 'Harga referensi Web Development · tiap layanan punya harga sendiri',
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
    price: '7.500.000',
    unit: '',
    note: 'Harga referensi Web Development · tiap layanan punya harga sendiri',
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

/* prices & values pada tiap feature mengikuti urutan packages: [A, B, Custom] */
export const services = [
  {
    name: 'Web Development',
    slug: 'web-development',
    prices: ['Mulai Rp 2.500.000', 'Mulai Rp 7.500.000', 'Menyesuaikan kebutuhan'],
    features: [
      { label: 'Landing page 1 halaman', values: ['desain siap pakai', 'desain custom ringan', 'desain & konten sepenuhnya custom'] },
      { label: 'Company profile', values: ['tidak termasuk', 'hingga 6 halaman', 'jumlah halaman sesuai kebutuhan'] },
      { label: 'Halaman tambahan di luar paket', values: ['tidak termasuk', 'tidak termasuk', 'tersedia, disesuaikan brief'] },
      { label: 'CMS untuk kelola konten sendiri', values: ['tidak termasuk', 'kelola teks & gambar sendiri', 'custom (multi-role, multi-bahasa)'] },
      { label: 'Web app / sistem custom', values: ['tidak termasuk', 'tidak termasuk', 'sesuai spesifikasi'] },
      { label: 'Form & integrasi email', values: ['form kontak dasar', 'form + notifikasi otomatis', 'form + workflow custom'] },
      { label: 'SEO', values: ['tidak termasuk', 'dasar (meta tag & sitemap)', 'dasar + teknis (speed, structured data)'] },
      { label: 'Desain responsif (mobile-friendly)', values: ['disesuaikan device umum', 'dioptimasi multi device', 'dioptimasi penuh + testing lintas perangkat'] },
      { label: 'Optimasi kecepatan loading', values: ['standar (belum dioptimasi khusus)', 'compress asset & caching dasar', 'dioptimasi penuh + monitoring performa'] },
      { label: 'Testing lintas browser & device', values: ['browser umum saja', 'browser & device utama', 'lintas browser & device menyeluruh'] },
    ],
  },
  {
    name: 'UI/UX Design',
    slug: 'ui-ux-design',
    prices: ['Mulai Rp 1.500.000', 'Mulai Rp 5.000.000', 'Menyesuaikan kebutuhan'],
    features: [
      { label: 'Sumber desain', values: ['template terkurasi (kustom warna & konten)', 'UI custom sesuai brand', 'UI custom + design system'] },
      { label: 'Jumlah halaman desain custom', values: ['tidak termasuk', 'hingga 6 halaman', 'sesuai kebutuhan proyek'] },
      { label: 'Riset pengguna & user flow', values: ['tidak termasuk', 'dasar (1 sesi wawancara)', 'mendalam (multi-sesi + testing)'] },
      { label: 'Wireframe low-fidelity', values: ['tidak termasuk', 'termasuk', 'termasuk'] },
      { label: 'Prototipe interaktif (klik-through)', values: ['tidak termasuk', 'tidak termasuk', 'penuh, siap untuk user testing'] },
      { label: 'Design system / UI kit terdokumentasi', values: ['tidak termasuk', 'tidak termasuk', 'termasuk'] },
      { label: 'Handoff ke developer (specs & assets)', values: ['tidak termasuk', 'file desain siap pakai', 'lengkap dengan spesifikasi teknis'] },
    ],
  },
  {
    name: 'Custom Software Development',
    slug: 'custom-software-development',
    prices: ['Mulai Rp 5.000.000', 'Mulai Rp 15.000.000', 'Menyesuaikan kebutuhan'],
    features: [
      { label: 'Fitur tambahan sederhana (form, API dasar)', values: ['form dasar, tanpa integrasi API', 'termasuk', 'termasuk, skala lebih besar'] },
      { label: 'Dashboard / admin panel internal', values: ['tidak termasuk', 'tidak termasuk', 'sesuai kebutuhan'] },
      { label: 'Integrasi sistem pihak ketiga', values: ['tidak termasuk', 'tidak termasuk', 'payment gateway, API eksternal, dll'] },
      { label: 'Automasi alur kerja bisnis', values: ['tidak termasuk', 'tidak termasuk', 'sesuai proses bisnis klien'] },
      { label: 'Manajemen role & hak akses multi-user', values: ['tidak termasuk', 'tidak termasuk', 'termasuk'] },
      { label: 'Dokumentasi teknis', values: ['tidak termasuk', 'ringkas (cara pakai)', 'lengkap (arsitektur & API)'] },
      { label: 'Testing & QA', values: ['pengecekan fungsional dasar', 'functional testing dasar', 'QA menyeluruh (unit & integration test)'] },
      { label: 'Kepemilikan source code', values: ['tidak termasuk', 'diserahkan setelah proyek selesai', 'diserahkan penuh + dokumentasi arsitektur'] },
    ],
  },
  {
    name: 'Mobile App Development',
    slug: 'mobile-app-development',
    prices: ['Mulai Rp 4.000.000', 'Mulai Rp 18.000.000', 'Menyesuaikan kebutuhan'],
    features: [
      { label: 'Desain UI/UX aplikasi', values: ['template siap pakai', 'custom sesuai brand', 'custom + design system'] },
      { label: 'Versi PWA (diakses seperti aplikasi dari browser)', values: ['versi dasar, tanpa notifikasi', 'opsional, biaya tambahan', 'termasuk'] },
      { label: 'Aplikasi Android native', values: ['tidak termasuk', 'tidak termasuk', 'termasuk'] },
      { label: 'Aplikasi iOS native', values: ['tidak termasuk', 'tidak termasuk', 'termasuk'] },
      { label: 'Push notification', values: ['tidak termasuk', 'tidak termasuk', 'termasuk'] },
      { label: 'Akses fitur native (kamera, GPS, dll)', values: ['tidak termasuk', 'tidak termasuk', 'sesuai kebutuhan aplikasi'] },
      { label: 'Publikasi ke Play Store / App Store', values: ['tidak termasuk', 'tidak termasuk', 'dibantu proses submit & rilis'] },
    ],
  },
  {
    name: 'Cloud & DevOps',
    slug: 'cloud-devops',
    prices: ['Mulai Rp 1.000.000/tahun', 'Mulai Rp 3.000.000/tahun', 'Menyesuaikan kebutuhan'],
    features: [
      { label: 'Hosting & domain 1 tahun + SSL', values: ['termasuk', 'termasuk', 'termasuk'] },
      { label: 'Backup data', values: ['manual, atas permintaan', 'berkala (mingguan)', 'terjadwal + retensi custom'] },
      { label: 'CDN & optimasi performa server', values: ['tidak termasuk', 'tidak termasuk', 'termasuk'] },
      { label: 'Arsitektur cloud scalable', values: ['tidak termasuk', 'tidak termasuk', 'auto-scaling sesuai beban'] },
      { label: 'CI/CD pipeline otomatis', values: ['tidak termasuk', 'tidak termasuk', 'termasuk'] },
      { label: 'Monitoring & alerting berkelanjutan', values: ['tidak termasuk', 'tidak termasuk', 'termasuk'] },
      { label: 'Environment staging & production terpisah', values: ['tidak termasuk', 'tidak termasuk', 'termasuk'] },
    ],
  },
  {
    name: 'Maintenance & Support',
    slug: 'maintenance-support',
    prices: ['Gratis 7 hari pertama', 'Mulai Rp 750.000/bulan', 'Menyesuaikan kebutuhan'],
    features: [
      { label: 'Support email 7 hari setelah launch', values: ['termasuk', 'termasuk', 'termasuk'] },
      { label: 'Support pasca-launch', values: ['tidak termasuk', '30 hari', '30 hari + kontrak berkelanjutan'] },
      { label: 'Maintenance bulanan (update konten/plugin)', values: ['tidak termasuk', 'opsional, biaya tambahan', 'termasuk'] },
      { label: 'Update keamanan & patch berkala', values: ['tidak termasuk', 'berkala (bulanan)', 'berkala + prioritas penanganan'] },
      { label: 'SLA respon waktu tanggap', values: ['tidak termasuk', 'tidak termasuk', 'terjamin sesuai kontrak'] },
      { label: 'Dedicated project manager', values: ['tidak termasuk', 'tidak termasuk', 'termasuk'] },
    ],
  },
]

export function getPackageIndexById(id) {
  return packages.findIndex((p) => p.id === id)
}

export function getPackageById(id) {
  return packages.find((p) => p.id === id)
}

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug)
}

export function isNone(value) {
  return !value || value === 'tidak termasuk'
}