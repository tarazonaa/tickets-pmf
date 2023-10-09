import { Toolbar, Box } from "@mui/material";
import { RefreshIconButton } from "react-admin";
import { AppBar, TitlePortal } from "react-admin";
import { Theme, useMediaQuery } from "@mui/material";
import Logo from "../../utils/Logo/Logo";
import { Link } from "react-router-dom";

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
        "& .RaConfigurable-root": {
          fontWeight: "bold",
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
        "& .RaConfigurable-root": {
          fontWeight: "bold",
          marginLeft: "20px",
        },
        "& .RaAppBar-menuButton": {
          display: "none",
        },
      }}
    >
      <TitlePortal />
      <Link to="/">
        <Logo />
      </Link>
      <Box sx={{ flexGrow: .9  }} />
    </AppBar>
  );
};
