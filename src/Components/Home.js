import React, { Component } from "react";
import Banner from "./Banner";
import Accommodation from "./Accommodation";


// Construction et export de la classe Home
export default class Home extends Component {
    constructor(props) {
      super(props);

      // Etats de la classe
      this.state = {
        datas: this.props.datas,
        info: {
          type: "banner-homepage",
          text:"Chez vous, partout et ailleurs"
        }
      };
    };
  // Rendu de la classe Home (page d'accueil)
  render() {
        return (
            <main>
              {/* Affichage de la classe Banner */}
              <Banner info={this.state.info} />
              {/* Affichage de la classe Accommodation */}
              <Accommodation datas={this.state.datas} />
            </main>
        )
    };
};




