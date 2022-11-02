import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import NoMatch from "./Components/NoMatch";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AccommodationPage from "./Components/AccommodationPage";


// Construction et export de la classe RouteConfig
export default class RouteConfig extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Header />
                    <Switch>
                        {/* Affichage de Home si l'URL ne pointe sur rien */}
                        <Route exact path="/">
                            <Home datas={this.props.datas}/>
                        </Route>
                        {/* Affichage de About si l'URL pointe sur /about */}
                        <Route path="/about">
                            <About />
                        </Route>
                        {/* Affichage de AccommodationPage si l'URL pointe sur /accommodation/:accommodationId */}
                        <Route path="/accommodation/:accommodationId">
                            <AccommodationPage datas={this.props.datas}/>
                        </Route>
                        {/* Affichage de Nomatch si l'URL ne pointe pas sur un chemin connu */}
                        <Route path="*">
                            <NoMatch />
                        </Route>
                        {/* Affichage de Nomatch si l'URL pointe sur /404 */}
                        <Route path="/404">
                            <NoMatch />
                        </Route>
                    </Switch>
                    <Footer />
                </Router>
            </div>
        );
    };
};

