import {AppBar, Grid, IconButton, Toolbar, Typography} from "@material-ui/core";
import {Logo} from "../../../assets";
import React from "react";
import useStyles from './style'

import {Facebook, Instagram, Twitter} from "@material-ui/icons";

export default function Footer() {
    const footerHomeRef = window.document.getElementById('home')
    const footerToHome = () => footerHomeRef.scrollIntoView({behavior: 'smooth'})
    const footerAbout = window.document.getElementById('about')
    const footerToAbout = () => footerAbout.scrollIntoView({behavior: 'smooth', })
    const footerPricingRef = window.document.getElementById('pricing')
    const footerToPricing = () => footerPricingRef.scrollIntoView({behavior: 'smooth', })

    const classes = useStyles()
    return (

        <AppBar position={'static'}  color={'transparent'} className={classes.root}>
            <Toolbar>
                    <Grid direction={'row'} alignItems={'center'} spacing={3} justify={'center'} container >
                        <Grid item>
                            <img src={Logo} alt={'deu ruim'} className={classes.logo}/>
                        </Grid>
                        <Grid item>
                            <Typography variant={'h5'} style={{color: 'white'}}>
                                Hear-me
                            </Typography>
                        </Grid>


                    </Grid>
                    <Grid direction={'row'} alignItems={'center'} spacing={5} justify={'center'} container >
                        <Grid item>
                            <Typography onClick={footerToHome} variant={'h6'} style={{color: '#8794BA', fontWeight: 400}}>
                                Home
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography onClick={footerToAbout} variant={'h6'} style={{color: '#8794BA', fontWeight: 400}}>
                                Sobre-nós
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography onClick={footerToPricing} variant={'h6'} style={{color: '#8794BA', fontWeight: 400}}>
                                Preços
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid direction={'row'} alignItems={'center'} spacing={3} justify={'center'} container>
                        <Grid item>
                            <IconButton>
                                <Twitter className={classes.iconButton}/>
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton>
                                <Instagram className={classes.iconButton}/>
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton>
                                <Facebook className={classes.iconButton}/>
                            </IconButton>
                        </Grid>
                    </Grid>

            </Toolbar>
        </AppBar>

    )
}