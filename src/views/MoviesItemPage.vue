<template>
  <div class="moviesItemPage" v-if="item">
    <div class="moviesItemPage__inner">
      <div class="moviesItemPage__inner__header">
        <!-- <div class="moviesItemPage__inner__header-black"></div> -->
        <img v-lazy="imgUrlFull + item.poster_path" alt="" class="moviesItemPage__inner__header-bg">
        <div class="moviesItemPage__inner__header-desc">
          <h3 class="moviesItemPage__inner__header-desc-title">
            {{ item.title || item.name }}
          </h3>
          <p class="moviesItemPage__inner__header-desc-text">
            {{ item.overview }}
          </p>
          <p class="moviesItemPage__inner__header-desc-date">
            {{ getDate }}{{ getGenres }}
            <span> &nbsp; &nbsp; &nbsp;{{ getTime }}</span>
          </p>
          <button class="moviesItemPage__inner__header-desc-btn">
            <img src="@/assets/images/play.svg" alt="">
            Смотреть трейлер
          </button>
          <div class="moviesItemPage__inner__header-img">
            <img v-lazy="imgUrlFull + item.backdrop_path" alt="" />
          </div>
          <p class="moviesItemPage__inner__header-desc-mainChar" v-if="actors">
            В главных ролях
          </p>
        </div>
        <div class="moviesItemPage__inner__header-actors" v-if="actors">
          <div class="moviesItemPage__inner__header-actors-item" v-for="(item, i) in actors" :key="item.id">
            <div class="moviesItemPage__inner__header-actors-item-img">
              <img
                alt=""
                v-lazy="imgUrl + item.profile_path"
              />
            </div>
            <span class="moviesItemPage__inner__header-actors-item-name"
              >{{item.name}}</span
            >
          </div>
        </div>
      </div>

      
    </div>
  </div>
  <div class="moviesItemPage__inner__main container" v-if="item">
    <div class="moviesItemPage__inner__main__cards ">
      <div class="moviesItemPage__inner__main__cards-item" v-if="item.budget">
        <div class="moviesItemPage__inner__main__cards-item-name">Бюджет</div>
        <span>${{ item.budget.toLocaleString() || 'Нет информации'}}</span>
      </div>
      <div class="moviesItemPage__inner__main__cards-item" v-if="item.revenue">
        <div class="moviesItemPage__inner__main__cards-item-name">Сборы</div>
        <span>${{ item.revenue.toLocaleString() || 'Нет информации'}}</span>
      </div>
      <div class="moviesItemPage__inner__main__cards-item">
        <div class="moviesItemPage__inner__main__cards-item-name">Статус</div>
        <span>{{( item.status == 'Released' ? 'Выпущено' : 'Не выпущено') || (item.in_production)}}</span>
      </div>
      <div class="moviesItemPage__inner__main__cards-item">
        <div class="moviesItemPage__inner__main__cards-item-name">Исходное название</div>
        <span>{{ item.original_title || item.original_name }}</span>
      </div>
    </div>

    <div class="moviesItemPage__inner__main__recommendations">
      <h3>Рекомендации</h3>
      <div class="moviesItemPage__inner__main__recommendations__cards">
        <div class="moviesItemPage__inner__main__recommendations__cards-item" v-for="(item, i) in popularItems" :key="item.id">
          <router-link to="/">
            <img v-lazy="imgUrlFull + item.poster_path" alt="" class="moviesItemPage__inner__main__recommendations__cards-item-img">
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useItemid } from "@/stores/itemid";
import { imgUrl, imgUrlFull } from "@/static.js";
import { useActors } from '@/stores/actors'
import { usePopular } from '@/stores/popular'



const route = useRoute();
const itemIdStore = useItemid();
const item = ref(null);
const actorsStore = useActors()
const actors = ref(null)
const popular = usePopular()
const popularItems = ref(null)



const getItem = async () => {
  await itemIdStore.getItemId({ type: route.params.type, id: route.params.id });
  item.value =
    route.params.type == "movie" ? itemIdStore.movie : itemIdStore.tv;
};
const getGenres = computed(() =>
   item.value.genres.reduce((acc, item) => acc + `, ${item.name}`, "")
);

const getDate = computed(
  () =>
    new Date(item.value.first_air_date).getFullYear() ||
    new Date(item.value.release_date).getFullYear()
);

const getActorsStore = async () => {
  await actorsStore.getActors({type:route.params.type, id: route.params.id})
  actors.value = route.params.type == 'movie' ? actorsStore.actorsMovie : actorsStore.actorstv
  actors.value.splice(6)
}

const getTime = computed(() => {
  let min =
  route.params.type == "movie"
      ? item.value.runtime
      : route.params.type == "tv"
      ? item.value.episode_run_time
      : "";
  if (min != 0) {
    let hours = Math.floor(min / 60);
    let remMin = min % 60;
    if (hours == 0) {
      return remMin + "m";
    } else {
      return hours + "h" + " " +remMin + "m";
    }
  }
})

const getPopularItems = async () => {
  await popular.getPopular({type: route.params.type})
  popularItems.value = route.params.type == 'movie' ? popular.popularMovies : popular.popularTvs
  popularItems.value.splice(4)
}


onMounted(async () => {
  await getItem();
  if (route.params.type == 'movie') {
    await getActorsStore()
  }
  await getPopularItems()
});
</script>
