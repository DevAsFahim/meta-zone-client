import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../pages/contexts/AuthProvider/AuthProvider';
import {  MutatingDots } from 'react-loader-spinner'

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <div className='py-28 text-center'><div className='inline-block'><MutatingDots
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      /></div></div> 
    }

    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }

    
    return children;
};

export default PrivateRoute;