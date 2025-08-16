<script setup>
import { useCartStore } from '../stores/cart'
import { computed } from 'vue'
const cart = useCartStore();

function increaseQuantity(item) {
  cart.setQuantity(item.id, 1)
}

function decreaseQuantity(item) {
  cart.setQuantity(item.id, -1)
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
  <div class="container my-5">
    <h2 class="pb-3 mb-4 border-bottom border-2">سبد خرید</h2>

    <div v-if="cart.items.length === 0">
      <p>Your cart is empty :(</p>
    </div>

    <div v-else class="row">
      <div class="col-8">
        <div v-for="item in cart.items" :key="item.id" class="mb-3 p-3 border-bottom">
          <div class="row align-items-center w-100">
            <div class="col-1">
              <button class="btn" @click="removeItem(item.id)">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="grey" class="bi bi-x-square"
                  viewBox="0 0 16 16">
                  <path
                    d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                  <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
              </button>
            </div>
            <div class="col-2">
              <img class="w-100" :src="item.images[0].card">
            </div>
            <div class="col-7">
              <div class="row">
                <h4 class="col">{{ item.name }}</h4>
                <p class="col-6"><strong>{{ item.cartPrice }}</strong> $ </p>
              </div>
              <!-- <p class="mb-0">Total: <strong>{{ item.cartPrice * item.quantity }}</strong> $ </p> -->
            </div>

            <div class="col-2 row align-items-center border rounded-3 p-0">
              <button class="btn col border-start rounded-0" @click="decreaseQuantity(item)">−</button>
              <span class="col text-center">{{ item.quantity }}</span>
              <button class="btn col border-end rounded-0" @click="increaseQuantity(item)">+</button>

            </div>
          </div>
        </div>
      </div>

      <div class="col-4">
        <div class="d-flex flex-column">
          <div class="top p-4 border rounded-3 mb-4">
            <div class="discount mb-3 d-flex flex-column align-items-start justify-content-between pb-4 border-bottom">
              <p class="">کد تخفیف</p>
              <p class="">کد تخفیف کد معرف کارت هدیه خود را در زیر وارد کرده و دکمه ثبت رو بزنید تا در صورت داشتن اعتبار
                به سفارش شما اعمال شود</p>

              <div class="d-flex flex-row align-items-stretch justify-content-between col-12">
                <input type="text" class="p-2 ms-2 rounded-3 border-1 col">
                <button class="rounded-3 red border-0 col-2">ثبت</button>
              </div>

            </div>
            <div class="total d-flex flex-column justify-content-between">
              <div class="align-items-center justify-content-between">
                <div class="d-flex flex-row border-bottom mb-3">
                  <div class="col text-end">
                    <p>قیمت کالاها</p>
                    <p>تعداد کالا</p>
                    <p>مجموع تخفیف روی کالاها</p>
                    <p>سود شما از خرید</p>
                    <p>هزینه ارسال</p>
                  </div>
                  <div class="col text-start">
                    <p>{{ totalPrice.toFixed(2) }} $</p>
                    <p>{{ cart.totalCount }}</p>
                    <p></p>
                    <p></p>
                    <p></p>
                  </div>
                </div>

                <div class="col-12">
                  <div class="row">
                    <div class="col text-end">جمع مبلغ قابل پرداخت</div>
                    <div class="col text-start">{{ totalPrice.toFixed(2) }} $</div>
                  </div>
                  <div class="py-3">
                    <button
                      class="border-0 d-flex flex-row align-items-center justify-content-center btn-red rounded-3 p-2 text-white col-12">
                      <span>
                        ثبت سفارش
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white"
                        class="bi bi-chevron-left me-2" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bottom p-4 border rounded-3">
            <div class="mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="orange"
                class="bi bi-exclamation-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path
                  d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" />
              </svg>
            </div>
            <div class="d-flex flex-column align-items-start justify-content-between">
              <p>ارسال رایگان برای سفارش های بالای ۷۰۰,۰۰۰ تومان</p>
              <p>در صورت اتمام موجودی، کالاها از سبد خرید حذف میشوند</p>
              <p>لطفا در طول مراحل خرید فیلترشکن خود را خاموش کنید</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>