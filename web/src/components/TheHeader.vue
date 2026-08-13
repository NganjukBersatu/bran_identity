<script setup>
const menu = [
   { label: 'Home', to: '/' },
  { label: 'Layanan', to: '/layanan' },
  { label: 'Portofolio', to: '/portofolio' },
  { label: 'Tentang Kami', to: '/tentang-kami' },
  { label: 'Blog', to: '/blog' },
]
</script>

<template>
  <header class="header">
    <div class="container header__inner">
      <router-link to="/" class="header__logo">
        <!-- ganti src dengan logo asli kamu -->
        <!-- <img src="/logo.svg" alt="Nama Software House" height="32" /> -->
      </router-link>

      <nav class="header__nav">
        <router-link
          v-for="item in menu"
          :key="item.label"
          :to="item.to"
        >
          {{ item.label }}
        </router-link>
      </nav>

      <router-link to="/#kontak" class="btn btn-primary">Konsultasi Gratis</router-link>
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

.header__nav a.router-link-active {
  color: var(--color-red);
  font-weight: 700;
}

@media (max-width: 768px) {
  .header__nav { display: none; }
}
</style>