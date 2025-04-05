import React from 'react' 
import { Route, Routes } from 'react-router-dom' 
import { Admin } from '../adminComponent/admin/Admin'
import CreateRestaurantForm from '../adminComponent/CreateRestaurantForm/CreateRestaurantForm'
import { useSelector } from 'react-redux'
export const AdminRoute = () => { 
    const {restaurant} =useSelector(store=>store)
    return ( 
        <div> 
            <Routes> 
                <Route path='/*' element={!restaurant.usersRestaurant?<CreateRestaurantForm/>:<Admin/>}> 
                </Route> 
            </Routes> 
        </div>
        )
    }

export default AdminRoute