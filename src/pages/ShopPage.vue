<script setup>
import { watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductsStore } from '../stores/products'
import qs from 'qs'
import Filters from '../components/Filters.vue'
import ProductList from '../components/ProductList.vue'

const route = useRoute()
const router = useRouter()
const store = useProductsStore()

onMounted(() => {
    const query = route.query

    if (query.color) {
        store.selectedColors = Array.isArray(query.color) ? query.color : [query.color]
    }
    if (query.size) {
        store.selectedSizes = Array.isArray(query.size) ? query.size : [query.size]
    }
    if (query.available === 'true') {
        store.onlyAvailable = true
    }

    store.fetchProducts()
})
watch(
    [() => store.selectedColors, () => store.selectedSizes, () => store.onlyAvailable],
    () => {
        const query = {
            ...(store.selectedColors.length && { color: store.selectedColors }),
            ...(store.selectedSizes.length && { size: store.selectedSizes }),
            ...(store.onlyAvailable && { available: 'true' })
        }
        router.replace({ path: route.path, query })
    },
    { deep: true }
)
</script>

<template>
    <div class="row mx-auto">
        <div class="d-none d-md-block col-3 p-3 rounded-3 border mt-3 h-100">
            <Filters />
        </div>
        <div class="col-12 col-md-9 mt-3 ps-0">
            <ProductList :products="store.filtered" />
            <p v-if="store.error" class="text-red-600">{{ store.error.message }}</p>
        </div>
    </div>
</template>