<template>
  <div class="actors">
    <div class="actors__item" v-for="(item, i) in actors" :key="item.id">
      <img v-lazy="imgUrl + item.profile_path" alt="" />
      <span>{{ item.name }} </span>
    </div>
  </div>
</template>

<script setup>
import { useActors } from "@/stores/actors";
import { computed, onMounted, ref } from "vue";
import { imgUrl } from "@/static";

const actorsStore = useActors();
const actors = ref(null);
const props = defineProps(["type", "id"]);
const getActorsStore = async () => {
  await actorsStore.getActors({ type: props.type, id: props.id });
  actors.value =
    props.type == "movie" ? actorsStore.actorsMovie : actorsStore.actorstv;
  actors.value.splice(4);
};

onMounted(async () => {
  await getActorsStore();
});
</script>

<style lang="scss">
.actors {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 17px;
  max-width: 508px;
  &__item {
    border-radius: 25px;
    border: 1px solid #fff;
    background: rgba(20, 20, 20, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    padding-right: 15px;

    & img {
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 50%;
    }

    & span {
      color: #fff;
      text-align: center;
      font-size: 16px;
      font-weight: 400;
      line-height: 30px;
    }
  }
}
</style>
