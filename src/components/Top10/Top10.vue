<template>
  <section class="main__top10" v-if="getTopArr">
    <h3 class="main__top10-title">Топ <span>10</span></h3>
    <Swiper
      class="main__top10__swiper"
      :modules="modules"
      :navigation="true"
      :breakpoints="swiperOptions.breakpoints"
    >
      <Swiper-slide
        class="main__top10__swiper__item"
        v-for="(item, i) in getTopArr.slice(10)"
        :key="item.id"
      >
        <router-link :to="`/movie/${item.id}`">
          <div class="main__top10__swiper__item-num">
            <span>{{ i + 1 }}</span>
          </div>
          <img
            :src="imgUrl + item.poster_path"
            alt=""
            class="main__top10__swiper__item-img"
        /></router-link>
      </Swiper-slide>
    </Swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import { onMounted, ref, computed } from "vue";
import { useTop } from "@/stores/top";
import { imgUrl, imgUrlFull } from "@/static.js";

let top = useTop();
const getTopArr = computed(() => top.top);

onMounted(() => {
  top.getTop();
});

let modules = ref([Navigation]);
let swiperOptions = ref({
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    470: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 3,
    },
  },
});
</script>

<style lang="scss" scoped></style>
