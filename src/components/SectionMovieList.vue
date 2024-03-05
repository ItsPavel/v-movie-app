<template>
  <section class="movie">
    <page-loader v-show="isLoaded" class="movie__loader" />

    <the-container>
      <filter-block></filter-block>
      <error-massage class="movie__not-found" v-if="!movieOnPageLength">{{
        errorMsg
      }}</error-massage>
      <div class="movie__content" v-else>
        <div class="pos">
          <div class="movie__list">
            <card-movie
              v-for="item in moviesOnPage"
              :key="item.id"
              :id="item.id"
              :img="item.poster.url"
              :title="item.name"
              :genres="item.genres"
              :disc="item.description"
              :rating="item.rating.kp"
            />
          </div>
          <div class="movie__paginator">
            <primary-button class="movie__paginator-btn" @click="showMore()"
              >Показать ещё</primary-button
            >
          </div>
        </div>
      </div>
    </the-container>
  </section>
</template>

<script>
// :isDisabled="isLoaded"
import { mapActions, mapGetters } from "vuex";
import TheContainer from "@/components/layout/TheContainer.vue";
import PrimaryButton from "@/components/UI/Buttons/PrimaryButton.vue";
import CardMovie from "@/components/UI/CardMovie.vue";
import FilterBlock from "@/components/UI/FiltersBlock.vue";
import PageLoader from "@/components/UI/PageLoader.vue";
import ErrorMassage from "@/components/UI/ErrorMassage.vue";
export default {
  components: {
    TheContainer,
    CardMovie,
    PrimaryButton,
    PageLoader,
    FilterBlock,
    ErrorMassage,
  },
  methods: {
    ...mapActions("movieList", ["getMovies", "removeState", "nextPage"]),
    showMore() {
      this.nextPage();
      this.getMovies();
    },
  },
  computed: {
    ...mapGetters("movieList", [
      "moviesOnPage",
      "isLoaded",
      "errorMsg",
      "movieOnPageLength",
    ]),
  },
  mounted() {
    this.getMovies();
  },
  unmounted() {
    this.removeState();
  },
};
</script>

<style lang="scss">
.movie {
  position: relative;
  min-height: 633px;
  padding-bottom: 15px;
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    justify-content: center;
    justify-items: center;
    align-items: end;
    row-gap: 40px;
    padding: 30px 0;
    @media screen and (max-width: 400px) {
      grid-template-columns: none;
    }
  }
  &__loader {
    min-height: calc(100vh - 380px);
    position: absolute;
    height: 100%;
    top: 0;
  }
  &__not-found {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
  &__paginator {
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
    z-index: 12312;
  }
}
</style>
