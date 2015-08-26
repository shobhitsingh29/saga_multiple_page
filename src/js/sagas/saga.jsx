import { call, put, takeEvery, all } from 'redux-saga/effects';
import * as actionTypes from '../actiontypes/actionTypes';

import { getData, updateData } from '../common/api/api.jsx';

export function* showDetailsAsync() {

    const items = yield call(getData);
    yield put({ type: actionTypes.SHOW_DETAILS_ACTION, items });
}

export function* showDetailsWatch() {
    yield takeEvery(actionTypes.SHOW_DETAILS, showDetailsAsync);
}

export function* showFilteredDetailsAsync() {
    const items = yield call(getData);
    yield put({ type: actionTypes.SHOW_FILTERED_DETAILS_ACTION, items });
}

export function* showFilteredDetailsWatch() {
    yield takeEvery(actionTypes.SHOW_FILTERED_DETAILS, showFilteredDetailsAsync);
}

export function* updateSavedDetailsAsync(action) {
    const items = yield call(updateData, action.id, action.payload);
    yield put({ type: actionTypes.UPDATED_JSON_DATA_ACTION, items });
}

export function* updateSavedDetailsWatch() {
    yield takeEvery(actionTypes.UPDATED_JSON_DATA, updateSavedDetailsAsync);
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([showDetailsWatch(), updateSavedDetailsWatch(), showFilteredDetailsWatch(),
    ]);
}
