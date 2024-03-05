<template>
  <section class="catalog">
    <the-container>
      <h2 class="catalog__title">Новинки</h2>
      <div class="catalog__content">
        <page-loader v-show="!isLoaded" />
        <div class="catalog__list">
          <card-movie
            v-for="item in newMovies"
            :key="item.id"
            :id="item.id"
            :img="item.poster.url"
            :title="item.name"
            :genres="item.genres"
            :disc="item.description"
            :rating="item.rating.kp"
          />
        </div>
      </div>
    </the-container>
  </section>
</template>

<script>
import TheContainer from "@/components/layout/TheContainer.vue";
import CardMovie from "@/components/UI/CardMovie.vue";
import { mapActions, mapGetters } from "vuex";
import PageLoader from "@/components/UI/PageLoader.vue";

export default {
  components: {
    TheContainer,
    CardMovie,
    PageLoader,
  },
  methods: {
    ...mapActions("newMovies", ["getNewMovie"]),
  },
  computed: {
    ...mapGetters("newMovies", ["newMovies", "isLoaded"]),
  },
  created() {
    this.getNewMovie();
  },
};
</script>

<style lang="scss">
.catalog {
  padding: 32px;
  &__title {
    font-size: 3em;
    border-bottom: 3px solid $bg_dark-1;
  }
  &__content {
    min-height: 662px;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
    justify-content: center;
    justify-items: center;
    row-gap: 40px;
    column-gap: 20px;
    padding: 30px 0;
    @media screen and (max-width: 400px) {
      grid-template-columns: none;
    }
  }
}
</style>
