import React, { Component } from "react";


// Construction et export de la classe RouteConfig
export default class Tag extends Component {
    constructor(props) {
        super(props);
        
        // Etat de la classe
        this.state = {
            datas: this.props.datas,
        };
    };
    // Rendu de la classe Tag
    render() {
        return (
            <>
                {/* Affichage de chaque Tage en fonction de l'id de l'Accommodation */}
                {this.state.datas.map(function(ele) {
                    return (
                        <div key={ele.id} className="tags">
                            {ele.tags.map((e, index) => {
                            return <p key={index} className="tags__item">{e}</p>
                            })}
                        </div>
                    )
                })}
            </>
        )
    };
};