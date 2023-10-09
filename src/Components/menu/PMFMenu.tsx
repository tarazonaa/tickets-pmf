import { Box } from "@mui/material";
import { Logout, Menu, RefreshIconButton, UserMenu } from "ra-ui-materialui";
import { Theme, useMediaQuery } from "@mui/material";

// const RefreshListButton = () => (
//   <WithListContext
//     render={({ refetch }) => (
//       <button onClick={refetch as MouseEventHandler<HTMLButtonElement>}>
//         Refresh
//       </button>
//     )}
//   />
// );

export const PMFMenu = () => {
  const isXsmall = useMediaQuery<Theme>((theme) => theme.breakpoints.up  ("sm"));
  return isXsmall ? (
  <Menu>
    <Menu.DashboardItem />
    <Menu.ResourceItem name="tickets" />
    <Box
    mt={60}>
      <RefreshIconButton sx={{ marginLeft: "9px" }} />
      <Logout />
    </Box>
  </Menu>
) : (
  <Menu>
    <Menu.DashboardItem />
    <Menu.ResourceItem name="tickets" />
    <Box
    sx={{
      marginTop: 75,
    }}>
      <Logout />
    </Box>
  </Menu>
);
};
