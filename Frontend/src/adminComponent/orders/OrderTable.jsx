
import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Card,
    CardHeader,
    Chip,
    Menu,
    MenuItem,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import {
    fetchRestaurantsOrder,
    updateOrderStatus
  } from "../../components/state/restaurant Order/Action";
  
  const orderStatus = [
    { label: "Pending", value: "PENDING" },
    { label: "Completed", value: "COMPLETED" },
    { label: "Out For Delivery", value: "OUT_FOR_DELIVERY" },
    { label: "Delivered", value: "DELIVERED" }
  ];
  
  export const OrderTable = () => {
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const restaurant = useSelector((store) => store.restaurant);
  
    const restaurantOrders = useSelector((store) => {
      const orders = store.restaurantOrder?.orders;
      return Array.isArray(orders) ? orders : [];
    });
  
    const [anchorEl, setAnchorEl] = useState(null);
    const [activeOrderId, setActiveOrderId] = useState(null);
  
    const handleClick = (event, orderId) => {
      setAnchorEl(event.currentTarget);
      setActiveOrderId(orderId);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
      setActiveOrderId(null);
    };
  
    const handleUpdateOrder = (orderId, status) => {
      dispatch(updateOrderStatus({ orderId, orderStatus: status, jwt }));
      handleClose();
    };
  
    useEffect(() => {
      if (restaurant?.usersRestaurant?.id && jwt) {
        dispatch(
          fetchRestaurantsOrder({
            jwt,
            restaurantId: restaurant.usersRestaurant.id
          })
        );
      }
    }, [dispatch, jwt, restaurant.usersRestaurant?.id]);
  
    return (
      <div>
        <Box>
          <Card className="mt-1">
            <CardHeader title={"All Orders"} sx={{ pt: 2, alignItems: "center" }} />
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell align="right">Images</TableCell>
                    <TableCell align="right">Customer</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Ingredients</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">Update</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {restaurantOrders.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell align="right">
                        <AvatarGroup>
                          {item.items.map((orderItem, idx) => (
                            <Avatar
                              key={idx}
                              src={orderItem.food?.images?.[0]}
                              alt={orderItem.food?.name}
                            />
                          ))}
                        </AvatarGroup>
                      </TableCell>
                      <TableCell align="right">{item.customer?.fullName}</TableCell>
                      <TableCell align="right">₹{item.totalPrice}</TableCell>
                      <TableCell align="right">
                        {item.items.map((orderItem, i) => (
                          <div key={i} className="flex flex-wrap gap-1">
                            {Array.isArray(orderItem.food?.ingredients) && orderItem.food.ingredients.length > 0 ? (
                              orderItem.food.ingredients.map((ingredient, idx) => (
                                <Chip
                                  key={idx}
                                  label={ingredient?.name || ingredient}
                                  size="small"
                                />
                              ))
                            ) : (
                              <Chip label="N/A" size="small" />
                            )}
                          </div>
                        ))}
                      </TableCell>
                      <TableCell align="right">{item.orderStatus}</TableCell>
                      <TableCell align="right">
                        <Button
                          id={`status-button-${item.id}`}
                          aria-controls={
                            activeOrderId === item.id ? `menu-${item.id}` : undefined
                          }
                          aria-haspopup="true"
                          onClick={(e) => handleClick(e, item.id)}
                        >
                          Change
                        </Button>
                        <Menu
                          id={`menu-${item.id}`}
                          anchorEl={anchorEl}
                          open={activeOrderId === item.id}
                          onClose={handleClose}
                          MenuListProps={{
                            "aria-labelledby": `status-button-${item.id}`
                          }}
                        >
                          {orderStatus.map((status) => (
                            <MenuItem
                              key={status.value}
                              onClick={() => handleUpdateOrder(item.id, status.value)}
                            >
                              {status.label}
                            </MenuItem>
                          ))}
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
    );
  };
  
  export default OrderTable;
  