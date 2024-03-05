<template>
  <div class="user">
    <div class="header__user" v-if="isLoggedIn">
      <div class="dropdown">
        <span class="dropdown__user-name"
          >Привет, {{ firestoreData.name }}
        </span>
        <fa :icon="['fas', 'caret-down']" />
        <ul class="dropdown__content">
          <li class="dropdown__item" v-for="(link, i) in userLinks" :key="i">
            <router-link :to="{ name: link.path }">
              {{ link.text }}
            </router-link>
          </li>
          <hr />
          <li class="dropdown__item dropdown__signout" @click="logout()">
            Выйти
          </li>
        </ul>
      </div>
    </div>
    <div class="header__actions" v-else>
      <primary-button type="button" @click="open()" class="header__signin"
        >Войти</primary-button
      >
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import PrimaryButton from "@/components/UI/Buttons/PrimaryButton.vue";
export default {
  components: {
    PrimaryButton,
  },
  data() {
    return {
      userLinks: [
        {
          text: "Избранное",
          path: "favorites",
        },
      ],
    };
  },
  methods: {
    ...mapActions("modalStore", ["open"]),
    ...mapActions("auth", ["logout"]),
  },
  computed: {
    ...mapGetters("auth", ["isLoggedIn"]),
    ...mapGetters("auth", ["firestoreData"]),
  },
};
</script>

<style lang="scss">
.dropdown {
  display: inline-block;
}
.dropdown__content {
  opacity: 0;
  visibility: hidden;
  position: absolute;
  background-color: $bg_dark-2;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 10;
  transition: opacity 0.3s, visibility 0s linear 0.3s;
}
.dropdown:hover .dropdown__content {
  opacity: 1;
  visibility: visible;
  transition-delay: 0s;
}
.dropdown__user-name {
  transition: all 0.3s;
}
.dropdown__user-name:hover {
  color: $color_hover;
  cursor: pointer;
}
.dropdown__signout {
  cursor: pointer;
  &:hover {
    color: $color_hover;
  }
}
</style>
