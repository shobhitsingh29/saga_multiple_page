import React from "react";
import ItemsList from "../components/itemList";
import * as stateActions from "../actions/actions.js";
import PropTypes from "prop-types";

import {connect} from "react-redux";


const mapStateToProps = ({state}) => ({
    items: state.items,
    filteredItems:state.filteredItems
});

const mapDispatchToProps = dispatch => ({


});
const ItemsListContainer=connect(mapStateToProps,mapDispatchToProps)(ItemsList);

export default ItemsListContainer;