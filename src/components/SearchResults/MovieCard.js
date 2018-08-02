import React from 'react';

// import css
import './MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <div className="card">
      <img
        src={`http://image.tmdb.org/t/p/w154/${movie.poster_path}`}
        alt="Movie poster"
        style={{ width: '100%' }}
      />
      <div className="container">
        <h4>
          <b>{movie.title}</b>
        </h4>
        <p>({movie.release_date.split('-')[0]})</p>
      </div>
    </div>
  );
};

export default MovieCard;
