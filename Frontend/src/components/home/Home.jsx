


import React, { use, useEffect } from "react";
import "./Home.css";
import MultiItemCarousel from "./MultiitemCarousel";

import RestaurantCard from "../restaurant/RestaurantCard";
import { Auth } from "../auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { getAllRestaurantsAction } from "../state/restaurant/Action";
import { useNavigate } from "react-router-dom";
import { findCart } from "../state/cart/Action";
const restaurants = [1, 1, 1, 1, 1, 1];





const Home = () => {
    const dispatch = useDispatch()
    const jwt = localStorage.getItem("jwt")
    const {restaurant}=useSelector(store=>store)
    const navigate=useNavigate()
    console.log("restaurant", restaurant)

    useEffect(()=>{
        dispatch(getAllRestaurantsAction(jwt))
        
    },[])

    
    return (
        <div className="pb-10">
            {/* Banner Section */}
            <section className="banner relative w-full h-screen flex flex-col justify-center items-center bg-cover bg-center">
                <div className="w-[80%] md:w-[60%] lg:w-[50%] text-center">
                    <p className="text-2xl lg:text-6xl font-bold py-5 text-white">
                        Swaad
                    </p>
                    <p className="text-white text-xl lg:text-4xl">
                        Taste the Convenience: Food, Fast and Delivered.
                    </p>
                </div>
            </section>

            {/* Carousel Section */}
            <section className="p-5 lg:py-10 lg:px-20 bg-black">
                <p className="text-2xl font-semibold text-gray-400 py-3 pb-10">
                    Top Meals
                </p>
                <MultiItemCarousel />
            </section>

            {/* Restaurant Section */}
            <section className="px-5 lg:px-20 pt-5">
                <h1 className="text-2xl font-semibold text-gray-400 py-3">
                    Order From Our Handpicked Favorites
                </h1>
                <div className="flex flex-wrap items-center justify-around gap-5">
                    {restaurant.restaurants.map((item, index) => (
                        <RestaurantCard key={index} item={item}/>
                    ))}
                </div>
            </section>
            
        </div>
    );
};

export default Home;
