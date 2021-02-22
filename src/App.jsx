import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LandingPage from "./pages/landing";
import LoginForm from "./pages/login";
import DashboardLanding from "./pages/dashboard";

export default function App() {

    return (
        <Router>
            <Switch>
                <Route exact path={'/'}>
                    <LandingPage/>
                </Route>
                <Route exact path={'/login'}>
                    <LoginForm />
                </Route>

                <Route exact path={'/dashboard'}>
                   <DashboardLanding/>
                </Route>
            </Switch>
        </Router>
    )
}