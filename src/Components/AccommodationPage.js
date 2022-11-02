import React, { Component } from "react";
import { withRouter } from "react-router";
import NoMatch from "./NoMatch";
import Gallery from "./Gallery";
import Tag from "./Tag";
import Rating from "./Rating";
import Dropdown from "./Dropdown";


// Construction de la classe AccommodationPage
class AccommodationPage extends Component {
    constructor(props) {
        super(props);
        
        // Etats de la class AccommodationPage
        this.state = {
            datas: this.props.datas,
            singleAccommodation: this.props.datas.filter(elemnt => elemnt.id === this.props.match.params.accommodationId),
            allId: this.props.datas.map(elemnt => elemnt.id),
            textOne: {
                title: "Description",
                body: (this.props.datas.filter(elemnt => elemnt.id === this.props.match.params.accommodationId)).map(elmnt => elmnt.description),
            },

            textTwo: {
                title: "Equipements",
                body: (this.props.datas.filter(elemnt => elemnt.id === this.props.match.params.accommodationId)).map((el => el.equipments.map((el, index) => {
                        return <li className="equipments__list-item" key={index}>{el}</li>
                    }))),
            },
            class: "dropdown-accom-page",
        };
    };
    // Rendu de la classe AccommodationPage
    render() {
        // Si l'id de l'Accommodation ne figure pas dans l'API, alors on en renvoyé à NoMatch
        if (!this.state.allId.some((ele) => ele === this.props.match.params.accommodationId)) return <NoMatch />;

        // Sinon le rendu se fait normalement
        return (
            <>
              {this.state.singleAccommodation.map(el => {
                  return (
                    <main key={el.id}>
                        {/* Affichage de la Gallery correspondant à l'Accommodation*/}
                        <Gallery datas={this.state.singleAccommodation} />
                        <section className="accommodation-info">
                            <div className="accommodation-info__left-side">
                                <h1 className="accommodation-info__left-side__title">{el.title}</h1>
                                <p className="accommodation-info__left-side__location">{el.location}</p>
                                {/* Affichage des Tags correspondants à l'Accommodation*/}
                                <Tag datas={this.state.singleAccommodation} />
                            </div>
                              <div className="accommodation-info__right-side">
                                <div className="accommodation-info__right-side__host-info">
                                    <div className="accommodation-info__right-side__host">
                                        <p className="accommodation-info__right-side__host__firstname">{el.host.name.split(' ', 1)}</p>
                                        <p className="accommodation-info__right-side__host__lastname">{el.host.name.split(' ').pop()}</p>
                                    </div>
                                    <img src={el.host.picture} alt="Hôte" />
                                </div>
                                {/* Affichage du Rating correspondants à l'Accommodation*/}
                                <Rating datas={this.state.singleAccommodation} />
                            </div> 
                          </section>
                          <section className="general-info">
                              {/* Affichage de la classe Dropdown avec textOne */}
                              <Dropdown text={this.state.textOne} class={this.state.class} />
                              {/* Affichage de la classe Dropdown avec textTwo */}
                              <Dropdown text={this.state.textTwo} class={this.state.class}/>
                          </section>
                          
                    </main>
                         )
                })}
            </>
        )
    };
    
};

// Export de la classe AccommodationPage
export default withRouter(AccommodationPage);