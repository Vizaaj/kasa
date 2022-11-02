import React, { Component } from "react";
import { NavLink } from "react-router-dom";


// Construction et export de la classe Header
export default class Header extends Component {
    // Rendu de la classe Header
    render() {
        return (
            <header className='header'>
                {/* Affichage du logo */}
                <div className='header__logo'>
                    <img src={`${process.env.PUBLIC_URL}/LOGO.png`} alt="Logo" />
                </div>
                {/* Affichage des liens "Accueil" et "A Propos" */}
                <div className='header__links'>
                    <NavLink exact activeClassName='active' to="/">Accueil</NavLink>
                    <NavLink activeClassName='active' to="/about">A Propos</NavLink>
                </div>
            </header>        
        )
    };
};