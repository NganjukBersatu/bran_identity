<script setup>
const layanan = ['Web Development', 'Mobile App Development', 'UI/UX Design', 'System / ERP Development']
const perusahaan = ['Tentang Kami', 'Portofolio', 'Karir', 'Blog']
</script>

<template>
  <footer class="footer">
    <div class="container footer__grid">
      <div class="footer__brand">
      <!--   <img src="/team-photo.jpg" alt="Foto tim kami" />-->
       <!--   <img src="/logo-white.svg" alt="Nama Software House" height="32" />-->
        <p>Mitra digital untuk membantu bisnis Anda bertumbuh lewat teknologi.</p>
      </div>

      <div>
        <h4>Layanan</h4>
        <ul>
          <li v-for="l in layanan" :key="l"><a href="#">{{ l }}</a></li>
        </ul>
      </div>

      <div>
        <h4>Perusahaan</h4>
        <ul>
          <li v-for="p in perusahaan" :key="p"><a href="#">{{ p }}</a></li>
        </ul>
      </div>

      <div>
        <h4>Kontak</h4>
        <ul>
          <li>Jl. Contoh Alamat No. 1, Kota</li>
          <li>+62 xxx-xxxx-xxxx</li>
          <li>hello@namasoftwarehouse.com</li>
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
.footer {
  background: #1A1A1A;
  color: #E5E3DC;
  padding: 56px 0 24px;
}
.footer__grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 32px;
}
.footer__brand p { font-size: 13px; color: #A8A6A0; margin-top: 12px; max-width: 260px; }
.footer h4 { color: #fff; font-size: 14px; margin-bottom: 16px; }
.footer ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 10px; }
.footer ul li, .footer ul a { color: #A8A6A0; font-size: 13px; text-decoration: none; }
.footer ul a:hover { color: #fff; }

.footer__bottom {
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid #333;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #A8A6A0;
}
.footer__legal { display: flex; gap: 16px; }
.footer__legal a { color: #A8A6A0; text-decoration: none; }

@media (max-width: 768px) {
  .footer__grid { grid-template-columns: 1fr 1fr; }
  .footer__bottom { flex-direction: column; gap: 12px; }
}
</style>
