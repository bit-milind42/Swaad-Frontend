import React from "react";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import { AddReaction } from '@mui/icons-material';
import { Divider, Drawer, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../state/authentication/ActionType";

const menu =[{
    title:"Orders", icon:<ShoppingBagIcon/>},
    {title:"Favorites", icon:<FavoriteIcon/>},
    {title:"Address", icon:<AddReaction/>},
    {title:"Payments", icon:<AccountBalanceWalletIcon/>},
    {title:"Notification", icon:<NotificationsActiveIcon/>},
    {title:"Events", icon:<EventIcon/>},
    {title:"Logout", icon:<LogoutIcon/>}

]
export const ProfileNavigation = ({open,handleClose}) => {
    const isSmallScreen=useMediaQuery("(max-width:900px)")
    const navigate=useNavigate();
    const dispatch=useDispatch()
    const handleNavigate =(item)=>{
        if(item.title==="Logout"){
            dispatch(LOGOUT())
            navigate("/")
        }
        else
        navigate(`/my-profile/${item.title.toLowerCase()}`)
    }
    
    return (
        <div>
             <Drawer
      variant={isSmallScreen ? 'temporary' : 'permanent'} // Switch between temporary and permanent
      onClose={handleClose} // Close action when on small screens
      open={true} // Only open on small screens for temporary variant
      anchor='left' // Drawer will be on the left side
      sx={{
        zIndex: 1,
        position: 'relative', // Ensure position is relative to its container
        width: isSmallScreen ? '80%' : 240, // Set width for small screens and large screens
        flexShrink: 0, // Prevent shrinking on permanent drawer
      }}>

                <div  className="w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center text-xl gap-8 pt-16">
                    {menu.map((item,i) => (<React.Fragment key={i}>
                        <div onClick={()=>handleNavigate(item)} className="px-5 flex items-center space-x-5 cursor-pointer ">
                            {item.icon}
                            <span>
                                
                                {item.title}
                            </span>
                        </div>
                        {i!== menu.length -1 && <Divider/>}
                    </React.Fragment>
                ))}
                    
                </div>

            </Drawer>
        </div>
    )
}



