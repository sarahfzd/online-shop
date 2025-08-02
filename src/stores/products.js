import { defineStore } from 'pinia'
import { ref, computed, watch, reactive } from 'vue'
import axios from 'axios'

export const useProductsStore = defineStore('products', () => {

    const items = ref([])
    const error = ref(null)
    const search = ref('')
    const filterOptions = ref([])
    const colors = ref()
    const sizes = ref()
    const selectedColors = ref([])
    const selectedSizes = ref([])
    const onlyAvailable = ref(false)
    const pagesCount = ref()
    const wantedPage = ref(1)
    const sortOrder = ref(null)
    const myArray = [];
    const priceRange = ref([0, 9999])

    watch(wantedPage, () => {
        fetchProducts()
    })

    async function fetchProducts() {
        try {
            let url = `/spree/products?include=images&page=${wantedPage.value}`;

            if (sortOrder.value) {
                url += `&sort=${sortOrder.value}`
            }
            // if (sortType === 'newest') {
            //     url += '&sort=updated_at'
            // } else if (sortType === 'highToLow') {
            //     url += '&sort=-price'
            // } else if (sortType === 'lowToHigh') {
            //     url += '&sort=price'
            // }

            const colorFilter = selectedColors.value.length
                ? `& filter[options][color]= ${selectedColors.value.join(',')
                }`
                : '';

            const sizeFilter = selectedSizes.value.length
                ? `& filter[options][size]=${selectedSizes.value.join(',')} `
                : '';

            const availabilityFilter = onlyAvailable.value
                ? '&filter[in_stock]=true'
                : ''

            url += colorFilter + sizeFilter + availabilityFilter;

            console.log("Final API URL:", url)
            const { data } = await axios.get(url);

            filterOptions.value = data.meta.filters.option_types
            colors.value = filterOptions.value.find(i => i.name === 'color').option_values;
            sizes.value = filterOptions.value.find(i => i.name === 'size').option_values;
            pagesCount.value = data.meta.total_pages

            function getImageUrls(product, included) {
                const imageRefs = product.relationships.images?.data
                return imageRefs.map(ref => {
                    const imageObj = included.find(i => i.id === ref.id)
                    const attributes = imageObj.attributes
                    const styles = attributes.styles

                    return {
                        id: imageObj.id,
                        list: styles[0].url,
                        card: styles[2].url,
                    }
                })
            }

            items.value = data.data.map(p => ({
                id: p.id,
                name: p.attributes.name,
                description: p.attributes.description.substring(3, 40),
                images: getImageUrls(p, data.included),
                price: p.attributes.display_price,
                cartPrice: Number(p.attributes.price)
            }));

        } catch (err) {
            error.value = err;
        }
    }

    const filtered = computed(() =>
        items.value.filter(p => {
            // const price = p.price >= priceRange.value[0] && p.price <= priceRange.value[1];
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
        colors,
        sizes,
        selectedColors,
        selectedSizes,
        onlyAvailable,
        pagesCount,
        wantedPage,
        // priceRange,
        sortOrder,
        myArray,
        fetchProducts
    }
})