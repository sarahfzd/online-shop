<script setup>
import ProductCard from './ProductCard.vue'
defineProps({ products: Array })
</script>

<template>
  <div class="d-none d-md-block col-8 col-lg-6 me-3">
    <div class="d-flex flex-row align-items-start justify-content-between mb-3">
      <div class="pb-2 px-2 underlined">
        <span class="red">پربازدیدترین‌</span>
      </div>
      <span>جدیدترین</span>
      <span>پرفروش‌ترین</span>
      <span>گران‌ترین</span>
      <span>ارزان‌ترین</span>
    </div>
  </div>
  <div class="row">
    <div class="col-6 col-md-4 mb-4" v-for="p in products" :key="p.id">
      <ProductCard :product="p" />
    </div>
  </div>
</template>

<style scoped>
.underlined {
  border-bottom: 5px solid #A72F3B;
}
</style>
