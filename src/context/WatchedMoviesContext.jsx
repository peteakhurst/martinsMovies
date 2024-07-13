import { createContext, useState, useEffect } from 'react';

export const WatchedMoviesContext = createContext();

const WatchedMoviesProvider = ({ children }) => {
  const [watchedMovies, setWatchedMovies] = useState(() => {
    const saved = localStorage.getItem('watchedMovies');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('watchedMovies', JSON.stringify(watchedMovies));
  }, [watchedMovies]);

  const markAsWatched = (movieId) => {
    setWatchedMovies([...watchedMovies, movieId]);
  };

  return (
    <WatchedMoviesContext.Provider value={{ watchedMovies, markAsWatched }}>
      {children}
    </WatchedMoviesContext.Provider>
  );
};

export default WatchedMoviesProvider;
