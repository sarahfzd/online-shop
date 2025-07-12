<script setup>
import { onMounted } from 'vue'
import { useProductsStore } from '../stores/products'
import Filters from '../components/Filters.vue'
import ProductList from '../components/ProductList.vue'

const store = useProductsStore()
onMounted(store.fetchProducts)
</script>

<template>
    <div class="row">
        <div class="col-3">
            <Filters />
        </div>
        <div class="col-9">
            <ProductList :products="store.filtered" />
            <p v-if="store.error" class="text-red-600">{{ store.error.message }}</p>
        </div>
    </div>
</template>