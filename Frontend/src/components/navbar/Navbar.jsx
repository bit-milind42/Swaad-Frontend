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





// import { Avatar, IconButton } from "@mui/material";
// import React from "react";
// import SearchIcon from "@mui/icons-material/Search";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import { pink } from "@mui/material/colors"; // ✅ Added missing import

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
//                             <Avatar sx={{ bgcolor: "white", color: pink.A400 }}>M</Avatar> 
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




// import { Avatar, Badge, IconButton } from "@mui/material";
// import React from "react";
// import SearchIcon from "@mui/icons-material/Search";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { pink } from "@mui/material/colors"; // Fixed missing import
// import "./Navbar.css"
// import { Person } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";


// export const Navbar = () => {
//     const {auth}=useSelector((store)=>store)
//     const navigate=useNavigate();

//     const handleAvatarClick=()=>{
//         if(auth.user?.role === "ROLE_CUSTOMER"){
//             navigate("/my-profile")
//         }
//         else {
//             navigate("/admin/restaurant")
//         }
//     }
//     return (
//         <div className="flex">
//             <div className="w-full bg-[#e91e63] py-2 px-5
//              lg:px-20 flex items-center justify-between fixed top-0 left-0 z-50">
//                 {/* Left - Logo */}
//                 <div className="flex items-center space-x-2">
//                     <span onClick={()=>navigate("/")} className="text-white text-2xl font-semibold"> Swaad</span>
//                 </div>

//                 {/* Right - Icons */}
//                 <div className="flex items-center space-x-2 lg:space-x-10">
//                     <IconButton>
//                         <SearchIcon sx={{ fontSize: "1.5rem", color: "white" }} />
//                     </IconButton>
//                     <IconButton>
//                         {auth.user? (<Avatar onClick={handleAvatarClick} sx={{ bgcolor: "white", color: pink[400] }}>{auth.user?.fullName[0].toUpperCase()}</Avatar>):
//                         (<IconButton onClick={()=>navigate("/account/login")}>
//                             <Person/>
//                             </IconButton>)}
//                     </IconButton>
//                     <IconButton>
//                         <Badge color="blue" badgeContent={3}>
//                         <ShoppingCartIcon sx={{ fontSize: "1.5rem", color: "white" }} />

//                         </Badge>
//                     </IconButton>
//                 </div>
//             </div>
//         </div>
//     );
// };













// import { Avatar, Badge, IconButton } from "@mui/material";
// import React from "react";
// import SearchIcon from "@mui/icons-material/Search";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { pink } from "@mui/material/colors"; // ✅ Fixed missing import
// import "./Navbar.css";
// import { Person } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// export const Navbar = () => {
//     const { auth } = useSelector((store) => store);
//     const navigate = useNavigate();

//     const handleAvatarClick = () => {
//         if (auth.user?.role === "ROLE_CUSTOMER") {
//             navigate("/my-profile");
//         } else {
//             navigate("/admin/restaurant");
//         }
//     };

//     return (
//         <div className="flex">
//             <div className="w-full bg-[#e91e63] py-2 px-5 lg:px-20 flex items-center justify-between fixed top-0 left-0 z-50">
//                 {/* Left - Logo */}
//                 <div className="flex items-center space-x-2">
//                     <span onClick={() => navigate("/")} className="text-white text-2xl font-semibold">
//                         Swaad
//                     </span>
//                 </div>

//                 {/* Right - Icons */}
//                 <div className="flex items-center space-x-2 lg:space-x-10">
//                     <IconButton>
//                         <SearchIcon sx={{ fontSize: "1.5rem", color: "white" }} />
//                     </IconButton>
//                     <IconButton>
//                         {auth.user ? (
//                             <Avatar
//                                 onClick={handleAvatarClick}
//                                 sx={{ bgcolor: "white", color: pink[400] }}
//                             >
//                                 {auth.user.fullName ? auth.user.fullName[0].toUpperCase() : "?"}
//                             </Avatar>
//                         ) : (
//                             <IconButton onClick={() => navigate("/account/login")}>
//                                 <Person />
//                             </IconButton>
//                         )}
//                     </IconButton>
//                     <IconButton>
//                         <Badge color="primary" badgeContent={3}>
//                             <ShoppingCartIcon sx={{ fontSize: "1.5rem", color: "white" }} />
//                         </Badge>
//                     </IconButton>
//                 </div>
//             </div>
//         </div>
//     );
// };




// import { Avatar, Badge, IconButton } from "@mui/material";
// import React, { useEffect } from "react";
// import SearchIcon from "@mui/icons-material/Search";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { pink } from "@mui/material/colors"; 
// import "./Navbar.css";
// import { Person } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

// export const Navbar = () => {
//     const { auth } = useSelector((store) => store);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
    
//     // Add console logs to debug the auth state
//     useEffect(() => {
//         console.log("Auth State:", auth);
//         console.log("User logged in:", !!auth.user);
//         console.log("JWT:", !!auth.jwt);
//     }, [auth]);

//     const handlePersonIconClick = () => {
//         console.log("Person icon clicked - redirecting to login");
//         navigate("/account/login");
//     };

//     const handleAvatarClick = () => {
//         if (auth.user?.role === "ROLE_CUSTOMER") {
//             navigate("/my-profile");
//         } else if (auth.user?.role === "ROLE_RESTAURANT_OWNER") {
//             navigate("/admin/restaurant");
//         } else {
//             // Fallback for unknown role
//             navigate("/my-profile");
//         }
//     };

//     // Check if user is actually logged in
//     const isLoggedIn = Boolean(auth.user && (auth.jwt || localStorage.getItem("jwt")));
//     console.log("Is logged in check:", isLoggedIn);

//     return (
//         <div className="navbar-container">
//             <div className="w-full bg-[#e91e63] py-2 px-5 lg:px-20 flex items-center justify-between fixed top-0 left-0 z-50">
//                 {/* Left - Logo */}
//                 <div className="flex items-center space-x-2">
//                     <span onClick={() => navigate("/")} className="text-white text-2xl font-semibold cursor-pointer">
//                         Swaad
//                     </span>
//                 </div>

//                 {/* Right - Icons */}
//                 <div className="flex items-center space-x-2 lg:space-x-10">
//                     <IconButton>
//                         <SearchIcon sx={{ fontSize: "1.5rem", color: "white" }} />
//                     </IconButton>
                    
