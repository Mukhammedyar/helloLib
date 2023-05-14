import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

class NewProducts extends Component {
  constructor(props) {
    super(props);
  }
  state = {};

  handleOpenCLick = (id) => {
    const { newFeatures } = this.state;
    const dataItem = newFeatures.find((item) => item.id === id);
    const itemDetails = JSON.stringify(dataItem);
    window.open(`/details?dataItem=${itemDetails}`, "_blank");
  };

  render() {
    const { books } = this.props;
    return (
      <>
        <div className="h-auto  container mx-auto ">
          <p className="text-[3rem] text-orange-200 fontold font-serif py-3">
            New Products
          </p>
          <Swiper
            spaceBetween={10}
            slidesPerView={4}
            className="h-[400px] overflow-hidden"
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log("")}>
            {books.map((item) => (
              <SwiperSlide
                onClick={() => this.handleOpenCLick(item.id)}
                className="text-white bg-slate-800 p-4 rounded-lg h-[300px] overflow-hidden">
                <Link
                  to={`/books/${item.id}`}
                  className="text-white hover:text-white"
                  style={{ textDecoration: "none" }}>
                  <div className="underline" style={{ textDecoration: "none" }}>
                    <img
                      className="py-2 rounded-lg h-[280px] w-full object-cover"
                      src={item.imageLink}
                    />
                    <p className="text-lg">{item.name}</p>
                    <p className="text-slate-400">{item.author}</p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </>
    );
  }
}
export default NewProducts;
