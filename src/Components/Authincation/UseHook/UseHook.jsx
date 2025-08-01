import axios from 'axios';
import React, { useContext, useEffect, } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Authincation';


const AxiosUseHook = axios.create({
    baseURL: ' http://localhost:5000',   // এখানে ছোট 'b' হবে, BaseURL নয়
    withCredentials: true               // withCredential -> withCredentials (s লাগবে)
});

const UseHook = () => {
    const { signout } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const interceptor = AxiosUseHook.interceptors.response.use(
            response => {
                return response;
            },
            error => {
                console.log('error from interceptor', error);
                // error.response.status দেখতে হবে, না error.status নয়
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    console.log('need to logout');
                    signout()
                        .then(() => {
                            console.log('user logout by illegal request');
                            navigate('/login');
                        })
                        .catch(err => console.log(err));
                }
                return Promise.reject(error);
            }
        );

        // Cleanup interceptor on unmount
        return () => {
            AxiosUseHook.interceptors.response.eject(interceptor);
        };
    }, [signout, navigate]);

    return AxiosUseHook;
};

export default UseHook;