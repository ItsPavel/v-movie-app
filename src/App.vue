<template>
  <the-header />
  <the-main class="main" />
  <the-footer />
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import TheMain from "./components/layout/TheMain.vue";
import TheFooter from "./components/layout/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheMain,
    TheFooter,
  },
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.main {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 70px;
  box-sizing: border-box;
}
</style>
