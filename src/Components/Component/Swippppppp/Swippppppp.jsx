import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import React from 'react';
import img1 from './../../../assets/sadid/home/slide1.jpg';
import img2 from './../../../assets/sadid/home/slide2.jpg';
import img3 from './../../../assets/sadid/home/slide3.jpg';
import img4 from './../../../assets/sadid/home/slide4.jpg';
import img5 from './../../../assets/sadid/home/slide5.jpg';
import SectionTitle from '../Shered/SectionTitle/SectionTitle';

const Swippppppp = () => {
    return (
        <div className="py-10 px-2 md:px-6 lg:px-10 max-w-7xl mx-auto">
            <SectionTitle
                Subheading={'Online Order'}
                Heading={'From 11.00 am - 8.00 pm'}
            />

            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper py-10"
            >
                <SwiperSlide>
                    <div className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300">
                        <img className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-300" src={img1} alt="salad" />
                        <p className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-2xl font-semibold bg-black/50 backdrop-blur-sm px-5 py-2 rounded-md">
                            Salad
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300">
                        <img className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-300" src={img2} alt="salad" />
                        <p className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-2xl font-semibold bg-black/50 backdrop-blur-sm px-5 py-2 rounded-md">
                            Pizza
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300">
                        <img className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-300" src={img3} alt="salad" />
                        <p className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-2xl font-semibold bg-black/50 backdrop-blur-sm px-5 py-2 rounded-md">
                            Soup
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300">
                        <img className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-300" src={img4} alt="salad" />
                        <p className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-2xl font-semibold bg-black/50 backdrop-blur-sm px-5 py-2 rounded-md">
                           Dessert
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300">
                        <img className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-300" src={img5} alt="salad" />
                        <p className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-2xl font-semibold bg-black/50 backdrop-blur-sm px-5 py-2 rounded-md">
                            Salad
                        </p>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default Swippppppp;
