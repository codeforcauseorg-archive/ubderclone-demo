import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import SideNavContent from './SideNavContent';

export default function SideNav({ setDrawerOpen, drawerOpen }) {

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