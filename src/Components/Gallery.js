import React, { Component } from "react";


// Construction et export de la classe Gallery
export default class Gallery extends Component {
    constructor(props) {
        super(props);
        
        // Etats de la classe Gallery
        this.state = {
            datas: this.props.datas,
            slideIndex: 0,
            arrayLength: this.props.datas.flatMap(el => el.pictures).length,
        }
    };

    // Récupération des slides dans l'ordre de l'API
    showSlides = (n) => {
        const slides = this.state.datas.map(el => {
            return (el.pictures[n]);
        })
        return slides;
    };

    // Récupération du slide suivant celui affiché
    nextSlide = () => {
        this.setState({ slideIndex: this.state.slideIndex + 1 });
        if (this.state.slideIndex === this.state.arrayLength - 1) this.setState({ slideIndex: 0 });
    };
    // Récupération du slide précédent celui affiché
    previousSlide = () => {
        this.setState({ slideIndex: this.state.slideIndex - 1 });
        if (this.state.slideIndex < 1) this.setState({ slideIndex: this.state.arrayLength - 1 });
    };

    // Rendu de la classe Gallery
    render() {
        return (
            <section className="gallery">
                {/* Affichage des slides en commencant par le premier */}
                <img className='gallery__image' src={this.showSlides(this.state.slideIndex)} alt="Intérieur du logement" />
                {this.state.arrayLength > 1 ?
                    <div>
                        {/* Affichage du slide précédent celui affiché */}
                        <span className="gallery__arrow-left" onClick={this.previousSlide}>
                            <i className="fas fa-chevron-left fa-7x"></i>
                        </span>
                        {/* Affichage du slide suivant celui affiché */}
                        <span className="gallery__arrow-right" onClick={this.nextSlide}>
                            <i className="fas fa-chevron-right fa-7x"></i>
                        </span>
                    </div> :
                    <div></div>
                }
            </section>
        );
    };
};


