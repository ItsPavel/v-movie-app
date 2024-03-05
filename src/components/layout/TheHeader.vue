<template>
  <header class="header">
    <the-container>
      <div class="header__content">
        <a href="#" class="header__logo">
          <img src="../../assets/logo.svg" alt="logo" class="header__img" />
        </a>
        <burger-menu :links="links" />
        <div class="header__menu">
          <nav class="header__nav">
            <ul class="header__list">
              <li class="header__list-item" v-for="(link, i) in links" :key="i">
                <router-link :to="{ name: link.path }" class="header__link">{{
                  link.text
                }}</router-link>
              </li>
            </ul>
            <user-profilebtn />
          </nav>
        </div>
      </div>
    </the-container>
  </header>
</template>

<script>
import TheContainer from "./TheContainer.vue";
import BurgerMenu from "@/components/UI/BurgerMenu.vue";
import UserProfilebtn from "@/components/UI/UserProfilebtn.vue";

export default {
  data() {
    return {
      links: [
        { text: "Главная", path: "home" },
        { text: "Каталог", path: "catalog" },
        { text: "О проекте", path: "about" },
      ],
    };
  },
  components: { TheContainer, BurgerMenu, UserProfilebtn },
};
</script>

<style lang="scss">
.header {
  position: fixed;
  width: 100%;
  height: 70px;

  background: $bg_dark-1;
  box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.2);
  z-index: 1000;

  &__content {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media screen and (max-width: 900px) {
      justify-content: space-between;
    }
  }
  &__content a {
    color: $text_color_primary;
    transition: color 0.3s;
    &:hover {
      color: $color_hover;
    }
  }
  &__logo {
    height: 71px;
    width: 70px;
  }
  &__menu {
    @media screen and (max-width: 900px) {
      display: none;
    }
  }
  &__img {
    height: 71px;
    width: 70px;
  }
  &__nav {
    height: 100%;
    display: flex;
    align-items: center;
  }
  &__list {
    display: flex;
  }
  &__list-item {
    margin-right: 40px;
  }
  &__link {
    height: 100%;
    &--active {
      color: $color_hover !important;
    }
  }
  &__actions {
    display: flex;
  }
  &__reg {
    margin-right: 10px;
  }
}
</style>
