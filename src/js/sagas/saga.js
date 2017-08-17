import React from "react";
import {delay} from "redux-saga";
import {call,put,takeEvery,all} from "redux-saga/effects";
import * as actionTypes from "../actiontypes/actionTypes";
import {showDetailsFunction} from "../actions/actions";

import {getData} from "../api/api.js";

export function* showDetailsAsync(){

    const items=yield call(getData);
    yield put({type:"SHOW_DETAILS_ACTION",items});
}

export function* showDetailsWatch(){
    yield takeEvery(actionTypes.SHOW_DETAILS,showDetailsAsync);
}
/*
export function* editDetails(){
    yield put({type:actionTypes.EDIT_DETAILS});
}
export function* editDetailsWatch(){
    yield takeEvery(actionTypes.EDIT_DETAILS,editDetails);
}*/

// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([  showDetailsWatch()
    ]);
}