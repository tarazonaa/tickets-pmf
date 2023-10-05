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
import { PMFTheme } from "./Components/theme/PMFTheme";
import { PMFLayout } from "./Components/layout/PMFLayout";
import { TicketEdit } from "./Components/edit/EditTicket";

export const App = () => {
  return (
    <Admin dashboard={Dashboard} theme={PMFTheme} dataProvider={dataProvider}>
      <Resource name="tickets" list={TicketList} create={CreateTicket} show={TicketShow} edit={TicketEdit}/>
    </Admin>
  );
};
