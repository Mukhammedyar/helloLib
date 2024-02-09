import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const books = [
  {
    id: 1,
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    price: 12.99,
    dateOfBook: "2019-05-15",
    rating: 4.4,
    new: false,
    saved: false,
    downloaded: true,
    top: true,
    imageLink:
      "https://m.media-amazon.com/images/I/51N5qVjuKAL._SX309_BO1,204,203,200_.jpg",
  },
  {
    id: 2,
    name: "1984",
    author: "George Orwell",
    genre: "Fiction",
    rating: 4.7,
    price: 9.99,
    dateOfBook: "2015-06-25",
    new: false,
    saved: true,
    downloaded: true,
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
    rating: 4.8,
    dateOfBook: "2014-10-01",
    new: false,
    saved: true,
    downloaded: false,
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
    rating: 4.5,
    dateOfBook: "2012-03-10",
    new: false,
    saved: false,
    downloaded: true,
    path: "/documents/1-Laboratoriya.doc",
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
    rating: 4.8,
    dateOfBook: "2018-09-12",
    new: false,
    saved: false,
    downloaded: true,
    path: "/documents/Power.pdf",
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
    rating: 4.5,
    dateOfBook: "2017-07-05",
    new: false,
    saved: false,
    downloaded: false,
    top: true,
    imageLink: "https://m.media-amazon.com/images/I/41IKS3pzp+L.jpg",
  },
  {
    id: 7,
    name: "Animal Farm",
    author: "George Orwell",
    genre: "Fiction",
    price: 7.99,
    rating: 4.9,
    dateOfBook: "2015-09-20",
    new: false,
    saved: true,
    downloaded: false,
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
    rating: 4.8,
    dateOfBook: "2019-01-01",
    new: false,
    saved: true,
    downloaded: true,
    path: "/documents/Tema.docx",
    top: true,
    imageLink:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
  },
  {
    id: 9,
    name: "Spare",
    author: "Prince Harry The Duke of Sussex",
    genre: "roman",
    price: 19.99,
    rating: 4.5,
    dateOfBook: "2023",
    new: true,
    saved: false,
    downloaded: false,
    top: true,
    imageLink:
      "https://m.media-amazon.com/images/I/41CSAHVHk+L._SX327_BO1,204,203,200_.jpg",
  },
  {
    id: 10,
    name: "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    author: " James Clear",
    genre: "Fiction",
    rating: 4.8,
    price: 14.88,
    dateOfBook: "2016",
    new: false,
    saved: true,
    downloaded: true,
    top: true,
    imageLink:
      "https://m.media-amazon.com/images/I/51B7kuFwQFL._SX329_BO1,204,203,200_.jpg",
  },
  {
    id: 11,
    name: "It Starts with Us: A Novel (2) (It Ends with Us)",
    author: " Colleen Hoover ",
    genre: "novel",
    price: 10.49,
    rating: 4.5,
    dateOfBook: "2022",
    new: true,
    saved: false,
    downloaded: false,
    top: true,
    imageLink:
      "https://m.media-amazon.com/images/I/51VC+Vru96L._SX320_BO1,204,203,200_.jpg",
  },
  {
    id: 12,
    name: "Dog Man: Twenty Thousand Fleas Under the Sea: A Graphic Novel (Dog Man #11): From the Creator of Captain Underpants ",
    author: "Dav Pilkey",
    genre: "graphic novel",
    price: 9.49,
    rating: 4.6,
    dateOfBook: "March 28, 2023",
    new: true,
    saved: false,
    downloaded: true,
    top: true,
    imageLink:
      "https://m.media-amazon.com/images/I/51VyW1qRmSL._SX329_BO1,204,203,200_.jpg",
  },
  {
    id: 13,
    name: "Lessons in Chemistry",
    author: "Bonnie Garmus",
    genre: "Novel",
    price: 17.99,
    rating: 4.6,
    dateOfBook: "2022",
    new: true,
    saved: true,
    downloaded: false,
    top: true,
    imageLink:
      "https://m.media-amazon.com/images/I/41UG6tNeHBL._SX334_BO1,204,203,200_.jpg",
  },
  {
    id: 14,
    name: "Verity",
    author: "Colleen Hoover",
    genre: "",
    rating: 4.6,
    price: 1,
    dateOfBook: "October 26, 2021",
    new: false,
    saved: false,
    downloaded: true,
    top: true,
    imageLink:
      "https://m.media-amazon.com/images/I/41ZLnc34EiL._SX332_BO1,204,203,200_.jpg",
  },
  {
    id: 15,
    name: "Daisy Jones & The Six",
    author: " Taylor Jenkins Reid",
    genre: "Novel",
    price: 9.99,
    rating: 4.4,
    dateOfBook: "February 4, 2020",
    new: true,
    saved: true,
    downloaded: false,
    top: true,
    imageLink:
      "https://m.media-amazon.com/images/I/515N5xQGsAL._SX322_BO1,204,203,200_.jpg",
  },
  {
    id: 16,
    name: "Things We Never Got Over (Knockemout)",
    author: "Lucy Score ",
    genre: "",
    price: 10.49,
    rating: 4.5,
    dateOfBook: "January 12, 2022",
    new: true,
    saved: false,
    downloaded: false,
    top: false,
    imageLink:
      "https://m.media-amazon.com/images/I/419Q1FpTrzL._SX311_BO1,204,203,200_.jpg",
  },
  {
    id: 17,
    name: "I Love You to the Moon and Back",
    author: "Amelia Hepworth (Author), Tim Warnes (Illustrator)",
    genre: "picture book",
    price: 4.76,
    rating: 4.9,
    dateOfBook: " March 3, 2015 ",
    new: false,
    saved: true,
    downloaded: false,
    top: true,
    imageLink:
      "https://m.media-amazon.com/images/I/51p2SDOCV9L._SX482_BO1,204,203,200_.jpg",
  },
  {
    id: 18,
    name: "Brown Bear, Brown Bear, What Do You See?",
    author: "Bill Martin Jr. (Author), Eric Carle (Author)",
    genre: "",
    price: 4.94,
    rating: 4.9,
    dateOfBook: "September 15, 1996",
    new: false,
    saved: false,
    downloaded: false,
    top: true,
    imageLink:
      "https://m.media-amazon.com/images/I/514rSiCUl3L._SX355_BO1,204,203,200_.jpg",
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App books={books} />
  </BrowserRouter>
);
reportWebVitals();

// import { RouterProvider, createBrowserRouter } from "react-router-dom";
{
  /* <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode> */
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
