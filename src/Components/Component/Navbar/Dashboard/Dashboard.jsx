import React, { useContext } from 'react';
import { CartContext } from '../../Navbar/Dashboard/Cardcontext/Cardcontext';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';

const Dashboard = () => {
  const { cartItems, addToCart, decreaseFromCart, removeFromCart } = useContext(CartContext);

  return (
    <div className="mt-16 p-4 sm:p-6 max-w-6xl mx-auto min-h-[80vh] bg-gradient-to-br from-[#f9fafb] via-[#e2e8f0] to-[#f8fafc] rounded-2xl shadow-2xl border border-gray-200">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center text-gray-800 border-b border-gray-300 pb-4">
        🛒 Your Shopping Cart
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-lg text-gray-600 text-center">No items in your cart yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {cartItems.map(({ id, name, price, quantity, image }) => (
              <motion.div
                key={id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-xl transition duration-300 flex flex-col"
              >
                <img
                  src={image}
                  alt={name}
                  className="w-full h-36 sm:h-40 object-cover rounded-t-xl"
                />
                <div className="p-4 space-y-3 flex flex-col flex-grow">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{name}</h3>

                  <p className="text-gray-500">
                    Quantity: <span className="font-medium">{quantity}</span>
                  </p>

                  <div className="flex items-center gap-3">
                    {quantity > 1 && (
                      <button
                        onClick={() => decreaseFromCart(id)}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 p-1 rounded"
                        title="Decrease"
                      >
                        <FaMinus size={14} />
                      </button>
                    )}
                    <button
                      onClick={() => addToCart({ id, name, price, image })}
                      className="bg-blue-500 hover:bg-blue-600 text-white p-1 rounded"
                      title="Increase"
                    >
                      <FaPlus size={14} />
                    </button>
                  </div>

                  <p className="text-gray-700 font-bold text-lg sm:text-xl">
                    ${(price * quantity).toFixed(2)}
                  </p>

                  <button
                    onClick={() => removeFromCart(id)}
                    className="text-red-500 hover:text-red-600 flex items-center gap-1 text-sm sm:text-base"
                  >
                    <FaTrash /> Remove
                  </button>

                  {/* Buy Confirm Button */}
                  <button
                    onClick={() => alert(`✅ Order confirmed for ${name}`)}
                    className="mt-auto w-full px-4 py-2 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:from-purple-600 hover:to-green-400 text-white font-bold rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 backdrop-blur-lg bg-opacity-30"
                  >
                    🛒 Buy Confirm
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
