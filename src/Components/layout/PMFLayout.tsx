import { Layout, LayoutProps } from "react-admin";
import { PMFAppbar } from "../appbar/PMFAppbar";
import { PMFMenu } from "../menu/PMFMenu";
import { Theme, useMediaQuery } from "@mui/material";
import { Box } from "@mui/material";
import { AppBar, Menu, Sidebar } from "react-admin";

export const PMFLayout = (props: LayoutProps) => (
  <Layout
    {...props}
    appBar={PMFAppbar}
    sx={{
      "& .RaLayout-content": {
        paddingTop: "10px",
      },
    }}
    menu={PMFMenu}
  />
);
