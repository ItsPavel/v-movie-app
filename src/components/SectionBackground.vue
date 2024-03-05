<template>
  <section class="background">
    <the-container>
      <h2 class="background__title">{{ title }}</h2>
    </the-container>
  </section>
</template>

<script>
import TheContainer from "./layout/TheContainer.vue";
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  components: { TheContainer },
};
</script>

<style lang="scss">
.background {
  width: 100%;
  height: 200px;
  background: url(@/assets/img/section__bg.jpg) center center / cover no-repeat;
  border-bottom: 2px solid $color_pink;
  &__title {
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 42px;
  }
}
</style>
