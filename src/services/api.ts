import axios from 'axios'
import type { Movie } from '@/types/movies'

const API_KEY = '0909e54ce3091b4c403ee3be559136be'
const BASE_URL = 'https://api.themoviedb.org/3'

export const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'pt-BR',
  },
})

export const getMovies = async (endpoint: string): Promise<Movie[]> => {
  try {
    let path = endpoint
    if (endpoint !== 'trending/movie/week') {
      path = `movie/${endpoint}`
    }

    const response = await api.get(path)
    return response.data.results
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error'
    console.error(`Error fetching movies for ${endpoint}: ${errorMessage}`)
    return []
  }
}

export const searchMovies = async (query: string): Promise<Movie[]> => {
  try {
    const response = await api.get('/search/movie', {
      params: { query },
    })
    return response.data.results
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error'
    console.error(`Error searching movies: ${errorMessage}`)
    return []
  }
}
