<script setup>
import ProductCard from './ProductCard.vue'
defineProps({ products: Array })
</script>

<template>
  <div class="d-none d-md-block col-8 col-lg-6 col-xxl-5 me-3">
    <div class="d-flex flex-row align-items-center justify-content-between">
      <span class="red">پربازدیدترین‌</span>
      <span>جدیدترین</span>
      <span>پرفروش‌ترین</span>
      <span>گران‌ترین</span>
      <span>ارزان‌ترین</span>
    </div>
  </div>
  <div class="row mx-auto">
    <div class="col-6 col-md-4 mb-4" v-for="p in products" :key="p.id">
      <ProductCard :product="p" />
    </div>
  </div>
</template>
