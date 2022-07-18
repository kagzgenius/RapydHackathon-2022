import React from 'react'
import { NavLink } from 'react-router-dom';

export function NavList() {

    let activeStyle = {
        textDecoration: "underline",
    };

    return (
        <nav>

            <NavLink
                to="/"
                style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }
            >
                Home 
            </NavLink>
            <NavLink
                to="/Login"
                style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                }
            >
                Login
            </NavLink>
        </nav>
    );
}


