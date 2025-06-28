<!-- filepath: c:\Users\aleix\Documents\mywebs\videocall-demo\frontend\src\App.vue -->
<template>
  <div id="app" class="flex flex-col min-h-screen">
    <Header class="sticky top-0 z-50" />
    <div class="content flex-grow">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script setup>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
</script>