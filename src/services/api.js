import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const getMovies = (page = 1) => {
  return axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`);
};

export const searchMovies = (query, page = 1) => {
  return axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`
  );
};

export const getMovieDetails = (movieId) => {
  return axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
};

export const getGenres = () => {
  return axios.get(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`);
};
