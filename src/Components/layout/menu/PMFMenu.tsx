
import {Menu} from "ra-ui-materialui"

import { usePermissions, useSidebarState} from "react-admin"
import DashboardIcon from '@mui/icons-material/Dashboard';

// const RefreshListButton = () => (
//   <WithListContext
//     render={({ refetch }) => (
//       <button onClick={refetch as MouseEventHandler<HTMLButtonElement>}>
//         Refresh
//       </button>
//     )}
//   />
// );

export const PMFMenu = () => {
   const [open, setOpen] = useSidebarState()

   const toggleSidebar = () => setOpen(false)
   const {permissions} = usePermissions()

   return (
      <Menu>
         {permissions !== "Aula" &&  <Menu.Item to="/" primaryText="Dashboard" leftIcon={<DashboardIcon />} onClick={toggleSidebar} />}
         <div onClick={toggleSidebar}>
            <Menu.ResourceItem name="tickets" />
            {permissions !== "Aula" && <Menu.ResourceItem name="reports" />}
            {permissions !== "Aula" && <Menu.ResourceItem name="classrooms" />}
         </div>
      </Menu>
   )
}
