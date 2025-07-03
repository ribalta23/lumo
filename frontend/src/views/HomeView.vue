<template>
  <div class="min-h-screen bg-background">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Features Bento Grid -->
    <FeaturesSection />

    <!-- How It Works Section -->
    <HowItWorksSection />

    <!-- Stats Section -->
    <!-- <StatsSection /> -->

    <!-- Testimonials Section -->
    <!-- <TestimonialsSection /> -->

    <!-- Pricing Section -->
    <PricingSection />
  </div>
</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue'
import FeaturesSection from '@/components/FeaturesSection.vue'
import HowItWorksSection from '@/components/HowItWorksSection.vue'
import StatsSection from '@/components/StatsSection.vue'
import TestimonialsSection from '@/components/TestimonialsSection.vue'
import PricingSection from '@/components/PricingSection.vue'
</script>