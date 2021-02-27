import React, {useContext, useEffect, useState} from 'react'
import {Grid} from "@material-ui/core";
import SignIn from '../../components/login/sign_in'
import {useHistory, useLocation} from 'react-router-dom'
import {LoginArtwork} from "../../assets";
import SignUp from "../../components/login/sign_up";
import {AuthContext} from "../../context/auth";
import {SnackContext} from "../../context/snackbar";
import useStyles from './style'

export default function LoginForm() {
    const location = useLocation()
    const classes = useStyles()
    const {auth} = useContext(AuthContext);
    const history = useHistory()
    const {setSnack} = useContext(SnackContext)

    const [signUp, setSignUp] = useState(location.state.signUp);
    useEffect(() => {
        if (auth.isLogged) {
            setSnack({open: true, message: 'Bem vindo de volta', color: 'success'})
            return history.push('/dashboard')
        }
    })
    return (



            <Grid
                className={classes.root}
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
                    <img src={LoginArtwork} alt="the end" className={classes.artwork}/>
                </Grid>

            </Grid>

    )

}