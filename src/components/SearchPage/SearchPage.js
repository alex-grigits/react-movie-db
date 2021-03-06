import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';

// custom components
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Pagination from '../Pagination/Pagination';

const api_key = '5874acfd11651a28c55771624f7021f4';
const current_date = new Date().toLocaleDateString();

const styles = {
  noFound: {
    marginTop: '50px',
    fontSize: '26px',
    color: '#777'
  }
};

function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

class SearchPage extends PureComponent {
  state = {
    inputValue: '',
    searchedMovies: [],
    page: 1,
    total_pages: 1,
    isLatestMoviesDisplay: true,
    searchInputYear: ''
  };

  componentDidMount() {
    this.getLatestMovies();
  }

  handleInput = (event, key) => {
    this.setState({
      [key]: event.target.value
    });
  };

  handleKeyDown = (event, key) => {
    if (event.keyCode === 13 && this.state.inputValue !== '') {
      this.setState(
        {
          [key]: event.target.value,
          page: 1
        },
        () => this.getMoviesByTitle()
      );
    }
  };

  getMoviesByTitle = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=5874acfd11651a28c55771624f7021f4&language=en-US&query=${
        this.state.inputValue
      }&page=${this.state.page}&primary_release_year=${
        this.state.searchInputYear
      }&year_optional=true`
    )
      .then(res => res.json())
      .then(data => {
        this.setState(
          {
            searchedMovies: data.results,
            total_pages: data.total_pages,
            isLatestMoviesDisplay: false
          },
          () => console.log(this.state.searchedMovies)
        );
      })
      .catch(err => console.log(err));
  };

  getLatestMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=5874acfd11651a28c55771624f7021f4&language=en-US&sort_by=primary_release_date.desc&primary_release_date.lte=${formatDate(
        current_date
      )}&page=${this.state.page}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          searchedMovies: data.results,
          total_pages: data.total_pages,
          isLatestMoviesDisplay: true
        });
      })
      .catch(err => console.log(err));
  };

  handlePrevPage = () => {
    this.setState(
      {
        page: this.state.page - 1
      },
      () => {
        this.state.isLatestMoviesDisplay
          ? this.getLatestMovies()
          : this.getMoviesByTitle();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    );
  };

  handleNextPage = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.state.isLatestMoviesDisplay
          ? this.getLatestMovies()
          : this.getMoviesByTitle();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    );
  };

  render() {
    const {
      inputValue,
      searchedMovies,
      page,
      total_pages,
      searchInputYear
    } = this.state;

    return (
      <div className="search-page">
        <div className="search-bar-container">
          <SearchBar
            handleInput={this.handleInput}
            inputValue={inputValue}
            yearValue={searchInputYear}
            handleKeyDown={this.handleKeyDown}
          />
        </div>

        {searchedMovies.length > 0 ? (
          <div>
            <Pagination
              handlePrevPage={this.handlePrevPage}
              handleNextPage={this.handleNextPage}
              page={page}
              total={total_pages}
            />
            {searchedMovies.length !== 0 && (
              <SearchResults movies={searchedMovies} match={this.props.match} />
            )}

            <Pagination
              handlePrevPage={this.handlePrevPage}
              handleNextPage={this.handleNextPage}
              page={page}
              total={total_pages}
            />
          </div>
        ) : (
          <div style={styles.noFound}>Results not found</div>
        )}
      </div>
    );
  }
}

export default SearchPage;
