<template>
    <div class="actors">
        <div class="actors__item">
            <img src="imgUrl + " alt="">
            <span>Awkwafina </span>
        </div>
    </div>
</template>

<script setup>
import { useActors } from "@/stores/actors";
import { computed } from "vue";
import { imgUrl } from "@/static";

const actors = useActors({type:type, id:id})

</script>

<style lang="scss">
</style>