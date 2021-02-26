import {Button, Card, CardActionArea, CardActions, CardContent, Grid, Typography} from "@material-ui/core";
import UseStyles from './style'



export default function PricingCard({text}) {
    const classes = UseStyles()
    return (
        <Card  className={classes.card} >
            <Grid justify={'center'} direction={'column'} spacing={8} alignItems={'center'} container>

            <Grid item>
                <CardContent>
                    <Grid justify={'center'} direction={'column'}  spacing={2} alignItems={'center'} container>
                        <Grid item>
                            <Typography className={classes.primaryText} variant={'h3'}>
                                {text ? text.title : 'não encontrado'}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography align={'center'} variant={'body1'} className={classes.bodyText}>
                                {text ? text.description : 'não encontrado'}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Grid>
            <Grid item>
            <CardContent>
                <Typography variant={'h3'} align={'center'} className={classes.primaryText}>
                    {text ? text.price : 'não encontrado'}
                </Typography>
            </CardContent>
            </Grid>
                <Grid item>


            <CardActionArea>
                <CardActions>
                    <Button className={classes.primaryButton} >
                        <Typography variant={'h5'} className={classes.primaryButtonText}>
                            Assine agora
                        </Typography>
                    </Button>
                </CardActions>
            </CardActionArea>
                </Grid>
            </Grid>
        </Card>


    )

}