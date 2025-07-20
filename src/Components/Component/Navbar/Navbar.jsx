import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Authincation/Authincation';
import { FaShoppingCart, FaUser, FaUserAlt } from 'react-icons/fa';  // Shopping cart icon

const Navbar = () => {
    const { currentUser, SignoutUser } = useContext(AuthContext);
    const [User, setUser] = useState(false);

    const handleSignOut = () => {
        SignoutUser().then(() => alert('Sign-out successfully'));
    };

    const menuItems = (
        <>
            <Link to="/" className="hover:text-yellow-400">Home</Link>
            <Link to="/" className="hover:text-yellow-400">Contact Us</Link>
            <Link to="/" className="hover:text-yellow-400">Dashboard</Link>
            <Link to="/menu" className="hover:text-yellow-400">Menu</Link>
            <Link to="/" className="text-green-400 font-bold flex items-center gap-2">
                <span>Our Shop</span>
                <span className="bg-green-400 rounded-full p-[4px]">
                    <FaShoppingCart className="text-white text-sm" />
                </span>
            </Link>


        </>
    );

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md shadow-md text-white">
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
                                {/* <p className="text-sm text-red-300">{currentUser.email}</p> */}
                                <Link onClick={handleSignOut}>
                                    <button
                                        className="rounded-full font-semibold hover:text-yellow-400 transition-colors duration-200 cursor-pointer"
                                    >
                                        Sign Out
                                    </button>
                                </Link>


                                <div className="hover:scale-110 transition-transform duration-200 text-white hover:text-yellow-400">
                                    <FaUserAlt />
                                </div>




                            </>
                        ) : (
                            <Link to="/login">
                                <button className="bg-white text-black px-3 py-1 rounded-full font-semibold">
                                    Login
                                </button>
                            </Link>
                        )}
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="lg:hidden">
                        <button onClick={() => setUser(!User)} className="text-white focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d={User ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {User && (
                    <div className="lg:hidden mt-2 pb-4 space-y-2 text-sm font-semibold uppercase">
                        <div className="flex flex-col gap-2">
                            {menuItems}
                        </div>
                        <div className="pt-4">
                            {currentUser ? (
                                <>
                                    <p className="text-red-300">{currentUser.email}</p>
                                    <button
                                        onClick={handleSignOut}
                                        className="bg-white text-black px-3 py-1 rounded-full font-semibold mt-2"
                                    >
                                        Sign Out
                                    </button>
                                </>
                            ) : (
                                <Link to="/login">
                                    <button className="bg-white text-black px-3 py-1 rounded-full font-semibold mt-2">
                                        Login
                                    </button>
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navbar;
