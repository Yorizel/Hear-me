import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import theme from './theme';
import {ThemeProvider} from '@material-ui/core/styles'
import SnackProvider from './context/snackbar'
import AuthProvider from "./context/auth";

ReactDOM.render(
    <React.StrictMode>
        <SnackProvider>
            <AuthProvider>
                <ThemeProvider theme={theme}>
                    <App/>
                </ThemeProvider>
            </AuthProvider>
        </SnackProvider>

    </React.StrictMode>,
    document.getElementById('root')
);



