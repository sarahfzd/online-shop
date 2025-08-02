<script setup>
import { useProductsStore } from '../stores/products'
const store = useProductsStore()

function getPage(n) {
    store.wantedPage = n
    store.fetchProducts()
}
</script>

<template>
    <div class="mx-auto my-5">
        <div class="d-flex flex-row align-items-center justify-content-between text-center">
            <div class="right col text-start px-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#A72F3B"
                    class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                </svg>
            </div>
            <div
                class="col numbers d-flex flex-row align-items-center justify-content-evenly mx-auto p-2 border border-2 rounded-4">
                <div class="number px-2 border rounded-circle border-2" v-for="n in store.pagesCount"
                    :class="{ 'current-page text-white border-0': n === store.wantedPage }" @click="getPage(n)">
                    <a>{{ n }}</a>
                </div>
            </div>
            <div class="left col text-end px-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#A72F3B"
                    class="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                </svg>
            </div>
        </div>
    </div>
</template>

<style scoped>
.current-page {
    background-color: #A72F3B;
}
</style>