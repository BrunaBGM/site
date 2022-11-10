import React from 'react'
import {
Nav,
NavMenu,
NavLink,
BtnLink
} 
from '../components/style/styled'

function Menu() {
    const logout = ()=>{
        sessionStorage.removeItem("usuario-valido")
        window.location = "/"
    }
    const usuario = sessionStorage.getItem("usuario-valido")

    return(
        <Nav>
            <NavMenu>
                <NavLink to="/">
                    Login
                </NavLink>
                <NavLink to="/home">
                    Home
                </NavLink>
                <BtnLink onClick={logout}>{usuario}Logout</BtnLink>
            </NavMenu>
        </Nav>
    );
}
export default Menu;
  