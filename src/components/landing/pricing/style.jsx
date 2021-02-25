import {makeStyles} from "@material-ui/core";
import {PricingBg} from "../../../assets";

export default makeStyles(() => ({
    root:{
        backgroundImage: `url(${PricingBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
        minHeight: '100vh',

    },
}))