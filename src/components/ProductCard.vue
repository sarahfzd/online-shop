<script setup>
import { useCartStore } from '../stores/cart'
import { ref, onMounted, watch, toRefs, computed } from 'vue'

const props = defineProps({ product: Object })
const { product } = toRefs(props)

const cart = useCartStore();
const quantity = computed(() => cart.getQuantity(product.value.id))
const isInCart = computed(() => quantity.value > 0)

// console.log(product.value.images)

onMounted(() => {
    quantity.value = cart.getQuantity(product.value.id);
});

watch(quantity, (newVal) => {
    if (newVal > 0) {
        cart.setQuantity(product.value.id, newVal)
    }
});

function addToCart() {
    cart.addToCart(product.value)
    // quantity.value = cart.getQuantity(product.value.id)
}

function increaseQuantity() {
    const current = cart.getQuantity(product.value.id)
    cart.setQuantity(product.value.id, current + 1)
    quantity.value = current + 1
}

function decreaseQuantity() {
    const current = cart.getQuantity(product.value.id)
    if (current > 1) {
        cart.setQuantity(product.value.id, current - 1)
        quantity.value = current - 1
    } else {
        cart.removeFromCart(product.value.id)
        quantity.value = 0
    }
}

function confirmDelete() {
    cart.removeFromCart(product.value.id)
    quantity.value = 0
}
</script>

<template>
    <div dir="ltr" class="product-card text-start h-100 border rounded-3 p-3 bg-white">
        <img :src="product.images[0].card" class="w-100 rounded">
        <div class="d-flex flex-row align-items-center justify-content-between">
            <p class="my-2 mb-1 fw-bold title">{{ product.name }}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" class="bi bi-heart"
                viewBox="0 0 16 16">
                <path
                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
        </div>
        <p class="my-2 mb-1">{{ product.description }}</p>
        <p class="my-2 text-end">{{ product.price }}</p>
        <div class="add-basket p-2 border-0 rounded-3 mt-2">
            <a @click="addToCart" v-if="!isInCart"
                class="d-flex flex-row align-items-center justify-content-center text-decoration-none text-white"
                style="cursor: pointer;">
                <span>افزودن به سبد</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-cart ms-2" viewBox="0 0 16 16">
                    <path
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
            </a>

            <div v-else class="text-white" style="cursor: pointer;">
                <div class="text-decoration-none text-center row align-items-center">
                    <a @click="decreaseQuantity" class="decrease col">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"
                            class="bi bi-dash-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8" />
                        </svg>
                    </a>
                    <input readonly disabled type="number" class="input text-center text-white border-0 rounded-2 col"
                        :value="quantity">
                    <a @click="increaseQuantity" class="increase col">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"
                            class="bi bi-plus-lg" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- <div ref="deleteModal" class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false"
        tabindex="-1" aria-labelledby="staticBackdropLabel">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    آیا از حذف این محصول اطمینان دارید؟
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">انصراف</button>
                    <button @click="confirmDelete" type="button" class="btn btn-primary">حذف از سبد خرید</button>
                </div>
            </div>
        </div>
    </div> -->

</template>

<style scoped>
.add-basket {
    background-color: #A72F3B;
}

.input {
    background-color: #ffffff00;
}
</style>