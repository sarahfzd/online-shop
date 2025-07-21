import { defineStore } from 'pinia'
import { ref, computed, watch, reactive } from 'vue'
import axios from 'axios'

export const useProductsStore = defineStore('products', () => {

    const items = ref([])
    const error = ref(null)
    const search = ref('')
    const filterOptions = ref([])
    const pagesCount = ref()
    const wantedPage = ref(1)
    const myArray = [];

    watch(wantedPage, () => {
        fetchProducts()
    })

    async function fetchProducts() {
        try {
            const { data } = await axios.get(
                '/spree/products?include=images&page=' + wantedPage.value
            );
            filterOptions.value = data.meta.filters.option_types
            pagesCount.value = data.meta.total_pages

            function getImageUrls(product, included) {
                const imageRefs = product.relationships.images?.data
                return imageRefs.map(ref => {
                    const imageObj = included.find(i => i.id === ref.id)
                    const styles = imageObj.attributes.styles

                    return {
                        id: imageObj.id,
                        list: styles[0].url,
                        card: styles[2].url,
                    }
                })
            }

            items.value = data.data.map(p => ({
                id: p.id,
                name: p.attributes.name.substring(0, 13) + '..',
                description: p.attributes.description.substring(3, 40),
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
        pagesCount,
        wantedPage,
        myArray,
        fetchProducts
    }
})