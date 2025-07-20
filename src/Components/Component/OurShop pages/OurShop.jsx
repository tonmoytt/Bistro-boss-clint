import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import img from '../../../assets/sadid/home/05.png';

const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];

const OurShop = () => {
  const [selectedCategory, setSelectedCategory] = useState('salad');
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        const filteredItems = data.filter(
          (item) =>
            item.category.toLowerCase() === selectedCategory.toLowerCase()
        );
        setItems(filteredItems);
      });
  }, [selectedCategory]);

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our-Shop</title>
      </Helmet>

      {/* Banner Section */}
      <div className="relative w-full h-[300px] sm:h-[400px]">
        <img src={img} alt="Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="bg-black/40 text-white w-full max-w-2xl text-center py-10 px-6 rounded-md">
            <h1 className="text-4xl font-bold uppercase mb-2">Our Shop</h1>
            <p className="text-sm tracking-wide uppercase">
              Would you like to try a dish?
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mt-10 space-x-4 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`uppercase text-sm font-medium px-4 py-2 rounded-full border ${
              selectedCategory === cat
                ? 'bg-yellow-500 text-black border-yellow-500'
                : 'text-gray-600 border-gray-300 hover:bg-yellow-100'
            } transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 py-12">
        {items.map((item) => (
          <div
            key={item.id}
            className="border border-gray-200 shadow-lg rounded-md overflow-hidden bg-white"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
              <p className="text-gray-500 text-sm mb-3">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-yellow-600 font-bold"> ${item.price}</span>
                <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 transition text-sm font-medium">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurShop;
