

import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';
import {
  Box,
  Button,
  Chip,
  CircularProgress,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField
} from "@mui/material";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from '@mui/icons-material/Close';
import { uploadImageToCloudinary } from "../util/UploadToCloudinary";
import { useDispatch, useSelector } from "react-redux";
import { createMenuItem } from "../../components/state/menu/Action";
import { getIngredientsOfRestaurant } from "../../components/state/ingredients/Action";

const initialValues = {
  name: "",
  description: "",
  price: "",
  category: "",
  restaurantId: "",
  vegetarian: true,
  seasonal: false,
  available: true, 
  ingredients: [],
  images: []
};

const CreateMenuForm = () => {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const restaurant = useSelector((store) => store.restaurant);
  const ingredientsState = useSelector((store) => store.ingredients);
  const allIngredients = ingredientsState.ingredients || [];

  const [uploadImage, setUploadImage] = useState(false);

  const formik = useFormik({
    initialValues,
    
    onSubmit: (values) => {
        const payload = {
          ...values,
          restaurantId: restaurant?.usersRestaurant?.id,
          price: parseFloat(values.price), // ensure number
          category: { id: values.category }, // fix category shape
          ingredients: values.ingredients.map(id => ({ id })) // ✅ fix here
        };
      
        console.log("FINAL SUBMIT PAYLOAD:", payload);
        dispatch(createMenuItem({ menu: payload, jwt }));
      }
      
  });

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    setUploadImage(true);
    const image = await uploadImageToCloudinary(file);
    formik.setFieldValue("images", [...formik.values.images, image]);
    setUploadImage(false);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...formik.values.images];
    updatedImages.splice(index, 1);
    formik.setFieldValue("images", updatedImages);
  };

  useEffect(() => {
    if (restaurant.usersRestaurant?.id) {
      dispatch(getIngredientsOfRestaurant({
        jwt,
        id: restaurant.usersRestaurant.id
      }));
    }
  }, [restaurant.usersRestaurant?.id]);

  return (
    <div className="py-10 px-5 lg:flex items-center justify-center min-h-screen">
      <div className="lg:max-w-4xl">
        <h1 className="font-bold text-2xl text-center py-2">Add New Menu</h1>
        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <Grid container spacing={2}>
            {/* Image Upload */}
            <Grid className="flex flex-wrap gap-5" item xs={12}>
              <input
                accept="image/*"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleImageChange}
                type="file"
              />
              <label className='relative' htmlFor="fileInput">
                <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-600">
                  <AddPhotoAlternateIcon className="text-white" />
                </span>
                {uploadImage &&
                  <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center">
                    <CircularProgress />
                  </div>}
              </label>
              <div className="flex flex-wrap gap-2">
                {formik.values.images.map((image, index) => (
                  <div className="relative" key={index}>
                    <img className="w-24 h-24 object-cover" src={image} alt="" />
                    <IconButton
                      size="small"
                      sx={{ position: 'absolute', top: 0, right: 0, outline: "none" }}
                      onClick={() => handleRemoveImage(index)}
                    >
                      <CloseIcon sx={{ fontSize: "1rem" }} />
                    </IconButton>
                  </div>
                ))}
              </div>
            </Grid>

            {/* Name */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </Grid>

            {/* Description */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="description"
                name="description"
                label="Description"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.description}
              />
            </Grid>

            {/* Price */}
            <Grid item xs={12} lg={6}>
              <TextField
                fullWidth
                id="price"
                name="price"
                label="Price"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.price}
              />
            </Grid>

            {/* Category */}
            <Grid item xs={12} lg={6}>
              <FormControl fullWidth>
                <InputLabel>Category</InputLabel>
                <Select
                  name="category"
                  value={formik.values.category}
                  label="Category"
                  onChange={formik.handleChange}
                >
                  {restaurant.categories?.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Ingredients */}
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel>Ingredients</InputLabel>
                <Select
                  multiple
                  name="ingredients"
                  value={formik.values.ingredients}
                  onChange={formik.handleChange}
                  input={<OutlinedInput label="Ingredients" />}
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((id) => {
                        const ingredient = allIngredients.find(i => i.id === id);
                        return <Chip key={id} label={ingredient?.name || id} />;
                      })}
                    </Box>
                  )}
                >
                  {allIngredients.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Seasonal */}
            <Grid item xs={12} lg={4}>
              <FormControl fullWidth>
                <InputLabel>Is Seasonal</InputLabel>
                <Select
                  name="seasonal"
                  value={formik.values.seasonal}
                  label="Is Seasonal"
                  onChange={formik.handleChange}
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Vegetarian */}
            <Grid item xs={12} lg={4}>
              <FormControl fullWidth>
                <InputLabel>Is Vegetarian</InputLabel>
                <Select
                  name="vegetarian"
                  value={formik.values.vegetarian}
                  label="Is Vegetarian"
                  onChange={formik.handleChange}
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* Availability */}
            <Grid item xs={12} lg={4}>
              <FormControl fullWidth>
                <InputLabel>Available</InputLabel>
                <Select
                  name="available"
                  value={formik.values.available}
                  label="Available"
                  onChange={formik.handleChange}
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Button variant="contained" type="submit" color="primary">
            Create Menu
          </Button>
        </form>
      </div>
    </div>
  );
};

export default CreateMenuForm;
