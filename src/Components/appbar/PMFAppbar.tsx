import { Toolbar, Box } from "@mui/material";
import { RefreshIconButton } from "react-admin";
import { AppBar, TitlePortal } from "react-admin";
import { Theme, useMediaQuery } from "@mui/material";
import Logo from "../../utils/Logo/Logo";

export const PMFAppbar = () => {
  const isXsmall = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("sm")
  );

  return isXsmall ? (
    <AppBar
      sx={{
        height: "50px",
        "& .RaAppBar-toolbar": {
          height: "50px",
        },
      }}
    >
      <TitlePortal />
    </AppBar>
  ) : (
    <AppBar
      sx={{
        height: "64px",
        "& .RaAppBar-toolbar": {
          height: "64px",
        },
      }}
    >
      <TitlePortal />
      <Box flex="1" />
      <Logo />
      <Box flex="2" />
    </AppBar>
  );
};
