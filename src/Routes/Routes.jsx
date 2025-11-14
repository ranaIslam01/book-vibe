import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import ListedBook from "../Pages/ListedBook/ListedBook";
import PagesToRead from "../Pages/PagesToRead/PagesToRead";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BookDetails from "../Pages/BookDetails/BookDetails";

export const Router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true,
        Component: Home,
        loader:() => fetch('booksData.json'),
      },
      { path: "/listed-books",loader:() => fetch('booksData.json'), Component: ListedBook },
      { path: "/pages-to-read", Component: PagesToRead },
      {
        path: '/book-details/:id',
        loader: () => fetch('booksData.json'),
        Component: BookDetails
      }

    ],
  },
]);
