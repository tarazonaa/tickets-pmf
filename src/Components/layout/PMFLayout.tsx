import { Layout, LayoutProps } from "react-admin";
import { PMFAppbar } from "./appbar/PMFAppbar";
import { PMFMenu } from "./menu/PMFMenu";

export const PMFLayout = (props: LayoutProps) => (
  <Layout
    {...props}
    appBar={PMFAppbar}
    sx={{
      "& .RaLayout-content": {
        paddingTop: "10px",
      },
      "& .css-1sfy5zw-MuiList-root-RaMenu-root": {
        marginTop: "10px",
      },
      "& .MuiMenuItem-gutters":
      {
        svg: {
          height: "1.5em",
        },
      }

    }}
    menu={PMFMenu}
  />
);
