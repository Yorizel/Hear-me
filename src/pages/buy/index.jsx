import useStyles from './style'
import {Box} from "@material-ui/core";
import BuyBody from "../../components/buy";

export default function BuyPage() {
    const classes = useStyles()
    return (

        <Box className={classes.root}>
            <BuyBody/>
        </Box>



    )
}