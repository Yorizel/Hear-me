import React from 'react'
import {Grid, Typography} from "@material-ui/core";
import PricingCard from "../pricing_card";
import useStyles from './style'


export default function PricingBody() {

    const classes = useStyles()

    const prices = [
        {key: 1, title: 'Basico', description: 'Ate 20 pacientes', price: 'R$75,00'},
        {key: 2, title: 'Padrão', description: 'Ate 50 pacientes', price: 'R$150,00'},
        {key: 3, title: 'Premium', description: 'Ate 100 pacientes', price: 'R$300,00'}
    ]

    return (
        <Grid id={'pricing'}  direction={'column'} justify={'center'} alignItems={'center'} alignContent={'center'} spacing={10} container className={classes.root}>

                <Grid item>
                    <Typography variant={'h2'} className={classes.primaryText}>
                        Preço
                    </Typography>
                </Grid>
                <Grid className={classes.body} item>
                    <Typography align={'center'} variant={'body1'} className={classes.bodyText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet
                        volutpat pellentesque volutpat est.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet
                        volutpat pellentesque volutpat est.
                    </Typography>
                </Grid>
            <Grid  direction={'row'} justify={'center'} alignItems={'center'} spacing={8}  alignContent={'center'} container >
                { prices.map((item) => (
                    <Grid key={item.key}  item> <PricingCard text={item} /> </Grid>))}

            </Grid>



        </Grid>
    )
}



