import React, { useEffect, useState, useRef, useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';  // SweetAlert import
import img from '../../../assets/sadid/home/05.png';
import { CartContext } from '../Navbar/Dashboard/Cardcontext/Cardcontext';
import axios from 'axios';
import { AuthContext } from '../../Authincation/Authincation';

const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks', 'offerd'];


const OurShop = () => {
  const { currentUser } = useContext(AuthContext);
  const [newlyAddedItem, setNewlyAddedItem] = useState(null);
  useEffect(() => {
    if (newlyAddedItem) {
      axios.post( 'http://localhost:5000/cart', newlyAddedItem ,{
         withCredentials: true // token cookie allow করবে
      })
        .then(data => {
          console.log('Successfully added to MongoDB:', data);
        })
        .catch(error => {
          console.error('Error adding to MongoDB:', error);
        });
    }
  }, [newlyAddedItem]);   //uppore backend data pathano hoyce


  const location = useLocation();
  const selectedIdFromMenu = location.state?.selectedId || null;
  const selectedIdNumber = Number(selectedIdFromMenu);

  const [selectedCategory, setSelectedCategory] = useState('salad');
  const [items, setItems] = useState([]);

  const itemRefs = useRef({});

  // Cart context থেকে addToCart এবং cartItems নেওয়া হচ্ছে
  const { addToCart, cartItems } = useContext(CartContext);
  // Local cart context {backend data asle ata cmt korte hobe}

  useEffect(() => {
    if (!selectedIdFromMenu) return;

    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        const selectedItem = data.find(item => item.id === selectedIdNumber);
        if (selectedItem) {
          setSelectedCategory(selectedItem.category.toLowerCase());
        }
      });
  }, [selectedIdFromMenu, selectedIdNumber]);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        const filteredItems = data.filter(
          (item) => item.category.toLowerCase() === selectedCategory
        );
        setItems(filteredItems);
      });
  }, [selectedCategory]);

  useEffect(() => {
    if (!selectedIdFromMenu) return;

    const el = itemRefs.current[selectedIdNumber];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('highlighted-item');

      const timer = setTimeout(() => {
        el.classList.remove('highlighted-item');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [selectedIdFromMenu, items, selectedIdNumber]);

  // Add to Cart function with SweetAlert checks and confirmations
  const handleAddToCart = (item) => {
    const isAlreadyAdded = cartItems.some(cartItem => cartItem.id === item.id);

    if (isAlreadyAdded) {
      Swal.fire({
        title: 'Already Added',
        text: `"${item.name}" is already in your cart.`,
        icon: 'info',
        timer: 2000,
        showConfirmButton: false,
        background: '#fef3c7',
        color: '#92400e',
        backdrop: `rgba(255, 255, 204, 0.6)`,
        customClass: {
          popup: 'rounded-lg border-2 border-yellow-400 shadow-md',
        },
      });
    } else {
      Swal.fire({
        title: 'Are you sure?',
        text: `Do you want to add "${item.name}" to your cart?`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#22c55e',
        cancelButtonColor: '#ef4444',
        confirmButtonText: 'Yes, add it!',
      }).then((result) => {
        if (result.isConfirmed) {

          const itemWithUser = {
            ...item,
            userEmail: currentUser?.email // 👈 user এর email যোগ করো
          };
          addToCart(item);   // Local cart context {backend data asle ata cmt korte hobe}
          setNewlyAddedItem(itemWithUser); // Backend MongoDB te pathanor jonno
          Swal.fire({
            title: 'Success',
            text: `"${item.name}" has been added to your cart successfully.`,
            icon: 'success',
            timer: 2000,
            showConfirmButton: false,
            background: '#d1fae5',
            color: '#065f46',
            backdrop: `rgba(6, 95, 70, 0.4)`,
            customClass: {
              popup: 'rounded-lg border-2 border-green-500 shadow-lg',
            },
          });
        }
      });
    }
  };

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our-Shop</title>
      </Helmet>

      {/* Banner */}
      <div className="relative w-full h-[300px] sm:h-[400px]">
        <img src={img} alt="Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="bg-black/40 text-white w-full max-w-2xl text-center py-10 px-6 rounded-md">
            <h1 className="text-4xl font-bold uppercase mb-2">Our Shop</h1>
            <p className="text-sm tracking-wide uppercase">Would you like to try a dish?</p>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center mt-10 space-x-4 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`uppercase text-sm font-medium px-4 py-2 rounded-full border ${selectedCategory === cat
              ? 'bg-yellow-500 text-black border-yellow-500'
              : 'text-gray-600 border-gray-300 hover:bg-yellow-100'
              } transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 py-12">
        {items.map((item) => (
          <div
            key={item.id}
            ref={(el) => (itemRefs.current[item.id] = el)}
            className={`border border-gray-200 shadow-lg rounded-md overflow-hidden bg-white transition-transform duration-300 ${selectedIdNumber === item.id ? 'scale-105 opacity-70 border-yellow-500' : ''
              }`}
          >
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{item.name}</h3>
              <p className="text-gray-500 text-sm mb-3">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-yellow-600 font-bold">${item.price}</span>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 transition text-sm font-medium"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Highlight CSS */}
      <style>{`
        .highlighted-item {
          box-shadow: 0 0 15px 5px rgba(252, 211, 77, 0.7);
          border-color: #facc15 !important;
          transform: scale(1.05);
          opacity: 0.7;
          transition: all 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default OurShop;
