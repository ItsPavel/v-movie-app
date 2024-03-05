<template>
  <section-background title="Подписки" />
  <section-subscribe />
  <section-feature />
</template>

<script>
import SectionSubscribe from "@/components/SectionSubscribe.vue";
import SectionBackground from "@/components/SectionBackground.vue";
import SectionFeature from "@/components/SectionFeature.vue";
export default {
  components: {
    SectionSubscribe,
    SectionBackground,
    SectionFeature,
  },
};
</script>

<style></style>