//                     {isLoggedIn ? (
//                         // Logged in - show avatar
//                         <IconButton onClick={handleAvatarClick}>
//                             <Avatar
//                                 sx={{ bgcolor: "white", color: pink[400] }}
//                             >
//                                 {auth.user?.fullName ? auth.user.fullName[0].toUpperCase() : "U"}
//                             </Avatar>
//                         </IconButton>
//                     ) : (
//                         // Not logged in - show person icon
//                         <IconButton onClick={handlePersonIconClick}>
//                             <Person sx={{ fontSize: "1.5rem", color: "white" }} />
//                         </IconButton>
//                     )}
                    
//                     <IconButton onClick={() => navigate("/cart")}>
//                         <Badge color="primary" badgeContent={auth.cartItems?.length || 0}>
//                             <ShoppingCartIcon sx={{ fontSize: "1.5rem", color: "white" }} />
//                         </Badge>
//                     </IconButton>
//                 </div>
//             </div>
//         </div>
//     );
// };



// import { Avatar, Badge, IconButton } from "@mui/material";
// import React, { useEffect } from "react";
// import SearchIcon from "@mui/icons-material/Search";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { pink } from "@mui/material/colors"; 
// import "./Navbar.css";
// import { Person } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { LOGOUT } from "../state/authentication/ActionType";
// export const Navbar = () => {
//     const { auth } = useSelector((store) => store);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     // Debugging Logs
//     useEffect(() => {
//         console.log("Auth State:", auth);
//         console.log("User logged in:", !!auth.user);
//         console.log("JWT:", !!auth.jwt);
//     }, [auth]);

//     // ✅ Updated login check (Fix)
//     const isLoggedIn = Boolean(auth.user && auth.jwt);
//     console.log("Updated Is logged in check:", isLoggedIn);

//     // Logout Function (Clears Redux & localStorage)
//     const handleLogout = () => {
//         localStorage.removeItem("user");
//         localStorage.removeItem("jwt");
//         dispatch({ type: LOGOUT });  // Dispatch logout action
//         navigate("/account/login");  // Redirect to login page
//     };

//     const handlePersonIconClick = () => {
//         console.log("Person icon clicked - redirecting to login");
//         navigate("/account/login");
//     };

//     const handleAvatarClick = () => {
//         if (auth.user?.role === "ROLE_CUSTOMER") {
//             navigate("/my-profile");
//         } else if (auth.user?.role === "ROLE_RESTAURANT_OWNER") {
//             navigate("/admin/restaurant");
//         } else {
//             navigate("/my-profile");
//         }
//     };

//     return (
//         <div className="navbar-container">
//             <div className="w-full bg-[#e91e63] py-2 px-5 lg:px-20 flex items-center justify-between fixed top-0 left-0 z-50">
//                 {/* Left - Logo */}
//                 <div className="flex items-center space-x-2">
//                     <span onClick={() => navigate("/")} className="text-white text-2xl font-semibold cursor-pointer">
//                         Swaad
//                     </span>
//                 </div>

//                 {/* Right - Icons */}
//                 <div className="flex items-center space-x-2 lg:space-x-10">
//                     <IconButton>
//                         <SearchIcon sx={{ fontSize: "1.5rem", color: "white" }} />
//                     </IconButton>

//                     {isLoggedIn ? (
//                         // If logged in, show Avatar and Logout
//                         <>
//                             <IconButton onClick={handleAvatarClick}>
//                                 <Avatar sx={{ bgcolor: "white", color: pink[400] }}>
//                                     {auth.user?.fullName ? auth.user.fullName[0].toUpperCase() : "U"}
//                                 </Avatar>
//                             </IconButton>
//                             <button onClick={handleLogout} className="text-white px-3 py-1 bg-red-500 rounded-md">
//                                 Logout
//                             </button>
//                         </>
//                     ) : (
//                         // If not logged in, show login button
//                         <IconButton onClick={handlePersonIconClick}>
//                             <Person sx={{ fontSize: "1.5rem", color: "white" }} />
//                         </IconButton>
//                     )}

//                     <IconButton onClick={() => navigate("/cart")}>
//                         <Badge color="primary" badgeContent={auth.cartItems?.length || 0}>
//                             <ShoppingCartIcon sx={{ fontSize: "1.5rem", color: "white" }} />
//                         </Badge>
//                     </IconButton>
//                 </div>
//             </div>
//         </div>
//     );
// };






// import { Avatar, Badge, IconButton } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import SearchIcon from "@mui/icons-material/Search";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { pink } from "@mui/material/colors"; 
// import "./Navbar.css";
// import { Person } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { LOGOUT } from "../state/authentication/ActionType";

// export const Navbar = () => {
//     const { auth } = useSelector((store) => store);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     // ✅ Get the first letter of the user's name
//     const userInitial = auth.user?.fullName ? auth.user.fullName.charAt(0).toUpperCase() : "U";

//     // ✅ Check if the user is logged in
//     const isLoggedIn = Boolean(auth.user && auth.jwt);
//     console.log("Is Logged In:", isLoggedIn);

//     // ✅ Logout Function
//     const handleLogout = () => {
//         localStorage.removeItem("user");
//         localStorage.removeItem("jwt");
//         dispatch({ type: LOGOUT });  // Clear Redux state
//         navigate("/account/login");  // Redirect to login
//     };

//     // ✅ Redirect to login page only if not logged in
//     const handlePersonIconClick = () => {
//         if (!isLoggedIn) {
//             console.log("Redirecting to login");
//             navigate("/account/login");
//         }
//     };

//     // ✅ Redirect to profile based on user role
//     const handleAvatarClick = () => {
//         if (auth.user?.role === "ROLE_CUSTOMER") {
//             navigate("/my-profile");
//         } else if (auth.user?.role === "ROLE_RESTAURANT_OWNER") {
//             navigate("/admin/restaurant");
//         } else {
//             navigate("/my-profile");
//         }
//     };

//     return (
//         <div className="navbar-container">
//             <div className="w-full bg-[#e91e63] py-2 px-5 lg:px-20 flex items-center justify-between fixed top-0 left-0 z-50">
//                 {/* Left - Logo */}
//                 <div className="flex items-center space-x-2">
//                     <span onClick={() => navigate("/")} className="text-white text-2xl font-semibold cursor-pointer">
//                         Swaad
//                     </span>
//                 </div>

//                 {/* Right - Icons */}
//                 <div className="flex items-center space-x-2 lg:space-x-10">
//                     <IconButton>
//                         <SearchIcon sx={{ fontSize: "1.5rem", color: "white" }} />
//                     </IconButton>

