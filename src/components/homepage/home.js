import React from "react";
import Authors from "../authors/authors";
import FileViewer from "../bookList/bookList";
import BookList from "../bookList/bookList";
import Footer from "../footer/footer";
import Genres from "../genres/genres";
import LoginPage from "../LoginPage/loginpage";
import MainWindow from "../mainwindow/main-window";
import NewProducts from "../NewProducts/NewProducts";
import TrendingProducts from "../Trending/trending-products";

export default function Home({ books }) {
  return (
    <div className="bg-gray-900">
      <MainWindow className="bg-gray-800" books={books} />
      <TrendingProducts books={books} />
      <Authors />
      <NewProducts books={books} />
      <Genres />
      <Footer />
    </div>
  );
}

{
  /* <FileViewer /> */
}
