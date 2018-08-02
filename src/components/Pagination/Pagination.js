import React from 'react';

// import css
import './Pagination.css';

const Pagination = props => {
  return (
    <div className="pagination">
      <button onClick={props.handlePrevPage} disabled={props.page <= 1}>
        Previous page
      </button>
      <span className="current-page">
        Page {props.page} of {props.total}
      </span>
      <button
        onClick={props.handleNextPage}
        disabled={props.total < props.page + 1}
      >
        Next page
      </button>
    </div>
  );
};

export default Pagination;
