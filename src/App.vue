<script setup>
import HeaderBar from './components/HeaderBar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <HeaderBar />
  <main class="container-fluid col-lg-11 mx-auto">
    <RouterView />
  </main>
</template>