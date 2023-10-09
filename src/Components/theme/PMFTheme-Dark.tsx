import { defaultDarkTheme } from "react-admin";

export const PMFThemeDark = {
  ...defaultDarkTheme,
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
    closedWidth: 5, // The default value is 55
  },
};
