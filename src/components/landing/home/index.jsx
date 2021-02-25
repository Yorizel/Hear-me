import React from 'react'
import {Button, Grid, Typography} from "@material-ui/core";
import Navbar from '../navbar'
import useStyles from './style'

export default function HomeSection(props) {
    const classes = useStyles()

    return (
        <Grid  id={'home'}  direction={'column'} container className={classes.root}>
            <Grid style={{paddingBottom: 80}} item>
                <Navbar />
            </Grid>
            <Grid direction={'column'}  justify={'center'} alignItems={'flex-start'} alignContent={'center'}
                  container item>

                <Grid style={{maxWidth: '75vw'}} item>
                    <Typography variant={'h1'} style={{fontWeight: 700, color: '#FFFFFF'}}>
                        Administre seu consultorio totalmente online
                    </Typography>
                </Grid>
                <Grid style={{maxWidth: '50vw'}} item>
                    <Typography variant={'body1'} style={{color: '#8794BA',}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat
                        pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat
                        pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat
                        pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam.
                    </Typography>
                </Grid>
                <Grid item>
                    <Button
                        style={{backgroundColor: '#EF2A82', textTransform: 'none', borderRadius: 20, width: '12vw'}}>
                        <Typography variant={'h6'} style={{color: 'white', fontWeight: '500'}}>
                            Assine Agora
                        </Typography>

                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}