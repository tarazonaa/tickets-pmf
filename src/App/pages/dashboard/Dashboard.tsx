import {styled} from "@mui/material/styles"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import TicketCount from "../../../Components/constant/Total"
import { MenuItemLink, useDataProvider } from "react-admin"
import RadarExample from "../../../Components/constant/CategoryChart"
import ClassroomIncidentReport from "../../../Components/constant/ClassroomReturnerIncidents"
import { ReportData } from "../../../Components/Context/DashboardReportRecord"
import { useEffect, useState } from "react"
import Top5ClassroomsChart from "../../../Components/constant/Top5ClassroomsChart"

const Item = styled(Paper)(({theme}) => ({
   ...theme.typography.body2,
   padding: theme.spacing(1),
   textAlign: "center",
   color: theme.palette.text.secondary,
}))

const ReportDashNewClosed: React.FC<{ id: number }> = ({ id }) => {
      const dataProvider = useDataProvider();
      const [report, setReport] = useState<ReportData | null>(null);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState('');
  
      useEffect(() => {
          dataProvider.getOne('reports', { id: id })
              .then(({ data }) => {
                  setReport(data);
                  setLoading(false);
                  console.log(data)
              })
              .catch((error) => {
                  setError(error.message);
                  setLoading(false);
              });
      }, [dataProvider, id]);
  
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error: {error}</div>;
      if (!report) return <div>No report found</div>;
     return (
       <Box sx={{height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-evenly"}}>
            <Typography variant="h6" sx={{fontWeight: "800"}}>
            Numero de tickets nuevos
            </Typography>
            <Typography variant="h4">
               {report.newTickets[0].newTickets}
            </Typography>
            <Typography variant="h6" sx={{fontWeight: "800"}}>
               Numero de tickets cerrados
            </Typography>
            <Typography variant="h4">
            {report.closedTickets[0].closedTickets}
            </Typography>
         </Box>
     )
   }

export const Dashboard = () => {
   return (
      
      <Grid
         container
         spacing={2}
         sx={{
            mt: .75,
         }}
      >
         <Grid item xs={6} md={4}>
            <Item sx={{height: "50vh"}}>
               <Top5ClassroomsChart />
            </Item>
         </Grid>
         <Grid item xs={6} md={4}>
            <Item sx={{height: "50vh", display:"flex", flexDirection: "column", justifyContent: "space-evenly"}}>
               <Typography variant="h2" gutterBottom sx={{}}>
                  ¡Bienvenido!
               </Typography>
               <Typography variant="body1" gutterBottom sx={{textAlign: "left", px: "2em"}}>
                Bienvenido al sistema de Tickets de PMF. Puedes ver en esta pagina las graficas semanales de los tickets que se han creado en el sistema. 
               </Typography>
               <Box sx={{
            display: "flex",
            justifyContent: "space-evenly",
         }}>
               <MenuItemLink to="/tickets" primaryText="Ir a Tickets" sx={{color: '#008170'}}/>
               <MenuItemLink to="/reports" primaryText="Ir a Reportes"sx={{color: '#008170'}}/>
               </Box>
            </Item>
         </Grid>
         <Grid item xs={6} md={4}>
            <Item sx={{height: "50vh",display:"flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
               <RadarExample />
            </Item>
         </Grid>
         <Grid item xs={6} md={4}>
            <Item sx={{height: "35vh"}}>
            <ReportDashNewClosed  id={2} />
            </Item>
         </Grid>
         <Grid item xs={6} md={4}>
            <Item sx={{display:"flex", flexDirection: "column",height: "35vh", justifyContent: "space-evenly"}}>
               <Typography variant="h4">
                  Total de tickets
               </Typography>
               <TicketCount/>
            </Item>
         </Grid>
         <Grid item xs={6} md={4}>
            <Item sx={{height: "35vh"}}>
             <ClassroomIncidentReport/>
            </Item>
         </Grid>
      </Grid>
   )
}
