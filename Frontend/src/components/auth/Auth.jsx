import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { style } from "../cart/Cart";
import { Box, Modal } from "@mui/material";
import { RegisterForm } from "./RegisterForm";
import { LoginForm } from "./LoginForm";

export const Auth = () => {
    const [open, setOpen] = React.useState(false);    
    const location = useLocation();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (location.pathname === "/account/register" || location.pathname === "/account/login") {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [location.pathname]);

    const handleOnClose = () => {
        setOpen(false);
        navigate("/"); // Navigate to the home page
    };

    return (
        <>
            <Modal
                onClose={handleOnClose} // Attach the onClose function here
                open={open} // Control the open state based on the location
            >
                <Box sx={style}>
                    {location.pathname === "/account/register" ? <RegisterForm /> : <LoginForm />}
                </Box>
            </Modal>
        </>
    );
};
