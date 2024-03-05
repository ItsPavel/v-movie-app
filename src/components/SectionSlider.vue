<template>
  <section class="slider">
    <page-loader v-if="!isLoaded" />
    <the-container class="container" v-else>
      <swiper
        :modules="modules"
        :pagination="{ clickable: true }"
        :grabCursor="true"
        :loop="true"
        :autoplay="{
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          delay: 2500,
        }"
      >
        <swiper-slide v-for="(item, i) in topMovies" :key="i">
          <div
            class="slider__bg"
            :style="{
              'background-image':
                ' linear-gradient(270deg,rgba(0, 0, 0, 70%),rgba(0, 0, 0, 95%)), url(' +
                item.poster.url +
                ')',
            }"
          >
            <div class="slider__content">
              <div class="slider__title">
                <h3 class="slider__title-text">
                  {{ item.name }}
                </h3>
                <rating-info :numRating="item.rating.kp"></rating-info>
              </div>
              <p class="slider__text">
                {{ item.description }}
              </p>
              <div class="slider__genres">
                <span> {{ getGenres(item.genres) }} </span>
              </div>
              <div class="slider__btn">
                <router-link :to="{ name: 'movie', params: { id: item.id } }">
                  <primary-button>Смотреть</primary-button>
                </router-link>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </the-container>
  </section>
</template>

<script>
import { Pagination, EffectCards, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { mapActions, mapGetters } from "vuex";
import TheContainer from "@/components/layout/TheContainer.vue";
import PrimaryButton from "@/components/UI/Buttons/PrimaryButton.vue";
import RatingInfo from "@/components/UI/RatingInfo.vue";
import PageLoader from "@/components/UI/PageLoader.vue";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default {
  components: {
    TheContainer,
    PrimaryButton,
    RatingInfo,
    Swiper,
    SwiperSlide,
    PageLoader,
  },
  data() {
    return {
      modules: [Pagination, EffectCards, Autoplay],
    };
  },
  methods: {
    ...mapActions("topMovies", ["getTopMovies"]),
  },
  computed: {
    ...mapGetters("topMovies", ["topMovies", "isLoaded"]),
    getGenres() {
      return (genres) => genres.map((el) => el.name).join(", ");
    },
  },
  created() {
    this.getTopMovies();
  },
};
</script>

<style lang="scss">
.slider {
  display: flex;
  align-items: center;
  min-height: 662px;
  width: 100%;
  line-height: 26px;
  border-bottom: 2px solid $color_pink;

  &__bg {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    height: 560px;
    border-radius: 20px;
    margin: 0 10px;
  }
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    z-index: 3;
    height: 100%;
    padding: 0 120px;
    @media screen and (max-width: 900px) {
      padding: 0 20px;
    }
  }
  &__title {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
  &__title-text {
    font-size: 36px;
    font-weight: 600;
    margin-right: 8px;
    margin-bottom: 5px;
  }
  &__text {
    width: 50%;
    font-size: 16px;
    color: $text_color_secondary;
    margin-bottom: 20px;
    @media screen and (max-width: 410px) {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    @media screen and (max-width: 900px) {
      width: 100%;
    }
  }
  &__genres {
    color: $color_pink;
    margin-bottom: 20px;
  }
  &__pagination {
    margin-top: 50px;
  }
}
.swiper {
  display: flex;
}
.swiper-wrapper {
  display: flex;
}
.container {
  overflow: hidden;
}
.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
  background: #fff;
}
.swiper-pagination-bullet-active {
  background: $color_pink;
}
</style>
