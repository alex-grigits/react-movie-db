import React from 'react';

// import css
import './MovieDetailPage.css';
import no_poster from '../../images/default_poster.jpg';

class MovieDetailPage extends React.Component {
  state = {
    movie: {}
  };

  componentDidMount() {
    this.getMovieDetails();
  }

  getMovieDetails = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        this.props.match.params.id
      }?api_key=5874acfd11651a28c55771624f7021f4&language=en-US`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          movie: data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    const { movie } = this.state;

    console.log(movie);

    return (
      <div className="detail-page">
        <header className="header">
          <div className="header-title">
            <h1 className="header-title__main">
              {movie.title}
              <span className="header-title__secondary">
                ({movie.release_date && movie.release_date.split('-')[0]})
              </span>
            </h1>
          </div>
          <div className="header-subtitle">
            <h3>
              Rating: {movie.vote_average}/<span>10</span>
            </h3>
          </div>
        </header>
        <main className="info">
          <div className="info-poster col">
            <img
              src={
                movie.poster_path
                  ? `http://image.tmdb.org/t/p/original/${movie.poster_path}`
                  : no_poster
              }
              alt="poster"
            />
          </div>
          <div className="info-desc col">
            <span className="info-desc__genres">
              <b>Genres: </b>
              {movie.genres &&
                movie.genres.map((genre, id, genres) => {
                  return (
                    <span key={id}>
                      {genre.name}
                      {id < genres.length - 1 ? ', ' : ''}
                    </span>
                  );
                })}
            </span>
            <p>{movie.overview}</p>
            <a href={`https://www.themoviedb.org/movie/${movie.id}`}>
              Go to the movie page
            </a>
          </div>
        </main>
      </div>
    );
  }
}

export default MovieDetailPage;
