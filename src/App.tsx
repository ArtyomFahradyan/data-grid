import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Router from "./components/Router";
import theme from "theme";
import "./index.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
