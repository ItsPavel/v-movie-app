<template>
  <section-background title="Каталог Фильмов" />
  <section-movie-list></section-movie-list>
</template>

<script>
import SectionBackground from "@/components/SectionBackground.vue";
import SectionMovieList from "@/components/SectionMovieList.vue";

export default {
  components: { SectionBackground, SectionMovieList },
};
</script>

<style></style>
