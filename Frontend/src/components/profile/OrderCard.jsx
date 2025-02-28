import { Button, Card } from '@mui/material'
import React from 'react'

export const OrderCard = () => {
    return (
        <Card className='flex justify-between items-center p-5'>
            <div className='flex items-center space-x-5'>
                <img className='h-16 w-16' 
                src="https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg" 
                alt="" />
                <div>
                    <p>
                        Pizza
                    </p>
                    <p>$30</p>
                </div>

            </div>
            <Button className="cursor-not-allowed">
                Completed
            </Button>

        </Card>
    )
}