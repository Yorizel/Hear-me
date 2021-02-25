import {Grid, Typography} from "@material-ui/core";
import {ClockIcon, PaymentIcon, RocketIcon} from "../../../../assets";
import React from "react";

export default function Features(){
    return(
        <Grid spacing={10} justify={'center'} alignItems={'center'} direction={'column'} container>

                <Grid item>
                    <Typography variant={'h2'} style={{color: '#172755', fontWeight: 'bold'}}>
                        Principais recursos
                    </Typography>
                </Grid>


            <Grid direction={'row'} spacing={5} justify={'center'} alignContent={'center'} alignItems={'center'} container >
                <Grid direction={'column'} justify={'center'} spacing={1}  alignContent={'center'} alignItems={'center'} style={{maxWidth: '30%'}} container>
                    <Grid item>
                        <img style={{maxWidth:80,}} src={ClockIcon} alt={'Deu ruim'}/>
                    </Grid>
                    <Grid item>
                        <Typography style={{color: '#172755', fontWeight: 'bold', fontSize:'1.3rem'}}  align={'center'}>
                            Monitoramento da sua escala
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Typography  align={'center'} style={{fontSize: '1.1rem'}} variant={'body1'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat
                            pellentesque volutpat est.
                        </Typography>
                    </Grid>

                </Grid>
                <Grid direction={'column'} justify={'center'} spacing={1} alignContent={'center'} alignItems={'center'} style={{maxWidth: '30%'}} container >
                    <Grid item>
                        <img style={{maxWidth:80,}} src={PaymentIcon} alt={'Deu ruim'}/>
                    </Grid>
                    <Grid item>
                        <Typography style={{color: '#172755', fontWeight: 'bold'}} variant={'h6'} align={'center'}>
                            Lembrete de pagamento para seus pacientes
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Typography  align={'center'} style={{fontSize: '1.1rem'}} variant={'body1'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat
                            pellentesque volutpat est.
                        </Typography>
                    </Grid>

                </Grid>
                <Grid direction={'column'} justify={'center'} spacing={1}  alignContent={'center'} alignItems={'center'} style={{maxWidth: '30%'}} container  >
                    <Grid item>
                        <img style={{maxWidth:80,}} src={RocketIcon} alt={'Deu ruim'}/>
                    </Grid>
                    <Grid item>
                        <Typography style={{color: '#172755', fontWeight: 'bold'}} variant={'h6'}  align={'center'}>
                            Totalmente online
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Typography align={'center'} style={{fontSize: '1.1rem'}} variant={'body1'}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat
                            pellentesque volutpat est.
                        </Typography>
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    )
}