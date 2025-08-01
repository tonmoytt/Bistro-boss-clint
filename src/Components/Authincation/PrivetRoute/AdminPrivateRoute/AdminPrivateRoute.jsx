import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import UseAdmin from '../../../UseAdmin/UseAdmin';
import { AuthContext } from '../../Authincation';

const AdminPrivateRoute = ({ children }) => {
  const { currentUser, loading } = useContext(AuthContext);
  const [isAdmin, adminLoading] = UseAdmin();
  const location = useLocation();

  if (loading || adminLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-sky-100 to-blue-200">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin mx-auto"></div>
          <p className="text-blue-600 font-semibold text-lg animate-pulse">
            Checking admin access... Please wait
          </p>
        </div>
      </div>
    );
  }

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminPrivateRoute;
