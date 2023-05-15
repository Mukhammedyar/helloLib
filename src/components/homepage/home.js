import React from "react";
import Footer from "../footer/footer";
import Genres from "../genres/genres";
import MainWindow from "../mainwindow/main-window";
import NewProducts from "../NewProducts/NewProducts";
import TrendingProducts from "../Trending/trending-products";

export default function Home({ books }) {
  return (
    <div>
      <MainWindow books={books} />
      <TrendingProducts />
      <NewProducts books={books} />
      <Genres />
      <Footer />
    </div>
  );
}
