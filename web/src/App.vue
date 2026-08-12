<script setup>
import TheHeader from './components/TheHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ClientLogos from './components/ClientLogos.vue'
import ServicesSection from './components/ServicesSection.vue'
import WhyUsSection from './components/WhyUsSection.vue'
import ProcessSection from './components/ProcessSection.vue'
import PortfolioSection from './components/PortfolioSection.vue'
import TestimonialsSection from './components/TestimonialsSection.vue'
import CtaBanner from './components/CtaBanner.vue'
import BlogSection from './components/BlogSection.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <TheHeader />
  <main>
    <HeroSection />
    <ClientLogos />
    <ServicesSection />
    <WhyUsSection />
    <ProcessSection />
    <PortfolioSection />
    <TestimonialsSection />
    <CtaBanner />
    <BlogSection />
  </main>
  <TheFooter />
</template>
