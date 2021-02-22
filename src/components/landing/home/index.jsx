import React from 'react'
import {Button, Grid, Typography} from "@material-ui/core";
import Navbar from '../navbar'
import bg from '../../../assets/background-top.png'

export default function Home() {
    return (
        <Grid xl={'auto'} xs={'auto'} sm={'auto'} lg={'auto'} md={'auto'} direction={'column'} container style={{
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
            <Grid direction={'column'} xl={'auto'} xs={'auto'} sm={'auto'} lg={'auto'} md={'auto'} justify={'center'} alignItems={'flex-start'} alignContent={'center'} spacing={2}
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