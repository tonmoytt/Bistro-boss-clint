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
        path: '/menu',
        element: <OurMenu></OurMenu>
      },
      {
        path: '/ourshop',
        element: <OurShop></OurShop>
      },

    ]

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='max-w-screen-xl mx-auto'>
      <Authincation>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>

      </Authincation>
    </div>

  </StrictMode>,
)
