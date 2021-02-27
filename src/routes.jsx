import {CSSTransition, TransitionGroup} from "react-transition-group";
import { Route, Switch, useLocation} from "react-router-dom";
import LandingPage from "./pages/landing";
import LoginForm from "./pages/login";
import DashboardLanding from "./pages/dashboard";
import React, {useEffect} from "react";
import {AuthContext} from "./context/auth";


export default function Routes() {

    const {auth} = React.useContext(AuthContext);
    let location = useLocation();
    useEffect(() => {
        console.log(location)
    }, [location])
    return (

            <TransitionGroup>
                <CSSTransition
                    in={true}
                    key={location.key}
                    classNames='page'
                    timeout={300}
                >
                    <Switch location={location}>
                        <Route exact path={'/'} children={<LandingPage/>}/>
                        <Route exact path={'/login'} children={<LoginForm/>}/>
                        {
                            auth.isLogged ?
                                (
                                    <Route exact path={'/dashboard'} children={<DashboardLanding/>}/>
                                )
                                :
                                (
                                    <Route exact path={'/buy'}/>


                                )
                        }


                    </Switch>
                </CSSTransition>
            </TransitionGroup>

    )
}