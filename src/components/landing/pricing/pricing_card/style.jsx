import {makeStyles} from "@material-ui/core/styles";


export default makeStyles(() =>({
    card: {
        minWidth: 300,
        minHeight: 500,
        backgroundColor: '#0F1F4B',

        borderRadius: 15,
        transition: ['width','.5s','background-color','2s','ease-in-out'],

        '&:hover': {

            background: 'linear-gradient(149.21deg, #2A407C 0%, #5C0048 147.26%)',
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

            transform: 'scale(1.18, 1.18)',
            transitionTimingFunction: 'ease',
            transitionDuration: '0.3s',
        }
    }
}));
