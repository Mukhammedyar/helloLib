import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default class Genres extends Component {
  render() {
    return (
      <div>
        <div className="h-auto container mx-auto ">
          <p className="text-[3rem] text-orange-200 font-serif py-3">Genres</p>
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log("")}>
            <SwiperSlide className="text-gray-700 bg-orange-300 p-4 rounded-lg">
              <p className="text-[3rem] text-center p-5 font-sans font-semibold">
                Romans
              </p>
            </SwiperSlide>
            {}
          </Swiper>
        </div>
      </div>
    );
  }
}
