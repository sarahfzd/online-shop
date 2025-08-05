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
    const filters = {}

    for (const key in route.query) {
        const match = key.match(/^filter\[options]\[(.+)\]$/)
        if (match && match[1]) {
            const filterName = match[1]
            const value = route.query[key]

            if (typeof value === 'string') {
                filters[filterName] = value.split(',')
            } else if (Array.isArray(value)) {
                filters[filterName] = value
            }
        }
    }

    store.selectedFilters = filters

    if (route.query.available === 'true') {
        store.onlyAvailable = true
    }

    store.fetchProducts()
})

watch(
    [() => store.selectedFilters, () => store.onlyAvailable],
    () => {
        const query = {}

        for (const [key, values] of Object.entries(store.selectedFilters)) {
            if (Array.isArray(values) && values.length > 0) {
                query[`filter[options][${key}]`] = values.join(',')
            }
        }

        if (store.onlyAvailable) {
            query.available = 'true'
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