import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Authincation/Authincation';
import { FaShoppingCart } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Swal from 'sweetalert2';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import md5 from 'md5';
import { useLocation } from 'react-router-dom';
import axios from 'axios'; // ✅ এখানে axios import করলাম

const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const { currentUser, SignoutUser } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // backend er photoURL er jonno
    const [backendPhoto, setBackendPhoto] = useState(null);
    useEffect(() => {
        const fetchBackendPhoto = async () => {
            if (currentUser?.email) {
                try {
                    const encodedEmail = encodeURIComponent(currentUser.email.toLowerCase());
                    const res = await axios.get(`http://localhost:5000/users/${encodedEmail}`, {
                        withCredentials: true,
                    });

                    console.log('User photo:', res.data.photoURL);
                    setBackendPhoto(res.data.photoURL || null);
                } catch (err) {
                    console.error('Failed to fetch backend image:', err);
                }
            }
        };

        fetchBackendPhoto();
    }, [currentUser]);

    const getGravatarUrl = (email) => {
        const fallbackImage = 'https://i.ibb.co/r2HPvHYt/p7.jpg';
        if (!email) return fallbackImage;
        const hash = md5(email.trim().toLowerCase());
        return `https://www.gravatar.com/avatar/${hash}?d=${encodeURIComponent(fallbackImage)}&s=64`;
    };

    const getProfileImage = () => {
        const fallbackImage = 'https://i.ibb.co/r2HPvHYt/p7.jpg';

        if (backendPhoto) return backendPhoto;
        if (currentUser?.email) return getGravatarUrl(currentUser.email);
        return fallbackImage;
    };

    // 🔥 JWT কুকি ক্লিয়ার করার জন্য backend logout কল এখানে যুক্ত করলাম
    const handleSignOut = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setMenuOpen(false);
        Swal.fire({
            title: 'Are you sure?',
            text: "You will be signed out!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Sign out',
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    // Backend logout call - JWT token cookie ক্লিয়ার করার জন্য
                    await axios.post(('http://localhost:5000/logout'), {}, { withCredentials: true });

                    // Firebase logout
                    await SignoutUser();

                    Swal.fire({
                        title: 'Signed Out!',
                        text: 'You have been successfully signed out.',
                        icon: 'success',
                        confirmButtonColor: '#3085d6',
                    });

                    setMenuOpen(false);
                } catch (error) {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Failed to sign out. Please try again.',
                        icon: 'error',
                        confirmButtonColor: '#d33',
                    });
                }
            }
        });
    };

    const handleLinkClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setMenuOpen(false);
    };

    const menuItems = (
        <>
            <Link
                to="/"
                className={`hover:text-yellow-400 transition duration-300 ease-in-out ${currentPath === '/'
                    ? 'bg-yellow-500 text-black px-3 py-1 rounded-md animate-pulse scale-105'
                    : ''
                    }`}
                onClick={handleLinkClick}
            >
                Home
            </Link>
            <Link
                to="/contact"
                className={`hover:text-yellow-400 transition duration-300 ease-in-out ${currentPath === '/contact'
                    ? 'bg-yellow-500 text-black px-3 py-1 rounded-md animate-pulse scale-105'
                    : ''
                    }`}
                onClick={handleLinkClick}
            >
                Contact Us
            </Link>
            <Link
                to="/userdashboard"
                className={`hover:text-yellow-400 transition duration-300 ease-in-out ${currentPath === '/dashboard'
                    ? 'bg-yellow-500 text-black px-3 py-1 rounded-md animate-pulse scale-105'
                    : ''
                    }`}
                onClick={handleLinkClick}
            >
                Dashboard
            </Link>
            <Link
                to="/menu"
                className={`hover:text-yellow-400 transition duration-300 ease-in-out ${currentPath === '/menu'
                    ? 'bg-yellow-500 text-black px-3 py-1 rounded-md animate-pulse scale-105'
                    : ''
                    }`}
                onClick={handleLinkClick}
            >
                Menu
            </Link>
            <Link
                to="/ourshop"
                className={`text-green-400 font-bold flex items-center gap-2 transition duration-300 ease-in-out ${currentPath === '/ourshop'
                    ? 'bg-yellow-500 text-black px-3 py-1 rounded-md animate-pulse scale-105'
                    : ''
                    }`}
                onClick={handleLinkClick}
            >
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
                    <div>
                        <p className="text-xl font-bold uppercase">Bistro Boss</p>
                        <p className="tracking-[5px] text-sm uppercase text-gray-300">Restaurant</p>
                    </div>

                    <nav className="hidden lg:flex space-x-6 text-sm font-semibold uppercase items-center">
                        {menuItems}
                    </nav>

                    <div className="hidden lg:flex items-center space-x-4">
                        {currentUser ? (
                            <>
                                <button
                                    onClick={handleSignOut}
                                    // className="cursor-pointer rounded-full font-semibold hover:text-yellow-400 transition"
                                    className={` hover:cursor-pointer text-yellow-400 transition duration-300 ease-in-out  animate-pulse scale-105
                     
                    }`}
                                >
                                    Sign Out
                                </button>

                                {isDesktop ? (
                                    <div className="relative group">

                                        <img
                                            id="user-avatar"
                                            src={getProfileImage()}
                                            alt="profile"
                                            data-tooltip-id="user-name-tooltip"
                                            data-tooltip-content={currentUser.displayName || currentUser.email}
                                            className="w-9 h-9 rounded-full object-cover border-2 border-yellow-400 hover:scale-110 transition duration-200"
                                            loading="lazy"
                                        />
                                        <Tooltip id="user-name-tooltip" place="bottom" />

                                    </div>
                                ) : (
                                    <img
                                        src={getProfileImage()}
                                        alt="profile"
                                        className="w-9 h-9 rounded-full object-cover border-2 border-yellow-400"
                                        loading="lazy"
                                    />
                                )}
                            </>
                        ) : (
                            <Link to="/login">
                                <button className="relative px-6 py-[6px] font-semibold uppercase text-sm rounded-full border border-yellow-400 text-yellow-300 overflow-hidden group hover:text-black transition duration-300 ease-in-out">
                                    <span className="absolute inset-0 bg-yellow-400 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-in-out z-0"></span>
                                    <span className="relative z-10 tracking-wide">Login</span>
                                </button>
                            </Link>
                        )}
                    </div>

                    {/* Hamburger menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="text-white focus:outline-none"
                            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
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
                            {menuItems}
                        </div>
                        <div className="pt-3 border-t border-white/20 mt-2">
                            {currentUser ? (
                                <>
                                    <div className="flex items-center gap-3 mt-2">
                                        <img
                                            src={getProfileImage()}
                                            alt="profile"
                                            className="w-8 h-8 rounded-full border-2 border-yellow-400"
                                            loading="lazy"
                                        />
                                        <p className="text-yellow-300 text-sm break-all">{currentUser.email}</p>
                                    </div>
                                    <button
                                        onClick={() => {
                                            handleSignOut();
                                            setMenuOpen(false);
                                        }}
                                        className="mt-3  cursor-pointer bg-white text-black px-4 py-1 rounded-full font-semibold hover:bg-yellow-300 transition"
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
