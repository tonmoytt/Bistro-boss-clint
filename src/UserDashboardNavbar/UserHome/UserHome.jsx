import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../Components/Authincation/Authincation';
import { Link } from 'react-router-dom';

const UserHome = () => {
    const [profile, setProfile] = useState({})
    const { currentUser } = useContext(AuthContext)

    useEffect(() => {
        axios.get(`https://bistro-boss-server-two-gamma.vercel.app/get-user/${currentUser.email.toLowerCase()}`, {
            withCredentials: true
        })

            .then(response => {
                setProfile(response.data);
            })
            .catch(error => {
                console.error('Failed to fetch profile:', error);
            });
    }, []);

    return (
        <div>
            {/* Main Content */}
            <main className="flex-1 p-6 overflow-auto">
                <h1 className="text-xl font-semibold mb-6">HI, WELCOME BACK!</h1>

                {/* Top Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-400 text-white rounded-xl p-4 shadow-md">
                        <p className="text-sm">📅</p>
                        <Link to='/menu'> <div>
                            <h2 className="text-2xl font-bold">205</h2>
                            <p>Menu</p>
                        </div>
                        </Link>
                    </div>
                    <div className="bg-gradient-to-r from-amber-300 to-orange-100 text-white rounded-xl p-4 shadow-md">
                        <p className="text-sm">🛒</p>
                        <Link to='/ourshop'> <div>
                            <h2 className="text-2xl font-bold">103</h2>
                            <p>Shop-Item</p>
                        </div>  </Link>


                    </div>
                    <div className="bg-gradient-to-r from-pink-500 to-pink-300 text-white rounded-xl p-4 shadow-md">
                        <p className="text-sm">📞</p>
                      <Link to='/contact'> <h2 className="text-2xl font-bold">{profile.phone || '013xxxxxxxx'}</h2> </Link> 
                        <p>Contact</p>
                    </div>
                </div>

                {/* Profile + Activities */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Profile Card */}
                    <div className="bg-orange-100 dark:bg-orange-900 p-6 h-[400px] rounded-lg flex flex-col justify-center items-center shadow">
                        <div className="w-24 h-24 rounded-full border-4 border-orange-400 mb-4 overflow-hidden">
                            <img
                                src={profile.photoURL || 'https://i.ibb.co/SDjzwBSF/p6.jpg'}
                                alt="User Profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-xl font-semibold">{profile.name || 'AWLAD HOSSAIN'}</h2>
                        <p className="text-red-500 text-sm">{profile.email || 'tonmoytafsirul9@gmail.com'}</p>
                    </div>

                    {/* Activity */}
                    <div className="bg-yellow-100 dark:bg-yellow-900 p-6 rounded-lg shadow">
                        <h2 className="text-xl font-bold mb-4">Your Activities</h2>
                        <ul className="space-y-2 text-lg">
                            <li><span className="text-blue-600 dark:text-blue-400">⭐ Orders:</span> <span className="text-blue-600">6</span></li>
                            <li><span className="text-green-600 dark:text-green-400">⭐ Reviews:</span> <span className="text-green-600">2</span></li>
                            <li><span className="text-orange-600 dark:text-orange-400">⭐ Bookings:</span> <span className="text-orange-600">1</span></li>
                            <li><span className="text-red-600 dark:text-red-400">⭐ Payment:</span> <span className="text-red-600">3</span></li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default UserHome;
