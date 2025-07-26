import React, { useEffect, useState, useContext } from 'react';
import SectionTitle from '../Shered/SectionTitle/SectionTitle';
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Authincation/Authincation';

const ChefRecommend = () => {
  const [menu, setMenu] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const token = localStorage.getItem('access-token');

  // Fetch Chef Recommend menu items from data.json
  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        const ChefRecommend = data.filter(item => item.category === 'chefrecommend');
        setMenu(ChefRecommend);
      });
  }, []);

  // Fetch user's cart items from backend
  useEffect(() => {
    if (currentUser && token) {
      axios.get(`http://localhost:5000/chef?email=${currentUser.email.toLowerCase()}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => {
          setCartItems(res.data);
        })
        .catch(err => {
          console.error("Error fetching cart items:", err);
        });
    }
  }, [currentUser, token]);

  const Handleaddbtn = (item) => {
    if (!currentUser) {
      Swal.fire({
        icon: 'error',
        title: 'Login Required',
        text: 'Please login to add items to the cart.',
      });
      return;
    }

    // Confirm before adding
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to add "${item.name}" to your cart?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, add it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        const cartItem = {
          ...item,
          userEmail: currentUser.email.toLowerCase()
        };

        axios.post('http://localhost:5000/chef', cartItem, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then(res => {
            if (res.data.insertedId) {
              Swal.fire({
                icon: 'success',
                title: 'Added!',
                text: `${item.name} has been added to your cart.`,
                timer: 1500,
                showConfirmButton: false
              });
              // Update cartItems state to disable button immediately
              setCartItems(prev => [...prev, cartItem]);
            }
          })
          .catch(err => {
            const message = err.response?.data?.message;
            if (message === 'Item already exists in cart') {
              Swal.fire({
                icon: 'info',
                title: 'Already Added',
                text: `"${item.name}" is already in your cart.`,
                timer: 1500,
                showConfirmButton: false
              });
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong! Please try again.',
              });
            }
          });
      }
    });
  };

  // Check if an item is already in cart
  const isInCart = (item) => {
    return cartItems.some(cartItem => cartItem.name === item.name);
  };

  return (
    <div className='my-10 px-4 sm:px-6 lg:px-10'>
      <div className='bg-black rounded-md w-full max-w-3xl mx-auto mb-10'>
        <p className='font-bold text-2xl sm:text-3xl md:text-4xl text-center text-white py-6'>
          Call us : <span className='text-yellow-400'>01750047707</span>
        </p>
      </div>

      <SectionTitle Subheading="Chef recommend" Heading="Check it out" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-10">
        {menu.map(item => (
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
                <button
                  onClick={() => Handleaddbtn(item)}
                  disabled={isInCart(item)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition
                    ${isInCart(item) ? 'bg-gray-400 cursor-not-allowed text-black' : 'bg-yellow-400 hover:bg-yellow-500 text-black'}`}
                >
                  {isInCart(item) ? 'Added' : 'Add to Cart'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefRecommend;
