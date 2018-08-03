import React from 'react';

// import css
import './SearchBar.css';

const currentDate = new Date();

class SearchBar extends React.Component {
  render() {
    const { inputValue, yearValue, handleInput, handleKeyDown } = this.props;

    return (
      <div>
        <input
          type="text"
          value={inputValue}
          onInput={e => handleInput(e, 'inputValue')}
          onKeyDown={e => handleKeyDown(e, 'inputValue')}
          placeholder="Enter the movie title"
          required
        />
        <div className="input-year">
          <input
            type="number"
            value={yearValue}
            onInput={e => handleInput(e, 'searchInputYear')}
            onKeyDown={e => handleKeyDown(e, 'searchInputYear')}
            placeholder="Enter the year"
            min="1874"
            max={currentDate.getFullYear()}
          />
          <div className="input-yer__info">
            Between 1874 and {currentDate.getFullYear()}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
