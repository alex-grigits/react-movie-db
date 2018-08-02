import React from 'react';

// import css
import './SearchBar.css';

class SearchBar extends React.Component {
  render() {
    const { inputValue, handleInput, handleKeyDown } = this.props;

    return (
      <div>
        <input
          type="text"
          value={inputValue}
          onInput={handleInput}
          onKeyDown={handleKeyDown}
          placeholder="Enter the movie title for search"
          required
        />
      </div>
    );
  }
}

export default SearchBar;
