import React from 'react'
import { Link } from 'react-router-dom';
import { SwiperSlide,Swiper } from 'swiper/react';

export default function SavedBooks({ books }) {
    
    const saved = books.filter(book => book.saved)
    const downloaded = books.filter(book => book.downloaded)

  const openFileInWord = (filePath) => {
      window.open(process.env.PUBLIC_URL+ filePath, "_blank");
    };
  
    return (
        <div className='px-10 text-white my-5'>
          <div className='saved-books w-full'>
              <h1 className='mb-3 text-red-600 font-serif font-bolder'>Saved books</h1>
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
              .filter((book) => book.saved === true)
              .map((item) => (
                <SwiperSlide
                  className="text-white bg-slate-800 p-2 rounded-lg h-[300px] overflow-hidden">
                  <div className="underline" style={{ textDecoration: "none" }}>
                    <div className="imagecard">
                      <img
                        className="pb-2 relative rounded-lg h-[240px] md:h-[260px] sm:h-[200px] w-full object-cover"
                        src={item.imageLink}
                      />
                    </div>
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
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
          </div>
          <div className='saved-audiobooks'><h1>Saved Audiobooks</h1></div>
          <div className='Downloaded'>
              <h1>Downloaded Files</h1>
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
              .filter((book) => book.downloaded === true)
              .map((item) => (
                <SwiperSlide
                  className="text-white bg-slate-800 p-2 rounded-lg h-[300px] overflow-hidden">
                  <div className="underline" style={{ textDecoration: "none" }}>
                    <div className="imagecard">
                      <img
                        className="pb-2 relative rounded-lg h-[240px] md:h-[260px] sm:h-[200px] w-full object-cover"
                        src={item.imageLink}
                      />
                    </div>
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
                    <button className="px-3 py-2 text-black font-bold bg-white mt-1 rounded-lg" onClick={() => openFileInWord(item.path)}>Open</button>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
          </div>
    </div>
  )
}
