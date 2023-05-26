<template>
    <header class="header">
        <nav class="nav">
            <div class="container">
                <div class="nav__container">
                    <router-link to="/" class="">
                        <img src="../../assets/images/Logo.svg" alt="">
                    </router-link>
                    <button class="nav__btn" @click="burgerOn">
                        <img src="@/assets/images/menu.svg" alt="">
                    </button>
                    <nav class="nav__list" :class="{ active: burger }">
                        <li class="nav__close" @click="burgerOff">
                            <img src="@/assets/images/closeMenu.svg" alt="">
                        </li>
                        <li class="nav__list-item" v-for="link in links" :key="link.title" @click="burger=false">
                            <router-link class="nav__list-link" :to="link.url">
                                {{ link.title }}
                            </router-link>
                        </li>
                        <li class="nav__list-item" @click="burger=false">
                            <router-link to="/search">
                                <img src="@/assets/images/search.svg" alt="">
                            </router-link>
                        </li>
                    </nav>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>
import { ref, reactive } from 'vue'

const links = reactive([
    { title: "Главная", url: '/' },
    { title: "Фильмы", url: '/movie' },
    { title: "Сериалы", url: '/tv' },
])

const burger = ref(false)

const burgerOn = () => {
    burger.value = true
}

const burgerOff = () => {
    burger.value = false
}

</script>
