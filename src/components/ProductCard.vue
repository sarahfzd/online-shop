<script setup>
defineProps({ product: Object })
</script>

<template>
    <div dir="ltr" class="product-card h-100 text-center shadow">
        <img :src="product.images[0]" class="w-100 rounded" height="250">
        <p class="my-2 mb-1 fw-bold fs-5">{{ product.name }}</p>
        <p class="my-2 mb-1 fs-6">{{ product.description }}</p>
        <p class="my-2 fs-5">{{ product.price }}</p>
        <button class="btn btn-light text-black py-2">Add to cart</button>
    </div>
</template>

<style scoped>
.product-card {
    border: 1px solid #eee;
    border-radius: 12px;
    padding: 20px;
    background: #fff;
}
</style>
