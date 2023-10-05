import { Layout, LayoutProps } from "react-admin";
import { PMFAppbar } from "../appbar/PMFAppbar";
import { PMFMenu } from "../menu/PMFMenu";
import { Theme, useMediaQuery } from "@mui/material";
import { Box } from "@mui/material";
import { AppBar, Menu, Sidebar } from "react-admin";

export const PMFLayout = ({ children, dashboard }) => {
  const isXsmall = useMediaQuery<Theme>((theme) => theme.breakpoints.up("sm"));
  return isXsmall ? (
    <Box
      component="div"
      display="flex"
      flexDirection="column"
      zIndex={1}
      minHeight="100vh"
      bgcolor="background.default"
      position="relative"
    >
      <Box display="flex" flexDirection="column" overflow="auto">
        <Box display="flex" flexGrow={1}>
          <Sidebar>
            <PMFMenu/>  
          </Sidebar>
          <Box
            display="flex"
            flexDirection="column"
            flexGrow={2}
            p={3}
            marginTop="0"
            paddingLeft={5}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  ) : (
    <Box
      component="div"
      display="flex"
      flexDirection="column"
      zIndex={1}
      minHeight="100vh"
      bgcolor="background.default"
      position="relative"
    >
      <Box display="flex" flexDirection="column" overflow="auto">
      <PMFAppbar />
        <Box display="flex" flexGrow={1}>
          <Sidebar>
            <PMFMenu />
          </Sidebar>
          <Box
            display="flex"
            flexDirection="column"
            flexGrow={2}
            p={3}
            marginTop="4em"
            paddingLeft={5}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
