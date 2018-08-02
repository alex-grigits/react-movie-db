import React from 'react';

// import css
import './MovieCard.css';

const MovieCard = props => {
  return (
    <div className="card">
      <div className="poster">
        <img
          src={`http://image.tmdb.org/t/p/w154/${props.movie.poster_path}`}
          alt="poster"
        />
      </div>
      <div className="info">
        <h3>{props.movie.original_title}</h3>
        <p>{props.movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