//                     {isLoggedIn ? (
//                         // ✅ Logged in: Show Avatar & Logout Button
//                         <>
//                             <IconButton onClick={handleAvatarClick}>
//                                 <Avatar sx={{ bgcolor: "white", color: pink[400] }}>
//                                     {userInitial}
//                                 </Avatar>
//                             </IconButton>
//                             <button onClick={handleLogout} className="text-white px-3 py-1 bg-red-500 rounded-md">
//                                 Logout
//                             </button>
//                         </>
//                     ) : (
//                         // ✅ Not logged in: Show login icon
//                         <IconButton onClick={handlePersonIconClick}>
//                             <Person sx={{ fontSize: "1.5rem", color: "white" }} />
//                         </IconButton>
//                     )}

//                     <IconButton onClick={() => navigate("/cart")}>
//                         <Badge color="primary" badgeContent={auth.cartItems?.length || 0}>
//                             <ShoppingCartIcon sx={{ fontSize: "1.5rem", color: "white" }} />
//                         </Badge>
//                     </IconButton>
//                 </div>
//             </div>
//         </div>
//     );
// };







// import { Avatar, Badge, IconButton } from "@mui/material";
// import React, { useEffect } from "react";
// import SearchIcon from "@mui/icons-material/Search";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { pink } from "@mui/material/colors"; 
// import "./Navbar.css";
// import { Person } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { LOGOUT } from "../state/authentication/ActionType";

// export const Navbar = () => {
//     const auth = useSelector((store) => store.auth); // ✅ Ensure correct state path
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     // ✅ Debugging Logs
//     useEffect(() => {
//         console.log("Auth State:", auth);
//         console.log("User logged in:", !!auth?.user);
//         console.log("JWT:", !!auth?.jwt);
//     }, [auth]);

//     // ✅ Updated login check
//     const isLoggedIn = Boolean(auth?.user && auth?.jwt);
//     console.log("Updated Is logged in check:", isLoggedIn);

//     // Logout Function (Clears Redux & localStorage)
//     const handleLogout = () => {
//         localStorage.removeItem("user");
//         localStorage.removeItem("jwt");
//         dispatch({ type: LOGOUT });  // Dispatch logout action
//         navigate("/account/login");  // Redirect to login page
//     };

//     const handleAvatarClick = () => {
//         if (auth?.user?.role === "ROLE_CUSTOMER") {
//             navigate("/my-profile");
//         } else if (auth?.user?.role === "ROLE_RESTAURANT_OWNER") {
//             navigate("/admin/restaurant");
//         } else {
//             navigate("/my-profile");
//         }
//     };

//     return (
//         <div className="navbar-container">
//             <div className="w-full bg-[#e91e63] py-2 px-5 lg:px-20 flex items-center justify-between fixed top-0 left-0 z-50">
//                 {/* Left - Logo */}
//                 <div className="flex items-center space-x-2">
//                     <span onClick={() => navigate("/")} className="text-white text-2xl font-semibold cursor-pointer">
//                         Swaad
//                     </span>
//                 </div>

//                 {/* Right - Icons */}
//                 <div className="flex items-center space-x-2 lg:space-x-10">
//                     <IconButton>
//                         <SearchIcon sx={{ fontSize: "1.5rem", color: "white" }} />
//                     </IconButton>

//                     {isLoggedIn ? (
//                         // If logged in, show Avatar and Logout
//                         <>
//                             <IconButton onClick={handleAvatarClick}>
//                                 <Avatar sx={{ bgcolor: "white", color: pink[400] }}>
//                                     {auth?.user?.fullName ? auth.user.fullName.charAt(0).toUpperCase() : "U"}
//                                 </Avatar>
//                             </IconButton>
//                             <button onClick={handleLogout} className="text-white px-3 py-1 bg-red-500 rounded-md">
//                                 Logout
//                             </button>
//                         </>
//                     ) : (
//                         // If not logged in, show login button
//                         <IconButton onClick={() => navigate("/account/login")}>
//                             <Person sx={{ fontSize: "1.5rem", color: "white" }} />
//                         </IconButton>
//                     )}

//                     <IconButton onClick={() => navigate("/cart")}>
//                         <Badge color="primary" badgeContent={auth?.cartItems?.length || 0}>
//                             <ShoppingCartIcon sx={{ fontSize: "1.5rem", color: "white" }} />
//                         </Badge>
//                     </IconButton>
//                 </div>
//             </div>
//         </div>
//     );
// };








// import { Avatar, Badge, IconButton } from "@mui/material";
// import React, { useEffect } from "react";
// import SearchIcon from "@mui/icons-material/Search";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { pink } from "@mui/material/colors";
// import { Person } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { LOGOUT } from "../state/authentication/ActionType";
// import "./Navbar.css";

// export const Navbar = () => {
//     const auth = useSelector((state) => state.auth); // ✅ Ensure correct state path
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     // useEffect(() => {
//     //     console.log("Auth State:", auth);
//     // }, [auth]);
//     useEffect(() => {
//         if (auth?.jwt && !auth?.user) {
//             fetchUserData();
//         }
//     }, [auth?.jwt]);

//     const fetchUserData = async () => {
//     try {
//         const response = await fetch("/api/user", { 
//             headers: { Authorization: `Bearer ${auth.jwt}` }
//         });
//         const data = await response.json();
//         dispatch({ type: "SET_USER", payload: data }); // Ensure Redux handles user data
//     } catch (error) {
//         console.error("Error fetching user data:", error);
//     }
// };

//     const isLoggedIn = Boolean(auth?.jwt);

//     // Logout Function (Clears Redux & localStorage)
//     const handleLogout = () => {
//         localStorage.clear(); // ✅ Clears everything related to user session
//         dispatch({ type: LOGOUT });
//         navigate("/account/login");
//     };

//     const handleAvatarClick = () => {
//         if (auth?.user?.role === "ROLE_CUSTOMER") {
//             navigate("/my-profile");
//         } else if (auth?.user?.role === "ROLE_RESTAURANT_OWNER") {
//             navigate("/admin/restaurant");
//         } else {
//             navigate("/my-profile");
//         }
//     };

//     return (
//         <div className="navbar-container">
//             <div className="w-full bg-[#e91e63] py-2 px-5 lg:px-20 flex items-center justify-between fixed top-0 left-0 z-50">
//                 {/* Left - Logo */}
//                 <div className="flex items-center space-x-2">
//                     <span onClick={() => navigate("/")} className="text-white text-2xl font-semibold cursor-pointer">
//                         Swaad
//                     </span>
//                 </div>

//                 {/* Right - Icons */}
//                 <div className="flex items-center space-x-2 lg:space-x-10">
//                     <IconButton>
//                         <SearchIcon sx={{ fontSize: "1.5rem", color: "white" }} />
//                     </IconButton>

