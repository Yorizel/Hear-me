import React, {useContext} from 'react'
import {Grid, TextField, Typography, Button, Fade} from "@material-ui/core";
import logo from '../../../assets/Logo.png'
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {validationSchemaSignIn} from "../validation";
import {SnackContext} from "../../../context/snackbar";
import UserDAO from '../../../DAO/user'
import {useHistory} from "react-router-dom";
export default function SignIn({reg}) {
    const controller = new UserDAO()
    const history = useHistory()
    const {snack, setSnack} = useContext(SnackContext)
    const { register, handleSubmit, errors,  } = useForm({
        resolver: yupResolver(validationSchemaSignIn)
    });
    const submit = async (data) => {
        try {

            const res = await controller.find({data})
           console.log(res)

            switch (res.error){
                default:{
                    let token = res.data.token
                    setSnack({open: true, message: 'Logado com sucesso', color: 'success'})
                    sessionStorage.setItem('token', token)
                    history.push('/dashboard')
                    break
                }

                case true:{
                    setSnack({open: true, message: 'Email ou senha não encontrados', color: 'error'})
                    break
                }
            }
        } finally {

        }
    }
    return (
        <Fade in={true} unmountOnExit>
            <Grid direction={'column'} justify={'center'} spacing={3} alignContent={'center'} align={'center'} container>
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
                    <Grid direction={'column'} justify={'center'} spacing={3} alignContent={'center'} align={'center'} container>
                        <Grid item>
                            <TextField
                                style={{width: '20vw'}}
                                label={'Email'}

                                name={'email'}
                                id={'email'}
                                type={'email'}
                                required
                                error={!!errors.email}
                                helperText={errors.email? errors.email.message : ''}
                                inputRef={register}
                                placeholder={'clinica_ouvir_df@gmail.com'}
                            />
                        </Grid>
                        <Grid  item>
                            <TextField
                                style={{width: '20vw'}}
                                label={'Senha'}
                                name={'password'}
                                id={'password'}
                                error={!!errors.password}
                                required
                                helperText={errors.password? errors.password.message : ''}
                                inputRef={register}
                                type={'password'}
                                placeholder={'*********'}
                            />
                        </Grid>
                        <Grid  item>
                            <Button variant={'contained'} type={'submit'} style={{  minWidth: '50%', maxWidth:'30vw' , background: ' linear-gradient(91.93deg, #C62979 0%, #712867 100%)'}}>
                                <Typography style={{color: 'white', fontWeight: 600}}>
                                    Entrar
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button variant={'contained'} style={{minWidth: '50%', maxWidth:'30vw' ,  background: ' linear-gradient(91.93deg, #C62979 0%, #712867 100%)'}}
                                    onClick={() => reg(true)}
                            >
                                <Typography style={{color: 'white', fontWeight: 600}}>
                                    Criar conta
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </form>

            </Grid>
        </Fade>

    )
}