import React, { Component } from "react";
import RouteConfig from "./Routes";
import './App.scss';


// Construction et export de la classe App
export default class App extends Component {
  constructor(props) {
    super(props);

    // Etats de la classe
    this.state = {
      datas: [],
      isLoading: false,
      error: null,
    };
  };

  // Récupération des données de l'API
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(`${process.env.PUBLIC_URL}/hotels.json`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong...');
        }
        })
      // Arrêt du chargement. Récupération des données si accès réussi, erreur sinon
      .then(data => this.setState({ datas: data, isLoading: false })) 
      .catch(error => this.setState({ error, isLoading: false }));
  };
  render() {
    
    // Message d'erreur dans la console si l'état est en "error"
    if (this.state.error) {
      console.log(this.state.error);
      return <p>{this.state.error.message}</p>;
    };
 
    // Loading screen si l'état est en "loading"
    if (this.state.isLoading) {
      return <p className="loading">Loading ...</p>;
    };

    // Accès aux données en fonction de l'URL"
    return (
      <RouteConfig datas={this.state.datas}/>
    )
      
    
  };
};







