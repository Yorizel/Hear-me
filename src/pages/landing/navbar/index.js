import React from 'react'
import { Grid, AppBar, Toolbar, Typography, Button} from '@material-ui/core'
import logo from '../../../assets/Logo.png'


export default function NavBar() {


    return (

            <AppBar position={'static'} color={'transparent'} style={{boxShadow: 'none', marginTop: 10}}>
                <Toolbar>
                    <Grid  direction={'row'} justify={'center'} alignItems={'center'} spacing={3} container>
                        <Grid item>
                            <img src={logo} alt={'deu ruim'} style={{maxWidth: 60}}/>
                        </Grid>
                        <Grid item>
                            <Typography variant={'h5'} style={{color: 'white'}}>
                                Hear-me
                            </Typography>
                        </Grid>


                    </Grid>
                    <Grid  direction={'row'} justify={'center'} alignItems={'center'} spacing={8} container>
                        <Grid item>
                            <Typography variant={'h6'} style={{color: '#8794BA', fontWeight: 400 }}>
                                Home
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'h6'} style={{color: '#8794BA', fontWeight: 400 }}>
                                Sobre-nós
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={'h6'} style={{color: '#8794BA', fontWeight: 400 }}>
                                Preços
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid spacing={5} direction={'row'} justify={'center'} alignItems={'center'} container>
                        <Grid item>
                            <Typography variant={'h6'} style={{color: '#8794BA', fontWeight: 400 }}>
                                Login
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button style={{
                                borderRadius: '20px',
                                textTransform: ' none',
                                border: '2px solid #465B95'
                            }} variant={'outlined'}>
                                <Typography variant={'h6'} style={{color: '#8794BA', fontWeight: 400 }}>
                                    Cadastre-se
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>

                </Toolbar>


            </AppBar>


    )
}