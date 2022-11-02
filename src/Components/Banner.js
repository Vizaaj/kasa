import React, { Component } from "react";


// Construction et export de la classe Banner
export default class Banner extends Component {
    constructor(props) {
        super(props);
        
        // Etat de la classe
        this.state = {
            info : this.props.info,
        };
    };

    // Rendu de la classe Banner
    render() {
        return (
            // Affichage de l'image de bannière correspondant à la class parente
            <section className={this.state.info.type} style={{backgroundImage: `url('${process.env.PUBLIC_URL}/images/${this.state.info.type}.png')`}}>
                {/* Affichage du text de bannière correspondant à la class parente */}
                <h3 className={this.state.info.type + "__title"}>{this.state.info.text}</h3>
            </section>
        )
    };
};