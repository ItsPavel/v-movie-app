<template>
  <footer class="footer">
    <the-container>
      <div class="footer__content">
        <a href="#" class="footer__logo">
          <img src="../../assets/logo.svg" alt="logo" class="footer__img" />
        </a>
        <div class="footer__copyright">
          <small>© 2023-2024. Create by Pavel.</small>
        </div>
        <div class="footer__disc">
          <a class="footer__git">Репозиторий проекта</a>
        </div>
      </div>
    </the-container>
  </footer>
</template>

<script>
import TheContainer from "@/components/layout/TheContainer.vue";

export default {
  components: {
    TheContainer,
  },
};
</script>

<style lang="scss">
.footer {
  width: 100%;
  min-height: 100px;
  border-top: 2px solid $color_pink;
  &__content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding: 15px 0px;
  }
  &__logo {
    margin-top: 8px;
    height: 71px;
    width: 70px;
  }
  &__copyright {
    margin-top: 8px;
  }
  &__disc {
    margin-top: 8px;
    a {
      cursor: pointer;
      transition: color 0.3s;
      &:hover {
        color: $color_hover;
      }
    }
  }
}
</style>
