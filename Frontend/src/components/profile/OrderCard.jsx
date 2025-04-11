

import { Button, Card } from '@mui/material';
import React from 'react';

export const OrderCard = ({ item, order }) => {
  return (
    <Card className='flex justify-between items-center p-5'>
      <div className='flex items-center space-x-5'>
        <img
          className='h-16 w-16 rounded object-cover'
          src={item.food.images?.[0] || "/no-image-placeholder.jpg"}
          alt={item.food.name}
        />
        <div>
          <p className='font-semibold'>{item.food.name}</p>
          <p className='text-gray-500'>₹{item.totalPrice}</p>
        </div>
      </div>
      <Button className="cursor-not-allowed" variant="outlined" disabled>
        {order.orderStatus}
      </Button>
    </Card>
  );
};
