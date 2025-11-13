import { useLoaderData } from "react-router";
import Book from "../Book/Book";

const Books = () => {
  const data = useLoaderData()
  return (
    <div className="px-6 py-10">
      <h1 className="text-4xl font-semibold text-center mb-10 text-gray-800">
        Books Collection
      </h1>
      <h1 className="text-3xl text-center font-medium">Total Books: {data.length}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:px-8 md:py-10">
          {
            data.map(book => <Book key={book.bookId} book = {book} ></Book>)
          }
        </div>
    </div>
  );
};

export default Books;
