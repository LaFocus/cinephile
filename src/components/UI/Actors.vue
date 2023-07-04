<template>
    <div class="actors">
        <div class="actors__item">
            <img src="@/assets/images/akw.png" alt="">
            <span>Awkwafina</span>
        </div>
    </div>
</template>

<script setup>
import { useActors } from "@/stores/actors";
import { computed } from "vue";
import { imgUrl } from "@/static";
</script>

<style lang="scss">
</style>