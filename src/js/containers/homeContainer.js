import React from "react";
import Home from "../components/home";

import * as stateActions from "../actions/actions.js";
import PropTypes from "prop-types";
import {connect} from "react-redux";


const mapStateToProps = ({state}) => ({
    items: state.items,
    searchText:state.searchText
});

const mapDispatchToProps = dispatch => ({
    showDetailsFunction: () => dispatch(stateActions.showDetailsFunction()),
    handleSearchText:(searchText)=>dispatch(stateActions.searchTextFunction(searchText))

});

const HomeContainer=connect(mapStateToProps,mapDispatchToProps)(Home);

export default HomeContainer;