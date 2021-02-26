import {makeStyles} from "@material-ui/core";

export default makeStyles(() => ({
    root: {
        boxShadow: 'none',
        backgroundColor: '#0D053C',
        minHeight: 100,
        justifyContent: 'center'
    },
    logo: {
        maxWidth: 60
    },
    iconButton: {
        color: 'white',
    },
    primaryTextButton:{
        color: '#8794BA',
        fontWeight: 400,
        cursor: 'pointer'
    }

}))