import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'


const navigationItems  =()=>(

    <ul className={classes.NavigationItems}>
            <NavigationItem link="/" >About</NavigationItem>
            <NavigationItem link="/services">Services</NavigationItem>
            <NavigationItem link="/login">Login&SignUp</NavigationItem>
            <NavigationItem link="/contact">Contact</NavigationItem>
    </ul>
)


export default navigationItems;