<template>
  <section-slider></section-slider>
  <section-new-items></section-new-items>
</template>

<script>
import SectionNewItems from "@/components/SectionNewMovies.vue";

import SectionSlider from "@/components/SectionSlider.vue";

export default {
  components: {
    SectionSlider,
    SectionNewItems,
  },
};
</script>
