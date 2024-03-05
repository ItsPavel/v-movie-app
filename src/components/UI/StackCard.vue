<template>
  <li class="item">
    <a :href="url"
      ><img :src="require(`@/assets/img/partners/${logo}.png`)" alt="partners"
    /></a>
  </li>
</template>

<script>
export default {
  props: {
    logo: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  align-items: center;
  margin-right: 20px;
  width: 100%;
  border-right: 2px solid $text_color_secondary;

  img {
    height: 100%;
    max-width: 150px;
    padding-right: 15px;
  }
}
</style>
