/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { WatchedMoviesContext } from '../context/WatchedMoviesContext';
import { FaPlay, FaStar } from 'react-icons/fa6';

const MovieCard = ({ movie, isWatched }) => {
  const { markAsWatched } = useContext(WatchedMoviesContext);
  const imdbUrl = movie.imdb_id
    ? `https://www.imdb.com/title/${movie.imdb_id}`
    : '#';

  const genreNames = movie.genres
    ? movie.genres
        .slice(0, 2)
        .map((genre) => genre.name)
        .join(', ')
    : '';

  return (
    <div className='rounded overflow-hidden shadow-lg bg-white flex flex-col relative transition-all hover:cursor-pointer hover:-translate-y-2 mb-3'>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className='max-h-[350px] w-full object-cover'
      />
      <div className='absolute top-[22rem] -translate-x-1/2 -translate-y-1/2 -right-2 rounded-full bg-[#9352b3] h-[60px] w-[60px] shadow-p-shadow'>
        <FaPlay className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white' />
      </div>
      <div className='p-8'>
        <h3 className='font-semibold text-3xl'>{movie.title}</h3>
        <div className='flex justify-between py-2.5 font-light'>
          <p className='flex text-sm align-middle items-center font-light'>
            <FaStar className='text-yellow-400' /> {movie.vote_average}
          </p>
          {genreNames && (
            <p key={genreNames.id} className='text-sm font-light'>
              {genreNames}
            </p>
          )}
        </div>
        <p className='text-gray-700 text-base truncate'>{movie.overview}</p>
        <a
          href={imdbUrl}
          target='_blank'
          rel='noopener noreferrer'
          className='text-blue-500 py-6'
        >
          Read More
        </a>
      </div>
      <div className='px-6 pt-4 pb-2 mt-auto mb-8'>
        <button
          onClick={() => markAsWatched(movie.id)}
          className={`p-2 w-1/2 rounded-lg ${
            isWatched ? 'bg-gray-300' : 'bg-[#9352b3] text-white'
          }`}
          disabled={isWatched}
        >
          {isWatched ? 'Watched' : 'Not Watched'}
        </button>
      </div>
    </div>
    /* <div className='bg-white rounded-lg shadow-lg overflow-hidden relative max-w-full mx-auto'>

      <div className='flex flex-col'>
        <div className=''>
          <h3 className='p-8 font-semibold text-3xl'>{movie.title}</h3>
          <div className='flex justify-between py-2.5 font-light p-8'>
            <p className='flex text-sm align-middle items-center font-light '>
              <FaStar className='text-yellow-400' /> {movie.vote_average}
            </p>
            {genreNames && (
              <p key={genreNames.id} className='text-sm font-light'>
                {genreNames}
              </p>
            )}
          </div>
          <p className='text-base font-light p-8'>{movie.overview}</p>
          <a
            href={imdbUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-500 p-8'
          >
            Read More
          </a>
        </div>
        <div className='mt-auto p-8'>
          <button
            onClick={() => markAsWatched(movie.id)}
            className={`p-2 w-full ${
              isWatched ? 'bg-gray-300' : 'bg-blue-500 text-white'
            }`}
            disabled={isWatched}
          >
            {isWatched ? 'Watched' : 'Mark as Watched'}
          </button>
        </div>
      </div>
    </div> */
  );
};

export default MovieCard;
