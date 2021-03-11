import {CSSTransition, TransitionGroup} from "react-transition-group";
import {Redirect, Route, Switch, useLocation} from "react-router-dom";
import LandingPage from "./pages/landing";
import LoginForm from "./pages/login";
import DashboardLanding from "./pages/dashboard";
import React from "react";
import {AuthContext} from "./context/auth";
import BuyPage from "./pages/buy";


export default function Routes() {

    const {auth} = React.useContext(AuthContext);
    let location = useLocation();

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

                    <Route path={'/buy'} children={<BuyPage/>}/>


                    {
                        auth.isLogged ?
                            (
                                <Route exact path={'/dashboard'} children={<DashboardLanding/>}/>
                            )
                            :

                            (
                                <Redirect to={'/'}/>

                            )


                    }


                </Switch>
            </CSSTransition>
        </TransitionGroup>

    )
}