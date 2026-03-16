import axios from "axios";
import type { Movie } from "../types/movie";

const API_URL = "https://api.themoviedb.org/3/search/movie";
const API_KEY = import.meta.env.VITE_TMDB_KEY;

export interface MovieApiResponse {
  results: Movie[];
  page: number;
  total_results: number;
  total_pages: number;
}

export async function fetchMovies(
  query: string,
  page: number
): Promise<MovieApiResponse> {
  const response = await axios.get<MovieApiResponse>(API_URL, {
    params: {
      query,
      page,
      api_key: API_KEY,
    },
  });

  return response.data;
}