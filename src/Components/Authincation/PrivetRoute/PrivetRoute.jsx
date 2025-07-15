import React, { useContext } from 'react';
import { AuthContext } from '../Authincation';

const PrivetRoute = ({ children }) => {
    const { currentUser, loding } = useContext(AuthContext)
    if (currentUser) {
        return children
    }

    if (loding) {
        return <span className="loading loading-spinner text-error"></span>
    }

    return (
        <Navigate to='/login'></Navigate>
    );
};

export default PrivetRoute;