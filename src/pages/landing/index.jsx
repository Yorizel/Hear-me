import React from 'react'

import {Fade, Grid} from "@material-ui/core";
import Home from '../../components/landing/home'

export default function LandingPage() {
    return (
        <Fade in={true} unmountOnExit>
            <Grid xl={'auto'} xs={'auto'} sm={'auto'} lg={'auto'} md={'auto'} container style={{
                backgroundColor: ' #F8F9FF'
            }}>
                <Grid item>
                    <Home/>
                </Grid>

            </Grid>
        </Fade>
    )
}