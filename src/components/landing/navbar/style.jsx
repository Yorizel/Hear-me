import {makeStyles} from "@material-ui/core";

export default makeStyles(() => ({
    root: {boxShadow: 'none', marginTop: 10},
    primaryTextButton: {
        color: '#8794BA',
        fontWeight: 400,
        cursor: 'pointer'
    },
    primaryButton: {
        borderRadius: '20px',
        textTransform: ' none',
        border: '2px solid #465B95'
    },
    logo: {
        maxWidth: 60
    },
    logoText: {
        color: 'white',
        fontSize: '1.50rem'
    },
    buttonText: {
        color: '#8794BA',
        fontWeight: 400,
        fontSize: '1.50rem'
    }
}))