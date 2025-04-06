import { Box, Button, Card, CardHeader, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useEffect } from "react";
import CreateIcon from '@mui/icons-material/Create';
import CreateIngredientForm from "./CreateIngredientForm";
import { useDispatch, useSelector } from "react-redux";
import { getIngredientsOfRestaurant, updateStockOfIngredient } from "../../components/state/ingredients/Action";

const orders=[1,1,1,1,1,1]
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export const IngredientTable=()=>{
    const dispatch=useDispatch();
    const jwt=localStorage.getItem("jwt");
    // const {restaurant,ingredients}=useSelector(store=>store)
    const restaurant = useSelector((store) => store.restaurant);
    const { ingredients, category } = useSelector((store) => store.ingredients);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(()=>{
        dispatch(getIngredientsOfRestaurant({jwt,id:restaurant.usersRestaurant.id}))
    },[])

    const handleUpdateStoke=(id)=>{
        dispatch(updateStockOfIngredient({id,jwt}))
    }

    return (
        <div>
            <Box>
                <Card className='mt-1'>
                    <CardHeader action={
                        <IconButton onClick={handleOpen} aria-label="settings">
                            <CreateIcon/>
                        </IconButton>
                    }
                    title={"Ingredients" }
                    sx={{pt:2,alignItems:"center"}}
                    />
                    
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    
                                    <TableCell align="left">Id</TableCell>
                                    <TableCell align="right">Name</TableCell>
                                    <TableCell align="right">Category</TableCell>
                                    <TableCell align="right">Availability</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                            {/* {ingredients.ingredients.map((item) => ( */}
                            {/* {Array.isArray(ingredients) && ingredients.map((item) => ( */}

                            {ingredients.map((item) => (
                                 


                                <TableRow
                                key={item.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {item.id}
                                </TableCell>
                                <TableCell align="right">{item.name}</TableCell>
                                
                                <TableCell align="right">{item.category.name}</TableCell>
                                <TableCell align="right"><Button onClick={()=>handleUpdateStoke(item.id)}>
                                    {item.inStock?"in stock" : "out of stock"}
                                    </Button></TableCell>

                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Card>
                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={style}>
                    <CreateIngredientForm/>
                </Box>
                </Modal>
            </Box>
        </div>
    )
}
export default IngredientTable
