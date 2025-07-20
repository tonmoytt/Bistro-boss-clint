import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Authincation/Authincation';
import Swal from 'sweetalert2';

const Signup = () => {
    const { Signup } = useContext(AuthContext)
    const navigate = useNavigate()
    const [error, setError] = useState('')


    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const confirm = form.confirm.value
        const user = { name, email, password, confirm }
        console.log(user);



        // Validation
        if (!email) return setError('Email is required');
        if (!password) return setError('Password is required');
        if (!confirm) return setError('Please confirm your password');
        if (password !== confirm) return setError('Passwords do not match');
        if (password.length < 6) return setError('Password must be at least 6 characters');
        if (!/[A-Z]/.test(password)) return setError('At least one uppercase letter required');
        if (!/[0-9]/.test(password)) return setError('At least one number required');
        if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) return setError('At least one special character required');

        setError(''); // Clear errors before registering

        
      Signup(email, password)
  .then(result => {
    console.log('User registered:', result.user);

    // ✅ SweetAlert Success with Timer
    Swal.fire({
      title: 'Account Created!',
      text: 'Redirecting to login...',
      icon: 'success',
      timer: 5000, // 3 seconds
      showConfirmButton: false,
      background: '#f0fdf4', // light green
      color: '#064e3b', // dark green
      didClose: () => {
        navigate('/login');
      }
    });

    e.target.reset();
  })
  .catch(error => {
    console.log(error.message);
    setError(error.message);

    // ❌ SweetAlert Error
    Swal.fire({
      title: 'Signup Failed!',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Try Again',
      confirmButtonColor: '#ef4444',
      background: '#fef2f2',
      color: '#991b1b'
    });
  });

 


}

const googleHandle = () => {

}
return (
    <div>
        <div className="min-h-screen bg-gradient-to-br from-[#1e1f4d] to-[#2a044f] flex items-center justify-center">
            <form onSubmit={handleSubmit} className="bg-[#1e1f4d] text-white rounded-2xl shadow-2xl p-8 w-96 space-y-6">
                <h2 className="text-3xl font-semibold text-center">Sign up</h2>

                <input type="text" name="name" placeholder="User name" className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none" />

                <input type="email" name="email" placeholder="Email" className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none" />

                <input type="password" name="password" placeholder="Password" className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none" />

                <input type="password" name="confirm" placeholder="Confirm Password" className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none" />

                {error && <p className="text-red-400 text-sm font-semibold text-center">{error}</p>}

                <button type="submit" className="w-full py-2 bg-purple-500 hover:bg-blue-500 transition-colors rounded-md text-white font-semibold">
                    Sign up
                </button>

                <div className="text-center">
                    <button className="text-sm text-gray-300 hover:text-white transition">
                        Have an Account? <Link to="/login"><span className="text-[16px] underline text-green-500">Login</span></Link>
                    </button>
                </div>

                <div className="gap-2 space-x-3 flex">
                    <p onClick={googleHandle} className="text-green-500 text-lg w-1/2 btn cursor-pointer">
                        Google Login
                    </p>
                    <p className="text-red-500 text-lg w-1/2 btn cursor-not-allowed opacity-50">
                        Facebook
                    </p>
                </div>
            </form>
        </div>
    </div>
);
};

export default Signup;