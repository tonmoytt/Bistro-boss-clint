import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAxiosSecure = () => {
  const navigate = useNavigate();

  const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000/', // বা তোমার API
    withCredentials: true, // cookie/token পাঠানোর জন্য দরকার
  });

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      response => response,
      error => {
        if (error.response?.status === 401 || error.response?.status === 403) {
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );
  }, [navigate]);

  return [axiosSecure];
};

export default useAxiosSecure;