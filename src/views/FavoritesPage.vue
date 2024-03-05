<template>
  <section class="favorites">
    <the-container>
      <div class="favorites__movie-list">
        <card-movie
          class="favorites__card"
          v-for="movie in movieInfo"
          :key="movie.id"
          :id="movie.id"
          :img="movie.poster.url"
          :title="movie.name"
          :rating="movie.rating.kp"
          :disc="movie.description"
          ><primary-button @click="removeFromFavorites(movie.id)"
            >Удалить</primary-button
          ></card-movie
        >
      </div>
    </the-container>
  </section>
</template>

<script>
import TheContainer from "@/components/layout/TheContainer.vue";
import CardMovie from "@/components/UI/CardMovie.vue";
import { mapActions, mapGetters } from "vuex";
import PrimaryButton from "@/components/UI/Buttons/PrimaryButton.vue";
export default {
  components: { TheContainer, CardMovie, PrimaryButton },
  computed: {
    ...mapGetters("detailsMovie", ["movieInfo"]),
  },
  methods: {
    ...mapActions("auth", ["getMoviesForFavorites", "removeFromFavorites"]),
    ...mapActions("detailsMovie", ["removeState"]),
  },
  created() {
    this.getMoviesForFavorites();
  },
  unmounted() {
    this.removeState();
  },
};
</script>

<style lang="scss">
.favorites {
  min-height: 100%;
  padding: 30px 0;
  &__movie-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
    justify-content: center;
    justify-items: center;
    align-items: end;
    row-gap: 40px;
    @media screen and (max-width: 400px) {
      grid-template-columns: none;
    }
  }
  &__card {
    margin: 0 15px;
  }
}
</style>
