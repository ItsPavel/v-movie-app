<template>
  <div class="filter">
    <the-container>
      <form class="filter__list" @submit.prevent="getNewMovieList()">
        <div class="filter__search">
          <base-input
            v-model="nameFilm"
            type="text"
            placeholderInp="Поиск"
            class="filter__inp"
          />
          <button type="button" class="filter__search-btn">
            <fa icon="fa-magnifying-glass"></fa>
          </button>
        </div>
        <div class="filter__btn">
          <primary-button typeBtn="submit">Подтвердить</primary-button>
        </div>
      </form>
    </the-container>
  </div>
</template>

<script>
import TheContainer from "@/components/layout/TheContainer.vue";
import PrimaryButton from "@/components/UI/Buttons/PrimaryButton.vue";
import BaseInput from "@/components/UI/BaseInput.vue";
import { mapActions } from "vuex";

export default {
  components: { TheContainer, PrimaryButton, BaseInput },
  data() {
    return {
      nameFilm: "",
    };
  },
  methods: {
    ...mapActions("movieList", ["getMovies", "removeState", "searchInp"]),
    getNewMovieList() {
      this.removeState();
      this.searchInp(this.nameFilm);
      this.getMovies();
    },
  },
};
</script>

<style lang="scss">
.filter {
  height: 70px;
  background: $bg_dark-1;
  box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.2);
  &__list {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__search {
    position: relative;
    display: flex;
  }
  &__inp {
    max-width: 200px;
    margin-right: 20px;
  }
  &__search-btn {
    position: absolute;
    width: max-content;
    opacity: 0.5;
    right: 30px;
    top: 16px;
  }
  &__btn {
    @media screen and (max-width: 450px) {
      display: none;
    }
  }
}
</style>
