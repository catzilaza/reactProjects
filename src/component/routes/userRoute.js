import React from 'react';
import { useSelector } from "react-redux";
import LoadingPage from './loadingPage';

const UserRoute = ({children})=> {

    const { user } = useSelector((state)=> ({...state}))
    return user && user.token?children:<LoadingPage/>;
};

export default UserRoute;