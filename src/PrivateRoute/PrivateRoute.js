import React from 'react';
import { Loader } from '@mantine/core'
import { Outlet } from 'react-router-dom';
import { Navigate } from 'react-router';
import { Auth } from '../contexts/AuthContext';


const PrivateRoute = () => {
    const { user, isLoading } = Auth();
    console.log(user.email);
    if (isLoading) {
        return <Loader animation="grow" />
    }
    return (
        user.email ? <Outlet/> : <Navigate
            replace
            to="/login"
        ></Navigate>
    );
};

export default PrivateRoute;
