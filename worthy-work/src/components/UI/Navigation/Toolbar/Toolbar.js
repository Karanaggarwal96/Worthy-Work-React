import React from 'react';
import classes from './Toolbar.module.css'
import Logo from '../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems';
const toolbar =(props)=>(
<header className={classes.Toolbar}>
    <React.Fragment>
    <div className={classes.DrawerToggle} onClick={props.drawerToggleClicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
    {<div className={classes.Logo}>
    <Logo></Logo>
    </div>} 
    <nav className={classes.DesktopOnly}>
        <NavigationItems/>
    </nav>
    </React.Fragment>
</header>



    
)

export default toolbar