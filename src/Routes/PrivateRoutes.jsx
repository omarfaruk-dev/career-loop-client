import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Spinner from '../pages/Shared/Spinner';

const PrivateRoutes = ({ children }) => {

    const { user, loading } = use(AuthContext);
     const location = useLocation();

    if (!user) {
       return <Navigate state={location?.pathname} to='/signin' />
    }

    if (loading) {
        return <Spinner />
    }



    return children;
};

export default PrivateRoutes;