import {makeStyles} from "@material-ui/styles";
import {LoginBg} from "../../assets";

export default makeStyles(() => ({
    root: {
        backgroundImage: `url(${LoginBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: 'cover',
        backgroundPosition: "center center",
        height: '100%',
        width: '100%',
        minWidth: '100vw',
        minHeight: '100vh'
    },
    artwork: {
        maxWidth: '60vw',
        maxHeight: '60vh'
    }
}))