import React, { Component } from "react";


// Construction et export de la classe Rating
export default class Rating extends Component {
    constructor(props) {
        super(props);
        
        // Etat de la classe
        this.state = {
            datas: this.props.datas,
        };
    };
    // Rendu de la classe Rating
    render() {
        // Maximum d'étoiles possibles
        const totalStar = 5;
        // Récupération du rating correspondant à l'Accommodation
        const rating = this.state.datas.map(ele => ele.rating);
        // Mise en pourcentage du rating
        const percentage = (rating / totalStar) * 100;
        // Arrondissage du pourcentage à la dizaine la plus proche
        const percentageRounded = `${(Math.round(percentage / 10) * 10)}%`;

        return (
            <div className='ratings'>
                {/* Affichage des étoiles vides */}
                <div className="stars-outer">
                    {/* Modification de la largeur de "stars-inner" en fonction du rating */}
                    <div className="stars-inner" style={{width: percentageRounded}}></div>   
                </div>
            </div>
        )
    };
};