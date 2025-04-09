import { AvatarGroup, Box, Button, Card, CardHeader, Chip, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurantsOrder, updateOrderStatus } from "../../components/state/restaurant Order/Action";

const orderStatus = [ 
    { label: "Pending", value: "PENDING" }, 
    { label: "Completed", value: "COMPLETED" }, 
    { label: "Out For Delivery", value: "OUT_FOR_DELIVERY" }, 
    { label: "Delivered", value: "DELIVERED" }, 
];

export const OrderTable=()=>{
    const dispatch=useDispatch();
    const jwt=localStorage.getItem("jwt");
    const restaurant = useSelector((store) => store.restaurant);
    const { ingredients } = useSelector((store) => store.ingredients);
    const menu = useSelector((store) => store.menu);
    // const restaurantOrder = useSelector((store) => store.restaurantOrder.orders);
    // const restaurantOrders = useSelector((store) => store.restaurantOrder?.orders || []);
    const restaurantOrders = useSelector((store) => {
        const orders = store.restaurantOrder?.orders;
        return Array.isArray(orders) ? orders : [];
      });
      

    // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
    setAnchorEl(null);
    };


    useEffect(()=>{
        dispatch(fetchRestaurantsOrder({
            jwt,
            restaurantId: restaurant.usersRestaurant?.id,
        }))
    },[])

    const handleUpdateOrder=(orderId,orderStatus)=>{
        dispatch(updateOrderStatus({orderId,orderStatus,jwt}))
        handleClose();
    }
    
    return (
        <div>
            <Box>
                <Card className='mt-1'>
                    <CardHeader
                    title={"All Orders"}
                    sx={{pt:2,alignItems:"center"}}
                    />
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>id</TableCell>
                                    <TableCell align="right">Images</TableCell>
                                    <TableCell align="right">Customer</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                    <TableCell align="right">Name</TableCell>
                                    <TableCell align="right">Ingredients</TableCell>
                                    <TableCell align="right">Update</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {/* {restaurantOrders.console.log("restaurantOrders", restaurantOrders).map((item) => ( */}

                            {/* console.log("restaurantOrders", restaurantOrders); */}
                            {restaurantOrders.map((item) => (
                                <TableRow
                                key={item.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {item.id}
                                </TableCell>
                                <TableCell align="right">
                                    <AvatarGroup>
                                        {item.items.map((orderItem)=>(
                                            <Avatar src={orderItem.food?.images[0]}/>
                                        ))}
                                    </AvatarGroup>
                                </TableCell>
                                <TableCell align="right">{item.customer?.fullName}</TableCell>
                                <TableCell align="right">{item.items.map((orderItem)=><p>{orderItem.food?.name}</p>)}</TableCell>

                                <TableCell align="right">{item.items.map((orderItem)=>
                                    <div>
                                        {orderItem.ingredients.map((ingredient)=><Chip label={ingredient}/>)}
                                    </div>
                                )}
                                </TableCell>
                                   
                                <TableCell align="right">{item.orderStatus}</TableCell>
                                <TableCell align="right">
                                
                                    <Button
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                    >
                                        Dashboard
                                    </Button>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        {orderStatus.map((status)=>(<MenuItem onClick={()=>handleUpdateOrder(item.id,status.value)}>{status.label}</MenuItem>))}
                                        </Menu>
                                    
                                </TableCell>
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
export default OrderTable