//                     {isLoggedIn ? (
//                         <>
//                             <IconButton onClick={handleAvatarClick}>
//                                 <Avatar sx={{ bgcolor: "white", color: pink[400] }}>
//                                     {auth?.user?.fullName?.charAt(0)?.toUpperCase() || "U"}
//                                 </Avatar>
//                             </IconButton>
//                             <button onClick={handleLogout} className="text-white px-3 py-1 bg-red-500 rounded-md">
//                                 Logout
//                             </button>
//                         </>
//                     ) : (
//                         <IconButton onClick={() => navigate("/account/login")}>
//                             <Person sx={{ fontSize: "1.5rem", color: "white" }} />
//                         </IconButton>
//                     )}

//                     <IconButton onClick={() => navigate("/cart")}>
//                         <Badge color="primary" badgeContent={auth?.cartItems?.length > 0 ? auth.cartItems.length : null}>
//                             <ShoppingCartIcon sx={{ fontSize: "1.5rem", color: "white" }} />
//                         </Badge>
//                     </IconButton>
//                 </div>
//             </div>
//         </div>
//     );
// };







// import React, { useEffect } from "react";
// import { Avatar, Badge, IconButton } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { pink } from "@mui/material/colors";
// import { Person } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { LOGOUT } from "../state/authentication/ActionType";
// import "./Navbar.css";


