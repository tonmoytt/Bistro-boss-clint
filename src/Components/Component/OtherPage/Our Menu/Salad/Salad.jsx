import React, { useEffect, useState } from 'react';
import saladpic from '../../../../../assets/sadid/menu/salad-bg.jpg';
import SectionTitle from '../../../Shered/SectionTitle/SectionTitle';
import { FaShoppingCart } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Salad = () => {
  const [salad, setSalad] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        const saladItems = data.filter(item => item.category === 'Salad');
        setSalad(saladItems);
      });
  }, []);

  return (
    <>
      <style>{`
        @keyframes border-rotate {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 400% 50%;
          }
        }

        .animated-border {
          background: linear-gradient(270deg, #f43f5e, #facc15, #22d3ee, #10b981, #f43f5e);
          background-size: 400% 400%;
          animation: border-rotate 8s linear infinite;
          border-radius: 9999px; /* fully rounded */
          padding: 2px; /* border thickness */
          display: inline-block;
        }

        .button-inner {
          background: white;
          border-radius: 9999px;
          padding: 6px 16px;
          font-size: 0.75rem; /* text-xs */
          font-weight: 600;
          color: #ca8a04; /* yellow-600 */
          display: flex;
          align-items: center;
          gap: 4px;
          cursor: pointer;
          user-select: none;
          transition: background-color 0.3s, color 0.3s, transform 0.2s;
        }

        .button-inner:hover {
          background: linear-gradient(90deg, #f59e0b, #f43f5e, #3b82f6); /* amber, pink, blue */
          color: white;
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>

      <div className="relative w-full">
        {/* Banner */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px]">
          <img
            src={saladpic}
            alt="Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0  flex items-center justify-center px-4">
            <div className="bg-black/40 text-white max-w-xl sm:max-w-3xl md:max-w-4xl w-full mx-auto h-32 sm:h-36 md:h-40 flex flex-col justify-center text-center px-6 sm:px-12 rounded-md">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-2">Salad</h1>
              <p className="text-xs sm:text-sm md:text-base tracking-wider uppercase">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
                Quam magnam perspiciatis sunt modi, similique corporis ipsa dolorem rem id iste?
              </p>
            </div>
          </div>
        </div>

        {/* Section Title */}
        <div className="mt-10">
          <SectionTitle Subheading="Salad Items" Heading="Our" />
        </div>

        {/* Salad Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-12 py-10">
          {salad.map(item => (
            <div
              key={item._id}
              className="flex items-start gap-4 bg-white p-4 rounded-lg shadow hover:shadow-md transition duration-200"
            >
              <img
                className="w-20 h-20 object-cover rounded-tr-full rounded-b-full border-2 border-gray-300"
                src={item.image}
                alt={item.name}
              />
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <span className="text-yellow-500 font-medium">${item.price}</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{item.description}</p>

                {/* Animated Gradient Border Button */}
                <div className="text-end mt-auto">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="animated-border"
                    onClick={() => alert(`Ordered: ${item.name}`)}
                  >
                    <div className="button-inner">
                      <FaShoppingCart /> Order Now
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Button */}
        <div className="relative w-max mx-auto mb-10">
          <button className="text-black px-5 py-2 font-semibold border border-black rounded-full hover:bg-black hover:text-white transition-all duration-200">
            Order Your Favorite Salad
          </button>
          <div className="absolute left-0 bottom-0 w-full h-[3px] rounded-b-xl bg-gradient-to-b from-gray-500 to-transparent"></div>
        </div>
      </div>
    </>
  );
};

export default Salad;
