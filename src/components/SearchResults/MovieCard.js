import React from 'react';

// import css
import './MovieCard.css';
import no_poster from '../../images/default_poster.jpg';

const MovieCard = ({ movie }) => {
  const poster_src = movie.poster_path
    ? `http://image.tmdb.org/t/p/w342/${movie.poster_path}`
    : no_poster;

  return (
    <div className="card">
      <img src={poster_src} alt="Movie poster" style={{ width: '100%' }} />
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
