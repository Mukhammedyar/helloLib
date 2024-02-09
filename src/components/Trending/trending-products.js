import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import StarRating from "../starRating/starRating";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper/core";
import "swiper/css";
import { Link } from "react-router-dom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./trending.css";
import CardBtnIcon from "../card-btns/cardBtnIcon";
import Saved from "../savedIcon/savedIcon";

SwiperCore.use([Navigation, Pagination, Scrollbar]);

class TrendingProducts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { books } = this.props;

    return (
      <>
        <div className="h-auto container mx-auto w-full box-border">
          <p className="text-[3rem] md:text-[2.5rem] sm:text-[2rem] text-red-600 font-[600] font-serif pt-4">
            Trending books
          </p>
          <Swiper
            className=" overflow-hidden"
            clickkable={false}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log("")}
            breakpoints={{
              480: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 35,
              },
            }}>
            {books
              .filter((book) => book.top === true)
              .map((item) => (
                <SwiperSlide
                  onClick={() => this.handleOpenCLick(item.id)}
                  className="text-white bg-slate-800 p-2 rounded-lg h-[300px] overflow-hidden">
                  <div className="underline" style={{ textDecoration: "none" }}>
                    <img
                      className="pb-2 relative rounded-lg h-[240px] md:h-[260px] sm:h-[200px] w-full object-cover"
                      src={item.imageLink}
                    />
                    <Saved item={item} />
                    <Link
                      to={`/newbooks/${item.id}`}
                      className="text-white hover:text-white "
                      style={{ textDecoration: "none" }}>
                      <div className="px-1 pb-2">
                        <p className="text-md md:text-lg sm:text-sm py-1 my-0">
                          {item.name.length > 18
                            ? `${item.name.slice(0, 18)}...`
                            : item.name}
                        </p>
                        <p className="text-slate-400 py-0 my-0 md:text-sm sm:text-[1rem]">
                          {item.author.length > 20
                            ? `${item.author.slice(0, 15)}...`
                            : item.author}
                        </p>
                        <p className="text-red-500 pt-3 my-0 text-sm md:text-md sm:text-[1rem]">
                          ${item.price}
                        </p>
                      </div>
                    </Link>
                    <CardBtnIcon item={item} />
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </>
    );
  }
}

export default TrendingProducts;
