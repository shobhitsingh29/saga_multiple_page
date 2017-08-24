import React from "react";
import Home from "../components/home";
import * as stateActions from "../actions/actions.jsx";
import {connect} from "react-redux";
import {getDataToRender} from "../common/utils/utils";

const mapStateToProps = ({state}) => ({
    items: state.items,
    searchText: state.searchText,
    filteredItems: (searchString) => {
        return getDataToRender(searchString, state.items);
    }
});
const mapDispatchToProps = dispatch => ({
    showDetailsFunction: () => dispatch(stateActions.showDetailsFunction()),
    showSearchedDetailsFunction: (searchedData) => dispatch(stateActions.showSearchedDetailsFunction(searchedData)),
    clearSearchTextFunction: () => dispatch(stateActions.clearSearchTextFunction()),
    handleSearchText: (searchText) => dispatch(stateActions.searchTextFunction(searchText))
});
const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;