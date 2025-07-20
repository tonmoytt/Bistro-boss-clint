import React, { useContext } from 'react';
import { AuthContext } from '../Authincation';
import { Navigate } from 'react-router-dom';

const PrivetRoute = ({ children }) => {
  const { currentUser, loding } = useContext(AuthContext);

  if (loding) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-sky-100 to-blue-200">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin mx-auto"></div>
          <p className="text-blue-600 font-semibold text-lg animate-pulse">
            Authenticating... Please wait
          </p>
        </div>
      </div>
    );
  }

  if (currentUser) {
    return children;
  }

  return <Navigate to="/login" replace />;
};

export default PrivetRoute;
