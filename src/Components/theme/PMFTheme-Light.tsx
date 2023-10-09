import { defaultTheme } from "react-admin";

export const PMFThemeLight = {
  ...defaultTheme,
  palette: {
    mode: "light",
    primary: {
      main: "#1C6758",
    },
    secondary: {
      main: "#3D8361",
    },
    background: {
      default: "#D6CDA4",
      paper: "#EEF2E6",
    },
    divider: "rgba(28,103,88,0.80)",
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
