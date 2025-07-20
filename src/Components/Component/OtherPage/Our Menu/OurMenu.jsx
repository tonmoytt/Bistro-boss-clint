import React, { useEffect, useState } from 'react';
import glassmenu from '../../../../assets/sadid/menu/banner3.jpg';
import SectionTitle from '../../Shered/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet-async';
import Desertitems from './desert items/Desertitems';
import Pizza from './Pizza/Pizza';
import Drinks from './Drinks/Drinks';
import Salad from './Salad/Salad';
import Soup from './Soup/Soup';
import { FaShoppingCart, FaTag } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const OurMenu = () => {
    const [menu, setMenu] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => {
                const todayOffer = data.filter(item => item.category === 'Offerd');
                setMenu(todayOffer);
            });
    }, []);

    const handleOrderClick = (id, category) => {
        navigate('/ourshop', { state: { selectedId: id, selectedCategory: category } });
    };

    return (
        <div className="w-full">
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>

            {/* Banner Section */}
            <div className="relative w-full h-[300px] sm:h-[400px]">
                <img src={glassmenu} alt="Banner" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
                    <div className="bg-black/60 text-white max-w-4xl w-full mx-auto h-40 flex flex-col justify-center text-center px-6 sm:px-12 rounded-md">
                        <h1 className="text-4xl font-bold uppercase mb-2">Our Menu</h1>
                        <p className="text-sm tracking-wider uppercase">Would you like to try a dish?</p>
                    </div>
                </div>
            </div>

            {/* Section Title */}
            <div className="mt-10">
                <SectionTitle Subheading={"Today's Offer"} Heading={"Don't Miss Out!"} />
            </div>

            {/* Offer Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-16 py-10">
                {menu.map((item) => (
                    <motion.div
                        key={item.id}
                        whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.2)' }}
                        className="bg-white rounded-xl overflow-hidden shadow-md relative cursor-pointer flex gap-4 p-4 items-center"
                    >
                        {item.discount && (
                            <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded flex items-center gap-1 z-10">
                                <FaTag />
                                <span>{item.discount} OFF</span>
                            </div>
                        )}

                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-24 h-24 object-cover rounded-xl flex-shrink-0"
                        />

                        <div className="flex-1">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                                <span className="text-yellow-500 font-bold">${item.price}</span>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">{item.description}</p>

                            <button
                                className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-2 rounded-full font-semibold transition"
                                onClick={() => handleOrderClick(item.id, item.category)}
                            >
                                <FaShoppingCart />
                                Order Now
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Order Button */}
            <div className="relative w-max mx-auto mb-10">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-black px-6 py-3 font-semibold border border-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
                >
                    <FaShoppingCart className="text-lg" /> Order Your Favorite Food
                </motion.button>
                <div className="absolute left-0 bottom-0 w-full h-[3px] rounded-b-xl bg-gradient-to-b from-gray-500 to-transparent"></div>
            </div>

            {/* Other Sections */}
            <Desertitems />
            <Pizza />
            <Drinks />
            <Salad />
            <Soup />
        </div>
    );
};

export default OurMenu;
