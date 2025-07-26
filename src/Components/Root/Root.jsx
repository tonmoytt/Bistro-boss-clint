import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Component/Footer/Footer';
import Navbar from '../Component/Navbar/Navbar';
 

const Root = () => {
    const location = useLocation()
    const isloginpage= location.pathname.includes('login') || location.pathname.includes('signup') || location.pathname.includes('dashboardmain') 
     
  const Dashboard = location.pathname.includes('dashboardmain') || location.pathname.includes('addmenu')
    return (
        <div>
            
          
            {Dashboard ||  <Navbar></Navbar>}  
            <Outlet></Outlet>
           {isloginpage || <Footer></Footer>}
        </div>
    );
};

export default Root;