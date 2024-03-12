import "./App.css";
import PocDemo from "./components/PocDemo";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { muiPoc1 } from "./themes/muiPoc1";
//import { muiPocTestBed as muiPoc1 } from "./themes/muiPocTestBed";

function App() {
  const muiPocTheme = createTheme(muiPoc1);
  return (
    <ThemeProvider theme={muiPocTheme}>
      <div>
        <h2 className="App-header">MUI POC</h2>
        <PocDemo />
      </div>
    </ThemeProvider>
  );
}

export default App;
