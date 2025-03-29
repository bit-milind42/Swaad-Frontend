// import { Card, Chip, IconButton } from "@mui/material";
// import React from "react";
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// const RestaurantCard = () => {
//     return (
//         <Card className="w-[18rem]">
//             <div className={`${true?'cursor-pointer' : "cursor-not-allowed"} realtive`}>

//                 <img className="w-full h-[10rem] rounded-t-md object-cover"
//                 src="https://cdn.pixabay.com/photo/2020/09/17/12/41/cafe-5579069_1280.jpg" alt=""/>
                
            
//                 <Chip
//                 size = 'small'
//                 className="absolute top-2 left-2"
//                 color={true?"success":"error"}
//                 label={true?"open":"closed"}
//                 />
//             </div>

//             <div className="p-4 textPart lg:flex w-full justify-between">
//                 <div className="space-y-1">
//                     <p className="font-semibold text-lg">
//                         Indian FAST Food
//                     </p>
//                     <p className="text-gray-500 text-sm">
//                         Craving it all? Dive into our global fla...
//                     </p>

//                 </div>
//                 <div>
//                     <IconButton>
//                         {true?<FavoriteIcon/>:<FavoriteBorderIcon/>}
//                     </IconButton>
//                 </div>

//             </div>
//         </Card>
//     )
// }

// export default RestaurantCard






import { Card, Chip, IconButton } from "@mui/material";
import React from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorite } from "../state/authentication/Action";
import { isPresentInFavorites } from "../config/logic";

const RestaurantCard = ({item}) => {
    const isOpen = true; // Mock status for testing
    const isFavorite = true; // Mock favorite for testing

    console.log("Restaurant Status:", isOpen); // Debug log

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const jwt=localStorage.getItem("jwt")
    const { auth }= useSelector(store=>store)

    const handleAddToFavorite=()=>{
        dispatch(addToFavorite({restaurantId:item.id,jwt}))
    }
    const handleNaviagteToRestaurant=()=>{
        if(item.isOpen){
            navigate(`/restaurant/${item.address.city}/${item.name}./${item.id}`)
        }
    }

    return (
        <Card 
            className="m-5 w-full sm:w-[18rem] hover:shadow-lg transition-shadow duration-300"
        >
            {/* Image Section */}
            <div className={`${isOpen ? 'cursor-pointer' : "cursor-not-allowed"} relative`}>
                <img
                    className="w-full h-[10rem] rounded-t-md object-cover"
                    src={item.images[2]}
                    alt="Restaurant"
                />

                {/* Ensure Chip renders correctly */}
                <Chip
                    size="small"
                    sx={{
                        position: "absolute",
                        top: "8px",
                        left: "8px",
                        backgroundColor: item.isOpen ? "green" : "red",
                        color: "white",
                    }}
                    label={item.isOpen ? "Open" : "Closed"}
                />
            </div>

            {/* Text & Action Section */}
            <div className="p-4 lg:flex w-full justify-between items-center">
                <div className="space-y-1">
                    <p onClick={handleNaviagteToRestaurant} className="font-semibold text-lg cursor-pointer">{item.name}</p>
                    <p className="text-gray-500 text-sm">
                        {item.description}
                    </p>
                </div>

                <IconButton onClick={handleAddToFavorite}>
                    {/* {isFavorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />} */}
                    {isPresentInFavorites(auth.favorites,item)?<FavoriteIcon/>:<FavoriteBorderIcon></FavoriteBorderIcon>}
                </IconButton>
            </div>
        </Card>
    );
};

export default RestaurantCard;
