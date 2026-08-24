<script setup>
const layanan = ['Web Development', 'Mobile App Development', 'UI/UX Design', 'System / ERP Development']
const perusahaan = ['Tentang Kami', 'Portofolio', 'Karir', 'Blog']

const socials = [
  {
    name: 'Instagram',
    href: '#',
    path: 'M12 2c2.7 0 3.05.01 4.12.06 1.07.05 1.8.22 2.44.47.66.26 1.22.6 1.77 1.15.55.55.9 1.11 1.15 1.77.25.64.42 1.37.47 2.44.05 1.07.06 1.42.06 4.12s-.01 3.05-.06 4.12c-.05 1.07-.22 1.8-.47 2.44a4.93 4.93 0 01-1.15 1.77 4.93 4.93 0 01-1.77 1.15c-.64.25-1.37.42-2.44.47-1.07.05-1.42.06-4.12.06s-3.05-.01-4.12-.06c-1.07-.05-1.8-.22-2.44-.47a4.93 4.93 0 01-1.77-1.15 4.93 4.93 0 01-1.15-1.77c-.25-.64-.42-1.37-.47-2.44C2.01 15.05 2 14.7 2 12s.01-3.05.06-4.12c.05-1.07.22-1.8.47-2.44.26-.66.6-1.22 1.15-1.77A4.93 4.93 0 015.44 2.5c.64-.25 1.37-.42 2.44-.47C8.95 2.01 9.3 2 12 2zm0 1.8c-2.65 0-2.97.01-4.02.06-.87.04-1.34.18-1.66.3-.42.16-.72.36-1.03.67-.31.31-.5.6-.67 1.03-.12.32-.26.79-.3 1.66-.05 1.05-.06 1.37-.06 4.02s.01 2.97.06 4.02c.04.87.18 1.34.3 1.66.16.42.36.72.67 1.03.31.31.6.5 1.03.67.32.12.79.26 1.66.3 1.05.05 1.37.06 4.02.06s2.97-.01 4.02-.06c.87-.04 1.34-.18 1.66-.3.42-.16.72-.36 1.03-.67.31-.31.5-.6.67-1.03.12-.32.26-.79.3-1.66.05-1.05.06-1.37.06-4.02s-.01-2.97-.06-4.02c-.04-.87-.18-1.34-.3-1.66a2.7 2.7 0 00-.67-1.03 2.7 2.7 0 00-1.03-.67c-.32-.12-.79-.26-1.66-.3-1.05-.05-1.37-.06-4.02-.06zm0 3.15a5.05 5.05 0 110 10.1 5.05 5.05 0 010-10.1zm0 1.8a3.25 3.25 0 100 6.5 3.25 3.25 0 000-6.5zm5.25-1.98a1.18 1.18 0 110 2.36 1.18 1.18 0 010-2.36z',
  },
  {
    name: 'LinkedIn',
    href: '#',
    path: 'M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.94-1.79-2.94-1.8 0-2.07 1.4-2.07 2.85V21H9z',
  },
  {
    name: 'WhatsApp',
    href: '#',
    path: 'M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5-.17-.01-.37-.01-.57-.01s-.52.07-.8.37c-.27.3-1.04 1.02-1.04 2.47s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.48 1.7.62.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM12.02 2C6.5 2 2 6.48 2 12c0 1.88.52 3.64 1.44 5.15L2 22l4.98-1.31A9.96 9.96 0 0012.02 22C17.52 22 22 17.52 22 12S17.52 2 12.02 2z',
  },
]
</script>

