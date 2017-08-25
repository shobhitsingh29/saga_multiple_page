import React from "react";
import HomeContainer from "./containers/homeContainer";
import DetailsContainer from "./containers/detailsContainer";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

export const App = () => (
  <Router >
    <Switch>
      <Redirect exact from='/' to='/home' />
      <Route path='/home/' component={HomeContainer} />
      <Route path='/search/:searchString' component={HomeContainer} />
      <Route path='/detailsContainer/:id' component={DetailsContainer} />
    </Switch>
  </Router>
);

export default App;
