<script setup>
import { onMounted } from 'vue'
import { useProductsStore } from '../stores/products'
import Filters from '../components/Filters.vue'
import ProductList from '../components/ProductList.vue'

const store = useProductsStore()
onMounted(store.fetchProducts)
</script>

<template>
    <div class="row mx-auto">
        <div class="d-none d-lg-block col-3 p-3 rounded-3 border mt-3 h-100">
            <Filters />
        </div>
        <div class="col-12 col-lg-9">
            <ProductList :products="store.filtered" />
            <p v-if="store.error" class="text-red-600">{{ store.error.message }}</p>
        </div>
    </div>
</template>