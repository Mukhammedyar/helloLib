import { Component } from "react";
import "./App.css";
import Footer from "./components/footer/footer";
import Genres from "./components/genres/genres";
import MainWindow from "./components/mainwindow/main-window";
import Navbar from "./components/navbar/navbar";
import NewProducts from "./components/NewProducts/NewProducts";
import TrendingProducts from "./components/Trending/trending-products";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { books } = this.props;
    return (
      <div className="w-full bg-gradient-to-tr from-slate-900 via-gray-870  to-gray-800">
        <Navbar books={books} />
        <MainWindow books={books} />
        <TrendingProducts />
        <NewProducts books={books} />
        <Genres />
        <Footer />
      </div>
    );
  }
}

export default App;