<template>
  <footer class="footer">
    <div class="container footer__grid">
      <div class="footer__brand">
        <div class="footer__logo-row">
          <img src="/logos/logo.png" alt="Logo" class="footer__logo-img" />
          <span class="footer__logo">BRAN IDENTITY</span>
        </div>
        <p>Mitra digital untuk membantu bisnis Anda bertumbuh lewat teknologi.</p>

        <div class="footer__socials">
          <a
            v-for="s in socials"
            :key="s.name"
            :href="s.href"
            :aria-label="s.name"
            class="footer__social-icon"
          >
            <svg viewBox="0 0 24 24" fill="currentColor"><path :d="s.path" /></svg>
          </a>
        </div>
      </div>

      <div class="footer__col">
        <h4>Layanan</h4>
        <ul>
          <li v-for="l in layanan" :key="l"><a href="#">{{ l }}</a></li>
        </ul>
      </div>

      <div class="footer__col">
        <h4>Perusahaan</h4>
        <ul>
          <li v-for="p in perusahaan" :key="p"><a href="#">{{ p }}</a></li>
        </ul>
      </div>

      <div class="footer__col">
        <h4>Kontak</h4>
        <ul class="footer__contact">
          <li>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s7-6.5 7-11.5A7 7 0 105 9.5C5 14.5 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
            <span>Jl. Contoh Alamat No. 1, Kota</span>
          </li>
          <li>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.7A2 2 0 014.2 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.4 2.1L8.1 9.9a16 16 0 006 6l1.4-1.3a2 2 0 012.1-.4c.9.3 1.8.5 2.7.6a2 2 0 011.7 2.1z" /></svg>
            <span>+62 xxx-xxxx-xxxx</span>
          </li>
          <li>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 6l10 7L22 6" /></svg>
            <span>hello@namasoftwarehouse.com</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="container footer__bottom">
      <span>© 2026 Nama Software House. All rights reserved.</span>
      <div class="footer__legal">
        <a href="#">Syarat & Ketentuan</a>
        <a href="#">Kebijakan Privasi</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 24px;
}

.footer {
  background: #1a1a1a;
  color: #e5e3dc;
  padding: 64px 0 24px;
}

.footer__grid {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
  gap: 40px;
}

.footer__logo-row {
  display: flex;
  align-items: center;
  gap: 10px;
}

.footer__logo-img {
  width: 34px;
  height: 34px;
  object-fit: contain;
  border-radius: 8px;
  flex-shrink: 0;
}

.footer__logo {
  display: inline-block;
  font-size: 18px;
  font-weight: 800;
  color: #fff;
  letter-spacing: 0.2px;
}

.footer__brand p {
  font-size: 13.5px;
  line-height: 1.7;
  color: #a8a6a0;
  margin-top: 12px;
  max-width: 280px;
}

.footer__socials {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.footer__social-icon {
  width: 36px;
  height: 36px;
  border-radius: 999px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.06);
  color: #a8a6a0;
  transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
}

.footer__social-icon svg {
  width: 16px;
  height: 16px;
}

.footer__social-icon:hover {
  background: var(--color-deep-orange, #ea580c);
  color: #fff;
  transform: translateY(-2px);
}

.footer h4 {
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 18px;
}

.footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer ul li,
.footer ul a {
  color: #a8a6a0;
  font-size: 13.5px;
  text-decoration: none;
  line-height: 1.5;
}

.footer ul a {
  transition: color 0.2s ease;
}

.footer ul a:hover {
  color: #fff;
}

.footer__contact li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.footer__contact svg {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  margin-top: 2px;
  color: var(--color-deep-orange, #ea580c);
}

.footer__bottom {
  margin-top: 56px;
  padding-top: 24px;
  border-top: 1px solid #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  font-size: 12.5px;
  color: #a8a6a0;
}

.footer__legal {
  display: flex;
  gap: 20px;
}

.footer__legal a {
  color: #a8a6a0;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer__legal a:hover {
  color: #fff;
}

/* Responsive */
@media (max-width: 900px) {
  .footer__grid {
    grid-template-columns: 1fr 1fr;
    row-gap: 40px;
  }
  .footer__brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 560px) {
  .footer {
    padding: 48px 0 20px;
  }
  .footer__grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  .footer__bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>