import { Toolbar, Box } from "@mui/material";
import { AppBar, TitlePortal, RefreshIconButton } from "react-admin";
import { Theme, useMediaQuery } from "@mui/material";

export const PMFAppbar = () => {
  const isXsmall = useMediaQuery<Theme>((theme) => theme.breakpoints.up("sm"));

  return isXsmall ? (
    <AppBar sx={{
      display: "block",
      zIndex: 3,
    }}>
      <TitlePortal />
      <Box flex="1" />
    </AppBar>
  ) : (
    <AppBar>
      <TitlePortal />
      <Box flex="1" />
    </AppBar>
  );
};
