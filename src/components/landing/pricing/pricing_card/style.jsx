import {makeStyles} from "@material-ui/core/styles";


export default makeStyles(() =>({
    card: {
        width: '110%',
        height: '110%',
        backgroundColor: '#0F1F4B',
        borderRadius: 15,
        transition: ['width','.5s','background-color','2s','ease-in-out'],
        '&:hover': {
            boxShadow: '0px 20px 50px -15px #060F28',
            background: 'linear-gradient(149.21deg, #1D3165 0%, #970076 147.26%)',
            transform: 'scale(1.1, 1.1)',
            transitionTimingFunction: 'ease',

        }
    },
    primaryText: {
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    primaryButtonText: {
        color: '#FFFFFF',

    },
    bodyText: {
        color: '#ACBFF5'
    },
    primaryButton: {
        border: '1px solid #2A407C',
        textTransform: 'none',
        borderRadius: 15,
        transition: ['width','.5s','ease-in-out'],
        '&:hover': {
            background: '#EF2A82',
            border: 0,
            transform: 'scale(1.18, 1.18)',
            transitionTimingFunction: 'ease',
            transitionDuration: '0.3s',
        }
    }
}));
