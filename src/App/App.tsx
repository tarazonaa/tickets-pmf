import {
  Admin,
  Resource,
} from "react-admin";
import { dataProvider } from "./Connection/dataProvider";
import { TicketList } from "./pages/tickets_list/ticketsList";
import { CreateTicket } from "./pages/create/CreateTicket";
import Dashboard from "./pages/dashboard/Dashboard";
import { TicketShow } from "./pages/show/TicketShow";
import { PMFThemeLight } from "../Custom/theme/PMFTheme-Light";
import { PMFLayout } from "../Components/layout/PMFLayout";
import { TicketEdit } from "./pages/edit/EditTicket";
import { PMFThemeDark } from "../Custom/theme/PMFTheme-Dark";
import authProvider from "./Connection/authProvider";
import MyLoginPage from "./pages/login/MyLoginPage";

export const App = () => {
  return (
    <Admin
      dashboard={Dashboard}
      theme={PMFThemeLight}
      loginPage={MyLoginPage as any} 
      authProvider={authProvider}
      darkTheme={PMFThemeDark}
      dataProvider={dataProvider}
      layout={PMFLayout}
    >
      <Resource
        name="tickets"
        list={TicketList}
        create={CreateTicket}
        show={TicketShow}
        edit={TicketEdit}
      />
    </Admin>
  );
};
