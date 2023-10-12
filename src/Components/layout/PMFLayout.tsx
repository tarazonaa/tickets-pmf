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
    }}
    menu={PMFMenu}
  />
);
