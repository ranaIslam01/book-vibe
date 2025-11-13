import React from "react";
import { Link, useLoaderData, useParams } from "react-router";
import { addToStoreDB } from "../../Utilitys/addToDb";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  console.log(data)

  const singleBook = data.find((book) => {
    return book.bookId === bookId;
  });

  const { bookName, image, review, rating,author,category,publisher,tags, totalPages,yearOfPublishing
  } = singleBook;

  const handleMarkAsRead = id => {
    addToStoreDB(id);
  }

  return (
    <div className="grid md:grid-cols-2 grid-cols-1 py-10 px-6 gap-16 my-20 md:px-20">
      {/* left side */}
      <div className="flex justify-center items-center">
        <img className="h-120 rounded-md" src={image} alt="image" />
      </div>
      {/* right side  */}
      <div className="space-y-4">
        <h1 className="text-3xl font-medium">{bookName}</h1>
        <p className="text-base text-gray-700">{category}</p>
        <hr className="text-gray-300" />
        <h2 className="text-base text-gray-700">{author}</h2>
        <hr className="text-gray-300" />
        <h2 className="text-gray-700"><span className="font-medium text-black">Review: </span> {review}</h2>
        <h2 className="text-[#23BE0A]"><span className="text-black font-bold">Tag:</span> #{tags[0]} # {tags[1]} </h2>
        <hr className="text-gray-300" />

        <p className="text-gray-700">Number of Pages: <span className="font-bold text-black">{totalPages}</span> </p>
        <p className="text-gray-700">Publisher: <span className="font-bold text-black">{publisher}</span> </p>
        <p className="text-gray-700">Year of Publishing: <span className="font-bold text-black">{yearOfPublishing}</span> </p>
        <p className="text-gray-700">Rating: <span className="font-bold text-black">{rating}</span> </p>

          <button onClick={() => handleMarkAsRead(id)} className="cursor-pointer border border-gray-300 rounded-md text-black px-6 py-2 mr-6">Read</button>

          <button className="cursor-pointer text-white bg-indigo-400 px-6 py-2 rounded-md" >Wishlist</button>

      </div>
    </div>
  );
};

export default BookDetails;
