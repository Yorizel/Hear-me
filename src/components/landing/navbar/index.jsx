import React from 'react'
import {AppBar, Button, Grid, Toolbar, Typography} from '@material-ui/core'
import {Logo} from "../../../assets";
import {useHistory} from 'react-router-dom'


export default function NavBar(props) {
    const homeRef = window.document.getElementById('home')
    const scrollToHome = () => homeRef.scrollIntoView({behavior: 'smooth'})
    const aboutRef = window.document.getElementById('about')
    const scrollToAbout = () => aboutRef.scrollIntoView({behavior: 'smooth', })
    const pricingRef = window.document.getElementById('pricing')
    const scrollToPricing = () => pricingRef.scrollIntoView({behavior: 'smooth', })

    const history = useHistory()


    return (

        <AppBar position={'static'} color={'transparent'} style={{boxShadow: 'none', marginTop: 10}}>
            <Toolbar>
                <Grid direction={'row'}  justify={'center'} alignItems={'center'} spacing={3} container>
                    <Grid item>
                        <img src={Logo} alt={'deu ruim'} style={{maxWidth: 60}}/>
                    </Grid>
                    <Grid item>
                        <Typography variant={'h5'} style={{color: 'white'}}>
                            Hear-me
                        </Typography>
                    </Grid>


                </Grid>
                <Grid direction={'row'} justify={'center'} alignItems={'center'} spacing={8} container>
                    <Grid item>
                        <Typography onClick={scrollToHome} variant={'h6'} style={{color: '#8794BA', fontWeight: 400}}>
                            Home
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography onClick={scrollToAbout}  variant={'h6'} style={{color: '#8794BA', fontWeight: 400, cursor:'pointer'}}>
                            Sobre-nós
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography onClick={scrollToPricing}  variant={'h6'} style={{color: '#8794BA', fontWeight: 400}}>
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
                                    style={{color: '#8794BA', cursor: 'pointer', fontWeight: 400}}
                        >
                            Login
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button style={{
                            borderRadius: '20px',
                            textTransform: ' none',
                            border: '2px solid #465B95'
                        }} variant={'outlined'}
                                onClick={() => history.push({
                                    pathname: '/login',
                                    state: {signUp: true}
                                })}>
                            <Typography variant={'h6'} style={{color: '#8794BA', fontWeight: 400}}>
                                Cadastre-se
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>

            </Toolbar>


        </AppBar>


    )
}