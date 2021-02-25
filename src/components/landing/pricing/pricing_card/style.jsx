import {makeStyles} from "@material-ui/core";

export default makeStyles(() => ({
    card: {
        minWidth: 300,
        minHeight: 500,
        backgroundColor: '#0F1F4B',
        borderRadius: 15,
        '&:hover': {
            background: 'linear-gradient(149.21deg, #2A407C 0%, #5C0048 147.26%)',
            transition: 'ease-in',
            minHeight: 520,
            minWidth: 320,

            transitionTimingFunction: 'ease',
            transitionDuration: '0.3s',
        }
    },
    primaryText:{
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
    primaryButtonText:{
        color: '#FFFFFF',

    },
    bodyText:{
        color: '#ACBFF5'
    },
    primaryButton:{
        border:'1px solid #2A407C',
        textTransform: 'none',
        borderRadius: 15,

        '&:hover': {
            background: '#EF2A82',
            transition: 'ease-in',
            minWidth: '14vw',
            transitionTimingFunction: 'ease',
            transitionDuration: '0.3s',
        }
    }

}))