
import { Navbar } from "./components/navbar/Navbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./theme/DarkTheme";
import Home from "./components/home/Home";
import RestaurantDetails from "./components/restaurant/RestaurantDetails";
import Cart from "./components/cart/Cart";
import Profile from "./components/profile/Profile";
import { CustomerRouter } from "./routers/CustomerRouter";

function App() {
  console.log("Current Theme Palette:", darkTheme.palette);


  return (
    
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      {/* <Navbar/> */}
      {/* <Home/> */}
      {/* <RestaurantDetails/> */}
      {/* <Cart/> */}
      {/* <Profile/> */}
      <CustomerRouter/>

    </ThemeProvider>
    
    
  );
}

export default App;





