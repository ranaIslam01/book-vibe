import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { geStoreBook } from "../../Utilitys/addToDb";
import Book from "../Book/Book";

const ListedBook = () => {
  const [readList, setReadList] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const storedBookData = geStoreBook();
    const convertedStroedBooks = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      convertedStroedBooks.includes(book.bookId)
    );
    setReadList(myReadList);
    
  }, []);
  return (
    <div className="mt-20">
      <h1 className="text-3xl font-medium text-center">Books</h1>
      <div className="flex  justify-center items-center my-4">
        <button className="bg-green-500 cursor-pointer flex items-center text-white px-4 py-1 rounded-md hover:bg-green-600 font-medium">
          Sort By{" "}
          <span className="text-2xl">
            <MdKeyboardArrowDown />
          </span>
        </button>
      </div>
      <div className="px-[10%]">
        <Tabs>
          <TabList>
            <Tab>Reads Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <h2 className="text-xl font-medium text-center">Total Read: <span className="font-bold">{readList.length}</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {readList.map((b) => (
                <Book key={b.bookId} book={b}></Book>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ListedBook;
