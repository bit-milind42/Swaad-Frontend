
import { Navbar } from "./components/navbar/Navbar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./theme/DarkTheme";

function App() {
  console.log("Current Theme Palette:", darkTheme.palette);


  return (
    
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Navbar/>
     
    </ThemeProvider>
    
    
  );
}

export default App;





