import React from 'react';
import renderer from 'react-test-renderer';
import * as actionTypes from '../src/js/actions/actions.js';
import * as types from '../src/js/actiontypes/actionTypes';


describe('actions', () => {
    it('should create an action for loading tiles', () => {
        const loadTiles = '';
        const expectedAction = {
            type: types.SHOW_DETAILS
        };
        expect(actionTypes.showDetailsFunction(loadTiles)).toEqual(expectedAction)
    })
});


describe('actions', () => {
    it('should create an action for searched data', () => {
        const searchedData = '';
        const expectedAction = {
            type: types.SHOW_SEARCHED_DETAILS,
            searchedData: searchedData
        };
        expect(actionTypes.showSearchedDetailsFunction(searchedData)).toEqual(expectedAction)
    })
});


describe('actions', () => {
    it('should create an action for deleteSearchTerm', () => {
        const deleteSearchTermTest = '';
        const expectedAction = {
            type: types.CLEAR_SEARCH_TEXT
        };
        expect(actionTypes.clearSearchTextFunction(deleteSearchTermTest)).toEqual(expectedAction)
    })
});

describe('actions', () => {
    it('should create an action for filtered details', () => {
        const expectedAction = {
            type: types.SHOW_FILTERED_DETAILS
        };
        expect(actionTypes.showFilteredDetailsFunction()).toEqual(expectedAction)
    })
});


describe('actions', () => {
    it('should create an action for searchTerm', () => {
        const searchTermTest = '';
        const expectedAction = {
            type: types.SEARCH_TEXT,
            searchText: searchTermTest
        };
        expect(actionTypes.searchTextFunction(searchTermTest)).toEqual(expectedAction)
    })
});


describe('actions', () => {
    it('should create an action for edit state for false', () => {
        const edit = false;
        const expectedAction = {
            type: types.EDIT_POPUP_STATE,
            edit: edit
        };
        expect(actionTypes.editPopUpFunction(edit)).toEqual(expectedAction)
    })
});

describe('actions', () => {
    it('should create an action for edit state for true', () => {
        const edit = true;
        const expectedAction = {
            type: types.EDIT_POPUP_STATE,
            edit: edit
        };
        expect(actionTypes.editPopUpFunction(edit)).toEqual(expectedAction)
    })
});

describe('actions', () => {
    it('should create an action for update json data from api', () => {
        const id ='';
        const payload ='';
        const expectedAction = {
            type: types.UPDATED_JSON_DATA,
            id: id,
            payload: payload
        };
        expect(actionTypes.upDateJsonDataFunction(id, payload)).toEqual(expectedAction)
    })
});