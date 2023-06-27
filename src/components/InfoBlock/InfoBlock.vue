<template>
    <div class="main__info">
        <img src="@/assets/images/close.svg" class="main__info-close" @click="$emit('close')" alt="">
        <div class="main__info-block">
            <img src="@/assets/images/block.jpg" class="main__info-img" alt="">
            <div class="main__info-content">
                <div class="main__info-content-block">
                    <h2 class="main__info-content-title">Шан-Чи и легенда десяти колец</h2>
                    <p class="main__info-content-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh
                        bibendum nec, pulvinar id in in ac nisl semper. Condimentum tellus ac integer condimentum. Amet,
                        vitae dictum convallis dignissim. Lacus, suscipit sagittis, adipiscing metus, risus convallis sit...
                    </p>
                    <p class="main__info-content-date">
                        <span>2023, &nbsp;</span>
                        <span>боевик, приключения, фэнтези</span>
                    </p>
                </div>
                <BtnMore />
            </div>
        </div>
    </div>
</template>

<script setup>
import { imgUrlFull } from '@/static'

const props = defineProps(['current', 'type'])
</script>
