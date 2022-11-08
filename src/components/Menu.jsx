import React from 'react'
import {Link} from 'react-router-dom'
import {Men} from '../components/style/styled'

function Menu() {
    const logout = ()=>{
        sessionStorage.removeItem("usuario-valido")
        window.location = "/"
    }
    const usuario = sessionStorage.getItem("usuario-valido")

    return(
        <div>
            <ul>
                <Men>
                <li><Link to="/">Login</Link></li>
                <li><Link to="/home">Home</Link></li>
                <li><button onClick={logout}>{usuario} Logout</button></li>
                </Men>
            </ul>
        </div>
    );
}
export default Menu;
  