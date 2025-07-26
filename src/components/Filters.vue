<script setup>
import { useProductsStore } from '../stores/products'
import { ref } from 'vue'
const store = useProductsStore();
const showColors = ref(false)
const showSizes = ref(false)
</script>

<template>
    <section class="d-flex flex-column align-items-center justify-content-between">
        <div class="d-flex flex-row align-items-center justify-content-between w-100">
            <span class="my-3 fs-5 fw-bold">فیلترها</span>
            <span class="red fs-6" @click="() => {
                store.selectedColors = []
                store.selectedSizes = []
                store.onlyAvailable = false
                store.fetchProducts()
            }" style="cursor: pointer;">حذف فیلترها</span>
        </div>

        <div class="my-1 py-1 w-100">
            <div class="d-flex flex-row align-items-center justify-content-between" @click="showSizes = !showSizes">
                <span>سایز</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="grey" class="bi bi-caret-down-fill"
                    viewBox="0 0 16 16">
                    <path
                        d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
            </div>
            <div class="row p-2" :class="['row p-2', showSizes ? 'd-block' : 'd-none']">
                <div v-for="item in store.sizes" :key="item.id" class="align-items-center d-flex flex-row my-2">
                    <label class="ms-2">{{ item.presentation }}</label>
                    <input type="checkbox" :value="item.name" v-model="store.selectedSizes"
                        @change="store.fetchProducts" />
                </div>
            </div>
        </div>

        <div class="my-1 py-1 w-100">
            <div class="d-flex flex-row align-items-center justify-content-between" @click="showColors = !showColors">
                <span>رنگ</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="grey" class="bi bi-caret-down-fill"
                    viewBox="0 0 16 16">
                    <path
                        d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
            </div>
            <div class="row p-2" :class="['row p-2', showColors ? 'd-block' : 'd-none']">
                <div v-for="item in store.colors" :key="item.id" class="align-items-center d-flex flex-row my-2">
                    <label class="ms-2">{{ item.presentation }}</label>
                    <input type="checkbox" :value="item.name" v-model="store.selectedColors"
                        @change="store.fetchProducts" />
                </div>
            </div>
        </div>

        <label class="my-1 py-1 align-items-center justify-content-between form-check form-switch w-100">
            <input class="form-check-input col-1" type="checkbox" role="switch" id="switchCheckShipping">
            <span class="form-check-label col" for="switchCheckShipping">ارسال امروز</span>
        </label>

        <label class="my-2 py-1 form-check form-switch w-100">
            <input class="form-check-input" type="checkbox" role="switch" id="switchCheckAvailable"
                v-model="store.onlyAvailable" @change="store.fetchProducts">
            <span class="form-check-label" for="switchCheckAvailable">فقط کالاهای موجود</span>
        </label>

        <div class="accordion accordion-flush w-100" id="accordionExample">
            <div class="accordion-item border-bottom-0 my-2">
                <h2 class="accordion-header">
                    <button class="align-items-center btn collapsed d-flex flex-row justify-content-between w-100 px-0"
                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true"
                        aria-controls="collapseFour">
                        <span>محدوده قیمت</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="grey"
                            class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path
                                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg>
                    </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        It is shown by default, until the collapse plugin adds the appropriate classes that we use to
                        style each element. These classes control the overall appearance, as well as the showing and
                        hiding via CSS transitions.
                    </div>
                </div>
            </div>
            <div class="accordion-item border-bottom-0 my-2">
                <h2 class="accordion-header">
                    <button class="align-items-center btn collapsed d-flex flex-row justify-content-between w-100 px-0"
                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
                        aria-controls="collapseFive">
                        <span>مدل</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="grey"
                            class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path
                                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg>
                    </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        It is shown by default, until the collapse plugin adds the appropriate classes that we use to
                        style each element. These classes control the overall appearance, as well as the showing and
                        hiding via CSS transitions.
                    </div>
                </div>
            </div>
            <div class="accordion-item border-bottom-0 my-2">
                <h2 class="accordion-header">
                    <button class="align-items-center btn collapsed d-flex flex-row justify-content-between w-100 px-0"
                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false"
                        aria-controls="collapseSix">
                        <span>طرح</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="grey"
                            class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path
                                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg>
                    </button>
                </h2>
                <div id="collapseSix" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        It is shown by default, until the collapse plugin adds the appropriate classes that we use to
                        style each element. These classes control the overall appearance, as well as the showing and
                        hiding via CSS transitions.
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>