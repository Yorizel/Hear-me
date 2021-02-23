import {Divider, Grid, TextField, Typography, Button} from "@material-ui/core";
import { useForm} from 'react-hook-form'
import React, {useContext} from "react";
import {SnackContext} from "../../../../context/snackbar";
import PatientsDAO from "../../../../DAO/patients";

export default function PatientsManagement() {

    const {register, handleSubmit, errors} = useForm()
    const controller = new PatientsDAO()
    const {setSnack} = useContext(SnackContext)
    const submit = async (data) => {
        try {
            console.log(data)
            const res = await controller.create({data})
            console.log(res)
            switch (res.error) {
                case true:{
                    return  setSnack({open: true, message: 'Email já cadastrado em outro paciente', color: 'error', })

                }
                default : {
                    setSnack({open: true, message: 'Paciente cadastrado com sucesso', color: 'success'})

                    break
                }

            }
        } finally {

        }
    }
    return (
            <form onSubmit={handleSubmit(submit)}>
                <Grid direction={'column'} justify={'center'} spacing={3} alignContent={'center'} align={'center'}  container item>
                    <Grid  item>
                        <TextField
                            id={'patient_name'}
                            style={{width:'100%'}}
                            label={'Nome'}
                            inputRef={register}
                            name={'patient_name'}
                        />
                    </Grid>
                    <Grid  item>
                        <TextField
                            inputRef={register}
                            style={{width:'100%'}}
                            label={'Email'}
                            name={'patient_email'}
                            id={'patient_email'}
                        />
                    </Grid>
                    <Grid direction={'row'} justify={'center'} spacing={4} alignContent={'center'} align={'center'}   container item>
                        <Grid item>
                            <TextField
                                id={'patient_age'}
                                inputRef={register}
                                style={{width:'5vw'}}
                                label={'Idade'}
                                name={'patient_age'}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                inputRef={register}
                                style={{width:'10vw'}}
                                label={'Telefone'}
                                name={'patient_cellphone_number'}
                                id={'patient_cellphone_number'}
                            />
                        </Grid>
                    </Grid>
                    <Divider/>

                    <Grid  item>
                        <TextField
                            inputRef={register}
                            style={{width:'100%'}}
                            label={'Bairro'}
                            name={'patient_address_district'}
                            id={'patient_address_district'}
                        />
                    </Grid>
                    <Grid direction={'row'} justify={'center'} spacing={4} alignContent={'center'} align={'center'} container item>
                        <Grid item>
                            <TextField
                                inputRef={register}
                                style={{width:'10vw'}}
                                label={'Rua'}
                                name={'patient_address_street'}
                                id={'patient_address_street'}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id={'patient_address_number'}
                                name={'patient_address_number'}
                                inputRef={register}
                                style={{width:'5vw'}}
                                label={'Numero'}
                            />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Button type={'submit'} variant={'outlined'} style={{textTransform: 'none',borderRadius:15,  border: '3px solid #C02977'}}>
                            <Typography style={{fontWeight: 600}}>
                                Efetuar Cadastro
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </form>



    )
}