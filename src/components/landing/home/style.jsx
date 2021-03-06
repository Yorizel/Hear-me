import {makeStyles} from "@material-ui/core";
import {HomeBg} from "../../../assets";

export default makeStyles(() => ({
    root: {
        backgroundImage: `url(${HomeBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
        minHeight: '100vh',
        backgroundPosition: "center ",
    },
    primaryText: {
        fontWeight: 700,
        color: '#FFFFFF'
    },
    bodyText:{
        color: '#8794BA'
    },
    primaryButton:{
        backgroundColor: '#EF2A82',
        textTransform: 'none',
        borderRadius: 20,
        maxWidth: '12vw'
    }
}))