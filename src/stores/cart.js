import { defineStore } from 'pinia'
import { ref, watch, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
    const items = ref([])

    const stored = localStorage.getItem('cart')
    if (stored) {
        items.value = JSON.parse(stored)
    }

    watch(items, (newItems) => {
        localStorage.setItem('cart', JSON.stringify(newItems))
    }, { deep: true })

    function addToCart(product) {
        const existing = items.value.find(item => item.id === product.id)
        if (existing) {
            existing.quantity += 1
        } else {
            items.value.push({ ...product, quantity: 1 })
        }
    }

    function setQuantity(productId, quantity) {
        const item = items.value.find(i => i.id === productId)
        if (item) {
            item.quantity = quantity
        }
    }

    function removeFromCart(productId) {
        items.value = items.value.filter(i => i.id !== productId)
    }

    function getQuantity(productId) {
        const item = items.value.find(i => i.id === productId)
        return item ? item.quantity : 0
    }

    const totalCount = computed(() => {
        return items.value.reduce((sum, item) => sum + item.quantity, 0)
    })

    // const totalItems = computed(() =>
    //     items.value.reduce((sum, item) => sum + item.quantity, 0)
    // )

    // const totalPrice = computed(() =>
    //     items.value.reduce((sum, item) => sum + item.cartPrice * item.quantity, 0)
    // )

    return {
        items,
        addToCart,
        setQuantity,
        removeFromCart,
        getQuantity,
        totalCount
        // totalItems,
        // totalPrice
    }
})