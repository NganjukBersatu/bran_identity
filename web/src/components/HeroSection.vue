<script setup>
</script>

<template>
  <section class="hero">
    <div class="container hero__inner">
      <div class="hero__text">
        <h1>Mitra Digital untuk Bisnis Anda</h1>
        <p class="hero__subtitle">
          Kami bantu wujudkan ide jadi produk digital nyata — dari website,
          aplikasi mobile, hingga sistem internal perusahaan.
        </p>
        <div class="hero__actions">
          <a href="#kontak" class="btn btn-primary">Konsultasi Gratis</a>
          <a href="#portofolio" class="btn btn-secondary">Lihat Portofolio</a>
        </div>
      </div>

      <div class="hero__visual">
        <!-- ganti dengan hero-illustration-developer.svg yang sudah dibuat -->
        <img src="/hero-illustration-developer.svg" alt="Ilustrasi developer coding" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: 96px 0 64px;
  background: linear-gradient(180deg, var(--color-yellow) 0%, var(--color-bg) 100%);
}
.hero__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}
.hero__text h1 {
  font-size: 44px;
  margin-bottom: 16px;
}
.hero__subtitle {
  font-size: 17px;
  color: var(--color-text-secondary);
  max-width: 440px;
  margin-bottom: 28px;
}
.hero__actions {
  display: flex;
  gap: 12px;
}
.hero__visual img {
  width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  .hero__inner { grid-template-columns: 1fr; }
  .hero__text h1 { font-size: 32px; }
}
</style>
