import React from 'react'
import classes from './NavigationItems.module.css'
import NavigationItem from './NavigationItem/NavigationItem'


const navigationItems  =()=>(

    <ul className={classes.NavigationItems}>
            <NavigationItem link="/about" >About</NavigationItem>
            <NavigationItem link="/services">Services</NavigationItem>
            <NavigationItem link="/ads">Posted Ads</NavigationItem>
            <NavigationItem link="/login">Login</NavigationItem>
            <NavigationItem link="/signup">SignUp</NavigationItem>
    
            
    </ul>
)


export default navigationItems;