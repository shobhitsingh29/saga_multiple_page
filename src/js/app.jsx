import React from "react";
import HomeContainer from "./containers/homeContainer";
import DetailsContainer from "./containers/detailsContainer";
import {BrowserRouter as Router, Route, Link, Switch, Redirect, browserHistory} from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Switch>
                    <Redirect exact from="/" to="/home"/>
                    <Route path="/home" component={HomeContainer}/>
                    <Route path="/search/:searchString" component={HomeContainer}/>
                    <Route path="/detailsContainer" component={DetailsContainer}/>
                </Switch>
            </Router>
        );
    }
}

export default App;