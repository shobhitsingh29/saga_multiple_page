import React from 'react';
import * as action from '../src/js/actions/actions.jsx';
import * as actionTypes from '../src/js/actiontypes/actionTypes';
import sagaHelper from 'redux-saga-testing';
import { call, put } from 'redux-saga/effects';
import {getData,getFilteredData,updateData} from '../src/js/common/api/api';
import * as sagas from '../src/js/sagas/saga.jsx';
describe('test', () => {
    it('loading saga', () => {
        const it = sagas.showDetailsWatch();
        expect(it.next().value).toEqual(call(getData));
        expect(it.next().value).toEqual(put({type: 'SHOW_DETAILS_ACTION', undefined}));
    })
});

describe('test', () => {
    it('filtered tile saga', () => {
        const it = sagas.updateSavedDetailsWatch({'id':'12'});
        expect(it.next().value).toEqual(call(getFilteredData,'12'));
        expect(it.next().value).toEqual(put({type:'FILTERED_TILE_TO_REDUCER', undefined}));
    })
});

describe('test', () => {
    it('updated json saga', () => {
        const it = sagas.watchSaveTileData({'id':'2','updatedObject':{}});
        expect(it.next().value).toEqual(call(updateData,'2',{}));
        expect(it.next().value).toEqual(put({type:'UPDATED_JSON_DATA',undefined}));
    })
});