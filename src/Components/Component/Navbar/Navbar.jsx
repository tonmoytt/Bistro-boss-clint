import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Authincation/Authincation';

const Navbar = () => {
    const { currentUser } = useContext(AuthContext)
    const {SignoutUser}= useContext(AuthContext)
    const NavbarOption = <>
        <li><a>Home</a></li>
        <li><a>Home</a></li>
        <li><a>Home</a></li>
        <li><a>Home</a></li>
        <li><a>Home</a></li>
    </>
const handlesignout = () => {
        SignoutUser()
            .then(() => {
                alert('sign-out-successfully')
            })
    }

    return (

        <div className="navbar fixed z-10 bg-opacity-30 bg-red-300 max-w-screen-xl shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {NavbarOption}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {NavbarOption}

                </ul>
            </div>
            <div className="navbar-end">
                {
                    currentUser ? <>
                        <div>
                            <button onClick={handlesignout} className='btn'>Sign-Out</button>
                            <p className='text-red-400'> {currentUser.email}</p>
                        </div>
                    </> : <Link to='/login'><button className="btn ">Login</button></Link>
                }
            </div>
        </div>

    );
};

export default Navbar;