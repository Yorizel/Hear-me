import React from 'react'
import {Button, Grid, Typography} from "@material-ui/core";
import Navbar from '../navbar'
import bg from '../../../assets/background-top.png'

export default function Home() {
    return (
        <Grid direction={'column'} container style={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: 'cover',
            backgroundPosition: "center center",
            height: '100%',
            width: '100%',
            minWidth: '100vw',
            minHeight: '100vh'

        }}>
            <Grid style={{paddingBottom: 50}} item>
                <Navbar/>
            </Grid>
            <Grid direction={'column'} justify={'center'} alignItems={'flex-start'} alignContent={'center'}  spacing={2}
                  container item>

                <Grid style={{maxWidth: '50vw'}} item>
                    <Typography variant={'h2'} style={{fontWeight: 700, color: '#FFFFFF'}}>
                        Administre seu consultorio totalmente online
                    </Typography>
                </Grid>
                <Grid style={{maxWidth: '50vw'}} item>
                    <Typography variant={'body1'} style={{color: '#8794BA',}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat
                        pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam.
                    </Typography>
                </Grid>
                <Grid item>
                    <Button>
                        <Typography variant={'subtitle1'}>
                            Assine Agora
                        </Typography>

                    </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}