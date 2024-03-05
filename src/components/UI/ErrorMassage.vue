<template>
  <div class="error-msg">
    <h2 class="error-msg__title"><slot></slot></h2>
  </div>
</template>

<style lang="scss" scoped>
.error-msg {
  &__title {
    display: flex;
    height: 100%;
    font-size: 46px;
  }
}
</style>
