<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getMovies } from '@/services/api'
import type { Movie } from '@/types/movies'
import Header from '@/components/Header.vue'
import MovieRow from '@/components/MovieRow.vue'
import FeaturedMovie from '@/components/FeaturedMovies.vue'

const movieLists = ref<{ title: string; movies: Movie[] }[]>([])
const featuredMovie = ref<Movie | null>(null)

onMounted(async () => {
  const [trending, popular, topRated, upcoming] = await Promise.all([
    getMovies('trending/movie/week'),
    getMovies('popular'),
    getMovies('top_rated'),
    getMovies('upcoming')
  ])

  movieLists.value = [
    { title: 'Em alta', movies: trending },
    { title: 'Populares', movies: popular },
    { title: 'Mais votados', movies: topRated },
    { title: 'Em breve', movies: upcoming }
  ]

  if (trending.length > 0) {
    featuredMovie.value = trending[Math.floor(Math.random() * trending.length)]
  }
})
</script>

<template>
  <div class="app">
    <Header />
    <FeaturedMovie v-if="featuredMovie" :movie="featuredMovie" />
    
    <div class="lists">
      <MovieRow
        v-for="(list, index) in movieLists"
        :key="index"
        :title="list.title"
        :movies="list.movies"
      />
    </div>
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #111;
  color: #fff;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.lists {
  padding: 20px;
}

.app {
  .lists {
    margin-top: -150px;
  }
}
</style>