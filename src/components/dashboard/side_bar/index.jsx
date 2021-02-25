import React, {useContext, useState} from "react";
import {Collapse, Divider, Grid, List, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import {ExitToApp, ExpandLess, ExpandMore, PieChart, SupervisorAccount} from '@material-ui/icons';
import ListItem from '@material-ui/core/ListItem';
import {useHistory} from "react-router-dom";
import {AuthContext} from "../../../context/auth";

export default function SideBar() {
    const [open, setOpen] = useState(true)
    const history = useHistory()
    const {setAuth} = useContext(AuthContext);
    const logout = () => {

        setAuth({token: '', isLogged: false})


        history.push('/')
    }
    return (

        <Grid container justify={'center'} alignItems={'center'} spacing={3} style={{

            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: '0px 20px 20px 0px'
        }} direction={'column'}>
            <Grid style={{paddingTop: 20}} item>
                <Typography variant={'h4'}>
                    Hear-me
                </Typography>
            </Grid>
            <Grid item>
                <ListItem button onClick={() => setOpen(!open)}>

                    <ListItemText primary="Gestão"/>
                    {open ? <ExpandLess/> : <ExpandMore/>}
                </ListItem>

                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List style={{paddingLeft: 3}} component="div" disablePadding>
                        <ListItem button>
                            <ListItemIcon>
                                <PieChart/>
                            </ListItemIcon>
                            <ListItemText primary="Resumo"/>
                        </ListItem>
                        <ListItem button onClick={() => history.push('/dashboard/patients')}>
                            <ListItemIcon>
                                <SupervisorAccount/>
                            </ListItemIcon>
                            <ListItemText primary="Pacientes"/>
                        </ListItem>

                    </List>
                </Collapse>
                <Divider/>
                <ListItem button onClick={logout}>
                    <ListItemIcon>
                        <ExitToApp/>
                    </ListItemIcon>
                    <ListItemText primary={'Logout'}/>
                </ListItem>
            </Grid>
        </Grid>

    )
}