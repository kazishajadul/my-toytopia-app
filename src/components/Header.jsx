import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import toys from "../data/toys.json";

const Header = () => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-4">
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="rounded-2xl overflow-hidden shadow-md"
      >
        {toys.map((toy) => (
          <SwiperSlide key={toy.toyId}>
            <div className="relative">
              {/* Image Section */}
              <img
                src={toy.pictureURL}
                alt={toy.toyName}
                className="w-full h-[450px] object-cover object-center"
              />

              {/* Soft Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#fdf3f0]/90 via-[#f6e7fa]/50 to-transparent flex flex-col items-center justify-center text-center px-6">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 drop-shadow-sm mb-2">
                  {toy.toyName}
                </h2>
                <p className="text-gray-700 font-medium text-lg md:text-xl">
                  {toy.subCategory}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Header;


