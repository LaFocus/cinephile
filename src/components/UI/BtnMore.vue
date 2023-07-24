<template>
  <div class="more">
    <img src="@/assets/images/more.svg" class="more__item" alt="" />
    <span class="more__text">Подробнее</span>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.more {
  padding: 10px 15px;
  background: #149a03;
  border-radius: 10px;
  display: flex;
  width: max-content;
  gap: 15px;
  align-items: center;
  transition: 300ms;

  &__text {
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    color: white;
  }
}

.more:hover {
  background: #044901;  
}
</style>
