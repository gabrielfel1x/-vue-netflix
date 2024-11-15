<script setup lang="ts">
import type { Movie } from '@/types/movies'

defineProps<{
  movie: Movie
}>()
</script>

<template>
  <div class="featured" :style="{
    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
  }">
    <div class="featured-vertical">
      <div class="featured-horizontal">
        <h1>{{ movie.title }}</h1>
        <div class="featured-info">
          <div class="featured-points">{{ movie.vote_average.toFixed(1) }} pontos</div>
          <div class="featured-year">{{ new Date(movie.release_date).getFullYear() }}</div>
        </div>
        <div class="featured-description">{{ movie.overview }}</div>
        <div class="featured-buttons">
          <button class="featured-watchbutton">► Assistir</button>
          <button class="featured-mylistbutton">+ Minha Lista</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.featured {
  height: 100vh;
  background-size: cover;
  background-position: center;

  .featured-vertical {
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #111 10%, transparent 90%);

    .featured-horizontal {
      width: 100%;
      height: 100%;
      background: linear-gradient(to right, #111 30%, transparent 70%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 30px;
      padding-bottom: 150px;
      padding-top: 70px;

      h1 {
        font-size: 60px;
        font-weight: bold;
        color: #fff;
        margin: 0;

        @media (max-width: 760px) {
          font-size: 40px;
        }
      }

      .featured-info {
        font-size: 18px;
        font-weight: bold;
        margin-top: 15px;
        display: flex;
        gap: 15px;
        color: #fff;
      }

      .featured-description {
        margin-top: 15px;
        font-size: 20px;
        color: #999;
        max-width: 40%;

        @media (max-width: 760px) {
          font-size: 16px;
          max-width: 100%;
          margin-right: 30px;
        }
      }

      .featured-buttons {
        margin-top: 15px;
        display: flex;
        gap: 10px;

        button {
          font-size: 20px;
          font-weight: bold;
          padding: 12px 25px;
          border-radius: 5px;
          border: none;
          cursor: pointer;
          transition: all 0.2s;

          &.featured-watchbutton {
            background-color: #fff;
            color: #000;

            &:hover {
              background-color: rgba(255, 255, 255, 0.8);
            }
          }

          &.featured-mylistbutton {
            background-color: rgba(109, 109, 110, 0.7);
            color: #fff;

            &:hover {
              background-color: rgba(109, 109, 110, 0.4);
            }
          }

          @media (max-width: 760px) {
            font-size: 16px;
          }
        }
      }
    }
  }
}</style>