import React, { useEffect } from "react";
import AdminSideBar from "./AdminSideBar";
import { Route, Routes } from "react-router-dom";
import Dashboard, { RestaurantDashboard } from "../dashboard/Dashboard";
import Orders from "../orders/Orders";
import Menu from "../menu/Menu";
import FoodCategory from "../foodCategory/FoodCategory";
import Ingredients from "../ingredients/ingredients";
import Events from "../events/Events";
import RestaurantDetails from "./RestaurantDetails";
import CreateMenuForm from "../menu/CreateMenuForm";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantById, getRestaurantsCategory } from "../../components/state/restaurant/Action";
import { getMenuItemsByRestaurantId } from "../../components/state/menu/Action";
import { fetchRestaurantsOrder } from "../../components/state/restaurant Order/Action";

export const Admin =()=>{
    const dispatch=useDispatch()
    const jwt=localStorage.getItem("jwt")
    const {restaurant} =useSelector(store=>store)

    const handleClose=()=>{

    }
    useEffect(()=>{

        dispatch(getRestaurantsCategory({jwt,
            restaurantId:restaurant.usersRestaurant?.id,
        }));
        dispatch(fetchRestaurantsOrder({
            jwt,
            restaurantId:restaurant.usersRestaurant?.id,
        }))
        

    },[])
    return (
        <div className='lg:flex justify-between'>
            <div>
                <AdminSideBar handleClose={handleClose}/>
            </div>
            <div className="lg:w-[80%]">
                <Routes>
                    <Route path="/" element={<RestaurantDashboard/>} />
                    <Route path="/orders" element={<Orders/>} />
                    <Route path="/menu" element={<Menu/>} />
                    <Route path="/category" element={<FoodCategory/>} />
                    <Route path="/ingredients" element={<Ingredients/>} />
                    <Route path="/event" element={<Events/>} />
                    <Route path="/details" element={<RestaurantDetails/>} />
                    <Route path="/add-menu" element={<CreateMenuForm/>} />
                </Routes>

            </div>
        </div>
    )
}
export default Admin