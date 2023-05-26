<template>
    <transition name="upcoming" mode="out-in">
        <div class="main__upcoming">
            <Upcomingitem />
        </div>
    </transition>
</template>

<script setup>
import Upcomingitem from '@/components/Upcoming/Upcomingitem.vue';
</script>
