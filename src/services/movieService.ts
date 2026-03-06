import axios from "axios";
import type { Movie } from "../types/movie";

const API_URL = "https://api.themoviedb.org/3/search/movie";
const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

interface MovieApiResponse {
  results: Movie[];
  page: number;
  total_results: number;
  total_pages: number;
}

export async function fetchMovies(query: string): Promise<Movie[]> {
  const response = await axios.get<MovieApiResponse>(API_URL, {
    params: { query },
    headers: { Authorization: `Bearer ${TOKEN}` },
  });

  return response.data.results;
}