import { createTheme } from "@mui/material/styles";
import { deDE } from "@mui/x-date-pickers/locales";

const theme = createTheme(
  {
    palette: {
      primary: {
        main: "#F76448",
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
  },
  deDE
);
export default theme;
