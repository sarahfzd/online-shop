<script setup>
import { useProductsStore } from '../stores/products'
const store = useProductsStore()

</script>

<template>
    <section class="d-flex flex-column align-items-start justify-content-between">
        <h4 class="my-3">فیلترها</h4>

        <div class="mb-4">
            <h5 v-for="item in store.myArray" class="mb-1">{{ item }}</h5>
            <div class="">

            </div>
        </div>
    </section>
</template>