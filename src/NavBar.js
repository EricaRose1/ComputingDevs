import React from 'react';
import { NavLink } from 'react-router-dom';

import './Styles/NavBar.css';


function NavBar() {

    return (
        <>
            <ul classname='navbar' id='navlist'>
                <li id='link'>
                    <NavLink className='navlink' exact to='/Skills'>Skills</NavLink>
                </li>

                <li id='link'>
                    <NavLink className='navlink' exact to='/Contact'>Contact Me</NavLink>
                </li>
                <li id='link'>
                    <NavLink className='navlink' exact to='/Projects'>Projects</NavLink>
                </li>
                <li id='home'>
                    <NavLink className='navlink' exact to='/'>Home</NavLink>
                </li>
            </ul>
        </>
    )
}

export default NavBar;