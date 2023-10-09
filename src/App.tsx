import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
  Title,
  CustomRoutes,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { TicketList } from "./Components/tickets/ticketsList";
import { CreateTicket } from "./Components/create/CreateTicket";
import { Route } from "react-router-dom";
import Dashboard from "./Components/dashboard/Dashboard";
import { TicketShow } from "./Components/show/TicketShow";
import { PMFThemeLight } from "./Components/theme/PMFTheme-Light";
import { PMFLayout } from "./Components/layout/PMFLayout";
import { TicketEdit } from "./Components/edit/EditTicket";
import { PMFThemeDark } from "./Components/theme/PMFTheme-Dark";

export const App = () => {
  return (
    <Admin
      dashboard={Dashboard}
      theme={PMFThemeLight}
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
