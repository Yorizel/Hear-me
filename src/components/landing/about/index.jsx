import React from 'react'
import Features from "./features";

import SchedulerSection from "./scheduler";
import CalendarSection from "./calendar";
import {Grid} from "@material-ui/core";
import useStyles from './style'
export default function AboutSection() {
    const classes = useStyles()
    return (
        <>
            <Grid id={'about'} container spacing={10} justify={'center'} alignItems={'center'}  className={classes.root}>
                <Grid item>
                    <Features/>
                </Grid>
                <Grid  item>
                    <SchedulerSection/>
                </Grid>
                <Grid item>
                    <CalendarSection/>
                </Grid>
            </Grid>

        </>



    )

}