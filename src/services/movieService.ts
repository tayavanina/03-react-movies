import axios from "axios";
import type { Movie } from "../types/movie";
interface MovieHttpResponse {
  results: Movie[];
}
const myKey = import.meta.env.VITE_TMDB_TOKEN;

export const fetchMovies = async (title: string): Promise<Movie[]> => {
  const response = await axios.get<MovieHttpResponse>(
    "https://api.themoviedb.org/3/search/movie",
    {
      params: {
        query: title,
      },
      headers: {
        Authorization: `Bearer ${myKey}`,
      },
    },
  );
  return response.data.results;
};

export default fetchMovies;
