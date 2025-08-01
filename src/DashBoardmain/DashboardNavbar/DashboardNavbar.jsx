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
    FaHistory,
    FaStar,
    FaPhone
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import UseAdmin from '../../Components/UseAdmin/UseAdmin';

const DashboardNavbar = ({ onClose }) => {
     const [isAdmin, isAdminLoading] = UseAdmin();

    if (isAdminLoading) {
        return <p className="text-center text-white">Loading...</p>;
    } // In production, get this from context or props

    return (
        <aside className="w-64 min-h-screen bg-[#D19F54] text-white p-4 lg:relative">
            {/* Mobile Close Button */}
            <div className="lg:hidden flex justify-end mb-4">
                <button onClick={onClose} className="text-3xl font-bold">✕</button>
            </div>

            <h2 className="text-2xl font-bold mb-8 text-center">
                BISTRO BOSS
                <br />
                <span className="text-sm font-light">RESTAURANT</span>
            </h2>

            <nav className="flex flex-col gap-6 text-start">
                {isAdmin ? (
                    <>
                        <Link to="/admindashboard" onClick={onClose} className="flex items-center gap-3 hover:text-yellow-300 transition-colors duration-200">
                            <FaHome /> Admin Home
                        </Link>

                        <Link to="addmenu" onClick={onClose} className="flex items-center gap-3 hover:text-yellow-300 transition-colors duration-200">
                            <FaUtensils /> Add Items
                        </Link>

                        <Link to="allitems" onClick={onClose} className="flex items-center gap-3 hover:text-yellow-300 transition-colors duration-200">
                            <FaList /> Manage Items
                        </Link>

                        <Link to="managebookings" onClick={onClose} className="flex items-center gap-3 hover:text-yellow-300 transition-colors duration-200">
                            <FaCalendarAlt /> Manage Bookings
                        </Link>

                        <Link to="allusers" onClick={onClose} className="flex items-center gap-3 hover:text-yellow-300 transition-colors duration-200">
                            <FaUsers /> All Users
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to="/" onClick={onClose} className="flex items-center gap-3 hover:text-yellow-200 transition-colors duration-200">
                            <FaHome /> User Home
                        </Link>

                        <Link to="booking" onClick={onClose} className="flex items-center gap-3 hover:text-yellow-200 transition-colors duration-200">
                            <FaCalendarAlt /> Reservation
                        </Link>

                        <Link to="paymenthistory" onClick={onClose} className="flex items-center gap-3 hover:text-yellow-200 transition-colors duration-200">
                            <FaHistory /> Payment History
                        </Link>

                        <Link to="mycart" onClick={onClose} className="flex items-center gap-3 hover:text-yellow-200 transition-colors duration-200">
                            <FaShoppingCart /> My Cart
                        </Link>

                        <Link to="review" onClick={onClose} className="flex items-center gap-3 hover:text-yellow-200 transition-colors duration-200">
                            <FaStar /> Add Review
                        </Link>

                        <Link to="mybooking" onClick={onClose} className="flex items-center gap-3 hover:text-yellow-200 transition-colors duration-200">
                            <FaUtensils /> My Booking
                        </Link>
                    </>
                )}

                <hr className="my-6 border-white/30" />

                {/* Common Links */}
                <Link to="/" onClick={onClose} className="flex items-center gap-3 hover:text-yellow-300 transition-colors duration-200">
                    <FaHome /> Home
                </Link>

                <Link to="/menu" onClick={onClose} className="flex items-center gap-3 hover:text-yellow-300 transition-colors duration-200">
                    <FaBars /> Menu
                </Link>

                <Link to="/ourshop" onClick={onClose} className="flex items-center gap-3 hover:text-yellow-300 transition-colors duration-200">
                    <FaShoppingCart /> Shop
                </Link>

                <Link to="/contact" onClick={onClose} className="flex items-center gap-3 hover:text-yellow-300 transition-colors duration-200">
                    <FaPhone /> Contact
                </Link>
            </nav>
        </aside>
    );
};

export default DashboardNavbar;
