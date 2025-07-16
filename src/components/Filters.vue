<script setup>
import { useProductsStore } from '../stores/products'
const store = useProductsStore()

</script>

<template>
    <section class="d-flex flex-column align-items-start justify-content-between">
        <h3 class="my-3">فیلترها</h3>

        <div v-for="option in store.filterOptions" :key="option.id" class="mb-4">
            <h4>{{ option.presentation }}</h4>

            <div v-for="value in option.option_values" :key="value.id">
                <label>
                    <input type="checkbox" :value="value.name" v-model="option.name" />
                    {{ value.presentation }}
                </label>
            </div>
        </div>
    </section>
</template>