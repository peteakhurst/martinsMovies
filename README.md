# Martin's Movies

Martin's Movies is a React application that allows users to browse and search for movies, mark them as watched, and view details about each movie. The application uses The Movie Database (TMDB) API to fetch movie data.

## Features

- Paginated listing of movies
- Search movies by keyword
- Mark movies as watched (persists across browser sessions)
- Display movie genres (first two genres)
- Link to IMDB page if available
- Responsive design using TailwindCSS

## Installation

To get started with the project, clone the repository and install the dependencies.

```bash
git clone https://github.com/yourusername/martins-movies.git
cd martins-movies
npm install
```

## Create a .env file in the root directory and add your TMDB API key. 

```VITE_TMDB_API_KEY=your_tmdb_api_key_here``` 

## Running the Application

To run the application locally, use the following command:
```npm run dev```
