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

function parseFiltersFromUrl() {
    const queryString = location.search.slice(1)
    const parsed = qs.parse(queryString)

    const filters = {}

    if (parsed.filter?.options) {
        for (const [filterName, value] of Object.entries(parsed.filter.options)) {
            if (typeof value === "string") {
                filters[filterName] = value.split(",")
            } else if (Array.isArray(value)) {
                filters[filterName] = value
            }
        }
    }

    store.selectedFilters = filters
    store.onlyAvailable = parsed.available === "true"
    store.sortOrder = parsed.sort || null
}

onMounted(() => {
    parseFiltersFromUrl()
    store.fetchProducts()
})

watch(
    [() => store.selectedFilters, () => store.onlyAvailable, () => store.sortOrder],
    () => {
        const queryObj = {
            filter: {
                options: {}
            }
        }

        for (const [key, values] of Object.entries(store.selectedFilters)) {
            if (Array.isArray(values) && values.length > 0) {
                queryObj.filter.options[key] = values.join(",")
            }
        }

        if (store.onlyAvailable) {
            queryObj.available = "true"
        }

        if (store.sortOrder) {
            queryObj.sort = store.sortOrder
        }

        const queryString = qs.stringify(queryObj, { encode: false })
        const newUrl = `${location.pathname}?${queryString}`

        window.history.replaceState({}, "", newUrl)
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