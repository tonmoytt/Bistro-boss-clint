import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../Navbar/Dashboard/Cardcontext/Cardcontext';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';
import { AuthContext } from '../../../Authincation/Authincation';
import Swal from 'sweetalert2';
import Lottie from 'lottie-react';
import loadingAnimation from '../../../../assets/lottie/loading.json'

const Dashboard = () => {

  const { currentUser } = useContext(AuthContext);
  const [isCartLoading, setIsCartLoading] = useState(true);
  const [isChefCartLoading, setIsChefCartLoading] = useState(true);



  // backend theke data asle ata cmt


  // DashboardCart backend.jsx


  const [ChefRecommend, setChefRecommend] = useState([]);

  const CheffetchCartItems = () => {
    setIsChefCartLoading(true)
    axios
      .get(` https://bistro-boss-server-two-gamma.vercel.app/get-chef?email=${currentUser.email}`, {
        withCredentials: true
      })
      .then((res) => {
        setChefRecommend(res.data)
        setIsChefCartLoading(false)
      })
      .catch((err) => {
        console.error('Error fetching cart:', err)
        setIsChefCartLoading(false)
      });

  };
  useEffect(() => {
    if (currentUser?.email) {
      CheffetchCartItems();
       
    }
  }, [currentUser?.email]);
  // ✅ Quantity বাড়ানো
  const increaseQuantityChef = (itemId) => {
     setIsChefCartLoading(true);  
    axios
      .patch(` https://bistro-boss-server-two-gamma.vercel.app/Chef/increase/${itemId}`, {}, { withCredentials: true })
      .then(CheffetchCartItems);
  
  };

  // ✅ Quantity কমানো
  const decreaseQuantityChef = (itemId) => {
     setIsChefCartLoading(true);  
    axios
      .patch(` https://bistro-boss-server-two-gamma.vercel.app/Chef/decrease/${itemId}`, {}, { withCredentials: true })
      .then(CheffetchCartItems);
      
  };

  // ✅ Cart থেকে item remove
  const removeItemChef = (itemId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(` https://bistro-boss-server-two-gamma.vercel.app/Chef/${itemId}`, { withCredentials: true })
          .then(() => {
            Swal.fire(
              'Deleted!',
              'Your item has been removed.',
              'success'
            );
             setIsChefCartLoading(true);  
            CheffetchCartItems();
          });
      }
    });
  };

  const getNumericPriceChef = (price) => {
    if (!price) return 0;

    if (typeof price === 'object') {
      if (price.$numberInt) {
        return Number(price.$numberInt);
        
      }
      if (price.$numberDouble) {
        return Number(price.$numberDouble);
      }
      // অন্য অবজেক্ট ফরম্যাট
      return 0;
      
    }
    const num = Number(price);
    return isNaN(num) ? 0 : num;
    
  };

  console.log(import.meta.env.VITE_API_URL)
  // 🔁 Backend থেকে cart fetch
  const [cartItemsBackend, setCartItems] = useState([]);
  // 🔁 Backend থেকে cart fetch
  const fetchCartItems = () => {
    setIsCartLoading(true)
    axios
      .get(` https://bistro-boss-server-two-gamma.vercel.app/cart?email=${currentUser.email}`,
        // ${import.meta.env.VITE_API_URL}/cart
        {
          withCredentials: true
        })
      .then((res) => {
        setCartItems(res.data)
        setIsCartLoading(false)
      }

      )
      .catch((err) => {
        console.error('Error fetching cart:', err)
        setIsCartLoading(false)
      }
      );

  };

  useEffect(() => {
    if (currentUser?.email) {
      fetchCartItems();
    }
  }, [currentUser?.email]);

  // ✅ Quantity বাড়ানো
  const increaseQuantity = (itemId) => {
    axios
      .patch(` https://bistro-boss-server-two-gamma.vercel.app/cart/increase/${itemId}`, {}, { withCredentials: true })
      .then(fetchCartItems);
  };

  // ✅ Quantity কমানো
  const decreaseQuantity = (itemId) => {
    axios
      .patch(` https://bistro-boss-server-two-gamma.vercel.app/cart/decrease/${itemId}`, {}, { withCredentials: true })
      .then(fetchCartItems);
  };

  // ✅ Cart থেকে item remove

  const removeItem = (itemId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(` https://bistro-boss-server-two-gamma.vercel.app/cart/${itemId}`, { withCredentials: true })
          .then(() => {
            Swal.fire(
              'Deleted!',
              'Your item has been removed.',
              'success'
            );
            fetchCartItems(); // reload updated cart
          });
      }
    });
  };

  // nmbring  
  const getNumericPrice = (price) => {
    if (!price) return 0;

    if (typeof price === 'object') {
      if (price.$numberInt) {
        return Number(price.$numberInt);
      }
      if (price.$numberDouble) {
        return Number(price.$numberDouble);
      }
      // অন্য অবজেক্ট ফরম্যাট
      return 0;
    }

    const num = Number(price);
    return isNaN(num) ? 0 : num;
  };





  return (
    <div>
      <div className="mt-6 p-4 sm:p-6 max-w-6xl mx-auto min-h-[80vh] bg-gradient-to-br from-[#f9fafb] via-[#e2e8f0] to-[#f8fafc] rounded-2xl shadow-2xl border border-gray-200">
        <Helmet>
          <title>Bistro-Boss | Resturent | DashBoard</title>
        </Helmet>
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center text-gray-800 border-b border-gray-300 pb-4">
          🛒 Your Shopping Cart
        </h2>

        {/* locally added card */}
        {/* {cartItems.length === 0 ? (
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
                    onClick={() => removeItemLocal(id)}  // এখানে পুরানো removeFromCart এর জায়গায় removeItemLocal ব্যবহার করো
                    className="text-red-500 hover:text-red-600 flex items-center gap-1 text-sm sm:text-base"
                  >
                    <FaTrash /> Remove
                  </button>


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
      )} */}

        {/* backend card item show */}
        {isCartLoading ? (
          <div className="flex justify-center items-center h-40">
            <Lottie animationData={loadingAnimation} style={{ width: 100, height: 100 }} />
          </div>
        ) : cartItemsBackend.length === 0 ? (
          <p className="text-lg text-gray-600 text-center">No items in your cart yet from backend.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence>
              {cartItemsBackend.map(({ _id, name, price, quantity, image }) => (
                <motion.div
                  key={_id}
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
                          onClick={() => decreaseQuantity(_id)}
                          className="bg-gray-300 hover:bg-gray-400 text-gray-800 p-1 rounded"
                          title="Decrease"
                        >
                          <FaMinus size={14} />
                        </button>
                      )}
                      <button
                        onClick={() => increaseQuantity(_id)}
                        className="bg-blue-500 hover:bg-blue-600 text-white p-1 rounded"
                        title="Increase"
                      >
                        <FaPlus size={14} />
                      </button>
                    </div>

                    <p className="text-gray-700 font-bold text-lg sm:text-xl">
                      ${(getNumericPrice(price) * Number(quantity || 1)).toFixed(2)}
                    </p>

                    <button
                      onClick={() => removeItem(_id)}
                      className="text-red-500 hover:text-red-600 flex items-center gap-1 text-sm sm:text-base"
                    >
                      <FaTrash /> Remove
                    </button>

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

      <div className="mt-6 p-4 sm:p-6 max-w-6xl mx-auto min-h-[80vh] bg-gradient-to-br from-[#f9fafb] via-[#e2e8f0] to-[#f8fafc] rounded-2xl shadow-2xl border border-gray-200">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-center text-gray-800 border-b border-gray-300 pb-4">
          🛒 Chef recommend Cart
        </h2>

        {/* // chef recommend card show */}
        {isChefCartLoading ? (
          <div className="flex justify-center items-center h-40">
            <Lottie animationData={loadingAnimation} style={{ width: 100, height: 100 }} />
          </div>
        ) : ChefRecommend.length === 0 ? (
          <p className="text-lg text-gray-600 text-center">Chef Recommend item.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence>
              {ChefRecommend.map(({ _id, name, price, quantity, image }) => (
                <motion.div
                  key={_id}
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
                          onClick={() => decreaseQuantityChef(_id)}
                          className="bg-gray-300 hover:bg-gray-400 text-gray-800 p-1 rounded"
                          title="Decrease"
                        >
                          <FaMinus size={14} />
                        </button>
                      )}
                      <button
                        onClick={() => increaseQuantityChef(_id)}
                        className="bg-blue-500 hover:bg-blue-600 text-white p-1 rounded"
                        title="Increase"
                      >
                        <FaPlus size={14} />
                      </button>
                    </div>

                    <p className="text-gray-700 font-bold text-lg sm:text-xl">
                      ${(getNumericPriceChef(price) * Number(quantity || 1)).toFixed(2)}
                    </p>

                    <button
                      onClick={() => removeItemChef(_id)}
                      className="text-red-500 hover:text-red-600 flex items-center gap-1 text-sm sm:text-base"
                    >
                      <FaTrash /> Remove
                    </button>

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
    </div>

  )
}

export default Dashboard;
