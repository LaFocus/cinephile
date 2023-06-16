<template>
    <div class="loading">
        <div class="loading__spinner"></div>
    </div>
</template>

<script setup>

</script>

<style lang="scss">
    .loading {
        height: 100vh;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        
        &__spinner {
            width: 50px;
            height: 50px;
            border: 5px solid transparent;
            border-top: 2px solid green;
            border-radius: 50%;

            animation: loading 1s infinite ease-in-out;
        }
    }

    @keyframes loading {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>