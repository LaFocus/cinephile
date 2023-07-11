<template>
    <div class="main">
        <Upcoming />
        <Movies />
        <Tvs />
        <Top10 />
    </div>
</template>

<script setup>

import Upcoming from '@/components/Upcoming/Upcoming.vue'
import Movies from "@/components/MOT/Movies.vue";
import Tvs from "@/components/MOT/Tvs.vue";
import Top10 from '@/components/Top10/Top10.vue';

</script>
