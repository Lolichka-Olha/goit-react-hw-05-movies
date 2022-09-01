import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '09ade12554b40345f62518dc503f229d';

export const getTrending = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response;
};

export const searchMovies = async query => {
  const response = await axios.get(
    `/search/movie/?api_key=${API_KEY}&language=en-US&query=${query}&include_adult=false`
  );
  return response;
};

export const getDetails = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response;
};

export const getCast = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response;
};

export const getReviews = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return response;
};
