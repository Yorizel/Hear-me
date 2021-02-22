import React, {useContext, useState} from 'react'
import {Button, Fade, Grid, TextField, Typography} from "@material-ui/core";
import logo from '../../../assets/Logo.png'
import {useForm} from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import {validationSchema} from '../validation'
import UserDAO from '../../../DAO/user'
import {SnackContext} from '../../../context/snackbar'
import InputMask from 'react-input-mask'


export default function SignUp({reg}) {
    const controller = new UserDAO()
    const {setSnack} = useContext(SnackContext)
    const [cpf_cnpj, setCpfCnpj] = useState('')

    const {register, handleSubmit, errors,} = useForm({
        resolver: yupResolver(validationSchema)
    });
    const submit = async (data) => {
        try {

            const res = await controller.create({data})
            console.log(res)
            switch (res.error) {
                case true:{
                    return  setSnack({open: true, message: 'Email ou CPF já cadastrados', color: 'error'})

                }
                default : {
                    setSnack({open: true, message: 'Conta criada com sucesso', color: 'success'})
                    reg(false)
                    break
                }

            }
        } finally {

        }
    }
    return (
        <Fade in={true} unmountOnExit>
            <Grid direction={'column'} justify={'center'} xl={'auto'} xs={'auto'} sm={'auto'} lg={'auto'} md={'auto'} spacing={3} alignContent={'center'} align={'center'}
                  container>
                <Grid direction={'row'} justify={'center'} alignItems={'center'} spacing={3} container item>
                    <Grid item>
                        <img src={logo} alt={'logo'} style={{maxWidth: 65}}/>
                    </Grid>

                    <Grid item>
                        <Typography variant={'h4'} style={{color: '#172755'}}>
                            Hear-me
                        </Typography>
                    </Grid>
                </Grid>
                <form onSubmit={handleSubmit(submit)} noValidate>
                    <Grid direction={'column'} justify={'center'} spacing={3} alignContent={'center'} align={'center'}
                          container>


                        <Grid direction={'row'} justify={'center'} spacing={5} alignContent={'center'} align={'center'}
                              container item>

                            <Grid item>

                                <TextField
                                    style={{width: '9vw'}}
                                    label={'Primeiro nome'}
                                    name={'first_name'}
                                    id={'first_name'}

                                    required
                                    error={!!errors.first_name}
                                    helperText={errors.first_name ? errors.first_name.message : ''}
                                    inputRef={register}
                                    placeholder={'João'}
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    style={{width: '9vw'}}
                                    label={'Ultimo nome'}
                                    name={'last_name'}
                                    id={'last_name'}

                                    required
                                    error={!!errors.last_name}
                                    helperText={errors.last_name ? errors.last_name.message : ''}
                                    inputRef={register}
                                    placeholder={'Souza'}
                                />
                            </Grid>
                        </Grid>
                        <Grid item>
                            <TextField
                                style={{width: '20vw'}}
                                label={'Email'}
                                name={'email'}
                                id={'email'}
                                type={'email'}
                                required
                                error={!!errors.email}
                                helperText={errors.email ? errors.email.message : ''}
                                inputRef={register}
                                placeholder={'clinica_ouvir_df@gmail.com'}
                            />
                        </Grid>

                        <Grid item>
                            <TextField
                                style={{width: '20vw'}}
                                label={'Usuario'}
                                name={'user'}
                                id={'user'}
                                error={!!errors.user}
                                required
                                helperText={errors.user ? errors.user.message : ''}
                                inputRef={register}
                                placeholder={'clinica_ouvir_df'}
                            />
                        </Grid>
                        <Grid item>
                            <InputMask
                                mask={cpf_cnpj.length < 15 ? '999.999.999-999 ' : '99.999.999/9999-99'}
                                onChange={(e) => setCpfCnpj(e.target.value)}
                                value={cpf_cnpj}
                                maskChar={''}
                                maskPlaceholder={null}


                            >
                                {() => <TextField
                                    style={{width: '20vw'}}
                                    label={'Cpf ou Cnpj'}
                                    name={'cpf_cnpj'}
                                    id={'cpf_cnpj'}
                                    error={!!errors.cpf_cnpj}
                                    required
                                    helperText={errors.cpf_cnpj ? errors.cpf_cnpj.message : ''}
                                    inputRef={register}
                                    placeholder={'111.222.333-44'}
                                />}
                            </InputMask>


                        </Grid>
                        <Grid item>
                            <TextField
                                style={{width: '20vw'}}
                                label={'Senha'}
                                name={'password'}
                                id={'password'}
                                error={!!errors.password}
                                required
                                helperText={errors.password ? errors.password.message : ''}
                                inputRef={register}
                                placeholder={'*********'}
                                type={'password'}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                style={{width: '20vw'}}
                                inputRef={register}
                                name={'password_confirmation'}
                                id={'password_confirmation'}
                                label={'Confirme sua senha'}
                                error={!!errors.password_confirmation}
                                helperText={errors.password_confirmation ? errors.password_confirmation.message : ''}
                                required
                                placeholder={'*********'}
                                type={'password'}
                            />


                        </Grid>

                        <Grid style={{position: 'relative'}} item>
                            <Button variant={'contained'}

                                    style={{
                                        minWidth: '25%',
                                        maxWidth: '30vw',
                                        background: ' linear-gradient(91.93deg, #C62979 0%, #712867 100%)'
                                    }} type={'submit'}>
                                <Typography style={{color: 'white', fontWeight: 600}}>

                                    Finalizar Cadastro
                                </Typography>
                            </Button>

                        </Grid>
                    </Grid>
                </form>
                <Grid item>
                    <Typography onClick={() => reg(false)} variant={'body1'}
                                style={{color: '#172755', cursor: 'pointer', maxWidth: '10vw'}}>
                        Já tem uma conta?
                    </Typography>
                </Grid>

            </Grid>
        </Fade>
    )
}