import { Component } from "react";
import { Route, Routes, Link, Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import About from "./components/about/about";
import ErrorMessage from "./components/errorElement/err";
import BookInfo from "./components/bookInfo/bookInfo";
import Contact from "./components/contact/contact";
import Home from "./components/homepage/home";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { books } = this.props;
    return (
      <div className="w-full bg-gradient-to-tr from-slate-900 via-gray-870  to-gray-800">
        <Navbar books={books} />

        <Routes>
          <Route
            path="/home"
            errorElement={<ErrorMessage />}
            element={<App />}
          />
          <Route path="/" element={<Home books={books} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/books/:id" element={<BookInfo books={books} />} />
          <Route path="/newbooks/:id" element={<BookInfo books={books} />} />
        </Routes>
      </div>
    );
  }
}

export default App;
