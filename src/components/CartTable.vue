<script setup>
import { useCartStore } from '../stores/cart'
import { computed } from 'vue'
const cart = useCartStore();

function increaseQuantity(item) {
  cart.setQuantity(item.id, item.quantity + 1)
}

function decreaseQuantity(item) {
  if (item.quantity > 1) {
    cart.setQuantity(item.id, item.quantity - 1)
  } else {
    cart.removeFromCart(item.id)
  }
}

function removeItem(id) {
  cart.removeFromCart(id)
}

const totalPrice = computed(() => {
  console.log(cart.items)
  return cart.items.reduce((sum, item) => sum + item.cartPrice * item.quantity, 0)
})
</script>

<template>
  <div dir="ltr" class="container my-5">
    <h2 class="mb-4">Cart</h2>

    <div v-if="cart.items.length === 0">
      <p>Your cart is empty :(</p>
    </div>

    <div v-else>
      <div v-for="item in cart.items" :key="item.id" class="card mb-3 p-3">
        <div class="row">
          <div class="col-1">
            <img class="w-100" :src="item.images[0].list">
          </div>
          <div class="col">
            <h4>{{ item.name }}</h4>
            <p class="mb-1">Price: <strong>{{ item.cartPrice }}</strong> $ </p>
            <p class="mb-0">Total: <strong>{{ item.cartPrice * item.quantity }}</strong> $ </p>
          </div>

          <div class="col-2 d-flex align-items-center">
            <button class="btn btn-outline-secondary me-2" @click="decreaseQuantity(item)">−</button>
            <span>{{ item.quantity }}</span>
            <button class="btn btn-outline-secondary ms-2" @click="increaseQuantity(item)">+</button>
            <button class="btn btn-red text-white ms-3" @click="removeItem(item.id)">Remove</button>
          </div>
        </div>
      </div>

      <div class="text-start mt-4">
        <h5>Subtotal ({{ cart.totalCount }} items): {{ totalPrice.toFixed(2) }} $</h5>
      </div>
      <div class="text-end mt-3">
        <button class="col-3 btn-red text-white p-2 border-0 rounded-3 fs-5">Checkout</button>
      </div>
    </div>
  </div>
</template>