import { Avatar, Box, Card, CardHeader, Chip, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useEffect } from "react";
import CreateIcon from '@mui/icons-material/Create';
import { Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteFoodAction, getMenuItemsByRestaurantId } from "../../components/state/menu/Action";


export const MenuTable=()=>{
    
    const dispatch=useDispatch();
    const jwt=localStorage.getItem("jwt");
    const restaurant = useSelector((store) => store.restaurant);
    const { ingredients } = useSelector((store) => store.ingredients);
    const menu = useSelector((store) => store.menu);

    const navigate=useNavigate();

    // useEffect(()=>{
    //     dispatch(getMenuItemsByRestaurantId({
    //         jwt,
    //         restaurantId:restaurant.usersRestaurant.id,
    //         vegetarain:false,
    //         nonveg:false,
    //         seasonal:false,
    //         foodCategory:""
    //     }))

    // },[])

    useEffect(() => {
        const restaurantId = restaurant?.usersRestaurant?.id;
      
        if (restaurantId && jwt) {
          dispatch(getMenuItemsByRestaurantId({
            jwt,
            restaurantId,
            vegetarain: false,
            nonveg: false,
            seasonal: false,
            foodCategory: ""
          }));
        }
      }, [restaurant?.usersRestaurant?.id, jwt]); // depend on the actual values
      
      

    const handleDeleteFood=(foodId)=>{
        dispatch(deleteFoodAction({foodId,jwt}))
    }
    return (
        <div>
            <Box>
                <Card className='mt-1'>
                    <CardHeader action={
                        <IconButton onClick={()=>navigate("/admin/restaurants/add-menu")} aria-label="settings">
                            <CreateIcon/>
                        </IconButton>
                    }
                    title={"Menu"}
                    sx={{pt:2,alignItems:"center"}}
                    />
                    
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    
                                    <TableCell align="left">Images</TableCell>
                                    <TableCell align="right">Title</TableCell>
                                    <TableCell align="right">Ingredients</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                    <TableCell align="right">Availability</TableCell>
                                    <TableCell align="right">Delete</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {menu.menuItems?.map((item) => (
                                <TableRow
                                key={item.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                <Avatar src={item.images[0]}></Avatar>
                                </TableCell>
                                <TableCell align="right">{item.name}</TableCell>
                                
                                <TableCell align="right">{item.ingredients.map((ingredient)=><Chip key={ingredient.id} label={ingredient.name} sx={{ m: 0.5 }}/>)}</TableCell>
                                <TableCell align="right">₹{item.price}</TableCell>
                                <TableCell align="right">{item.available?"In Stoke":"Out of Stock"}</TableCell>
                                <TableCell align="right"><IconButton color="primary" onClick={()=>handleDeleteFood(item.id)}>
                                    <Delete/></IconButton></TableCell>

                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Card>
            </Box>
        </div>
    )
}
export default MenuTable
