<template>
  <section class="error">
    <div class="error__card">
      <h3 class="error__title">Ошибка</h3>
      <p class="error__text">Уууупс, что-то пошло не так</p>
      <primary-button @click="toMainPage()">На главную</primary-button>
    </div>
  </section>
</template>

<script>
import PrimaryButton from "@/components/UI/Buttons/PrimaryButton.vue";
export default {
  components: { PrimaryButton },
  methods: {
    toMainPage() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style lang="scss">
.error {
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(@/assets/img/section__bg.jpg) center center / cover no-repeat;
  height: calc(100vh - 170px);
  color: $text_color_secondary;
  &__card {
    width: 100%;
    max-width: 440px;
    border-top: 2px solid $color_pink;
    border-radius: 12px;
    box-shadow: 8px 8px 30px 10px rgba(0, 0, 0, 0.61);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
  }
  &__title {
    font-size: 38px;
    text-transform: uppercase;
  }
  &__text {
    padding: 30px 0 15px;
    font-size: 18px;
  }
}
</style>
