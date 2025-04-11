import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createIngredient, createIngredientCategory } from "../../components/state/ingredients/Action";

const CreateIngredientForm =()=>{
    const restaurant = useSelector((store) => store.restaurant);
    const ingredients = useSelector((store) => store.ingredients);

    const dispatch=useDispatch();
    const jwt=localStorage.getItem("jwt");
    const [formData,setFormData] = useState({ingredientName:"",categoryId:""})
    const handleSubmit=(e)=>{
        e.preventDefault(); 
        const data={
            restaurantId: restaurant.usersRestaurant.id,
            ingredientName: formData.ingredientName,  
            categoryId: formData.categoryId
            
        };
        dispatch(createIngredient({data,jwt}))
        console.log(data);
    }
    const handleInputChange = (e) =>{
        const {name,value} = e.target
        setFormData({
            ...formData,[name]:value
        })

    }

    return(
        <div className="">
            <div className="p-5">
                <h1 className="text-gray-400 text-center text-xl pb-10">Create Ingredient</h1>
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <TextField fullWidth
                        id="ingredientName"
                        name="ingredientName"
                        label="Ingredient Name"
                        variant="outlined"
                        onChange={handleInputChange}
                        value={formData.ingredientName}>

                    </TextField>
                    <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={formData.categoryId}
                                label="Category"
                                onChange={handleInputChange}
                                name="categoryId"
                            >
                                {ingredients.category.map((item)=><MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>)}
                                
                            </Select>
                        </FormControl>
                        <Button variant="contained" type="submit">
                    Create Ingredient
                </Button>
                    
                </form>
                
            </div>
            
        </div>
    )
}
export default CreateIngredientForm