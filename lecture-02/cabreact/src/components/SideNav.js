import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import SideNavContent from './SideNavContent';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function SideNav({ setDrawerOpen, drawerOpen }) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Drawer anchor={"left"} open={drawerOpen} onClose={function () {
                setDrawerOpen((isOpen) => !isOpen);
            }}>
               <SideNavContent/>
            </Drawer>
        </React.Fragment>
    );
}