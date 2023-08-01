<template>
  <div class="main__info">
    <img
      src="@/assets/images/close.svg"
      class="main__info-close"
      @click="$emit('close')"
      alt=""
    />
    <div class="main__info-block" v-if="current">
      <img
        :src="imgUrlFull + current.backdrop_path"
        class="main__info-img"
        alt=""
      />
      <div class="main__info-content">
        <div class="main__info-content-block">
          <h2 class="main__info-content-title">
            {{ current.title || current.name }}
          </h2>
          <p class="main__info-content-text">
            {{ current.overview }}
          </p>
          <p class="main__info-content-date">
            <span> {{ getDate }}{{ getGenres.toLowerCase() }} </span>
            <span>
              {{ getTime }}
            </span>
          </p>
          <Actors :type="props.type" :id="current.id" />
          <router-link :to="`/${props.type}/${current.id}`">
            <BtnMore />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { imgUrlFull } from "@/static";
import { computed, ref, onMounted, onBeforeMount, watch } from "vue";
import Actors from '@/components/UI/Actors.vue'


const props = defineProps(["current", "type"]);

const getGenres = computed(() =>
  props.current.genres.reduce((acc, item) => acc + `, ${item.name}`, "")
);
let getDate = computed(
  () =>
    new Date(props.current.first_air_date).getFullYear() ||
    new Date(props.current.release_date).getFullYear()
);

const getTime = computed(() => {
  let min =
    props.type == "movie"
      ? props.current.runtime
      : props.type == "tv"
      ? props.current.episode_run_time
      : "";
  if (min != 0) {
    let hours = Math.floor(min / 60);
    let remMin = min % 60;
    if (hours == 0) {
      return remMin + "m";
    } else {
      return hours + "h" + remMin + "m";
    }
  }
});


</script>
