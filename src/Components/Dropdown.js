import React, { Component } from "react";


// Construction et export de la classe Dropdown
export default class Dropdown extends Component {
    constructor(props) {
        super(props);
        
        // Etats de la classe
        this.state = {
            openDrawer: false,
            text: this.props.text,
            class: this.props.class,
        };
    };

    // Changement de l'état des "Drawer" en fonction de s'il sont ouverts ou non
    openMenu = () => {
        this.state.openDrawerOne ? this.setState({ openDrawerOne: false }) : this.setState({ openDrawerOne: true });
    };

    // Rendu de la classe Dropdown
    render() {
        return (
            // Affichage de chaque "Drawer"
            <article className={this.state.class}>
                <div className={`${this.state.class}__header`} onClick={this.openMenu}>
                    {/* Affichage du titre du "Drawer" en fonction de la classe parente */}
                    <h4>{this.state.text.title}</h4>
                    {/* Changement de la direction du chevron en fonction de si le "Drawer" est ouvert ou non */}
                    {this.state.openDrawerOne ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>}
                </div>
                {/* Affichege du text du "Drawer" en fonction de s'il est ouvert ou non */}
                <div className={this.state.openDrawerOne ? `${this.state.class}__body--open` : `${this.state.class}__body`}>
                    <p className={this.state.openDrawerOne ? `${this.state.class}__text--open` : `${this.state.class}__text`}>
                        {this.state.text.body}
                    </p>
                </div>
            </article>
            
        )
    };
}