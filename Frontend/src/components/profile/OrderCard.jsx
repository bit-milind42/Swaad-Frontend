import { Button, Card } from '@mui/material'
import React from 'react'

export const OrderCard = ({item,order}) => {
    return (
        <Card className='flex justify-between items-center p-5'>
            <div className='flex items-center space-x-5'>
                <img className='h-16 w-16' 
                src={item.food.name}
                alt="" />
                <div>
                    <p>
                        {item.food.images[0]}
                    </p>
                    <p>₹{item.totalPrice}</p>
                </div>

            </div>
            <Button className="cursor-not-allowed">
                {order.orderStatus}
            </Button>

        </Card>
    )
}