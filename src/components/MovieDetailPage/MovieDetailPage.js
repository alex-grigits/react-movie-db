import React from 'react';

// import css
import './MovieDetailPage.css';

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
        this.setState(
          {
            movie: data
          },
          () => console.log(this.state)
        );
      })
      .catch(err => console.log(err));
  };

  render() {
    const { movie } = this.state;

    return (
      <div className="detail-page">
        <div className="detail-page-poster">
          <img
            src={`http://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt="poster"
          />
        </div>
        <div className="detail-page-info">
          <h1>{movie.title}</h1>
          <h3>{movie.vote_count}</h3>
          <p>{movie.overview}</p>
        </div>
      </div>
    );
  }
}

export default MovieDetailPage;
