
import React, { useEffect } from "react";
import { Badge, IconButton, Avatar, Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LOGOUT, getUser } from "../state/authentication/Action";
import "./Navbar.css";

export const Navbar = () => {
    const cart = useSelector((state) => state.cart);
    const auth = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (auth?.jwt && !auth?.user) {
            dispatch(getUser());
        }
    }, [auth?.jwt, auth?.user, dispatch]);

    const isLoggedIn = Boolean(auth?.jwt);

    const handleProfileClick = () => {
        navigate("/my-profile");
    };

    const getAvatarText = () => {
        if (auth?.user?.fullName) {
            return auth.user.fullName[0].toUpperCase();
        }
        return "U";
    };

    return (
        <nav className="navbar-container">
            <div className="w-full bg-[#e91e63] py-2 px-5 lg:px-20 flex items-center justify-between fixed top-0 left-0 z-50">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <span
                        onClick={() => navigate("/")}
                        className="text-white text-2xl font-semibold cursor-pointer"
                    >
                        Swaad
                    </span>
                </div>

                {/* Right Side */}
                <div className="flex items-center space-x-2 lg:space-x-10">
                    <IconButton>
                        <SearchIcon sx={{ fontSize: "1.5rem", color: "white" }} />
                    </IconButton>

                    {isLoggedIn ? (
                        <Tooltip title={auth.user?.fullName || "Profile"}>
                            <IconButton onClick={handleProfileClick}>
                                <Avatar
                                    sx={{
                                        bgcolor: "white",
                                        color: "#e91e63",
                                        width: 36,
                                        height: 36,
                                        fontWeight: "bold",
                                        fontSize: "1rem",
                                        border: "2px solid #e91e63"
                                    }}
                                >
                                    {getAvatarText()}
                                </Avatar>
                            </IconButton>
                        </Tooltip>
                    ) : (
                        <IconButton onClick={() => navigate("/account/login")}>
                            <PersonIcon sx={{ fontSize: "1.5rem", color: "white" }} />
                        </IconButton>
                    )}

                    <IconButton onClick={() => navigate("/cart")}>
                        <Badge color="primary" badgeContent={cart?.cartItems?.length || 0}>
                            <ShoppingCartIcon sx={{ fontSize: "1.5rem", color: "white" }} />
                        </Badge>
                    </IconButton>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
