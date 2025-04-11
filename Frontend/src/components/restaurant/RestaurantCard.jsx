
import { Card, Chip, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite } from "../state/authentication/Action";
import { isPresentInFavorites } from "../config/logic";

const RestaurantCard = ({ item }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const { auth } = useSelector(store => store);

    const isOpen = item.open; 



    const handleAddToFavorite = () => {
        dispatch(addToFavorite({ restaurantId: item.id, jwt }));
    };

    const handleNavigateToRestaurant = () => {
        if (isOpen) {
            navigate(`/restaurant/${item.id}`);
        }
    };

    return (
        <Card className="m-5 w-full sm:w-[18rem] hover:shadow-lg transition-shadow duration-300">
            <div className={`${isOpen ? 'cursor-pointer' : "cursor-not-allowed"} relative`}>
                <img
                    className="w-full h-[10rem] rounded-t-md object-cover"
                    src={item.images[0]}
                    alt="Restaurant"
                />
                <Chip
                    size="small"
                    sx={{
                        position: "absolute",
                        top: "8px",
                        left: "8px",
                        backgroundColor: isOpen ? "green" : "red",
                        color: "white",
                    }}
                    label={isOpen ? "Open" : "Closed"}
                />
            </div>
            <div className="p-4 lg:flex w-full justify-between items-center">
                <div className="space-y-1">
                    <p
                        onClick={handleNavigateToRestaurant}
                        className={`font-semibold text-lg ${isOpen ? 'cursor-pointer' : 'cursor-not-allowed'}`}
                    >
                        {item.name}
                    </p>
                    <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
                <IconButton onClick={handleAddToFavorite}>
                    {isPresentInFavorites(auth.favorites, item)
                        ? <FavoriteIcon color="error" />
                        : <FavoriteBorderIcon />}
                </IconButton>
            </div>
        </Card>
    );
};

export default RestaurantCard;
