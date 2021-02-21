import React from 'react'
import {Fade, Grid} from "@material-ui/core";
import SideBar from "./side_bar";

export default function DashboardLanding() {
    return (
        <Fade in={true} unmountOnExit>
            <Grid container>
                <Grid item>
                    <SideBar/>
                </Grid>
            </Grid>
        </Fade>

    )
}