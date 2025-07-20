import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Authincation/Authincation';
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const { currentUser, SignoutUser } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleSignOut = () => {
        SignoutUser().then(() => alert('Sign-out successfully'));
    };

    // 👉 Mobile menu link click handle
    const handleLinkClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setMenuOpen(false);
    };

    const menuItems = (
        <>
            <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
            <Link to="/contact" className="hover:text-yellow-400 transition">Contact Us</Link>
            <Link to="/dashboard" className="hover:text-yellow-400 transition">Dashboard</Link>
            <Link to="/menu" className="hover:text-yellow-400 transition">Menu</Link>
            <Link to="/ourshop" className="text-green-400 font-bold flex items-center gap-2">
                <span>Our Shop</span>
                <span className="bg-green-400 rounded-full p-[4px]">
                    <FaShoppingCart className="text-white text-sm" />
                </span>
            </Link>
        </>
    );

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-black/60 via-black/40 to-black/60 backdrop-blur-lg shadow-lg text-white">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div>
                        <p className="text-xl font-bold uppercase">Bistro Boss</p>
                        <p className="tracking-[5px] text-sm uppercase text-gray-300">Restaurant</p>
                    </div>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex space-x-6 text-sm font-semibold uppercase items-center">
                        {menuItems}
                    </nav>

                    {/* Auth Buttons */}
                    <div className="hidden lg:flex items-center space-x-4">
                        {currentUser ? (
                            <>
                                <button
                                    onClick={handleSignOut}
                                    className="rounded-full font-semibold hover:text-yellow-400 transition"
                                >
                                    Sign Out
                                </button>
                                <div className="hover:scale-110 transition duration-200 text-white hover:text-yellow-400">
                                    <FaUserAlt />
                                </div>
                            </>
                        ) : (
                            <Link to="/login">
                                <button className="bg-white text-black px-3 py-1 rounded-full font-semibold hover:bg-yellow-300 transition">
                                    Login
                                </button>
                            </Link>
                        )}
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-white focus:outline-none"
                        >
                            <svg className="w-7 h-7 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Slide */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden bg-black/90 px-6 py-4 space-y-3 font-semibold uppercase"
                    >
                        <div className="flex flex-col gap-3 text-[15px]">
                            <Link to="/" onClick={handleLinkClick}>Home</Link>
                            <Link to="/contact" onClick={handleLinkClick}>Contact Us</Link>
                            <Link to="/dashboard" onClick={handleLinkClick}>Dashboard</Link>
                            <Link to="/menu" onClick={handleLinkClick}>Menu</Link>
                            <Link to="/ourshop" onClick={handleLinkClick} className="flex items-center gap-2">
                                <span>Our Shop</span>
                                <span className="bg-green-400 rounded-full p-[4px]">
                                    <FaShoppingCart className="text-white text-sm" />
                                </span>
                            </Link>
                        </div>
                        <div className="pt-3 border-t border-white/20 mt-2">
                            {currentUser ? (
                                <>
                                    <p className="text-yellow-300 text-sm">{currentUser.email}</p>
                                    <button
                                        onClick={() => {
                                            handleSignOut();
                                            setMenuOpen(false);
                                        }}
                                        className="mt-3 bg-white text-black px-4 py-1 rounded-full font-semibold hover:bg-yellow-300 transition"
                                    >
                                        Sign Out
                                    </button>
                                </>
                            ) : (
                                <Link to="/login" onClick={handleLinkClick}>
                                    <button className="mt-3 bg-white text-black px-4 py-1 rounded-full font-semibold hover:bg-yellow-300 transition">
                                        Login
                                    </button>
                                </Link>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
        
    );
};

export default Navbar;
