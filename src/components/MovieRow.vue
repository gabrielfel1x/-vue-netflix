<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Movie } from '@/types/movies'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

defineProps<{
  title: string
  movies: Movie[]
}>()
</script>

<template>
  <div class="movie-row">
    <h2>{{ title }}</h2>
    <Swiper
      :slides-per-view="6"
      :space-between="10"
      :breakpoints="{
        '320': { slidesPerView: 2, spaceBetween: 10 },
        '480': { slidesPerView: 3, spaceBetween: 10 },
        '640': { slidesPerView: 4, spaceBetween: 10 },
        '768': { slidesPerView: 5, spaceBetween: 10 },
        '1024': { slidesPerView: 6, spaceBetween: 10 },
      }"
    >
      <SwiperSlide v-for="movie in movies" :key="movie.id">
        <div class="movie-item">
          <img
            :src="`https://image.tmdb.org/t/p/w300${movie.poster_path}`"
            :alt="movie.title"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style lang="scss" scoped>
.movie-row {
  margin-bottom: 30px;
  border-radius: 30px;
  
  h2 {
    color: #fff;
    margin: 0 0 15px 20px;
    font-size: 1.5rem;
  }

  .movie-item {
    cursor: pointer;
    transition: transform 0.2s;
    border-radius: 30px;

    &:hover {
      transform: scale(1.1);
    }

    img {
      width: 100%;
      border-radius: 30px;
    }
  }
}
</style>