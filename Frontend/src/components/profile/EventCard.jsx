import React from 'react'
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

export const EventCard = () => {
    return (
        <div className='mt-15'>
            <Card sx={{width:300}}>
                <CardMedia

                sx={{height:345}}
                 image='https://cdn.pixabay.com/photo/2022/06/23/09/39/food-and-drink-industry-7279394_1280.jpg' />

                 <CardContent>
                    <Typography variant='h5'>
                        Indian Fast Food
                    </Typography>
                    <Typography variant='body2'>
                        50% off on your first order
                    </Typography>
                    <div className='py-2 space-y-2'>

                        <p>{"Delhi"}</p>
                        <p className='text-sm text-yellow-500'>Feb 14, 2025 12:00 AM</p>
                        
                        <p className='text-sm text-red-500'>Feb 15, 2025 12:00 AM</p>

                    </div>
                    </CardContent>  
                    {true && <CardActions>
                        <IconButton>
                            <DeleteIcon/>
                        </IconButton>
                    </CardActions>}
            </Card>
        </div>
    )
}