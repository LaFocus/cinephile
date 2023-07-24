<template>
  <div class="search">
    <div class="search__inner container">
      <input
        type="text"
        class="search__inner-input"
        placeholder="Найти фильм, сериал..."
        v-model="inputValue"
        @keydown.enter="getSearch(inputValue)"
      />
      <div class="search__inner__items">
        <div
          class="search__inner__items-item"
          v-for="(item, i) in arrayWithSearchedItems"
          :key="item.id"
        >
        <router-link :to="`/movie/${item.id}`" class="search__inner__items-item-link">
          <img :src="imgUrl + item.poster_path" alt="" />
          <!-- <p>{{ item.title }}</p> -->
        </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { imgUrl } from "@/static.js";
import { apiKey } from "../static";
import axios from "axios";

let inputValue = ref("");
let arrayWithSearchedItems = ref("")
let url = "https://api.themoviedb.org/3/search/";


let getSearch = async (str) => {
  try {
    let res = await axios.get(
      `${url}movie?api_key=${apiKey}&query=${str}&language=ru-RU`
    );
    let results = res.data.results;
    arrayWithSearchedItems.value = results.filter(
      (movie) => movie.backdrop_path != null
    );
  } catch (error) {
    console.log("Ошибка при поиске", error);
  }
};
</script>
