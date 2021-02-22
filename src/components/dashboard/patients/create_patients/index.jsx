import {Divider, Grid, TextField, Typography} from "@material-ui/core";

export default function PatientsManagement() {
    return (
        <Grid container>
            <Grid style={{backgroundColor: 'white', boxShadow: '0px 3px 4px 3px rgba(0, 0, 0, 0.25)'}} direction={'row'} container item>
                <Grid style={{ filter: 'drop-shadow(0px 9.03012px 27.0904px rgba(176, 190, 197, 0.32)), drop-shadow(0px 3.38629px 5.64383px rgba(176, 190, 197, 0.32))'}} item>
                    <form>
                        <Grid item>
                            <TextField
                                fullWidth
                            label={'Nome'}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                fullWidth
                            label={'Email'}
                            />
                        </Grid>
                        <Grid direction={'row'} spacing={3} container item>
                            <Grid item>
                                <TextField
                                label={'Idade'}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                label={'Telefone'}
                                />
                            </Grid>
                        </Grid>
                        <Divider/>

                        <Grid item>
                            <TextField
                                fullWidth
                                label={'Bairro'}
                            />
                        </Grid>
                        <Grid direction={'row'} spacing={3} container item>
                            <Grid item>
                                <TextField
                                    label={'Rua'}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                label={'Numero'}
                                />
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Grid>
    )
}