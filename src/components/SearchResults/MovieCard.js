import React from 'react';

// import css
import './MovieCard.css';

const MovieCard = props => {
  return (
    <div className="card">
      <h3>{props.movie.original_title}</h3>
      <p>{props.movie.release_date}</p>
    </div>
  );
};

export default MovieCard;
