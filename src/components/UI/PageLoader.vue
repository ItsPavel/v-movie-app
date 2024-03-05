<template>
  <div class="loader">
    <div class="loader__position">
      <div class="loader__cube"></div>
      <div class="loader__cube"></div>
      <div class="loader__cube"></div>
      <div class="loader__cube"></div>
    </div>
  </div>
</template>

<style lang="scss">
.loader {
  min-height: inherit;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: $bg_loader;
  z-index: 10;
  &__position {
    display: flex;
    position: absolute;
    bottom: 360px;
  }
  &__cube {
    width: 30px;
    height: 20px;
    margin-right: 10px;
    &:nth-child(2n) {
      background-color: $color_pink;
    }
    &:nth-child(2n-1) {
      background-color: $bg_dark-1;
    }
    &:first-child {
      animation: left 1s infinite;
    }
    &:last-child {
      animation: right 1s infinite 0.5s;
    }
  }
}

@keyframes left {
  40% {
    transform: translateX(-50px);
  }
  50% {
    transform: translateX(0);
  }
}

@keyframes right {
  40% {
    transform: translateX(50px);
  }
  50% {
    transform: translateX(0);
  }
}
</style>
