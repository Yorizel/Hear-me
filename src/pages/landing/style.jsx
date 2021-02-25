import {makeStyles} from "@material-ui/core";
import {HomeBg, PricingBg} from "../../assets/index";

export default makeStyles(() => ({
    homeBg:{
        backgroundImage: `url(${HomeBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
        minHeight: '100vh',
        backgroundPosition: "center ",
    },
    pricingBg:{
        backgroundImage: `url(${PricingBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover ',

        minHeight:'100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundPosition: 'contain ',


    }
}))