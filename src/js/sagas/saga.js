import React from "react";
import {delay} from "redux-saga";
import {call,put,takeEvery,all} from "redux-saga/effects";
import * as actionTypes from "../actiontypes/actionTypes";

import {getData} from "../api/api.js";

export function* showDetailsAsync(){

    const items=yield call(getData);
    yield put({type:"SHOW_DETAILS_ACTION",items});
}

export function* showDetailsWatch(){
    yield takeEvery(actionTypes.SHOW_DETAILS,showDetailsAsync);
}

export function* saveEditDetailsAsync(){
    yield put({type:"SAVE_EDIT_DETAILS_ACTION",text});
}

export function* saveEditDetailsWatch(){
    yield takeEvery(actionTypes.SAVE_EDIT_DETAILS,saveEditDetailsAsync);
}

export function* searchTextAsync(){
    yield put({type:"SEARCH_TEXT_ACTION",text});
}

export function* searchTextWatch(){
    yield takeEvery(actionTypes.SEARCH_TEXT,searchTextAsync);
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([  showDetailsWatch(),saveEditDetailsWatch()
    ]);
}