import React from "react";
import {delay} from "redux-saga";
import {call,put,takeEvery,all} from "redux-saga/effects";
import * as actionTypes from "../actiontypes/actionTypes"

export function* helloSaga(){
    console.log("From Saga");
}

export function* incrementAsync(){
    yield call(delay, 1000)
    yield put({type:actionTypes.INCREMENT_COUNTER})
}

export function* watchIncrementAsync(){
    yield takeEvery(actionTypes.INCREMENT_COUNTER_ASYNC,incrementAsync)
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([  helloSaga,
        watchIncrementAsync()
    ])
}