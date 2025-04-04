import React from "react";
import IngredientTable from "./IngredientTable";
import IngredientCategoryTable from "./IngredientCategoryTable";
import { Grid } from "@mui/material";

export const Ingredients=()=>{
    return (
        <div className="px-2">
            <Grid container spacing={2}>
                <Grid item xs={12} lg={8}>
                    <IngredientTable/>
                </Grid>
                <Grid item xs={12} lg={8}>
                    <IngredientCategoryTable/>
                </Grid>
            </Grid>
        </div>
    )
}
export default Ingredients