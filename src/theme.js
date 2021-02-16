import  './font.css'
import {createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles'
const tema = createMuiTheme({
    typography: {
        fontFamily: [
            'Montserrat', 'sans-serif'
        ].join(','),
    },

});
const theme = responsiveFontSizes(tema)
export default theme