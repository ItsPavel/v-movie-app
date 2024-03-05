<template>
  <section class="details">
    <page-loader class="details__loader" v-if="!isLoaded"></page-loader>
    <div
      class="details__background"
      :style="{
        'background-image':
          ' linear-gradient(270deg,rgba(0, 0, 0, 70%),rgba(0, 0, 0, 95%)), url(' +
          movieInfo[0]?.backdrop?.url +
          ')',
      }"
      v-else
    >
      <the-container>
        <div class="details__row">
          <div class="details__left">
            <div class="details__content">
              <img
                :src="
                  movieInfo[0]?.poster?.url ??
                  require('@/assets/img/noposter.jpg')
                "
                alt="poster"
                class="details__img"
              />
              <div class="details__meta-info">
                <div>
                  <h2 class="details__title">{{ movieInfo[0]?.name }}</h2>
                  <div class="details__rating">
                    <rating-info :numRating="movieInfo[0]?.rating?.kp" />
                    <div class="details__age" v-if="movieInfo[0]?.ageRating">
                      {{ movieInfo[0].ageRating }}+
                    </div>
                  </div>
                </div>
                <ul class="details__first-meta">
                  <i class="first-meta__item"
                    >Жанр:
                    <span class="text">
                      {{
                        movieInfo[0]?.genres
                          ? separator(movieInfo[0]?.genres)
                          : "Нет информации"
                      }}</span
                    >
                  </i>
                  <i class="first-meta__item"
                    >Длительность:
                    <span class="text"
                      >{{ getDurationFilm(movieInfo[0]?.movieLength) }}
                    </span>
                  </i>
                  <i class="first-meta__item"
                    >Страна:
                    <span class="text">{{
                      movieInfo[0]?.countries
                        ? separator(movieInfo[0]?.countries)
                        : "Нет информации"
                    }}</span>
                  </i>
                </ul>
                <ul class="details__second-meta">
                  <i class="first-meta__item"
                    >Режиссеры:
                    <span class="text">{{
                      getPersons(movieInfo[0]?.persons, "режиссеры")
                    }}</span></i
                  >
                  <i class="first-meta__item"
                    >Актеры:
                    <span class="text">
                      {{ getPersons(movieInfo[0]?.persons, "актеры") }}
                    </span>
                  </i>
                </ul>
              </div>
            </div>
            <div class="details__disc">
              {{ movieInfo[0]?.description ?? "Нет Описания" }}
            </div>
          </div>
          <div class="details__right">
            <iframe
              class="details__trailer"
              v-show="movieInfo[0]?.videos?.trailers"
              :src="movieInfo[0]?.videos?.trailers[1].url"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div class="details__btn">
              <primary-button @click="addToFavorites(movieInfo[0].id)"
                >В Избранное</primary-button
              >
            </div>
          </div>
        </div>
      </the-container>
    </div>
  </section>
</template>

<script>
import TheContainer from "@/components/layout/TheContainer.vue";
import RatingInfo from "@/components/UI/RatingInfo.vue";
import { mapActions, mapGetters } from "vuex";
import PageLoader from "@/components/UI/PageLoader.vue";
import PrimaryButton from "@/components/UI/Buttons/PrimaryButton.vue";
export default {
  components: { RatingInfo, TheContainer, PageLoader, PrimaryButton },
  computed: {
    ...mapGetters("detailsMovie", ["movieInfo", "isLoaded"]),
    id() {
      return this.$route.params.id;
    },
    separator() {
      return (arr) => {
        console.log(typeof arr, "separator", arr);
        if (arr.length > 0) {
          return arr.map((el) => el.name).join(", ");
        } else {
          return "Нет Информации";
        }
      };
    },
    getPersons() {
      return (arr, profession) => {
        if (Array.isArray(arr)) {
          let acters = arr.filter((el) => el.profession == profession);
          return this.separator(acters);
        } else {
          return "Нет Информации";
        }
      };
    },
    getDurationFilm() {
      return (min) => (min ? `${min} минут` : "Нет Информации");
    },
  },
  methods: {
    ...mapActions("detailsMovie", ["getMovieInfo", "removeState"]),
    ...mapActions("auth", ["addToFavorites"]),
  },
  created() {
    console.log(this.movieInfo);
    this.getMovieInfo(this.$route.params.id);
  },
  unmounted() {
    this.removeState();
  },
};
</script>

<style lang="scss">
.details {
  min-height: calc(100vh - 70px - 100px);
  &__background {
    min-height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
  &__title {
    font-size: 46px;
    line-height: 50px;
    margin-bottom: 5px;
    @media screen and (max-width: 600px) {
      text-align: center;
    }
  }
  &__row {
    display: flex;
    flex-wrap: wrap;
    margin: 20px 0;
    height: 100%;
    align-content: center;
    align-items: center;
    @media screen and (max-width: 1200px) {
      flex-direction: column;
    }
    .text {
      color: $color_pink;
    }
  }
  &__left {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    @media screen and (max-width: 1200px) {
      width: 100%;
      margin-bottom: 30px;
    }
  }
  &__content {
    display: flex;
    @media screen and (max-width: 600px) {
      flex-direction: column;
      align-items: center;
    }
  }
  &__disc {
    max-height: 140px;
    margin-top: 20px;
    padding-right: 10px;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 5px;
      background: inherit;
      background: rgba(104, 104, 104, 0.178);
    }
    &::-webkit-scrollbar-thumb {
      cursor: pointer;
      width: 5px;
      background-color: $color_pink;
    }
  }
  &__img {
    width: 250px;
    border: 1px solid $text_color_secondary;
    border-radius: 12px;
  }
  &__right {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 50%;
    @media screen and (max-width: 1200px) {
      width: 100%;
    }
  }
  &__rating {
    display: flex;
    align-items: center;
  }
  &__age {
    color: $text_color_secondary;
    text-align: center;
    margin-left: 10px;
    border: 1px solid $text_color_secondary;
    border-radius: 4px;
    padding: 3px;
  }
  &__meta-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 10px;
  }
  &__first-meta {
    display: flex;
    flex-direction: column;
  }
  &__second-meta {
    display: flex;
    flex-direction: column;
  }
  &__trailer {
    width: 100%;
    height: 315px;
    max-width: 560px;
  }
  &__btn {
    margin-top: 40px;
  }
}
.first-meta__item {
  padding: 5px 0;
}
</style>
