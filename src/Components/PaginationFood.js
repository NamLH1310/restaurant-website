import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <nav>
        <ul className="flex w-auto justify-center pagination space-x-2">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <button
                onClick={() => paginate(number)}
                className="w-full px-3 py-1 bg-white ring-1 ring-red-400 hover:bg-yellow-200"
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
