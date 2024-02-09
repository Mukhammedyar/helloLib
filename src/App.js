import { Component } from "react";
import { Route, Routes, Link, Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import About from "./components/about/about";
import ErrorMessage from "./components/errorElement/err";
import BookInfo from "./components/bookInfo/bookInfo";
import Contact from "./components/contact/contact";
import Home from "./components/homepage/home";
import SavedBooks from "./components/SavedBooksPage/SavedBooks";
import YourProfile from "./components/profile/profile";
import SupportCenter from "./components/supportCenter/supportCenter";
import LoginPage from "./components/LoginPage/loginpage";
import SavedAudioBooks from "./components/SavedBooksPage/savedAudioBooks";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    };
  }

  render() {
    const { books } = this.props;
    return (
      <div className="w-full bg-gradient-to-tr from-slate-900 via-gray-870  to-gray-800">
        {/* <SavedAudioBooks /> */}
        <div className="">
          <Navbar books={books} />

          <Routes>
            <Route
              path={"/home"}
              errorElement={<ErrorMessage />}
              element={<App />}
            />
            <Route path="/" element={<Home books={books} />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/books/:id" element={<BookInfo books={books} />} />
            <Route path="/newbooks/:id" element={<BookInfo books={books} />} />
            <Route path="/savedbooks" element={<SavedBooks books={books} />} />
            <Route path="/profile" element={<YourProfile />} />
            <Route path="/support" element={<SupportCenter />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;

// bookmark saved icon <i class='bx bxs-bookmark'></i>
// downloaded <i class='bx bxs-check-square'></i>
// menu icon <box-icon name='menu'></box-icon>
