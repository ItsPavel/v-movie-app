<template>
  <section class="registration">
    <form class="registration__form">
      <div class="registration__data">
        <base-input
          typeInp="Email"
          placeholderInp="Введите почту"
          v-model="email"
          textLabel="Почта"
          ind="email"
          class="registration__inp"
        />
        <base-input
          typeInp="Password"
          placeholderInp="Введите Пароль"
          v-model="password"
          textLabel="Пароль"
          ind="password"
          class="registration__inp"
        />
        <base-input
          typeInp="Password"
          placeholderInp="Повторите Пароль"
          v-model="passwordConfirm"
          textLabel="Повторите Пароль"
          ind="passwordTo"
          class="registration__inp"
        />
      </div>
      <div class="registration__btn">
        <primary-button>Зарегистрироваться</primary-button>
      </div>
    </form>
  </section>
</template>

<script>
import BaseInput from "@/components/UI/BaseInput.vue";
import PrimaryButton from "@/components/UI/Buttons/PrimaryButton.vue";
export default {
  components: { BaseInput, PrimaryButton },
  data() {
    return {
      email: "",
      password: "",
      passwordConfirm: "",
    };
  },
  computed:{
    isPasswordMatch(){
      return this.password === this.passwordConfirm
    }
  }
};
</script>

<style lang="scss">
.registration {
  min-height: inherit;
  background-image: url("@/assets/img/section__bg.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  &__form {
    min-height: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  &__data {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  }
}
</style>
