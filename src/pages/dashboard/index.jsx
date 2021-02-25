import React from 'react'
import { Fade, Grid} from "@material-ui/core";
import SideBar from "../../components/dashboard/side_bar";
import PatientsManagement from "../../components/dashboard/patients/add_patients";

export default function DashboardLanding() {
    return (
        <Fade in={true} unmountOnExit>
            <Grid spacing={5}  direction={'row'}  container>
                <Grid  item>
                    <SideBar/>
                </Grid>
                <Grid  item>
                    <PatientsManagement/>
                </Grid>

            </Grid>
        </Fade>

    )
}