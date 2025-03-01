// import { IconButton} from "@mui/material";
// import React from "react";
// import SearchIcon from '@mui/icons-material/Search';

// export const Navbar = ()=> {
    
//     return (
        
//         <div className="px-5 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between"> 

//             <div className="lg:mr-10 cursor-pointer flex items-center space-x-4">
                
//                     <li className="logo font-semibold text-white text-2xl">
//                         Swaad
//                     </li>
         
//             </div>

//             <div className="flex items-center space-x-2 lg:space-x-10">
//                 <div >
//                     <IconButton>
//                         <SearchIcon sx={{fontSize:"1.5rem"}}/>
//                     </IconButton>
//                 </div>
                
//                 <div>
//                     <IconButton>
//                         <Avatar>M</Avatar>
//                     </IconButton>
//                 </div>
                

//             </div>
//         </div>
        
//     )
// }



// import { Avatar, IconButton } from "@mui/material";
// import React from "react";
// import SearchIcon from "@mui/icons-material/Search";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// export const Navbar = () => {
//     return (
//         <div className="flex">
//             <div className="w-full bg-[#e91e63] py-3 px-5 lg:px-20 flex items-center justify-between fixed top-0 left-0 z-50">
//                 {/* Left - Logo */}
//                 <div className="flex items-center space-x-2">
//                     <span className="text-white text-2xl font-semibold">• Swaad</span>
//                 </div>

//                 {/* Right - Search Icon */}
//                 <div className="flex items-center space-x-2 lg:space-x-10">
//                     <div>
//                         <IconButton>
//                             <SearchIcon sx={{ fontSize: "1.5rem", color: "white" }} />
//                         </IconButton>
//                     </div>
//                     <div>
//                         <IconButton>
//                             <Avatar sx={{bgcolor:"white", color:pink.A400}}>M</Avatar>
//                         </IconButton>
//                     </div>
//                     <div>
//                         <IconButton>
//                             <ShoppingCartIcon sx={{ fontSize: "1.5rem", color: "white" }} />
//                         </IconButton>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };



import { Avatar, Badge, IconButton } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { pink } from "@mui/material/colors"; // Fixed missing import
import "./Navbar.css"
import { Person } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";


export const Navbar = () => {
    const navigate=useNavigate()
    return (
        <div className="flex">
            <div className="w-full bg-[#e91e63] py-2 px-5
             lg:px-20 flex items-center justify-between fixed top-0 left-0 z-50">
                {/* Left - Logo */}
                <div className="flex items-center space-x-2">
                    <span className="text-white text-2xl font-semibold"> Swaad</span>
                </div>

                {/* Right - Icons */}
                <div className="flex items-center space-x-2 lg:space-x-10">
                    <IconButton>
                        <SearchIcon sx={{ fontSize: "1.5rem", color: "white" }} />
                    </IconButton>
                    <IconButton>
                        {false? <Avatar sx={{ bgcolor: "white", color: pink[400] }}>M</Avatar>:
                        <><IconButton onClick={()=>navigate("/account/login")}>
                            <Person/>
                            </IconButton></>}
                    </IconButton>
                    <IconButton>
                        <Badge color="blue" badgeContent={3}>
                        <ShoppingCartIcon sx={{ fontSize: "1.5rem", color: "white" }} />

                        </Badge>
                    </IconButton>
                </div>
            </div>
        </div>
    );
};
