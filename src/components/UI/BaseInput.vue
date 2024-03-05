<template>
  <div class="group">
    <label :for="ind" v-if="textLabel" class="group__label"
      >{{ textLabel }}
    </label>
    <input
      :id="ind"
      :type="typeInp"
      :placeholder="placeholderInp"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
      class="group__input"
    />
  </div>
</template>

<script>
export default {
  props: {
    typeInp: {
      type: String,
      default: "text",
    },
    placeholderInp: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      required: true,
    },
    textLabel: {
      type: String,
    },
    ind: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.group {
  display: flex;
  &__label {
    color: $color_pink;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    max-width: 260px;
  }
  &__input {
    background: $bg_dark-2;
    width: 100%;
    height: 50px;
    padding-right: 30px;
    padding-left: 10px;
    border-radius: 8px;
    transition: 0.3s;
    outline: none;
    border: 2px solid $text_color_secondary;
    &:focus {
      border: 2px solid $color_hover;
    }
    &::placeholder {
      font-weight: 600;
    }
  }
}
</style>
