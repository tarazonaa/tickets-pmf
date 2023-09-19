import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { TicketList } from "./tickets/ticketsList";

export const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="tickets" list={TicketList} />
    </Admin>
  );
};
