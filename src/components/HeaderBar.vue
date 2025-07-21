<script setup>
import { useProductsStore } from '../stores/products'
const store = useProductsStore()
import Filters from './Filters.vue';

</script>

<template>
    <!-- desktop menu -->
    <div class="d-none d-md-block container-fluid col-lg-11 mx-auto">
        <nav dir="rtl" class="navbar navbar-expand-lg bg-white sticky-top col-12">
            <div class="col-12">
                <div class="mb-2 d-flex flex-row justify-content-between align-items-center">
                    <a class="navbar-brand col" href="/">
                        <img src="/logo.png" width="150">
                    </a>
                    <form class="d-flex col-4 col-lg-5 position-relative mx-3" role="search">
                        <input v-model="store.search" class="form-control rounded-3" type="search" placeholder="جستجو"
                            aria-label="Search" />
                        <button class="position-absolute top-50 start-0 translate-middle-y btn" type="submit">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#A72F3B"
                                class="bi bi-search mt-lg-1" viewBox="0 0 16 16">
                                <path
                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                        </button>
                    </form>
                    <ul class="navbar-nav col p-0">
                        <div class="row me-auto">
                            <li class="nav-item mx-auto text-nowrap col">
                                <a class="nav-link active d-flex align-items-center" aria-current="page" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                        class="bi bi-box-arrow-in-right ms-1" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd"
                                            d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z" />
                                        <path fill-rule="evenodd"
                                            d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
                                    </svg>
                                    <span class="fs-6">
                                        ورود | ثبت نام
                                    </span>
                                </a>
                            </li>
                            <li class="nav-item mx-auto text-nowrap col">
                                <a class="nav-link active d-flex align-items-center" href="/cart">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                        class="bi bi-cart ms-1" viewBox="0 0 16 16">
                                        <path
                                            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                                    </svg>
                                    <span class="fs-6">
                                        سبد خرید
                                    </span>
                                </a>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="my-2 py-3 px-2 text-center col-12">
            <ul class="align-items-center list-unstyled text-nowrap row px-1">
                <li class="d-flex align-items-center justify-content-center nav-item btn-red p-2 rounded-3 col">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-magic ms-1"
                        viewBox="0 0 16 16">
                        <path
                            d="M9.5 2.672a.5.5 0 1 0 1 0V.843a.5.5 0 0 0-1 0zm4.5.035A.5.5 0 0 0 13.293 2L12 3.293a.5.5 0 1 0 .707.707zM7.293 4A.5.5 0 1 0 8 3.293L6.707 2A.5.5 0 0 0 6 2.707zm-.621 2.5a.5.5 0 1 0 0-1H4.843a.5.5 0 1 0 0 1zm8.485 0a.5.5 0 1 0 0-1h-1.829a.5.5 0 0 0 0 1zM13.293 10A.5.5 0 1 0 14 9.293L12.707 8a.5.5 0 1 0-.707.707zM9.5 11.157a.5.5 0 0 0 1 0V9.328a.5.5 0 0 0-1 0zm1.854-5.097a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L8.646 5.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0l1.293-1.293Zm-3 3a.5.5 0 0 0 0-.706l-.708-.708a.5.5 0 0 0-.707 0L.646 13.94a.5.5 0 0 0 0 .707l.708.708a.5.5 0 0 0 .707 0z" />
                    </svg>
                    <a class="text-decoration-none text-white">خودت طراحیش کن!</a>
                </li>
                <li class="nav-item col">
                    <a>پوشاک</a>
                </li>
                <li class="nav-item col">
                    <a>لوازم خانه</a>
                </li>
                <li class="nav-item col">
                    <a>قاب موبایل</a>
                </li>
                <li class="nav-item col">
                    <a>اکسسوری</a>
                </li>
                <li class="nav-item col">
                    <a>مدرسه و اداره</a>
                </li>
                <li class="nav-item col">
                    <a>کارت و پوستر</a>
                </li>
                <li class="nav-item col">
                    <a>جشن و مهمانی</a>
                </li>


            </ul>
        </div>
    </div>
    <!-- mobile menu -->
    <div dir="rtl" class="d-md-none">
        <nav class="navbar fixed-top bg-white">
            <div class="d-flex flex-row align-items-center justify-content-between px-0 mx-2 col-11 mx-auto">
                <button class="btn col" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRightMenu"
                    aria-controls="offcanvasRightMenu">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                        class="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                </button>

                <!-- sideBar menu -->
                <div class="offcanvas offcanvas-end w-75 p-4" tabindex="-1" id="offcanvasRightMenu"
                    aria-labelledby="offcanvasRightLabel">
                    <div class="d-flex flex-column align-items-start justify-content-between h-75 my-3">
                        <a
                            class="d-flex flex-row align-items-center justify-content-between w-100 text-decoration-none text-black">
                            <span>پوشاک</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                            </svg>
                        </a>
                        <a
                            class="d-flex flex-row align-items-center justify-content-between w-100 text-decoration-none text-black">
                            <span>لوازم خانه</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                            </svg>
                        </a>
                        <a
                            class="d-flex flex-row align-items-center justify-content-between w-100 text-decoration-none text-black">
                            <span>قاب موبایل</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                            </svg>
                        </a>
                        <a
                            class="d-flex flex-row align-items-center justify-content-between w-100 text-decoration-none text-black">
                            <span>اکسسوری</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                            </svg>
                        </a>
                        <a
                            class="d-flex flex-row align-items-center justify-content-between w-100 text-decoration-none text-black">
                            <span>مدرسه و اداره</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                            </svg>
                        </a>
                        <a
                            class="d-flex flex-row align-items-center justify-content-between w-100 text-decoration-none text-black">
                            <span>کارت و پوستر</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                            </svg>
                        </a>
                        <a
                            class="d-flex flex-row align-items-center justify-content-between w-100 text-decoration-none text-black">
                            <span>جشن و مهمانی</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                            </svg>
                        </a>
                        <div style="height:50px"></div>
                        <a
                            class="d-flex flex-row align-items-center justify-content-between w-100 text-decoration-none text-black">
                            <span>همراه با کاستومی</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                            </svg>
                        </a>
                        <a
                            class="d-flex flex-row align-items-center justify-content-between w-100 text-decoration-none text-black">
                            <span>خدمات مشتریان</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                            </svg>
                        </a>
                        <a
                            class="d-flex flex-row align-items-center justify-content-between w-100 text-decoration-none text-black">
                            <span>راهنمای خرید</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-chevron-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
                            </svg>
                        </a>

                    </div>

                </div>

                <form class="d-flex col-8 position-relative mx-3" role="search">
                    <input v-model="store.search" class="form-control rounded-4" type="search" placeholder="جستجو"
                        aria-label="Search" />
                    <button class="position-absolute top-0 start-0 btn" type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#A72F3B"
                            class="bi bi-search mt-lg-1" viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                    </button>
                </form>

                <a class="navbar-brand col" href="#">
                    <img class="w-100" src="/mobile-icon.png">
                </a>

            </div>
        </nav>
        <div class="nav py-3 text-start col-12 col-lg-11 mx-auto">
            <ul class="align-items-center list-unstyled text-nowrap row p-0 mx-3">
                <a class="nav-item col d-flex align-items-center text-decoration-none text-black"
                    data-bs-toggle="offcanvas" href="#offcanvaFilter" role="button" aria-controls="offcanvasFilter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                        class="bi bi-sliders2 ms-1" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                            d="M10.5 1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4H1.5a.5.5 0 0 1 0-1H10V1.5a.5.5 0 0 1 .5-.5M12 3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m-6.5 2A.5.5 0 0 1 6 6v1.5h8.5a.5.5 0 0 1 0 1H6V10a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5M1 8a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 1 8m9.5 2a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V13H1.5a.5.5 0 0 1 0-1H10v-1.5a.5.5 0 0 1 .5-.5m1.5 2.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
                    </svg>
                    <span>فیلتر</span>
                </a>
                <div class="offcanvas offcanvas-end w-75" tabindex="-1" id="offcanvaFilter"
                    aria-labelledby="offcanvasRightLabel">
                    <div class="offcanvas-body">
                        <filters />
                    </div>
                </div>

                <a class="nav-item col d-flex align-items-center text-decoration-none text-black"
                    data-bs-toggle="offcanvas" href="#offcanvasSort" role="button" aria-controls="offcanvasSort">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                        class="bi bi-filter ms-1" viewBox="0 0 16 16">
                        <path
                            d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5" />
                    </svg>
                    <span>پربازدیدترین‌ها</span>
                </a>
                <div class="offcanvas offcanvas-end w-75" tabindex="-1" id="offcanvasSort"
                    aria-labelledby="offcanvasRightLabel">
                    <div class="offcanvas-body">
                        <div class="d-flex flex-column align-items-start justify-content-between w-100">
                            <p class="my-3 fs-5 fw-bold">مرتب سازی بر اساس</p>
                            <p class="my-3">پربازدیدترین‌ها</p>
                            <p class="my-3">جدیدترین</p>
                            <p class="my-3">پرفروش‌ترین</p>
                            <p class="my-3">گران‌ترین</p>
                            <p class="my-3">ارزان‌ترین</p>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    </div>
</template>

<style scoped>
input::placeholder {
    color: #A72F3B;
}

.nav {
    margin-top: 50px;
}

.offcanvas {
    font-size: calc(12px + 0.390625vw);
}
</style>