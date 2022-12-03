import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '08cfb1cba341ef968995af439d190569';

export const fetchTrending = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}`
  );
  return data;
};
