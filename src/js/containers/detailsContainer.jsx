import React from "react";
import Detail from "../components/details";
import {connect} from "react-redux";
import * as stateActions from "../actions/actions.jsx";

const mapStateToProps = ({state}) => ({
    edit: state.edit,
    items: state.items
});

const mapDispatchToProps = dispatch => ({
    editPopUpFunction: (edit) => dispatch(stateActions.editPopUpFunction(edit)),
    showFilteredDetailsFunction: () => dispatch(stateActions.showFilteredDetailsFunction()),
    upDateJsonDataFunction: (id, payload) => dispatch(stateActions.upDateJsonDataFunction(id, payload))

});

const DetailContainer = connect(mapStateToProps, mapDispatchToProps)(Detail);

export default DetailContainer;