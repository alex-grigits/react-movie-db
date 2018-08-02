import React from 'react';
import { Link } from 'react-router-dom';
// import custom components
import MovieCard from './MovieCard';
// import css
import './SearchResults.css';

const SearchResults = ({ movies, match }) => {
  return (
    <div className="results">
      {movies.map((movie, id) => {
        return (
          <Link to={`movie/${movie.id}`} key={id}>
            <MovieCard movie={movie} />
          </Link>
        );
      })}
    </div>
  );
};

export default SearchResults;
