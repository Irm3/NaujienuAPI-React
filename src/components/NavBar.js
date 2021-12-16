import React from "react";
import { Link } from "react-router-dom";

const NavBar = () =>{
    return(
        <nav class="navbar is-link has-shadow" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="#">
                <img src="logo192.png" />
            </a>
            <h1 class="navbar-item is-size-5">Irmanto API</h1>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <p class="navbar-item"> <Link style={{color: 'black'}} to="/News">Naujienos</Link> </p>
                <p class="navbar-item"> <Link style={{color: 'black'}} to="/Weather" >Orai</Link> </p>
                <p class="navbar-item"> <Link style={{color: 'black'}} to="/Person" >Asmens kūrimas</Link> </p>
            </div>
        </div>
    </nav>
    )
}

export default NavBar;