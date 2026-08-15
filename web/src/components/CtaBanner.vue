<script setup>
</script>

<template>
  <section id="kontak" class="cta">
    <div class="container cta__inner">
      <h2>Punya project dalam pikiran? Mari diskusikan.</h2>
      <a href="https://wa.me/62xxxxxxxxxx" class="btn btn-primary" target="_blank">Hubungi Kami</a>
    </div>
  </section>
</template>

<style scoped>
.cta {
  background: linear-gradient(135deg, var(--color-orange), var(--color-red));
  padding: 64px 0;
}
.cta__inner {
  text-align: center;
}
.cta h2 {
  color: #fff;
  font-size: 26px;
  margin-bottom: 24px;
  line-height: 1.35;
}
.cta .btn-primary {
  display: inline-block;
  background: #fff;
  color: var(--color-red);
  font-weight: 700;
  padding: 14px 32px;
  border-radius: 10px;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.cta .btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 22px rgba(0, 0, 0, 0.18);
}

/* Tablet: sedikit dikecilkan */
@media (max-width: 768px) {
  .cta { padding: 52px 0; }
  .cta h2 { font-size: 22px; margin-bottom: 20px; }
  .cta .btn-primary { padding: 13px 28px; font-size: 15px; }
}

/* Mobile: dikecilkan lagi & tombol lebih ramping supaya proporsional */
@media (max-width: 480px) {
  .cta { padding: 40px 0; }
  .container { padding: 0 20px; }
  .cta h2 {
    font-size: 18px;
    margin-bottom: 16px;
    max-width: 320px;
    margin-left: auto;
    margin-right: auto;
  }
  .cta .btn-primary {
    width: 100%;
    padding: 13px 0;
    font-size: 14px;
  }
}
</style>