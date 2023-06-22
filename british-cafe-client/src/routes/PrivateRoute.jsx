import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'flowbite-react';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className='w-3/4 mt-10 mx-auto flex justify-center items-center'>
                <Spinner
                    aria-label="Extra large spinner example"
                    size="xl"
                    color="failure"
                />
            </div>

        );
    }
    else if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to='/login'></Navigate>;
};

export default PrivateRoute;