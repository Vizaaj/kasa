import React, { Component } from "react";


// Construction et export de la classe Footer
export default class Footer extends Component {
    // Rendu de la classe Footer
    render() {
        return (
            <footer className='footer'>
                <div className='footer__logo'>
                    {/* Affichage du logo Kasa blanc */}
                    <img src={`${process.env.PUBLIC_URL}/logo-white.png`} alt="Logo" />
                </div>
                {/* Affichage de text sous le logo */}
                <p>&#169; {new Date().getFullYear()} Kasa. All rights reserved</p>
            </footer>        
        )
    }
}