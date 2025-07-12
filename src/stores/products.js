import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import axios from 'axios'

export const useProductsStore = defineStore('products', () => {
    const items = ref([])
    const error = ref(null)

    const search = ref('')
    const coloursSelected = ref([])
    const sizesSelected = ref([])

    async function fetchProducts() {
        try {
            const { data } = await axios.get(
                '/spree/products'
            );
            items.value = data.data.map(p => ({
                id: p.id,
                name: p.attributes.name,
                description: p.attributes.description.substring(3, 83) + ' ...',
                img: p.relationships.images[0]?.id,
                price: p.attributes.display_price,
            }));
        } catch (err) {
            error.value = err;
        }
    }

    const filtered = computed(() =>
        items.value.filter(p => {
            const inText = p.name.toLowerCase().includes(search.value.toLowerCase());
            return inText;
        })
    );

    return {
        items,
        error,
        search,
        filtered,
        fetchProducts
    }
})