import React, {createContext,  useState} from 'react'
import {Snackbar} from "@material-ui/core";
import Alert from '@material-ui/lab/Alert';

export const SnackContext = createContext({snack: {open: false, message: '', color: ''}, setSnack: () => {}})

export default function SnackProvider({children}) {

    const [snack, setSnack] = useState({
        open: false,
        message: '',
        color: '',


    })
    return (
        <SnackContext.Provider value={{snack, setSnack}}>
            <Snackbar open={snack.open} autoHideDuration={3000} onClose={() => setSnack({open: false})} >
                <Alert variant="filled" severity={snack.color} >
                    {snack.message}
                </Alert>
            </Snackbar>
            {children}
        </SnackContext.Provider>
    )
}