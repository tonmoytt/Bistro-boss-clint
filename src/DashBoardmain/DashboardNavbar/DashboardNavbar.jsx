import React from 'react';
import {
    FaHome,
    FaUtensils,
    FaList,
    FaCalendarAlt,
    FaUsers,
    FaShoppingCart,
    FaBars,
    FaEnvelope,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DashboardNavbar = ({ onClose }) => {
    return (
        <aside className="w-64 min-h-screen bg-[#D19F54] text-white p-4 lg:relative">
            {/* Close Button for Mobile */}
            <div className="lg:hidden flex justify-end mb-4">
                <button onClick={onClose} className="text-3xl font-bold">
                    ✕
                </button>
            </div>

            <h2 className="text-2xl font-bold mb-8 text-center">BISTRO BOSS</h2>
            <nav className="flex flex-col gap-6 text-start">
                <Link
                    to=""
                    onClick={onClose}
                    className="flex items-center gap-3 hover:text-yellow-300 transition-colors duration-200"
                >
                    <FaHome /> Admin Home
                </Link>

                <Link
                    to="addmenu"
                    onClick={onClose}
                    className="flex items-center gap-3 hover:text-yellow-300 transition-colors duration-200"
                >
                    <FaUtensils /> Add Items
                </Link>

                <Link 
                    to="allitems"
                    onClick={onClose}
                    className="flex items-center gap-3 hover:text-yellow-300 transition-colors duration-200"
                >
                    <FaList /> Manage Items
                </Link>

                <Link
                    to="managebookings"
                    onClick={onClose}
                    className="flex items-center gap-3 hover:text-yellow-300 transition-colors duration-200"
                >
                    <FaCalendarAlt /> Manage Bookings
                </Link>

                <Link
                    to="allusers"
                    onClick={onClose}
                    className="flex items-center gap-3 hover:text-yellow-300 transition-colors duration-200"
                >
                    <FaUsers /> All Users
                </Link>

                <hr className="my-6 border-white/30" />

                <Link
                    to="/"
                    onClick={onClose}
                    className="flex items-center gap-3 hover:text-yellow-300 transition-colors duration-200"
                >
                    <FaHome /> Home
                </Link>

                <Link
                    to="/menu"
                    onClick={onClose}
                    className="flex items-center gap-3 hover:text-yellow-300 transition-colors duration-200"
                >
                    <FaBars /> Menu
                </Link>

                <Link
                    to="/ourshop"
                    onClick={onClose}
                    className="flex items-center gap-3 hover:text-yellow-300 transition-colors duration-200"
                >
                    <FaShoppingCart /> Shop
                </Link>

                <Link
                    to="/contact"
                    onClick={onClose}
                    className="flex items-center gap-3 hover:text-yellow-300 transition-colors duration-200"
                >
                    <FaEnvelope /> Contact
                </Link>
            </nav>
        </aside>
    );
};

export default DashboardNavbar;
