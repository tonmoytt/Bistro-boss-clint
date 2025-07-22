import React, { useContext, useRef, useState } from 'react';
import { FaEye, FaEyeSlash, FaLock, FaUser } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Authincation/Authincation';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';

const Login = () => {
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef();

  const { Login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const checkbox = form.checkbox.checked;

    if (!checkbox) {
      setError('Please accept our terms and conditions');
      return;
    }

    try {
      // Firebase (বা অন্য) দিয়ে login
      const res = await Login(email, password);
      const user = res.user;
      await user.reload(); // fresh user data reload

      // JWT token generate করার জন্য backend এ request পাঠানো
      // এখানে withCredentials:true দরকার যাতে cookie সঠিকভাবে সেট হয়
      const { data } = await axios.post(
        'http://localhost:5000/jwt',
        { email: user.email },
        { withCredentials: true }
      );

      if (data.success) {
        Swal.fire({
          title: 'Login Successful!',
          text: `Welcome back, ${user.email}`,
          icon: 'success',
          confirmButtonText: 'Continue',
          confirmButtonColor: '#facc15',
          background: '#1f2937',
          color: '#fef3c7',
        });

        form.reset();
        setError('');
        navigate(from, { replace: true });
      } else {
        throw new Error('Failed to get JWT token');
      }
    } catch (error) {
      Swal.fire({
        title: 'Login Failed!',
        text: error.message || 'Please check your email and password.',
        icon: 'error',
        confirmButtonText: 'Try Again',
        confirmButtonColor: '#ef4444',
        background: '#1f2937',
        color: '#fecaca',
      });

      setError('Login failed. Please check your email and password.');
    }
  };

  return (
    <div>
      <Helmet>
        <title>Bistro-Boss | Restaurant | Login</title>
      </Helmet>
      <form onSubmit={handleLogin}>
         <div
          style={{
            background:
              'radial-gradient(circle at center, #122E44 0%, #0c1e3c 50%, #06121e 100%)',
          }}
          className="min-h-screen flex items-center justify-center px-4"
        >
          <div className="w-full max-w-sm bg-[#0f2a44]/60 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-blue-400/30">
            <h2 className="text-center text-white text-2xl font-semibold mb-6">Login</h2>

            {/* Email Field */}
            <div className="relative mb-4">
              <FaUser className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                ref={emailRef}
                name="email"
                required
                placeholder="Email"
                className="pl-10 pr-4 py-2 w-full rounded bg-[#1b2a49] text-white border border-blue-500 focus:outline-none"
              />
            </div>

            {/* Password Field */}
            <div className={`relative ${error ? 'mb-2' : 'mb-4'}`}>
              <FaLock className="absolute top-3 left-3 text-gray-400" />
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                required
                placeholder="Password"
                className="pl-10 pr-10 py-2 w-full rounded bg-[#1b2a49] text-white border border-blue-500 focus:outline-none"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-3 right-3 text-gray-400 cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-400 text-sm pb-4">{error}</p>}

            {/* Remember + Forgot */}
            <div className="flex justify-between text-sm text-gray-300 mb-5">
              <label>
                <input type="checkbox" name="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-blue-400 hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="cursor-pointer w-full py-2 rounded font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-400 hover:brightness-110 transition"
            >
              LOGIN
            </button>

            <p className="text-center text-gray-100 mt-6">
              Don't have an account?{' '}
              <Link to="/signup" className="text-green-700 text-[17px] underline">
                Signup
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
