import React, { useEffect, useState } from 'react';
import SectionTitle from '../Shered/SectionTitle/SectionTitle';

const ChefRecommend = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        const ChefRecommend = data.filter(item => item.category === 'chefrecommend');
        setMenu(ChefRecommend);
      });
  }, []);

  return (
    <div className='my-10 px-4 sm:px-6 lg:px-10'>
      {/* Call Us Banner */}
      <div className='bg-black rounded-md w-full max-w-3xl mx-auto mb-10'>
        <p className='font-bold text-2xl sm:text-3xl md:text-4xl text-center text-white py-6'>
          Call us : <span className='text-yellow-400'>01750047707</span>
        </p>
      </div>

      {/* Section Title */}
      <SectionTitle Subheading="Chef recommend" Heading="Check it out" />

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-10">
        {
          menu.map(item => (
            <div
              key={item.id}
              className="border border-gray-200 shadow-md rounded-xl overflow-hidden bg-white transition transform hover:scale-[1.02]"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-52 md:h-60 object-cover"
              />
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-600 font-bold text-lg">${item.price}</span>
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-full transition text-sm font-semibold">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ChefRecommend;
