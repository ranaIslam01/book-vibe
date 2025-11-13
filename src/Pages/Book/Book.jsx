import React from "react";
import { Link } from "react-router";

const Book = ({ book }) => {
  const {
    bookName,
    image,
    rating,
    author,
    category,
    publisher,
    tags,
    bookId,
  } = book;

  return (
    <Link to= {`/book-details/${bookId}`}>
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col border border-gray-200">
      <div className="flex justify-center bg-gray-50 p-4">
        <img
          src={image}
          alt={bookName}
          className="rounded-lg h-40 w-30"
        />
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap justify-between gap-2 mb-3">
            {tags?.map((tag, index) => (
              <span
                key={index}
                className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h2 className="text-lg font-semibold text-gray-800 truncate">
            {bookName}
          </h2>
          <p className="text-sm text-gray-500 mt-1">{author}</p>
          <p className="text-sm text-gray-500">{publisher}</p>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-600 text-sm">{category}</span>
          <span className="text-gray-800 font-semibold">{rating} ⭐</span>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Book;
