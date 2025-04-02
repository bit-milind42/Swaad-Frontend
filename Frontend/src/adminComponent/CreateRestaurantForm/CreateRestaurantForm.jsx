import React, { useState } from "react";
import { useFormik } from 'formik'
import { CircularProgress, Grid, IconButton } from "@mui/material";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from '@mui/icons-material/Close';

const initialValues={
    name:"",
    description:"",
    cuisineType:"",
    city:"",
    stateProvince:"",
    portalCode:"",
    country:"",
    email:"",
    mobile:"",
    twitter:"",
    instagram:"",
    openingHours:"Mon-Sat : 9-9",  
    images:[]
}
const CreateRestaurantForm = () => {
    const [uploadImage,setUploadImage] = useState(false);
    const formik=useFormik({
        initialValues,
        onSubmit:()=>{}
    })
    const handleImageChange=(e)=>{}
    const handleRemoveImage=(index)=>{}
    return(
        <div className="py-10 px-5 lg:flex items-center justify-center min-h-screen">
            <div className="lg:max-w-4xl">
            <h1 className="font-bold text-2xl text-center py-2">
                Add New Restaurant
            </h1>
            <form onSubmit={formik.handleSubmit} className="space-y-4">
                <Grid container spacing={2}>
                    <Grid className="flex flex-wrap gap-5" item xs={12}>
                        <input
                        accept="image/*"
                        id="fileInput"
                        style={{display:"none"}}
                        onChange={handleImageChange}
                        type="file"/>

                        <label className='relative' htmlFor="fileInput">
                            <span className="w-24 h-24 cursor-pointer flex items-center justify
                            p-3 border rounded-md border-gray-600">
                                <AddPhotoAlternateIcon className="text-white"/>

                            </span>
                            {
                                uploadImage && <div className="absolute left-0 right-0 top-0 
                                bottom-0 w-24 h-24 flex justify-center items-center">
                                    <CircularProgress/>
                                </div>
                            }
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {[1,1,1].map((image,index)=><div>
                                <img
                                className="w-24 h-24 object-cover"
                                key={index}
                                     src="https://cdn.pixabay.com/photo/2015/11/19/10/38/food-1050813_1280.jpg" alt=""/>
                                     <IconButton
                                     size="small"
                                     sx={{
                                        position:'absolute',
                                        top:0,
                                        right:0,
                                        outline:"none"

                                     }}
                                      onClick={()=>handleRemoveImage(index)}>
                                        <CloseIcon/>
                                     </IconButton>
                                </div>)}

                        </div>

                    </Grid>
                </Grid>

            </form>
            </div>

        </div>
    )
}

export default CreateRestaurantForm