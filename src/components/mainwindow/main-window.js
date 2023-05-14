import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./carousel.css";

export default class MainWindow extends Component {
  render() {
    const { books } = this.props;

    const carouselItems = books.map((book) => (
      <Carousel.Item key={book.id}>
        <div className="carousel-items grid md:grid-cols-2 sm:grid-cols-1 h-[600px] px-5">
          <div className="book-info sm:absolute md:relative right-0 text-white h-full">
            <h3 className="book-title sm:text-lg md:text-6xl">{book.name}</h3>
            <p className="book-author md:text-3xl sm:text-lg text-slate-500">
              {book.author}
            </p>
            <p className="book-year sm:text-sm md:text-lg text-slate-500">
              {book.dateOfBook.split("-")[0]}
            </p>
          </div>
          <div className="book-card sm:relative h-full flex w-full items-center justify-center">
            <img
              src={book.imageLink}
              alt={book.name}
              className="w-[90%] h-[90%] mb-4 rounded-lg"
            />
          </div>
        </div>
      </Carousel.Item>
    ));

    return (
      <Carousel
        fade
        interval={5000}
        controls={false}
        indicators={false}
        pause={false}>
        {carouselItems}
      </Carousel>
    );
  }
}
