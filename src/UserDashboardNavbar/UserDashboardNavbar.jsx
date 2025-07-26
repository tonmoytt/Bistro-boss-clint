import React from 'react';
import { FaHome, FaShoppingCart, FaList, FaStar, FaHistory, FaCalendarAlt, FaUtensils, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UserDashboardNavbar = () => {
    return (
        <div className="flex h-screen overflow-hidden bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
            {/* Sidebar */}
            <aside className="w-64 bg-orange-100 dark:bg-orange-800 p-6 flex flex-col justify-between shadow-md">
                <div>
                    <h2 className="text-2xl font-bold mb-6">BISTRO BOSS<br /><span className="text-sm font-normal">RESTAURANT</span></h2>
                    <ul className="space-y-4 text-lg font-medium">
                        <Link to=''>  <li className="flex items-center gap-2 mb-4"><FaHome /> User Home</li> </Link> 
                        <Link to='booking'>
                            <li className="flex items-center gap-2 my-4"><FaCalendarAlt /> Reservation</li>
                        </Link>
                        <Link to='paymenthistory'>  <li className="flex items-center gap-2 my-4"><FaHistory /> Payment History</li>   </Link>
                        <Link to='mycart'>  <li className="flex items-center gap-2 my-4"><FaShoppingCart /> My Cart</li>   </Link>
                        <Link to=' '>  <li className="flex items-center gap-2 my-4"><FaStar /> Add Review</li>   </Link>
                        <Link to=''>   <li className="flex items-center gap-2 my-4"><FaUtensils /> My Booking</li>   </Link>
                    </ul>
                    <div className="border-t border-gray-300 dark:border-gray-600 my-6"></div>
                    <ul className="space-y-4 text-lg font-medium">






                        <Link to='/'>  <li className="flex items-center gap-2 my-4"><FaHome /> Home</li></Link>
                        <Link to='/menu'>  <li className="flex items-center gap-2 my-4"><FaList /> Menu</li></Link>
                        <Link to='/ourshop'> <li className="flex items-center gap-2 my-4"><FaShoppingCart /> Shop</li></Link>
                        <Link to='/contact'> <li className="flex items-center gap-2 my-4"><FaPhone /> Contact</li></Link>

                    </ul>

                </div>
            </aside>


        </div>
    );
};

export default UserDashboardNavbar;
