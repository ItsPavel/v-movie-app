<template>
  <button :type="typeBtn" class="btn" :disabled="isDisabled">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    typeBtn: {
      type: String,
      default: "button",
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 14px;
  padding: 15px 30px;
  background: $color_btn;
  color: #fff;
  border-radius: 10px;
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0px 0px 7px 5px $color_hover;
  }
}
</style>
