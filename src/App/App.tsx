import {Admin, CustomRoutes, EditGuesser, ListGuesser, Resource, ShowGuesser, WithPermissions} from "react-admin"
import {dataProvider} from "./Connection/dataProvider"
import {TicketList} from "./pages/tickets_list/ticketsList"
import {CreateTicket} from "./pages/create/CreateTicket"
import {Dashboard} from "./pages/dashboard/Dashboard"
import {TicketShow} from "./pages/show/TicketShow"
import {PMFThemeLight} from "../Custom/theme/PMFTheme-Light"
import {PMFLayout} from "../Components/layout/PMFLayout"
import {TicketEdit} from "./pages/edit/EditTicket"
import {PMFThemeDark} from "../Custom/theme/PMFTheme-Dark"
import authProvider from "./Connection/authProvider"
import MyLoginPage from "./pages/login/MyLoginPage"
import {i18nProvider} from "../i18nProvider"
import {Route} from "react-router-dom"
import {ReporteList} from "./pages/report_list/ReportList"
import {ClassroomList} from "./pages/classrooms_list/classroomsList"
import {ClassroomEdit} from "./pages/edit/ClassroomEdit"
import {ClassroomShow} from "./pages/show/ClassroomShow"
import {ReportShow} from "./pages/show/ReportShow"
import BookIcon from "@mui/icons-material/Book"
import DoorFrontIcon from "@mui/icons-material/DoorFront"
import AssignmentIcon from "@mui/icons-material/Assignment"

export const App = () => {
   return (
      <Admin
         i18nProvider={i18nProvider}
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
            icon={AssignmentIcon}
            options={{
               label: "Incidentes",
            }}
         />
         <Resource
            name="reports"
            list={ReporteList}
            show={ReportShow}
            icon={BookIcon}
            options={{
               label: "Reportes",
            }}
         />
         <Resource
            name="classrooms"
            list={ClassroomList}
            create={ClassroomEdit}
            show={ClassroomShow}
            edit={ClassroomEdit}
            icon={DoorFrontIcon}
            options={{
               label: "Aulas",
            }}
         />
      </Admin>
   )
}
