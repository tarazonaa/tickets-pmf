//import React from "react";
//mport { Route } from "react-router-dom";
import { Admin, Resource, } from "react-admin";
//import { TicketList, TicketEdit, TicketCreate } from "./TicketList";
//import { dataProvider } from "./dataProvider";
//import Registrarse from "./registrarse.jsx";
import authProvider from "./authProvider";
import MyLoginPage from './MyLoginPage';
import { TicketList, TicketEdit, TicketCreate } from "./TicketList";




const App = () => {
  return <Admin loginPage={MyLoginPage} authProvider={authProvider}>
   <Resource
        name="tickets"
        list={TicketList}
        edit={TicketEdit}
        create={TicketCreate}
      />
  </Admin>;
};
export default App;
