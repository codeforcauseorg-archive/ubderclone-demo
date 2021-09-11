import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideNav from './SideNav';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: "#000000"
    },
    title: {
        flexGrow: 1,
    },
}));

export default function MainAppBar({setDrawerOpen, drawerOpen}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" style={{
                boxShadow: "none"
            }}>
                <Toolbar style={{
                    backgroundColor: "#ffffff"
                }}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={function () {
                        setDrawerOpen((isOpen) => !isOpen);
                    }}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <SideNav setDrawerOpen={setDrawerOpen} drawerOpen={drawerOpen}/>
        </div>
    );
}