import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#586767",
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    // Name of the component
    MuiDialog: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          padding: "24px 0",
        },
      },
    },
  },
});
export default theme;
