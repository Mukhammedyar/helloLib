import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Contact from "./components/contact/contact";
import ErrorMessage from "./components/errorElement/err";
import BookInfo from "./components/bookInfo/bookInfo/bookInfo";

const books = [
  {
    id: 1,
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    price: 12.99,
    dateOfBook: "2019-05-15",
    new: false,
    top: true,
    imageLink:
      "https://m.media-amazon.com/images/I/51N5qVjuKAL._SX309_BO1,204,203,200_.jpg",
  },
  {
    id: 2,
    name: "1984",
    author: "George Orwell",
    genre: "Fiction",
    price: 9.99,
    dateOfBook: "2015-06-25",
    new: false,
    top: true,
    imageLink:
      "https://kbimages1-a.akamaihd.net/c9472126-7f96-402d-ba57-5ba4c0f4b238/1200/1200/False/nineteen-eighty-four-1984-george.jpg",
  },
  {
    id: 3,
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    price: 8.99,
    dateOfBook: "2014-10-01",
    new: false,
    top: true,
    imageLink:
      "https://sterling-us.imgix.net/covers/9781435172470.jpg?auto=format&h=648",
  },
  {
    id: 4,
    name: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Fiction",
    price: 6.99,
    dateOfBook: "2012-03-10",
    new: false,
    top: true,
    imageLink:
      "https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDA0MzA4MzE@._V1_.jpg",
  },
  {
    id: 5,
    name: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Fiction",
    price: 14.99,
    dateOfBook: "2018-09-12",
    new: false,
    top: true,
    imageLink:
      "https://m.media-amazon.com/images/I/51FXs5gTmdL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 6,
    name: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    genre: "Fiction",
    price: 11.99,
    dateOfBook: "2017-07-05",
    new: false,
    top: true,
    imageLink: "https://m.media-amazon.com/images/I/41IKS3pzp+L.jpg",
  },
  {
    id: 7,
    name: "Animal Farm",
    author: "George Orwell",
    genre: "Fiction",
    price: 7.99,
    dateOfBook: "2015-09-20",
    new: false,
    top: true,
    imageLink:
      "https://www.barringtonstoke.co.uk/wp-content/uploads/2020/12/9781781129692.jpg",
  },
  {
    id: 8,
    name: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    genre: "Fiction",
    price: 19.99,
    dateOfBook: "2019-01-01",
    new: false,
    top: true,
    imageLink:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
  },
];

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorMessage />,
    element: <App books={books} />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/books/:id",
    element: <BookInfo books={books} />,
  },
  {
    path: "/newbooks/:id",
    element: <BookInfo books={books} />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
