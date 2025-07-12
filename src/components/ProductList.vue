<script setup>
import ProductCard from './ProductCard.vue'
defineProps({ products: Array })
</script>

<template>
  <div class="row">
    <div class="col-6 col-sm-4 col-md-3 my-3" v-for="p in products" :key="p.id">
      <ProductCard :product="p" />
    </div>
  </div>
</template>