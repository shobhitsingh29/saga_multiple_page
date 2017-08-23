import React from 'react';
import * as action from '../src/js/actions/actions.jsx';
import * as actionTypes from '../src/js/actiontypes/actionTypes';
import {call, put} from 'redux-saga/effects';
import {getData, updateData} from '../src/js/common/api/api';
import * as sagas from '../src/js/sagas/saga.jsx';

describe('test', () => {
    it('loading saga', () => {
        const it = sagas.showDetailsAsync();
        expect(it.next().value).toEqual(call(getData));
        expect(it.next().value).toEqual(put({type: 'SHOW_DETAILS_ACTION', undefined}));
    })
});
describe('test', () => {
    it('loading filtered data', () => {
        const it = sagas.showFilteredDetailsAsync();
        expect(it.next().value).toEqual(call(getData));
        expect(it.next().value).toEqual(put({type: 'SHOW_FILTERED_DETAILS_ACTION', undefined}));
    })
});
describe('test', () => {
    it('filtered tile saga', () => {
        const it = sagas.updateSavedDetailsAsync({
            'id': '2', 'payload': {
                "name": "season123456",
                "description": "This is for season "
            }
        });
        expect(it.next().value).toEqual(call(updateData, '2', {
            "name": "season123456",
            "description": "This is for season "
        }));
        expect(it.next().value).toEqual(put({type: 'UPDATED_JSON_DATA_ACTION', undefined}));
    })
});
