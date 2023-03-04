import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoadingPage = ()=>{
    const [count, setCount] = useState(3);
    const navigate = useNavigate();

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((currentCount)=> --currentCount );
        }, 1000);

        count === 0 && navigate('/');
        return ()=> clearInterval(interval);
    }, [count]);

    return(
        <div>
            <h1>Access Deny and Countdown Start : {count} </h1>
        </div>
    );
};

export default LoadingPage;