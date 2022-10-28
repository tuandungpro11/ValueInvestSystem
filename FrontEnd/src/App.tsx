import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import { BrowserRouter as Router } from "react-router-dom";
import RouterApp from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <RouterApp />
      </Router>
    </ThemeProvider>
  );
}

export default App;
