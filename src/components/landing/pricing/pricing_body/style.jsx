import {makeStyles} from "@material-ui/core";
import {PricingBg} from "../../../../assets";

export default makeStyles(() => ({
    root:{
        backgroundImage: `url(${PricingBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
        minHeight: '100vh',
        backgroundPosition: "center ",
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