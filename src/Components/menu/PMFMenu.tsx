import { Box } from "@mui/material";
import { Logout, Menu, RefreshIconButton, UserMenu } from "ra-ui-materialui";

export const PMFMenu = () => (
  <Menu>
    <Menu.DashboardItem />
    <Menu.ResourceItem name="tickets" />
    <Box>
      <RefreshIconButton sx={{marginLeft: '9px'}}/>
      <Logout />
    </Box>
  </Menu>
);
