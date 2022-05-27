import React from 'react';
import { Loader } from '@mantine/core'
import { Navigate } from 'react-router';
import { Auth } from '../contexts/AuthContext';


const PrivateRoute = ({ children }) => {
    const { user, isLoading } = Auth();
    if (isLoading) {
        return <Loader animation="grow" />
    }
    return (
        user.email ? children : <Navigate
                replace
                to="/login"
            ></Navigate>
    );
};

export default PrivateRoute;
