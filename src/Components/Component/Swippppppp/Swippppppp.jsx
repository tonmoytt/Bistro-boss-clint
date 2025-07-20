import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import img1 from './../../../assets/sadid/home/slide1.jpg';
import img2 from './../../../assets/sadid/home/slide2.jpg';
import img3 from './../../../assets/sadid/home/slide3.jpg';
import img4 from './../../../assets/sadid/home/slide4.jpg';
import img5 from './../../../assets/sadid/home/slide5.jpg';

import SectionTitle from '../Shered/SectionTitle/SectionTitle';

const categories = [
  { id: 'salad1', img: img1, name: 'Salad' },
  { id: 'pizza', img: img2, name: 'Pizza' },
  { id: 'soup', img: img3, name: 'Soup' },
  { id: 'dessert', img: img4, name: 'Dessert' },
  { id: 'salad2', img: img5, name: 'Salad' },
];

const SwiperCategories = ({ onCategoryClick }) => {
  return (
    <div className="py-10 px-2 md:px-6 lg:px-10 max-w-7xl mx-auto">
      <SectionTitle Subheading={'Online Order'} Heading={'From 11.00 am - 8.00 pm'} />

      <Swiper
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 20 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 25 },
          1024: { slidesPerView: 4, spaceBetween: 25 },
          1280: { slidesPerView: 5, spaceBetween: 30 },
        }}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper py-10"
      >
        {categories.map(({ id, img, name }) => (
          <SwiperSlide key={id}>
            <div
              onClick={() => onCategoryClick(name.toLowerCase())}
              className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            >
              <img
                className="w-full h-[250px] md:h-[280px] lg:h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-300"
                src={img}
                alt={name}
              />
              <p className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-xl md:text-2xl font-semibold bg-black/50 backdrop-blur-sm px-4 py-1 md:px-5 md:py-2 rounded-md">
                {name}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCategories;
