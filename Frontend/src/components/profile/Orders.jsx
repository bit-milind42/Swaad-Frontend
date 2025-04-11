import React, { use, useEffect } from 'react'
import { OrderCard } from './OrderCard'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersOrders } from '../state/order/Action';

export const Orders = () => {
    const cart = useSelector((state) => state.cart);
    const auth = useSelector((state) => state.auth);
    const order = useSelector((state) => state.order);
    const jwt = auth?.jwt || localStorage.getItem("jwt");

    const navigate = useNavigate();
    
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getUsersOrders(jwt))
    },[auth.jwt])

    return (
        <div className='flex items-center flex-col'>
            <h1 className='text-xl text-center py-7 font-semibold'>My Orders</h1>
            <div className='space-y-5 w-full lg:w-1/2'>
                {
                    order.orders.map((order) =>order.items.map((item)=> <OrderCard order={order} item={item}/>))
                }

            </div>
        </div>
    )
}