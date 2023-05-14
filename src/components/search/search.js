import React, { Component } from "react";
import "./search.css";
import { Link } from "react-router-dom";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { searchValue: "" };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(event) {
    this.setState({ searchValue: event.target.value.toLowerCase() });
  }

  render() {
    const { searchValue } = this.state;
    const { books } = this.props;

    const filteredBooks = searchValue
      ? books.filter((book) => {
          const name = book.name.toLowerCase();
          const author = book.author.toLowerCase();
          return name.includes(searchValue) || author.includes(searchValue);
        })
      : books;

    return (
      <div>
        <input
          type="text"
          value={searchValue}
          onChange={this.handleSearch}
          placeholder="Search..."
          className="search-input px-3 py-1 bg-slate-800 border focus:outline-none relative border-slate-700 rounded-md"
        />
        <div className="search-bar absolute bg-gray-800 w-[210px] max-h-[300px] overflow-y-scroll scrollbar-w-0 scrollbar-track-gray-black scrollbar-thumb-white">
          {searchValue &&
            filteredBooks.map((book) => {
              const nameIndex = book.name.toLowerCase().indexOf(searchValue);
              const authorIndex = book.author
                .toLowerCase()
                .indexOf(searchValue);
              const nameFirstPart = book.name.slice(0, nameIndex);
              const authorFirstPart = book.author.slice(0, authorIndex);
              const nameSecondPart = book.name.slice(
                nameIndex + searchValue.length
              );
              const authorSecondPart = book.author.slice(
                authorIndex + searchValue.length
              );

              return (
                <Link
                  to={`/books/${book.id}`}
                  key={book.id}
                  className="py-2 px-4 00 border-b-gray-700 border-b-[1px] mx-2 text-sm">
                  <span style={{ color: "rgba(255,255,255,.5)" }}>
                    {nameFirstPart}
                  </span>
                  <span style={{ color: "white" }}>{searchValue}</span>
                  <span style={{ color: "rgba(255,255,255,.5)" }}>
                    {nameSecondPart} - {authorFirstPart}
                  </span>
                  <span style={{ color: "white" }}>{searchValue}</span>
                  <span style={{ color: "rgba(255,255,255,.5)" }}>
                    {authorSecondPart}
                  </span>
                </Link>
              );
            })}
        </div>
      </div>
    );
  }
}

export default Search;
