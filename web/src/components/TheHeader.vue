<script setup>
const menu = [
  { label: 'Layanan', href: '#layanan' },
  { label: 'Portofolio', href: '#portofolio' },
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Blog', href: '#blog' },
]
</script>

<template>
  <header class="header">
    <div class="container header__inner">
      <a href="/" class="header__logo">
        <!-- ganti src dengan logo asli kamu -->
      <!--  <img src="/logo.svg" alt="Nama Software House" height="32" />-->
      </a>

      <nav class="header__nav">
        <a v-for="item in menu" :key="item.label" :href="item.href">{{ item.label }}</a>
      </nav>

      <a href="#kontak" class="btn btn-primary">Konsultasi Gratis</a>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
}
.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}
.header__nav {
  display: flex;
  gap: 32px;
}
.header__nav a {
  color: var(--color-text);
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
}
.header__nav a:hover { color: var(--color-red); }

@media (max-width: 768px) {
  .header__nav { display: none; }
}
</style>
