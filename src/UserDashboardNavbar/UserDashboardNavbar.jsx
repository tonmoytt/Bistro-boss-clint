import React from 'react';
import {
    FaHome, FaShoppingCart, FaList, FaStar, FaHistory,
    FaCalendarAlt, FaUtensils, FaPhone
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UserDashboardNavbar = ({ onClose }) => {
    return (
        <aside className="w-64 min-h-screen bg-orange-100 dark:bg-orange-800 text-gray-800 dark:text-white p-4 lg:relative shadow-md">
            {/* Close Button for Mobile */}
            <div className="lg:hidden flex justify-end mb-4">
                <button onClick={onClose} className="text-3xl font-bold">✕</button>
            </div>

            <h2 className="text-2xl font-bold mb-2 text-center leading-tight">
                BISTRO BOSS<br />
                <span className="text-sm font-normal">RESTAURANT</span>
            </h2>

            <nav className="flex flex-col gap-5 mt-6 text-lg font-medium">
                {/* User Links */}
                <Link to="" onClick={onClose} className="flex items-center gap-3 hover:text-yellow-600 transition-colors">
                    <FaHome /> User Home
                </Link>

                <Link to="booking" onClick={onClose} className="flex items-center gap-3 hover:text-yellow-600 transition-colors">
                    <FaCalendarAlt /> Reservation
                </Link>

                <Link to="paymenthistory" onClick={onClose} className="flex items-center gap-3 hover:text-yellow-600 transition-colors">
                    <FaHistory /> Payment History
                </Link>

                <Link to="mycart" onClick={onClose} className="flex items-center gap-3 hover:text-yellow-600 transition-colors">
                    <FaShoppingCart /> My Cart
                </Link>

                <Link to="" onClick={onClose} className="flex items-center gap-3 hover:text-yellow-600 transition-colors">
                    <FaStar /> Add Review
                </Link>

                <Link to="" onClick={onClose} className="flex items-center gap-3 hover:text-yellow-600 transition-colors">
                    <FaUtensils /> My Booking
                </Link>

                <hr className="my-6 border-gray-300 dark:border-gray-600" />

                {/* Common Links */}
                <Link to="/" onClick={onClose} className="flex items-center gap-3 hover:text-yellow-600 transition-colors">
                    <FaHome /> Home
                </Link>

                <Link to="/menu" onClick={onClose} className="flex items-center gap-3 hover:text-yellow-600 transition-colors">
                    <FaList /> Menu
                </Link>

                <Link to="/ourshop" onClick={onClose} className="flex items-center gap-3 hover:text-yellow-600 transition-colors">
                    <FaShoppingCart /> Shop
                </Link>

                <Link to="/contact" onClick={onClose} className="flex items-center gap-3 hover:text-yellow-600 transition-colors">
                    <FaPhone /> Contact
                </Link>
            </nav>
        </aside>
    );
};

export default UserDashboardNavbar;
