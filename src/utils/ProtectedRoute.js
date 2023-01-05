import React, { useEffect, useState } from "react";
import { Route, useNavigate,useParams } from "react-router-dom";

const ProtectedRoute = (props) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const checkUserToken = () => {
        const userToken = localStorage.getItem('auth');
        if (!userToken || userToken === 'undefined') {
            setIsLoggedIn(false);
            return navigate('/');
        }
       
        setIsLoggedIn(true);
    }
    useEffect(() => {
            checkUserToken();
        }, [isLoggedIn]);
    return (
        <>
            {
                isLoggedIn ? props.children : null
            }
        </>
    );
}
export default ProtectedRoute;