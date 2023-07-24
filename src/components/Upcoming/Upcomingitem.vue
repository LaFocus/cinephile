<template>
    <transition name="upcoming-item" mode="out-in">
        <div class="main__upcoming-item" v-if="slideView == index">
            <img :src="imgUrlFull + movie.backdrop_path" class="main__upcoming-item-img" alt="">
            <div class="main__upcoming-content">
                <div class="main__upcoming-info">
                    <h1 class="main__upcoming-content-title">{{ movie.title }}</h1>
                    <p class="main__upcoming-content-text">{{ movie.overview }}</p>
                    <router-link :to="`/movie/${movie.id}`">
                        <BtnMore />
                    </router-link>
                </div>
            </div>
            <div class="main__upcoming-next" @click="$emit('slideNext')">
                <img :src="imgUrl + next.backdrop_path" class="main__upcoming-next-img" alt="">
                <div class="main__upcoming-next-content">
                    <span class="next">Следующий</span>
                    <span class="main__upcoming-next-title">{{ next.title }}</span>
                </div>
                <div class="main__upcoming-next-line"></div>
            </div>
        </div>
    </transition>
</template>

<script setup>
import BtnMore from '@/components/UI/BtnMore.vue'
import { imgUrl, imgUrlFull } from '@/static.js'

const props = defineProps({
    movie: {
        type: Object,
        required: true,
    },
    next: {
        type: Object,
        required: true,
    },
    index: {
        type: Number,
    },
    slideView: {
        type: Number,
    }
})



</script>
