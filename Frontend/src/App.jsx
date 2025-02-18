
import { Navbar } from "./components/navbar/Navbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./theme/DarkTheme";
import Home from "./components/home/Home";
function App() {
  console.log("Current Theme Palette:", darkTheme.palette);


  return (
    
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Navbar/>
      <Home/>
      
    </ThemeProvider>
    
    
  );
}

export default App;





