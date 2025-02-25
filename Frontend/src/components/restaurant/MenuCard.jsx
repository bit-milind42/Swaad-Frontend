import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from "react";

// const ingredients=[
//     {
//         category:"Nuts & seeds",
//         ingredients:"Cashews"
//     },
//     {
//         category:"Protein",
//         ingredients:"Protein"
//     },
//     {
//         category:"Protein",
//         ingredients:"Bacon strips"
//     }
    
// ]

const demo=[
    {
        category:"Nuts & seeds",
        ingredients:["Cashews"]
    },
    {
        category:"Protein",
        ingredients:["Nuts","Mushrooms"]
    }
    
]

const MenuCard = () => {
    const handleCheckBoxChange=(value)=>{
        console.log("value")

    }
    return (
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
            <div className="lg:flex items-center justify-between">
                <div className="lg:flex items-center lg:gap-5">
                    <img className="w-[7rem] h-[7rem] object-cover" 
                    src="https://cdn.pixabay.com/photo/2024/02/06/10/53/ai-generated-8556731_1280.jpg" alt=""/>

                    <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                        <p className="font-semibold text-xl">Burger</p>
                        <p>₹499</p>
                        <p className="text-gray-400">The ultimate veggie burger you will love! The patties are so crisp, packed with loads of veggies & filled with plenty of aromatic spices.</p>

                    </div>
                </div>

            </div>

        </AccordionSummary>
        <AccordionDetails>
          <form>
            <div className="flex gap-5 flex-wrap">
                {

                    demo.map((item)=>
                        <div>
                            <p>{item.category}</p>
                            <FormGroup>
                            {item.ingredients.map((item) => <FormControlLabel control={<Checkbox
                            onChange={()=>handleCheckBoxChange(item)} />} label={item} />)}
                            
                            </FormGroup>
                        </div>
                    )

                }
            </div>
            <div className="pt-5">
                <Button variant="contained" disabled={false} type="submit">
                    {true?"Add to Cart" :"Out Of Stock" }
                </Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
    )

}

export default MenuCard