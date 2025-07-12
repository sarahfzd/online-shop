<script setup>
import { useProductsStore } from '../stores/products'
const store = useProductsStore()

</script>

<template>
    <nav dir="rtl" class="navbar navbar-expand-lg bg-white sticky-top shadow">
        <div class="d-flex flex-row align-items-center justify-content-between col-lg-11 mx-auto">
            <a class="navbar-brand col-2 mx-auto" href="/">
                <img src="/logo.png" width="200">
            </a>
            <form class="d-flex col-5 mx-auto position-relative" role="search">
                <input v-model="store.search" class="form-control me-2 rounded-3" type="search" placeholder="جستجو"
                    aria-label="Search" />
                <button class="position-absolute top-0 start-0 btn" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="darkRed" class="bi bi-search"
                        viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                    </svg>
                </button>
            </form>
            <ul class="navbar-nav col-2 mx-auto">
                <li class="nav-item mx-auto text-nowrap">
                    <a class="nav-link active" aria-current="page" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor"
                            class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
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
                <li class="nav-item mx-auto text-nowrap">
                    <a class="nav-link active" href="/cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor"
                            class="bi bi-cart" viewBox="0 0 16 16">
                            <path
                                d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                        </svg>
                        <span class="fs-6">
                            سبد خرید
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>