import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LandingPage from "./pages/landing";
import LoginForm from "./pages/login";
import DashboardLanding from "./pages/dashboard";
import {AuthContext} from "./context/auth";

export default function App() {
    const {auth} = React.useContext(AuthContext);

    return (
        <Router>
            <Switch>
                <Route exact path={'/'}>
                    <LandingPage/>
                </Route>
                <Route exact path={'/login'}>
                    <LoginForm/>
                </Route>
                {
                    auth.isLogged ?
                        (
                            <Route exact path={'/dashboard'}>
                                <DashboardLanding/>
                            </Route>
                        )
                        :
                        (
                            <Route exact path={'/buy'}>

                            </Route>
                        )
                }


            </Switch>
        </Router>
    )
}