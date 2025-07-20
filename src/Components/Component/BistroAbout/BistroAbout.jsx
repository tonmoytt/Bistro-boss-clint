import React from 'react';
import img1 from '../../../assets/sadid/home/chef-service.jpg';

const BistroAbout = () => {
    return (
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px]">
            {/* Background Image */}
            <img
                src={img1}
                alt="Bistro Boss"
                className="w-full h-full object-cover"
            />

            {/* Overlay with Text */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
                <div className="bg-white/90 text-gray-800 max-w-xl sm:max-w-2xl md:max-w-3xl w-full mx-auto p-4 sm:p-6 md:p-8 rounded-md shadow-lg text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase mb-3">Bistro Boss</h2>
                    <p className="text-xs sm:text-sm md:text-base leading-relaxed tracking-wide">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, odio quasi!
                        Reiciendis exercitationem quae autem tenetur at recusandae facilis. Animi.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BistroAbout;
