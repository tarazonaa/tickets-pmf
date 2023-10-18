import { defaultDarkTheme } from "react-admin";

export const PMFThemeDark = {
  ...defaultDarkTheme,
  tooltip: {
    contentStyle: {
      backgroundColor: "#232D3F",
      color: "#fff",
      fontSize: "14px",
      borderRadius: "6px",
      padding: "10px",
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
    },
  },
  palette: {
    ...defaultDarkTheme.palette,
    primary: {
      main: "#008170",
    },
    secondary: {
      main: "#005B41",
    },
    background: {
      default: "#0F0F0F",
      paper: "#232D3F",
    },
    divider: "#005B41",
  },
  typography: {
    fontFamily: "Inter",
    h5: {
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 6,
  },
  sidebar: {
    width: 150, // The default value is 240
    closedWidth: 55, // The default value is 55
  },
};
