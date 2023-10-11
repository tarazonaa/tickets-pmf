import {styled} from "@mui/material/styles"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import ExampleLineC from "../../../Components/constant/ExampleLineC"
import ExamplePieC from "../../../Components/constant/ExamplePieC"
import RadarExample from "../../../Components/constant/ExampleRadarC"
import ExampleBarC from "../../../Components/constant/ExampleBarC"
import Typography from "@mui/material/Typography"

const Item = styled(Paper)(({theme}) => ({
   ...theme.typography.body2,
   padding: theme.spacing(1),
   textAlign: "center",
   color: theme.palette.text.secondary,
}))

export const Dashboard = () => {
   return (
      <Grid
         container
         spacing={2}
         sx={{
            mt: 2,
         }}
      >
         <Grid item xs={6} md={8}>
            <Item sx={{height: "50vh"}}>
               <Typography variant="h2" gutterBottom>
                  Bienvenido!
               </Typography>
               <Typography variant="body1" gutterBottom sx={{textAlign: "left"}}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
                  suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos
                  laborum fugiat deleniti? Eum quasi quidem quibusdam.
               </Typography>
            </Item>
         </Grid>
         <Grid item xs={6} md={4}>
            <Item sx={{height: "50vh"}}>
               <ExampleLineC />
            </Item>
         </Grid>
         <Grid item xs={6} md={4}>
            <Item sx={{height: "35vh"}}>
               <ExamplePieC />
            </Item>
         </Grid>
         <Grid item xs={6} md={4}>
            <Item sx={{height: "35vh"}}>
               <RadarExample />
            </Item>
         </Grid>
         <Grid item xs={6} md={4}>
            <Item sx={{height: "35vh"}}>
               <ExampleBarC />
            </Item>
         </Grid>
      </Grid>
   )
}
