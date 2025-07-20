import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from './../../../assets/sadid/home/banner.jpg';
import img2 from './../../../assets/sadid/home/02.jpg';
import img3 from './../../../assets/sadid/home/03.png';
import img4 from './../../../assets/sadid/home/04.jpg';
import img5 from './../../../assets/sadid/home/05.png';
import img6 from './../../../assets/sadid/home/06.png';

const SWip = () => {
    return (
        <div className="w-full max-w-8xl mx-auto mt-6 px-2 md:px-4 lg:px-0">
            <div className="rounded-xl overflow-hidden shadow-xl">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    infiniteLoop={true}
                    interval={3000}
                    transitionTime={600}
                    showStatus={false}
                    swipeable={true}
                    emulateTouch={true}
                >
                    <div className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
                        <img src={img1} alt="Slide 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
                        <img src={img2} alt="Slide 2" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
                        <img src={img3} alt="Slide 3" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
                        <img src={img4} alt="Slide 4" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
                        <img src={img5} alt="Slide 5" className="w-full h-full object-cover" />
                    </div>
                    <div className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
                        <img src={img6} alt="Slide 6" className="w-full h-full object-cover" />
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default SWip;
