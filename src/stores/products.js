import { defineStore } from 'pinia'
import { ref, computed, watch, reactive } from 'vue'
import axios from 'axios'

export const useProductsStore = defineStore('products', () => {

    const items = ref([])
    const error = ref(null)
    const search = ref('')
    const filterOptions = ref([])
    const myArray = [];

    async function fetchProducts() {
        try {
            const { data } = await axios.get(
                '/spree/products?include=images'
            );
            filterOptions.value = data.meta.filters.option_types

            function getImageUrls(product, included) {
                const imageRefs = product.relationships.images?.data
                const urls = imageRefs.map(ref => {
                    const imageObj = included.find(i => i.id === ref.id)
                    return imageObj?.attributes?.original_url
                })
                return urls
            }

            items.value = data.data.map(p => ({
                id: p.id,
                name: p.attributes.name,
                description: p.attributes.description.substring(3, 83) + ' ...',
                images: getImageUrls(p, data.included),
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
        filterOptions,
        myArray,
        fetchProducts
    }
})