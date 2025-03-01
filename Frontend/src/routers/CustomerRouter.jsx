import React from 'react'
import { Navbar } from '../components/navbar/Navbar'
import RestaurantDetails from '../components/restaurant/RestaurantDetails'
import Cart from '../components/cart/Cart'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/home/Home'
import Profile from '../components/profile/Profile'
import { Auth } from '../components/auth/Auth'

export const CustomerRouter=()=> {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/account/:register' element={<Home/>}/>
                <Route path='/account/:city/:title/:id' element={<RestaurantDetails/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/my-profile/*' element={<Profile/>}/>

            </Routes>
            <Auth/> 

        </div>
    )
}