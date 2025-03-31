
import { Navbar } from "./components/navbar/Navbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./theme/DarkTheme";
import Home from "./components/home/Home";
import RestaurantDetails from "./components/restaurant/RestaurantDetails";
import Cart from "./components/cart/Cart";
import Profile from "./components/profile/Profile";
import { CustomerRouter } from "./routers/CustomerRouter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./components/state/authentication/Action";
import { findCart } from "./components/state/cart/Action";

function App() {
  console.log("Current Theme Palette:", darkTheme.palette);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt));
    dispatch(findCart(jwt));
  },[auth.jwt]);

  return (
    
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
     
      <CustomerRouter/>

    </ThemeProvider>
    
    
  );
}

export default App;





