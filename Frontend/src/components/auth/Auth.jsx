import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { style } from "../cart/Cart";
import { Box, Modal } from "@mui/material";
import { RegisterForm } from "./RegisterForm";
import { LoginForm } from "./LoginForm";

export const Auth = () => {
    const location = useLocation();
    const navigate=useNavigate();
    const handleOnClose=()=>{
        navigate("/")
    }

    return (
        <>
        <Modal onClose={handleOnClose} open={
            location.pathname==="/account/register" 
            || location.pathname === '/account/login'
            
            
        }>
            <Box sx={style}>
                {location.pathname==="/account/register" ? <RegisterForm/>:<LoginForm/> }
            </Box>

        </Modal>
        </>
    )
}