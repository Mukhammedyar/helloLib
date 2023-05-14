import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default class TrendingProducts extends Component {
  render() {
    return (
      <div className="h-auto container mx-auto ">
        <p className="text-[3rem] text-orange-200 font-serif py-3">
          Trending Products
        </p>
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log("")}>
          <SwiperSlide className="text-white bg-slate-800 p-4 rounded-lg">
            <img
              className="py-2 rounded-lg"
              src="https://cdn-images.farfetch-contents.com/18/48/42/67/18484267_40946436_1000.jpg"
            />
            <p className="text-lg">Dior 1947-1967</p>
            <p className="text-slate-400">Cristian Dior</p>
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}
