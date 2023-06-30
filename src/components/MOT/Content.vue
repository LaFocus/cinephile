<template>
    <section class="main__video" v-if="content">
        <router-link :to="`${props.type}/`" class="main__video-title">
            <span>{{ props.type == 'movie' ? 'Фильмы' : 'Сериалы' }}</span>
            <img src="@/assets/images/arrow.png" alt="">
        </router-link>

        <Swiper :modules="modules" space-between="25" :navigation="true" :breakpoints="swiperOptions.breakpoints">
            <Swiper-slide class="main__video-item" v-for="(item, idx) in content" :key="item.id" @click="getItem(item)">
                <img v-lazy="imgUrlFull + item.poster_path" src="@/assets/images/poster.png" alt=""
                    class="main__video-item-img">
                <router-link :to="`${props.type}/`" class="main__video-item-link"/>
                <h2 class="main__video-item-title">{{ item.title || item.name }}</h2>
            </Swiper-slide>
            <Swiper-slide>
                <router-link :to="`${props.type}/`" class="main__video-item " >
                    <span>{{ props.type == 'movie' ? 'Все фильмы' : 'Все сериалы' }}</span>
                </router-link>
            </Swiper-slide>
        </Swiper>
        <div class="main__inf" :class="{active: open}" ref="inf">
            <InfoBlock 
                :current="current"
                :type="type" 
                @close="close"
            />
        </div>
    </section>
</template>

<script setup>

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import { usePopular } from '@/stores/popular'
import { useItemid } from "@/stores/itemid";
import { onMounted, ref, computed } from "vue";
import { imgUrl, imgUrlFull } from '@/static.js'
import InfoBlock from "@/components/InfoBlock/InfoBlock.vue";



const props = defineProps(['type'])
const popular = usePopular()
const itemIdStore = useItemid()

let modules = ref([Navigation])
let swiperOptions = ref({
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        576: {
            slidesPerView: 2
        },
        900: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        },
        1400: {
            slidesPerView: 5
        },
    }
})

const content = computed(() => props.type == 'movie' ? popular.popularMovies : popular.popularTvs)

onMounted(() => {
    popular.getPopular({ type: props.type })
})

const getItem = async item => {
    current.value = null
    await itemIdStore.getItemId({type: props.type, id: item.id})
    current.value = props.type == 'movie' ? itemIdStore.movie : itemIdStore.tv

    open.value = true
    let infTop = inf.value.offsetTop
    window.scrollTo({
        top: infTop - navHeight.offsetHeight,
        behavior: 'smooth'
    })
}

let current = ref(null)
let inf = ref(null)
let open = ref(false)

const close = () => {
    open.value = false
    current.value = null
}

</script>

<style lang="scss" scoped></style>