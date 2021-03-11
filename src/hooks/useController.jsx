import {useContext, useState} from "react";
import {SnackContext} from "../context/snackbar";
import {AuthContext} from "../context/auth";

export const useController = () => {
    const [state, setState] = useState(undefined )

    const {snack, setSnack} = useContext(SnackContext)
    const {auth,  setAuth } = useContext(AuthContext);

    return { snack, setSnack, auth, setAuth, state, setState}
}