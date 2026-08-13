<script setup>
import TheHeader from './components/navbar.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <TheHeader />
  <main>
    <router-view />
  </main>
  <TheFooter />
</template>