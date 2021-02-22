import React, {useState} from 'react'
import {Fade, Grid} from "@material-ui/core";
import bg from "../../assets/Registerbg.png";
import SignIn from '../../components/login/sign_in'
import {useLocation} from 'react-router-dom'
import img
    from '../../assets/conceito-de-psicoterapia-online-psicologa-mulher-falando-com-a-paciente_123207-323-removebg-preview_digital_art_x4 1.png'
import SignUp from "../../components/login/sign_up";


export default function LoginForm() {
    const location = useLocation()
    const [signUp, setSignUp] = useState(location.state.signUp);

    return (
        <Fade in={true} unmountOnExit>


        <Grid xl={'auto'} xs={'auto'} sm={'auto'} lg={'auto'} md={'auto'}
            style={{
                backgroundImage: `url(${bg})`,
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
                <img src={img} alt="the end" style={{maxWidth: '60vw', maxHeight: '60vh'}}/>
            </Grid>

        </Grid>
        </Fade>
    )

}