import {makeStyles} from "@material-ui/core";
import {PricingBg} from "../../../../assets";

export default makeStyles(() => ({
    root:{

        backgroundImage: `url(${PricingBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
        height: '100%',
        minHeight: '100vh',
        minWidth: '100vw',
        backgroundPosition: "center",
    },
    primaryText:{
        fontWeight: 'bold', color: 'white'

    },
    bodyText:{
        color: 'white'
    },
    body:{
        maxWidth: '50%'
    },
    footer:{
        flexGrow: 1
    }
}))