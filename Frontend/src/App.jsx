
import { Navbar } from "./components/navbar/Navbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./theme/DarkTheme";
import Home from "./components/home/Home";
import RestaurantDetails from "./components/restaurant/RestaurantDetails";
import Cart from "./components/cart/Cart";


function App() {
  console.log("Current Theme Palette:", darkTheme.palette);


  return (
    
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Navbar/>
      {/* <Home/> */}
      {/* <RestaurantDetails/> */}
      <Cart/>

    </ThemeProvider>
    
    
  );
}

export default App;





