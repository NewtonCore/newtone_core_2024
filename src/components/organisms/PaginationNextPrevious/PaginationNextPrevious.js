import React from "react";

function PaginationNextPrevious({ next, previous, nextFn, previousFn }) {
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center mt-3">
          <li
            className={
              previous !== undefined
                ? previous === null
                  ? "page-item disabled"
                  : "page-item"
                : "page-item"
            }
          >
            <button
              onClick={previousFn}
              className="page-link"
              href="#"
              tabIndex="-1"
              aria-disabled="true"
            >
              Previous
            </button>
          </li>

          <li
            className={
              next !== undefined
                ? next === null
                  ? "page-item disabled"
                  : "page-item"
                : "page-item"
            }
          >
            <button
              onClick={nextFn}
              className="page-link"
              href="#"
              tabIndex="-1"
              aria-disabled="true"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default PaginationNextPrevious;
