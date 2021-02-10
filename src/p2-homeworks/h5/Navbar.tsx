import React from "react";
import {NavLink} from "react-router-dom";
import classes from './Navbar.module.css'


type NavbarType = {
    isCollapsed: boolean
    setCollapsed: (isCollapsed: boolean) => void
}

function Navbar(props: NavbarType) {

    const onClickItem = () => {
        props.setCollapsed(true)
    }

    return (
        <div className={props.isCollapsed ? classes.hidden : classes.menuContainer}>
            <ul>
                <li>
                    <NavLink onClick={onClickItem}
                             to="/pre-junior"
                             className={classes.menuItem}
                    activeClassName={classes.highlight}>PreJunior</NavLink>
                </li>
                <li>
                    <NavLink onClick={onClickItem}
                             to="/junior"
                             className={classes.menuItem}
                             activeClassName={classes.highlight}>Junior</NavLink>
                </li>
                <li>
                    <NavLink onClick={onClickItem}
                             to="/junior-plus"
                             className={classes.menuItem}
                             activeClassName={classes.highlight}>Junior Plus</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
