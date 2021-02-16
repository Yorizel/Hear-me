import React from 'react'

import {Grid} from "@material-ui/core";
import Home from './home'

export default function LandingPage() {
    return (
        <Grid container style={{
            backgroundColor: ' #F8F9FF'
        }}>
            <Grid  item>
                <Home />
            </Grid>

        </Grid>
    )
}