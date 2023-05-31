<template>
    <transition name="upcoming" mode="out-in">
        <div class="main__upcoming">
            <Upcomingitem />
        </div>
    </transition>
</template>

<script setup>
import Upcomingitem from '@/components/Upcoming/Upcomingitem.vue';
import { useUpcoming } from '@/stores/upcoming'
import { onMounted, ref } from "vue"

let upcomingStore = useUpcoming()





onMounted(() => {
    upcomingStore.getUpcoming()
})


</script>

