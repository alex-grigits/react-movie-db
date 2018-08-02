import React from 'react';

// import css
import './SearchBar.css';

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
          placeholder="Enter the movie title for search"
          required
        />
        <input
          type="number"
          value={yearValue}
          onInput={e => handleInput(e, 'searchInputYear')}
          onKeyDown={e => handleKeyDown(e, 'searchInputYear')}
          min="1874"
          max="2026"
        />
      </div>
    );
  }
}

export default SearchBar;
