import React from 'react'
import { NavLink } from 'react-router-dom';

function NavList() {

    let activeStyle = {
        textDecoration: "underline",
    };

    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                        to="HomePage"
                        style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                    >
                        Homedsfd
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavList;
