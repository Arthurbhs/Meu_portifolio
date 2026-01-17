import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#12081f",
      paper: "rgba(255,255,255,0.08)",
    },
    primary: {
      main: "#ec4899",
    },
    secondary: {
      main: "#8b5cf6",
    },
  },
  typography: {
    fontFamily: "Inter, system-ui, sans-serif",
    h1: {
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },
  },
});
