<template>
  <div class="moviesPage">
    <div class="moviesPage__inner container">
      <h3 class="moviesPage-title">Все фильмы</h3>
      <div class="moviesPage__items">
        <div class="moviesPage__items__item"
          v-for="(item, i) in popular.popularMovies">
          <router-link :to="`/movie/${item.id}`">
            <img
              v-if="item.backdrop_path"
              :src="imgUrl + item.poster_path"
              alt=""
              class="moviesPage__items__item-img"
            />
            <img
              v-else
              class="nophoto"
              src="@/assets/images/NOPHOTO.png"
              alt=""
            />
            <p class="moviesPage__items__item-name">
              {{ item.title }}
            </p>
          </router-link>
        </div>
        <div class="moviesPage__items__item"
          v-for="(item, i) in itemsArr">
          <router-link :to="`/movie/${item.id}`">
            <img
              v-if="item.backdrop_path"
              :src="imgUrl + item.poster_path"
              alt=""
              class="moviesPage__items__item-img"
            />
            <img
              v-else
              class="nophoto"
              src="@/assets/images/NOPHOTO.png"
              alt=""
            />
            <p class="moviesPage__items__item-name">
              {{ item.title }}

            </p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { usePopular } from "@/stores/popular";
import { usePopularScroll } from "@/stores/popularScroll";
import { ref, onMounted, computed } from "vue";
import { imgUrl, imgUrlFull } from "@/static";

let popular = usePopular();
let popularScroll = usePopularScroll()
const page = ref([2])
const itemsArr = ref([])

document.addEventListener("scroll", (e) => {
  if (
    window.scrollY + window.innerHeight <= document.documentElement.scrollHeight && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight / 1.5
  ) {
    popularScroll.getPopularScroll({type: 'movie', page: page.value})
    page.value++
    for (const item of popularScroll.popularScrollMovies) {
      itemsArr.value.push(item)
    }
    console.log(itemsArr);
  }
});

onMounted(() => {
  popular.getPopular({ type: "movie", page: 1 });
});
</script>
