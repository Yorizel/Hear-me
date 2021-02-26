import React from 'react'
import {Button, Grid, Typography} from "@material-ui/core";
import Navbar from '../navbar'
import useStyles from './style'


export default function HomeSection() {
    const classes = useStyles()

    return (
        <Grid  id={'home'}  direction={'column'} container className={classes.root}>

            <Grid  item>
                <Navbar />
            </Grid>
            <Grid direction={'column'}  justify={'center'} alignItems={'flex-start'} spacing={3} alignContent={'center'} container >

                <Grid style={{maxWidth: '75vw'}} item>
                    <Typography variant={'h1'} className={classes.primaryText}>
                        Administre seu consultorio totalmente online
                    </Typography>
                </Grid>
                <Grid style={{maxWidth: '50vw'}} item>
                    <Typography variant={'body1'} className={classes.bodyText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat
                        pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat
                        pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat
                        pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam.
                    </Typography>
                </Grid>
                <Grid item>
                    <Button className={classes.primaryButton}>
                        <Typography variant={'h6'} style={{color: 'white', fontWeight: '500'}}>
                            Assine Agora
                        </Typography>

                    </Button>
                </Grid>
            </Grid>





        </Grid>
    )
}