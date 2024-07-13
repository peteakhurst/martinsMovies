import MovieList from './components/MovieList';
import WatchedMoviesProvider from './context/WatchedMoviesContext';
import NavBar from './components/sections/NavBar';
import Header from './components/sections/Header';
import './App.css';

function App() {
  return (
    <>
      <>
        <NavBar />

        <Header />
        <WatchedMoviesProvider>
          <div className='min-h-screen bg-gray-100'>
            <h1 className='text-center text-4xl font-bold py-4'>
              🎥 Martin&apos;s Movies
            </h1>
            <div className='container mx-auto'>
              <MovieList />
            </div>
          </div>
        </WatchedMoviesProvider>
      </>
    </>
  );
}

export default App;
