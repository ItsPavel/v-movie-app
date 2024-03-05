<template>
  <div class="rating">
    <fa :icon="['fass', 'star']" class="rating__icon" />
    <p class="rating__text">{{ rating }}</p>
  </div>
</template>

<script>
export default {
  props: {
    numRating: {
      type: Number,
    },
  },
  computed: {
    rating() {
      if (this.numRating) {
        return this.numRating.toFixed(1);
      } else {
        return "..?";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.rating {
  height: 100%;
  display: flex;
  align-items: center;
  &__icon {
    font-size: 16px;
    color: $color_pink;
  }
  &__text {
    font-size: 16px;
    margin-left: 6px;
  }
}
</style>
