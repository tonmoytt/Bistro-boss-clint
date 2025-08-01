import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../Authincation/Authincation';

const UseAdmin = () => {
  const { currentUser } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  console.log("Is Admin?", isAdmin, "Loading?", loading);

useEffect(() => {
  if (currentUser?.email) {
    const email = currentUser.email.toLowerCase();
    axios.get(`http://localhost:5000/users/admin/${email}`)
      .then(res => {
        console.log("Admin check response:", res.data);
        setIsAdmin(res.data?.admin === true);
        setLoading(false);
      })
      .catch(() => {
        setIsAdmin(false);
        setLoading(false);
      });
  }
}, [currentUser]);

  return [isAdmin, loading];
};

export default UseAdmin;
