import React, { useState } from "react";

const SearchAlgoritms = ({ books }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    setSelectedBook(null);
  };

  const searchBooks = () => {
    const filteredBooks = books.filter((book) =>
      book.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
      searchTerm &&
      filteredBooks.map((book) => (
        <div key={book.id}>
          <h3>{book.name}</h3>
          <p>{book.author}</p>
        </div>
      ))
    );
  };

  return (
    <div>
      <div className="h-[300px] text-white">
        <input
          type="text"
          placeholder="Search by book name"
          onInput={handleInputChange}
          className="text-black"
        />
        <button onClick={searchBooks}>Search</button>
        <div>{searchBooks()}</div>
      </div>
      {selectedBook && (
        <div className="text-white">
          <h2>{selectedBook.name}</h2>
          <p>{selectedBook.author}</p>
          <p>{selectedBook.price}</p>
          <img src={selectedBook.imageLink} alt={selectedBook.name} />
        </div>
      )}
    </div>
  );
};

export default SearchAlgoritms;
