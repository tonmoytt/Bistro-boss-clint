import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import SectionTitle from '../../../Shered/SectionTitle/SectionTitle';
import pizzaBanner from '../../../../../assets/Home-img/images (2).jpg';

const Pizza = () => {
    const [pizzaItems, setPizzaItems] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                const filtered = data.filter(item => item.category === 'Pizza');
                setPizzaItems(filtered);
            });
    }, []);

    return (
        <div className="w-full">

            {/* banner section */}
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px]">
                <img
                    src={pizzaBanner}
                    alt="Banner"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
                    <div className="bg-black/60 text-white max-w-xl sm:max-w-3xl md:max-w-4xl w-full mx-auto h-32 sm:h-36 md:h-40 flex flex-col justify-center text-center px-6 sm:px-12 rounded-md">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-2">Pizza</h1>
                        <p className="text-xs sm:text-sm md:text-base tracking-wider uppercase">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
                            Quam magnam perspiciatis sunt modi, similique corporis ipsa dolorem rem id iste?
                        </p>
                    </div>
                </div>
            </div>

            {/* Section Title */}
            <div className="mt-10">
                <SectionTitle Subheading="Pizza Items" Heading="Our" />
            </div>

            {/* Pizza Items Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-16 py-10">
                {pizzaItems.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-200">
                        <img
                            className="w-20 h-20 object-cover rounded-tr-full rounded-b-full border-2 border-gray-300"
                            src={item.image}
                            alt={item.name}
                        />
                        <div className="flex-1">
                            <div className="flex justify-between items-center mb-1">
                                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                                <span className="text-yellow-500 font-medium">${item.price}</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-2">{item.description}</p>

                            {/* Order Now Button - Right Aligned */}
                            <div className="text-end mt-2">
                                <button className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-1 rounded-full text-sm font-medium transition-all">
                                    <FaShoppingCart /> Order Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Order Button */}
            <div className="relative w-max mx-auto mb-10">
                <button className="text-black px-6 py-2 font-semibold border border-black rounded-full hover:bg-black hover:text-white transition-all duration-200">
                    Order Your Favorite Pizza
                </button>
                <div className="absolute left-0 bottom-0 w-full h-[3px] rounded-b-xl bg-gradient-to-b from-gray-500 to-transparent"></div>
            </div>
        </div>
    );
};

export default Pizza;
