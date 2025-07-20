import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Component/Home/Home';
import Login from './Components/Component/Navbar/Login/Login';
import Signup from './Components/Component/Navbar/Signup/Signup';
import Authincation from './Components/Authincation/Authincation';
import OurMenu from './Components/Component/OtherPage/Our Menu/OurMenu';
import { HelmetProvider } from 'react-helmet-async'
import OurShop from './Components/Component/OurShop pages/OurShop';
import ContactUs from './Components/Component/Navbar/ContactUs/ContactUs';
import Dashboard from './Components/Component/Navbar/Dashboard/Dashboard';
import CartContextProvider from './Components/Component/Navbar/Dashboard/Cardcontext/Cardcontext';

// Import Toaster from react-hot-toast
import { Toaster } from 'react-hot-toast';
import PrivetRoute from './Components/Authincation/PrivetRoute/PrivetRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
      {
        path: '/contact',
        element: <ContactUs></ContactUs>
      },
      {
        path: '/dashboard',
        element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute> 
      },
      {
        path: '/menu',
        element: <OurMenu></OurMenu>
      },
      {
        path: '/ourshop',
        element: <PrivetRoute><OurShop></OurShop></PrivetRoute> 
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-screen-xl mx-auto'>
      <Authincation>
        <CartContextProvider>
          <HelmetProvider>
            <>
              <RouterProvider router={router} />
              {/* Toaster should be placed here once */}
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
  </StrictMode>,
);
