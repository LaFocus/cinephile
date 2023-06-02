<template>
    <transition name="upcoming" mode="out-in">
        <div class="main__upcoming" >
            <Upcomingitem 
                v-for="(movie, index) in getUpcomingArr" 
                :key="movie.id"
                :movie="movie"
                :index="index"
                @slideNext="slideNext"
                :slideView="slideView"
                :next="getUpcomingArr[index + 1 == getUpcomingArr.length ? 0 : index + 1]"
            />
        </div>
    </transition>
</template>

<script setup>
import Upcomingitem from '@/components/Upcoming/Upcomingitem.vue';
import { useUpcoming } from '@/stores/upcoming'
import { onMounted, ref, computed } from "vue"

let upcomingStore = useUpcoming()
const getUpcomingArr = computed(() => upcomingStore.upcoming)


let slideView = ref(0)
let timeout = ref(null)

const slide = () => {
    if (getUpcomingArr.value.length - 1 == slideView.value) slideView.value = 0
    else slideView.value++
    timeout = setTimeout(slide, 5000)
}

const slideNext = () => {
    clearTimeout(timeout)
    slide()
}



onMounted(() => {
    upcomingStore.getUpcoming()
    timeout = setTimeout(slide, 5000)
})


</script>

