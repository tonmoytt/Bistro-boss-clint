import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// React Query imports
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

// Page Imports
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Component/Home/Home';
import Login from './Components/Component/Navbar/Login/Login';
import Signup from './Components/Component/Navbar/Signup/Signup';
import Authincation from './Components/Authincation/Authincation';
import OurMenu from './Components/Component/OtherPage/Our Menu/OurMenu';
import OurShop from './Components/Component/OurShop pages/OurShop';
import ContactUs from './Components/Component/Navbar/ContactUs/ContactUs';
import Dashboard from './Components/Component/Navbar/Dashboard/Dashboard';
import CartContextProvider from './Components/Component/Navbar/Dashboard/Cardcontext/Cardcontext';
import { Toaster } from 'react-hot-toast';
import PrivetRoute from './Components/Authincation/PrivetRoute/PrivetRoute';
import { HelmetProvider } from 'react-helmet-async';

// Admin Dashboard
import DashBoardmain from './DashBoardmain/DashBoardmain';
import Addmenu from './DashBoardmain/Addmenu/Addmenu';
import DashboardRoot from './Components/Root/DashboardRoot/DashboardRoot';
import ManageAllItems from './DashBoardmain/ManageAllItems/ManageAllItems';
import ManageAllBookings from './DashBoardmain/ManageAllBookings/ManageAllBookings';
import Allusers from './DashBoardmain/Allusers/Allusers';

// User Dashboard
import UserDashboard from './UserDashboardNavbar/UserDashboardNavbar';
import UserRoot from './Components/Root/UserRoot/UserRoot';
import UserHome from './UserDashboardNavbar/UserHome/UserHome';
import Tablebooking from './UserDashboardNavbar/Tablebooking/Tablebooking';
import PaymentHistory from './UserDashboardNavbar/PaymentHistory/PaymentHistory';
import AdminPrivateRoute from './Components/Authincation/PrivetRoute/AdminPrivateRoute/AdminPrivateRoute';

// React Query client
const queryClient = new QueryClient();

// Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/signup', element: <Signup /> },
      { path: '/contact', element: <ContactUs /> },
      { path: '/menu', element: <OurMenu /> },
      { path: '/ourshop', element: <PrivetRoute><OurShop /></PrivetRoute> },
    ]
  },
  {
    path: '/admindashboard',
    element: <AdminPrivateRoute><DashboardRoot /></AdminPrivateRoute>,
    children: [
      { path: '/admindashboard', element: <DashBoardmain /> },
      { path: 'dashboardmain', element: <DashBoardmain /> },
      { path: 'addmenu', element: <Addmenu /> },
      { path: 'allitems', element: <ManageAllItems /> },
      { path: 'managebookings', element: <ManageAllBookings /> },
      { path: 'allusers', element: <Allusers /> },
    ]
  },
  {
    path: '/userdashboard',
    element: <PrivetRoute><UserRoot /></PrivetRoute>,
    children: [
      { index: true, element: <UserHome /> },
      { path: 'booking', element: <Tablebooking /> },
      { path: 'mycart', element: <Dashboard /> },
      { path: 'paymenthistory', element: <PaymentHistory /> },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className='mx-auto'>
        <Authincation>
          <CartContextProvider>
            <HelmetProvider>
              <>
                <RouterProvider router={router} />
                <Toaster
                  position="top-right"
                  toastOptions={{
                    style: {
                      borderRadius: '8px',
                      background: '#333',
                      color: '#fff',
                    },
                    duration: 4000,
                    success: {
                      duration: 3000,
                      theme: {
                        primary: 'green',
                        secondary: 'white',
                      },
                    },
                  }}
                />
              </>
            </HelmetProvider>
          </CartContextProvider>
        </Authincation>
      </div>
    </QueryClientProvider>
  </StrictMode>
);
