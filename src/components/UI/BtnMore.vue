<template>
    <router-link to="/" class="more">
        <img src="@/assets/images/more.svg" class="more__item" alt="">
        <span class="more__text">Подробнее</span>
    </router-link>
</template>

<script setup>

</script>

<style lang="scss">
.more {
    padding: 10px 15px;
    background: #149A03;
    border-radius: 10px;
    display: flex;
    width: max-content;
    gap: 15px;
    align-items: center;

    &__text {
        font-size: 20px;
        font-weight: 400;
        line-height: 30px;
        letter-spacing: 0em;
        color: white;
    }
}
</style>
