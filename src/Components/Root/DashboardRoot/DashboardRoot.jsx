import React, { useState } from 'react';
import DashboardNavbar from '../../../DashBoardmain/DashboardNavbar/DashboardNavbar';
import { Outlet } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const DashboardRoot = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="drawer lg:drawer-open">
            {/* REMOVE checked and onChange here */}
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content flex flex-col min-h-screen">
                {/* Mobile Navbar */}
                <div className="lg:hidden p-4 bg-[#D19F54] text-white flex justify-between items-center">
                    <h1 className="text-xl font-bold">BISTRO BOSS</h1>
                    {/* Label toggles checkbox automatically */}
                    <label htmlFor="dashboard-drawer" className="btn btn-ghost">
                        <FaBars className="text-2xl" />
                    </label>
                </div>

                {/* Main content */}
                <div className="p-4 flex-grow">
                    <Outlet />
                </div>
            </div>

            <div className="drawer-side z-40">
                {/* Overlay toggles checkbox */}
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <DashboardNavbar
                    onClose={() => {
                        // Close drawer by unchecking input
                        const checkbox = document.getElementById('dashboard-drawer');
                        if (checkbox) checkbox.checked = false;
                    }}
                />
            </div>
        </div>
    );
};

export default DashboardRoot;
