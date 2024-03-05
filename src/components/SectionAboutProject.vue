<template>
  <section class="project">
    <the-container>
      <div class="project__info">
        <h2 class="project__title">Cтэк:</h2>
        <ul class="project__list">
          <li>Vuejs(options api)</li>
          <li>Vuex</li>
          <li>Vue Router</li>
          <li>API Фильмов: https://api.kinopoisk.dev</li>
          <li>Firebase</li>
          <li>SCSS</li>
          <li>Адаптивная верстка</li>
        </ul>

        <div class="project__running-line">
          <ul class="project__card">
            <stack-card
              v-for="(partner, i) in partnersInfo"
              :key="i"
              :logo="partner.img"
              :url="partner.url"
            />
          </ul>
          <ul class="project__card">
            <stack-card
              v-for="(partner, i) in partnersInfo"
              :key="i"
              :logo="partner.img"
              :url="partner.url"
            />
          </ul>
        </div>
      </div>
    </the-container>
  </section>
</template>

<script>
import TheContainer from "@/components/layout/TheContainer.vue";
import StackCard from "@/components/UI/StackCard.vue";

export default {
  data() {
    return {
      partnersInfo: [
        {
          img: "vuejs",
          url: "https://dzen.ru",
        },
        {
          img: "vuex",
          url: "https://dzen.ru",
        },
        {
          img: "firebase",
          url: "https://dzen.ru",
        },
        {
          img: "vueroute",
          url: "https://dzen.ru",
        },
        {
          img: "sass",
          url: "https://dzen.ru",
        },
      ],
    };
  },
  components: {
    TheContainer,
    StackCard,
  },
};
</script>

<style lang="scss">
.project {
  padding: 60px 0 60px 0;
  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__title {
    font-size: 4em;
  }
  &__list {
    li::before {
      content: "\2022";
      color: $color_pink;
      padding-right: 6px;
      font-size: 26px;
    }
  }
  &__text {
    font-size: 16px;
    line-height: 26px;
    font-weight: 400;
    margin-top: 15px;
    width: 80%;
  }
  &__running-line {
    max-width: 800px;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    margin-top: 40px;
    background: $bg_dark-1;
    border-radius: 10px;
  }
  &__card {
    display: flex;
    padding: 15px 0;
    animation: marquee 12s linear infinite;
  }
}
// @keyframes marquee {
//   0% {
//     transform: translateX(100%);
//   }
//   100% {
//     transform: translateX(-100%);
//   }
// }
@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
