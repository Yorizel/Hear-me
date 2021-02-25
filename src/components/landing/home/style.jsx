import {makeStyles} from "@material-ui/core";
import {HomeBg} from "../../../assets";

export default makeStyles(() => ({
    root:{
        backgroundImage: `url(${HomeBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
        minHeight: '100vh',
        backgroundPosition: "center ",
    },
}))