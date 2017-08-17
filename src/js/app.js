import React from "react";
import Home from "./containers/home";
import DetailsContainer from "./containers/detailsContainer";

import {BrowserRouter as Router, Route, Link, Switch, Redirect, browserHistory} from "react-router-dom";

class App extends React.Component {
    componentDidMount() {
    }
    render() {
        return (
            <Router history={browserHistory} >
                <Switch>
                    <Redirect exact from="/" to="/home"/>
                    <Route  path="/home" component={Home}/>
                    <Route  path="/search" component={Home}/>
                    <Route  path="/detailsContainer" component={DetailsContainer}/>
                </Switch>
            </Router>
        );
    }
}
export default App;