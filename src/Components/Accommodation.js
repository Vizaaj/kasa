import React, { Component } from "react";
import { Link } from "react-router-dom";


// Construction et export de la classe Accommodation
export default class Accommodation extends Component {
    constructor(props) {
        super(props);
        
        // Etat de la classe
        this.state = {
        datas: this.props.datas
        };
    };
    // Rendu de la classe Accommodation
    render() {  
        return (      
            <section className='home__cards'>
                {/* Affichage des "cover" et "title" de chaque Accommodation par id */}
                {this.state.datas.map(el => {
                    return (
                        <Link to={`/accommodation/${el.id}`} key={el.id}>
                            <article className='home__cards__thumb'>
                                <img src={el.cover} alt={el.title} />
                                <p className='home__cards__thumb__title'>{el.title}</p>
                            </article>
                        </Link>
                         )
                })}
            </section>
        )
    }
}