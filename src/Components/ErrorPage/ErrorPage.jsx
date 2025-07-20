import React from 'react';
import errimg from '../../assets/sadid/others/404.gif'

const ErrorPage = () => {
    return (
        <div>
            <p>This is error</p>
            <img src={errimg} alt="" />
        </div>
    );
};

export default ErrorPage;