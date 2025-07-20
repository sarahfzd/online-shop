<script setup>
import ProductCard from './ProductCard.vue'
defineProps({ products: Array })
</script>

<template>
  <div class="row mx-auto">
    <div class="col-6 col-md-4 my-3" v-for="p in products" :key="p.id">
      <ProductCard :product="p" />
    </div>
  </div>
</template>