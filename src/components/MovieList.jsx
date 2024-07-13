import { useState, useEffect, useContext } from 'react';
import {
  getMovies,
  searchMovies,
  getMovieDetails,
  getGenres,
} from '../services/api';
import MovieCard from './MovieCard';
import Pagination from './Pagination';
import { WatchedMoviesContext } from '../context/WatchedMoviesContext';
import SearchBar from './SearchBar';

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [totalPages, setTotalPages] = useState(1);
  const { watchedMovies } = useContext(WatchedMoviesContext);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = query
        ? await searchMovies(query, page)
        : await getMovies(page);
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);

      // Fetch movie details for each movie to get imdb_id
      const moviesWithDetails = await Promise.all(
        response.data.results.map(async (movie) => {
          const details = await getMovieDetails(movie.id);
          return {
            ...movie,
            imdb_id: details.data.imdb_id,
            genres: details.data.genres,
          };
        })
      );
      setMovies(moviesWithDetails);
    };
    fetchMovies();
  }, [page, query]);

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            rating={movie.vote_average}
            movie={movie}
            isWatched={watchedMovies.includes(movie.id)}
          />
        ))}
      </div>

      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default MovieList;
