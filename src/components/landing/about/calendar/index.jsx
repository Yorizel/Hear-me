import {Grid, Typography} from '@material-ui/core'
import React from "react";
import {CalendarImage} from "../../../../assets";

export default function CalendarSection(){
    return(
        <Grid direction={'row'}  justify={'center'}  alignItems={'center'}  container>
            <Grid item>
                <img style={{maxWidth: '45vw'}} src={CalendarImage} alt={'deu ruim'}/>
            </Grid>
            <Grid direction={'column'}  style={{maxWidth: '45vw'}} container item>
                <Grid item>
                    <Typography variant={'h4'} style={{color: '#172755', fontWeight: 'bold', fontSize: '2.25rem'}}>
                        Monitore seus agendamentos
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography align={'left'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat
                        pellentesque volutpat est.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat
                        pellentesque volutpat est.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat
                        pellentesque volutpat est.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat
                        pellentesque volutpat est.



                    </Typography>
                </Grid>
            </Grid>


        </Grid>
    )
}