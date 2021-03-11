import React from 'react'
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom'
import Routes from "./routes";
import DashboardLanding from "./pages/dashboard";
import {AuthContext} from "./context/auth";


export default function App() {
    const {auth} = React.useContext(AuthContext);
    return (
        <Router>
            <Route path={'*'}>
                <Routes/>
            </Route>

        </Router>
    )
}