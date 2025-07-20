<script setup>
import { useProductsStore } from '../stores/products'
const store = useProductsStore()

</script>

<template>
    <section class="d-flex flex-column align-items-center justify-content-between">
        <div class="d-flex flex-row align-items-center justify-content-between w-100">
            <span class="my-3 fs-5 fw-bold">فیلترها</span>
            <span class="red fs-6">حذف فیلترها</span>
        </div>

        <div class="accordion accordion-flush w-100" id="accordionExample">
            <div class="accordion-item border-bottom-0 my-2">
                <h2 class="accordion-header">
                    <button class="align-items-center btn collapsed d-flex flex-row justify-content-between w-100 px-0"
                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                        aria-controls="collapseOne">
                        <span>برند</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="grey"
                            class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path
                                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg>
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
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
                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                        aria-controls="collapseTwo">
                        <span>اندازه</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="grey"
                            class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path
                                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg>
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
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
                        type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                        aria-controls="collapseThree">
                        <span>رنگ</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="grey"
                            class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                            <path
                                d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg>
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        It is shown by default, until the collapse plugin adds the appropriate classes that we use to
                        style each element. These classes control the overall appearance, as well as the showing and
                        hiding via CSS transitions.
                    </div>
                </div>
            </div>
        </div>

        <div class="my-1 py-1 align-items-center justify-content-between form-check form-switch w-100">
            <input class="form-check-input col-1" type="checkbox" role="switch" id="switchCheckShipping">
            <label class="form-check-label col" for="switchCheckShipping">ارسال امروز</label>
        </div>

        <div class="my-2 py-1 form-check form-switch w-100">
            <input class="form-check-input" type="checkbox" role="switch" id="switchCheckAvailable">
            <label class="form-check-label" for="switchCheckAvailable">فقط کالاهای موجود</label>
        </div>

        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="switchCheckDefault">
            <label class="form-check-label" for="switchCheckDefault">Default switch checkbox input</label>
        </div>

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

        <!-- <div v-for="option in store.filterOptions" :key="option.id" class="mb-4">
            <h4>{{ option.presentation }}</h4>

            <div v-for="value in option.option_values" :key="value.id">
                <label>
                    <input type="checkbox" :value="value.name" v-model="option.name" />
                    {{ value.presentation }}
                </label>
            </div>
        </div> -->
    </section>
</template>