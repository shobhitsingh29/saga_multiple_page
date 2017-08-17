import React from "react";
import Search from "../components/search";
import ItemsList from "./itemsList";
import utils from "../common/utils";
import Home from "../components/home";

import * as stateActions from "../actions/actions.js";
import PropTypes from "prop-types";
import {connect} from "react-redux";


const mapStateToProps = ({state}) => ({
    items: state.items
});

const mapDispatchToProps = dispatch => ({
    showDetailsFunction: () => dispatch(stateActions.showDetailsFunction())
});

const HomeContainer=connect(mapStateToProps,mapDispatchToProps)(Home);

export default HomeContainer;