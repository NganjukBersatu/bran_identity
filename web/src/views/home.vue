<script setup>
import HeroSection from '../components/HeroSection.vue'
import ClientLogos from '../components/ClientLogos.vue'
import ServicesSection from '../components/ServicesSection.vue'
import WhyUsSection from '../components/WhyUsSection.vue'
import ProcessSection from '../components/ProcessSection.vue'
import PortfolioSection from '../components/PortfolioSection.vue'
import TestimonialsSection from '../components/TestimonialsSection.vue'
import CtaBanner from '../components/CtaBanner.vue'
import BlogSection from '../components/BlogSection.vue'
</script>

<template>
  <HeroSection />
  <ClientLogos />
  <ServicesSection :limit="3" show-view-all />
  <WhyUsSection />
  <ProcessSection />
  <PortfolioSection :limit="4" show-view-all />
  <TestimonialsSection />
  <CtaBanner />
  <BlogSection :limit="3" show-view-all />
</template>