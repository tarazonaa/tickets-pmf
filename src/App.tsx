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

export const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <CustomRoutes>
        <Route path="/" element={<Dashboard />}/>
      </CustomRoutes>
      <Resource name="tickets" list={TicketList} create={CreateTicket} show={TicketShow} />
    </Admin>
  );
};
