import React, { Component } from "react";
import { NavLink } from "react-router-dom";


// Construction et export de la classe NoMatch
export default class NoMatch extends Component {
    // rendu de la classe NoMatch
    render() {
        return (
            // Affichage d'un message d'erreur 404 et un lien pour revenir à l'accueil
            <section className="page-not-found">
                <div className="page-not-found__content">
                    <h1>404</h1>
                    <p>Oups! La page que vous demandez n'existe pas.</p>
                    <NavLink to="/">Retourner sur la page d'accueil</NavLink>
                </div>
            </section>
            

        )
    }
}