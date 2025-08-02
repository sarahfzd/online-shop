<script setup>
import ProductCard from './ProductCard.vue'
import Pagination from './Pagination.vue'
import { useProductsStore } from '../stores/products'
const store = useProductsStore()
defineProps({ products: Array })

function setSort(value) {
  store.sortOrder = value
  store.wantedPage = 1
  store.fetchProducts()
}

</script>

<template>
  <div class="d-none d-md-block col-8 col-lg-6 me-3">
    <div class="d-flex flex-row align-items-start justify-content-between mb-3">
      <div :class="{ underlined: store.sortOrder === null }" @click="setSort(null)" style="cursor: pointer;">
        <span class="">Most Relevant</span>
      </div>
      <div :class="{ underlined: store.sortOrder === 'updated_at' }" @click="setSort('updated_at')"
        style="cursor: pointer;">
        <span>Newest</span>
      </div>
      <div :class="{ underlined: store.sortOrder === '-price' }" @click="setSort('-price')" style="cursor: pointer;">
        <span>High to Low</span>
      </div>
      <div :class="{ underlined: store.sortOrder === 'price' }" @click="setSort('price')" style="cursor: pointer;">
        <span>Low to High</span>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-6 col-md-4 mb-4" v-for="p in products" :key="p.id">
      <ProductCard :product="p" />
    </div>
  </div>
  <div class="">
    <Pagination />
  </div>
</template>

<style scoped>
.underlined {
  border-bottom: 5px solid #A72F3B;
  padding: 0 0.5rem 0.5rem 0.5rem;
  color: #A72F3B;
}
</style>
