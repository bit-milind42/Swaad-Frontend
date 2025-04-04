import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

const CreateFoodCategoryForm =()=>{
    const [formData,setFormData] = useState({categoryName:"",restaurantId:""})
    const handleSubmit=()=>{
        const data={
            name: formData.categoryName,
            restaurantId:{
                id:1,
            },
        };
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
                <h1 className="text-gray-400 text-center text-xl pb-10">Create Category</h1>
                <form className="space-y-5" onSubmit={handleSubmit}>
                    <TextField fullWidth
                        id="categoryName"
                        name="categoryName"
                        label="Cusine Type"
                        variant="outlined"
                        onChange={handleInputChange}
                        value={formData.categoryName}>

                    </TextField>
                    
                </form>
                <Button variant="contained" type="submit">
                    Create Category
                </Button>
            </div>
            
        </div>
    )
}
export default CreateFoodCategoryForm