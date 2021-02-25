import React, {useContext, useEffect, useState} from 'react'
import {Fade, Grid} from "@material-ui/core";

import SignIn from '../../components/login/sign_in'
import {useHistory, useLocation} from 'react-router-dom'
import {LoginBg, Logo} from "../../assets";
import SignUp from "../../components/login/sign_up";
import {AuthContext} from "../../context/auth";
import {SnackContext} from "../../context/snackbar";


export default function LoginForm() {
    const location = useLocation()
    const {auth} = useContext(AuthContext);
    const history = useHistory()
    const { setSnack} = useContext(SnackContext)
    const [signUp, setSignUp] = useState(location.state.signUp);
    useEffect(() => {
        if (auth.isLogged){
            setSnack({open: true, message: 'Bem vindo de volta', color: 'success'})
            return history.push('/dashboard')
        }
    })
    return (
        <Fade in={true} unmountOnExit>


            <Grid xl={'auto'} xs={'auto'} sm={'auto'} lg={'auto'} md={'auto'}
                  style={{
                      backgroundImage: `url(${LoginBg})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: 'cover',
                      backgroundPosition: "center center",
                      height: '100%',
                      width: '100%',
                      minWidth: '100vw',
                      minHeight: '100vh'
                  }}
                  direction={'row'}
                  justify={'space-between'}
                  alignItems={'center'}
                  container>
                <Grid style={{flexGrow: 1}} item>


                    {signUp ?

                        <SignUp reg={(value) => setSignUp(value)}/>

                        :

                        <SignIn reg={(value) => setSignUp(value)}/>

                    }


                </Grid>
                <Grid item>
                    <img src={Logo} alt="the end" style={{maxWidth: '60vw', maxHeight: '60vh'}}/>
                </Grid>

            </Grid>
        </Fade>
    )

}