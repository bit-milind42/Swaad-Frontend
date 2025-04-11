
import React, { useEffect } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../state/authentication/ActionType';

export const UserProfile = () => {
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!user) {
            navigate("/account/login");
        }
    }, [user, navigate]);

    const handleLogout = () => {
        localStorage.clear();
        dispatch({ type: LOGOUT });
        navigate("/account/login");
    };

    return (
        <div className='min-h-[80vh] flex flex-col justify-center items-center text-center'>
            <div className='flex flex-col items-center justify-center'>
                <AccountCircleIcon sx={{ fontSize: "9rem" }} />
                <h1 className='py-5 text-2xl font-semibold'>{user?.fullName || "User"}</h1>
                <p>Email: {user?.email}</p>
                <Button variant='contained' onClick={handleLogout} sx={{ margin: "2rem 0rem" }}>
                    Logout
                </Button>
            </div>
        </div>
    );
};
