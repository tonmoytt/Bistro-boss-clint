import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Authincation/Authincation';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import auth from '../../../Authincation/Firebase.init.js/Firebase.init';

const Signup = () => {
  const { Signup, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [photoFile, setPhotoFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhotoFile(file);
      setPreview(URL.createObjectURL(file));
    } else {
      setPhotoFile(null);
      setPreview(null);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.displayName.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const confirm = form.confirm.value;
    const photoURL = form.photoURL.value.trim() || null;

    // Validation
    if (!email) return setError('Email is required');
    if (!password) return setError('Password is required');
    if (!confirm) return setError('Please confirm your password');
    if (password !== confirm) return setError('Passwords do not match');
    if (password.length < 6) return setError('Password must be at least 6 characters');
    if (!/[A-Z]/.test(password)) return setError('At least one uppercase letter required');
    if (!/[0-9]/.test(password)) return setError('At least one number required');
    if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) return setError('At least one special character required');

    setError('');

    try {
      const result = await Signup(email, password);

      // এখানে তুমি যদি photoFile থাকে, তাহলে সেটা Firebase Storage ইত্যাদিতে আপলোড করো, নাহলে photoURL ইউজ করো
      let finalPhotoURL = photoURL;

      if (photoFile) {
        // TODO: এখানে Firebase Storage বা অন্য কোন স্টোরেজে আপলোডের কোড লাগবে
        // const uploadResult = await uploadFileToStorage(photoFile);
        // finalPhotoURL = uploadResult.url;
        // এখন শুধু ইউজার লোকাল ফাইল থেকে ছবি দিলে আমরা সেটা আপলোড করার কোড দিতে হবে
        // আপলোডের কোড না থাকলে এইখানে photoURL রাখবে null বা empty
        // (upload logic যোগ করতে চাও বলো)
        finalPhotoURL = preview; // অস্থায়ী, শুধু প্রিভিউ দেখানোর জন্য
      }

      await updateUserProfile(displayName, finalPhotoURL);

      Swal.fire({
        title: 'Account Created!',
        text: 'Redirecting to login...',
        icon: 'success',
        timer: 3000,
        showConfirmButton: false,
        background: '#f0fdf4',
        color: '#064e3b',
        didClose: () => {
          navigate('/login');
        }
      });

      form.reset();
      setPhotoFile(null);
      setPreview(null);
    } catch (error) {
      console.error(error);
      setError(error.message);
      Swal.fire({
        title: 'Signup Failed!',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Try Again',
        confirmButtonColor: '#ef4444',
        background: '#fef2f2',
        color: '#991b1b'
      });
    }
  };

  const googleHandle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log('Google user:', user);

        Swal.fire({
          title: 'Logged in with Google!',
          icon: 'success',
          timer: 3000,
          showConfirmButton: false,
          background: '#f0fdf4',
          color: '#064e3b',
        });

        navigate('/');
      })
      .catch((error) => {
        console.error('Google Login Error:', error);
        Swal.fire({
          title: 'Google Login Failed!',
          text: error.message,
          icon: 'error',
          confirmButtonText: 'Try Again',
          confirmButtonColor: '#ef4444',
          background: '#fef2f2',
          color: '#991b1b',
        });
      });
  };

  return (
    <div>
      <Helmet>
        <title>Bistro-Boss | Restaurant | Sign-up</title>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-[#1e1f4d] to-[#2a044f] flex items-center justify-center">
        <form onSubmit={handleSubmit} className="bg-[#1e1f4d] text-white rounded-2xl shadow-2xl p-8 w-96 space-y-6" encType="multipart/form-data">
          <h2 className="text-3xl font-semibold text-center">Sign up</h2>

          <input
            type="text"
            name="displayName"
            placeholder="User name"
            className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none"
            required
          />

          <input
            type="password"
            name="confirm"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none"
            required
          />

          {/* Photo URL ইনপুট */}
          <input
            type="text"
            name="photoURL"
            placeholder="Photo URL (optional)"
            className="w-full px-4 py-2 rounded-md bg-white text-black focus:outline-none"
            disabled={!!photoFile} // যদি file সিলেক্ট করা থাকে URL disable করে দাও
          />

          {/* File picker */}
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full text-white bg-gray-700 rounded-md p-1"
          />

          {/* প্রিভিউ দেখাও */}
          {preview && (
            <img
              src={preview}
              alt="preview"
              className="w-32 h-32 object-cover rounded-md border border-gray-300 mx-auto"
            />
          )}

          {error && <p className="text-red-400 text-sm font-semibold text-center">{error}</p>}

          <button
            type="submit"
            className="w-full py-2 bg-purple-500 hover:bg-blue-500 transition-colors rounded-md text-white font-semibold"
          >
            Sign up
          </button>

          <div className="text-center">
            <button className="text-sm text-gray-300 hover:text-white transition" type="button">
              Have an Account?{' '}
              <Link to="/login">
                <span className="text-[16px] underline text-green-500">Login</span>
              </Link>
            </button>
          </div>

          <div className="gap-2 space-x-3 flex">
            <p onClick={googleHandle} className="text-green-500 text-lg w-1/2 btn cursor-pointer select-none">
              Google Login
            </p>
            <p className="text-red-500 text-lg w-1/2 btn cursor-not-allowed opacity-50 select-none">
              Facebook
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
