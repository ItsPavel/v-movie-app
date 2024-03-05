<template>
  <nav class="burger">
    <div class="burger__btn">
      <fa
        :icon="['fas', 'bars']"
        v-show="!showNavbar"
        @click="toggleNavbar()"
      />
      <fa
        :icon="['fas', 'xmark']"
        v-show="showNavbar"
        @click="toggleNavbar()"
      />
    </div>
    <transition name="menu">
      <div class="burger__menu" v-show="showNavbar">
        <ul class="burger__links">
          <li class="burger__link" v-for="(link, i) in links" :key="i">
            <router-link :to="{ name: link.path }">{{ link.text }}</router-link>
          </li>
        </ul>
        <user-profilebtn />
      </div>
    </transition>
  </nav>
</template>

<script>
import UserProfilebtn from "@/components/UI/UserProfilebtn.vue";
export default {
  props: {
    links: {
      type: Array,
    },
  },
  data() {
    return {
      showNavbar: false,
    };
  },
  components: {
    UserProfilebtn,
  },
  methods: {
    toggleNavbar() {
      this.showNavbar = !this.showNavbar;
    },
  },
};
</script>

<style lang="scss">
.burger {
  display: none;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 900px) {
    display: flex;
  }
  &__menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 2px solid $color_pink;
    width: 280px;
    position: fixed;
    top: 70px;
    right: 0;
    bottom: 0;
    z-index: 200;
    background-color: $bg_dark-1;
    box-shadow: -24px 0px 10px -7px rgba(0, 0, 0, 0.1);
  }
  &__links {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  &__link {
    padding: 30px;
  }
}
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.5s;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}
</style>
