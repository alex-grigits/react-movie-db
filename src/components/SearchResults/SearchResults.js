import React from 'react';
// import custom components
import MovieCard from './MovieCard';
// import css
import './SearchResults.css';

const SearchResults = props => {
  return (
    <div className="results">
      {props.movies.map((movie, id) => {
        return <MovieCard movie={movie} key={id} />;
      })}
    </div>
  );
};

export default SearchResults;
