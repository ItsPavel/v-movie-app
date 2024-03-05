<template>
  <div class="mask" @click.self="close()">
    <form class="modal" @submit.prevent="onSubmit()">
      <transition name="error"> </transition>
      <div class="modal__xmark">
        <fa :icon="['fas', 'xmark']" class="icon" @click="close()" />
      </div>
      <div class="modal__container">
        <h3 class="modal__title">Вход</h3>
        <div v-show="isOpen" class="modal__error">
          <p>Неправильные данные</p>
        </div>
        <div class="modal__sign">
          <base-input
            typeInp="email"
            placeholderInp="Почта"
            v-model="email"
            class="modal__inp"
          />
          <base-input
            typeInp="password"
            placeholderInp="Пароль"
            v-model="password"
            class="modal__inp"
          />
        </div>
        <!-- <router-link
          :to="{ name: 'signup' }"
          @click="close()"
          class="modal__reg"
        >
          <span class="reg">Зарегистрироваться</span></router-link
        > -->
        <primary-button typeBtn="submit" class="modal__btn"
          >Войти</primary-button
        >
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BaseInput from "@/components/UI/BaseInput.vue";
import PrimaryButton from "@/components/UI/Buttons/PrimaryButton.vue";
export default {
  components: {
    BaseInput,
    PrimaryButton,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions("modalStore", ["close"]),
    onSubmit() {
      const formData = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("auth/signin", formData);
      this.email = "";
      this.password = "";
    },
  },
  computed: {
    ...mapGetters("auth", ["isOpen"]),
  },
};
</script>

<style lang="scss" scoped>
.mask {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}
.modal {
  position: relative;
  min-height: 400px;
  height: max-content;
  width: max-content;
  z-index: 2001;
  background: $bg_dark-2;
  border-top: 2px solid $color_pink;
  border-radius: 8px;
  &__error {
    text-align: center;
    color: $color_warning;
  }
  &__xmark {
    text-align: end;
    .icon {
      font-size: 22px;
      padding: 12px 15px 0 0;
      cursor: pointer;
      &:hover {
        color: $color_pink;
      }
    }
  }
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    min-height: inherit;
    padding: 0px 70px;
  }
  &__title {
    padding-bottom: 15px;
    border-bottom: 1px solid $color_pink;
    font-size: 38px;
    text-align: center;
  }
  &__sign {
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: column;
  }
  &__inp {
    background: $bg_dark-1;
    margin: 5px 0;
  }
  &__reg {
    display: flex;
    justify-content: center;
  }
}
.error-enter-active {
  animation: shaking 0.3s;
}
@keyframes shaking {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(5px);
  }
  50% {
    transform: translateX(-5px);
  }
  75% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
}
// .reg {
//   color: $text_color_primary;
//   font-size: 20px;
//   transition: color 0.3s;
//   &:hover {
//     color: $color_hover;
//     border-bottom: 1px dashed $color_hover;
//     margin-bottom: -1px;
//   }
// }
</style>
