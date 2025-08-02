<script setup>
import HeaderBar from './components/HeaderBar.vue'
import { RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
</script>

<template>
  <HeaderBar />
  <main class="container-fluid col-lg-11 mx-auto">
    <RouterView />
  </main>
  <Footer />
</template>

<style scoped>
.container-fluid {
  min-height: 60vh;
}
</style>