// export const Navbar = () => {
//     const auth = useSelector((state) => state.auth); // ✅ Ensure correct state path
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     useEffect(() => {
//         if (auth?.jwt && !auth?.user) {
//             fetchUserData();
//         }
//     }, [auth?.jwt]);

//     const fetchUserData = async () => {
//         try {
//             const response = await fetch("/api/user", { 
//                 headers: { Authorization: `Bearer ${auth.jwt}` }
//             });
//             const data = await response.json();
//             dispatch({ type: "SET_USER", payload: data }); // Ensure Redux handles user data
//         } catch (error) {
//             console.error("Error fetching user data:", error);
//         }
//     };

//     const isLoggedIn = Boolean(auth?.jwt);

//     // Logout Function (Clears Redux & localStorage)
//     const handleLogout = () => {
//         localStorage.clear(); // ✅ Clears everything related to user session
//         dispatch({ type: LOGOUT });
//         navigate("/account/login");
//     };

//     const handleAvatarClick = () => {
//         if (auth?.user?.role === "ROLE_CUSTOMER") {
//             navigate("/my-profile");
//         } else if (auth?.user?.role === "ROLE_RESTAURANT_OWNER") {
//             navigate("/admin/restaurant");
//         } else {
//             navigate("/my-profile");
//         }
//     };

//     return (
//         <nav className="navbar-container">
//             <div className="w-full bg-[#e91e63] py-2 px-5 lg:px-20 flex items-center justify-between fixed top-0 left-0 z-50">
//                 {/* Left - Logo */}
//                 <div className="flex items-center space-x-2">
//                     <span onClick={() => navigate("/")} className="text-white text-2xl font-semibold cursor-pointer">
//                         Swaad
//                     </span>
//                 </div>

//                 {/* Right - Icons */}
//                 <div className="flex items-center space-x-2 lg:space-x-10">
//                     <IconButton>
//                         <SearchIcon sx={{ fontSize: "1.5rem", color: "white" }} />
//                     </IconButton>

//                     {isLoggedIn ? (
//                         <>
//                             <IconButton onClick={handleAvatarClick}>
//                                 <Avatar sx={{ bgcolor: "white", color: pink[400] }}>
//                                     {auth?.user?.fullName?.charAt(0)?.toUpperCase() || "U"}
//                                 </Avatar>
//                             </IconButton>
//                             <button 
//                                 onClick={handleLogout} 
//                                 className="text-white px-3 py-1 bg-red-500 rounded-md hover:bg-red-700 transition">
//                                 Logout
//                             </button>
//                         </>
//                     ) : (
//                         <IconButton onClick={() => navigate("/account/login")}>
//                             <Person sx={{ fontSize: "1.5rem", color: "white" }} />
//                         </IconButton>
//                     )}

//                     <IconButton onClick={() => navigate("/cart")}>
//                         <Badge color="primary" badgeContent={auth?.cartItems?.length > 0 ? auth.cartItems.length : null}>
//                             <ShoppingCartIcon sx={{ fontSize: "1.5rem", color: "white" }} />
//                         </Badge>
//                     </IconButton>
//                 </div>
//             </div>
//         </nav>
//     );
// };






// import React, { useEffect } from "react";
// import { Avatar, Badge, IconButton } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { pink } from "@mui/material/colors";
// import { Person } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { LOGOUT } from "../state/authentication/ActionType";
// import "./Navbar.css";

// export const Navbar = () => {
//     const auth = useSelector((state) => state.auth);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     useEffect(() => {
//         console.log("Auth User:", auth.user);
//         if (auth?.jwt && !auth?.user) {
//             fetchUserData();
//         }
//     }, [auth?.jwt, auth?.user]);

//     const fetchUserData = async () => {
//         try {
//             const response = await fetch("/api/user", { 
//                 headers: { Authorization: `Bearer ${auth.jwt}` }
//             });
//             const data = await response.json();
//             console.log("Fetched User Data:", data);
//             dispatch({ type: "SET_USER", payload: data });
//         } catch (error) {
//             console.error("Error fetching user data:", error);
//         }
//     };

//     const isLoggedIn = Boolean(auth?.jwt);

//     const handleLogout = () => {
//         localStorage.clear();
//         dispatch({ type: LOGOUT });
//         navigate("/account/login");
//     };

//     const handleAvatarClick = () => {
//         if (auth?.user?.role === "ROLE_CUSTOMER") {
//             navigate("/my-profile");
//         } else if (auth?.user?.role === "ROLE_RESTAURANT_OWNER") {
//             navigate("/admin/restaurant");
//         } else {
//             navigate("/my-profile");
//         }
//     };

//     return (
//         <nav className="navbar-container">
//             <div className="w-full bg-[#e91e63] py-2 px-5 lg:px-20 flex items-center justify-between fixed top-0 left-0 z-50">
//                 {/* Left - Logo */}
//                 <div className="flex items-center space-x-2">
//                     <span onClick={() => navigate("/")} className="text-white text-2xl font-semibold cursor-pointer">
//                         Swaad
//                     </span>
//                 </div>

//                 {/* Right - Icons */}
//                 <div className="flex items-center space-x-2 lg:space-x-10">
//                     <IconButton>
//                         <SearchIcon sx={{ fontSize: "1.5rem", color: "white" }} />
//                     </IconButton>

//                     {isLoggedIn ? (
//                         <>
//                             <IconButton onClick={handleAvatarClick}>
//                                 <Avatar sx={{ bgcolor: "white", color: pink[400] }}>
//                                     {auth?.user?.fullName ? auth.user.fullName.charAt(0).toUpperCase() : "U"}
//                                 </Avatar>
//                             </IconButton>
//                             <button 
//                                 onClick={handleLogout} 
//                                 className="text-white px-3 py-1 bg-red-500 rounded-md hover:bg-red-700 transition">
//                                 Logout
//                             </button>
//                         </>
//                     ) : (
//                         <IconButton onClick={() => navigate("/account/login")}>
//                             <Person sx={{ fontSize: "1.5rem", color: "white" }} />
//                         </IconButton>
//                     )}

//                     <IconButton onClick={() => navigate("/cart")}>
//                         <Badge color="primary" badgeContent={auth?.cartItems?.length > 0 ? auth.cartItems.length : null}>
//                             <ShoppingCartIcon sx={{ fontSize: "1.5rem", color: "white" }} />
//                         </Badge>
//                     </IconButton>
//                 </div>
//             </div>
//         </nav>
//     );
// };





// import React, { useEffect } from "react";
// import { Avatar, Badge, IconButton } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { pink } from "@mui/material/colors";
// import { Person } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { LOGOUT } from "../state/authentication/ActionType";
// import "./Navbar.css";

// export const Navbar = () => {
//     const auth = useSelector((state) => state.auth);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     useEffect(() => {
//         console.log("Auth User Full Name:", auth?.user?.fullName);
//         if (auth?.jwt && !auth?.user) {
//             fetchUserData();
//         }
//     }, [auth?.jwt]);

//     const fetchUserData = async () => {
//         try {
//             const response = await fetch("/api/user", { 
//                 headers: { Authorization: `Bearer ${auth.jwt}` }
//             });
//             const data = await response.json();
//             console.log("Fetched User Data:", data);
//             dispatch({ type: "SET_USER", payload: data });
//         } catch (error) {
//             console.error("Error fetching user data:", error);
//         }
//     };

//     const isLoggedIn = Boolean(auth?.jwt);

//     const handleLogout = () => {
//         localStorage.clear();
//         dispatch({ type: LOGOUT });
//         navigate("/account/login");
//     };

//     const handleAvatarClick = () => {
//         if (auth?.user?.role === "ROLE_CUSTOMER") {
//             navigate("/my-profile");
//         } else if (auth?.user?.role === "ROLE_RESTAURANT_OWNER") {
//             navigate("/admin/restaurant");
//         } else {
//             navigate("/my-profile");
//         }
//     };

//     const getFirstName = (fullName) => {
//         if (fullName) {
//             const names = fullName.split(' ');
//             console.log("First Name:", names[0]);
//             return names[0];
//         }
//         return '';
//     };

//     return (
//         <nav className="navbar-container">
//             <div className="w-full bg-[#e91e63] py-2 px-5 lg:px-20 flex items-center justify-between fixed top-0 left-0 z-50">
//                 {/* Left - Logo */}
//                 <div className="flex items-center space-x-2">
//                     <span onClick={() => navigate("/")} className="text-white text-2xl font-semibold cursor-pointer">
//                         Swaad
//                     </span>
//                 </div>

//                 {/* Right - Icons */}
//                 <div className="flex items-center space-x-2 lg:space-x-10">
//                     <IconButton>
//                         <SearchIcon sx={{ fontSize: "1.5rem", color: "white" }} />
//                     </IconButton>

//                     {isLoggedIn ? (
//                         <>
//                             <IconButton onClick={handleAvatarClick}>
//                                 <Avatar sx={{ bgcolor: "white", color: pink[400] }}>
//                                     {auth?.user?.fullName 
//                                         ? getFirstName(auth.user.fullName).charAt(0).toUpperCase() 
//                                         : "U"}
//                                 </Avatar>
//                             </IconButton>
//                             <button 
//                                 onClick={handleLogout} 
//                                 className="text-white px-3 py-1 bg-red-500 rounded-md hover:bg-red-700 transition">
//                                 Logout
//                             </button>
//                         </>
//                     ) : (
//                         <IconButton onClick={() => navigate("/account/login")}>
//                             <Person sx={{ fontSize: "1.5rem", color: "white" }} />
//                         </IconButton>
//                     )}

//                     <IconButton onClick={() => navigate("/cart")}>
//                         <Badge color="primary" badgeContent={auth?.cartItems?.length > 0 ? auth.cartItems.length : null}>
//                             <ShoppingCartIcon sx={{ fontSize: "1.5rem", color: "white" }} />
//                         </Badge>
//                     </IconButton>
//                 </div>
//             </div>
//         </nav>
//     );
// };







// import React, { useEffect } from "react";
// import { Avatar, Badge, IconButton } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { pink } from "@mui/material/colors";
// import { Person } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { LOGOUT } from "../state/authentication/ActionType";
// import "./Navbar.css";

// export const Navbar = () => {
//     const auth = useSelector((state) => state.auth);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     useEffect(() => {
//         if (auth?.jwt && !auth?.user) {
//             fetchUserData();
//         }
//     }, [auth?.jwt]);

//     const fetchUserData = async () => {
//         try {
//             const response = await fetch("/api/user", { 
//                 headers: { Authorization: `Bearer ${auth.jwt}` }
//             });
//             const data = await response.json();
//             dispatch({ type: "SET_USER", payload: data });
//         } catch (error) {
//             console.error("Error fetching user data:", error);
//         }
//     };

//     const isLoggedIn = Boolean(auth?.jwt);

//     const handleLogout = () => {
//         localStorage.clear();
//         dispatch({ type: LOGOUT });
//         navigate("/account/login");
//     };

//     const handleAvatarClick = () => {
//         navigate("/my-profile");
//     };

//     return (
//         <nav className="navbar-container">
//             <div className="w-full bg-[#e91e63] py-2 px-5 lg:px-20 flex items-center justify-between fixed top-0 left-0 z-50">
//                 {/* Left - Logo */}
//                 <div className="flex items-center space-x-2">
//                     <span onClick={() => navigate("/")} className="text-white text-2xl font-semibold cursor-pointer">
//                         Swaad
//                     </span>
//                 </div>

//                 {/* Right - Icons */}
//                 <div className="flex items-center space-x-2 lg:space-x-10">
//                     <IconButton>
//                         <SearchIcon sx={{ fontSize: "1.5rem", color: "white" }} />
//                     </IconButton>

//                     {isLoggedIn ? (
//                         <>
//                             <IconButton onClick={handleAvatarClick}>
//                                 <Avatar sx={{ bgcolor: "white", color: pink[400] }}>
//                                     U
//                                 </Avatar>
//                             </IconButton>
//                             <button 
//                                 onClick={handleLogout} 
//                                 className="text-white px-3 py-1 bg-red-500 rounded-md hover:bg-red-700 transition">
//                                 Logout
//                             </button>
//                         </>
//                     ) : (
//                         <IconButton onClick={() => navigate("/account/login")}>
//                             <Person sx={{ fontSize: "1.5rem", color: "white" }} />
//                         </IconButton>
//                     )}

//                     <IconButton onClick={() => navigate("/cart")}>
//                         <Badge color="primary" badgeContent={auth?.cartItems?.length > 0 ? auth.cartItems.length : null}>
//                             <ShoppingCartIcon sx={{ fontSize: "1.5rem", color: "white" }} />
//                         </Badge>
//                     </IconButton>
//                 </div>
//             </div>
//         </nav>
//     );
// };








// // import React, { useEffect } from "react";
// // import { AppBar, Toolbar, Typography, IconButton, Avatar } from "@mui/material";
// // import { pink } from "@mui/material/colors";
// // import { useDispatch, useSelector } from "react-redux";
// // import { getUser, logout } from "../state/authentication/action";

// // import { useNavigate } from "react-router-dom";

// // const Navbar = () => {
// //     const dispatch = useDispatch();
// //     const navigate = useNavigate();
// //     const auth = useSelector((state) => state.auth); // Get auth state from Redux

// //     console.log("Auth State in Navbar:", auth); // Debugging

// //     useEffect(() => {
// //         if (auth?.jwt && !auth?.user) {
// //             dispatch(getUser()); // Fetch user data if JWT is present
// //         }
// //     }, [auth?.jwt, dispatch]);

// //     const handleLogout = () => {
// //         dispatch(logout());
// //         navigate("/login");
// //     };

// //     const handleAvatarClick = () => {
// //         navigate(auth?.user ? "/profile" : "/login"); // Redirect based on login state
// //     };

// //     return (
// //         <AppBar position="static">
// //             <Toolbar>
// //                 <Typography variant="h6" sx={{ flexGrow: 1 }}>
// //                     My App
// //                 </Typography>

// //                 {auth?.jwt ? (
// //                     <>
// //                         <IconButton onClick={handleAvatarClick}>
// //                             <Avatar sx={{ bgcolor: "white", color: pink[400] }}>
// //                                 {auth?.user?.name ? auth.user.name.charAt(0).toUpperCase() : "U"}
// //                             </Avatar>
// //                         </IconButton>
// //                         <button onClick={handleLogout} style={{ marginLeft: "10px", cursor: "pointer" }}>
// //                             Logout
// //                         </button>
// //                     </>
// //                 ) : (
// //                     <button onClick={() => navigate("/login")}>Login</button>
// //                 )}
// //             </Toolbar>
// //         </AppBar>
// //     );
// // };

// // export default Navbar;







// import React, { useEffect } from "react";
// import { Badge, IconButton } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { Person } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { LOGOUT } from "../state/authentication/ActionType";
// import "./Navbar.css";

// export const Navbar = () => {
//     const auth = useSelector((state) => state.auth);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     useEffect(() => {
//         if (auth?.jwt && !auth?.user) {
//             fetchUserData();
//         }
//     }, [auth?.jwt]);

//     const fetchUserData = async () => {
//         try {
//             const response = await fetch("/api/user", { 
//                 headers: { Authorization: `Bearer ${auth.jwt}` }
//             });
//             const data = await response.json();
//             dispatch({ type: "SET_USER", payload: data });
//         } catch (error) {
//             console.error("Error fetching user data:", error);
//         }
//     };

//     const isLoggedIn = Boolean(auth?.jwt);

//     const handleLogout = () => {
//         localStorage.clear();
//         dispatch({ type: LOGOUT });
//         navigate("/account/login");
//     };

//     const handleProfileClick = () => {
//         navigate("/my-profile");
//     };

//     return (
//         <nav className="navbar-container">
//             <div className="w-full bg-[#e91e63] py-2 px-5 lg:px-20 flex items-center justify-between fixed top-0 left-0 z-50">
//                 {/* Left - Logo */}
//                 <div className="flex items-center space-x-2">
//                     <span onClick={() => navigate("/")} className="text-white text-2xl font-semibold cursor-pointer">
//                         Swaad
//                     </span>
//                 </div>

//                 {/* Right - Icons */}
//                 <div className="flex items-center space-x-2 lg:space-x-10">
//                     <IconButton>
//                         <SearchIcon sx={{ fontSize: "1.5rem", color: "white" }} />
//                     </IconButton>

//                     {isLoggedIn ? (
//                         <>
//                             <button 
//                                 onClick={handleProfileClick} 
//                                 className="text-white px-3 py-1 bg-transparent border border-white rounded-md hover:bg-white hover:text-[#e91e63] transition">
//                                 Hi, {auth?.user?.fullName}
//                             </button>
//                             <button 
//                                 onClick={handleLogout} 
//                                 className="text-white px-3 py-1 bg-red-500 rounded-md hover:bg-red-700 transition">
//                                 Logout
//                             </button>
//                         </>
//                     ) : (
//                         <IconButton onClick={() => navigate("/account/login")}>
//                             <Person sx={{ fontSize: "1.5rem", color: "white" }} />
//                         </IconButton>
//                     )}

//                     <IconButton onClick={() => navigate("/cart")}>
//                         <Badge color="primary" badgeContent={auth?.cartItems?.length > 0 ? auth.cartItems.length : null}>
//                             <ShoppingCartIcon sx={{ fontSize: "1.5rem", color: "white" }} />
//                         </Badge>
//                     </IconButton>
//                 </div>
//             </div>
//         </nav>
//     );
// };






// import React, { useEffect } from "react";
// import { Badge, IconButton } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { Person } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { LOGOUT } from "../state/authentication/ActionType";
// import "./Navbar.css";

// export const Navbar = () => {
//     const auth = useSelector((state) => state.auth);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     useEffect(() => {
//         if (auth?.jwt && !auth?.user) {
//             fetchUserData();
//         }
//     }, [auth?.jwt]);

//     const fetchUserData = async () => {
//         try {
//             const response = await fetch("/api/user", { 
//                 headers: { Authorization: `Bearer ${auth.jwt}` }
//             });
//             const data = await response.json();
//             dispatch({ type: "SET_USER", payload: data });
//         } catch (error) {
//             console.error("Error fetching user data:", error);
//         }
//     };

//     const isLoggedIn = Boolean(auth?.jwt);

//     const handleLogout = () => {
//         localStorage.clear();
//         dispatch({ type: LOGOUT });
//         navigate("/account/login");
//     };

//     const handleProfileClick = () => {
//         navigate("/my-profile");
//     };

//     return (
//         <nav className="navbar-container">
//             <div className="w-full bg-[#e91e63] py-2 px-5 lg:px-20 flex items-center justify-between fixed top-0 left-0 z-50">
//                 {/* Left - Logo */}
//                 <div className="flex items-center space-x-2">
//                     <span 
//                         onClick={() => navigate("/")} 
//                         className="text-white text-2xl font-semibold cursor-pointer">
//                         Swaad
//                     </span>
//                 </div>

//                 {/* Right - Icons */}
//                 <div className="flex items-center space-x-2 lg:space-x-10">
//                     <IconButton>
//                         <SearchIcon sx={{ fontSize: "1.5rem", color: "white" }} />
//                     </IconButton>

//                     {isLoggedIn ? (
//                         <>
//                             {/* Avatar displaying first letter of username */}
//                             <button 
//                                 onClick={handleProfileClick} 
//                                 className="text-white px-3 py-1 bg-transparent border border-white rounded-md hover:bg-white hover:text-[#e91e63] transition">
//                                 {auth?.user?.fullName ? auth.user.fullName[0].toUpperCase() : "U"}
//                             </button>

//                             {/* Logout Button */}
//                             <button 
//                                 onClick={handleLogout} 
//                                 className="text-white px-3 py-1 bg-red-500 rounded-md hover:bg-red-700 transition">
//                                 Logout
//                             </button>
//                         </>
//                     ) : (
//                         <IconButton onClick={() => navigate("/account/login")}>
//                             <Person sx={{ fontSize: "1.5rem", color: "white" }} />
//                         </IconButton>
//                     )}

//                     <IconButton onClick={() => navigate("/cart")}>
//                         <Badge color="primary" badgeContent={auth?.cartItems?.length > 0 ? auth.cartItems.length : null}>
//                             <ShoppingCartIcon sx={{ fontSize: "1.5rem", color: "white" }} />
//                         </Badge>
//                     </IconButton>
//                 </div>
//             </div>
//         </nav>
//     );
// };




// import React, { useEffect } from "react";
// import { Badge, IconButton } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { Person } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { LOGOUT } from "../state/authentication/ActionType";
// import "./Navbar.css";

// export const Navbar = () => {
//     const auth = useSelector((state) => state.auth);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();

//     useEffect(() => {
//         if (auth?.jwt && !auth?.user) {
//             fetchUserData();
//         }
//     }, [auth?.jwt]);

//     const fetchUserData = async () => {
//         try {
//             const response = await fetch("/api/user", { 
//                 headers: { Authorization: `Bearer ${auth.jwt}` }
//             });
//             const data = await response.json();
//             dispatch({ type: "SET_USER", payload: data });
//         } catch (error) {
//             console.error("Error fetching user data:", error);
//         }
//     };

//     const isLoggedIn = Boolean(auth?.jwt);

//     const handleLogout = () => {
//         localStorage.clear();
//         dispatch({ type: LOGOUT });
//         navigate("/account/login");
//     };

//     const handleProfileClick = () => {
//         navigate("/my-profile");
//     };

//     return (
//         <nav className="navbar-container">
//             <div className="w-full bg-[#e91e63] py-2 px-5 lg:px-20 flex items-center justify-between fixed top-0 left-0 z-50">
//                 {/* Left - Logo */}
//                 <div className="flex items-center space-x-2">
//                     <span 
//                         onClick={() => navigate("/")} 
//                         className="text-white text-2xl font-semibold cursor-pointer">
//                         Swaad
//                     </span>
//                 </div>

//                 {/* Right - Icons */}
//                 <div className="flex items-center space-x-2 lg:space-x-10">
//                     <IconButton>
//                         <SearchIcon sx={{ fontSize: "1.5rem", color: "white" }} />
//                     </IconButton>

//                     {isLoggedIn ? (
//                         <>
//                             {/* Avatar displaying first letter of username */}
//                             <div className="flex items-center space-x-4">
//                                 <button 
//                                     onClick={handleProfileClick} 
//                                     className="w-8 h-8 flex items-center justify-center text-white bg-transparent border border-white rounded-full hover:bg-white hover:text-[#e91e63] transition">
//                                     {auth?.user?.fullName ? auth.user.fullName[0].toUpperCase() : "U"}
//                                 </button>

//                                 {/* Logout Button */}
//                                 <button 
//                                     onClick={handleLogout} 
//                                     className="text-white px-3 py-1 bg-red-500 rounded-md hover:bg-red-700 transition">
//                                     Logout
//                                 </button>
//                             </div>
//                         </>
//                     ) : (
//                         <IconButton onClick={() => navigate("/account/login")}>
//                             <Person sx={{ fontSize: "1.5rem", color: "white" }} />
//                         </IconButton>
//                     )}

//                     <IconButton onClick={() => navigate("/cart")}>
//                         <Badge color="primary" badgeContent={auth?.cartItems?.length > 0 ? auth.cartItems.length : null}>
//                             <ShoppingCartIcon sx={{ fontSize: "1.5rem", color: "white" }} />
//                         </Badge>
//                     </IconButton>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;



// import React, { useEffect } from "react";
// import { Badge, IconButton } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { Person } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { LOGOUT, getUser } from "../state/authentication/Action";  // Import from Action.js instead of ActionType.js
// import "./Navbar.css";

// export const Navbar = () => {
//     // const {cart,auth }= useSelector((state) => state.auth);
//     const cart = useSelector((state) => state.cart);
//     const auth = useSelector((state) => state.auth);

//     const navigate = useNavigate();
//     const dispatch = useDispatch();

    

//     useEffect(() => {
//         if (auth?.jwt && !auth?.user) {
//             dispatch(getUser());
//         }
//     }, [auth?.jwt, auth?.user, dispatch]);
    

//     const isLoggedIn = Boolean(auth?.jwt);

//     const handleLogout = () => {
//         localStorage.clear();
//         dispatch({ type: LOGOUT });
//         navigate("/account/login");
//     };

//     const handleProfileClick = () => {
//         navigate("/my-profile");
//     };

//     // Get first letter of user's name for avatar
//     const getAvatarText = () => {
//         if (auth?.user?.fullName) {
//             return auth.user.fullName[0].toUpperCase();
//         }
//         return "U";
//     };

//     return (
//         <nav className="navbar-container">
//             <div className="w-full bg-[#e91e63] py-2 px-5 lg:px-20 flex items-center justify-between fixed top-0 left-0 z-50">
//                 {/* Left - Logo */}
//                 <div className="flex items-center space-x-2">
//                     <span 
//                         onClick={() => navigate("/")} 
//                         className="text-white text-2xl font-semibold cursor-pointer">
//                         Swaad
//                     </span>
//                 </div>

//                 {/* Right - Icons */}
//                 <div className="flex items-center space-x-2 lg:space-x-10">
//                     <IconButton>
//                         <SearchIcon sx={{ fontSize: "1.5rem", color: "white" }} />
//                     </IconButton>

//                     {isLoggedIn ? (
//                         <>
//                             {/* Avatar displaying first letter of username */}
//                             <div className="flex items-center space-x-4">
//                                 <button 
//                                     onClick={handleProfileClick} 
//                                     className="w-8 h-8 flex items-center justify-center text-white bg-transparent border border-white rounded-full hover:bg-white hover:text-[#e91e63] transition">
//                                     {getAvatarText()}
//                                 </button>

//                             </div>
//                         </>
//                     ) : (
//                         <IconButton onClick={() => navigate("/account/login")}>
//                             <Person sx={{ fontSize: "1.5rem", color: "white" }} />
//                         </IconButton>
//                     )}

//                     <IconButton onClick={() => navigate("/cart")}>
//                         {/* <Badge color="primary" badgeContent={cart.cart?.items.length}> */}
//                         <Badge color="primary" badgeContent={cart?.items?.length || 0}>

//                             <ShoppingCartIcon sx={{ fontSize: "1.5rem", color: "white" }} />
//                         </Badge>
//                     </IconButton>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;







// import React, { useEffect } from "react";
// import { Badge, IconButton } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { Person } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { LOGOUT, getUser } from "../state/authentication/Action";  // Import from Action.js instead of ActionType.js
// import "./Navbar.css";

// export const Navbar = () => {
//     // const {cart,auth }= useSelector((state) => state.auth);
//     const cart = useSelector((state) => state.cart);
//     const auth = useSelector((state) => state.auth);

//     const navigate = useNavigate();
//     const dispatch = useDispatch();

    

//     useEffect(() => {
//         if (auth?.jwt && !auth?.user) {
//             dispatch(getUser());
//         }
//     }, [auth?.jwt, auth?.user, dispatch]);
    

//     const isLoggedIn = Boolean(auth?.jwt);

//     const handleLogout = () => {
//         localStorage.clear();
//         dispatch({ type: LOGOUT });
//         navigate("/account/login");
//     };

//     const handleProfileClick = () => {
//         navigate("/my-profile");
//     };

//     // Get first letter of user's name for avatar
//     const getAvatarText = () => {
//         if (auth?.user?.fullName) {
//             return auth.user.fullName[0].toUpperCase();
//         }
//         return "U";
//     };

//     return (
//         <nav className="navbar-container">
//             <div className="w-full bg-[#e91e63] py-2 px-5 lg:px-20 flex items-center justify-between fixed top-0 left-0 z-50">
//                 {/* Left - Logo */}
//                 <div className="flex items-center space-x-2">
//                     <span 
//                         onClick={() => navigate("/")} 
//                         className="text-white text-2xl font-semibold cursor-pointer">
//                         Swaad
//                     </span>
//                 </div>

//                 {/* Right - Icons */}
//                 <div className="flex items-center space-x-2 lg:space-x-10">
//                     <IconButton>
//                         <SearchIcon sx={{ fontSize: "1.5rem", color: "white" }} />
//                     </IconButton>

//                     {isLoggedIn ? (
//                         <>
//                             {/* Avatar displaying first letter of username */}
//                             <div className="flex items-center space-x-4">
//                                 <button 
//                                     onClick={handleProfileClick} 
//                                     className="w-8 h-8 flex items-center justify-center text-white bg-transparent border border-white rounded-full hover:bg-white hover:text-[#e91e63] transition">
//                                     {getAvatarText()}
//                                 </button>

//                             </div>
//                         </>
//                     ) : (
//                         <IconButton onClick={() => navigate("/account/login")}>
//                             <Person sx={{ fontSize: "1.5rem", color: "white" }} />
//                         </IconButton>
//                     )}

//                     <IconButton onClick={() => navigate("/cart")}>
//                         {/* <Badge color="primary" badgeContent={cart.cart?.items.length}> */}
//                         <Badge color="primary" badgeContent={cart?.items?.length || 0}>

//                             <ShoppingCartIcon sx={{ fontSize: "1.5rem", color: "white" }} />
//                         </Badge>
//                     </IconButton>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;






import React, { useEffect } from "react";
import { Badge, IconButton, Avatar, Tooltip } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LOGOUT, getUser } from "../state/authentication/Action";
import "./Navbar.css";

export const Navbar = () => {
    const cart = useSelector((state) => state.cart);
    const auth = useSelector((state) => state.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (auth?.jwt && !auth?.user) {
            dispatch(getUser());
        }
    }, [auth?.jwt, auth?.user, dispatch]);

    const isLoggedIn = Boolean(auth?.jwt);

    const handleProfileClick = () => {
        navigate("/my-profile");
    };

    const getAvatarText = () => {
        if (auth?.user?.fullName) {
            return auth.user.fullName[0].toUpperCase();
        }
        return "U";
    };

    return (
        <nav className="navbar-container">
            <div className="w-full bg-[#e91e63] py-2 px-5 lg:px-20 flex items-center justify-between fixed top-0 left-0 z-50">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <span
                        onClick={() => navigate("/")}
                        className="text-white text-2xl font-semibold cursor-pointer"
                    >
                        Swaad
                    </span>
                </div>

                {/* Right Side */}
                <div className="flex items-center space-x-2 lg:space-x-10">
                    <IconButton>
                        <SearchIcon sx={{ fontSize: "1.5rem", color: "white" }} />
                    </IconButton>

                    {isLoggedIn ? (
                        <Tooltip title={auth.user?.fullName || "Profile"}>
                            <IconButton onClick={handleProfileClick}>
                                <Avatar
                                    sx={{
                                        bgcolor: "white",
                                        color: "#e91e63",
                                        width: 36,
                                        height: 36,
                                        fontWeight: "bold",
                                        fontSize: "1rem",
                                        border: "2px solid #e91e63"
                                    }}
                                >
                                    {getAvatarText()}
                                </Avatar>
                            </IconButton>
                        </Tooltip>
                    ) : (
                        <IconButton onClick={() => navigate("/account/login")}>
                            <PersonIcon sx={{ fontSize: "1.5rem", color: "white" }} />
                        </IconButton>
                    )}

                    <IconButton onClick={() => navigate("/cart")}>
                        <Badge color="primary" badgeContent={cart?.cartItems?.length || 0}>
                            <ShoppingCartIcon sx={{ fontSize: "1.5rem", color: "white" }} />
                        </Badge>
                    </IconButton>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
