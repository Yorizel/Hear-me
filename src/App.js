import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import LandingPage from "./pages/landing";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={'/'}>
                    <LandingPage/>
                </Route>
            </Switch>
        </Router>
    )
}