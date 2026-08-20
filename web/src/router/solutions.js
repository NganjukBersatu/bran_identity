// src/router/solutions.js
// Data terpusat untuk halaman Solutions & dropdown "Solution" di navbar.vue.
// Tinggal edit array di bawah ini kalau mau nambah/ubah layanan —
// otomatis kepakai di grid Solutions.vue dan dropdown navbar.

export const solutions = [
  {
    slug: 'custom-software',
    title: 'Custom Software Development',
    description:
      'Aplikasi bisnis yang dirancang mengikuti proses kerja tim Anda, bukan template yang dipaksakan supaya cocok.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13.5 6l-3 12" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    description:
      'Company profile, e-commerce, sampai web app — dibangun cepat, ringan, dan mudah Anda kelola sendiri.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" stroke="currentColor" stroke-width="1.8"/>
      <path d="M3.5 9h17" stroke="currentColor" stroke-width="1.8"/>
      <circle cx="6.5" cy="6.75" r="0.75" fill="currentColor"/>
      <circle cx="9" cy="6.75" r="0.75" fill="currentColor"/>
    </svg>`
  },
  {
    slug: 'mobile-app',
    title: 'Mobile App Development',
    description:
      'Aplikasi Android, iOS, atau cross-platform yang tetap responsif walau dipakai ribuan pengguna sekaligus.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <rect x="7" y="3" width="10" height="18" rx="2.2" stroke="currentColor" stroke-width="1.8"/>
      <path d="M10.5 18h3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
    </svg>`
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    description:
      'Desain antarmuka berdasarkan riset perilaku pengguna nyata, supaya produk enak dipakai sejak hari pertama.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M4 20l1.2-4.4L15.8 5a1.7 1.7 0 012.4 0l0.8.8a1.7 1.7 0 010 2.4L8.4 18.8 4 20z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M14 7l3 3" stroke="currentColor" stroke-width="1.8"/>
    </svg>`
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud & DevOps',
    description:
      'Migrasi cloud, setup CI/CD, dan otomasi deployment supaya rilis fitur baru tidak lagi bikin deg-degan.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M7 17.5a4 4 0 01-.6-7.96 5 5 0 019.6-1.9A4.5 4.5 0 0117.5 17.5H7z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M12 12.5v5M9.8 15.3L12 13l2.2 2.3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
  },
  {
    slug: 'maintenance-support',
    title: 'Maintenance & Support',
    description:
      'Pemantauan rutin, perbaikan bug, dan dukungan teknis setelah aplikasi live — tim Anda tidak jalan sendirian.',
    icon: `<svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M14.7 6.3a3.5 3.5 0 00-4.6 4.2L4 16.6 6.4 19l6.1-6.1a3.5 3.5 0 004.2-4.6l-2.3 2.3-2-2 2.3-2.3z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
    </svg>`
  }
];