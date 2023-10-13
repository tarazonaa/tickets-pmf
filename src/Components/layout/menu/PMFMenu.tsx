import {Box} from "@mui/material"
import {Menu} from "ra-ui-materialui"
import {useState} from "react"
import {useLocale, usePermissions, useSidebarState} from "react-admin"

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
         <Menu.DashboardItem onClick={toggleSidebar} />
         <div onClick={toggleSidebar}>
            <Menu.ResourceItem name="tickets" />
            {permissions !== "Aula" && <Menu.ResourceItem name="reportes" />}
         </div>
      </Menu>
   )
}
