import React from 'react'
import {AppBar, Button, Grid, Toolbar, Typography} from '@material-ui/core'
import {Logo} from "../../../assets";
import {useHistory} from 'react-router-dom'
import useStyles from './style'
import {useScroll} from "../../../hooks/useScroll";

export default function NavBar() {
    const {scroll, scrollTo} = useScroll()

    const classes = useStyles()
    const history = useHistory()


    return (

        <AppBar position={'static'} color={'transparent'} className={classes.root}>
            <Toolbar>
                <Grid direction={'row'} justify={'center'} alignItems={'center'} spacing={3} container>
                    <Grid item>
                        <img src={Logo} alt={'deu ruim'} className={classes.logo}/>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.logoText}>
                            Hear-me
                        </Typography>
                    </Grid>


                </Grid>
                <Grid direction={'row'} justify={'center'} alignItems={'center'} spacing={8} container>
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

                <Grid spacing={5} direction={'row'} justify={'center'} alignItems={'center'} container>
                    <Grid item>
                        <Typography onClick={() => history.push({
                            pathname: '/login',
                            state: {signUp: false}
                        })}
                                    variant={'h6'}
                                    className={classes.primaryTextButton}
                        >
                            Login
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button className={classes.primaryButton} variant={'outlined'}
                                onClick={() => history.push({
                                    pathname: '/login',
                                    state: {signUp: true}
                                })}>
                            <Typography className={classes.buttonText}>
                                Cadastre-se
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>

            </Toolbar>


        </AppBar>


    )
}