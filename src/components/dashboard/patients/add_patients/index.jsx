import {Divider, Grid, TextField, Typography, Button} from "@material-ui/core";
import { useForm} from 'react-hook-form'
import React, {useContext, useState} from "react";
import {SnackContext} from "../../../../context/snackbar";
import PatientsDAO from "../../../../DAO/patients";
import InputMask from 'react-input-mask'
import {yupResolver} from "@hookform/resolvers/yup";
import {validationSchemaPatientAdd} from "../../../login/validation";

export default function PatientsManagement() {

    const {register, handleSubmit, errors} = useForm({
        resolver: yupResolver(validationSchemaPatientAdd)
    })
    const controller = new PatientsDAO()
    const {setSnack} = useContext(SnackContext)
    const [cellphone_number , setCellphone_number] = useState('')
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
                            error={!!errors.patient_name}
                            helperText={errors.patient_name? errors.patient_name.message: ''}
                            inputRef={register}
                            placeholder={'João souza de melo'}
                            name={'patient_name'}
                        />
                    </Grid>
                    <Grid  item>
                        <TextField
                            inputRef={register}
                            style={{width:'100%'}}
                            error={!!errors.patient_email}
                            helperText={errors.patient_email? errors.patient_email.message: ''}
                            label={'Email'}
                            name={'patient_email'}
                            placeholder={'jaosouza@gmail.com'}
                            id={'patient_email'}
                        />
                    </Grid>
                    <Grid direction={'row'} justify={'center'} spacing={4} alignContent={'center'} align={'center'}   container item>
                        <Grid item>
                            <TextField
                                id={'patient_age'}
                                inputRef={register}
                                error={!!errors.patient_age}
                                helperText={errors.patient_age? errors.patient_age.message: ''}
                                style={{width:'5vw'}}
                                placeholder={'19'}
                                label={'Idade'}
                                name={'patient_age'}
                                type={'number'}
                            />
                        </Grid>
                        <Grid item>
                            <InputMask
                                mask={'(99) 99999-9999'}
                                value={ cellphone_number}
                                onChange={(e) => setCellphone_number(e.target.value)}
                                maskChar={''}
                                maskPlaceholder={null}
                            >
                                {() => <TextField

                                    inputRef={register}
                                    style={{width:'10vw'}}
                                    helperText={errors.patient_cellphone_number? errors.patient_cellphone_number.message: ''}
                                    error={!!errors.patient_cellphone_number}
                                    label={'Telefone'}
                                    name={'patient_cellphone_number'}
                                    id={'patient_cellphone_number'}

                                />}
                            </InputMask>

                        </Grid>
                    </Grid>
                    <Divider/>

                    <Grid  item>
                        <TextField
                            inputRef={register}
                            style={{width:'100%'}}
                            error={!!errors.patient_address_district}
                            helperText={errors.patient_address_district? errors.patient_address_district.message: ''}
                            label={'Bairro'}
                            placeholder={'Taguatinga sul'}
                            name={'patient_address_district'}
                            id={'patient_address_district'}
                        />
                    </Grid>
                    <Grid direction={'row'} justify={'center'} spacing={4} alignContent={'center'} align={'center'} container item>
                        <Grid item>
                            <TextField
                                inputRef={register}
                                style={{width:'10vw'}}
                                helperText={errors.patient_address_street? errors.patient_address_street.message: ''}
                                error={!!errors.patient_address_street}
                                label={'Rua'}
                                placeholder={'QSD7, LOTE 18'}
                                name={'patient_address_street'}
                                id={'patient_address_street'}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                id={'patient_address_number'}
                                name={'patient_address_number'}
                                helperText={errors.patient_address_number? errors.patient_address_number.message: ''}
                                error={!!errors.patient_address_number}
                                inputRef={register}
                                placeholder={'APT 302'}
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