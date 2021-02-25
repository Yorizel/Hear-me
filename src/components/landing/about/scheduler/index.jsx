import {Grid, Typography} from '@material-ui/core'
import React from "react";
import {SchedulerImage} from "../../../../assets";

export default function SchedulerSection(){
    return(
        <Grid direction={'row'}  justify={'center'}  alignItems={'center'}  container>
            <Grid direction={'column'} style={{maxWidth: '45vw'}}  container >
                <Grid  item>
                    <Typography variant={'h4'} style={{color: '#172755', fontWeight: 'bold', fontSize: '2.25rem'}}>
                        Monitore suas consultas do dia
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography align={'left'} style={{fontSize: '1.0rem'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat
                        pellentesque volutpat est.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat
                        pellentesque volutpat est.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat
                        pellentesque volutpat est.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat
                        pellentesque volutpat est.



                    </Typography>
                </Grid>
            </Grid>
            <Grid item>
                <img style={{maxWidth: '45vw'}} src={SchedulerImage} alt={'deu ruim'}/>
            </Grid>

        </Grid>
    )
}