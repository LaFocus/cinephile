<template>
  <div class="moviesPage">
    <div class="moviesPage__inner container">
      <h3 class="moviesPage-title">Все фильмы</h3>
      <div class="moviesPage__items">
        <div class="moviesPage__items__item" v-for="(item, i) in popular.popularMovies">
          <img v-if="item.backdrop_path" :src="imgUrl + item.backdrop_path" alt="" class="moviesPage__items__item-img" /><img v-if="item.backdrop_path" :src="imgUrl + item.backdrop_path" alt="" class="moviesPage__items__item-img" />
          <img v-else class="nophoto" src="@/assets/images/NOPHOTO.png" alt="">
          <p class="moviesPage__items__item-name"> {{ item.title }} </p>
        </div>
        <div class="moviesPage__items__item"></div>
        <div class="moviesPage__items__item"></div>
        <div class="moviesPage__items__item"></div>
        <div class="moviesPage__items__item"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePopular } from "@/stores/popular";
import { ref, onMounted, computed } from "vue";
import { imgUrl, imgUrlFull } from "@/static";

let popular = usePopular();
onMounted(() => {
  popular.getPopular({ type: "movie" });
});
</script>
