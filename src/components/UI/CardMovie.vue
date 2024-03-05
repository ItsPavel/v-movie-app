<template>
  <div class="card">
    <router-link :to="{ name: 'movie', params: { id: id } }">
      <h4 class="card__title">{{ title }}</h4>
    </router-link>
    <div class="card__img">
      <router-link
        :to="{ name: 'movie', params: { id: id } }"
        class="card__link"
      >
        <img
          :src="img ?? require('@/assets/img/noposter.jpg')"
          alt="poster"
          class="img"
        />
        <fa :icon="['fas', 'circle-play']" class="icon" />
      </router-link>
    </div>
    <div class="card__info">
      <div class="card__genres" v-if="genres">
        <span class="card__genres-title">Жанр: </span>
        <span class="card__genres-text">{{ getGenres(genres) }}</span>
      </div>
      <div class="card__rating">
        <span class="card__reting-title">Рейтинг: </span
        ><rating-info :numRating="rating"></rating-info>
      </div>
      <div class="card__disc">
        <p class="card__text">
          {{ disc ?? "Нет Описания" }}
        </p>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import RatingInfo from "@/components/UI/RatingInfo.vue";

export default {
  components: {
    RatingInfo,
  },
  props: {
    img: {
      type: String,
    },
    id: {
      type: Number,
    },
    title: {
      type: String,
    },
    genres: {
      type: Array,
    },
    rating: {
      type: Number,
    },
    disc: {
      type: String,
    },
  },

  computed: {
    getGenres() {
      return (genres) => {
        let sliceGenres = genres.slice(0, 3);
        return sliceGenres.map((el) => el.name).join(", ");
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 350px;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 400px) {
    width: auto;
    min-height: auto;
  }
  &__img {
    max-height: 420px;
  }
  &__link {
    position: relative;
    display: block;
    height: 100%;
    width: 100%;
    .img {
      width: 100%;
      height: 420px;
      border-radius: 10px;
      transition: opacity 0.3s;
    }
    .icon {
      position: absolute;
      opacity: 0;
      transform: translate(-50%, -50%);
      top: 50%;
      left: 50%;
      font-size: 30px;
      color: $color_pink;
      transition: all 0.3s;
    }
    &:hover > img {
      opacity: 0.5;
    }
    &:hover > .icon {
      font-size: 60px;
      opacity: 1;
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 8px;
  }
  &__title {
    min-height: 60px;
    text-align: center;
    color: $text_color_primary;
    letter-spacing: -0.5px;
    font-size: 30px;
    font-weight: 400;
    cursor: pointer;
    transition: color 0.3s;
    &:hover {
      color: $color_pink;
    }
  }
  &__genres {
    display: inline-block;
    color: $color_pink;
    margin-bottom: 10px;
  }
  &__genres-title,
  &__reting-title {
    color: $text_color_secondary;
  }
  &__genres-text {
    font-size: 15px;
  }
  &__rating {
    display: flex;
    margin-bottom: 2px;
  }
  &__reting-title {
    margin-right: 8px;
  }
  &__disc {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    margin-top: 5px;
    overflow: hidden;
  }
  &__text {
    line-height: 20px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
}
</style>
