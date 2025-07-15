import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules'; import React from 'react';

import img1 from './../../../assets/Home-img/download (1).jpg'
import img2 from './../../../assets/Home-img/download (2).jpg'
import img3 from './../../../assets/Home-img/download.jpg'
import img4 from './../../../assets/Home-img/images (1).jpg'
import img5 from './../../../assets/Home-img/images (2).jpg'
import img6 from './../../../assets/Home-img/images (3).jpg'
import img7 from './../../../assets/Home-img/images.jpg'
import SectionTitle from '../Shered/SectionTitle/SectionTitle';

const Swippppppp = () => {
    return (
        <div className='py-10'>
            <SectionTitle  Subheading={'online order'}
                Heading={' From 11.00 pm - 8.00 pm'}>
               
            </SectionTitle>
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
                    <div className="relative">
                        <img className="w-full h-[300px] object-cover rounded-lg" src={img1} alt="salad" />
                        <p className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-2xl font-semibold bg-black/40 px-4 py-2 rounded">
                            Salad
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img className="w-full h-[300px] object-cover rounded-lg" src={img2} alt="salad" />
                        <p className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-2xl font-semibold bg-black/40 px-4 py-2 rounded">
                            Salad
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img className="w-full h-[300px] object-cover rounded-lg" src={img3} alt="salad" />
                        <p className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-2xl font-semibold bg-black/40 px-4 py-2 rounded">
                            Salad
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img className="w-full h-[300px] object-cover rounded-lg" src={img4} alt="salad" />
                        <p className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-2xl font-semibold bg-black/40 px-4 py-2 rounded">
                            Salad
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img className="w-full h-[300px] object-cover rounded-lg" src={img5} alt="salad" />
                        <p className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-2xl font-semibold bg-black/40 px-4 py-2 rounded">
                            Salad
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img className="w-full h-[300px] object-cover rounded-lg" src={img6} alt="salad" />
                        <p className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-2xl font-semibold bg-black/40 px-4 py-2 rounded">
                            Salad
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img className="w-full h-[300px] object-cover rounded-lg" src={img7} alt="salad" />
                        <p className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-2xl font-semibold bg-black/40 px-4 py-2 rounded">
                            Salad
                        </p>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Swippppppp;