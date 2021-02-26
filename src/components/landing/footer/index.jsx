import React from "react";
import {AppBar, Grid, IconButton, Toolbar, Typography} from "@material-ui/core";
import {Logo} from "../../../assets";
import useStyles from './style'
import {Facebook, Instagram, Twitter} from "@material-ui/icons";
import {useScroll} from "../../../hooks/useScroll";

export default function Footer() {
    const {scroll, scrollTo} = useScroll()

    const classes = useStyles()
    return (

        <AppBar position={'static'} color={'transparent'} className={classes.root}>
            <Toolbar>
                <Grid direction={'row'} alignItems={'center'} spacing={3} justify={'center'} container>
                    <Grid item>
                        <img src={Logo} alt={'deu ruim'} className={classes.logo}/>
                    </Grid>
                    <Grid item>
                        <Typography variant={'h5'} style={{color: 'white'}}>
                            Hear-me
                        </Typography>
                    </Grid>


                </Grid>
                <Grid direction={'row'} alignItems={'center'} spacing={5} justify={'center'} container>
                    <Grid item>
                        <Typography onClick={() => scrollTo(scroll.home)} variant={'h6'}
                                    className={classes.primaryTextButton}>
                            Home
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography onClick={() => scrollTo(scroll.about)} variant={'h6'}
                                    className={classes.primaryTextButton}>
                            Sobre-nós
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography onClick={() => scrollTo(scroll.pricing)} variant={'h6'}
                                    className={classes.primaryTextButton}>
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