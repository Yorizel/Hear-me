import React from 'react'

import {Fade, Grid} from "@material-ui/core";
import Home from './home'

export default function LandingPage() {
    return (
        <Fade in={true} unmountOnExit>
            <Grid container style={{
                backgroundColor: ' #F8F9FF'
            }}>
                <Grid item>
                    <Home/>
                </Grid>

            </Grid>
        </Fade>
    )
}