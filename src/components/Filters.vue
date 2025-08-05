<script setup>
import { useProductsStore } from '../stores/products'
import { ref } from 'vue'
const store = useProductsStore();
const showPriceRange = ref(false)
const showFilter = ref({})

function toggleFilter(name) {
    showFilter.value[name] = !showFilter.value[name]
}
</script>

<template>
    <section class="d-flex flex-column align-items-center justify-content-between">
        <div class="d-flex flex-row align-items-center justify-content-between w-100">
            <span class="my-3 fs-5 fw-bold">Filters</span>
            <span class="red fs-6" @click="() => {
                store.selectedFilters = {}
                store.onlyAvailable = false
                store.fetchProducts()
            }" style="cursor: pointer;">Remove filters</span>
        </div>

        <div v-for="filter in store.filterOptions" :key="filter.id" class="my-1 py-1 w-100">
            <div class="pointer d-flex flex-row align-items-center justify-content-between"
                @click="toggleFilter(filter.name)">
                <span>{{ filter.presentation }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="grey" class="bi bi-caret-down-fill"
                    viewBox="0 0 16 16">
                    <path
                        d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
            </div>

            <div class="row p-2" :class="showFilter[filter.name] ? 'd-block' : 'd-none'">
                <div v-for="item in filter.option_values" :key="item.id"
                    class="align-items-center d-flex flex-row my-2 pointer">
                    <label :for="`${filter.name}-${item.id}`" class="ms-2">{{ item.presentation }}</label>
                    <input type="checkbox" :id="`${filter.name}-${item.id}`"
                        :checked="store.selectedFilters[filter.name]?.includes(item.name)"
                        @change="store.toggleFilterOption(filter.name, item.name)" />
                </div>
            </div>
        </div>

        <div class="my-1 py-1 w-100">
            <div class="pointer d-flex flex-row align-items-center justify-content-between"
                @click="showPriceRange = !showPriceRange">
                <span>محدوده قیمت</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="grey" class="bi bi-caret-down-fill"
                    viewBox="0 0 16 16">
                    <path
                        d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
            </div>
            <!-- <div class="row p-2" :class="['row p-2', showPriceRange ? 'd-block' : 'd-none']">
                <label>
                    {{ store.priceRange[0] }} - {{ store.priceRange[1] }}
                </label>
                <input type="range" id="minPrice" class="form-range" min="0" max="100" value="0.5"
                    v-model.number="store.priceRange[0]">
                <input type="range" id="maxPrice" class="form-range" min="0" max="100" value="0.5"
                    v-model.number="store.priceRange[1]">
                <output for="minPrice" id="rangeValueMin" aria-hidden="true"></output>
                <output for="maxPrice" id="rangeValueMax" aria-hidden="true"></output>
            </div> -->
        </div>

        <label class="my-2 py-1 form-check form-switch w-100">
            <input class="form-check-input" type="checkbox" role="switch" id="switchCheckAvailable"
                v-model="store.onlyAvailable" @change="store.fetchProducts">
            <span class="form-check-label" for="switchCheckAvailable">فقط کالاهای موجود</span>
        </label>

    </section>
</template>

<style>
.pointer {
    cursor: pointer;
}
</style>